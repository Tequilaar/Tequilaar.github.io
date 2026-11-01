import type { Lang } from '~/i18n'

type L = Record<Lang, string>

/**
 * Contact links. Leave a value empty to hide it on the page.
 * email: just the address, e.g. 'me@example.com'.
 */
export const links = {
  github: 'https://github.com/Tequilaar',
  email: '',
  linkedin: 'https://www.linkedin.com/in/yuzhe-yan-11798039a',
  xiaohongshu: 'https://www.xiaohongshu.com/user/profile/60d5bfe400000000010001df',
  bilibili: '',
}

export const bio: L = {
  zh: '在慕尼黑工业大学读电子与信息工程本科。喜欢把小工具做得顺手、好看，也喜欢在健身房里推大重量。',
  en: 'I study Electrical Engineering and Information Technology at TUM. I like building small tools that feel just right — and lifting heavy things.',
  de: 'Ich studiere Elektrotechnik und Informationstechnik an der TUM. Ich baue gern kleine Tools, die sich genau richtig anfühlen – und hebe gern schwere Gewichte.',
}

/** Tiles in the "About" bento grid. `wide` spans two columns. */
export const facts: { label: L; value: L; note?: L; wide?: boolean; accent?: boolean }[] = [
  {
    wide: true,
    accent: true,
    label: { zh: '学业', en: 'Studies', de: 'Studium' },
    value: {
      zh: 'TUM · 电子与信息工程 B.Sc.',
      en: 'TUM · B.Sc. Electrical Engineering & IT',
      de: 'TUM · B.Sc. Elektrotechnik & Informationstechnik',
    },
    note: { zh: '第 5 学期', en: '5th semester', de: '5. Semester' },
  },
  {
    label: { zh: '坐标', en: 'Based in', de: 'Wohnort' },
    value: { zh: '慕尼黑', en: 'Munich', de: 'München' },
  },
  {
    label: { zh: '训练', en: 'Lifting', de: 'Training' },
    value: { zh: '卧推 117.5 kg', en: 'Bench 117.5 kg', de: 'Bankdrücken 117,5 kg' },
    note: { zh: '2023.12 起', en: 'Since 12/2023', de: 'Seit 12/2023' },
  },
  {
    wide: true,
    label: { zh: '最近在做', en: 'Currently', de: 'Aktuell' },
    value: {
      zh: 'Metis 加速器的能耗测量，以及 Deadliner 的 macOS 客户端',
      en: 'Energy measurements on the Metis accelerator, and a macOS client for Deadliner',
      de: 'Energiemessungen am Metis-Beschleuniger und ein macOS-Client für Deadliner',
    },
  },
  {
    wide: true,
    label: { zh: '常用', en: 'Toolbox', de: 'Werkzeuge' },
    value: {
      zh: 'Swift · SwiftUI · Python · C/C++ · 树莓派',
      en: 'Swift · SwiftUI · Python · C/C++ · Raspberry Pi',
      de: 'Swift · SwiftUI · Python · C/C++ · Raspberry Pi',
    },
  },
]
