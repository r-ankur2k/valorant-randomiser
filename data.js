// Valorant Data - Agents & Weapons Database

const VALORANT_AGENTS = [
    // Duelists
    {
        id: 'jett',
        name: 'Jett',
        icon: 'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png',
        role: 'Duelist',
        origin: 'South Korea',
        tagline: 'Representing her home country of South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can.',
        signature: 'Tailwind (Dash)',
        ultimate: 'Blade Storm',
        color: '#56E3E1'
    },
    {
        id: 'reyna',
        name: 'Reyna',
        icon: 'https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png',
        role: 'Duelist',
        origin: 'Mexico',
        tagline: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with every kill she scores.',
        signature: 'Devour / Dismiss',
        ultimate: 'Empress',
        color: '#A855F7'
    },
    {
        id: 'phoenix',
        name: 'Phoenix',
        icon: 'https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png',
        role: 'Duelist',
        origin: 'United Kingdom',
        tagline: 'Hailing from the U.K., Phoenix\'s star power shines through in his fighting style, igniting the battlefield with flash and flare.',
        signature: 'Hot Hands',
        ultimate: 'Run It Back',
        color: '#FF7700'
    },
    {
        id: 'raze',
        name: 'Raze',
        icon: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png',
        role: 'Duelist',
        origin: 'Brazil',
        tagline: 'Raze explodes out of Brazil with her big personality and big guns. With her playstyle of blunt-force trauma, she excels at clearing tight spaces.',
        signature: 'Paint Shells',
        ultimate: 'Showstopper',
        color: '#FF5500'
    },
    {
        id: 'yoru',
        name: 'Yoru',
        icon: 'https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png',
        role: 'Duelist',
        origin: 'Japan',
        tagline: 'Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen.',
        signature: 'Gatecrash',
        ultimate: 'Dimensional Drift',
        color: '#3B82F6'
    },
    {
        id: 'neon',
        name: 'Neon',
        icon: 'https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png',
        role: 'Duelist',
        origin: 'Philippines',
        tagline: 'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bio-electric radiance.',
        signature: 'High Gear',
        ultimate: 'Overdrive',
        color: '#00E5FF'
    },
    {
        id: 'iso',
        name: 'Iso',
        icon: 'https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/displayicon.png',
        role: 'Duelist',
        origin: 'China',
        tagline: 'Chinese fixer for hire Iso pulls ambient energy into bulletproof protection and challenges rivals to 1v1 duels.',
        signature: 'Double Tap',
        ultimate: 'Kill Contract',
        color: '#7C3AED'
    },
    {
        id: 'waylay',
        name: 'Waylay',
        icon: 'https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/displayicon.png',
        role: 'Duelist',
        origin: 'Unknown',
        tagline: 'High-octane entry fragger who ambushes defenders and creates immediate momentum for their team.',
        signature: 'Ambush Strike',
        ultimate: 'Overcharge',
        color: '#F43F5E'
    },

    // Initiators
    {
        id: 'sova',
        name: 'Sova',
        icon: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png',
        role: 'Initiator',
        origin: 'Russia',
        tagline: 'Born from the eternal winter of Russia\'s tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency.',
        signature: 'Recon Bolt',
        ultimate: 'Hunter\'s Fury',
        color: '#2563EB'
    },
    {
        id: 'fade',
        name: 'Fade',
        icon: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png',
        role: 'Initiator',
        origin: 'Turkey',
        tagline: 'Turkish bounty hunter Fade unleashes the power of raw nightmares to seize enemy secrets.',
        signature: 'Haunt',
        ultimate: 'Nightfall',
        color: '#475569'
    },
    {
        id: 'breach',
        name: 'Breach',
        icon: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png',
        role: 'Initiator',
        origin: 'Sweden',
        tagline: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground.',
        signature: 'Fault Line',
        ultimate: 'Rolling Thunder',
        color: '#D97706'
    },
    {
        id: 'kayo',
        name: 'KAY/O',
        icon: 'https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png',
        role: 'Initiator',
        origin: 'Alternate Timeline',
        tagline: 'KAY/O is a machine of war built for a single purpose: neutralizing radiants.',
        signature: 'ZERO/POINT',
        ultimate: 'NULL/cmd',
        color: '#06B6D4'
    },
    {
        id: 'gekko',
        name: 'Gekko',
        icon: 'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png',
        role: 'Initiator',
        origin: 'USA',
        tagline: 'Gekko the Angeleno leads a tight-knit crew of calamitous creatures to gather intel and disrupt defenders.',
        signature: 'Dizzy',
        ultimate: 'Thrash',
        color: '#84CC16'
    },
    {
        id: 'skye',
        name: 'Skye',
        icon: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
        role: 'Initiator',
        origin: 'Australia',
        tagline: 'Hailing from Australia, Skye and her band of beasts trail-blaze their way through hostile territory.',
        signature: 'Guiding Light',
        ultimate: 'Seekers',
        color: '#10B981'
    },
    {
        id: 'tejo',
        name: 'Tejo',
        icon: 'https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/displayicon.png',
        role: 'Initiator',
        origin: 'Colombia',
        tagline: 'Colombian operative Tejo uses guided tactical ordnance and reconnaissance drones to force enemies out of hiding.',
        signature: 'Guided Salvo',
        ultimate: 'Armageddon',
        color: '#E11D48'
    },

    // Controllers
    {
        id: 'omen',
        name: 'Omen',
        icon: 'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png',
        role: 'Controller',
        origin: 'Unknown',
        tagline: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the battlefield, and lets paranoia take hold.',
        signature: 'Dark Cover',
        ultimate: 'From the Shadows',
        color: '#5B21B6'
    },
    {
        id: 'brimstone',
        name: 'Brimstone',
        icon: 'https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png',
        role: 'Controller',
        origin: 'USA',
        tagline: 'Joining from the U.S.A., Brimstone\'s orbital arsenal ensures his squad always has the advantage.',
        signature: 'Sky Smoke',
        ultimate: 'Orbital Strike',
        color: '#C2410C'
    },
    {
        id: 'viper',
        name: 'Viper',
        icon: 'https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png',
        role: 'Controller',
        origin: 'USA',
        tagline: 'The American chemist Viper deploys an array of poisonous chemical devices to control the battlefield and cripple enemy vision.',
        signature: 'Toxic Screen',
        ultimate: 'Viper\'s Pit',
        color: '#16A34A'
    },
    {
        id: 'astra',
        name: 'Astra',
        icon: 'https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png',
        role: 'Controller',
        origin: 'Ghana',
        tagline: 'Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim.',
        signature: 'Nebula / Dissipate',
        ultimate: 'Cosmic Divide',
        color: '#9333EA'
    },
    {
        id: 'harbor',
        name: 'Harbor',
        icon: 'https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png',
        role: 'Controller',
        origin: 'India',
        tagline: 'Hailing from India\'s coast, Harbor commands ancient technology with the power of water to shield allies and crush foes.',
        signature: 'High Tide',
        ultimate: 'Reckoning',
        color: '#0284C7'
    },
    {
        id: 'clove',
        name: 'Clove',
        icon: 'https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/displayicon.png',
        role: 'Controller',
        origin: 'Scotland',
        tagline: 'Scottish troublemaker Clove keeps enemies guessing both in life and beyond the grave.',
        signature: 'Ruse (Smoke)',
        ultimate: 'Not Dead Yet',
        color: '#EC4899'
    },
    {
        id: 'miks',
        name: 'Miks',
        icon: 'https://media.valorant-api.com/agents/7c8a4701-4de6-9355-b254-e09bc2a34b72/displayicon.png',
        role: 'Controller',
        origin: 'Unknown',
        tagline: 'Master of tactical line-of-sight and territorial control, Miks bends sightlines and suppresses enemy pushes.',
        signature: 'Disruption Smoke',
        ultimate: 'Void Barrier',
        color: '#8B5CF6'
    },

    // Sentinels
    {
        id: 'killjoy',
        name: 'Killjoy',
        icon: 'https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png',
        role: 'Sentinel',
        origin: 'Germany',
        tagline: 'The genius of Germany, Killjoy secures the battlefield ease with her arsenal of inventions.',
        signature: 'Turret',
        ultimate: 'Lockdown',
        color: '#FACC15'
    },
    {
        id: 'cypher',
        name: 'Cypher',
        icon: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png',
        role: 'Sentinel',
        origin: 'Morocco',
        tagline: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy\'s every move.',
        signature: 'Spycam',
        ultimate: 'Neural Theft',
        color: '#94A3B8'
    },
    {
        id: 'sage',
        name: 'Sage',
        icon: 'https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png',
        role: 'Sentinel',
        origin: 'China',
        tagline: 'The stronghold of China, Sage creates safety for herself and her team wherever she goes.',
        signature: 'Healing Orb',
        ultimate: 'Resurrection',
        color: '#2DD4BF'
    },
    {
        id: 'chamber',
        name: 'Chamber',
        icon: 'https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png',
        role: 'Sentinel',
        origin: 'France',
        tagline: 'Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision.',
        signature: 'Rendezvous (Teleport)',
        ultimate: 'Tour De Force',
        color: '#EAB308'
    },
    {
        id: 'deadlock',
        name: 'Deadlock',
        icon: 'https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png',
        role: 'Sentinel',
        origin: 'Norway',
        tagline: 'Norwegian operative Deadlock deploys an array of cutting-edge nanowire tech to secure the battlefield.',
        signature: 'Barrier Mesh',
        ultimate: 'Annihilation',
        color: '#38BDF8'
    },
    {
        id: 'vyse',
        name: 'Vyse',
        icon: 'https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/displayicon.png',
        role: 'Sentinel',
        origin: 'Unknown',
        tagline: 'Metallic mastermind Vyse manipulates liquid metal to trap, disarm, and isolate prey.',
        signature: 'Shear / Arc Rose',
        ultimate: 'Steel Garden',
        color: '#71717A'
    },
    {
        id: 'veto',
        name: 'Veto',
        icon: 'https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/displayicon.png',
        role: 'Sentinel',
        origin: 'Unknown',
        tagline: 'Defensive enforcer who denies site access, locks down chokepoints, and nullifies enemy pushes.',
        signature: 'Denial Field',
        ultimate: 'Absolute Lockout',
        color: '#059669'
    }
];

const VALORANT_WEAPONS = [
    // Sidearms
    {
        id: 'classic',
        name: 'Classic',
        icon: 'https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/910be174-449b-c412-ab22-d0873436b21b/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/4ade7faa-4cf1-8376-95ef-39884480959b/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/5f0aaf7a-4289-3998-d5ff-eb9a5cf7ef5c/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png',
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
        icon: 'https://media.valorant-api.com/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7/displayicon.png',
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
