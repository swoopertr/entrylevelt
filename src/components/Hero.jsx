import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <header className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 mb-8 animate-fade-in-up">
          <span className="text-xs font-bold text-primary-600 dark:text-primary-300 tracking-wide uppercase">{t.heroBadge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
          {t.heroTitle} <br className="hidden sm:block" />
          <span className="text-primary-600 dark:text-primary-400">{t.heroTitleSpan}</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.heroSubtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 text-white rounded-lg font-semibold shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-200"
            href="#"
          >
            {t.heroCtaPrimary}
          </a>
          <a
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
            href="#features"
          >
            {t.heroCtaSecondary}
          </a>
        </div>
      </div>
    </header>
  )
}