import { useLanguage } from '../contexts/LanguageContext'
import { useAccessibility } from '../contexts/AccessibilityContext'

export default function Header() {
    const { t, toggleLanguage } = useLanguage()
    const { settings, toggleSetting } = useAccessibility()

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img
                            alt="EntryLevel Logo"
                            className="h-8 w-auto"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF12vK7pEkXVxXcxryJikhK9NcEGHPv0OQboYS687wpKwuK-k4h0IaXbAJTooANRIcbNKTvvvmHKsd7jWVge6cS79z1azqXtnrAcmWgiczAHYEhMeEZCQeaawlTCCn6--y9tlVySvtNruo3a5qnv-GGyAw4qSNxGduU_ApEzbEXQw4lt3UuBY3moHjegVUO4w8cH-XhXj2Snrkc7chqWfbBrrzBHW9IwvJNOmh4Le58pxcR8P6RZ7oOq2xPQs37c9FOW1v0T_u4Q"
                        />
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">EntryLevel</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors" href="#">{t.navHome}</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors" href="#about">{t.navAbout}</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors" href="#features">{t.navFeatures}</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors" href="#methodology">{t.navMethodology}</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors" href="#qa">{t.navQA}</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors" href="#contact">{t.navContact}</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={() => toggleSetting('theme')}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            aria-label="Toggle dark mode"
                        >
                            {settings.theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => toggleSetting('contrast')}
                            className={`text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ${settings.contrast === 'high' ? 'ring-2 ring-primary-500 rounded' : ''}`}
                            aria-label="Toggle high contrast"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-2V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </button>

                        <div
                            className="text-slate-600 dark:text-slate-300 font-medium cursor-pointer hover:text-primary-600 dark:hover:text-primary-400"
                            onClick={toggleLanguage}
                        >
                            {t.navLanguage}
                        </div>

                        <a className="text-slate-600 dark:text-slate-300 font-medium hover:text-primary-600 dark:hover:text-primary-400" href="#">{t.navLogin}</a>

                        <a className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm" href="#">
                            {t.navSignUp}
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}