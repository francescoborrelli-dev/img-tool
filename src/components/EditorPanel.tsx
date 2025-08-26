import React, { useState } from 'react'
import { compressByCanvas, resizeImage, rotateImage, blobToFile } from '../lib/imageUtils'
import fileSaver from 'file-saver'

interface Props {
  files: File[]
  setFiles: (f: File[]) => void
}

// Editor panel with compression, resize, and rotation tools
export default function EditorPanel({ files, setFiles }: Props) {
  const [quality, setQuality] = useState(0.8)
  const [resizePx, setResizePx] = useState(800)
  const [angle, setAngle] = useState(0)

  async function handleCompress(index: number) {
    const f = files[index]
    const blob = await compressByCanvas(f, quality, f.type.startsWith('image/png')? 'image/png' : 'image/jpeg')
    const out = blobToFile(blob, f.name)
    fileSaver.saveAs(out)
  }

  async function handleResize(index: number){
    const f = files[index]
    const blob = await resizeImage(f, resizePx, 0, f.type)
    fileSaver.saveAs(blobToFile(blob, f.name))
  }

  async function handleRotate(index: number){
    const f = files[index]
    const blob = await rotateImage(f, angle, f.type)
    fileSaver.saveAs(blobToFile(blob, f.name))
  }

  return (
    <div className="editor-panel">
      <h3>Strumenti di editing</h3>
      
      <div className="controls">
        <div className="control-group">
          <label>Qualità compressione: {Math.round(quality * 100)}%</label>
          <input 
            type="range" 
            min={0.1} 
            max={0.98} 
            step={0.01} 
            value={quality} 
            onChange={(e) => setQuality(Number(e.target.value))} 
          />
        </div>

        <div className="control-group">
          <label>Larghezza ridimensionamento: {resizePx}px</label>
          <input 
            type="range" 
            min={32} 
            max={4000} 
            step={1} 
            value={resizePx} 
            onChange={(e) => setResizePx(Number(e.target.value))} 
          />
        </div>

        <div className="control-group">
          <label>Angolo di rotazione: {angle}°</label>
          <input 
            type="number" 
            value={angle} 
            onChange={(e) => setAngle(Number(e.target.value))} 
          />
        </div>
      </div>

      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <img src={URL.createObjectURL(file)} alt={file.name} />
            <div className="file-info">
              <div className="name">{file.name}</div>
              <div className="size">{(file.size / 1024).toFixed(1)} KB</div>
            </div>
            <div className="actions">
              <button className="action-btn" onClick={() => handleCompress(index)}>
                Comprimi
              </button>
              <button className="action-btn" onClick={() => handleResize(index)}>
                Ridimensiona
              </button>
              <button className="action-btn" onClick={() => handleRotate(index)}>
                Ruota
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
