import { useLanguage } from './contexts/LanguageContext'
import { useAccessibility } from './contexts/AccessibilityContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Pillars from './components/Pillars'
import Questions from './components/Questions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AccessibilityPanel from './components/AccessibilityPanel'

function App() {
  const { language, changeLanguage, availableLanguages } = useLanguage()

  return (
    <>
      <Header />

      <AccessibilityPanel />

      <main>
        <Hero />
        <About />
        <Features />
        <Pillars />
        <Questions />
        <Contact />
      </main>

      <Footer />

      {availableLanguages.length > 1 && (
        <div className="fixed bottom-4 right-4 z-50 flex gap-2">
          {availableLanguages.map(lang => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${language === lang
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              aria-label={`Switch to ${lang} language`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default App