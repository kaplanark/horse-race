import { createI18n } from 'vue-i18n'
import tr from './tr.json';
import en from './en.json';

const messages = { tr, en };
const localStoreLocale = localStorage.getItem('locale');

if (!localStoreLocale) {
	let browserLanguage = Object.keys(messages).find(key => navigator.language.startsWith(key));
	browserLanguage ? localStorage.setItem('locale', browserLanguage) : localStorage.setItem('locale', 'en');
}

const i18n = createI18n({
	locale: localStorage.getItem('locale'),
	fallbackLocale: 'tr',
	messages,
	globalInjection: true,
	legacy: false,
});

export default i18n;