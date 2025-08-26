import React from 'react'
import { useTranslation } from './locales/useTranslation'
import { Footer } from './components/Footer'
import './privacy.css'

export const PrivacyPolicy: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()

  return (
    <div className="privacy-page">
      {/* Header con logo e language selector */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo-section">
              <a href="/" className="header-brand-link">
                <img src="/imgtool.png" alt="IMG Tool Logo" className="header-logo" />
                <div className="header-text">
                  <h1>IMG Tool</h1>
                  <p className="subtitle">{t.privacy?.title || "Privacy & Cookie Policy"}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="language-selector">
              <div className="language-icon">🌍</div>
              <select 
                value={currentLanguage} 
                onChange={(e) => changeLanguage(e.target.value as any)}
                className="language-select"
              >
                <option value="it">🇮🇹 Italiano</option>
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="es">🇪🇸 Español</option>
                <option value="pt">🇵🇹 Português</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="privacy-content">
        <div className="privacy-container">
          <div className="privacy-header">
            <h1>{t.privacy?.title || "Privacy & Cookie Policy"}</h1>
            <p className="privacy-last-updated">
              {t.privacy?.lastUpdated || "Ultimo aggiornamento"}: 26 agosto 2025
            </p>
          </div>

          <div className="privacy-sections">
            {/* Placeholder per le sezioni della privacy policy */}
            <section className="privacy-section">
              <h2>{t.privacy?.introduction?.title || "Introduzione"}</h2>
              <p>{t.privacy?.introduction?.content || "Il contenuto della privacy policy verrà inserito qui..."}</p>
            </section>

            <section className="privacy-section">
              <h2>{t.privacy?.dataCollection?.title || "Raccolta Dati"}</h2>
              <p>{t.privacy?.dataCollection?.content || "Informazioni sulla raccolta e utilizzo dei dati..."}</p>
            </section>

            <section className="privacy-section">
              <h2>{t.privacy?.cookies?.title || "Cookie"}</h2>
              <p>{t.privacy?.cookies?.content || "Informazioni sull'utilizzo dei cookie..."}</p>
            </section>

            <section className="privacy-section">
              <h2>{t.privacy?.contact?.title || "Contatti"}</h2>
              <p>{t.privacy?.contact?.content || "Per qualsiasi domanda sulla privacy, contattaci..."}</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
