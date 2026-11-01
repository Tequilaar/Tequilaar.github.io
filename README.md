# Tequilaar.github.io

Yuzhe Yan 的个人主页，用 Astro 构建，push 到 `main` 后由 GitHub Actions 部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 改内容

| 要改什么 | 文件 |
| --- | --- |
| 简介、关于我的卡片、联系方式 | `src/data/profile.ts`（联系方式留空即隐藏） |
| 界面文字（三种语言） | `src/i18n.ts` |
| 项目 | `src/content/projects/<zh\|en\|de>/<slug>.md`，三种语言各一份，同名 |
| 头像 / 项目图片 | `src/assets/` |

新增项目：在三个语言目录里各建一个同名 `.md`，frontmatter 字段见 `src/content.config.ts`。`size` 控制首页卡片大小（`wide` / `tall` / `normal`），`order` 控制顺序。

中文页面在 `/`，英文在 `/en/`，德文在 `/de/`。
