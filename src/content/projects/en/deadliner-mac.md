---
title: Deadliner for macOS
summary: A native SwiftUI client for the open-source deadline tracker Deadliner, reusing all business logic from its Kotlin Multiplatform core.
role: macOS client developer · DeadlinerCore contributor
period: '2026'
order: 1
size: wide
tags: [SwiftUI, Kotlin Multiplatform, WebDAV, macOS 26]
links:
  - label: Deadliner project
    url: https://github.com/DeadlinerStudio
  - label: Core PR #1
    url: https://github.com/DeadlinerStudio/DeadlinerCore/pull/1
  - label: Core PR #2
    url: https://github.com/DeadlinerStudio/DeadlinerCore/pull/2
---

[Deadliner](https://github.com/DeadlinerStudio) is a deadline and habit tracker started by AritxOnly, with Android, HarmonyOS and iOS apps. I work on its **native macOS client**: storage, sync and business rules live in the shared DeadlinerCore, and the Mac app handles UI and system integration.

## What I built

- **Tasks and habits**: lists, search, filters, batch actions, subtasks, check-ins.
- **Overview**: monthly summaries, completion-time distribution, weekly / monthly / yearly trends and heatmaps, fed directly by Core view models.
- **WebDAV sync**: shares one change log with the phone apps; passwords live in the Keychain.
- **Menu bar and notifications**: four menu bar styles; reminder times are computed by Core.
- **Appearance**: 15 accent colors, Liquid Glass on macOS 26 with a blur fallback on older systems.

## Changes to Core

- [PR #1](https://github.com/DeadlinerStudio/DeadlinerCore/pull/1): move the iOS state bridges to `appleMain` so iOS and macOS share one implementation; the generated iOS header is byte-for-byte identical before and after.
- [PR #2](https://github.com/DeadlinerStudio/DeadlinerCore/pull/2): declare `@Throws` on backup restore, so Apple clients show an error for an invalid backup instead of crashing.
