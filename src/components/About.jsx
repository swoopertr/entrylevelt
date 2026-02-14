import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
    const { t } = useLanguage()

    const trustIndicators = [
        { number: '0,000+', text: t.aboutTrusted },
        { text: t.aboutUniversities },
    ]

    return (
        <section className="bg-white dark:bg-slate-900 py-24" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 aspect-video flex items-center justify-center">
                        <div className="text-center p-8">
                            <svg className="w-16 h-16 mx-auto mb-4 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Image placeholder - Student studying</p>
                        </div>
                    </div>

                    <div className="lg:pl-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            {t.aboutTitle}
                        </h2>

                        <div className="text-slate-600 dark:text-slate-300 text-lg mb-8">
                            <p>{t.aboutText}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800 bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-300 text-xs font-medium"
                                    >
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>

                            <div className="text-sm">
                                <p className="font-semibold text-slate-900 dark:text-white">
                                    {trustIndicators[0].number} {trustIndicators[0].text}
                                </p>
                                <p className="text-slate-500 dark:text-slate-400">{trustIndicators[1].text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}