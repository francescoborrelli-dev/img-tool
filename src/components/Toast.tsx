import React, { useState, useEffect } from 'react'
import { useTranslation } from '../locales/useTranslation'

interface ToastProps {
  name?: string
  message?: string
  onComplete?: () => void
  onClose?: () => void
}

export const Toast: React.FC<ToastProps> = ({ name, message, onComplete, onClose }) => {
  const { t, currentLanguage } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [currentToast, setCurrentToast] = useState<{ name: string; message: string } | null>(null)

  useEffect(() => {
    // Se vengono passati name e message come props, usali
    if (name && message) {
      setCurrentToast({ name, message })
    } else {
      // Altrimenti seleziona un toast random (comportamento originale)
      const randomToast = t.toasts[Math.floor(Math.random() * t.toasts.length)]
      setCurrentToast(randomToast)
    }
    
    // Fade in
    setTimeout(() => setIsVisible(true), 100)
    
  }, [name, message, t.toasts])

  useEffect(() => {
    if (!currentToast) return

    // Calcola il tempo di lettura (minimo 4 secondi, max 8)
    const readingTime = Math.max(4000, Math.min(8000, currentToast.message.length * 50))
    
    // Fade out dopo il tempo di lettura
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete?.()
        onClose?.()
      }, 300) // Aspetta che finisca l'animazione
    }, readingTime)
  }, [currentToast, onComplete, onClose])

  if (!currentToast) return null

  // Traduzioni per il titolo del toast in base alla lingua
  const toastTitles = {
    it: "ti ha offerto una birra",
    en: "bought you a beer", 
    fr: "t'a offert une bière",
    de: "hat dir ein Bier spendiert",
    es: "te ha invitado una cerveza",
    pt: "ofereceu-te uma cerveja"
  }

  return (
    <div className={`toast ${isVisible ? 'toast-visible' : ''}`}>
      <div className="toast-content">
        <div className="toast-icon">🍻</div>
        <div className="toast-text">
          <div className="toast-title">
            {currentToast.name} {toastTitles[currentLanguage]}
          </div>
          <div className="toast-subtitle">
            "{currentToast.message}"
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toast
