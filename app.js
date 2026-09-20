/*
  VALORANT RANDOMISER - APPLICATION SCRIPT
  Canvas Wheel, Slot Reel, Web Audio Synthesizer, & State Management
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT ---
    const state = {
        currentTab: 'agents', // 'agents' | 'weapons' | 'challenges' | 'team'
        spinMode: 'wheel', // 'wheel' | 'slot'
        activeFilter: 'all',
        soundEnabled: true,
        isSpinning: false,
        excludedIds: new Set(),
        history: [],
        squadSize: 5,

        // Recent History Buffer for 4-Spin Anti-Repeat Engine
        recentHistory: {
            agents: [],
            weapons: [],
            challenges: [],
            team: []
        },

        // Wheel Physics
        wheelAngle: 0,
        wheelVelocity: 0,
        lastTickAngle: 0,
        animFrameId: null
    };

    // --- AUDIO SYSTEM (Web Audio API Synthesizer) ---
    class SoundManager {
        constructor() {
            this.ctx = null;
        }

        init() {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) this.ctx = new AudioCtx();
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }

        playTick() {
            if (!state.soundEnabled) return;
            this.init();
            if (!this.ctx) return;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.03);

            gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.03);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.03);
        }

        playWin() {
            if (!state.soundEnabled) return;
            this.init();
            if (!this.ctx) return;

            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.value = freq;

                const startTime = this.ctx.currentTime + idx * 0.08;
                gain.gain.setValueAtTime(0, startTime);
                gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(startTime);
                osc.stop(startTime + 0.35);
            });
        }
    }

    const soundManager = new SoundManager();

    // --- DOM ELEMENTS ---
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const spinBtn = document.getElementById('spinBtn');
    const soundToggleBtn = document.getElementById('soundToggle');
    const excludeBtn = document.getElementById('excludeBtn');
    const filterContainer = document.getElementById('filterContainer');
    const tabBtns = document.querySelectorAll('.nav-tab');
    const wheelStage = document.getElementById('wheelStage');
    const resultDisplay = document.getElementById('resultDisplay');
    const historyList = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const teamGrid = document.getElementById('teamGrid');
    const teamCardsGrid = document.getElementById('teamCardsGrid');
    const squadSizeBtns = document.querySelectorAll('.squad-size-btn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');

    // --- NON-REPEAT RANDOM SELECTION ENGINE ---
    // Excludes items selected within the last memoryLimit (4) spins per category
    function pickRandomNonRepeat(items, poolKey = 'general', memoryLimit = 4) {
        if (!items || items.length === 0) return null;
        if (items.length === 1) return items[0];

        if (!state.recentHistory[poolKey]) {
            state.recentHistory[poolKey] = [];
        }

        const recentList = state.recentHistory[poolKey];

        // Gracefully handle small pools by gradually reducing memory limit if needed
        let effectiveLimit = Math.min(memoryLimit, items.length - 1);
        let candidates = [];

        while (effectiveLimit >= 0) {
            const recentSubList = recentList.slice(Math.max(0, recentList.length - effectiveLimit));
            candidates = items.filter(item => !recentSubList.includes(item.id));
            if (candidates.length > 0) break;
            effectiveLimit--;
        }

        if (candidates.length === 0) {
            candidates = items;
        }

        const selected = candidates[Math.floor(Math.random() * candidates.length)];

        // Record in recent history queue
        recentList.push(selected.id);
        if (recentList.length > memoryLimit) {
            recentList.shift();
        }

        return selected;
    }

    // --- DATA HELPER FUNCTIONS ---
    function getActiveItems() {
        let items = [];
        if (state.currentTab === 'agents') {
            items = VALORANT_AGENTS;
            if (state.activeFilter !== 'all') {
                items = items.filter(a => a.role.toLowerCase() === state.activeFilter.toLowerCase());
            }
        } else if (state.currentTab === 'weapons') {
            items = VALORANT_WEAPONS;
            if (state.activeFilter !== 'all') {
                items = items.filter(w => w.category.toLowerCase() === state.activeFilter.toLowerCase());
            }
        } else if (state.currentTab === 'challenges') {
            items = STRAT_CHALLENGES;
            if (state.activeFilter !== 'all') {
                items = items.filter(c => c.type.toLowerCase() === state.activeFilter.toLowerCase());
            }
        }
        return items.filter(item => !state.excludedIds.has(item.id));
    }

    // --- RENDER FILTERS ---
    function renderFilters() {
        filterContainer.innerHTML = '';
        let filters = ['all'];

        if (state.currentTab === 'agents') {
            filters = ['all', 'duelist', 'initiator', 'controller', 'sentinel'];
        } else if (state.currentTab === 'weapons') {
            filters = ['all', 'sidearms', 'smgs', 'shotguns', 'rifles', 'snipers', 'heavy', 'melee'];
        } else if (state.currentTab === 'challenges') {
            filters = ['all', 'economy', 'combat', 'movement', 'precision', 'tactical'];
        } else {
            filterContainer.style.display = 'none';
            return;
        }

        filterContainer.style.display = 'flex';
        filters.forEach(filter => {
            const btn = document.createElement('button');
            btn.className = `filter-chip ${state.activeFilter === filter ? 'active' : ''}`;
            btn.textContent = filter;
            btn.addEventListener('click', () => {
                if (state.isSpinning) return;
                state.activeFilter = filter;
                soundManager.playTick();
                renderFilters();
                drawWheel();
            });
            filterContainer.appendChild(btn);
        });
    }

    // --- CANVAS WHEEL DRAWING ---
    function drawWheel() {
        if (!ctx || !canvas) return;

        const items = getActiveItems();
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = width / 2 - 10;

        ctx.clearRect(0, 0, width, height);

        if (items.length === 0) {
            ctx.fillStyle = '#17212B';
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = '#8B97A5';
            ctx.font = '20px "Share Tech Mono"';
            ctx.textAlign = 'center';
            ctx.fillText('NO ITEMS AVAILABLE', centerX, centerY);
            return;
        }

        const sliceAngle = (2 * Math.PI) / items.length;

        items.forEach((item, index) => {
            const startAngle = state.wheelAngle + index * sliceAngle;
            const endAngle = startAngle + sliceAngle;

            // Background Slice
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();

            const sliceColor = item.color || (index % 2 === 0 ? '#17212B' : '#1F2C3A');
            ctx.fillStyle = sliceColor;
            ctx.fill();
            ctx.strokeStyle = 'rgba(15, 25, 35, 0.8)';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Text Label
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startAngle + sliceAngle / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#ECE8E1';
            ctx.font = 'bold 18px "Teko"';
            ctx.shadowColor = 'rgba(0,0,0,0.8)';
            ctx.shadowBlur = 4;
            ctx.fillText(item.name.toUpperCase(), radius - 20, 6);
            ctx.restore();
        });

        // Outer Rim Glow
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#FF4655';
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    // --- SPIN LOGIC ---
    function spinWheel() {
        if (state.isSpinning) return;

        const items = getActiveItems();
        if (items.length === 0) return;

        soundManager.init();
        state.isSpinning = true;
        spinBtn.disabled = true;

        // Select winner using 4-spin anti-repeat randomizer engine
        const winner = pickRandomNonRepeat(items, state.currentTab, 4);

        const winningIndex = items.findIndex(item => item.id === winner.id);
        const sliceAngle = (2 * Math.PI) / items.length;

        // Pointer is at top center (3 * Math.PI / 2).
        // Calculate target final angle so pointer lands on center of winning slice.
        const targetFinalAngle = (3 * Math.PI / 2) - (winningIndex + 0.5) * sliceAngle;

        // Normalize current wheel angle to [0, 2*PI)
        let currentAngle = state.wheelAngle % (2 * Math.PI);
        if (currentAngle < 0) currentAngle += 2 * Math.PI;

        // Calculate rotation needed to reach target final angle modulo 2*PI
        let finalNormalized = targetFinalAngle % (2 * Math.PI);
        if (finalNormalized < 0) finalNormalized += 2 * Math.PI;

        let delta = finalNormalized - currentAngle;
        if (delta <= 0) delta += 2 * Math.PI;

        // 5 to 8 full spins before landing
        const fullSpins = (5 + Math.floor(Math.random() * 4)) * 2 * Math.PI;
        const totalDistance = fullSpins + delta;
        const startAngle = state.wheelAngle;
        let currentDistance = 0;
        const duration = 4500; // ms
        const startTime = performance.now();

        state.lastTickAngle = state.wheelAngle;

        function animateWheel(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quintic for dramatic slowing
            const easeOut = 1 - Math.pow(1 - progress, 5);
            const currentAngleOffset = totalDistance * easeOut;

            state.wheelAngle = startAngle + currentAngleOffset;
            currentDistance = currentAngleOffset;

            // Detect Pointer Edge Crossing for Sound Ticks
            const currentSliceIndex = Math.floor((2 * Math.PI - (state.wheelAngle % (2 * Math.PI))) / sliceAngle) % items.length;
            const lastSliceIndex = Math.floor((2 * Math.PI - (state.lastTickAngle % (2 * Math.PI))) / sliceAngle) % items.length;

            if (currentSliceIndex !== lastSliceIndex) {
                soundManager.playTick();
                const pointer = document.querySelector('.wheel-pointer');
                if (pointer) {
                    pointer.classList.add('tick');
                    setTimeout(() => pointer.classList.remove('tick'), 40);
                }
            }
            state.lastTickAngle = state.wheelAngle;

            drawWheel();

            if (progress < 1) {
                state.animFrameId = requestAnimationFrame(animateWheel);
            } else {
                state.isSpinning = false;
                spinBtn.disabled = false;

                soundManager.playWin();
                displayResult(winner);
                addToHistory(winner);
            }
        }

        requestAnimationFrame(animateWheel);
    }

    // --- DISPLAY WINNING RESULT ---
    function displayResult(item) {
        if (!item) return;

        let html = '';
        if (state.currentTab === 'agents') {
            html = `
                <div class="result-badge" style="border-color: ${item.color}">
                    <div style="font-family: var(--font-display); font-size: 2.2rem; color: ${item.color}">${item.name[0]}</div>
                </div>
                <div class="result-title">${item.name}</div>
                <div class="result-subtitle" style="color: ${item.color}">${item.role} • ${item.origin}</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted); margin: 6px 0;">"${item.tagline}"</div>
                <div class="result-stats-grid">
                    <div class="stat-box">
                        <div class="stat-label">SIGNATURE</div>
                        <div class="stat-value">${item.signature}</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">ULTIMATE</div>
                        <div class="stat-value">${item.ultimate}</div>
                    </div>
                </div>
            `;
        } else if (state.currentTab === 'weapons') {
            html = `
                <div class="result-badge" style="border-color: ${item.color}">
                    <div style="font-family: var(--font-display); font-size: 1.8rem; color: ${item.color}">$${item.cost}</div>
                </div>
                <div class="result-title">${item.name}</div>
                <div class="result-subtitle" style="color: ${item.color}">${item.category} • COST: ${item.cost} CREDITS</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted); margin: 6px 0;">${item.desc}</div>
                <div class="result-stats-grid">
                    <div class="stat-box">
                        <div class="stat-label">HEAD DAMAGE</div>
                        <div class="stat-value text-red">${item.headDamage} DMG</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">FIRE RATE</div>
                        <div class="stat-value">${item.fireRate}</div>
                    </div>
                </div>
            `;
        } else if (state.currentTab === 'challenges') {
            html = `
                <div class="result-badge" style="border-color: ${item.color}">
                    <div style="font-family: var(--font-display); font-size: 2.2rem; color: ${item.color}">⚡</div>
                </div>
                <div class="result-title text-gold">${item.name}</div>
                <div class="result-subtitle" style="color: ${item.color}">CHALLENGE MODE • ${item.type.toUpperCase()}</div>
                <div style="font-size: 1rem; color: var(--color-text-main); margin: 12px 0; font-weight: 600;">${item.desc}</div>
                <div class="stat-box" style="width: 100%;">
                    <div class="stat-label">RULE DIRECTIVE</div>
                    <div class="stat-value text-gold">Must be followed for the entire round / match!</div>
                </div>
            `;
        }

        resultDisplay.innerHTML = html;
    }

    // --- SQUAD SIZE SELECTOR & DEFAULT GRID RENDER ---
    function renderDefaultTeamGrid() {
        if (!teamCardsGrid) return;
        const count = state.squadSize || 5;
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(`
                <div class="team-member-card">
                    <div class="team-player-label">PLAYER ${i + 1}</div>
                    <div class="team-agent-name">???</div>
                </div>
            `);
        }
        teamCardsGrid.innerHTML = cards.join('');
    }

    squadSizeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const size = parseInt(e.currentTarget.dataset.size, 10);
            if (!size || state.isSpinning) return;
            state.squadSize = size;
            squadSizeBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderDefaultTeamGrid();
        });
    });

    // --- SPIN SQUAD STACK BUILDER ---
    function spinTeam() {
        if (state.isSpinning) return;
        state.isSpinning = true;
        spinBtn.disabled = true;

        soundManager.init();
        soundManager.playTick();

        const activeAgents = VALORANT_AGENTS.filter(a => !state.excludedIds.has(a.id));
        const team = [];
        const usedInTeam = new Set();
        const squadSize = state.squadSize || 5;

        for (let p = 0; p < squadSize; p++) {
            const pool = activeAgents.filter(a => !usedInTeam.has(a.id));
            const picked = pickRandomNonRepeat(pool, 'team', 4);
            if (picked) {
                team.push(picked);
                usedInTeam.add(picked.id);
            }
        }

        let ticks = 0;
        const interval = setInterval(() => {
            soundManager.playTick();
            ticks++;
            if (ticks > 15) {
                clearInterval(interval);
                state.isSpinning = false;
                spinBtn.disabled = false;
                soundManager.playWin();

                const targetGrid = teamCardsGrid || teamGrid;
                targetGrid.innerHTML = team.map((agent, i) => `
                    <div class="team-member-card">
                        <div class="team-player-label">PLAYER ${i + 1}</div>
                        <div class="team-agent-name" style="color: ${agent.color}">${agent.name}</div>
                        <div class="team-agent-role">${agent.role}</div>
                    </div>
                `).join('');

                addToHistory({ name: `Squad (${squadSize}): ${team.map(a => a.name).join(', ')}`, role: `${squadSize}-Player Stack` });
            }
        }, 100);
    }

    // --- HISTORY MANAGER ---
    function addToHistory(item) {
        state.history.unshift(item);
        if (state.history.length > 10) state.history.pop();
        renderHistory();
    }

    function renderHistory() {
        if (!historyList) return;
        historyList.innerHTML = state.history.map(item => `
            <div class="history-item">
                <span class="history-item-name">${item.name}</span>
                <span class="history-item-tag">${item.role || item.category || item.type || ''}</span>
            </div>
        `).join('');
    }

    // --- EXCLUDE MODAL DIALOG ---
    function openExcludeModal() {
        let items = VALORANT_AGENTS;
        if (state.currentTab === 'weapons') items = VALORANT_WEAPONS;
        if (state.currentTab === 'challenges') items = STRAT_CHALLENGES;

        let html = `
            <h2 style="font-family: var(--font-display); font-size: 2rem; color: #FFF; margin-bottom: 14px;">EXCLUDE ITEMS</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 8px; max-height: 340px; overflow-y: auto; padding-right: 6px;">
        `;

        items.forEach(item => {
            const isExcluded = state.excludedIds.has(item.id);
            html += `
                <label style="display: flex; align-items: center; gap: 8px; background: rgba(15,25,35,0.7); padding: 8px; clip-path: var(--clip-angle-sm); cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" ${!isExcluded ? 'checked' : ''}>
                    <span style="font-family: var(--font-mono); font-size: 0.85rem; color: #FFF">${item.name}</span>
                </label>
            `;
        });

        html += `</div>`;
        modalContent.innerHTML = html;
        modalOverlay.classList.add('active');

        modalContent.querySelectorAll('input[type="checkbox"]').forEach(box => {
            box.addEventListener('change', (e) => {
                const id = e.target.getAttribute('data-id');
                if (!e.target.checked) {
                    state.excludedIds.add(id);
                } else {
                    state.excludedIds.delete(id);
                }
                drawWheel();
            });
        });
    }

    // --- EVENT LISTENERS ---
    tabBtns.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.currentTarget.getAttribute('data-tab');
            if (state.currentTab === targetTab || state.isSpinning) return;

            tabBtns.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');

            state.currentTab = targetTab;
            state.activeFilter = 'all';
            soundManager.playTick();

            // Toggle UI View Layouts
            if (targetTab === 'team') {
                wheelStage.classList.add('hidden');
                teamGrid.classList.remove('hidden');
            } else {
                teamGrid.classList.add('hidden');
                wheelStage.classList.remove('hidden');
            }

            renderFilters();
            drawWheel();
        });
    });

    spinBtn.addEventListener('click', () => {
        if (state.currentTab === 'team') {
            spinTeam();
        } else {
            spinWheel();
        }
    });

    soundToggleBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        soundToggleBtn.textContent = state.soundEnabled ? '🔊 SFX ON' : '🔇 SFX OFF';
        soundToggleBtn.classList.toggle('active', state.soundEnabled);
    });

    excludeBtn.addEventListener('click', openExcludeModal);
    modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
    clearHistoryBtn.addEventListener('click', () => {
        state.history = [];
        renderHistory();
    });

    // INIT APP
    renderFilters();
    drawWheel();
    renderDefaultTeamGrid();
});
