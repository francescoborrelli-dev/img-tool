import React, { useState } from 'react';

interface CropPanelProps {
  onCrop: (params: any) => void;
}

export const CropPanel: React.FC<CropPanelProps> = ({ onCrop }) => {
  const [cropMode, setCropMode] = useState<'free' | 'ratio' | 'preset'>('free');
  const [customRatio, setCustomRatio] = useState({ width: 16, height: 9 });
  const [selectedPreset, setSelectedPreset] = useState('');
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 100, height: 100 });

  const aspectRatioPresets = [
    { name: 'Quadrato', ratio: '1:1', value: 1 },
    { name: 'Instagram Post', ratio: '1:1', value: 1 },
    { name: 'Instagram Story', ratio: '9:16', value: 9/16 },
    { name: 'Facebook Post', ratio: '16:9', value: 16/9 },
    { name: 'Twitter Header', ratio: '3:1', value: 3/1 },
    { name: 'YouTube Thumbnail', ratio: '16:9', value: 16/9 }
  ];

  const handleCrop = () => {
    const params = {
      mode: cropMode,
      area: cropArea,
      aspectRatio: cropMode === 'ratio' ? customRatio.width / customRatio.height : 
                   cropMode === 'preset' ? aspectRatioPresets.find(p => p.name === selectedPreset)?.value : 
                   null
    };
    onCrop(params);
  };

  return (
    <div className="tool-settings crop-panel">
      <h3>✂️ Ritaglia Immagini</h3>
      
      {/* Modalità di ritaglio */}
      <div className="setting-group">
        <label>Modalità ritaglio:</label>
        <div className="crop-modes">
          <button 
            className={`mode-btn ${cropMode === 'free' ? 'active' : ''}`}
            onClick={() => setCropMode('free')}
          >
            🆓 Libero
          </button>
          <button 
            className={`mode-btn ${cropMode === 'ratio' ? 'active' : ''}`}
            onClick={() => setCropMode('ratio')}
          >
            📐 Proporzioni
          </button>
          <button 
            className={`mode-btn ${cropMode === 'preset' ? 'active' : ''}`}
            onClick={() => setCropMode('preset')}
          >
            📋 Preset
          </button>
        </div>
      </div>

      {/* Ritaglio con proporzioni personalizzate */}
      {cropMode === 'ratio' && (
        <div className="setting-group">
          <label>Proporzioni personalizzate:</label>
          <div className="ratio-inputs">
            <div className="input-with-unit">
              <input
                type="number"
                value={customRatio.width}
                onChange={(e) => setCustomRatio(prev => ({ ...prev, width: parseInt(e.target.value) || 1 }))}
                min="1"
                max="100"
              />
              <span className="unit">w</span>
            </div>
            <span className="ratio-separator">:</span>
            <div className="input-with-unit">
              <input
                type="number"
                value={customRatio.height}
                onChange={(e) => setCustomRatio(prev => ({ ...prev, height: parseInt(e.target.value) || 1 }))}
                min="1"
                max="100"
              />
              <span className="unit">h</span>
            </div>
          </div>
          <p className="ratio-preview">Anteprima: {customRatio.width}:{customRatio.height}</p>
        </div>
      )}

      {/* Preset di ritaglio */}
      {cropMode === 'preset' && (
        <div className="setting-group">
          <label>Preset disponibili:</label>
          <div className="preset-grid crop-presets">
            {aspectRatioPresets.map((preset, index) => (
              <button
                key={index}
                className={`preset-btn ${selectedPreset === preset.name ? 'selected' : ''}`}
                onClick={() => setSelectedPreset(preset.name)}
              >
                <div className="preset-name">{preset.name}</div>
                <div className="preset-ratio">{preset.ratio}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Area di ritaglio (per tutti i modi) */}
      <div className="setting-group">
        <label>Area di ritaglio (%):</label>
        <div className="crop-controls">
          <div className="crop-input-row">
            <div className="input-with-label">
              <label>X:</label>
              <input
                type="range"
                min="0"
                max="90"
                value={cropArea.x}
                onChange={(e) => setCropArea(prev => ({ ...prev, x: parseInt(e.target.value) }))}
              />
              <span>{cropArea.x}%</span>
            </div>
            <div className="input-with-label">
              <label>Y:</label>
              <input
                type="range"
                min="0"
                max="90"
                value={cropArea.y}
                onChange={(e) => setCropArea(prev => ({ ...prev, y: parseInt(e.target.value) }))}
              />
              <span>{cropArea.y}%</span>
            </div>
          </div>
          <div className="crop-input-row">
            <div className="input-with-label">
              <label>Larghezza:</label>
              <input
                type="range"
                min="10"
                max={100 - cropArea.x}
                value={cropArea.width}
                onChange={(e) => setCropArea(prev => ({ ...prev, width: parseInt(e.target.value) }))}
              />
              <span>{cropArea.width}%</span>
            </div>
            <div className="input-with-label">
              <label>Altezza:</label>
              <input
                type="range"
                min="10"
                max={100 - cropArea.y}
                value={cropArea.height}
                onChange={(e) => setCropArea(prev => ({ ...prev, height: parseInt(e.target.value) }))}
              />
              <span>{cropArea.height}%</span>
            </div>
          </div>
        </div>
      </div>

      <button className="action-btn" onClick={handleCrop}>
        ✂️ Applica Ritaglio
      </button>
    </div>
  );
};
