// Utils per operazioni immagine usando canvas nel browser.
// Tutte le funzioni sono commentate e ritornano Promise con Blob o File.
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

/**
 * Carica un File immagine e ritorna HTMLImageElement
 */
export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      res(img)
    }
    img.onerror = (e) => rej(e)
    img.src = url
  })
}

/**
 * Ridimensiona l'immagine a width/height specificati (pixel).
 * Mantiene il rapporto se uno dei valori è 0.
 */
export async function resizeImage(file: File, width: number, height: number, mime = 'image/jpeg', quality = 0.92): Promise<Blob> {
  const img = await loadImage(file)
  let w = width
  let h = height
  if (!w && !h) {
    w = img.width
    h = img.height
  } else if (!w) {
    w = Math.round((img.width * h) / img.height)
  } else if (!h) {
    h = Math.round((img.height * w) / img.width)
  }

  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(img, 0, 0, w, h)

  return await new Promise((res) => canvas.toBlob((b) => res(b as Blob), mime, quality))
}

/**
 * Ruota l'immagine di un dato angolo (gradi). Restituisce Blob.
 */
export const rotateImage = (file: File, angle: number): Promise<File> => {
  return new Promise((resolve) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    img.onload = () => {
      const radian = (angle * Math.PI) / 180;
      const sin = Math.abs(Math.sin(radian));
      const cos = Math.abs(Math.cos(radian));
      
      canvas.width = img.width * cos + img.height * sin;
      canvas.height = img.width * sin + img.height * cos;
      
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(radian);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      
      canvas.toBlob((blob) => {
        const rotatedFile = new File([blob!], file.name, { type: file.type });
        resolve(rotatedFile);
      }, file.type, 0.95);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

export const upscaleImage = (file: File, factor: number): Promise<File> => {
  return new Promise((resolve) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    img.onload = () => {
      // Nuove dimensioni
      const newWidth = img.width * factor;
      const newHeight = img.height * factor;
      
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // Abilita smoothing per upscaling di qualità
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Disegna l'immagine upscalata
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      
      canvas.toBlob((blob) => {
        const upscaledFile = new File([blob!], 
          file.name.replace(/(\.[^.]+)$/, `_upscaled_${factor}x$1`), 
          { type: file.type }
        );
        resolve(upscaledFile);
      }, file.type, 0.95);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

export const removeBackground = (file: File): Promise<File> => {
  return new Promise((resolve) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Algoritmo semplificato per rimozione sfondo
      // Rileva il colore più comune ai bordi come sfondo
      const cornerColors = [
        [data[0], data[1], data[2]], // Top-left
        [data[(canvas.width - 1) * 4], data[(canvas.width - 1) * 4 + 1], data[(canvas.width - 1) * 4 + 2]], // Top-right
        [data[(canvas.height - 1) * canvas.width * 4], data[(canvas.height - 1) * canvas.width * 4 + 1], data[(canvas.height - 1) * canvas.width * 4 + 2]], // Bottom-left
        [data[((canvas.height - 1) * canvas.width + canvas.width - 1) * 4], data[((canvas.height - 1) * canvas.width + canvas.width - 1) * 4 + 1], data[((canvas.height - 1) * canvas.width + canvas.width - 1) * 4 + 2]] // Bottom-right
      ];
      
      // Trova il colore di sfondo più comune
      const bgColor = cornerColors[0]; // Semplificato: usa top-left
      const tolerance = 30; // Tolleranza per variazioni di colore
      
      // Rimuovi il background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Calcola la distanza dal colore di sfondo
        const distance = Math.sqrt(
          Math.pow(r - bgColor[0], 2) +
          Math.pow(g - bgColor[1], 2) +
          Math.pow(b - bgColor[2], 2)
        );
        
        // Se il colore è simile al background, rendilo trasparente
        if (distance < tolerance) {
          data[i + 3] = 0; // Alpha = 0 (trasparente)
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      canvas.toBlob((blob) => {
        const transparentFile = new File([blob!], 
          file.name.replace(/\.[^.]+$/, '_no_bg.png'), 
          { type: 'image/png' } // PNG per supporto trasparenza
        );
        resolve(transparentFile);
      }, 'image/png');
    };
    
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Crop: ritaglia un'immagine basandosi sui parametri di ritaglio
 */
export async function cropImage(file: File, params: any): Promise<File> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    
    img.onload = () => {
      // Calcola le dimensioni del crop
      const sourceWidth = img.width;
      const sourceHeight = img.height;
      
      // Converte percentuali in pixel
      const cropX = Math.floor((params.area.x / 100) * sourceWidth);
      const cropY = Math.floor((params.area.y / 100) * sourceHeight);
      const cropWidth = Math.floor((params.area.width / 100) * sourceWidth);
      const cropHeight = Math.floor((params.area.height / 100) * sourceHeight);
      
      // Applica aspect ratio se necessario
      let finalWidth = cropWidth;
      let finalHeight = cropHeight;
      
      if (params.aspectRatio && params.mode !== 'free') {
        const currentRatio = cropWidth / cropHeight;
        if (currentRatio > params.aspectRatio) {
          // Troppo largo, riduce la larghezza
          finalWidth = Math.floor(cropHeight * params.aspectRatio);
        } else {
          // Troppo alto, riduce l'altezza
          finalHeight = Math.floor(cropWidth / params.aspectRatio);
        }
      }
      
      // Imposta dimensioni canvas
      canvas.width = finalWidth;
      canvas.height = finalHeight;
      
      // Disegna l'immagine ritagliata
      ctx.drawImage(
        img,
        cropX, cropY, finalWidth, finalHeight,  // area sorgente
        0, 0, finalWidth, finalHeight           // area destinazione
      );
      
      // Converte in blob e crea file
      canvas.toBlob((blob) => {
        if (blob) {
          const croppedFile = new File([blob], `cropped_${file.name}`, {
            type: file.type,
            lastModified: Date.now()
          });
          resolve(croppedFile);
        }
      }, file.type, 0.95);
    };
    
    img.src = URL.createObjectURL(file);
  });
}

/**
 * getCroppedImg: helper per react-easy-crop. Riceve HTMLImageElement o File e le coordinate croppedAreaPixels
 * e ritorna un Blob contenente l'immagine ritagliata.
 */
export async function getCroppedImg(source: File | HTMLImageElement, croppedAreaPixels: { x: number; y: number; width: number; height: number }, mime = 'image/png', quality = 0.92): Promise<Blob> {
  const img = source instanceof File ? await loadImage(source) : source
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(croppedAreaPixels.width))
  canvas.height = Math.max(1, Math.round(croppedAreaPixels.height))
  const ctx = canvas.getContext('2d')!
  // draw the cropped area onto the canvas
  ctx.drawImage(
    img,
    Math.round(croppedAreaPixels.x),
    Math.round(croppedAreaPixels.y),
    Math.round(croppedAreaPixels.width),
    Math.round(croppedAreaPixels.height),
    0,
    0,
    Math.round(croppedAreaPixels.width),
    Math.round(croppedAreaPixels.height)
  )
  return await new Promise((res) => canvas.toBlob((b) => res(b as Blob), mime, quality))
}

/**
 * Converti blob in File con nome e tipo specificati
 */
export function blobToFile(blob: Blob, filename: string): File {
  // @ts-ignore
  return new File([blob], filename, { type: blob.type })
}

/**
 * Compress using canvas by re-encoding with quality param. For better compression use `browser-image-compression`.
 */
export async function compressByCanvas(file: File, quality = 0.8, mime = 'image/jpeg'): Promise<Blob> {
  // Usa browser-image-compression per una compressione migliore
  try {
    const imageCompression = (await import('browser-image-compression')).default
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: quality
    }
    
    const compressedFile = await imageCompression(file, options)
    return new Blob([compressedFile], { type: compressedFile.type })
  } catch (error) {
    console.log('Fallback to canvas compression')
    // Fallback to canvas compression
    return await resizeImage(file, 0, 0, mime, quality)
  }
}

/**
 * Converte formato immagine
 */
export async function convertFormat(file: File, targetFormat: string, quality = 0.92): Promise<Blob> {
  const img = await loadImage(file)
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')!
  
  // Per PNG con trasparenza
  if (targetFormat === 'png') {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  
  ctx.drawImage(img, 0, 0)
  
  const mimeType = `image/${targetFormat === 'jpg' ? 'jpeg' : targetFormat}`
  return await new Promise((res) => canvas.toBlob((b) => res(b as Blob), mimeType, quality))
}

/**
 * Rinomina file con nuovo nome e conserva l'estensione corretta
 */
export function renameFile(blob: Blob, originalName: string, newBaseName: string, index: number, targetFormat?: string): File {
  const extension = targetFormat ? targetFormat : originalName.split('.').pop() || 'jpg'
  const newName = `${newBaseName}_${String(index + 1).padStart(3, '0')}.${extension}`
  return new File([blob], newName, { type: blob.type })
}

/**
 * Crea e scarica ZIP con data odierna
 */
export const downloadAsZip = async (files: File[], zipName?: string) => {
  const zip = new JSZip();
  
  files.forEach((file, index) => {
    zip.file(file.name, file);
  });
  
  const content = await zip.generateAsync({ type: 'blob' });
  const defaultName = zipName || `imgtool_${new Date().toISOString().split('T')[0]}.zip`;
  
  saveAs(content, defaultName);
};

/**
 * Processa multipli file con una funzione specifica
 */
export async function processMultipleFiles(
  files: File[], 
  processor: (file: File) => Promise<Blob>,
  onProgress?: (index: number, total: number) => void
): Promise<Blob[]> {
  const results: Blob[] = []
  
  for (let i = 0; i < files.length; i++) {
    try {
      console.log(`Processing file ${i + 1}/${files.length}: ${files[i].name}`)
      const result = await processor(files[i])
      console.log(`Processed result type: ${result.type}, size: ${result.size}`)
      results.push(result)
      onProgress?.(i + 1, files.length)
    } catch (error) {
      console.error(`Errore processando file ${files[i].name}:`, error)
      // In caso di errore, usa il file originale convertito in blob
      results.push(new Blob([files[i]], { type: files[i].type }))
    }
  }
  
  return results
}

/**
 * Test function per verificare la conversione
 */
export async function testConversion(file: File): Promise<void> {
  console.log('Original file:', file.name, file.type, file.size)
  
  const webpBlob = await convertFormat(file, 'webp')
  console.log('Converted to WebP:', webpBlob.type, webpBlob.size)
  
  const pngBlob = await convertFormat(file, 'png')
  console.log('Converted to PNG:', pngBlob.type, pngBlob.size)
}
