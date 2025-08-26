import React from 'react'

interface Props {
  files: File[]
  setFiles: (f: File[]) => void
}

// Upload area - simple dropzone with click and drag support
export default function UploadArea({ files, setFiles }: Props) {
  function handleFiles(fileList: FileList | null) {
    if (!fileList) return
    const newFiles = Array.from(fileList).slice(0, 20)
    setFiles(newFiles)
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleFiles(e.target.files)
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    handleFiles(e.dataTransfer.files)
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  return (
    <div className="upload-section">
      <label className="dropzone" onDrop={onDrop} onDragOver={onDragOver}>
        <input 
          type="file" 
          accept="image/*,.heic,.HEIC,.avif,.AVIF" 
          multiple 
          onChange={onInputChange}
          className="file-input"
        />
        <div className="upload-content">
          <div className="upload-icon">📁</div>
          <div className="upload-text">
            <strong>Clicca qui o trascina le immagini</strong>
            <p>Supportati: JPG, PNG, GIF, SVG, WEBP, HEIC, AVIF (max 20 file)</p>
          </div>
        </div>
      </label>

      {files.length > 0 && (
        <div className="previews">
          {files.map((file, index) => (
            <div key={index} className="preview">
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <span className="filename">{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
