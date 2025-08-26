import React, { useState, useEffect } from 'react'
import { useTranslation } from './locales/useTranslation'
import { Toast } from './components/Toast'
import { Footer } from './components/Footer'

export const LandingPage: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()
  const [toasts, setToasts] = useState<Array<{
    id: string
    name: string
    amount: string
    message: string
    timestamp: number
  }>>([])

  // Sistema di toast fake per social proof
  useEffect(() => {
    const showRandomToast = () => {
      if (!t.toasts || t.toasts.length === 0) return
      
      const donations = t.toasts
      const randomDonation = donations[Math.floor(Math.random() * donations.length)]
      
      const newToast = {
        id: Date.now().toString(),
        name: randomDonation.name,
        amount: '', // I toast nella struttura attuale non hanno amount
        message: randomDonation.message,
        timestamp: Date.now()
      }
      
      setToasts(prev => [...prev, newToast])
      
      // Rimuovi il toast dopo il tempo di lettura
      const readingTime = Math.max(3000, randomDonation.message.length * 50)
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== newToast.id))
      }, readingTime)
    }

    // Mostra il primo toast dopo 2 secondi
    const firstTimeout = setTimeout(showRandomToast, 2000)
    
    // Poi mostra toast casuali ogni 8-15 secondi
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% di probabilità
        showRandomToast()
      }
    }, Math.random() * 7000 + 8000)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [t.toasts])

  const handleCTAClick = () => {
    window.location.href = '/tool'
  }

  return (
    <div className="landing-page">
      {/* Header con logo e language selector */}
      <header className="landing-header">
        <div className="landing-header-content">
          <div className="landing-logo-section">
            <a href="/" className="landing-brand-link">
              <img src="/imgtool.png" alt="IMG Tool Logo" className="landing-logo" />
              <h1 className="landing-title">IMG Tool</h1>
            </a>
          </div>
          <div className="landing-language-selector">
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
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">{t.landing?.hero?.title || "Il Tool di Editing Immagini Più Completo"}</h2>
          <p className="hero-subtitle">{t.landing?.hero?.subtitle || "Comprimi, ridimensiona, ritaglia, converti e molto altro. Tutto gratis, direttamente nel browser."}</p>
          
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🗜️</span>
              <span className="feature-text">{t.tools?.compress || "Comprimi"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📐</span>
              <span className="feature-text">{t.tools?.resize || "Ridimensiona"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✂️</span>
              <span className="feature-text">{t.tools?.crop || "Ritaglia"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔄</span>
              <span className="feature-text">{t.tools?.convert || "Converti"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <span className="feature-text">{t.tools?.upscale || "Upscale"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span className="feature-text">{t.tools?.background || "Rimuovi Sfondo"}</span>
            </div>
          </div>

          <button className="cta-button" onClick={handleCTAClick}>
            <span className="cta-icon">🚀</span>
            {t.landing?.cta || "Accedi al Tool Completo"}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h3 className="section-title">{t.landing?.features?.title || "Perché Scegliere IMG Tool?"}</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card-icon">🌐</div>
            <h4>{t.landing?.features?.browser?.title || "100% Browser"}</h4>
            <p>{t.landing?.features?.browser?.desc || "Nessun download, nessuna installazione. Funziona direttamente nel browser."}</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">🔒</div>
            <h4>{t.landing?.features?.privacy?.title || "Privacy Totale"}</h4>
            <p>{t.landing?.features?.privacy?.desc || "Le tue immagini non lasciano mai il tuo dispositivo. Elaborazione locale al 100%."}</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">⚡</div>
            <h4>{t.landing?.features?.speed?.title || "Velocità Estrema"}</h4>
            <p>{t.landing?.features?.speed?.desc || "Elaborazione immediata senza attese. Risultati in pochi secondi."}</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">💰</div>
            <h4>{t.landing?.features?.free?.title || "Completamente Gratis"}</h4>
            <p>{t.landing?.features?.free?.desc || "Tutti gli strumenti, tutte le funzioni. Senza limiti, senza abbonamenti."}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="final-cta-content">
          <h3>{t.landing?.finalCta?.title || "Pronto a Iniziare?"}</h3>
          <p>{t.landing?.finalCta?.subtitle || "Unisciti a migliaia di utenti che hanno già semplificato il loro workflow."}</p>
          <button className="cta-button large" onClick={handleCTAClick}>
            <span className="cta-icon">🎯</span>
            {t.landing?.finalCta?.button || "Inizia Subito - È Gratis!"}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Toast Container per social proof */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            name={toast.name}
            message={toast.message}
            onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
          />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
