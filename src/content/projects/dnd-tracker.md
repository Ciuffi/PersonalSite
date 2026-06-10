---
title: DnD Tracker
description: A self-hostable D&D campaign manager with real-time multiplayer sync and a Claude-powered DM assistant that can roll dice and mutate game state through MCP tools.
year: "2026"
tags: [TypeScript, React, Fastify, DynamoDB, Claude AI]
cover: ../../assets/projects/dnd-tracker-cover.svg
coverAlt: Stylized wireframe d20 die on a dark grid
featured: true
order: 2
---

DnD Tracker is a mobile-friendly web app my D&D group actually plays with: character
sheets, inventory and equipment, spellcasting with mana and cooldowns, and a DM
dashboard that controls a persistent world clock. Every change — a spell cast, an item
equipped, a potion chugged — broadcasts to all connected players over WebSockets in
real time.

## The interesting parts

- **An AI dungeon master's assistant** — Claude is wired in through MCP tools that can
  roll dice (`4d6 drop lowest`, cryptographic RNG), query character state, grant items,
  and apply effects. Tools are permission-gated (DM-only vs. player-read-only) and
  every mutation lands in an immutable audit log.
- **A stat formula DSL** — DMs define custom derived stats as expressions like
  `ac = 10 + dex / 2`. Stats compute lazily through a pipeline: base stats → permanent
  boosts → temporary effects → equipped items → formulas. Custom campaigns get custom
  rules without code changes.
- **World-clock cooldowns** — spell cooldowns tick down with shared game time the DM
  controls, not wall-clock time, so story pacing stays in the DM's hands.
- **Real auth, self-hosted** — JWT with refresh-token rotation, role-based guards on
  every route, ticket-based WebSocket auth. Deploys to AWS ECS/Fargate via CDK or to a
  NAS with Docker Compose and DynamoDB Local.

## Stack

Fastify + TypeScript backend over DynamoDB (10 tables), React 18 + Vite frontend with
3D dice rolling, Playwright end-to-end tests covering multi-player workflows, and a
CI merge gate. 245 TypeScript files and counting.
