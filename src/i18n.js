import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// ========================== FOR Language Converter =========================
i18n
  .use(LanguageDetector) // ============== detect  the Browser language =======  
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { flights: "Flights", hotels: "Hotels" } },
      ar: { translation: { flights: "رحلات", hotels: "فنادق" } }
    },
    fallbackLng: "en", // ============== if no lang then english ============
  });

export default i18n;