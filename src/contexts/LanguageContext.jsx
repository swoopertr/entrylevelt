import React, { createContext, useState, useContext, useEffect } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
    const availableLanguages = Object.keys(translations)

    const getBrowserLanguage = () => {
        const browserLang = navigator.language?.split('-')[0]
        return availableLanguages.includes(browserLang) ? browserLang : 'en'
    }

    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language')
        return saved && availableLanguages.includes(saved) ? saved : getBrowserLanguage()
    })

    const changeLanguage = (langCode) => {
        if (availableLanguages.includes(langCode)) {
            setLanguage(langCode)
            localStorage.setItem('language', langCode)
            document.documentElement.lang = langCode
        }
    }

    const toggleLanguage = () => {
        const currentIndex = availableLanguages.indexOf(language)
        const nextIndex = (currentIndex + 1) % availableLanguages.length
        changeLanguage(availableLanguages[nextIndex])
    }

    useEffect(() => {
        document.documentElement.lang = language
    }, [])

    return (
        <LanguageContext.Provider value={{
            language,
            changeLanguage,
            toggleLanguage,
            availableLanguages,
            t: translations[language]
        }}>
            {children}
        </LanguageContext.Provider>
    )
}