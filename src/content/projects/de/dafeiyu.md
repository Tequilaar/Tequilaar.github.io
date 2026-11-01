---
title: Dafeiyu, ein Desktop-Haustier
summary: Ein natives Haustier für den Mac-Desktop – Blick in 32 Richtungen, rennt beim Ziehen, jagt ihrem Reisnapf hinterher, und der Reis zeigt das verbleibende Claude-/Codex-Kontingent.
role: Eigenes Projekt
period: '2026'
order: 3
size: tall
cover: ../../../assets/projects/dafeiyu.png
tags: [AppKit, SpriteKit, SwiftUI]
---

Dafeiyu („großer dicker Fisch“) ist ein eigenständiges macOS-Desktop-Haustier, gebaut mit AppKit, SpriteKit und SwiftUI, aktuell als Vorschauversion 0.1.19.

## Was sie kann

- **Blick in 32 Richtungen**: folgt dem Mauszeiger mit weichen Kopfdrehungen und blinzelt ab und zu.
- **Ziehen und Jagen**: beim Ziehen rennt sie; zieht man ihren Reisnapf weg, rennt sie hinterher – loslassen wirft ihn.
- **Der Napf ist das Kontingent**: die Reismenge zeigt das verbleibende Codex- oder Claude-Kontingent, mit Verbrauchskurve und Reset-Zeiten.
- **Alltagsbegleitung**: sitzt auf Fensterkanten, hängt daran, schläft und läuft selbstständig herum.
- **Fisch in der Menüleiste**: holt sie jederzeit zurück; globale Kurzbefehle zum Ausblenden, Ruhigstellen oder Pausieren.

## Details

Alle Animationen stammen aus den Originalzeichnungen – 24 Lauf- und 32 Winkbilder, pixelgenau ausgerichtet für ruhige Kanten. Im Ruhezustand wird nicht gezeichnet, sonst bis zu 60 fps. Das Kontingent wird aus vorhandenen lokalen Anmeldungen gelesen; es werden keine Tokens gespeichert und keine Modellanfragen gestellt.
