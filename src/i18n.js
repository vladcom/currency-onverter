import en from './locales/en/translation.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru/translation.json';
import ua from './locales/ua/translation.json';

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
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