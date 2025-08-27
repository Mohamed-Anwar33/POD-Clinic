import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ar from './locales/ar.json';
import en from './locales/en.json';

// Determine initial language from localStorage or browser, default to Arabic
const stored = typeof window !== 'undefined' ? localStorage.getItem('lng') : null;
const browser = typeof navigator !== 'undefined' ? navigator.language?.slice(0, 2) : 'ar';
const initialLng = (stored || (browser === 'ar' ? 'ar' : 'en')) as 'ar' | 'en';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    lng: initialLng,
    fallbackLng: 'ar',
    interpolation: { escapeValue: false },
  });

export default i18n;
