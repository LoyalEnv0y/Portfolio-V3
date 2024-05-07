import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import aboutContentsEn from './locales/about/en.json';
import aboutContentsTr from './locales/about/tr.json'; 

i18n.use(initReactI18next)
	.init({
		debug: true,
		resources: {
			en: {
				translation: aboutContentsEn,
			},
			tr: {
				translation: aboutContentsTr,
			},
		},
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
