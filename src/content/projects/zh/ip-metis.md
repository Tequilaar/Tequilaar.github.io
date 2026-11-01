---
title: IP-Metis：边缘 AI 推理
summary: TUM Ingenieurpraxis 项目：在树莓派 5 + Axelera Metis M.2 加速器上部署视觉与通信模型，与 CPU 做可复现的性能对比。
role: Ingenieurpraxis → 学生助理（Werkstudent）
period: '2026'
order: 2
size: normal
tags: [Raspberry Pi 5, Axelera Metis, Voyager SDK, ONNX, Python, C++]
stats:
  - value: '157 fps'
    label: Metis 端到端
  - value: '4.3 ms'
    label: 延迟
  - value: '91.5 %'
    label: Top-1 准确率
---

在 TUM 的 Ingenieurpraxis（工程实习）中，我把 Axelera Metis M.2 AI 加速器接到树莓派 5 上完成调试，并为多种计算机视觉任务做了 CPU 与 Metis 的对比测试：YOLOv8n、ImageNet 分类模型、真实输入下的鲁棒性实验，以及主机与流水线各部分的耗时分析。

## 6G 相关：自动调制识别（AMC）

另外实现了一个与 6G 相关的工作负载：训练一个小型 CNN 识别 BPSK、QPSK、8PSK、16QAM 和 64QAM，导出为 ONNX，作为独立网络接入 Voyager SDK，量化并编译到 Metis 上运行。

- CPU ONNX 参考：94.80 % Top-1
- Metis 全量验证：91.47 % Top-1
- Metis 端到端：157.0 fps，延迟 4.3 ms
- 用 C++ 汇总运行日志

## 现在

项目延续为学生助理工作，重点是一个小规模、可复现的 CPU / Metis 对比，用 INA228（I²C）测量功耗并记录 CSV 做分析。代码在 TUM 内部的 GitLab 上，暂不公开。
