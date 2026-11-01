---
title: Dafeiyu, a desktop pet
summary: A native pet that lives on the Mac desktop — 32-direction gaze, runs when dragged, chases her rice bowl, and the rice level shows your remaining Claude / Codex quota.
role: Solo project
period: '2026'
order: 3
size: tall
cover: ../../../assets/projects/dafeiyu.png
tags: [AppKit, SpriteKit, SwiftUI]
---

Dafeiyu (“big fat fish”) is a standalone macOS desktop pet built with AppKit, SpriteKit and SwiftUI, currently at preview version 0.1.19.

## What she does

- **32-direction gaze**: follows the cursor with smooth shortest-path head turns and the occasional blink.
- **Drag and chase**: drag her and she runs; drag her rice bowl away and she chases it — let go to toss it.
- **The bowl is your quota**: the rice level shows remaining Codex or Claude usage, with a usage curve and reset times.
- **Everyday company**: sits on window edges, hangs off them, naps, and wanders around on her own.
- **Menu bar fish**: always brings her back; global shortcuts hide her, switch to quiet mode or pause.

## Details

All animation comes from the original artwork — 24 running frames, 32 waving frames — pixel-aligned to keep edges stable. Drawing pauses when idle and peaks at 60 fps otherwise. Quota is read from existing local sign-ins; no tokens are stored and no model requests are made.
