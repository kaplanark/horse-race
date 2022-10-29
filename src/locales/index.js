import { createI18n } from 'vue-i18n'
import tr from './tr.json';
import en from './en.json';

const messages = { tr, en };
const localStoreLocale = localStorage.getItem('locale');

if (!localStoreLocale) {
	// Get browser language
	let browserLanguage = Object.keys(messages).find(key => navigator.language.startsWith(key));
	browserLanguage ? localStorage.setItem('locale', browserLanguage) : localStorage.setItem('locale', 'en');
	// If the browser language is not in the messages, we set the default locale to English.
}

const i18n = createI18n({
	locale: localStoreLocale || 'en',
	fallbackLocale: 'tr',
	messages,
	globalInjection: true,
	legacy: false,
});

export default i18n;