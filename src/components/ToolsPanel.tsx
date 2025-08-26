import React from 'react'

// Pannello strumenti: lista dei tool disponibili. Ogni tool avrà un componente dedicato.
export default function ToolsPanel() {
  const tools = [
    { key: 'compress', label: 'Compressione' },
    { key: 'resize', label: 'Ridimensiona' },
    { key: 'crop', label: 'Ritaglia' },
    { key: 'convert', label: 'Converti' },
    { key: 'upscale', label: 'Upscale' },
    { key: 'bg', label: 'Rimuovi sfondo' },
    { key: 'rotate', label: 'Ruota' },
    { key: 'rename', label: 'Rinomina' }
  ]

  return (
    <aside className="card sidebar-vertical" style={{padding:12}}>
      {tools.map((t) => (
        <button key={t.key} className="tool-btn" title={t.label}>
          <span className="icon">●</span>
          <span style={{fontSize:13}}>{t.label}</span>
        </button>
      ))}
    </aside>
  )
}
