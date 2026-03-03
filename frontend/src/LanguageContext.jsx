import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (section, key) => {
        try {
            return translations[language][section][key] || key;
        } catch (e) {
            return key;
        }
    };

    const tArray = (section, key) => {
        try {
            return translations[language][section][key] || [];
        } catch (e) {
            return [];
        }
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'te' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, tArray }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
