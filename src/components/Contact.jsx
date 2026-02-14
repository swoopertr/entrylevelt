import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
    const { t } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const formFields = [
        {
            name: 'name',
            label: t.contactName,
            type: 'text',
            placeholder: 'Jane Doe',
            colSpan: 'md:col-span-1',
        },
        {
            name: 'email',
            label: t.contactEmail,
            type: 'email',
            placeholder: 'jane@university.edu',
            colSpan: 'md:col-span-1',
        },
        {
            name: 'subject',
            label: t.contactSubject,
            type: 'text',
            placeholder: 'Course inquiry',
            colSpan: 'md:col-span-2',
        },
    ]

    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="contact">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.contactTitle}</h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{t.contactSub}</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {formFields.slice(0, 2).map((field) => (
                                <div key={field.name}>
                                    <label
                                        htmlFor={field.name}
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                                    >
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        required
                                        className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-primary-500 focus:ring-primary-500 shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                            >
                                {t.contactSubject}
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Course inquiry"
                                required
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-primary-500 focus:ring-primary-500 shadow-sm"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                            >
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                rows="4"
                                required
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-primary-500 focus:ring-primary-500 shadow-sm resize-none"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors dark:focus:ring-offset-slate-900"
                            >
                                {t.contactSubmit}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}