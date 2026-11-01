---
title: IP-Metis：边缘 AI 推理
summary: TUM Ingenieurpraxis 项目：在树莓派 5 + Axelera Metis M.2 加速器上部署视觉与通信模型，并与 CPU 做可复现的对比测试。
role: Ingenieurpraxis → 学生助理（Werkstudent）
period: '2026'
order: 2
size: normal
tags: [Raspberry Pi 5, Axelera Metis, Voyager SDK, ONNX, Python, C++]
---

在 TUM 的 Ingenieurpraxis（工程实习）中，我把 Axelera Metis M.2 AI 加速器接到树莓派 5 上完成调试，并为多种计算机视觉任务做了 CPU 与 Metis 的对比测试。

## 做了什么

- 加速器在树莓派 5 上的部署与调试
- 计算机视觉模型在 CPU 和 Metis 上的性能对比
- 一个与 6G 相关的通信模型：从训练、导出 ONNX，到量化并编译在 Metis 上运行
- 用 Python 和 C++ 编写测试与结果汇总工具

## 现在

项目延续为学生助理工作，重点是可复现的 CPU / Metis 对比和功耗测量。代码在 TUM 内部，不公开。
