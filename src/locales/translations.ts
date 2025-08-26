export interface Translation {
  // Header
  title: string;
  subtitle: string;
  
  // Upload Area
  uploadTitle: string;
  uploadSubtitle: string;
  uploadButton: string;
  dragDrop: string;
  maxFiles: string;
  supportedFormats: string;
  
  // Tools
  tools: {
    compress: string;
    resize: string;
    crop: string;
    convert: string;
    rotate: string;
    rename: string;
    upscale: string;
    background: string;
  };
  
  // Tool descriptions
  toolDescriptions: {
    compress: string;
    resize: string;
    crop: string;
    convert: string;
    rotate: string;
    rename: string;
    upscale: string;
    background: string;
  };
  
  // Common buttons
  backButton: string;
  downloadButton: string;
  newBadge: string;
  selectTool: string;
  
  // Compression tool
  compression: {
    title: string;
    quality: string;
    high: string;
    medium: string;
    low: string;
    originalSize: string;
    compressedSize: string;
    savings: string;
    estimatedReduction: string;
    losslessQuality: string;
    balancedCompression: string;
    maximumCompression: string;
    processButton: string;
  };
  
  // Resize tool
  resize: {
    title: string;
    presets: string;
    custom: string;
    width: string;
    height: string;
    note: string;
    processButton: string;
  };
  
  // Crop tool
  crop: {
    title: string;
    preview: string;
    mode: string;
    free: string;
    ratio: string;
    presets: string;
    square: string;
    portrait: string;
    landscape: string;
    instagram: string;
    story: string;
    youtube: string;
    coordinates: string;
    x: string;
    y: string;
    processButton: string;
  };
  
  // Convert tool
  convert: {
    title: string;
    format: string;
    currentFormat: string;
    benefits: string;
    processButton: string;
    formats: {
      webp: {
        title: string;
        description: string;
        benefits: string[];
      };
      png: {
        title: string;
        description: string;
        benefits: string[];
      };
      jpg: {
        title: string;
        description: string;
        benefits: string[];
      };
      avif: {
        title: string;
        description: string;
        benefits: string[];
      };
    };
  };
  
  // Rotate tool
  rotate: {
    title: string;
    angle: string;
    quick: string;
    processButton: string;
  };
  
  // Rename tool
  rename: {
    title: string;
    mode: string;
    bulk: string;
    individual: string;
    bulkDescription: string;
    individualDescription: string;
    baseName: string;
    preview: string;
    processButton: string;
    bulkProcessButton: string;
  };
  
  // Upscale tool
  upscale: {
    title: string;
    factor: string;
    double: string;
    quadruple: string;
    ultraHd: string;
    preview: string;
    original: string;
    upscaled: string;
    estimate: string;
    info: {
      algorithm: string;
      details: string;
      prints: string;
    };
    processButton: string;
  };
  
  // Background removal tool
  background: {
    title: string;
    mode: string;
    auto: string;
    precision: string;
    autoDescription: string;
    precisionDescription: string;
    preview: string;
    withBackground: string;
    withoutBackground: string;
    removed: string;
    info: {
      ai: string;
      transparency: string;
      perfect: string;
    };
    processButton: string;
  };
  
  // Processing states
  processing: {
    title: string;
    progress: string;
  };
  
  // Results
  results: {
    title: string;
    filesProcessed: string;
    downloadAll: string;
    downloadSingle: string;
    processMore: string;
  };
  
  // Language selector
  language: {
    select: string;
    italian: string;
    english: string;
    french: string;
    german: string;
    spanish: string;
    portuguese: string;
  };
  
  // Fake donation toasts
  toasts: Array<{
    name: string;
    message: string;
  }>;
  
  // Landing page content
  landing: {
    hero: {
      title: string;
      subtitle: string;
    };
    cta: string;
    features: {
      title: string;
      browser: {
        title: string;
        desc: string;
      };
      privacy: {
        title: string;
        desc: string;
      };
      speed: {
        title: string;
        desc: string;
      };
      free: {
        title: string;
        desc: string;
      };
    };
    finalCta: {
      title: string;
      subtitle: string;
      button: string;
    };
    footer: string;
  };

  // Footer completo
  footer: {
    feedback: string;
    privacy: string;
    copyright: string;
  };

  // Privacy Policy
  privacy: {
    title: string;
    lastUpdated: string;
    introduction: {
      title: string;
      content: string;
    };
    dataCollection: {
      title: string;
      content: string;
    };
    cookies: {
      title: string;
      content: string;
    };
    contact: {
      title: string;
      content: string;
    };
  };
  
  // Error messages
  errors: {
    noImages: string;
    noImagesSubtitle: string;
    backToHome: string;
    processingError: string;
  };
  
  // Tips and tooltips
  tips: {
    qualityRecommendation: string;
    aspectRatioNote: string;
    uploadSupported: string;
    maxFiles: string;
    dragAndDrop: string;
  };
  
  // Tool selection
  toolSelection: {
    title: string;
    noToolSelected: string;
  };
  
  // Info items
  info: {
    lossless: string;
    fast: string;
    quality: string;
    smartResize: string;
    aspectRatio: string;
    multipleFormats: string;
    instantRotation: string;
    batchRename: string;
  };
}

