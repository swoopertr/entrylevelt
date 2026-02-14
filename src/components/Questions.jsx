import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Questions() {
    const { t } = useLanguage()
    const [openItem, setOpenItem] = useState(0)

    const faqItems = [
        { id: 0, question: t.q1, answer: t.a1 },
        { id: 1, question: t.q2, answer: t.a2 },
        { id: 2, question: t.q3, answer: t.a3 },
        { id: 3, question: t.q4, answer: t.a4 },
    ]

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-800" id="qa">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    {t.faqTitle}
                </h2>

                <div className="space-y-4">
                    {faqItems.map((item) => (
                        <div
                            key={item.id}
                            className={`faq-item bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden ${openItem === item.id ? 'active' : ''
                                }`}
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                                aria-expanded={openItem === item.id}
                                aria-controls={`faq-answer-${item.id}`}
                            >
                                <span className="font-semibold text-slate-800 dark:text-slate-200">
                                    {item.question}
                                </span>
                                <svg
                                    className={`faq-icon w-5 h-5 text-slate-400 transition-transform duration-300 ${openItem === item.id ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </button>

                            <div
                                id={`faq-answer-${item.id}`}
                                className="faq-content bg-slate-50 dark:bg-slate-800/50"
                                style={{
                                    maxHeight: openItem === item.id ? '200px' : '0',
                                    opacity: openItem === item.id ? 1 : 0,
                                }}
                            >
                                <div className="p-5 pt-0 text-slate-600 dark:text-slate-300">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}