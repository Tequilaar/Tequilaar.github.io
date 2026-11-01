---
title: 'IP-Metis: Edge AI inference'
summary: TUM engineering internship project — running vision and communications models on a Raspberry Pi 5 with an Axelera Metis M.2 accelerator, benchmarked reproducibly against the CPU.
role: Engineering internship → working student
period: '2026'
order: 2
size: normal
tags: [Raspberry Pi 5, Axelera Metis, Voyager SDK, ONNX, Python, C++]
stats:
  - value: '157 fps'
    label: Metis end-to-end
  - value: '4.3 ms'
    label: Latency
  - value: '91.5 %'
    label: Top-1 accuracy
---

For my Ingenieurpraxis (engineering internship) at TUM I brought up an Axelera Metis M.2 AI accelerator on a Raspberry Pi 5 and benchmarked CPU against Metis on several computer vision workloads: YOLOv8n, ImageNet classifiers, robustness tests with real inputs, and a breakdown of host and pipeline time.

## 6G-related: automatic modulation classification (AMC)

I also built a 6G-related workload: a small CNN that classifies BPSK, QPSK, 8PSK, 16QAM and 64QAM, exported to ONNX, added to the Voyager SDK as its own network, quantized and compiled for Metis.

- CPU ONNX reference: 94.80 % top-1
- Metis full validation: 91.47 % top-1
- Metis end-to-end: 157.0 fps at 4.3 ms latency
- Run logs summarized with a C++ tool

## Now

The project continues as a working-student job, focused on a small reproducible CPU / Metis comparison with power measured over an INA228 (I²C) and logged to CSV. The code lives on TUM’s internal GitLab and is not public.
