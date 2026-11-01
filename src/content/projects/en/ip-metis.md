---
title: 'IP-Metis: Edge AI inference'
summary: TUM engineering internship project — running vision and communications models on a Raspberry Pi 5 with an Axelera Metis M.2 accelerator, compared reproducibly against the CPU.
role: Engineering internship → working student
period: '2026'
order: 2
size: normal
tags: [Raspberry Pi 5, Axelera Metis, Voyager SDK, ONNX, Python, C++]
---

For my Ingenieurpraxis (engineering internship) at TUM I brought up an Axelera Metis M.2 AI accelerator on a Raspberry Pi 5 and compared CPU and Metis on several computer vision workloads.

## What I did

- Brought up and debugged the accelerator on the Raspberry Pi 5
- Compared computer vision models on CPU and Metis
- Built a 6G-related communications model end to end: training, ONNX export, quantization and compilation for Metis
- Wrote benchmark and evaluation tooling in Python and C++

## Now

The project continues as a working-student job, focused on a reproducible CPU / Metis comparison including power measurements. The code is internal to TUM and not public.
