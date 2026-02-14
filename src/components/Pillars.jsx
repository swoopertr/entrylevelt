import { useLanguage } from '../contexts/LanguageContext'

export default function Pillars() {
    const { t } = useLanguage()

    const pillarOneFeatures = [
        { id: 1, title: t.feature1, description: t.feature1Desc, icon: '✏️' },
        { id: 2, title: t.feature2, description: t.feature2Desc, icon: '📚' },
        { id: 3, title: t.feature3, description: t.feature3Desc, icon: '🔍' },
        { id: 4, title: t.feature4, description: t.feature4Desc, icon: '📖' },
    ]

    const pillarTwoFeatures = [
        { id: 5, title: t.feature5, description: t.feature5Desc, icon: '💡' },
        { id: 6, title: t.feature6, description: t.feature6Desc, icon: '🗣️' },
        { id: 7, title: t.feature7, description: t.feature7Desc, icon: '👥' },
        { id: 8, title: t.feature8, description: t.feature8Desc, icon: '🎨' },
    ]

    const FeatureCard = ({ feature }) => (
        <div className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 text-lg">
                {feature.icon}
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
        </div>
    )

    return (
        <section className="bg-white dark:bg-slate-900 py-28" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                {t.pillar1Title}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg">{t.pillar1Sub}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {pillarOneFeatures.map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                {t.pillar2Title}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg">{t.pillar2Sub}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {pillarTwoFeatures.map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}