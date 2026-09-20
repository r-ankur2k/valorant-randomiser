# 🎯 Valorant Randomiser

A tactical Web Application for Valorant players featuring interactive Canvas Spin Wheels, Tactical Loadout Challenges, and Squad Stack Randomization.

## 🚀 Features

- **🎯 Agent Spin**: Wheel of Fortune with all 27+ Valorant Agents (Jett, Reyna, Clove, Iso, Fade, Vyse, Tejo, Miks, Waylay, Veto, etc.). Filterable by Role (Duelist, Initiator, Controller, Sentinel).
- **🔫 Weapon Spin**: Wheel of Fortune with all Valorant guns and melee. Filterable by Category (Sidearms, SMGs, Shotguns, Rifles, Snipers, Heavy, Melee) or Price Range.
- **⚡ Tactical Challenges**: Spin for fun and handicap challenges (e.g. *Glass Cannon*, *Eco King*, *One Tap Only*, *Sheriff Only*, *No Armor Run*).
- **👥 Squad Stack Randomizer**: Custom squad sizing selector (2 to 5 players: Duo, Trio, Quad, or Full Stack) that generates agent picks with role badges.
- **🔊 Synthesized SFX**: Built-in Web Audio API sound effects for wheel tick sounds, spin deceleration, and victory fanfares with toggle control.
- **🎡 Interactive Spin Wheel**: 360° HTML5 Canvas Spin Wheel with smooth ease-out physics and indicator tick animations.
- **⚙️ Filter Pool / Exclude**: Exclude agents or weapons you don't own or don't want to spin.
- **⚡ 4-Spin Anti-Repeat Engine**: Smart randomizer memory that prevents the same Agent, Weapon, Challenge, or Squad member from appearing again for 4 consecutive spins (with dynamic pool size fallback).
- **📜 Spin History**: Track recent spins with clear history options.

## 🛠️ Tech Stack

- **HTML5**: Semantic tactical HUD structure.
- **CSS3**: Custom Valorant design system (Crimson `#FF4655`, Dark Navy `#0F1923`, Gold `#E2B659`), clip-path angled buttons, smooth animations, and mobile responsive layout.
- **JavaScript (ES6+)**: Custom HTML5 Canvas physics engine, Web Audio API synthesizer, and tab state management.

## 💻 How to Run

Simply open `index.html` in any web browser!
