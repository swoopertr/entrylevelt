import { useLanguage } from '../contexts/LanguageContext'

export default function Features() {
    const { t } = useLanguage()

    const methodologyItems = [
        {
            id: 1,
            title: t.method1Title,
            description: t.method1Desc,
        },
        {
            id: 2,
            title: t.method2Title,
            description: t.method2Desc,
        },
        {
            id: 3,
            title: t.method3Title,
            description: t.method3Desc,
        },
    ]

    return (
        <section className="bg-slate-50 dark:bg-slate-800 py-28" id="methodology">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                        {t.methodologyTitle}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        {t.methodologySub}
                    </p>
                </div>

                <div className="space-y-8">
                    {methodologyItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                    {item.id.toString().padStart(2, '0')}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}