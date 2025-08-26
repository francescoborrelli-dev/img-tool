import React, { useState } from 'react'
import { blobToFile, loadImage } from '../lib/imageUtils'
import fileSaver from 'file-saver'

interface Props { files: File[] }

export default function BulkConvertPanel({ files }: Props){
  const [format, setFormat] = useState<'image/jpeg'|'image/png'|'image/webp'>('image/webp')
  const [renameBase, setRenameBase] = useState('img')
  const [startIndex, setStartIndex] = useState(1)

  async function convertAll(){
    const toProcess = files.slice(0,20)
    for (let i=0;i<toProcess.length;i++){
      const f = toProcess[i]
      // draw to canvas and export using chosen mime
      const img = await loadImage(f)
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img,0,0)
      const blob: Blob = await new Promise((res)=>canvas.toBlob((b)=>res(b as Blob), format, 0.92))
      const name = `${renameBase}_${String(startIndex + i).padStart(2,'0')}.${format.split('/')[1]}`
      fileSaver.saveAs(new File([blob], name, { type: blob.type }))
    }
  }

  if (files.length===0) return <div style={{padding:12}}>Carica immagini per conversione bulk.</div>

  return (
    <section style={{background:'var(--card)',padding:12,borderRadius:12}}>
      <h3>Bulk convert & rename</h3>
      <label>
        Formato di destinazione:
        <select value={format} onChange={(e)=>setFormat(e.target.value as any)}>
          <option value="image/webp">webp</option>
          <option value="image/png">png</option>
          <option value="image/jpeg">jpg</option>
        </select>
      </label>

      <label>
        Nome base per rinominare:
        <input value={renameBase} onChange={(e)=>setRenameBase(e.target.value)} />
      </label>

      <label>
        Start index:
        <input type="number" value={startIndex} onChange={(e)=>setStartIndex(Number(e.target.value))} />
      </label>

      <div style={{marginTop:8}}>
        <button className="action-btn" onClick={convertAll}>Converti e scarica</button>
      </div>
    </section>
  )
}
