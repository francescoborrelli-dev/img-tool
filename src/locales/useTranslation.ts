import { useState, useEffect } from 'react';
import { translations, Translation } from './translations';

type Language = 'it' | 'en' | 'fr' | 'de' | 'es' | 'pt';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Prova a recuperare la lingua dal localStorage
    const saved = localStorage.getItem('img-tool-language');
    if (saved && translations[saved]) {
      return saved as Language;
    }
    
    // Altrimenti usa la lingua del browser
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      return browserLang as Language;
    }
    
    // Default: italiano
    return 'it';
  });

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('img-tool-language', lang);
  };

  const t = translations[currentLanguage];

  useEffect(() => {
    // Salva la lingua corrente nel localStorage
    localStorage.setItem('img-tool-language', currentLanguage);
  }, [currentLanguage]);

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: Object.keys(translations) as Language[]
  };
};

// Hook per formattare stringhe con placeholder
export const useFormatMessage = () => {
  const formatMessage = (message: string, values: Record<string, string | number> = {}) => {
    return message.replace(/\{(\w+)\}/g, (match, key) => {
      return values[key]?.toString() || match;
    });
  };

  return { formatMessage };
};