export const translations: Record<string, Translation> = {
  it: {
    title: "IMG Tool",
    subtitle: "Strumento completo per l'elaborazione delle immagini",
    
    uploadTitle: "Carica le tue immagini",
    uploadSubtitle: "Trascina i file qui o clicca per selezionare",
    uploadButton: "Seleziona File",
    dragDrop: "Trascina e rilascia qui",
    maxFiles: "Massimo 20 file",
    supportedFormats: "JPG, PNG, WebP, GIF",
    
    tools: {
      compress: "Comprimi",
      resize: "Ridimensiona", 
      crop: "Ritaglia",
      convert: "Converti",
      rotate: "Ruota",
      rename: "Rinomina",
      upscale: "Upscale",
      background: "Rimuovi Sfondo"
    },
    
    toolDescriptions: {
      compress: "Riduci dimensioni file",
      resize: "Cambia dimensioni",
      crop: "Ritaglia porzioni",
      convert: "Cambia formato",
      rotate: "Ruota immagini",
      rename: "Rinomina file",
      upscale: "Ingrandisci qualità",
      background: "Rimuovi sfondo"
    },
    
    backButton: "← Torna alla selezione",
    downloadButton: "📥 Scarica",
    newBadge: "NUOVO!",
    selectTool: "Seleziona uno strumento per iniziare",
    
    compression: {
      title: "🗜️ Comprimi Immagini",
      quality: "Livello di compressione",
      high: "Alta",
      medium: "Media", 
      low: "Bassa",
      originalSize: "Dimensione originale",
      compressedSize: "Dopo compressione",
      savings: "Risparmio stimato",
      estimatedReduction: "Riduzione stimata",
      losslessQuality: "Qualità senza perdite visibili",
      balancedCompression: "Bilanciamento qualità/dimensione",
      maximumCompression: "Massima compressione",
      processButton: "🗜️ Comprimi Immagini"
    },
    
    resize: {
      title: "📐 Ridimensiona Immagini",
      presets: "Dimensioni predefinite",
      custom: "Personalizzato",
      width: "Larghezza",
      height: "Altezza",
      note: "Se una dimensione è 0, verrà mantenuta la proporzione originale",
      processButton: "📐 Ridimensiona"
    },
    
    crop: {
      title: "✂️ Ritaglia Immagini",
      preview: "Anteprima ritaglio:",
      mode: "Modalità ritaglio",
      free: "Libero",
      ratio: "Proporzioni",
      presets: "Preset social",
      square: "Quadrato",
      portrait: "Ritratto",
      landscape: "Paesaggio", 
      instagram: "Instagram",
      story: "Storia",
      youtube: "YouTube",
      coordinates: "Coordinate ritaglio",
      x: "X",
      y: "Y",
      processButton: "✂️ Ritaglia"
    },
    
    convert: {
      title: "🔄 Converti Formato",
      format: "Formato di destinazione",
      currentFormat: "Formato attuale",
      benefits: "Vantaggi",
      processButton: "🔄 Converti",
      formats: {
        webp: {
          title: "WebP Moderno",
          description: "Formato web di nuova generazione",
          benefits: ["Dimensioni ridotte del 25-50%", "Qualità superiore", "Supporto trasparenza"]
        },
        png: {
          title: "PNG Lossless", 
          description: "Qualità perfetta con trasparenza",
          benefits: ["Qualità senza perdite", "Supporto trasparenza", "Ideale per loghi"]
        },
        jpg: {
          title: "JPEG Classico",
          description: "Standard universale per foto",
          benefits: ["Compatibilità universale", "Dimensioni ottimizzate", "Ideale per fotografie"]
        },
        avif: {
          title: "AVIF Futuro",
          description: "Formato di nuova generazione",
          benefits: ["Compressione avanzata", "Qualità eccellente", "Supporto HDR"]
        }
      }
    },
    
    rotate: {
      title: "🔄 Ruota Immagini",
      angle: "Angolo di rotazione",
      quick: "Rotazioni rapide",
      processButton: "🔄 Ruota"
    },
    
    rename: {
      title: "📝 Rinomina Immagini",
      mode: "Modalità rinomina",
      bulk: "Rinomina tutte",
      individual: "Rinomina singole",
      bulkDescription: "Stesso nome per tutte",
      individualDescription: "Nome personalizzato per ognuna", 
      baseName: "Nome base",
      preview: "Anteprima nomi:",
      processButton: "📝 Rinomina",
      bulkProcessButton: "📝 Rinomina Tutte"
    },
    
    upscale: {
      title: "🚀 Upscale Immagini",
      factor: "Fattore di ingrandimento",
      double: "Raddoppia",
      quadruple: "Quadruplica", 
      ultraHd: "Ultra HD",
      preview: "Anteprima risultato:",
      original: "Originale",
      upscaled: "Upscalata",
      estimate: "Stima: ~{factor}x più grande",
      info: {
        algorithm: "Algoritmo AI per migliorare la qualità",
        details: "Mantiene dettagli e nitidezza",
        prints: "Ideale per stampe di alta qualità"
      },
      processButton: "🚀 Ingrandisci {factor}x"
    },
    
    background: {
      title: "🎨 Rimuovi Sfondo",
      mode: "Modalità rimozione",
      auto: "AI Automatico",
      precision: "Alta Precisione",
      autoDescription: "Rilevamento intelligente",
      precisionDescription: "Risultati professionali",
      preview: "Anteprima rimozione:",
      withBackground: "Con sfondo",
      withoutBackground: "Senza sfondo", 
      removed: "Sfondo rimosso",
      info: {
        ai: "AI avanzata per riconoscimento oggetti",
        transparency: "Mantiene trasparenza PNG",
        perfect: "Perfetto per loghi e prodotti"
      },
      processButton: "🎨 Rimuovi Sfondo"
    },
    
    processing: {
      title: "Processando le immagini...",
      progress: "Progresso"
    },
    
    results: {
      title: "✅ Elaborazione Completata!",
      filesProcessed: "file elaborati",
      downloadAll: "📦 Scarica Tutto (ZIP)",
      downloadSingle: "📥 Scarica",
      processMore: "🔄 Elabora Altre Immagini"
    },
    
    language: {
      select: "Lingua",
      italian: "🇮🇹 Italiano",
      english: "🇬🇧 English", 
      french: "🇫🇷 Français",
      german: "🇩🇪 Deutsch",
      spanish: "🇪🇸 Español",
      portuguese: "🇵🇹 Português"
    },
    
    toasts: [
      { name: "Luca", message: "Oh meno male, mi hai salvato la presentazione di domani!" },
      { name: "Martina", message: "Finalmente un tool che funziona senza farmi impazzire." },
      { name: "Gianni", message: "Mi hai fatto risparmiare due ore di lavoro, grazie mille!" },
      { name: "Chiara", message: "Non so come avrei fatto senza, davvero." },
      { name: "Davide", message: "Era esattamente quello che cercavo da giorni." },
      { name: "Sara", message: "Funziona meglio di quanto pensassi, ottimo!" },
      { name: "Alessandro", message: "Stavo impazzendo, poi ho trovato questo… geniale." },
      { name: "Paola", message: "Non ho parole, mi hai risolto tutto in un attimo." },
      { name: "Marco", message: "Grande! Ora posso finalmente consegnare il lavoro in tempo." },
      { name: "Elisa", message: "Semplice, veloce e pure bello da usare. Complimenti." },
      { name: "Andrea", message: "Ero bloccato da ore, mi hai tolto un peso enorme." },
      { name: "Francesca", message: "Mi hai fatto sembrare un genio con i miei colleghi." },
      { name: "Federico", message: "Lo userò di nuovo, garantito." },
      { name: "Silvia", message: "Mi hai semplificato la vita, davvero grazie." },
      { name: "Giulio", message: "Era proprio quello che speravo di trovare." },
      { name: "Anna", message: "Non ci credo che ci ho messo così poco!" },
      { name: "Matteo", message: "Perfetto al primo colpo, incredibile." },
      { name: "Claudia", message: "Era urgente, e tu mi hai salvato in extremis." },
      { name: "Enrico", message: "Sei ufficialmente nella mia lista dei preferiti." },
      { name: "Ilaria", message: "Ho provato altri strumenti ma questo li batte tutti." },
      { name: "Roberto", message: "Una mano santa, non so che dire." },
      { name: "Simona", message: "Così dovrebbe funzionare tutto su internet, grazie." },
      { name: "Cristian", message: "Non mi aspettavo fosse così immediato, wow." },
      { name: "Marta", message: "Non mi hai solo aiutato, mi hai salvato la giornata." },
      { name: "Pietro", message: "Era complicato, ma hai reso tutto facilissimo." },
      { name: "Giorgia", message: "Perfetto, ora ho chiuso il progetto senza stress." },
      { name: "Valerio", message: "Non sai quanto tempo mi hai fatto recuperare." },
      { name: "Laura", message: "Lo userò ogni settimana, troppo utile." },
      { name: "Stefano", message: "Mi hai letteralmente tolto le castagne dal fuoco." },
      { name: "Beatrice", message: "Non potevo chiedere di meglio." },
      { name: "Fabio", message: "Sono rimasto a bocca aperta, ottimo lavoro." },
      { name: "Michela", message: "Ero disperata, ora invece sono rilassata. Grazie!" },
      { name: "Camilla", message: "Hai reso tutto così semplice da sembrare magia." },
      { name: "Tommaso", message: "Avevo perso la speranza, ma mi hai salvato." },
      { name: "Serena", message: "Ora sì che posso respirare tranquilla." },
      { name: "Lorenzo", message: "Non mi ha mai funzionato niente al primo tentativo. Fino ad oggi." },
      { name: "Elena", message: "Grazie mille, sei stato il mio asso nella manica." },
      { name: "Gabriele", message: "Sei ufficialmente il mio tool preferito." },
      { name: "Alessia", message: "Non immaginavo fosse così immediato, pazzesco." },
      { name: "Niccolò", message: "Un piccolo gesto per un grande aiuto." },
      { name: "Isabella", message: "Sono felicissima di averti trovato." },
      { name: "Carlo", message: "Non ho dovuto muovere un dito, incredibile." },
      { name: "Giada", message: "Ho risolto in 5 minuti quello che mi bloccava da ore." },
      { name: "Manuel", message: "Grazie, mi hai fatto fare bella figura." },
      { name: "Sofia", message: "Funziona davvero, e pure alla grande!" },
      { name: "Riccardo", message: "Mi hai reso la vita più semplice, punto." },
      { name: "Caterina", message: "Era un incubo, ora invece è un piacere." },
      { name: "Filippo", message: "Hai tolto tutta la fatica in un click." },
      { name: "Aurora", message: "Finalmente un tool che mantiene le promesse." }
    ],
    
    landing: {
      hero: {
        title: "Il Tool di Editing Immagini Più Completo",
        subtitle: "Comprimi, ridimensiona, ritaglia, converti e molto altro. Tutto gratis, direttamente nel browser."
      },
      cta: "🚀 Accedi al Tool Completo",
      features: {
        title: "Perché Scegliere IMG Tool?",
        browser: {
          title: "100% Browser",
          desc: "Nessun download, nessuna installazione. Funziona direttamente nel browser."
        },
        privacy: {
          title: "Privacy Totale",
          desc: "Le tue immagini non lasciano mai il tuo dispositivo. Elaborazione locale al 100%."
        },
        speed: {
          title: "Velocità Estrema",
          desc: "Elaborazione immediata senza attese. Risultati in pochi secondi."
        },
        free: {
          title: "Completamente Gratis",
          desc: "Tutti gli strumenti, tutte le funzioni. Senza limiti, senza abbonamenti."
        }
      },
      finalCta: {
        title: "Pronto a Iniziare?",
        subtitle: "Unisciti a migliaia di utenti che hanno già semplificato il loro workflow.",
        button: "🎯 Inizia Subito - È Gratis!"
      },
      footer: "Il tuo editor di immagini preferito"
    },
    
    errors: {
      noImages: "Ops... non hai ancora caricato nessuna immagine",
      noImagesSubtitle: "Devi prima caricare almeno una immagine per usare gli strumenti di editing.",
      backToHome: "Torna alla Home",
      processingError: "Errore durante il processing delle immagini"
    },
    
    tips: {
      qualityRecommendation: "Per una qualità ottimale, senza evidente perdita visibile di qualità si consiglia di stare tra 70-80%.",
      aspectRatioNote: "Se una dimensione è 0, verrà mantenuta la proporzione originale",
      uploadSupported: "Supportati: JPG, PNG, GIF, SVG, WEBP",
      maxFiles: "max 20 file",
      dragAndDrop: "Trascina e rilascia qui le tue immagini"
    },
    
    toolSelection: {
      title: "Scegli cosa fare adesso",
      noToolSelected: "Carica prima le immagini per usare gli strumenti"
    },
    
    info: {
      lossless: "Compressione senza perdite visibili",
      fast: "Elaborazione veloce e efficiente",
      quality: "Mantiene la qualità originale",
      smartResize: "Ridimensionamento intelligente",
      aspectRatio: "Mantiene proporzioni",
      multipleFormats: "Supporta tutti i formati principali",
      instantRotation: "Rotazione istantanea",
      batchRename: "Rinomina in blocco"
    },

    footer: {
      feedback: "Lascia un tuo feedback",
      privacy: "Privacy & Cookie Policy",
      copyright: "© 2025 IMG Tool - Francesco Borrelli - Il tuo editor di immagini preferito"
    },

    privacy: {
      title: "Privacy & Cookie Policy",
      lastUpdated: "Ultimo aggiornamento",
      introduction: {
        title: "Introduzione",
        content: "Il contenuto della privacy policy verrà inserito qui. Questa sezione spiegherà come trattiamo i tuoi dati personali e la tua privacy."
      },
      dataCollection: {
        title: "Raccolta Dati",
        content: "Informazioni dettagliate su quali dati raccogliamo, come li utilizziamo e come li proteggiamo."
      },
      cookies: {
        title: "Cookie",
        content: "Informazioni sui cookie utilizzati dal nostro sito web e come gestire le tue preferenze."
      },
      contact: {
        title: "Contatti",
        content: "Per qualsiasi domanda riguardo questa privacy policy, puoi contattarci attraverso il modulo feedback."
      }
    }
  },
  
  en: {
    title: "IMG Tool", 
    subtitle: "Complete image processing tool",
    
    uploadTitle: "Upload your images",
    uploadSubtitle: "Drag files here or click to select",
    uploadButton: "Select Files",
    dragDrop: "Drag and drop here",
    maxFiles: "Maximum 20 files",
    supportedFormats: "JPG, PNG, WebP, GIF",
    
    tools: {
      compress: "Compress",
      resize: "Resize",
      crop: "Crop", 
      convert: "Convert",
      rotate: "Rotate",
      rename: "Rename",
      upscale: "Upscale",
      background: "Remove Background"
    },
    
    toolDescriptions: {
      compress: "Reduce file size",
      resize: "Change dimensions",
      crop: "Crop portions",
      convert: "Change format",
      rotate: "Rotate images",
      rename: "Rename files",
      upscale: "Enhance quality",
      background: "Remove background"
    },
    
    backButton: "← Back to selection",
    downloadButton: "📥 Download",
    newBadge: "NEW!",
    selectTool: "Select a tool to get started",
    
    compression: {
      title: "🗜️ Compress Images",
      quality: "Compression level",
      high: "High",
      medium: "Medium",
      low: "Low", 
      originalSize: "Original size",
      compressedSize: "After compression",
      savings: "Estimated savings",
      estimatedReduction: "Estimated reduction",
      losslessQuality: "Quality without visible loss",
      balancedCompression: "Quality/size balance",
      maximumCompression: "Maximum compression",
      processButton: "🗜️ Compress Images"
    },
    
    resize: {
      title: "📐 Resize Images",
      presets: "Preset sizes",
      custom: "Custom",
      width: "Width",
      height: "Height",
      note: "If one dimension is 0, original aspect ratio will be maintained",
      processButton: "📐 Resize"
    },
    
    crop: {
      title: "✂️ Crop Images",
      preview: "Crop preview:",
      mode: "Crop mode",
      free: "Free",
      ratio: "Aspect ratio",
      presets: "Social presets",
      square: "Square",
      portrait: "Portrait", 
      landscape: "Landscape",
      instagram: "Instagram",
      story: "Story",
      youtube: "YouTube",
      coordinates: "Crop coordinates",
      x: "X",
      y: "Y",
      processButton: "✂️ Crop"
    },
    
    convert: {
      title: "🔄 Convert Format",
      format: "Target format",
      currentFormat: "Current format",
      benefits: "Benefits",
      processButton: "🔄 Convert",
      formats: {
        webp: {
          title: "Modern WebP",
          description: "Next-generation web format",
          benefits: ["25-50% smaller size", "Superior quality", "Transparency support"]
        },
        png: {
          title: "Lossless PNG",
          description: "Perfect quality with transparency", 
          benefits: ["Lossless quality", "Transparency support", "Perfect for logos"]
        },
        jpg: {
          title: "Classic JPEG", 
          description: "Universal standard for photos",
          benefits: ["Universal compatibility", "Optimized size", "Perfect for photography"]
        },
        avif: {
          title: "Future AVIF",
          description: "Next-generation format",
          benefits: ["Advanced compression", "Excellent quality", "HDR support"]
        }
      }
    },
    
    rotate: {
      title: "🔄 Rotate Images",
      angle: "Rotation angle", 
      quick: "Quick rotations",
      processButton: "🔄 Rotate"
    },
    
    rename: {
      title: "📝 Rename Images",
      mode: "Rename mode",
      bulk: "Rename all",
      individual: "Rename individual",
      bulkDescription: "Same name for all",
      individualDescription: "Custom name for each",
      baseName: "Base name",
      preview: "Name preview:",
      processButton: "📝 Rename",
      bulkProcessButton: "📝 Rename All"
    },
    
    upscale: {
      title: "🚀 Upscale Images",
      factor: "Enlargement factor",
      double: "Double",
      quadruple: "Quadruple",
      ultraHd: "Ultra HD",
      preview: "Result preview:",
      original: "Original",
      upscaled: "Upscaled",
      estimate: "Estimate: ~{factor}x larger",
      info: {
        algorithm: "AI algorithm to improve quality",
        details: "Maintains details and sharpness", 
        prints: "Perfect for high-quality prints"
      },
      processButton: "🚀 Upscale {factor}x"
    },
    
    background: {
      title: "🎨 Remove Background",
      mode: "Removal mode",
      auto: "AI Automatic",
      precision: "High Precision",
      autoDescription: "Smart detection",
      precisionDescription: "Professional results",
      preview: "Removal preview:",
      withBackground: "With background",
      withoutBackground: "Without background",
      removed: "Background removed",
      info: {
        ai: "Advanced AI for object recognition",
        transparency: "Maintains PNG transparency",
        perfect: "Perfect for logos and products"
      },
      processButton: "🎨 Remove Background"
    },
    
    processing: {
      title: "Processing images...",
      progress: "Progress"
    },
    
    results: {
      title: "✅ Processing Complete!",
      filesProcessed: "files processed",
      downloadAll: "📦 Download All (ZIP)",
      downloadSingle: "📥 Download",
      processMore: "🔄 Process More Images"
    },
    
    language: {
      select: "Language",
      italian: "🇮🇹 Italiano",
      english: "🇬🇧 English",
      french: "🇫🇷 Français",
      german: "🇩🇪 Deutsch", 
      spanish: "🇪🇸 Español",
      portuguese: "🇵🇹 Português"
    },
    
    toasts: [
      { name: "Luke", message: "Thank God, you saved my presentation for tomorrow!" },
      { name: "Martina", message: "Finally a tool that works without driving me crazy." },
      { name: "John", message: "You saved me two hours of work, thank you so much!" },
      { name: "Claire", message: "I don't know how I would have done it without this, really." },
      { name: "David", message: "This was exactly what I was looking for for days." },
      { name: "Sarah", message: "Works better than I thought, excellent!" },
      { name: "Alex", message: "I was going crazy, then I found this... genius." },
      { name: "Paula", message: "I have no words, you solved everything in an instant." },
      { name: "Mark", message: "Great! Now I can finally deliver the work on time." },
      { name: "Elise", message: "Simple, fast and even beautiful to use. Congratulations." },
      { name: "Andrew", message: "I was stuck for hours, you took a huge weight off me." },
      { name: "Frances", message: "You made me look like a genius to my colleagues." },
      { name: "Fred", message: "I'll use it again, guaranteed." },
      { name: "Sylvia", message: "You simplified my life, really thank you." },
      { name: "Julian", message: "This was exactly what I hoped to find." },
      { name: "Anna", message: "I can't believe it took me so little time!" },
      { name: "Matthew", message: "Perfect on the first try, incredible." },
      { name: "Claudia", message: "It was urgent, and you saved me at the last minute." },
      { name: "Henry", message: "You're officially on my favorites list." },
      { name: "Hilary", message: "I tried other tools but this beats them all." },
      { name: "Robert", message: "A godsend, I don't know what to say." },
      { name: "Simone", message: "This is how everything on the internet should work, thanks." },
      { name: "Christian", message: "I didn't expect it to be so immediate, wow." },
      { name: "Martha", message: "You didn't just help me, you saved my day." },
      { name: "Peter", message: "It was complicated, but you made everything super easy." },
      { name: "Georgia", message: "Perfect, now I've closed the project without stress." },
      { name: "Valery", message: "You don't know how much time you saved me." },
      { name: "Laura", message: "I'll use it every week, too useful." },
      { name: "Stephen", message: "You literally got me out of trouble." },
      { name: "Beatrice", message: "I couldn't ask for better." },
      { name: "Fabio", message: "I was speechless, excellent work." },
      { name: "Michelle", message: "I was desperate, now I'm relaxed instead. Thanks!" },
      { name: "Camilla", message: "You made everything so simple it seems like magic." },
      { name: "Thomas", message: "I had lost hope, but you saved me." },
      { name: "Serena", message: "Now I can breathe easy." },
      { name: "Lawrence", message: "Nothing ever worked for me on the first try. Until today." },
      { name: "Elena", message: "Thank you so much, you were my ace in the hole." },
      { name: "Gabriel", message: "You're officially my favorite tool." },
      { name: "Alexia", message: "I didn't imagine it would be so immediate, amazing." },
      { name: "Nicholas", message: "A small gesture for great help." },
      { name: "Isabella", message: "I'm so happy I found you." },
      { name: "Charles", message: "I didn't have to lift a finger, incredible." },
      { name: "Jade", message: "I solved in 5 minutes what had been blocking me for hours." },
      { name: "Manuel", message: "Thanks, you made me look good." },
      { name: "Sophia", message: "It really works, and great too!" },
      { name: "Richard", message: "You made my life simpler, period." },
      { name: "Catherine", message: "It was a nightmare, now it's a pleasure instead." },
      { name: "Philip", message: "You took all the effort away with one click." },
      { name: "Aurora", message: "Finally a tool that keeps its promises." }
    ],
    
    landing: {
      hero: {
        title: "The Most Complete Image Editing Tool",
        subtitle: "Compress, resize, crop, convert and much more. All free, directly in the browser."
      },
      cta: "🚀 Access the Complete Tool",
      features: {
        title: "Why Choose IMG Tool?",
        browser: {
          title: "100% Browser",
          desc: "No download, no installation. Works directly in the browser."
        },
        privacy: {
          title: "Total Privacy",
          desc: "Your images never leave your device. 100% local processing."
        },
        speed: {
          title: "Extreme Speed",
          desc: "Immediate processing without waiting. Results in seconds."
        },
        free: {
          title: "Completely Free",
          desc: "All tools, all features. No limits, no subscriptions."
        }
      },
      finalCta: {
        title: "Ready to Start?",
        subtitle: "Join thousands of users who have already simplified their workflow.",
        button: "🎯 Start Now - It's Free!"
      },
      footer: "Your favorite image editor"
    },
    
    errors: {
      noImages: "Oops... you haven't uploaded any images yet",
      noImagesSubtitle: "You need to upload at least one image first to use the editing tools.",
      backToHome: "Back to Home",
      processingError: "Error processing images"
    },
    
    tips: {
      qualityRecommendation: "For optimal quality without visible loss, we recommend staying between 70-80%.",
      aspectRatioNote: "If one dimension is 0, original aspect ratio will be maintained",
      uploadSupported: "Supported: JPG, PNG, GIF, SVG, WEBP",
      maxFiles: "max 20 files",
      dragAndDrop: "Drag and drop your images here"
    },
    
    toolSelection: {
      title: "Choose what to do now",
      noToolSelected: "Upload images first to use the tools"
    },
    
    info: {
      lossless: "Compression without visible loss",
      fast: "Fast and efficient processing",
      quality: "Maintains original quality",
      smartResize: "Smart resizing",
      aspectRatio: "Maintains proportions", 
      multipleFormats: "Supports all major formats",
      instantRotation: "Instant rotation",
      batchRename: "Batch rename"
    },

    footer: {
      feedback: "Leave your feedback",
      privacy: "Privacy & Cookie Policy",
      copyright: "© 2025 IMG Tool - Francesco Borrelli - Your favorite image editor"
    },

    privacy: {
      title: "Privacy & Cookie Policy",
      lastUpdated: "Last updated",
      introduction: {
        title: "Introduction",
        content: "The privacy policy content will be inserted here. This section will explain how we handle your personal data and privacy."
      },
      dataCollection: {
        title: "Data Collection",
        content: "Detailed information about what data we collect, how we use it and how we protect it."
      },
      cookies: {
        title: "Cookies",
        content: "Information about cookies used by our website and how to manage your preferences."
      },
      contact: {
        title: "Contact",
        content: "For any questions regarding this privacy policy, you can contact us through the feedback form."
      }
    }
  },
  
  fr: {
    title: "IMG Tool",
    subtitle: "Outil complet de traitement d'images",
    
    uploadTitle: "Téléchargez vos images",
    uploadSubtitle: "Glissez les fichiers ici ou cliquez pour sélectionner",
    uploadButton: "Sélectionner Fichiers",
    dragDrop: "Glisser-déposer ici",
    maxFiles: "Maximum 20 fichiers",
    supportedFormats: "JPG, PNG, WebP, GIF",
    
    tools: {
      compress: "Compresser",
      resize: "Redimensionner",
      crop: "Recadrer",
      convert: "Convertir", 
      rotate: "Faire pivoter",
      rename: "Renommer",
      upscale: "Agrandir",
      background: "Supprimer Arrière-plan"
    },
    
    toolDescriptions: {
      compress: "Réduire la taille",
      resize: "Changer dimensions", 
      crop: "Recadrer portions",
      convert: "Changer format",
      rotate: "Faire pivoter images",
      rename: "Renommer fichiers",
      upscale: "Améliorer qualité",
      background: "Supprimer arrière-plan"
    },
    
    backButton: "← Retour à la sélection",
    downloadButton: "📥 Télécharger",
    newBadge: "NOUVEAU!",
    selectTool: "Sélectionnez un outil pour commencer",
    
    compression: {
      title: "🗜️ Compresser Images",
      quality: "Niveau de compression",
      high: "Élevé",
      medium: "Moyen",
      low: "Faible",
      originalSize: "Taille originale",
      compressedSize: "Après compression",
      savings: "Économie estimée",
      estimatedReduction: "Réduction estimée",
      losslessQuality: "Qualité sans perte visible",
      balancedCompression: "Équilibre qualité/taille",
      maximumCompression: "Compression maximale",
      processButton: "🗜️ Compresser Images"
    },
    
    resize: {
      title: "📐 Redimensionner Images",
      presets: "Tailles prédéfinies",
      custom: "Personnalisé",
      width: "Largeur",
      height: "Hauteur",
      note: "Si une dimension est 0, les proportions originales seront maintenues",
      processButton: "📐 Redimensionner"
    },
    
    crop: {
      title: "✂️ Recadrer Images", 
      preview: "Aperçu recadrage:",
      mode: "Mode recadrage",
      free: "Libre",
      ratio: "Proportions",
      presets: "Préréglages sociaux",
      square: "Carré",
      portrait: "Portrait",
      landscape: "Paysage",
      instagram: "Instagram",
      story: "Story",
      youtube: "YouTube",
      coordinates: "Coordonnées recadrage",
      x: "X",
      y: "Y",
      processButton: "✂️ Recadrer"
    },
    
    convert: {
      title: "🔄 Convertir Format",
      format: "Format cible",
      currentFormat: "Format actuel",
      benefits: "Avantages",
      processButton: "🔄 Convertir",
      formats: {
        webp: {
          title: "WebP Moderne",
          description: "Format web nouvelle génération",
          benefits: ["Taille réduite de 25-50%", "Qualité supérieure", "Support transparence"]
        },
        png: {
          title: "PNG Sans Perte",
          description: "Qualité parfaite avec transparence",
          benefits: ["Qualité sans perte", "Support transparence", "Parfait pour logos"]
        },
        jpg: {
          title: "JPEG Classique",
          description: "Standard universel pour photos",
          benefits: ["Compatibilité universelle", "Taille optimisée", "Parfait pour photographie"]
        },
        avif: {
          title: "AVIF Futur",
          description: "Format nouvelle génération", 
          benefits: ["Compression avancée", "Excellente qualité", "Support HDR"]
        }
      }
    },
    
    rotate: {
      title: "🔄 Faire Pivoter Images",
      angle: "Angle de rotation",
      quick: "Rotations rapides",
      processButton: "🔄 Faire Pivoter"
    },
    
    rename: {
      title: "📝 Renommer Images",
      mode: "Mode renommage",
      bulk: "Renommer toutes",
      individual: "Renommer individuellement",
      bulkDescription: "Même nom pour toutes",
      individualDescription: "Nom personnalisé pour chacune",
      baseName: "Nom de base",
      preview: "Aperçu noms:",
      processButton: "📝 Renommer",
      bulkProcessButton: "📝 Renommer Toutes"
    },
    
    upscale: {
      title: "🚀 Agrandir Images",
      factor: "Facteur d'agrandissement",
      double: "Doubler",
      quadruple: "Quadrupler",
      ultraHd: "Ultra HD",
      preview: "Aperçu résultat:",
      original: "Original",
      upscaled: "Agrandi",
      estimate: "Estimation: ~{factor}x plus grand",
      info: {
        algorithm: "Algorithme IA pour améliorer qualité",
        details: "Maintient détails et netteté",
        prints: "Idéal pour impressions haute qualité"
      },
      processButton: "🚀 Agrandir {factor}x"
    },
    
    background: {
      title: "🎨 Supprimer Arrière-plan",
      mode: "Mode suppression",
      auto: "IA Automatique",
      precision: "Haute Précision",
      autoDescription: "Détection intelligente",
      precisionDescription: "Résultats professionnels",
      preview: "Aperçu suppression:",
      withBackground: "Avec arrière-plan",
      withoutBackground: "Sans arrière-plan",
      removed: "Arrière-plan supprimé",
      info: {
        ai: "IA avancée pour reconnaissance objets",
        transparency: "Maintient transparence PNG",
        perfect: "Parfait pour logos et produits"
      },
      processButton: "🎨 Supprimer Arrière-plan"
    },
    
    processing: {
      title: "Traitement des images...",
      progress: "Progrès"
    },
    
    results: {
      title: "✅ Traitement Terminé!",
      filesProcessed: "fichiers traités",
      downloadAll: "📦 Télécharger Tout (ZIP)",
      downloadSingle: "📥 Télécharger",
      processMore: "🔄 Traiter Plus d'Images"
    },
    
    language: {
      select: "Langue",
      italian: "🇮🇹 Italiano",
      english: "🇬🇧 English",
      french: "🇫🇷 Français",
      german: "🇩🇪 Deutsch",
      spanish: "🇪🇸 Español",
      portuguese: "🇵🇹 Português"
    },
    
    toasts: [
      { name: "Luc", message: "Dieu merci, tu as sauvé ma présentation de demain!" },
      { name: "Marine", message: "Enfin un outil qui fonctionne sans me rendre fou." },
      { name: "Jean", message: "Tu m'as fait économiser deux heures de travail, merci beaucoup!" },
      { name: "Claire", message: "Je ne sais pas comment j'aurais fait sans, vraiment." },
      { name: "David", message: "C'était exactement ce que je cherchais depuis des jours." },
      { name: "Sarah", message: "Ça marche mieux que je ne le pensais, excellent!" },
      { name: "Alexandre", message: "Je devenais fou, puis j'ai trouvé ça... génial." },
      { name: "Paola", message: "Je n'ai pas de mots, tu as tout résolu en un instant." },
      { name: "Marc", message: "Génial! Maintenant je peux enfin livrer le travail à temps." },
      { name: "Élise", message: "Simple, rapide et même beau à utiliser. Félicitations." },
      { name: "André", message: "J'étais bloqué pendant des heures, tu m'as enlevé un poids énorme." },
      { name: "Françoise", message: "Tu m'as fait passer pour un génie auprès de mes collègues." },
      { name: "Frédéric", message: "Je l'utiliserai encore, garanti." },
      { name: "Sylvie", message: "Tu as simplifié ma vie, vraiment merci." },
      { name: "Jules", message: "C'était exactement ce que j'espérais trouver." },
      { name: "Anne", message: "Je n'arrive pas à croire que ça m'ait pris si peu de temps!" },
      { name: "Matthieu", message: "Parfait du premier coup, incroyable." },
      { name: "Claudia", message: "C'était urgent, et tu m'as sauvé à la dernière minute." },
      { name: "Henri", message: "Tu es officiellement sur ma liste de favoris." },
      { name: "Hilaire", message: "J'ai essayé d'autres outils mais celui-ci les bat tous." },
      { name: "Robert", message: "Une bénédiction, je ne sais que dire." },
      { name: "Simone", message: "C'est comme ça que tout devrait fonctionner sur internet, merci." },
      { name: "Christien", message: "Je ne m'attendais pas à ce que ce soit si immédiat, wow." },
      { name: "Marthe", message: "Tu ne m'as pas seulement aidé, tu as sauvé ma journée." },
      { name: "Pierre", message: "C'était compliqué, mais tu as rendu tout super facile." }
    ],
    
    landing: {
      hero: {
        title: "L'Outil d'Édition d'Images le Plus Complet",
        subtitle: "Compressez, redimensionnez, recadrez, convertissez et bien plus. Tout gratuit, directement dans le navigateur."
      },
      cta: "🚀 Accéder à l'Outil Complet",
      features: {
        title: "Pourquoi Choisir IMG Tool?",
        browser: { title: "100% Navigateur", desc: "Aucun téléchargement, aucune installation." },
        privacy: { title: "Confidentialité Totale", desc: "Vos images ne quittent jamais votre appareil." },
        speed: { title: "Vitesse Extrême", desc: "Traitement immédiat sans attente." },
        free: { title: "Complètement Gratuit", desc: "Tous les outils, toutes les fonctionnalités." }
      },
      finalCta: {
        title: "Prêt à Commencer?",
        subtitle: "Rejoignez des milliers d'utilisateurs.",
        button: "🎯 Commencer Maintenant - C'est Gratuit!"
      },
      footer: "Votre éditeur d'images préféré"
    },
    
    errors: {
      noImages: "Oops... vous n'avez pas encore téléchargé d'images",
      noImagesSubtitle: "Vous devez d'abord télécharger au moins une image pour utiliser les outils d'édition.",
      backToHome: "Retour à l'accueil",
      processingError: "Erreur lors du traitement des images"
    },
    
    tips: {
      qualityRecommendation: "Pour une qualité optimale sans perte visible, nous recommandons de rester entre 70-80%.",
      aspectRatioNote: "Si une dimension est 0, les proportions originales seront maintenues",
      uploadSupported: "Supportés: JPG, PNG, GIF, SVG, WEBP",
      maxFiles: "max 20 fichiers",
      dragAndDrop: "Glissez et déposez vos images ici"
    },
    
    toolSelection: {
      title: "Choisissez quoi faire maintenant",
      noToolSelected: "Téléchargez d'abord les images pour utiliser les outils"
    },
    
    info: {
      lossless: "Compression sans perte visible",
      fast: "Traitement rapide et efficace",
      quality: "Maintient qualité originale",
      smartResize: "Redimensionnement intelligent",
      aspectRatio: "Maintient proportions",
      multipleFormats: "Supporte tous formats principaux",
      instantRotation: "Rotation instantanée",
      batchRename: "Renommage en lot"
    },

    footer: {
      feedback: "Laissez votre avis",
      privacy: "Politique de confidentialité et cookies",
      copyright: "© 2025 IMG Tool - Francesco Borrelli - Votre éditeur d'images préféré"
    },

    privacy: {
      title: "Politique de confidentialité et cookies",
      lastUpdated: "Dernière mise à jour",
      introduction: {
        title: "Introduction",
        content: "Le contenu de la politique de confidentialité sera inséré ici. Cette section expliquera comment nous traitons vos données personnelles et votre vie privée."
      },
      dataCollection: {
        title: "Collecte de données",
        content: "Informations détaillées sur les données que nous collectons, comment nous les utilisons et comment nous les protégeons."
      },
      cookies: {
        title: "Cookies",
        content: "Informations sur les cookies utilisés par notre site web et comment gérer vos préférences."
      },
      contact: {
        title: "Contact",
        content: "Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter via le formulaire de commentaires."
      }
    }
  },
  
  de: {
    title: "IMG Tool",
    subtitle: "Komplettes Bildbearbeitungstool",
    
    uploadTitle: "Laden Sie Ihre Bilder hoch",
    uploadSubtitle: "Dateien hier hinziehen oder klicken zum Auswählen",
    uploadButton: "Dateien Auswählen",
    dragDrop: "Hier hinziehen und ablegen",
    maxFiles: "Maximal 20 Dateien",
    supportedFormats: "JPG, PNG, WebP, GIF",
    
    tools: {
      compress: "Komprimieren",
      resize: "Größe ändern",
      crop: "Zuschneiden",
      convert: "Konvertieren",
      rotate: "Drehen",
      rename: "Umbenennen",
      upscale: "Vergrößern",
      background: "Hintergrund Entfernen"
    },
    
    toolDescriptions: {
      compress: "Dateigröße reduzieren",
      resize: "Abmessungen ändern",
      crop: "Bereiche zuschneiden",
      convert: "Format ändern",
      rotate: "Bilder drehen",
      rename: "Dateien umbenennen",
      upscale: "Qualität verbessern",
      background: "Hintergrund entfernen"
    },
    
    backButton: "← Zurück zur Auswahl",
    downloadButton: "📥 Herunterladen",
    newBadge: "NEU!",
    selectTool: "Wählen Sie ein Tool zum Starten",
    
    compression: {
      title: "🗜️ Bilder Komprimieren",
      quality: "Komprimierungsstufe",
      high: "Hoch",
      medium: "Mittel",
      low: "Niedrig",
      originalSize: "Originalgröße",
      compressedSize: "Nach Komprimierung",
      savings: "Geschätzte Einsparung",
      estimatedReduction: "Geschätzte Reduzierung",
      losslessQuality: "Qualität ohne sichtbaren Verlust",
      balancedCompression: "Qualität/Größe Balance",
      maximumCompression: "Maximale Komprimierung",
      processButton: "🗜️ Bilder Komprimieren"
    },
    
    resize: {
      title: "📐 Bildgröße Ändern",
      presets: "Vordefinierte Größen",
      custom: "Benutzerdefiniert",
      width: "Breite",
      height: "Höhe",
      note: "Wenn eine Dimension 0 ist, wird das ursprüngliche Seitenverhältnis beibehalten",
      processButton: "📐 Größe Ändern"
    },
    
    crop: {
      title: "✂️ Bilder Zuschneiden",
      preview: "Zuschnitt-Vorschau:",
      mode: "Zuschnitt-Modus",
      free: "Frei",
      ratio: "Seitenverhältnis",
      presets: "Social-Vorlagen",
      square: "Quadrat",
      portrait: "Hochformat",
      landscape: "Querformat",
      instagram: "Instagram",
      story: "Story",
      youtube: "YouTube",
      coordinates: "Zuschnitt-Koordinaten",
      x: "X",
      y: "Y",
      processButton: "✂️ Zuschneiden"
    },
    
    convert: {
      title: "🔄 Format Konvertieren",
      format: "Zielformat",
      currentFormat: "Aktuelles Format",
      benefits: "Vorteile",
      processButton: "🔄 Konvertieren",
      formats: {
        webp: {
          title: "Modernes WebP",
          description: "Next-Generation Web-Format",
          benefits: ["25-50% kleinere Größe", "Überlegene Qualität", "Transparenz-Unterstützung"]
        },
        png: {
          title: "Verlustfreies PNG",
          description: "Perfekte Qualität mit Transparenz",
          benefits: ["Verlustfreie Qualität", "Transparenz-Unterstützung", "Perfekt für Logos"]
        },
        jpg: {
          title: "Klassisches JPEG",
          description: "Universeller Standard für Fotos",
          benefits: ["Universelle Kompatibilität", "Optimierte Größe", "Perfekt für Fotografie"]
        },
        avif: {
          title: "Zukunft AVIF",
          description: "Next-Generation Format",
          benefits: ["Erweiterte Komprimierung", "Exzellente Qualität", "HDR-Unterstützung"]
        }
      }
    },
    
    rotate: {
      title: "🔄 Bilder Drehen",
      angle: "Drehwinkel",
      quick: "Schnelle Drehungen",
      processButton: "🔄 Drehen"
    },
    
    rename: {
      title: "📝 Bilder Umbenennen",
      mode: "Umbenennungs-Modus",
      bulk: "Alle umbenennen",
      individual: "Einzeln umbenennen",
      bulkDescription: "Gleicher Name für alle",
      individualDescription: "Benutzerdefinierter Name für jedes",
      baseName: "Basisname",
      preview: "Namen-Vorschau:",
      processButton: "📝 Umbenennen",
      bulkProcessButton: "📝 Alle Umbenennen"
    },
    
    upscale: {
      title: "🚀 Bilder Vergrößern",
      factor: "Vergrößerungsfaktor",
      double: "Verdoppeln",
      quadruple: "Vervierfachen",
      ultraHd: "Ultra HD",
      preview: "Ergebnis-Vorschau:",
      original: "Original",
      upscaled: "Vergrößert",
      estimate: "Schätzung: ~{factor}x größer",
      info: {
        algorithm: "KI-Algorithmus zur Qualitätsverbesserung",
        details: "Behält Details und Schärfe bei",
        prints: "Ideal für hochwertige Drucke"
      },
      processButton: "🚀 Vergrößern {factor}x"
    },
    
    background: {
      title: "🎨 Hintergrund Entfernen",
      mode: "Entfernungs-Modus",
      auto: "KI Automatisch",
      precision: "Hohe Präzision",
      autoDescription: "Intelligente Erkennung",
      precisionDescription: "Professionelle Ergebnisse",
      preview: "Entfernungs-Vorschau:",
      withBackground: "Mit Hintergrund",
      withoutBackground: "Ohne Hintergrund",
      removed: "Hintergrund entfernt",
      info: {
        ai: "Erweiterte KI für Objekterkennung",
        transparency: "Behält PNG-Transparenz bei",
        perfect: "Perfekt für Logos und Produkte"
      },
      processButton: "🎨 Hintergrund Entfernen"
    },
    
    processing: {
      title: "Bilder werden verarbeitet...",
      progress: "Fortschritt"
    },
    
    results: {
      title: "✅ Verarbeitung Abgeschlossen!",
      filesProcessed: "Dateien verarbeitet",
      downloadAll: "📦 Alle Herunterladen (ZIP)",
      downloadSingle: "📥 Herunterladen",
      processMore: "🔄 Weitere Bilder Verarbeiten"
    },
    
    language: {
      select: "Sprache",
      italian: "🇮🇹 Italiano",
      english: "🇬🇧 English",
      french: "🇫🇷 Français",
      german: "🇩🇪 Deutsch",
      spanish: "🇪🇸 Español",
      portuguese: "🇵🇹 Português"
    },
    
    toasts: [
      { name: "Lukas", message: "Gott sei Dank, du hast meine Präsentation für morgen gerettet!" },
      { name: "Martina", message: "Endlich ein Tool, das funktioniert, ohne mich verrückt zu machen." },
      { name: "Hans", message: "Du hast mir zwei Stunden Arbeit erspart, vielen Dank!" },
      { name: "Klara", message: "Ich weiß nicht, wie ich es ohne geschafft hätte, wirklich." },
      { name: "David", message: "Das war genau das, was ich tagelang gesucht habe." },
      { name: "Sarah", message: "Funktioniert besser als ich dachte, ausgezeichnet!" },
      { name: "Alexander", message: "Ich wurde verrückt, dann fand ich das... genial." },
      { name: "Paula", message: "Mir fehlen die Worte, du hast alles sofort gelöst." },
      { name: "Markus", message: "Großartig! Jetzt kann ich endlich pünktlich abgeben." },
      { name: "Elisabeth", message: "Einfach, schnell und sogar schön zu benutzen. Glückwunsch." },
      { name: "Andreas", message: "Ich war stundenlang blockiert, du hast mir eine riesige Last abgenommen." },
      { name: "Franziska", message: "Du hast mich vor meinen Kollegen wie ein Genie aussehen lassen." },
      { name: "Friedrich", message: "Ich werde es wieder verwenden, garantiert." },
      { name: "Silvia", message: "Du hast mein Leben vereinfacht, wirklich danke." },
      { name: "Julius", message: "Das war genau das, was ich zu finden hoffte." },
      { name: "Anna", message: "Ich kann nicht glauben, dass es so wenig Zeit gedauert hat!" },
      { name: "Matthias", message: "Perfekt beim ersten Versuch, unglaublich." },
      { name: "Claudia", message: "Es war dringend, und du hast mich im letzten Moment gerettet." },
      { name: "Heinrich", message: "Du stehst offiziell auf meiner Favoritenliste." },
      { name: "Hilaria", message: "Ich habe andere Tools ausprobiert, aber das schlägt sie alle." },
      { name: "Robert", message: "Ein Segen, ich weiß nicht, was ich sagen soll." },
      { name: "Simone", message: "So sollte alles im Internet funktionieren, danke." },
      { name: "Christian", message: "Ich hatte nicht erwartet, dass es so schnell geht, wow." },
      { name: "Martha", message: "Du hast mir nicht nur geholfen, du hast meinen Tag gerettet." },
      { name: "Peter", message: "Es war kompliziert, aber du hast alles super einfach gemacht." }
    ],
    
    landing: {
      hero: {
        title: "Das Vollständigste Bildbearbeitungs-Tool",
        subtitle: "Komprimieren, skalieren, zuschneiden, konvertieren und vieles mehr. Alles kostenlos, direkt im Browser."
      },
      cta: "🚀 Zum Kompletten Tool",
      features: {
        title: "Warum IMG Tool Wählen?",
        browser: { title: "100% Browser", desc: "Kein Download, keine Installation." },
        privacy: { title: "Totale Privatsphäre", desc: "Ihre Bilder verlassen nie Ihr Gerät." },
        speed: { title: "Extreme Geschwindigkeit", desc: "Sofortige Verarbeitung ohne Warten." },
        free: { title: "Völlig Kostenlos", desc: "Alle Tools, alle Funktionen." }
      },
      finalCta: {
        title: "Bereit Anzufangen?",
        subtitle: "Schließen Sie sich tausenden Benutzern an.",
        button: "🎯 Jetzt Starten - Kostenlos!"
      },
      footer: "Ihr bevorzugter Bildeditor"
    },
    
    errors: {
      noImages: "Oops... Sie haben noch keine Bilder hochgeladen",
      noImagesSubtitle: "Sie müssen zuerst mindestens ein Bild hochladen, um die Bearbeitungstools zu verwenden.",
      backToHome: "Zurück zur Startseite",
      processingError: "Fehler beim Verarbeiten der Bilder"
    },
    
    tips: {
      qualityRecommendation: "Für optimale Qualität ohne sichtbaren Verlust empfehlen wir 70-80%.",
      aspectRatioNote: "Wenn eine Dimension 0 ist, wird das ursprüngliche Seitenverhältnis beibehalten",
      uploadSupported: "Unterstützt: JPG, PNG, GIF, SVG, WEBP",
      maxFiles: "max 20 Dateien",
      dragAndDrop: "Ziehen Sie Ihre Bilder hierher"
    },
    
    toolSelection: {
      title: "Wählen Sie, was Sie jetzt tun möchten",
      noToolSelected: "Laden Sie zuerst Bilder hoch, um die Tools zu verwenden"
    },
    
    info: {
      lossless: "Komprimierung ohne sichtbaren Verlust",
      fast: "Schnelle und effiziente Verarbeitung",
      quality: "Behält ursprüngliche Qualität bei",
      smartResize: "Intelligente Größenänderung",
      aspectRatio: "Behält Proportionen bei",
      multipleFormats: "Unterstützt alle wichtigen Formate",
      instantRotation: "Sofortige Drehung",
      batchRename: "Stapel-Umbenennung"
    },

    footer: {
      feedback: "Hinterlassen Sie Ihr Feedback",
      privacy: "Datenschutz & Cookie-Richtlinie",
      copyright: "© 2025 IMG Tool - Francesco Borrelli - Ihr bevorzugter Bildeditor"
    },

    privacy: {
      title: "Datenschutz & Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert",
      introduction: {
        title: "Einführung",
        content: "Der Inhalt der Datenschutzrichtlinie wird hier eingefügt. Dieser Abschnitt erklärt, wie wir Ihre persönlichen Daten und Ihre Privatsphäre behandeln."
      },
      dataCollection: {
        title: "Datenerfassung",
        content: "Detaillierte Informationen darüber, welche Daten wir sammeln, wie wir sie verwenden und wie wir sie schützen."
      },
      cookies: {
        title: "Cookies",
        content: "Informationen über Cookies, die von unserer Website verwendet werden, und wie Sie Ihre Einstellungen verwalten können."
      },
      contact: {
        title: "Kontakt",
        content: "Bei Fragen zu dieser Datenschutzrichtlinie können Sie uns über das Feedback-Formular kontaktieren."
      }
    }
  },
  
  es: {
    title: "IMG Tool",
    subtitle: "Herramienta completa de procesamiento de imágenes",
    
    uploadTitle: "Sube tus imágenes",
    uploadSubtitle: "Arrastra archivos aquí o haz clic para seleccionar",
    uploadButton: "Seleccionar Archivos",
    dragDrop: "Arrastra y suelta aquí",
    maxFiles: "Máximo 20 archivos",
    supportedFormats: "JPG, PNG, WebP, GIF",
    
    tools: {
      compress: "Comprimir",
      resize: "Redimensionar",
      crop: "Recortar",
      convert: "Convertir",
      rotate: "Rotar",
      rename: "Renombrar",
      upscale: "Ampliar",
      background: "Eliminar Fondo"
    },
    
    toolDescriptions: {
      compress: "Reducir tamaño archivo",
      resize: "Cambiar dimensiones",
      crop: "Recortar porciones",
      convert: "Cambiar formato",
      rotate: "Rotar imágenes",
      rename: "Renombrar archivos",
      upscale: "Mejorar calidad",
      background: "Eliminar fondo"
    },
    
    backButton: "← Volver a selección",
    downloadButton: "📥 Descargar",
    newBadge: "¡NUEVO!",
    selectTool: "Selecciona una herramienta para empezar",
    
    compression: {
      title: "🗜️ Comprimir Imágenes",
      quality: "Nivel de compresión",
      high: "Alto",
      medium: "Medio",
      low: "Bajo",
      originalSize: "Tamaño original",
      compressedSize: "Después compresión",
      savings: "Ahorro estimado",
      estimatedReduction: "Reducción estimada",
      losslessQuality: "Calidad sin pérdida visible",
      balancedCompression: "Balance calidad/tamaño",
      maximumCompression: "Compresión máxima",
      processButton: "🗜️ Comprimir Imágenes"
    },
    
    resize: {
      title: "📐 Redimensionar Imágenes",
      presets: "Tamaños predefinidos",
      custom: "Personalizado",
      width: "Ancho",
      height: "Alto",
      note: "Si una dimensión es 0, se mantendrá la proporción original",
      processButton: "📐 Redimensionar"
    },
    
    crop: {
      title: "✂️ Recortar Imágenes",
      preview: "Vista previa recorte:",
      mode: "Modo recorte",
      free: "Libre",
      ratio: "Proporción",
      presets: "Ajustes sociales",
      square: "Cuadrado",
      portrait: "Retrato",
      landscape: "Paisaje",
      instagram: "Instagram",
      story: "Historia",
      youtube: "YouTube",
      coordinates: "Coordenadas recorte",
      x: "X",
      y: "Y",
      processButton: "✂️ Recortar"
    },
    
    convert: {
      title: "🔄 Convertir Formato",
      format: "Formato destino",
      currentFormat: "Formato actual",
      benefits: "Beneficios",
      processButton: "🔄 Convertir",
      formats: {
        webp: {
          title: "WebP Moderno",
          description: "Formato web nueva generación",
          benefits: ["Tamaño reducido 25-50%", "Calidad superior", "Soporte transparencia"]
        },
        png: {
          title: "PNG Sin Pérdida",
          description: "Calidad perfecta con transparencia",
          benefits: ["Calidad sin pérdida", "Soporte transparencia", "Perfecto para logos"]
        },
        jpg: {
          title: "JPEG Clásico",
          description: "Estándar universal para fotos",
          benefits: ["Compatibilidad universal", "Tamaño optimizado", "Perfecto para fotografía"]
        },
        avif: {
          title: "AVIF Futuro",
          description: "Formato nueva generación",
          benefits: ["Compresión avanzada", "Excelente calidad", "Soporte HDR"]
        }
      }
    },
    
    rotate: {
      title: "🔄 Rotar Imágenes",
      angle: "Ángulo de rotación",
      quick: "Rotaciones rápidas",
      processButton: "🔄 Rotar"
    },
    
    rename: {
      title: "📝 Renombrar Imágenes",
      mode: "Modo renombrado",
      bulk: "Renombrar todas",
      individual: "Renombrar individual",
      bulkDescription: "Mismo nombre para todas",
      individualDescription: "Nombre personalizado para cada una",
      baseName: "Nombre base",
      preview: "Vista previa nombres:",
      processButton: "📝 Renombrar",
      bulkProcessButton: "📝 Renombrar Todas"
    },
    
    upscale: {
      title: "🚀 Ampliar Imágenes",
      factor: "Factor de ampliación",
      double: "Duplicar",
      quadruple: "Cuadruplicar",
      ultraHd: "Ultra HD",
      preview: "Vista previa resultado:",
      original: "Original",
      upscaled: "Ampliada",
      estimate: "Estimación: ~{factor}x más grande",
      info: {
        algorithm: "Algoritmo IA para mejorar calidad",
        details: "Mantiene detalles y nitidez",
        prints: "Ideal para impresiones alta calidad"
      },
      processButton: "🚀 Ampliar {factor}x"
    },
    
    background: {
      title: "🎨 Eliminar Fondo",
      mode: "Modo eliminación",
      auto: "IA Automático",
      precision: "Alta Precisión",
      autoDescription: "Detección inteligente",
      precisionDescription: "Resultados profesionales",
      preview: "Vista previa eliminación:",
      withBackground: "Con fondo",
      withoutBackground: "Sin fondo",
      removed: "Fondo eliminado",
      info: {
        ai: "IA avanzada para reconocimiento objetos",
        transparency: "Mantiene transparencia PNG",
        perfect: "Perfecto para logos y productos"
      },
      processButton: "🎨 Eliminar Fondo"
    },
    
    processing: {
      title: "Procesando imágenes...",
      progress: "Progreso"
    },
    
    results: {
      title: "✅ ¡Procesamiento Completado!",
      filesProcessed: "archivos procesados",
      downloadAll: "📦 Descargar Todo (ZIP)",
      downloadSingle: "📥 Descargar",
      processMore: "🔄 Procesar Más Imágenes"
    },
    
    language: {
      select: "Idioma",
      italian: "🇮🇹 Italiano",
      english: "🇬🇧 English",
      french: "🇫🇷 Français",
      german: "🇩🇪 Deutsch",
      spanish: "🇪🇸 Español",
      portuguese: "🇵🇹 Português"
    },
    
    toasts: [
      { name: "Lucas", message: "¡Gracias a Dios, salvaste mi presentación de mañana!" },
      { name: "Martina", message: "Por fin una herramienta que funciona sin volverme loco." },
      { name: "Juan", message: "¡Me ahorraste dos horas de trabajo, muchas gracias!" },
      { name: "Clara", message: "No sé cómo lo habría hecho sin esto, de verdad." },
      { name: "David", message: "Era exactamente lo que buscaba desde hace días." },
      { name: "Sara", message: "¡Funciona mejor de lo que pensaba, excelente!" },
      { name: "Alejandro", message: "Me estaba volviendo loco, luego encontré esto... genial." },
      { name: "Paula", message: "No tengo palabras, resolviste todo al instante." },
      { name: "Marco", message: "¡Genial! Ahora puedo entregar el trabajo a tiempo." },
      { name: "Elisa", message: "Simple, rápido y hasta bonito de usar. Felicitaciones." },
      { name: "Andrés", message: "Estaba bloqueado por horas, me quitaste un peso enorme." },
      { name: "Francisca", message: "Me hiciste ver como un genio ante mis colegas." },
      { name: "Federico", message: "Lo usaré de nuevo, garantizado." },
      { name: "Silvia", message: "Simplificaste mi vida, realmente gracias." },
      { name: "Julio", message: "Era exactamente lo que esperaba encontrar." },
      { name: "Ana", message: "¡No puedo creer que me tomara tan poco tiempo!" },
      { name: "Mateo", message: "Perfecto al primer intento, increíble." },
      { name: "Claudia", message: "Era urgente, y me salvaste a último momento." },
      { name: "Enrique", message: "Oficialmente estás en mi lista de favoritos." },
      { name: "Hilaria", message: "Probé otras herramientas pero esta las supera todas." },
      { name: "Roberto", message: "Una bendición, no sé qué decir." },
      { name: "Simona", message: "Así debería funcionar todo en internet, gracias." },
      { name: "Cristián", message: "No esperaba que fuera tan inmediato, wow." },
      { name: "Marta", message: "No solo me ayudaste, salvaste mi día." },
      { name: "Pedro", message: "Era complicado, pero hiciste todo súper fácil." }
    ],
    
    landing: {
      hero: {
        title: "La Herramienta de Edición de Imágenes Más Completa",
        subtitle: "Comprime, redimensiona, recorta, convierte y mucho más. Todo gratis, directamente en el navegador."
      },
      cta: "🚀 Acceder a la Herramienta Completa",
      features: {
        title: "¿Por Qué Elegir IMG Tool?",
        browser: { title: "100% Navegador", desc: "Sin descargas, sin instalación." },
        privacy: { title: "Privacidad Total", desc: "Tus imágenes nunca dejan tu dispositivo." },
        speed: { title: "Velocidad Extrema", desc: "Procesamiento inmediato sin esperas." },
        free: { title: "Completamente Gratis", desc: "Todas las herramientas, todas las funciones." }
      },
      finalCta: {
        title: "¿Listo para Empezar?",
        subtitle: "Únete a miles de usuarios.",
        button: "🎯 Empezar Ahora - ¡Es Gratis!"
      },
      footer: "Tu editor de imágenes favorito"
    },
    
    info: {
      lossless: "Compresión sin pérdida visible",
      fast: "Procesamiento rápido y eficiente",
      quality: "Mantiene calidad original",
      smartResize: "Redimensionado inteligente",
      aspectRatio: "Mantiene proporciones",
      multipleFormats: "Soporta todos formatos principales",
      instantRotation: "Rotación instantánea",
      batchRename: "Renombrado por lotes"
    },
    
    errors: {
      noImages: "Oops... aún no has subido ninguna imagen",
      noImagesSubtitle: "Primero debes cargar al menos una imagen para usar las herramientas de edición.",
      backToHome: "Volver al inicio",
      processingError: "Error al procesar las imágenes"
    },
    
    tips: {
      qualityRecommendation: "Para calidad óptima sin pérdida visible, recomendamos mantenerse entre 70-80%.",
      aspectRatioNote: "Si una dimensión es 0, se mantendrá la proporción original",
      uploadSupported: "Soportados: JPG, PNG, GIF, SVG, WEBP",
      maxFiles: "máx 20 archivos",
      dragAndDrop: "Arrastra y suelta tus imágenes aquí"
    },
    
    toolSelection: {
      title: "Elige qué hacer ahora",
      noToolSelected: "Sube imágenes primero para usar las herramientas"
    },

    footer: {
      feedback: "Deja tu comentario",
      privacy: "Política de privacidad y cookies",
      copyright: "© 2025 IMG Tool - Francesco Borrelli - Tu editor de imágenes favorito"
    },

    privacy: {
      title: "Política de privacidad y cookies",
      lastUpdated: "Última actualización",
      introduction: {
        title: "Introducción",
        content: "El contenido de la política de privacidad se insertará aquí. Esta sección explicará cómo manejamos tus datos personales y tu privacidad."
      },
      dataCollection: {
        title: "Recopilación de datos",
        content: "Información detallada sobre qué datos recopilamos, cómo los usamos y cómo los protegemos."
      },
      cookies: {
        title: "Cookies",
        content: "Información sobre las cookies utilizadas por nuestro sitio web y cómo gestionar tus preferencias."
      },
      contact: {
        title: "Contacto",
        content: "Para cualquier pregunta sobre esta política de privacidad, puedes contactarnos a través del formulario de comentarios."
      }
    }
  },
  
  pt: {
    title: "IMG Tool",
    subtitle: "Ferramenta completa de processamento de imagens",
    
    uploadTitle: "Carregue suas imagens",
    uploadSubtitle: "Arraste arquivos aqui ou clique para selecionar",
    uploadButton: "Selecionar Arquivos",
    dragDrop: "Arrastar e soltar aqui",
    maxFiles: "Máximo 20 arquivos",
    supportedFormats: "JPG, PNG, WebP, GIF",
    
    tools: {
      compress: "Comprimir",
      resize: "Redimensionar",
      crop: "Cortar",
      convert: "Converter",
      rotate: "Girar",
      rename: "Renomear",
      upscale: "Ampliar",
      background: "Remover Fundo"
    },
    
    toolDescriptions: {
      compress: "Reduzir tamanho arquivo",
      resize: "Alterar dimensões",
      crop: "Cortar porções",
      convert: "Alterar formato",
      rotate: "Girar imagens",
      rename: "Renomear arquivos",
      upscale: "Melhorar qualidade",
      background: "Remover fundo"
    },
    
    backButton: "← Voltar à seleção",
    downloadButton: "📥 Baixar",
    newBadge: "NOVO!",
    selectTool: "Selecione uma ferramenta para começar",
    
    compression: {
      title: "🗜️ Comprimir Imagens",
      quality: "Nível de compressão",
      high: "Alto",
      medium: "Médio",
      low: "Baixo",
      originalSize: "Tamanho original",
      compressedSize: "Após compressão",
      savings: "Economia estimada",
      estimatedReduction: "Redução estimada",
      losslessQuality: "Qualidade sem perda visível",
      balancedCompression: "Equilíbrio qualidade/tamanho",
      maximumCompression: "Compressão máxima",
      processButton: "🗜️ Comprimir Imagens"
    },
    
    resize: {
      title: "📐 Redimensionar Imagens",
      presets: "Tamanhos predefinidos",
      custom: "Personalizado",
      width: "Largura",
      height: "Altura",
      note: "Se uma dimensão for 0, a proporção original será mantida",
      processButton: "📐 Redimensionar"
    },
    
    crop: {
      title: "✂️ Cortar Imagens",
      preview: "Visualização do corte:",
      mode: "Modo de corte",
      free: "Livre",
      ratio: "Proporção",
      presets: "Predefinições sociais",
      square: "Quadrado",
      portrait: "Retrato",
      landscape: "Paisagem",
      instagram: "Instagram",
      story: "Story",
      youtube: "YouTube",
      coordinates: "Coordenadas do corte",
      x: "X",
      y: "Y",
      processButton: "✂️ Cortar"
    },
    
    convert: {
      title: "🔄 Converter Formato",
      format: "Formato destino",
      currentFormat: "Formato atual",
      benefits: "Benefícios",
      processButton: "🔄 Converter",
      formats: {
        webp: {
          title: "WebP Moderno",
          description: "Formato web nova geração",
          benefits: ["Tamanho reduzido 25-50%", "Qualidade superior", "Suporte transparência"]
        },
        png: {
          title: "PNG Sem Perda",
          description: "Qualidade perfeita com transparência",
          benefits: ["Qualidade sem perda", "Suporte transparência", "Perfeito para logos"]
        },
        jpg: {
          title: "JPEG Clássico",
          description: "Padrão universal para fotos",
          benefits: ["Compatibilidade universal", "Tamanho otimizado", "Perfeito para fotografia"]
        },
        avif: {
          title: "AVIF Futuro",
          description: "Formato nova geração",
          benefits: ["Compressão avançada", "Excelente qualidade", "Suporte HDR"]
        }
      }
    },
    
    rotate: {
      title: "🔄 Girar Imagens",
      angle: "Ângulo de rotação",
      quick: "Rotações rápidas",
      processButton: "🔄 Girar"
    },
    
    rename: {
      title: "📝 Renomear Imagens",
      mode: "Modo de renomeação",
      bulk: "Renomear todas",
      individual: "Renomear individual",
      bulkDescription: "Mesmo nome para todas",
      individualDescription: "Nome personalizado para cada uma",
      baseName: "Nome base",
      preview: "Visualização dos nomes:",
      processButton: "📝 Renomear",
      bulkProcessButton: "📝 Renomear Todas"
    },
    
    upscale: {
      title: "🚀 Ampliar Imagens",
      factor: "Fator de ampliação",
      double: "Duplicar",
      quadruple: "Quadruplicar",
      ultraHd: "Ultra HD",
      preview: "Visualização do resultado:",
      original: "Original",
      upscaled: "Ampliada",
      estimate: "Estimativa: ~{factor}x maior",
      info: {
        algorithm: "Algoritmo IA para melhorar qualidade",
        details: "Mantém detalhes e nitidez",
        prints: "Ideal para impressões alta qualidade"
      },
      processButton: "🚀 Ampliar {factor}x"
    },
    
    background: {
      title: "🎨 Remover Fundo",
      mode: "Modo de remoção",
      auto: "IA Automático",
      precision: "Alta Precisão",
      autoDescription: "Detecção inteligente",
      precisionDescription: "Resultados profissionais",
      preview: "Visualização da remoção:",
      withBackground: "Com fundo",
      withoutBackground: "Sem fundo",
      removed: "Fundo removido",
      info: {
        ai: "IA avançada para reconhecimento objetos",
        transparency: "Mantém transparência PNG",
        perfect: "Perfeito para logos e produtos"
      },
      processButton: "🎨 Remover Fundo"
    },
    
    processing: {
      title: "Processando imagens...",
      progress: "Progresso"
    },
    
    results: {
      title: "✅ Processamento Concluído!",
      filesProcessed: "arquivos processados",
      downloadAll: "📦 Baixar Tudo (ZIP)",
      downloadSingle: "📥 Baixar",
      processMore: "🔄 Processar Mais Imagens"
    },
    
    language: {
      select: "Idioma",
      italian: "Italiano",
      english: "English",
      french: "Français",
      german: "Deutsch",
      spanish: "Español",
      portuguese: "🇵🇹 Português"
    },
    
    toasts: [
      { name: "Lucas", message: "Graças a Deus, salvaste minha apresentação de amanhã!" },
      { name: "Martina", message: "Finalmente uma ferramenta que funciona sem me deixar louco." },
      { name: "João", message: "Poupaste-me duas horas de trabalho, muito obrigado!" },
      { name: "Clara", message: "Não sei como teria feito sem isto, mesmo." },
      { name: "David", message: "Era exatamente o que procurava há dias." },
      { name: "Sara", message: "Funciona melhor do que pensava, excelente!" },
      { name: "Alexandre", message: "Estava a ficar louco, depois encontrei isto... genial." },
      { name: "Paula", message: "Não tenho palavras, resolveste tudo num instante." },
      { name: "Marco", message: "Ótimo! Agora posso finalmente entregar o trabalho a tempo." },
      { name: "Elisa", message: "Simples, rápido e ainda bonito de usar. Parabéns." },
      { name: "André", message: "Estava bloqueado há horas, tiraste-me um peso enorme." },
      { name: "Francisca", message: "Fizeste-me parecer um génio com os meus colegas." },
      { name: "Frederico", message: "Vou usar novamente, garantido." },
      { name: "Sílvia", message: "Simplificaste a minha vida, muito obrigado mesmo." },
      { name: "Júlio", message: "Era exatamente o que esperava encontrar." },
      { name: "Ana", message: "Não acredito que demorou tão pouco tempo!" },
      { name: "Mateus", message: "Perfeito à primeira tentativa, incrível." },
      { name: "Cláudia", message: "Era urgente, e salvaste-me no último momento." },
      { name: "Henrique", message: "Estás oficialmente na minha lista de favoritos." },
      { name: "Hilária", message: "Experimentei outras ferramentas mas esta ganha a todas." },
      { name: "Roberto", message: "Uma bênção, não sei o que dizer." },
      { name: "Simona", message: "Assim é que tudo devia funcionar na internet, obrigado." },
      { name: "Cristiano", message: "Não esperava que fosse tão imediato, uau." },
      { name: "Marta", message: "Não só me ajudaste, salvaste o meu dia." },
      { name: "Pedro", message: "Era complicado, mas tornaste tudo super fácil." }
    ],
    
    landing: {
      hero: {
        title: "A Ferramenta de Edição de Imagens Mais Completa",
        subtitle: "Comprima, redimensione, corte, converta e muito mais. Tudo grátis, diretamente no navegador."
      },
      cta: "🚀 Aceder à Ferramenta Completa",
      features: {
        title: "Porquê Escolher IMG Tool?",
        browser: { title: "100% Navegador", desc: "Sem downloads, sem instalação." },
        privacy: { title: "Privacidade Total", desc: "As suas imagens nunca deixam o dispositivo." },
        speed: { title: "Velocidade Extrema", desc: "Processamento imediato sem esperas." },
        free: { title: "Completamente Grátis", desc: "Todas as ferramentas, todas as funcionalidades." }
      },
      finalCta: {
        title: "Pronto para Começar?",
        subtitle: "Junte-se a milhares de utilizadores.",
        button: "🎯 Começar Agora - É Grátis!"
      },
      footer: "O seu editor de imagens favorito"
    },
    
    errors: {
      noImages: "Oops... você ainda não carregou nenhuma imagem",
      noImagesSubtitle: "Você precisa carregar pelo menos uma imagem primeiro para usar as ferramentas de edição.",
      backToHome: "Voltar ao início",
      processingError: "Erro ao processar as imagens"
    },
    
    tips: {
      qualityRecommendation: "Para qualidade ótima sem perda visível, recomendamos ficar entre 70-80%.",
      aspectRatioNote: "Se uma dimensão for 0, a proporção original será mantida",
      uploadSupported: "Suportados: JPG, PNG, GIF, SVG, WEBP",
      maxFiles: "máx 20 arquivos",
      dragAndDrop: "Arraste e solte suas imagens aqui"
    },
    
    toolSelection: {
      title: "Escolha o que fazer agora",
      noToolSelected: "Carregue imagens primeiro para usar as ferramentas"
    },
    
    info: {
      lossless: "Compressão sem perda visível",
      fast: "Processamento rápido e eficiente",
      quality: "Mantém qualidade original",
      smartResize: "Redimensionamento inteligente",
      aspectRatio: "Mantém proporções",
      multipleFormats: "Suporta todos formatos principais",
      instantRotation: "Rotação instantânea",
      batchRename: "Renomeação em lote"
    },

    footer: {
      feedback: "Deixe o seu feedback",
      privacy: "Política de privacidade e cookies",
      copyright: "© 2025 IMG Tool - Francesco Borrelli - O seu editor de imagens favorito"
    },

    privacy: {
      title: "Política de privacidade e cookies",
      lastUpdated: "Última actualização",
      introduction: {
        title: "Introdução",
        content: "O conteúdo da política de privacidade será inserido aqui. Esta secção explicará como tratamos os seus dados pessoais e a sua privacidade."
      },
      dataCollection: {
        title: "Recolha de dados",
        content: "Informações detalhadas sobre que dados recolhemos, como os usamos e como os protegemos."
      },
      cookies: {
        title: "Cookies",
        content: "Informações sobre cookies utilizados pelo nosso website e como gerir as suas preferências."
      },
      contact: {
        title: "Contacto",
        content: "Para qualquer questão sobre esta política de privacidade, pode contactar-nos através do formulário de feedback."
      }
    }
  }
};
