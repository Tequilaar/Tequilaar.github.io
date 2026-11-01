// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://tequilaar.github.io',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['zh', 'en', 'de'],
    defaultLocale: 'zh',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', en: 'en', de: 'de' },
      },
    }),
  ],
})
