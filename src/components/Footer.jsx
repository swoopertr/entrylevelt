import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
    const { t } = useLanguage()

    const footerLinks = [
        { href: '#', label: t.footerPrivacy },
        { href: '#', label: t.footerTerms },
        { href: '#', label: t.footerTwitter },
        { href: '#', label: t.footerLinkedIn },
    ]

    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <span className="font-bold text-xl tracking-tight">EntryLevel</span>
                    <p className="text-slate-400 text-sm mt-1">{t.footerRights}</p>
                </div>

                <div className="flex space-x-6 text-sm text-slate-400">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}