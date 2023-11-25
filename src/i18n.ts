import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import frLang from "./lang/fr-FR.json";
import enLang from "./lang/en-US.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr-FR",
    resources: {
      "en-US": {
        translation: enLang,
      },
      "fr-FR": {
        translation: frLang,
      },
    },
  });

export default i18n;

export const languages = {
  "fr-FR": { nativeName: "Français", flagCode: "FR" },
  "en-US": { nativeName: "English", flagCode: "US" },
};
