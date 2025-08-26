import React, { useState, useEffect } from 'react'
import { 
  compressByCanvas, 
  resizeImage, 
  rotateImage, 
  cropImage, 
  convertFormat, 
  downloadAsZip, 
  processMultipleFiles,
  blobToFile,
  upscaleImage,
  removeBackground
} from './lib/imageUtils'
import { useTranslation, useFormatMessage } from './locales/useTranslation'
import Toast from './components/Toast'
import { Footer } from './components/Footer'

// Stati dell'app
type AppState = 'home' | 'uploaded' | 'processing' | 'completed' | 'tool-selection' | 'no-images-error'

// Tool types
type ToolType = 'compress' | 'resize' | 'crop' | 'convert' | 'rotate' | 'upscale' | 'background' | 'rename'

// Main application component seguendo il design mobile fornito
export default function App() {
  const { t, currentLanguage, changeLanguage, availableLanguages } = useTranslation()
  const { formatMessage } = useFormatMessage()
  
  const [files, setFiles] = useState<File[]>([])
  const [currentState, setCurrentState] = useState<AppState>('home')
  const [selectedTool, setSelectedTool] = useState<ToolType | ''>('')
  const [processedFiles, setProcessedFiles] = useState<Blob[]>([])
  
  // Settings per vari tool
  const [compressionQuality, setCompressionQuality] = useState(70)
  const [resizeWidth, setResizeWidth] = useState(800)
  const [resizeHeight, setResizeHeight] = useState(600)
  const [rotationAngle, setRotationAngle] = useState(90)
  const [convertFormatType, setConvertFormatType] = useState('webp')
  const [renameBase, setRenameBase] = useState('image')
  const [renameMode, setRenameMode] = useState<'bulk' | 'individual'>('bulk')
  const [individualNames, setIndividualNames] = useState<string[]>([])
  const [cropParams, setCropParams] = useState({ mode: 'free', area: { x: 0, y: 0, width: 100, height: 100 }, aspectRatio: null as number | null })
  const [selectedCropPreset, setSelectedCropPreset] = useState('')
  const [progress, setProgress] = useState(0)
  
  // Toast system
  const [showToast, setShowToast] = useState(false)
  const [toastKey, setToastKey] = useState(0)

  // Mostra toast random ogni 15-30 secondi
  useEffect(() => {
    const showRandomToast = () => {
      if (Math.random() < 0.7) { // 70% di probabilità
        setToastKey(prev => prev + 1)
        setShowToast(true)
      }
    }

    // Prima toast dopo 10-15 secondi
    const firstTimeout = setTimeout(showRandomToast, 10000 + Math.random() * 5000)
    
    // Toast ricorrenti ogni 20-40 secondi
    const interval = setInterval(showRandomToast, 20000 + Math.random() * 20000)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [])

  const handleToastComplete = () => {
    setShowToast(false)
  }

  // Funzione per aggiustare l'area di crop basandosi sull'aspect ratio
  const adjustCropArea = (aspectRatio: number, presetName?: string) => {
    setSelectedCropPreset(presetName || '');
    setCropParams(prev => {
      const currentArea = prev.area;
      const currentRatio = currentArea.width / currentArea.height;
      
      let newArea = { ...currentArea };
      
      if (currentRatio > aspectRatio) {
        // Troppo largo, riduci larghezza
        newArea.width = Math.floor(currentArea.height * aspectRatio);
      } else {
        // Troppo alto, riduci altezza  
        newArea.height = Math.floor(currentArea.width / aspectRatio);
      }
      
      // Assicurati che l'area rimanga nei limiti
      if (newArea.x + newArea.width > 100) {
        newArea.x = 100 - newArea.width;
      }
      if (newArea.y + newArea.height > 100) {
        newArea.y = 100 - newArea.height;
      }
      
      return {
        ...prev,
        aspectRatio,
        area: newArea
      };
    });
  };

  const handleFileUpload = (fileList: FileList | null) => {
    if (!fileList) return
    const newFiles = Array.from(fileList).slice(0, 20)
    setFiles(newFiles)
    
    // Inizializza i nomi individuali con i nomi originali (senza estensione)
    setIndividualNames(newFiles.map(file => file.name.replace(/\.[^/.]+$/, "")))
    
    setCurrentState('uploaded')
  }

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
    if (newFiles.length === 0) {
      setCurrentState('home')
    }
  }

  const selectTool = (tool: ToolType) => {
    // Controllo se ci sono immagini caricate
    if (files.length === 0) {
      setCurrentState('no-images-error')
      return
    }
    
    setSelectedTool(tool)
    setCurrentState('tool-selection')
  }

  const backToHome = () => {
    setCurrentState('home')
    setSelectedTool('')
    setFiles([])
    setProcessedFiles([])
  }

  const startProcessing = async () => {
    setCurrentState('processing')
    setProgress(0)
    
    try {
      let processedBlobs: Blob[] = []
      
      switch (selectedTool) {
        case 'compress':
          processedBlobs = await processMultipleFiles(
            files,
            (file) => compressByCanvas(file, compressionQuality / 100),
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'resize':
          processedBlobs = await processMultipleFiles(
            files,
            (file) => resizeImage(file, resizeWidth, resizeHeight),
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'rotate':
          processedBlobs = await processMultipleFiles(
            files,
            (file) => rotateImage(file, rotationAngle),
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'crop':
          processedBlobs = await processMultipleFiles(
            files,
            async (file) => {
              const croppedFile = await cropImage(file, cropParams);
              return new Blob([croppedFile], { type: file.type });
            },
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'convert':
          processedBlobs = await processMultipleFiles(
            files,
            (file) => convertFormat(file, convertFormatType),
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'rename':
          // Per rename processare i file originali come blob
          processedBlobs = await processMultipleFiles(
            files,
            async (file) => {
              // Converte il file in blob mantenendo il formato originale
              return new Blob([file], { type: file.type })
            },
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'upscale':
          processedBlobs = await processMultipleFiles(
            files,
            (file) => upscaleImage(file, resizeWidth),
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        case 'background':
          processedBlobs = await processMultipleFiles(
            files,
            (file) => removeBackground(file),
            (current, total) => setProgress((current / total) * 100)
          )
          break
          
        default:
          // Tool premium non ancora implementati
          processedBlobs = files.map(file => new Blob([file], { type: file.type }))
          setProgress(100)
      }
      
      setProcessedFiles(processedBlobs)
      setCurrentState('completed')
    } catch (error) {
      console.error('Errore durante il processing:', error)
      alert(t.errors.processingError)
      setCurrentState('tool-selection')
    }
  }

  const downloadFiles = async () => {
    // Converte i blob in File per il download
    const filesToDownload = processedFiles.map((blob, index) => {
      const originalFile = files[index];
      let fileName = `processed_${originalFile.name}`;
      
      // Aggiorna il nome del file basandosi sul tool
      if (selectedTool === 'rename') {
        const extension = originalFile.name.split('.').pop();
        if (renameMode === 'bulk') {
          // Modalità bulk: nome_base + numero sequenziale
          fileName = `${renameBase}_${String(index + 1).padStart(3, '0')}.${extension}`;
        } else {
          // Modalità individuale: nome personalizzato per ogni file
          const customName = individualNames[index] || `file_${index + 1}`;
          fileName = `${customName}.${extension}`;
        }
      } else if (selectedTool === 'convert') {
        const baseName = originalFile.name.replace(/\.[^/.]+$/, "");
        fileName = `${baseName}.${convertFormatType}`;
      }
      
      return new File([blob], fileName, { 
        type: blob.type,
        lastModified: Date.now()
      });
    });
    
    await downloadAsZip(filesToDownload);
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo-section">
              <a href="/" className="header-brand-link">
                <img src="/imgtool.png" alt="IMG Tool Logo" className="header-logo" />
                <div className="header-text">
                  <h1>{t.title}</h1>
                  <p className="subtitle">{t.subtitle}</p>
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
                <option value="it">{t.language.italian}</option>
                <option value="en">{t.language.english}</option>
                <option value="fr">{t.language.french}</option>
                <option value="de">{t.language.german}</option>
                <option value="es">{t.language.spanish}</option>
                <option value="pt">{t.language.portuguese}</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        {currentState === 'no-images-error' && (
          <div className="error-state">
            <div className="error-icon">🖼️</div>
            <div className="error-title">{t.errors.noImages}</div>
            <div className="error-subtitle">{t.errors.noImagesSubtitle}</div>
            
            <label className="upload-area error-upload">
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={(e) => handleFileUpload(e.target.files)}
              />
              <div className="upload-icon">📁</div>
              <div className="upload-text">{t.uploadButton}</div>
              <div className="upload-subtext">{t.tips.uploadSupported} ({t.tips.maxFiles})</div>
            </label>

            <button className="secondary-btn" onClick={backToHome}>
              {t.errors.backToHome}
            </button>
          </div>
        )}

        {currentState === 'home' && (
          <>
            <div className="upload-prompt">{t.uploadTitle}</div>
            <label className="upload-area">
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={(e) => handleFileUpload(e.target.files)}
              />
              <div className="upload-icon">📁</div>
              <div className="upload-text">{t.uploadSubtitle}</div>
              <div className="upload-subtext">{t.tips.uploadSupported} ({t.tips.maxFiles})</div>
            </label>

            <ToolsList onSelectTool={selectTool} showValidation={true} t={t} />
          </>
        )}

        {currentState === 'uploaded' && (
          <>
            <div className="images-section">
              <div className="upload-prompt">Immagini caricate:</div>
              <div className="images-grid">
                {files.map((file, index) => (
                  <div key={index} className="image-item">
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    <button className="remove-btn" onClick={() => removeFile(index)}>×</button>
                  </div>
                ))}
              </div>
            </div>

            <ToolsList onSelectTool={selectTool} t={t} />
          </>
        )}

        {currentState === 'tool-selection' && (
          <>
            <div className="images-section">
              <div className="upload-prompt">Immagini caricate:</div>
              <div className="images-grid">
                {files.map((file, index) => (
                  <div key={index} className="image-item">
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    <button className="remove-btn" onClick={() => removeFile(index)}>×</button>
                  </div>
                ))}
              </div>
            </div>

            {selectedTool === 'compress' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    {t.backButton}
                  </button>
                  <h3>{t.compression.title}</h3>
                </div>
                <div className="setting-group">
                  <label className="setting-label">
                    {t.compression.quality}
                    <span className="quality-value">{compressionQuality}%</span>
                  </label>
                  <div className="slider-container">
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={compressionQuality}
                      onChange={(e) => setCompressionQuality(Number(e.target.value))}
                      className="quality-slider"
                    />
                    <div className="slider-tooltip" style={{ left: `${(compressionQuality - 10) / 90 * 100}%` }}>
                      {compressionQuality}%
                    </div>
                  </div>
                  <div className="quality-values">
                    <span>10% ({t.compression.maximumCompression})</span>
                    <span>100% ({t.compression.losslessQuality})</span>
                  </div>
                  <div className="quality-note">
                    {t.tips.qualityRecommendation}
                  </div>
                </div>
                
                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  🗜️ Comprimi Immagini
                </button>
              </div>
            )}

            {selectedTool === 'resize' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    {t.backButton}
                  </button>
                  <h3>{t.resize.title}</h3>
                </div>
                
                {/* Preset dimensioni */}
                <div className="setting-group">
                  <label className="setting-label">{t.resize.presets}</label>
                  <div className="preset-grid">
                    <button 
                      className={`preset-btn ${resizeWidth === 1920 && resizeHeight === 1080 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(1920); setResizeHeight(1080)}}
                    >
                      <div className="preset-name">Full HD</div>
                      <div className="preset-size">1920×1080</div>
                    </button>
                    <button 
                      className={`preset-btn ${resizeWidth === 1280 && resizeHeight === 720 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(1280); setResizeHeight(720)}}
                    >
                      <div className="preset-name">HD</div>
                      <div className="preset-size">1280×720</div>
                    </button>
                    <button 
                      className={`preset-btn ${resizeWidth === 800 && resizeHeight === 600 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(800); setResizeHeight(600)}}
                    >
                      <div className="preset-name">Web</div>
                      <div className="preset-size">800×600</div>
                    </button>
                    <button 
                      className={`preset-btn ${resizeWidth === 500 && resizeHeight === 500 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(500); setResizeHeight(500)}}
                    >
                      <div className="preset-name">Quadrato</div>
                      <div className="preset-size">500×500</div>
                    </button>
                    <button 
                      className={`preset-btn ${resizeWidth === 1080 && resizeHeight === 1350 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(1080); setResizeHeight(1350)}}
                    >
                      <div className="preset-name">Instagram</div>
                      <div className="preset-size">1080×1350</div>
                    </button>
                    <button 
                      className={`preset-btn ${resizeWidth === 1200 && resizeHeight === 630 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(1200); setResizeHeight(630)}}
                    >
                      <div className="preset-name">Facebook</div>
                      <div className="preset-size">1200×630</div>
                    </button>
                  </div>
                </div>

                {/* Dimensioni personalizzate */}
                <div className="setting-group">
                  <label className="setting-label">Dimensioni personalizzate</label>
                  <div className="size-inputs">
                    <div className="input-group">
                      <label className="input-label">Larghezza</label>
                      <div className="input-with-unit">
                        <input 
                          type="number" 
                          value={resizeWidth}
                          onChange={(e) => setResizeWidth(Number(e.target.value))}
                          className="size-input"
                          min="1"
                          max="4000"
                        />
                        <span className="input-unit">px</span>
                      </div>
                    </div>
                    
                    <div className="size-separator">×</div>
                    
                    <div className="input-group">
                      <label className="input-label">Altezza</label>
                      <div className="input-with-unit">
                        <input 
                          type="number" 
                          value={resizeHeight}
                          onChange={(e) => setResizeHeight(Number(e.target.value))}
                          className="size-input"
                          min="1"
                          max="4000"
                        />
                        <span className="input-unit">px</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="resize-note">
                    <span className="note-icon">💡</span>
                    <span>Se una dimensione è 0, verrà mantenuta la proporzione originale</span>
                  </div>
                </div>
                
                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  📐 Ridimensiona Immagini
                </button>
              </div>
            )}

            {selectedTool === 'crop' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    ← Torna alla selezione
                  </button>
                  <h3>✂️ Ritaglia Immagini</h3>
                </div>
                
                {/* Anteprima */}
                {files.length > 0 && (
                  <div className="setting-group">
                    <label>Anteprima ritaglio:</label>
                    <div className="crop-preview">
                      <div className="preview-container">
                        <img 
                          src={URL.createObjectURL(files[0])} 
                          alt="Preview"
                          className="preview-image"
                        />
                        <div 
                          className="crop-overlay"
                          style={{
                            left: `${cropParams.area.x}%`,
                            top: `${cropParams.area.y}%`,
                            width: `${cropParams.area.width}%`,
                            height: `${cropParams.area.height}%`
                          }}
                        >
                          <div className="crop-frame"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Modalità di ritaglio */}
                <div className="setting-group">
                  <label>Modalità ritaglio:</label>
                  <div className="crop-modes">
                    <button 
                      className={`mode-btn ${cropParams.mode === 'free' ? 'active' : ''}`}
                      onClick={() => {
                        setCropParams(prev => ({ ...prev, mode: 'free', aspectRatio: null }));
                        setSelectedCropPreset('');
                      }}
                    >
                      🆓 Libero
                    </button>
                    <button 
                      className={`mode-btn ${cropParams.mode === 'ratio' ? 'active' : ''}`}
                      onClick={() => {
                        setCropParams(prev => ({ ...prev, mode: 'ratio' }));
                        setSelectedCropPreset('');
                      }}
                    >
                      📐 Proporzioni
                    </button>
                    <button 
                      className={`mode-btn ${cropParams.mode === 'preset' ? 'active' : ''}`}
                      onClick={() => {
                        setCropParams(prev => ({ ...prev, mode: 'preset' }));
                        setSelectedCropPreset('');
                      }}
                    >
                      📋 Preset
                    </button>
                  </div>
                </div>

                {/* Proporzioni personalizzate */}
                {cropParams.mode === 'ratio' && (
                  <div className="setting-group">
                    <label>Proporzioni personalizzate:</label>
                    <div className="ratio-inputs">
                      <div className="input-with-unit">
                        <input
                          type="number"
                          value={16}
                          onChange={(e) => {}}
                          min="1"
                          max="100"
                        />
                        <span className="unit">w</span>
                      </div>
                      <span className="ratio-separator">:</span>
                      <div className="input-with-unit">
                        <input
                          type="number"
                          value={9}
                          onChange={(e) => {}}
                          min="1"
                          max="100"
                        />
                        <span className="unit">h</span>
                      </div>
                    </div>
                    <div className="ratio-presets">
                      <button onClick={() => adjustCropArea(1)}>1:1</button>
                      <button onClick={() => adjustCropArea(16/9)}>16:9</button>
                      <button onClick={() => adjustCropArea(4/3)}>4:3</button>
                      <button onClick={() => adjustCropArea(3/2)}>3:2</button>
                    </div>
                  </div>
                )}

                {/* Preset di ritaglio */}
                {cropParams.mode === 'preset' && (
                  <div className="setting-group">
                    <label>Preset social media:</label>
                    <div className="preset-grid crop-presets">
                      <button
                        className={`preset-btn ${selectedCropPreset === 'instagram-post' ? 'active' : ''}`}
                        onClick={() => adjustCropArea(1, 'instagram-post')}
                      >
                        <div className="preset-name">Instagram Post</div>
                        <div className="preset-ratio">1:1</div>
                      </button>
                      <button
                        className={`preset-btn ${selectedCropPreset === 'instagram-story' ? 'active' : ''}`}
                        onClick={() => adjustCropArea(9/16, 'instagram-story')}
                      >
                        <div className="preset-name">Instagram Story</div>
                        <div className="preset-ratio">9:16</div>
                      </button>
                      <button
                        className={`preset-btn ${selectedCropPreset === 'youtube' ? 'active' : ''}`}
                        onClick={() => adjustCropArea(16/9, 'youtube')}
                      >
                        <div className="preset-name">YouTube</div>
                        <div className="preset-ratio">16:9</div>
                      </button>
                      <button
                        className={`preset-btn ${selectedCropPreset === 'facebook' ? 'active' : ''}`}
                        onClick={() => adjustCropArea(1200/630, 'facebook')}
                      >
                        <div className="preset-name">Facebook</div>
                        <div className="preset-ratio">1200×630</div>
                      </button>
                      <button
                        className={`preset-btn ${selectedCropPreset === 'twitter' ? 'active' : ''}`}
                        onClick={() => adjustCropArea(3/1, 'twitter')}
                      >
                        <div className="preset-name">Twitter Header</div>
                        <div className="preset-ratio">3:1</div>
                      </button>
                      <button
                        className={`preset-btn ${selectedCropPreset === 'pinterest' ? 'active' : ''}`}
                        onClick={() => adjustCropArea(4/5, 'pinterest')}
                      >
                        <div className="preset-name">Pinterest</div>
                        <div className="preset-ratio">4:5</div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Area di ritaglio */}
                <div className="setting-group">
                  <label>Posizione e dimensioni (%):</label>
                  <div className="crop-controls">
                    <div className="crop-input-row">
                      <div className="input-with-label">
                        <label>Posizione X:</label>
                        <input
                          type="range"
                          min="0"
                          max="90"
                          value={cropParams.area.x}
                          onChange={(e) => setCropParams(prev => ({ 
                            ...prev, 
                            area: { ...prev.area, x: parseInt(e.target.value) }
                          }))}
                        />
                        <span>{cropParams.area.x}%</span>
                      </div>
                      <div className="input-with-label">
                        <label>Posizione Y:</label>
                        <input
                          type="range"
                          min="0"
                          max="90"
                          value={cropParams.area.y}
                          onChange={(e) => setCropParams(prev => ({ 
                            ...prev, 
                            area: { ...prev.area, y: parseInt(e.target.value) }
                          }))}
                        />
                        <span>{cropParams.area.y}%</span>
                      </div>
                    </div>
                    <div className="crop-input-row">
                      <div className="input-with-label">
                        <label>Larghezza:</label>
                        <input
                          type="range"
                          min="10"
                          max={100 - cropParams.area.x}
                          value={cropParams.area.width}
                          onChange={(e) => setCropParams(prev => ({ 
                            ...prev, 
                            area: { ...prev.area, width: parseInt(e.target.value) }
                          }))}
                        />
                        <span>{cropParams.area.width}%</span>
                      </div>
                      <div className="input-with-label">
                        <label>Altezza:</label>
                        <input
                          type="range"
                          min="10"
                          max={100 - cropParams.area.y}
                          value={cropParams.area.height}
                          onChange={(e) => setCropParams(prev => ({ 
                            ...prev, 
                            area: { ...prev.area, height: parseInt(e.target.value) }
                          }))}
                        />
                        <span>{cropParams.area.height}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  ✂️ Applica Ritaglio
                </button>
              </div>
            )}

            {selectedTool === 'rotate' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    ← Torna alla selezione
                  </button>
                  <h3>Ruota Immagini</h3>
                </div>
                <div className="setting-group">
                  <label className="setting-label">Angolo di rotazione</label>
                  <div className="rotate-buttons">
                    <button 
                      className={`rotate-btn ${rotationAngle === 90 ? 'active' : ''}`}
                      onClick={() => setRotationAngle(90)}
                    >
                      90°
                    </button>
                    <button 
                      className={`rotate-btn ${rotationAngle === 180 ? 'active' : ''}`}
                      onClick={() => setRotationAngle(180)}
                    >
                      180°
                    </button>
                    <button 
                      className={`rotate-btn ${rotationAngle === 270 ? 'active' : ''}`}
                      onClick={() => setRotationAngle(270)}
                    >
                      270°
                    </button>
                  </div>
                </div>
                
                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  🔄 Ruota di {rotationAngle}°
                </button>
              </div>
            )}

            {selectedTool === 'convert' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    ← Torna alla selezione
                  </button>
                  <h3>🔄 Converti Formato</h3>
                </div>

                {/* Anteprima formato originale */}
                {files.length > 0 && (
                  <div className="setting-group">
                    <label>File originali:</label>
                    <div className="format-preview">
                      <div className="format-info">
                        <div className="format-badge original">
                          {files[0].type.split('/')[1].toUpperCase()}
                        </div>
                        <div className="format-details">
                          <span className="file-count">{files.length} file{files.length > 1 ? 's' : ''}</span>
                          <span className="file-size">
                            {(files.reduce((total, file) => total + file.size, 0) / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Selezione formato */}
                <div className="setting-group">
                  <label className="setting-label">Formato di destinazione</label>
                  <div className="format-grid">
                    <div 
                      className={`format-card ${convertFormatType === 'webp' ? 'active' : ''}`}
                      onClick={() => setConvertFormatType('webp')}
                    >
                      <div className="format-icon">🚀</div>
                      <div className="format-name">WebP</div>
                      <div className="format-desc">Moderno, leggero</div>
                      <div className="format-features">
                        <span className="feature">-30% dimensioni</span>
                        <span className="feature">Qualità alta</span>
                      </div>
                    </div>
                    
                    <div 
                      className={`format-card ${convertFormatType === 'png' ? 'active' : ''}`}
                      onClick={() => setConvertFormatType('png')}
                    >
                      <div className="format-icon">🖼️</div>
                      <div className="format-name">PNG</div>
                      <div className="format-desc">Senza perdite</div>
                      <div className="format-features">
                        <span className="feature">Trasparenza</span>
                        <span className="feature">Lossless</span>
                      </div>
                    </div>
                    
                    <div 
                      className={`format-card ${convertFormatType === 'jpeg' ? 'active' : ''}`}
                      onClick={() => setConvertFormatType('jpeg')}
                    >
                      <div className="format-icon">📷</div>
                      <div className="format-name">JPEG</div>
                      <div className="format-desc">Compatibile</div>
                      <div className="format-features">
                        <span className="feature">Universale</span>
                        <span className="feature">Compatto</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opzioni avanzate per JPEG */}
                {convertFormatType === 'jpeg' && (
                  <div className="setting-group">
                    <label className="setting-label">Qualità JPEG</label>
                    <div className="quality-slider">
                      <input
                        type="range"
                        min="60"
                        max="100"
                        value={compressionQuality}
                        onChange={(e) => setCompressionQuality(parseInt(e.target.value))}
                      />
                      <div className="quality-labels">
                        <span>Compatto</span>
                        <span className="quality-value">{compressionQuality}%</span>
                        <span>Alta qualità</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Info formato selezionato */}
                <div className="setting-group">
                  <div className="format-comparison">
                    <div className="comparison-item">
                      <div className="comparison-label">Da</div>
                      <div className="comparison-format">{files.length > 0 ? files[0].type.split('/')[1].toUpperCase() : '---'}</div>
                    </div>
                    <div className="comparison-arrow">→</div>
                    <div className="comparison-item">
                      <div className="comparison-label">A</div>
                      <div className="comparison-format">{convertFormatType.toUpperCase()}</div>
                    </div>
                  </div>
                  
                  <div className="format-benefits">
                    {convertFormatType === 'webp' && (
                      <div className="benefit-list">
                        <div className="benefit">✅ Riduce dimensioni del 25-35%</div>
                        <div className="benefit">✅ Supporta animazioni</div>
                        <div className="benefit">✅ Qualità superiore</div>
                        <div className="benefit">⚠️ Supporto browser moderni</div>
                      </div>
                    )}
                    {convertFormatType === 'png' && (
                      <div className="benefit-list">
                        <div className="benefit">✅ Mantiene trasparenza</div>
                        <div className="benefit">✅ Qualità perfetta</div>
                        <div className="benefit">✅ Compatibilità universale</div>
                        <div className="benefit">⚠️ File più pesanti</div>
                      </div>
                    )}
                    {convertFormatType === 'jpeg' && (
                      <div className="benefit-list">
                        <div className="benefit">✅ Compatibilità totale</div>
                        <div className="benefit">✅ File compatti</div>
                        <div className="benefit">✅ Ideale per foto</div>
                        <div className="benefit">⚠️ Perde trasparenza</div>
                      </div>
                    )}
                  </div>
                </div>

                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  🔄 Converti in {convertFormatType.toUpperCase()}
                </button>
              </div>
            )}

            {selectedTool === 'rename' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    ← Torna alla selezione
                  </button>
                  <h3>📝 Rinomina Immagini</h3>
                </div>

                {/* Modalità di rinomina */}
                <div className="setting-group">
                  <label>Modalità di rinomina:</label>
                  <div className="rename-modes">
                    <button 
                      className={`mode-btn ${renameMode === 'bulk' ? 'active' : ''}`}
                      onClick={() => setRenameMode('bulk')}
                    >
                      📦 Rinomina di massa
                    </button>
                    <button 
                      className={`mode-btn ${renameMode === 'individual' ? 'active' : ''}`}
                      onClick={() => setRenameMode('individual')}
                    >
                      🎯 Rinomina individuale
                    </button>
                  </div>
                </div>

                {/* Modalità bulk */}
                {renameMode === 'bulk' && (
                  <div className="setting-group">
                    <label className="setting-label">Nome base per tutti i file</label>
                    <input 
                      type="text" 
                      value={renameBase}
                      onChange={(e) => setRenameBase(e.target.value)}
                      className="text-input"
                      placeholder="es: vacation, work, photos"
                    />
                    <div className="rename-preview">
                      <strong>Anteprima nomi:</strong>
                      <div className="preview-list">
                        {files.slice(0, 3).map((file, index) => {
                          const extension = file.name.split('.').pop();
                          return (
                            <div key={index} className="preview-item">
                              <span className="old-name">{file.name}</span>
                              <span className="arrow">→</span>
                              <span className="new-name">{renameBase}_{String(index + 1).padStart(3, '0')}.{extension}</span>
                            </div>
                          );
                        })}
                        {files.length > 3 && (
                          <div className="more-files">... e altri {files.length - 3} file</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Modalità individuale */}
                {renameMode === 'individual' && (
                  <div className="setting-group">
                    <label className="setting-label">Rinomina ogni file singolarmente</label>
                    <div className="individual-rename-list">
                      {files.map((file, index) => {
                        const extension = file.name.split('.').pop();
                        return (
                          <div key={index} className="individual-rename-item">
                            <div className="file-info">
                              <img 
                                src={URL.createObjectURL(file)} 
                                alt={file.name}
                                className="file-thumbnail"
                              />
                              <div className="file-details">
                                <div className="original-name">{file.name}</div>
                                <div className="file-size">{(file.size / 1024).toFixed(1)} KB</div>
                              </div>
                            </div>
                            <div className="rename-input-wrapper">
                              <input
                                type="text"
                                value={individualNames[index] || ''}
                                onChange={(e) => {
                                  const newNames = [...individualNames];
                                  newNames[index] = e.target.value;
                                  setIndividualNames(newNames);
                                }}
                                className="individual-name-input"
                                placeholder={`file_${index + 1}`}
                              />
                              <span className="file-extension">.{extension}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  📝 {renameMode === 'bulk' ? 'Rinomina tutti i file' : 'Applica nomi personalizzati'}
                </button>
              </div>
            )}

            {selectedTool === 'upscale' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    ← Torna alla selezione
                  </button>
                  <h3>🚀 Upscale Immagini <span className="new-badge">NUOVO!</span></h3>
                </div>

                <div className="setting-group">
                  <label className="setting-label">Fattore di ingrandimento</label>
                  <div className="upscale-options">
                    <button 
                      className={`upscale-btn ${resizeWidth === 2 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(2); setResizeHeight(2)}}
                    >
                      <div className="upscale-factor">2x</div>
                      <div className="upscale-desc">Raddoppia</div>
                    </button>
                    <button 
                      className={`upscale-btn ${resizeWidth === 4 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(4); setResizeHeight(4)}}
                    >
                      <div className="upscale-factor">4x</div>
                      <div className="upscale-desc">Quadruplica</div>
                    </button>
                    <button 
                      className={`upscale-btn ${resizeWidth === 8 ? 'active' : ''}`}
                      onClick={() => {setResizeWidth(8); setResizeHeight(8)}}
                    >
                      <div className="upscale-factor">8x</div>
                      <div className="upscale-desc">Ultra HD</div>
                    </button>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="setting-group">
                    <label>Anteprima risultato:</label>
                    <div className="upscale-preview">
                      <div className="upscale-comparison">
                        <div className="comparison-side">
                          <div className="comparison-label">Originale</div>
                          <img 
                            src={URL.createObjectURL(files[0])} 
                            alt="Original"
                            className="preview-img original"
                          />
                          <div className="img-info">
                            Originale
                          </div>
                        </div>
                        <div className="comparison-arrow">→</div>
                        <div className="comparison-side">
                          <div className="comparison-label">Upscalata {resizeWidth}x</div>
                          <div className="preview-placeholder">
                            <div className="placeholder-icon">🔍</div>
                            <div className="placeholder-text">Anteprima dopo processing</div>
                          </div>
                          <div className="img-info estimated">
                            Stima: ~{resizeWidth}x più grande
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="setting-group">
                  <div className="upscale-info">
                    <div className="info-item">
                      <span className="info-icon">🎯</span>
                      <span>Algoritmo AI per migliorare la qualità</span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">⚡</span>
                      <span>Mantiene dettagli e nitidezza</span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">🖼️</span>
                      <span>Ideale per stampe di alta qualità</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  🚀 Ingrandisci {resizeWidth}x
                </button>
              </div>
            )}

            {selectedTool === 'background' && (
              <div className="tool-settings">
                <div className="tool-header">
                  <button className="back-btn" onClick={() => setCurrentState('uploaded')}>
                    ← Torna alla selezione
                  </button>
                  <h3>🎨 Rimuovi Sfondo <span className="new-badge">NUOVO!</span></h3>
                </div>

                <div className="setting-group">
                  <label className="setting-label">Modalità rimozione</label>
                  <div className="bg-removal-options">
                    <button className="bg-option active">
                      <div className="bg-icon">🤖</div>
                      <div className="bg-name">AI Automatico</div>
                      <div className="bg-desc">Rilevamento intelligente</div>
                    </button>
                    <button className="bg-option">
                      <div className="bg-icon">🎯</div>
                      <div className="bg-name">Alta Precisione</div>
                      <div className="bg-desc">Risultati professionali</div>
                    </button>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="setting-group">
                    <label>Anteprima rimozione:</label>
                    <div className="bg-preview">
                      <div className="bg-comparison">
                        <div className="comparison-side">
                          <div className="comparison-label">Con sfondo</div>
                          <img 
                            src={URL.createObjectURL(files[0])} 
                            alt="Original"
                            className="preview-img"
                          />
                        </div>
                        <div className="comparison-arrow">→</div>
                        <div className="comparison-side">
                          <div className="comparison-label">Senza sfondo</div>
                          <div className="preview-placeholder transparent">
                            <div className="placeholder-icon">✨</div>
                            <div className="placeholder-text">Sfondo rimosso</div>
                            <div className="transparency-grid"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="setting-group">
                  <div className="bg-info">
                    <div className="info-item">
                      <span className="info-icon">🤖</span>
                      <span>AI avanzata per riconoscimento oggetti</span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">🖼️</span>
                      <span>Mantiene trasparenza PNG</span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">🎨</span>
                      <span>Perfetto per loghi e prodotti</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="action-btn" 
                  onClick={() => {
                    setCurrentState('tool-selection');
                    startProcessing();
                  }}
                >
                  🎨 Rimuovi Sfondo
                </button>
              </div>
            )}
          </>
        )}

        {currentState === 'processing' && (
          <div className="loading">
            <div className="spinner"></div>
            <div className="loading-text">{t.processing.title}</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-text">{Math.round(progress)}%</div>
          </div>
        )}

        {currentState === 'completed' && (
          <>
            <div className="images-section">
              <div className="upload-prompt">{t.results.title}</div>
              <div className="images-grid">
                {files.map((file, index) => (
                  <div key={index} className="image-item">
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    <button className="remove-btn" onClick={() => removeFile(index)}>×</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="success-message">
              <div className="success-title">Le tue IMMAGINI sono state processate!</div>
              <div className="success-subtitle">
                {selectedTool === 'compress' && 'Compressione completata!'}
                {selectedTool === 'resize' && 'Ridimensionamento completato!'}
                {selectedTool === 'rotate' && 'Rotazione completata!'}
                {selectedTool === 'convert' && 'Conversione completata!'}
                {selectedTool === 'rename' && 'Rinomina completata!'}
              </div>
              <div className="compression-stats">
                {processedFiles.length} {t.results.filesProcessed}
              </div>
            </div>

            <ToolsList onSelectTool={selectTool} t={t} />

            <button className="action-btn" onClick={downloadFiles}>
              {t.results.downloadAll}
            </button>
          </>
        )}
      </main>
      
      {/* Toast system */}
      {showToast && (
        <Toast 
          key={toastKey}
          onComplete={handleToastComplete} 
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Componente per la lista degli strumenti
function ToolsList({ onSelectTool, showValidation = false, t }: { onSelectTool: (tool: ToolType) => void; showValidation?: boolean; t: any }) {
  const tools = [
    {
      id: 'compress' as ToolType,
      title: t.tools.compress,
      description: t.toolDescriptions.compress,
      icon: '🗜️'
    },
    {
      id: 'resize' as ToolType,
      title: t.tools.resize,
      description: t.toolDescriptions.resize,
      icon: '📏'
    },
    {
      id: 'crop' as ToolType,
      title: t.tools.crop,
      description: t.toolDescriptions.crop,
      icon: '✂️'
    },
    {
      id: 'convert' as ToolType,
      title: t.tools.convert,
      description: t.toolDescriptions.convert,
      icon: '🔄'
    },
    {
      id: 'rotate' as ToolType,
      title: t.tools.rotate,
      description: t.toolDescriptions.rotate,
      icon: '🔄'
    },
    {
      id: 'upscale' as ToolType,
      title: t.tools.upscale,
      description: t.toolDescriptions.upscale,
      icon: '⬆️',
      premium: false,
      isNew: true
    },
    {
      id: 'background' as ToolType,
      title: t.tools.background,
      description: t.toolDescriptions.background,
      icon: '🎨',
      premium: false,
      isNew: true
    },
    {
      id: 'rename' as ToolType,
      title: t.tools.rename,
      description: t.toolDescriptions.rename,
      icon: '📝'
    }
  ]

  return (
    <div className="tools-section">
      <h3>{t.toolSelection.title}</h3>
      {showValidation && (
        <div className="tools-notice">
          <span className="notice-icon">ℹ️</span>
          <span className="notice-text">{t.toolSelection.noToolSelected}</span>
        </div>
      )}
      <div className="tools-list">
        {tools.map((tool) => (
          <button 
            key={tool.id} 
            className={`tool-item ${tool.premium ? 'premium' : ''} ${tool.isNew ? 'new-feature' : ''} ${showValidation ? 'disabled' : ''}`}
            onClick={() => onSelectTool(tool.id)}
          >
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-content">
              <div className="tool-title">
                {tool.title}
                {tool.isNew && <span className="new-badge">{t.newBadge}</span>}
              </div>
              <div className="tool-description">{tool.description}</div>
            </div>
            <div className="tool-arrow">›</div>
          </button>
        ))}
      </div>
    </div>
  )
}
