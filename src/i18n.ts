export const locales = ['zh', 'en', 'de'] as const
export type Lang = (typeof locales)[number]
export const defaultLang: Lang = 'zh'

export const langMeta: Record<Lang, { label: string; htmlLang: string }> = {
  zh: { label: '中文', htmlLang: 'zh-CN' },
  en: { label: 'EN', htmlLang: 'en' },
  de: { label: 'DE', htmlLang: 'de' },
}

/** Static paths for `[...lang]` routes: the default language has no prefix. */
export function langPaths() {
  return locales.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }))
}

/** Prefix a site path with the language segment, e.g. ('/projects/x', 'en') -> '/en/projects/x'. */
export function localize(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (lang === defaultLang) return clean
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`
}

/** Strip the language prefix from a pathname so it can be re-localized. */
export function unlocalize(pathname: string) {
  const match = pathname.match(/^\/(en|de)(\/|$)/)
  return match ? pathname.slice(match[1].length + 1) || '/' : pathname
}

export const ui = {
  zh: {
    siteTitle: 'Pendel 摆子',
    description: '慕尼黑工业大学电子与信息工程本科生 Pendel 的个人主页：项目、学业与训练。',
    nav: { about: '关于', projects: '项目', contact: '联系' },
    hello: '你好，我是 Pendel。',
    about: '关于我',
    projects: '项目',
    contact: '找到我',
    contactNote: '欢迎交流项目、实习机会，或者训练计划。',
    readMore: '详情',
    backHome: '返回主页',
    role: '我的角色',
    period: '时间',
    links: '链接',
    toggleTheme: '切换深浅色',
    notFound: '这个页面不存在。',
    footer: '用 Astro 构建，部署在 GitHub Pages。',
  },
  en: {
    siteTitle: 'Pendel',
    description: 'Personal site of Pendel, an Electrical Engineering student at TUM: projects, studies and training.',
    nav: { about: 'About', projects: 'Projects', contact: 'Contact' },
    hello: 'Hi, I’m Pendel.',
    about: 'About',
    projects: 'Projects',
    contact: 'Find me',
    contactNote: 'Happy to talk about projects, internships, or training plans.',
    readMore: 'Details',
    backHome: 'Back home',
    role: 'Role',
    period: 'Period',
    links: 'Links',
    toggleTheme: 'Toggle light / dark',
    notFound: 'This page does not exist.',
    footer: 'Built with Astro, hosted on GitHub Pages.',
  },
  de: {
    siteTitle: 'Pendel',
    description: 'Persönliche Seite von Pendel: Elektrotechnik-Studium an der TUM, Projekte und Training.',
    nav: { about: 'Über mich', projects: 'Projekte', contact: 'Kontakt' },
    hello: 'Hallo, ich bin Pendel.',
    about: 'Über mich',
    projects: 'Projekte',
    contact: 'Kontakt',
    contactNote: 'Ich freue mich über Austausch zu Projekten, Werkstudentenstellen oder Trainingsplänen.',
    readMore: 'Details',
    backHome: 'Zur Startseite',
    role: 'Rolle',
    period: 'Zeitraum',
    links: 'Links',
    toggleTheme: 'Hell / Dunkel umschalten',
    notFound: 'Diese Seite gibt es nicht.',
    footer: 'Gebaut mit Astro, gehostet auf GitHub Pages.',
  },
} satisfies Record<Lang, unknown>
