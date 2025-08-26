import React from 'react'

// Componenti placeholders per ciascun tool. Implementazioni reali andranno in separate utility files.
export function CompressPlaceholder(){
  return <div style={{padding:12}}>Compressione senza perdita visibile (usa browser-image-compression o API)</div>
}
export function ResizePlaceholder(){
  return <div style={{padding:12}}>Ridimensiona per percentuale o pixel</div>
}
export function CropPlaceholder(){
  return <div style={{padding:12}}>Ritaglia definendo rettangolo in pixel</div>
}
export function ConvertPlaceholder(){
  return <div style={{padding:12}}>Converti immagini in bulk (max 20)</div>
}
export function UpscalePlaceholder(){
  return <div style={{padding:12}}>Upscaling ad alta qualità (client o API)</div>
}
export function BgRemovePlaceholder(){
  return <div style={{padding:12}}>Rimozione sfondo</div>
}
export function RotatePlaceholder(){
  return <div style={{padding:12}}>Rotazione con grado preciso o preset</div>
}
export function RenamePlaceholder(){
  return <div style={{padding:12}}>Rinomina singola o bulk con numerazione</div>
}
