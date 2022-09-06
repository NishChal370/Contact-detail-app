import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
      .use(initReactI18next)
      .use(LanguageDetector)
      .use(HttpApi)
      .init({
            backend: {
                  loadPath: '/locales/{{lng}}/translation.json'
            },
            fallbackLng: "en",
            detection: {
                  order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path'],
                  caches: ['cookie', 'localStorage'],
            },
      });
