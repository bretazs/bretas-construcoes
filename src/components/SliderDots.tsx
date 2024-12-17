import React from 'react';

interface SliderDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export default function SliderDots({ total, current, onDotClick }: SliderDotsProps) {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            current === index 
              ? 'bg-white w-8' 
              : 'bg-white/50 hover:bg-white/70'
          }`}
          aria-label={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
}