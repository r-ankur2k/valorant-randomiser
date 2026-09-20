# 🎯 Valorant Randomiser - Project Status & Roadmap

---

## 📋 Overview of What Has Been Done

### 1. 🎯 Core Randomiser Features
- **Agent Randomiser**: Complete database of all 27+ Valorant Agents (Jett, Reyna, Clove, Iso, Fade, Vyse, Tejo, Miks, Waylay, Veto, etc.) filterable by Role (*Duelist, Initiator, Controller, Sentinel*).
- **Weapon Randomiser**: All guns & melee weapon options, filterable by Category (*Sidearms, SMGs, Shotguns, Rifles, Snipers, Heavy, Melee*).
- **Tactical Challenges**: 15 simple, engaging, and realistic strat roulettes (*e.g., Sheriff Only, Shotgun Party, Ghost Protocol, Protect the VIP, Buddy System, Full Site Rush, Scavenger*).
- **Squad Stack Generator**: Flexible 2-5 player team randomizer (Duo, Trio, Quad, or Full 5-Stack) with dynamic player card slots and assigned roles.

---

## ⚡ Core Engine & Features
- **4-Spin Anti-Repeat Engine**: Smart queue-based memory algorithm (`pickRandomNonRepeat`) ensuring that recently selected Agents, Weapons, Challenges, or Squad members won't repeat for **4 consecutive spins** (with dynamic fallback for smaller/filtered pools).
- **Interactive Canvas Spin Wheel**: 360° HTML5 Canvas Spin Wheel with smooth ease-out physics, pointer tick animations, and a single clean `⚡ SPIN` action button.
- **Synthesized SFX Engine**: Pure Web Audio API audio synthesizer generating tick sound effects during spin deceleration and victory fanfares without external audio file dependencies.
- **Filter Pool / Exclude Modal**: Interactive modal dialog allowing players to toggle off agents or weapons they don't own or prefer to skip.
- **Spin History**: Session history log displaying recent spin results with a single-click clear option.

---

## 🎨 UI & UX Polish
- **Agent & Weapon Visual Assets**: High-resolution official Valorant API display icons and head portraits integrated across Result Reveal cards, Squad Stack player cards, and Spin History.
- **Single Canvas Wheel Engine**: Streamlined layout featuring 4 core tabs (*Agent Spin, Weapon Spin, Challenges, Squad Stack*) driven entirely by the responsive Canvas Spin Wheel.
- **Dynamic Squad Size Selector**: Instant switching between 2 (Duo), 3 (Trio), 4 (Quad), and 5 (Full) player squad stack modes.
- **Full Mobile Responsiveness**:
  - Touch-friendly horizontal scrollbar for navigation tabs.
  - Responsive spin wheel scaling (`min(440px, 85vw)`), fitting screens down to 360px width.
  - Responsive Squad Stack grid that stacks smoothly on small screens.
- **Tactical Valorant Theme**: Dark HUD palette featuring Valorant Crimson (`#FF4655`), Dark Navy (`#0F1923`), Gold (`#E2B659`), styled clip-path angled buttons, and subtle tactical background grid patterns.

---

## 🔮 Planned Improvements & Ideas

### ✏️ 1. Custom Challenge Creator & Manager
- Allow players to create, edit, and delete their own custom challenges/rules.
- Save custom challenges locally in browser `localStorage` so they persist between sessions.

### 💾 2. Persistent Settings (LocalStorage)
- Save user preferences across browser sessions:
  - SFX ON/OFF state.
  - Excluded Agents & Weapons list.
  - Selected Squad Size (2–5 players).

### 🔊 3. Enhanced Audio & Synthesizer Presets
- Add custom Web Audio synthesizer presets (e.g. mechanical ticks, laser sounds).
- Audio cues announcing winning picks.
