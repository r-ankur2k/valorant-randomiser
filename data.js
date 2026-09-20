// Valorant Data - Agents & Weapons Database

const VALORANT_AGENTS = [
    // Duelists
    {
        id: 'jett',
        name: 'Jett',
        role: 'Duelist',
        origin: 'South Korea',
        tagline: 'Representing her home country of South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can.',
        signature: 'Tailwind (Dash)',
        ultimate: 'Blade Storm',
        color: '#FF4655'
    },
    {
        id: 'reyna',
        name: 'Reyna',
        role: 'Duelist',
        origin: 'Mexico',
        tagline: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with every kill she scores.',
        signature: 'Devour / Dismiss',
        ultimate: 'Empress',
        color: '#FF4655'
    },
    {
        id: 'phoenix',
        name: 'Phoenix',
        role: 'Duelist',
        origin: 'United Kingdom',
        tagline: 'Hailing from the U.K., Phoenix\'s star power shines through in his fighting style, igniting the battlefield with flash and flare.',
        signature: 'Hot Hands',
        ultimate: 'Run It Back',
        color: '#FF4655'
    },
    {
        id: 'raze',
        name: 'Raze',
        role: 'Duelist',
        origin: 'Brazil',
        tagline: 'Raze explodes out of Brazil with her big personality and big guns. With her playstyle of blunt-force trauma, she excels at clearing tight spaces.',
        signature: 'Paint Shells',
        ultimate: 'Showstopper',
        color: '#FF4655'
    },
    {
        id: 'yoru',
        name: 'Yoru',
        role: 'Duelist',
        origin: 'Japan',
        tagline: 'Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen.',
        signature: 'Gatecrash',
        ultimate: 'Dimensional Drift',
        color: '#FF4655'
    },
    {
        id: 'neon',
        name: 'Neon',
        role: 'Duelist',
        origin: 'Philippines',
        tagline: 'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bio-electric radiance.',
        signature: 'High Gear',
        ultimate: 'Overdrive',
        color: '#FF4655'
    },
    {
        id: 'iso',
        name: 'Iso',
        role: 'Duelist',
        origin: 'China',
        tagline: 'Chinese fixer for hire Iso pulls ambient energy into bulletproof protection and challenges rivals to 1v1 duels.',
        signature: 'Double Tap',
        ultimate: 'Kill Contract',
        color: '#FF4655'
    },

    // Initiators
    {
        id: 'sova',
        name: 'Sova',
        role: 'Initiator',
        origin: 'Russia',
        tagline: 'Born from the eternal winter of Russia\'s tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency.',
        signature: 'Recon Bolt',
        ultimate: 'Hunter\'s Fury',
        color: '#36B5FF'
    },
    {
        id: 'fade',
        name: 'Fade',
        role: 'Initiator',
        origin: 'Turkey',
        tagline: 'Turkish bounty hunter Fade unleashes the power of raw nightmares to seize enemy secrets.',
        signature: 'Haunt',
        ultimate: 'Nightfall',
        color: '#36B5FF'
    },
    {
        id: 'breach',
        name: 'Breach',
        role: 'Initiator',
        origin: 'Sweden',
        tagline: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground.',
        signature: 'Fault Line',
        ultimate: 'Rolling Thunder',
        color: '#36B5FF'
    },
    {
        id: 'kayo',
        name: 'KAY/O',
        role: 'Initiator',
        origin: 'Alternate Timeline',
        tagline: 'KAY/O is a machine of war built for a single purpose: neutralizing radiants.',
        signature: 'ZERO/POINT',
        ultimate: 'NULL/cmd',
        color: '#36B5FF'
    },
    {
        id: 'gekko',
        name: 'Gekko',
        role: 'Initiator',
        origin: 'USA',
        tagline: 'Gekko the Angeleno leads a tight-knit crew of calamitous creatures to gather intel and disrupt defenders.',
        signature: 'Dizzy',
        ultimate: 'Thrash',
        color: '#36B5FF'
    },
    {
        id: 'skye',
        name: 'Skye',
        role: 'Initiator',
        origin: 'Australia',
        tagline: 'Hailing from Australia, Skye and her band of beasts trail-blaze their way through hostile territory.',
        signature: 'Guiding Light',
        ultimate: 'Seekers',
        color: '#36B5FF'
    },

    // Controllers
    {
        id: 'omen',
        name: 'Omen',
        role: 'Controller',
        origin: 'Unknown',
        tagline: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the battlefield, and lets paranoia take hold.',
        signature: 'Dark Cover',
        ultimate: 'From the Shadows',
        color: '#9055FF'
    },
    {
        id: 'brimstone',
        name: 'Brimstone',
        role: 'Controller',
        origin: 'USA',
        tagline: 'Joining from the U.S.A., Brimstone\'s orbital arsenal ensures his squad always has the advantage.',
        signature: 'Sky Smoke',
        ultimate: 'Orbital Strike',
        color: '#9055FF'
    },
    {
        id: 'viper',
        name: 'Viper',
        role: 'Controller',
        origin: 'USA',
        tagline: 'The American chemist Viper deploys an array of poisonous chemical devices to control the battlefield and cripple enemy vision.',
        signature: 'Toxic Screen',
        ultimate: 'Viper\'s Pit',
        color: '#9055FF'
    },
    {
        id: 'astra',
        name: 'Astra',
        role: 'Controller',
        origin: 'Ghana',
        tagline: 'Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim.',
        signature: 'Nebula / Dissipate',
        ultimate: 'Cosmic Divide',
        color: '#9055FF'
    },
    {
        id: 'harbor',
        name: 'Harbor',
        role: 'Controller',
        origin: 'India',
        tagline: 'Hailing from India\'s coast, Harbor commands ancient technology with the power of water to shield allies and crush foes.',
        signature: 'High Tide',
        ultimate: 'Reckoning',
        color: '#9055FF'
    },
    {
        id: 'clove',
        name: 'Clove',
        role: 'Controller',
        origin: 'Scotland',
        tagline: 'Scottish troublemaker Clove keeps enemies guessing both in life and beyond the grave.',
        signature: 'Ruse (Smoke)',
        ultimate: 'Not Dead Yet',
        color: '#9055FF'
    },

    // Sentinels
    {
        id: 'killjoy',
        name: 'Killjoy',
        role: 'Sentinel',
        origin: 'Germany',
        tagline: 'The genius of Germany, Killjoy secures the battlefield ease with her arsenal of inventions.',
        signature: 'Turret',
        ultimate: 'Lockdown',
        color: '#46E6A3'
    },
    {
        id: 'cypher',
        name: 'Cypher',
        role: 'Sentinel',
        origin: 'Morocco',
        tagline: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy\'s every move.',
        signature: 'Spycam',
        ultimate: 'Neural Theft',
        color: '#46E6A3'
    },
    {
        id: 'sage',
        name: 'Sage',
        role: 'Sentinel',
        origin: 'China',
        tagline: 'The stronghold of China, Sage creates safety for herself and her team wherever she goes.',
        signature: 'Healing Orb',
        ultimate: 'Resurrection',
        color: '#46E6A3'
    },
    {
        id: 'chamber',
        name: 'Chamber',
        role: 'Sentinel',
        origin: 'France',
        tagline: 'Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision.',
        signature: 'Rendezvous (Teleport)',
        ultimate: 'Tour De Force',
        color: '#46E6A3'
    },
    {
        id: 'deadlock',
        name: 'Deadlock',
        role: 'Sentinel',
        origin: 'Norway',
        tagline: 'Norwegian operative Deadlock deploys an array of cutting-edge nanowire tech to secure the battlefield.',
        signature: 'Barrier Mesh',
        ultimate: 'Annihilation',
        color: '#46E6A3'
    },
    {
        id: 'vyse',
        name: 'Vyse',
        role: 'Sentinel',
        origin: 'Unknown',
        tagline: 'Metallic mastermind Vyse manipulates liquid metal to trap, disarm, and isolate prey.',
        signature: 'Shear / Arc Rose',
        ultimate: 'Steel Garden',
        color: '#46E6A3'
    }
];

