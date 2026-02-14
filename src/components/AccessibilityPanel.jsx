import { useState } from 'react'
import { useAccessibility } from '../contexts/AccessibilityContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function AccessibilityPanel() {
    const [isOpen, setIsOpen] = useState(false)
    const { settings, config, toggleSetting, resetSettings } = useAccessibility()
    const { t } = useLanguage()

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-4 bottom-4 z-50 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all flex items-center justify-center"
                aria-label="Accessibility settings"
            >
                <span className="text-xl">⚙️</span>
            </button>

            {isOpen && (
                <div className="fixed left-20 bottom-4 z-50 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                            {t.accessibilityTitle}
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-4">
                        {Object.entries(config).map(([key, setting]) => (
                            <div key={key} className="flex items-center justify-between">
                                <label className="text-sm text-slate-600 dark:text-slate-300">
                                    <span className="mr-2">{setting.icon}</span>
                                    {t[`accessibility${key.charAt(0).toUpperCase() + key.slice(1)}`] || setting.label}
                                </label>

                                <div className="flex gap-1">
                                    {setting.options.map(option => {
                                        const isSelected = settings[key] === option
                                        const displayValue = typeof option === 'boolean'
                                            ? (option ? 'On' : 'Off')
                                            : option

                                        return (
                                            <button
                                                key={option}
                                                onClick={() => toggleSetting(key)}
                                                className={`px-2 py-1 text-xs rounded transition-all ${isSelected
                                                        ? 'bg-primary-600 text-white'
                                                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                                    }`}
                                            >
                                                {displayValue}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={resetSettings}
                            className="w-full mt-4 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                        >
                            {t.accessibilityReset}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}