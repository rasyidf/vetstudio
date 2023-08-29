// init i18next react
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from '@/locales'; // { en: {}, id: {} }


const fallbackLng = 'en';
const supportedLngs = Object.keys(resources);

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        lng: fallbackLng,
        ns: ['common', "marketing", "dashboard", "auth"],
        defaultNS: 'common',
        supportedLngs,
        interpolation: {
            escapeValue: false,
        },
    },
        (err) => {
            if (err instanceof Error) {
                console.error(err);
            } else {
                console.log('i18n initialized');
            }
        }
    );



