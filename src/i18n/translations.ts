export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  ja: {
    'nav.about': '自己紹介',
    'nav.skills': 'スキル',
    'nav.experience': '経験',
    'hero.description':
      'システムの根幹を支えるバックエンドやインフラに興味を持つ学生エンジニアです。信頼性が高く、スケーラブルなシステムの構築を目指しています。',
    'hero.contact': 'コンタクト',
    'hero.github': 'GitHub',
    'about.title': '自己紹介',
    'about.description':
      '「わからないことを自力で形にする」面白さに惹かれ、エンジニアを志しました。スタートアップでのインターンを通じ、バックエンド・インフラ・AIの幅広い領域でプロダクト開発を経験しています。効率化と仕組みづくりへの強い関心を、チームへの貢献として発揮してきました。サッカーでキャプテンを務めた経験もあり、チームの土台を支えることに責任とやりがいを感じています。',
    'skills.title': 'スキル',
    'skills.languages': '言語',
    'skills.frameworks': 'フレームワーク / ライブラリ',
    'skills.infra': 'インフラ / クラウド',
    'skills.level.proficient': '実務経験',
    'skills.level.interest': '興味・関心',
    'skills.level.course': '授業',
    'experience.title': '経験',
    'nav.projects': 'プロジェクト',
    'projects.title': 'プロジェクト',
    'projects.empty': '現在準備中です。近日公開予定。',
    'footer.rights': 'All rights reserved.',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'hero.description':
      "I'm a student engineer passionate about backend systems and infrastructure — building reliable, scalable systems from the ground up.",
    'hero.contact': 'Contact',
    'hero.github': 'GitHub',
    'about.title': 'About',
    'about.description':
      "Drawn to the joy of figuring things out from scratch, I chose software engineering. Through my internship at a startup, I've built experience across backend, infrastructure, and AI. I'm driven by a passion for efficiency and systems thinking, and I find purpose in building the foundations that teams rely on. Having captained a soccer team through high school, I bring a strong sense of responsibility and commitment to every team I'm part of.",
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks / Libraries',
    'skills.infra': 'Infrastructure / Cloud',
    'skills.level.proficient': 'Proficient',
    'skills.level.interest': 'Interest',
    'skills.level.course': 'Course',
    'experience.title': 'Experience',
    'nav.projects': 'Projects',
    'projects.title': 'Projects',
    'projects.empty': 'Currently in preparation. Coming soon.',
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
  // base が '/portfolio/' のとき pathname は '/portfolio/ja/...' になるため除去する
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/portfolio'
  const pathname = url.pathname.slice(base.length); // '/ja/...'
  const [, lang] = pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'ja';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ja' ? 'en' : 'ja';
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  // BASE_URL は末尾スラッシュ付きで提供される（例: '/portfolio/'）
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/portfolio'
  return `${base}/${lang}${path}`;
}
