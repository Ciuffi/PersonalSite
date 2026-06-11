---
title: Tackle for Brainrots
description: A multiplayer PvP collection game, live on Roblox — football meets Pokémon meets base raiding. ~20,000 lines of server-authoritative Luau across 96 modules.
year: "2026"
tags: [Roblox, Luau, Rojo, Game Design]
cover: ../../assets/projects/tackle-brainrots.png
coverAlt: Tackle for Brainrots key art — a Roblox character diving to tackle a brainrot
links:
  live: https://www.roblox.com/games/91097277758091
featured: true
order: 1
---

Tackle for Brainrots is a multiplayer PvP collection game for Roblox. Players hunt
collectible "brainrots" across eight biomes, carry them home for passive income, and
raid each other's bases — every base is always open to raids, so the loop stays tense.
The core mechanic is a **skill-shot tackle**: a physics-based lunge with real aim,
knockback, and a self-stun penalty for whiffing. No auto-targeting, real counterplay.

## Engineering highlights

- **Server-authoritative architecture** — all game state (positions, inventory, cash)
  lives server-side and every action is validated before it executes, which shuts down
  the classic Roblox exploits: teleport cheating, infinite cash, item duplication.
- **Persistence done right** — DataStore saves with session locking to prevent
  duplication exploits, autosave every 60 seconds plus on-disconnect, and offline
  earnings calculated on return.
- **Progression through physics, not level gates** — zones are separated by physical
  gaps you can only cross if your glove tier gives you enough lunge distance, so
  traversal itself is the progression system.
- **Procedural animation** — every dive, knockback, steal channel, and deposit
  celebration is Motor6D manipulation in code. Zero uploaded animation assets.
- **Live-ops tooling** — custom analytics instrumentation for economy monitoring and
  funnel analysis, feeding balance changes.

## Scale

About 20,000 lines of typed Luau across 96 modules: 18 server systems (tackling,
carrying, base raids, spawning, rebirth prestige, shops, leaderboards) and 17 client
systems (HUD, collection index, tutorial, VFX/SFX feedback). Built in VS Code and
synced into Roblox Studio with [Rojo](https://rojo.space/).

**Now live on Roblox** —
[play it here](https://www.roblox.com/games/91097277758091).
