# 🎯 Valorant Randomiser

A tactical Web Application for Valorant players featuring interactive Spin Wheels, Slot Reels, Tactical Loadout Challenges, and 5-Stack Squad Randomization.

## 🚀 Features

- **🎯 Agent Spin**: Wheel of Fortune & Slot Reel with all 24+ Valorant Agents (Jett, Reyna, Clove, Iso, Fade, Vyse, etc.). Filterable by Role (Duelist, Initiator, Controller, Sentinel).
- **🔫 Weapon Spin**: Wheel of Fortune & Slot Reel with all Valorant guns and melee. Filterable by Category (Sidearms, SMGs, Shotguns, Rifles, Snipers, Heavy, Melee) or Price Range.
- **🎲 Full Loadout Builder**: Randomizes an Agent + Primary Weapon + Sidearm + Tactical Strat Challenge (e.g. *Glass Cannon*, *Eco King*, *One Tap Only*).
- **👥 5-Stack Squad Randomizer**: Generates a balanced 5-player team composition with role badges.
- **🔊 Synthesized SFX**: Built-in Web Audio API sound effects for wheel tick sounds, spin deceleration, and victory fanfares with toggle control.
- **🎡 Dual Spin Modes**: Switch between standard 360° Canvas Spin Wheel and 🎰 Slot Machine Reel.
- **⚙️ Filter Pool / Exclude**: Exclude agents or weapons you don't own or don't want to spin.
- **⚡ 4-Spin Anti-Repeat Engine**: Smart randomizer memory that prevents the same Agent, Weapon, Challenge, Shield, or Squad member from appearing again for 4 consecutive spins (with dynamic pool size fallback).
- **📜 Spin History**: Track recent spins with clear history options.

## 🛠️ Tech Stack

- **HTML5**: Semantic tactical HUD structure.
- **CSS3**: Custom Valorant design system (Crimson `#FF4655`, Dark Navy `#0F1923`, Gold `#E2B659`), clip-path angled buttons, smooth animations, and responsive layout.
- **JavaScript (ES6+)**: Custom HTML5 Canvas physics engine, Web Audio API synthesizer, and tab state management.

## 💻 How to Run

Simply open `index.html` in any web browser!
