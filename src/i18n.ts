import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';

// 设置默认语言，检测用户浏览器语言或其他逻辑
const defaultLocale = navigator.language === 'zh-CN' ? 'zh-CN' : 'en';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-CN': zhCN,
  },
});

export default i18n;
