import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language

  .use(Backend)
  
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
		backend: {
			// translation file path
			loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
		},
		fallbackLng: "en",
		// disabled in production
		debug: false,
		// can have multiple namespaces, in case you want to divide a huge
		// translation into smaller pieces and load them on demand
		ns: ["common", "banner", "profile"],

		interpolation: {
			espaceValue: false,
			formatSeparator: ",",
		},
		react: {
			wait: true,
		},
	});

export default i18n;