---
title: 'IP-Metis: Edge-KI-Inferenz'
summary: Ingenieurpraxis an der TUM – Bild- und Kommunikationsmodelle auf einem Raspberry Pi 5 mit Axelera-Metis-M.2-Beschleuniger, reproduzierbar mit der CPU verglichen.
role: Ingenieurpraxis → Werkstudententätigkeit
period: '2026'
order: 2
size: normal
tags: [Raspberry Pi 5, Axelera Metis, Voyager SDK, ONNX, Python, C++]
stats:
  - value: '157 fps'
    label: Metis End-to-End
  - value: '4,3 ms'
    label: Latenz
  - value: '91,5 %'
    label: Top-1-Accuracy
---

In meiner Ingenieurpraxis an der TUM habe ich einen Axelera-Metis-M.2-Beschleuniger auf einem Raspberry Pi 5 in Betrieb genommen und CPU-vs.-Metis-Benchmarks für mehrere Computer-Vision-Workloads durchgeführt: YOLOv8n, ImageNet-Klassifikationsmodelle, Robustheitsversuche mit realen Eingaben sowie eine Analyse der Host- und Pipeline-Anteile.

## 6G-relevant: Automatic Modulation Classification (AMC)

Ergänzend habe ich ein kleines CNN für BPSK, QPSK, 8PSK, 16QAM und 64QAM trainiert, nach ONNX exportiert, als eigenes Netzwerk ins Voyager SDK integriert, quantisiert und für Metis kompiliert.

- CPU-ONNX-Referenz: 94,80 % Top-1
- Metis-Full-Validation: 91,47 % Top-1
- Metis End-to-End: 157,0 fps bei 4,3 ms Latenz
- Auswertung der Laufzeitlogs in C++

## Aktuell

Das Projekt läuft als Werkstudententätigkeit weiter: ein kleiner reproduzierbarer CPU-/Metis-Vergleich mit Leistungsmessung über einen INA228 (I²C) und CSV-Aufzeichnung. Der Code liegt im internen GitLab der TUM und ist nicht öffentlich.
