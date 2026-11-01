---
title: Deadliner für macOS
summary: Ein nativer SwiftUI-Client für den Open-Source-Deadline-Planer Deadliner, der die gesamte Logik aus dem Kotlin-Multiplatform-Kern wiederverwendet.
role: macOS-Client-Entwicklung · Beiträge zu DeadlinerCore
period: '2026'
order: 1
size: wide
tags: [SwiftUI, Kotlin Multiplatform, WebDAV, macOS 26]
links:
  - label: Deadliner-Projekt
    url: https://github.com/DeadlinerStudio
  - label: Core-PR #1
    url: https://github.com/DeadlinerStudio/DeadlinerCore/pull/1
  - label: Core-PR #2
    url: https://github.com/DeadlinerStudio/DeadlinerCore/pull/2
---

[Deadliner](https://github.com/DeadlinerStudio) ist ein Deadline- und Gewohnheits-Planer von AritxOnly mit Apps für Android, HarmonyOS und iOS. Ich entwickle den **nativen macOS-Client**: Datenbank, Synchronisation und Geschäftslogik liegen im gemeinsamen DeadlinerCore, die Mac-App übernimmt Oberfläche und Systemintegration.

## Umfang

- **Aufgaben und Gewohnheiten**: Listen, Suche, Filter, Mehrfachauswahl, Unteraufgaben, Check-ins.
- **Übersicht**: Monatsauswertungen, Verteilung der Erledigungszeiten, Trends pro Woche / Monat / Jahr und Heatmaps – direkt aus den ViewModels des Cores.
- **WebDAV-Sync**: dasselbe Änderungsprotokoll wie die Smartphone-Apps, Passwörter im Schlüsselbund.
- **Menüleiste und Mitteilungen**: vier Menüleisten-Stile, Erinnerungszeiten berechnet der Core.
- **Erscheinungsbild**: 15 Akzentfarben, Liquid Glass ab macOS 26, Unschärfe als Fallback.

## Beiträge zum Core

- [PR #1](https://github.com/DeadlinerStudio/DeadlinerCore/pull/1): iOS-State-Bridges nach `appleMain` verschoben, damit iOS und macOS dieselbe Implementierung nutzen; der erzeugte iOS-Header bleibt byte-identisch.
- [PR #2](https://github.com/DeadlinerStudio/DeadlinerCore/pull/2): `@Throws` für die Backup-Wiederherstellung, damit Apple-Clients bei ungültigen Backups eine Fehlermeldung zeigen statt abzustürzen.
