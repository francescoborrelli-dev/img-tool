import React from 'react'
import { useTranslation } from '../locales/useTranslation'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo section */}
        <div className="footer-logo-section">
          <a href="/" className="footer-brand-link">
            <img src="/imgtool.png" alt="IMG Tool Logo" className="footer-logo" />
            <div className="footer-brand">
              <h4>IMG Tool</h4>
              <span className="footer-tagline">{t.footer?.copyright?.split(' - ')[2] || "Il tuo editor di immagini preferito"}</span>
            </div>
          </a>
        </div>

        {/* Links section */}
        <div className="footer-links">
          <a 
            href="https://forms.gle/HEJGDeAxJA5UY7VB8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link feedback-link"
          >
            <span className="footer-link-icon">💬</span>
            {t.footer?.feedback || "Lascia un tuo feedback"}
          </a>
          <a 
            href="/privacy" 
            className="footer-link privacy-link"
          >
            <span className="footer-link-icon">🔒</span>
            {t.footer?.privacy || "Privacy & Cookie Policy"}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>{t.footer?.copyright || "© 2025 IMG Tool - Francesco Borrelli - Il tuo editor di immagini preferito"}</p>
      </div>
    </footer>
  )
}
