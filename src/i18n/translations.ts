export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  ja: {
    'nav.about': '自己紹介',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'コンタクト',
    'hero.role': 'バックエンド / インフラエンジニア志望',
    'hero.description':
      'システムの根幹を支えるバックエンドやインフラに興味を持つ学生エンジニアです。信頼性が高く、スケーラブルなシステムの構築を目指しています。',
    'hero.contact': 'コンタクト',
    'hero.github': 'GitHub',
    'skills.title': 'スキル',
    'skills.languages': 'プログラミング言語',
    'skills.areas': '関心分野',
    'skills.area.backend': 'バックエンド開発',
    'skills.area.infra': 'インフラ / クラウド',
    'skills.area.system': 'システム設計',
    'projects.title': 'プロジェクト',
    'projects.empty': '現在準備中です。近日公開予定。',
    'contact.title': 'コンタクト',
    'contact.description': 'お気軽にご連絡ください。',
    'contact.github': 'GitHub',
    'contact.email': 'メール',
    'footer.rights': 'All rights reserved.',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.role': 'Aspiring Backend / Infrastructure Engineer',
    'hero.description':
      "I'm a student engineer passionate about backend systems and infrastructure — building reliable, scalable systems from the ground up.",
    'hero.contact': 'Contact',
    'hero.github': 'GitHub',
    'skills.title': 'Skills',
    'skills.languages': 'Programming Languages',
    'skills.areas': 'Areas of Interest',
    'skills.area.backend': 'Backend Development',
    'skills.area.infra': 'Infrastructure / Cloud',
    'skills.area.system': 'System Design',
    'projects.title': 'Projects',
    'projects.empty': 'Currently in preparation. Coming soon.',
    'contact.title': 'Contact',
    'contact.description': 'Feel free to reach out.',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)['ja'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'ja';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ja' ? 'en' : 'ja';
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  return `/${lang}${path}`;
}
