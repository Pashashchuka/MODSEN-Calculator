import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import i18next from 'i18next';

import localeEnglish from 'locales/english/english.locale.json';
import localeChinese from 'locales/chinese/chinese.locale.json';
import localeRussian from 'locales/russian/russian.locale.json';
import localeSpanish from 'locales/spanish/spanish.locale.json';
import localeHindi from 'locales/hindi/hindi.locale.json';

const resources = {
  english: {
    translation: localeEnglish
  },
  chinese: {
    translation: localeChinese
  },
  hindi: {
    translation: localeHindi
  },
  russian: {
    translation: localeRussian
  },
  spanish: {
    translation: localeSpanish
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    resources,
    fallbackLng: 'english',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
