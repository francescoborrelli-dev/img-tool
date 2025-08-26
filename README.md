# IMG Tool

**IMG Tool** è un editor di immagini online gratuito, sviluppato in React + Vite, che permette di elaborare immagini direttamente nel browser in modo veloce, sicuro e senza upload su server esterni.

## Funzionalità principali

- **Upload multiplo** (max 20 file, drag & drop)
- **Anteprima immagini** caricate
- **Compressione** (canvas, qualità regolabile)
- **Ridimensionamento** (canvas, preset e personalizzato)
- **Ritaglio** (canvas, libero, proporzioni, preset social)
- **Rotazione** (canvas, angoli rapidi)
- **Conversione formato** (JPG, PNG, WebP, JPEG, AVIF)
- **Rinomina** (bulk e individuale, preview nomi)
- **Download ZIP** di tutti i file elaborati
- **Progress bar** e stato processing
- **Localizzazione** multilingua (IT, EN, FR, DE, ES, PT)
- **UI/UX responsive** (mobile, tablet, desktop)
- **Toast social proof** (notifiche random di feedback utenti)
- **Footer con link feedback e privacy**
- **Buy Me a Coffee** button integrato

## Funzionalità avanzate (in sviluppo / estendibili)

- **Upscaling AI** (es. ESRGAN, Replicate, Gigapixel-like)
- **Rimozione sfondo AI** (Remove.bg, Slazzer, WASM)
- **Supporto animazioni (GIF/WebP)**
- **Elaborazione batch ottimizzata**
- **Estensione con API esterne o WASM**

## Tech stack

- **React 18** + **Vite**
- **TypeScript**
- **CSS custom** (mobile-first, responsive)
- **browser-image-compression** (compressione client-side)
- **react-easy-crop** (ritaglio immagini)
- **JSZip** + **file-saver** (download ZIP)
- **MUI** (opzionale, icone)
- **Localizzazione custom** (translations.ts)

## Installazione e avvio locale

```bash
git clone https://github.com/borealedeso/img-tool.git
cd img-tool
npm install
npm run dev
```

Apri [http://localhost:5173](http://localhost:5173) nel browser.

## Struttura del progetto

- `/src/App.tsx` — componente principale, gestione stato, tool, UI
- `/src/lib/imageUtils.ts` — funzioni di elaborazione immagini (compress, resize, crop, rotate, convert, etc.)
- `/src/locales/translations.ts` — dizionario multilingua
- `/src/styles.css` — stile globale e tool
- `/src/landing.css` — stile landing page
- `/src/components/Toast.tsx`, `/Footer.tsx` — componenti UI

## Estendibilità

- **API esterne**: puoi integrare servizi AI per upscaling/rimozione sfondo modificando `imageUtils.ts`.
- **Nuovi tool**: aggiungi tool in `App.tsx` e aggiorna `translations.ts` per la localizzazione.
- **Nuove lingue**: aggiungi la traduzione in `translations.ts`.

## Note privacy

- Tutto il processing avviene **localmente** nel browser: nessuna immagine viene inviata a server esterni.
- Vedi la sezione Privacy & Cookie Policy nell'app.

## Autore

Francesco Borrelli — [francescoborrelli-dev](https://github.com/francescoborrelli-dev)

---

**IMG Tool** è pensato per essere veloce, semplice e sicuro. Se hai feedback o suggerimenti, usa il link nel footer!
