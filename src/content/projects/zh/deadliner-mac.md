---
title: Deadliner for macOS
summary: 为开源 Deadline 管理应用 Deadliner 开发 SwiftUI 原生 Mac 客户端，业务逻辑全部复用跨平台的 Kotlin Multiplatform 核心。
role: Mac 客户端开发 · DeadlinerCore 贡献者
period: '2026'
order: 1
size: wide
tags: [SwiftUI, Kotlin Multiplatform, WebDAV, macOS 26]
links:
  - label: Deadliner 项目
    url: https://github.com/DeadlinerStudio
  - label: Core PR #1
    url: https://github.com/DeadlinerStudio/DeadlinerCore/pull/1
  - label: Core PR #2
    url: https://github.com/DeadlinerStudio/DeadlinerCore/pull/2
---

[Deadliner](https://github.com/DeadlinerStudio) 是 AritxOnly 发起的 Deadline 与习惯管理应用，已有 Android、鸿蒙和 iOS 版本。我负责它的 **macOS 原生客户端**：数据库、同步和业务规则由共享的 DeadlinerCore 负责，Mac 端只做界面和系统集成。

## 做了什么

- **任务与习惯**：列表、搜索、筛选、多选批量操作、子任务、打卡。
- **概览**：月度汇总、完成时间分布、周 / 月 / 年趋势与热力图，数据直接来自 Core 的 ViewModel。
- **WebDAV 同步**：与手机端共用同一份变更日志，密码保存在钥匙串。
- **菜单栏与通知**：四种菜单栏样式，提醒时间由 Core 计算。
- **外观**：15 种主题色，macOS 26 上使用 Liquid Glass，旧系统回退到毛玻璃。

## 给 Core 的改动

- [PR #1](https://github.com/DeadlinerStudio/DeadlinerCore/pull/1)：把 iOS 的状态桥接移到 `appleMain`，让 iOS 和 macOS 共用一份实现；改动前后 iOS 生成的头文件逐字节一致。
- [PR #2](https://github.com/DeadlinerStudio/DeadlinerCore/pull/2)：给备份恢复声明 `@Throws`，Apple 端导入无效备份时可以提示错误，而不是直接退出。
