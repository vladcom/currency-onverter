import en from './locales/en/translation.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './locales/pl/translation.json';
import ua from './locales/ua/translation.json';

const resources = {
  en: {
    translation: en
  },
  pl: {
    translation: pl
  },
  ua: {
    translation: ua
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;