const VALORANT_WEAPONS = [
    // Sidearms
    {
        id: 'classic',
        name: 'Classic',
        category: 'Sidearms',
        cost: 0,
        fireRate: '6.75 rds/sec',
        headDamage: 78,
        bodyDamage: 26,
        legDamage: 22,
        magazine: 12,
        desc: 'Standard issue sidearm with primary single-shot and secondary 3-round burst firing modes.',
        color: '#E2B659'
    },
    {
        id: 'shorty',
        name: 'Shorty',
        category: 'Sidearms',
        cost: 300,
        fireRate: '3.33 rds/sec',
        headDamage: 24,
        bodyDamage: 12,
        legDamage: 10,
        magazine: 2,
        desc: 'Ultra close-range double-barrel shotgun sidearm.',
        color: '#E2B659'
    },
    {
        id: 'frenzy',
        name: 'Frenzy',
        category: 'Sidearms',
        cost: 450,
        fireRate: '10 rds/sec',
        headDamage: 78,
        bodyDamage: 26,
        legDamage: 22,
        magazine: 13,
        desc: 'Lightweight full-auto machine pistol with rapid close-range DPS.',
        color: '#E2B659'
    },
    {
        id: 'ghost',
        name: 'Ghost',
        category: 'Sidearms',
        cost: 500,
        fireRate: '6.75 rds/sec',
        headDamage: 105,
        bodyDamage: 30,
        legDamage: 25,
        magazine: 15,
        desc: 'Silenced precision sidearm effective at medium range with high one-shot headshot potential on eco.',
        color: '#E2B659'
    },
    {
        id: 'sheriff',
        name: 'Sheriff',
        category: 'Sidearms',
        cost: 800,
        fireRate: '4 rds/sec',
        headDamage: 159,
        bodyDamage: 55,
        legDamage: 47,
        magazine: 6,
        desc: 'High-caliber revolver capable of instantly eliminating enemies with a headshot up to 30 meters.',
        color: '#E2B659'
    },

    // SMGs
    {
        id: 'stinger',
        name: 'Stinger',
        category: 'SMGs',
        cost: 1100,
        fireRate: '16 rds/sec',
        headDamage: 67,
        bodyDamage: 27,
        legDamage: 23,
        magazine: 20,
        desc: 'Blistering fire rate submachine gun built for aggressive close-quarters run-and-gun combat.',
        color: '#36B5FF'
    },
    {
        id: 'spectre',
        name: 'Spectre',
        category: 'SMGs',
        cost: 1600,
        fireRate: '13.3 rds/sec',
        headDamage: 78,
        bodyDamage: 26,
        legDamage: 22,
        magazine: 30,
        desc: 'Versatile silenced SMG with controllable recoil and excellent mobility.',
        color: '#36B5FF'
    },

    // Shotguns
    {
        id: 'bucky',
        name: 'Bucky',
        category: 'Shotguns',
        cost: 850,
        fireRate: '1.1 rds/sec',
        headDamage: 40,
        bodyDamage: 20,
        legDamage: 17,
        magazine: 5,
        desc: 'Pump-action shotgun equipped with alt-fire canister burst for mid-range control.',
        color: '#9055FF'
    },
    {
        id: 'judge',
        name: 'Judge',
        category: 'Shotguns',
        cost: 1850,
        fireRate: '3.5 rds/sec',
        headDamage: 34,
        bodyDamage: 17,
        legDamage: 14,
        magazine: 7,
        desc: 'Full-automatic shotgun capable of clearing tight corridors in seconds.',
        color: '#9055FF'
    },

    // Rifles
    {
        id: 'bulldog',
        name: 'Bulldog',
        category: 'Rifles',
        cost: 2050,
        fireRate: '10 rds/sec',
        headDamage: 115,
        bodyDamage: 35,
        legDamage: 30,
        magazine: 24,
        desc: 'Economical assault rifle featuring full-auto hip fire and 3-round burst ADS.',
        color: '#FF4655'
    },
    {
        id: 'guardian',
        name: 'Guardian',
        category: 'Rifles',
        cost: 2250,
        fireRate: '5.25 rds/sec',
        headDamage: 195,
        bodyDamage: 65,
        legDamage: 49,
        magazine: 12,
        desc: 'DMR designated marksman rifle dealing lethal headshot damage at any distance with heavy wall penetration.',
        color: '#FF4655'
    },
    {
        id: 'phantom',
        name: 'Phantom',
        category: 'Rifles',
        cost: 2900,
        fireRate: '11 rds/sec',
        headDamage: 156,
        bodyDamage: 39,
        legDamage: 33,
        magazine: 30,
        desc: 'Silenced full-auto assault rifle with high fire rate, zero bullet tracers, and forgiving recoil control.',
        color: '#FF4655'
    },
    {
        id: 'vandal',
        name: 'Vandal',
        category: 'Rifles',
        cost: 2900,
        fireRate: '9.75 rds/sec',
        headDamage: 160,
        bodyDamage: 40,
        legDamage: 34,
        magazine: 25,
        desc: 'Premier assault rifle boasting guaranteed one-shot headshot lethality at all ranges.',
        color: '#FF4655'
    },

    // Snipers
    {
        id: 'marshal',
        name: 'Marshal',
        category: 'Snipers',
        cost: 950,
        fireRate: '1.5 rds/sec',
        headDamage: 202,
        bodyDamage: 101,
        legDamage: 85,
        magazine: 5,
        desc: 'Lightweight lever-action sniper rifle with fast move speed and one-hit headshot kills.',
        color: '#46E6A3'
    },
    {
        id: 'outlaw',
        name: 'Outlaw',
        category: 'Snipers',
        cost: 2400,
        fireRate: '2.75 rds/sec',
        headDamage: 238,
        bodyDamage: 140,
        legDamage: 119,
        magazine: 2,
        desc: 'Double-barrel sniper rifle engineered to punish half-buys with 140 body damage.',
        color: '#46E6A3'
    },
    {
        id: 'operator',
        name: 'Operator',
        category: 'Snipers',
        cost: 4700,
        fireRate: '0.6 rds/sec',
        headDamage: 255,
        bodyDamage: 150,
        legDamage: 120,
        magazine: 5,
        desc: 'Dominant heavy bolt-action sniper rifle delivering instant 1-shot body kills.',
        color: '#46E6A3'
    },

    // Heavy
    {
        id: 'ares',
        name: 'Ares',
        category: 'Heavy',
        cost: 1600,
        fireRate: '13 rds/sec',
        headDamage: 72,
        bodyDamage: 30,
        legDamage: 25,
        magazine: 50,
        desc: 'High-capacity LMG with ramping fire rate and heavy wall penetration.',
        color: '#FFB800'
    },
    {
        id: 'odin',
        name: 'Odin',
        category: 'Heavy',
        cost: 3200,
        fireRate: '15 rds/sec',
        headDamage: 95,
        bodyDamage: 38,
        legDamage: 32,
        magazine: 100,
        desc: 'Monstrous 100-round machine gun for relentless suppressive wall-bang fire.',
        color: '#FFB800'
    },

    // Melee
    {
        id: 'melee',
        name: 'Tactical Knife',
        category: 'Melee',
        cost: 0,
        fireRate: '2.5 attacks/sec',
        headDamage: 150,
        bodyDamage: 75,
        legDamage: 50,
        magazine: 1,
        desc: 'Primary strike (50 dmg front / 100 back), Secondary heavy stab (75 front / 150 back).',
        color: '#FFFFFF'
    }
];

