import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: {
          "Welcome to our Application": "Welcome to our Application",
          "This is a test sentence": "This is a test sentence",
          "This application uses internationalization software": "This application uses internationalization software",
        }
      },
      zh: {
        translations: {
          "Welcome to our Application": "欢迎来到我们的申请",
          "This is a test sentence": "这是一个测试句",
          "This application uses internationalization software": "这个应用程序使用国际化软件",
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true
    }
  })

export default i18n