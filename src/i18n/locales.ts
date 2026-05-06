export interface Locale {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag: string;
}

export const LOCALES: Record<string, Locale> = {
  en: { code: 'en', name: 'English',    nativeName: 'English',    dir: 'ltr', flag: '🇺🇸' },
  es: { code: 'es', name: 'Spanish',    nativeName: 'Español',    dir: 'ltr', flag: '🇪🇸' },
  fr: { code: 'fr', name: 'French',     nativeName: 'Français',   dir: 'ltr', flag: '🇫🇷' },
  de: { code: 'de', name: 'German',     nativeName: 'Deutsch',    dir: 'ltr', flag: '🇩🇪' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português',  dir: 'ltr', flag: '🇧🇷' },
  ja: { code: 'ja', name: 'Japanese',   nativeName: '日本語',      dir: 'ltr', flag: '🇯🇵' },
  zh: { code: 'zh', name: 'Chinese',    nativeName: '中文',        dir: 'ltr', flag: '🇨🇳' },
  ar: { code: 'ar', name: 'Arabic',     nativeName: 'العربية',    dir: 'rtl', flag: '🇸🇦' },
  ru: { code: 'ru', name: 'Russian',    nativeName: 'Русский',    dir: 'ltr', flag: '🇷🇺' },
  it: { code: 'it', name: 'Italian',    nativeName: 'Italiano',   dir: 'ltr', flag: '🇮🇹' },
  ko: { code: 'ko', name: 'Korean',     nativeName: '한국어',      dir: 'ltr', flag: '🇰🇷' },
};

export const NON_ENGLISH_LOCALES = Object.values(LOCALES).filter(l => l.code !== 'en');
export const ALL_LANG_CODES = Object.keys(LOCALES);
