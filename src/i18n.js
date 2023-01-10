import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./locales/de/translationDE.json";
import translationEN from "./locales/en/translationEN.json";
import translationRU from "./locales/ru/translationRU.json";

const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "de",
  debug: true,
});

export default i18next;
