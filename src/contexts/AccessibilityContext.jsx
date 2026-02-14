import React, { createContext, useState, useContext, useEffect } from 'react'

const accessibilityConfig = {
    theme: {
        default: 'light',
        options: ['light', 'dark'],
        label: 'Theme',
        icon: '🌓'
    },
    contrast: {
        default: 'standard',
        options: ['standard', 'high'],
        label: 'Contrast',
        icon: '👁️'
    },
    fontSize: {
        default: 'medium',
        options: ['small', 'medium', 'large', 'x-large'],
        label: 'Font Size',
        icon: '🔤',
        classMap: {
            'small': 'text-sm',
            'medium': 'text-base',
            'large': 'text-lg',
            'x-large': 'text-xl'
        }
    },
    fontFamily: {
        default: 'default',
        options: ['default', 'dyslexic', 'serif'],
        label: 'Font Family',
        icon: '📝',
        classMap: {
            'default': 'font-sans',
            'dyslexic': 'font-dyslexic',
            'serif': 'font-serif'
        }
    },
    spacing: {
        default: 'normal',
        options: ['normal', 'wide', 'wider'],
        label: 'Line Spacing',
        icon: '📏',
        classMap: {
            'normal': 'leading-normal',
            'wide': 'leading-relaxed',
            'wider': 'leading-loose'
        }
    },
    motion: {
        default: 'normal',
        options: ['normal', 'reduced'],
        label: 'Motion',
        icon: '🎬',
        classMap: {
            'normal': '',
            'reduced': 'reduce-motion'
        }
    },
    textToSpeech: {
        default: false,
        options: [true, false],
        label: 'Text to Speech',
        icon: '🔊'
    }
}

const AccessibilityContext = createContext()

export const useAccessibility = () => useContext(AccessibilityContext)

export const AccessibilityProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('accessibility')
        if (saved) {
            try {
                return JSON.parse(saved)
            } catch {
                return getDefaultSettings()
            }
        }
        return getDefaultSettings()
    })

    function getDefaultSettings() {
        const defaults = {}
        Object.keys(accessibilityConfig).forEach(key => {
            defaults[key] = accessibilityConfig[key].default
        })
        return defaults
    }

    const updateSetting = (key, value) => {
        if (accessibilityConfig[key] &&
            accessibilityConfig[key].options.includes(value)) {
            setSettings(prev => {
                const newSettings = { ...prev, [key]: value }
                localStorage.setItem('accessibility', JSON.stringify(newSettings))
                return newSettings
            })
        }
    }

    const toggleSetting = (key) => {
        const config = accessibilityConfig[key]
        if (!config) return

        const currentValue = settings[key]
        const options = config.options

        if (options.length === 2 &&
            options.includes(true) &&
            options.includes(false)) {
            updateSetting(key, !currentValue)
        } else {
            const currentIndex = options.indexOf(currentValue)
            const nextIndex = (currentIndex + 1) % options.length
            updateSetting(key, options[nextIndex])
        }
    }

    const resetSettings = () => {
        setSettings(getDefaultSettings())
        localStorage.removeItem('accessibility')
    }

    const getAccessibilityClasses = () => {
        const classes = []

        if (settings.theme === 'dark') {
            classes.push('dark')
        }

        if (settings.contrast === 'high') {
            classes.push('high-contrast')
        }

        if (accessibilityConfig.fontSize.classMap[settings.fontSize]) {
            classes.push(accessibilityConfig.fontSize.classMap[settings.fontSize])
        }

        if (accessibilityConfig.fontFamily.classMap[settings.fontFamily]) {
            classes.push(accessibilityConfig.fontFamily.classMap[settings.fontFamily])
        }

        if (accessibilityConfig.spacing.classMap[settings.spacing]) {
            classes.push(accessibilityConfig.spacing.classMap[settings.spacing])
        }

        if (settings.motion === 'reduced') {
            classes.push('reduce-motion')
        }

        return classes.join(' ')
    }

    useEffect(() => {
        const classes = getAccessibilityClasses()
        document.body.className = classes
    }, [settings])

    return (
        <AccessibilityContext.Provider value={{
            settings,
            config: accessibilityConfig,
            updateSetting,
            toggleSetting,
            resetSettings,
            getAccessibilityClasses
        }}>
            {children}
        </AccessibilityContext.Provider>
    )
}