const VALORANT_ARMOR = [
    { name: 'Light Shield', cost: 400, hp: 25, desc: 'Blocks 66% of incoming damage up to 25 HP.' },
    { name: 'Heavy Shield', cost: 1000, hp: 50, desc: 'Blocks 66% of incoming damage up to 50 HP.' },
    { name: 'No Armor', cost: 0, hp: 0, desc: 'Eco mode: baseline 100 health.' }
];

const STRAT_CHALLENGES = [
    // Tactical & Fun Strats
    { id: 'c1', name: 'Sheriff Only', type: 'Economy', desc: 'Buy a Sheriff and click heads. No main rifles allowed!', color: '#E2B659' },
    { id: 'c2', name: 'Shotgun Party', type: 'Tactical', desc: 'Whole team buys Judge or Bucky and holds tight corners together.', color: '#FF4655' },
    { id: 'c3', name: 'Ghost Protocol', type: 'Economy', desc: 'Silenced weapons only! Use Ghost, Spectre, or Phantom.', color: '#E2B659' },
    { id: 'c4', name: 'Wallbang Warlords', type: 'Combat', desc: 'Buy Odin or Ares and spam every wall and smoke in sight!', color: '#FF4655' },
    { id: 'c5', name: 'Stinger Run & Gun', type: 'Combat', desc: 'Buy a Stinger, hold W, and never stop sprinting while shooting.', color: '#36B5FF' },
    { id: 'c6', name: 'Marshal One-Tap', type: 'Precision', desc: 'Lightweight sniper duty: Marshal only, aim for the head!', color: '#46E6A3' },
    { id: 'c7', name: 'The Scavenger', type: 'Economy', desc: 'Start with Classic ($0 buy). Steal guns off enemy bodies to upgrade!', color: '#E2B659' },
    { id: 'c8', name: 'Protect the VIP', type: 'Tactical', desc: 'Pick 1 player as the President. Everyone shields them at all costs!', color: '#9055FF' },
    { id: 'c9', name: 'Buddy System', type: 'Tactical', desc: 'Pair up with a teammate. You must stay within 5 meters of your buddy all round.', color: '#9055FF' },
    { id: 'c10', name: 'Full Site Rush', type: 'Movement', desc: '3... 2... 1... Hard rush one site together without stopping!', color: '#36B5FF' },
    { id: 'c11', name: 'No Reloading', type: 'Combat', desc: 'No pressing R! Use your magazine, then swap to sidearm when empty.', color: '#FF4655' },
    { id: 'c12', name: 'Sniper Squad', type: 'Precision', desc: 'Everyone buys a Sniper (Marshal, Outlaw, or Operator). Hold long angles!', color: '#46E6A3' },
    { id: 'c13', name: 'Utility Dump', type: 'Ability', desc: 'Unload all your abilities onto site within 15 seconds of round start.', color: '#9055FF' },
    { id: 'c14', name: 'Glass Cannon', type: 'Economy', desc: 'Buy the biggest gun you can afford, but 0 armor allowed!', color: '#FF4655' },
    { id: 'c15', name: 'Guardian Headshot Machine', type: 'Precision', desc: 'Buy Guardian only. Clean 1-taps only!', color: '#46E6A3' }
];
