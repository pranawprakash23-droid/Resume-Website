import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Minus, Plus, Image as ImageIcon } from 'lucide-react';

interface ImageCropperProps {
  imageSrc: string;
  onCancel: () => void;
  onCrop: (croppedImage: string) => void;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCancel, onCrop }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const CROP_SIZE = 280;

  // Handle Dragging
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Generate Cropped Image
  const handleSave = () => {
    if (!imageRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Output resolution (high quality)
    const size = 512; 
    canvas.width = size;
    canvas.height = size;

    // Calculate drawing params
    // The visual crop area is CROP_SIZE (280px).
    // The image is visually scaled by 'zoom'.
    // The center of the crop area is (CROP_SIZE/2, CROP_SIZE/2) relative to container center.
    // Actually, let's keep it simple: Map visual pixels to canvas pixels.
    
    // Scale factor from visual crop size to output canvas size
    const outputScale = size / CROP_SIZE;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, size, size);
    
    // Circular Clip
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();

    const img = imageRef.current;
    
    // Calculate drawn image dimensions based on zoom
    // Natural width * zoom is not enough, we need to account for how it's rendered in DOM.
    // But since we control the render, let's assume natural dimensions logic scaled by our zoom factor relative to the crop window.
    // Let's rely on the visual ratio.
    
    // Center of canvas
    const cx = size / 2;
    const cy = size / 2;

    // The position {x,y} is the offset of the image center from the crop center in visual pixels.
    // We multiply by outputScale to get offset in canvas pixels.
    const offsetX = position.x * outputScale;
    const offsetY = position.y * outputScale;

    // Rendered width/height on canvas
    // We map 100% zoom to "image fits width or height" usually, but here zoom=1 is natural scale? 
    // Let's say zoom 1 = image.width.
    // We need to match the visual representation.
    // Visually: <img style={{ transform: `translate(...) scale(${zoom})` }} />
    // The image is centered then translated.
    
    // Let's use the aspect ratio.
    const ratio = img.naturalWidth / img.naturalHeight;
    
    // Base size in canvas pixels (before zoom)
    // If we want consistent zoom behavior, let's say base size matches canvas cover.
    let drawWidth, drawHeight;
    if (ratio > 1) {
        drawHeight = size;
        drawWidth = size * ratio;
    } else {
        drawWidth = size;
        drawHeight = size / ratio;
    }

    drawWidth *= zoom;
    drawHeight *= zoom;

    ctx.drawImage(
        img,
        cx + offsetX - drawWidth / 2,
        cy + offsetY - drawHeight / 2,
        drawWidth,
        drawHeight
    );

    onCrop(canvas.toDataURL('image/png', 1.0));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
    >
      <div className="w-full max-w-md bg-charcoal border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
          <h3 className="text-white font-medium flex items-center gap-2">
            <ImageIcon size={18} className="text-neon-purple" />
            Edit Profile Picture
          </h3>
          <button onClick={onCancel} className="text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Crop Area */}
        <div 
            className="relative h-[400px] w-full bg-obsidian overflow-hidden cursor-move touch-none flex items-center justify-center"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
          {/* Image Layer */}
          <div 
             className="absolute flex items-center justify-center pointer-events-none"
             style={{ 
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
             }}
          >
             <img 
               ref={imageRef}
               src={imageSrc} 
               alt="Crop target" 
               className="max-w-none pointer-events-none select-none"
               style={{ 
                   // Initial fit logic handled by CSS not ideal for canvas mapping, 
                   // but let's constrain max-height to ensure it starts reasonable
                   height: CROP_SIZE, 
                   width: 'auto'
               }}
               draggable={false}
             />
          </div>

          {/* Dark Overlay with Circular Cutout */}
          <div className="absolute inset-0 pointer-events-none z-10">
              <svg width="100%" height="100%">
                <defs>
                  <mask id="hole">
                    <rect width="100%" height="100%" fill="white" />
                    <circle cx="50%" cy="50%" r={CROP_SIZE / 2} fill="black" />
                  </mask>
                </defs>
                <rect width="100%" height="100%" fill="rgba(0,0,0,0.7)" mask="url(#hole)" />
                {/* Guide Ring */}
                <circle cx="50%" cy="50%" r={CROP_SIZE / 2} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
          </div>
          
          <div className="absolute bottom-4 text-xs text-white/40 font-mono z-20 pointer-events-none">
             DRAG TO REPOSITION
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 bg-charcoal space-y-6">
          <div className="flex items-center gap-4">
             <Minus size={16} className="text-white/50" />
             <input 
               type="range" 
               min="1" 
               max="3" 
               step="0.01" 
               value={zoom} 
               onChange={(e) => setZoom(parseFloat(e.target.value))}
               className="flex-grow h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neon-purple"
             />
             <Plus size={16} className="text-white/50" />
          </div>

          <div className="flex gap-3">
             <button 
               onClick={onCancel}
               className="flex-1 py-3 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 transition-colors font-medium text-sm"
             >
               Cancel
             </button>
             <button 
               onClick={handleSave}
               className="flex-1 py-3 rounded-lg bg-neon-purple hover:bg-neon-glow text-white font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all flex items-center justify-center gap-2"
             >
               <Check size={16} /> Set Profile
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};