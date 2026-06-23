"use client";

import { useState, useRef, useEffect } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function RangeSlider({ min, max, value, onChange }: RangeSliderProps) {
  const [localValue, setLocalValue] = useState(value);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), localValue[1] - 1);
    setLocalValue([newMin, localValue[1]]);
    onChange([newMin, localValue[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), localValue[0] + 1);
    setLocalValue([localValue[0], newMax]);
    onChange([localValue[0], newMax]);
  };

  const percentMin = ((localValue[0] - min) / (max - min)) * 100;
  const percentMax = ((localValue[1] - min) / (max - min)) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <input 
            type="number" 
            min={min} 
            max={localValue[1]} 
            value={localValue[0]} 
            onChange={handleMinChange}
            className="w-full bg-surface border border-border py-1.5 px-2 text-sm font-mono text-text-primary focus:outline-none focus:border-accent transition-colors text-center"
          />
        </div>
        <span className="text-text-muted">-</span>
        <div className="relative flex-1">
          <input 
            type="number" 
            min={localValue[0]} 
            max={max} 
            value={localValue[1]} 
            onChange={handleMaxChange}
            className="w-full bg-surface border border-border py-1.5 px-2 text-sm font-mono text-text-primary focus:outline-none focus:border-accent transition-colors text-center"
          />
        </div>
      </div>

      <div className="relative h-1 bg-border rounded-full" ref={trackRef}>
        <div 
          className="absolute h-full bg-accent rounded-full"
          style={{ left: `${percentMin}%`, right: `${100 - percentMax}%` }}
        />
        
        {/* We use native range inputs layered on top for simplicity and accessibility, styled to be invisible but functional */}
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={localValue[0]} 
          onChange={handleMinChange}
          className="absolute w-full -top-1.5 h-4 opacity-0 cursor-pointer pointer-events-auto"
          style={{ zIndex: 3 }}
        />
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={localValue[1]} 
          onChange={handleMaxChange}
          className="absolute w-full -top-1.5 h-4 opacity-0 cursor-pointer pointer-events-auto"
          style={{ zIndex: 4 }}
        />

        {/* Visual thumbs */}
        <div 
          className="absolute w-3 h-3 bg-accent rounded-full -mt-1 -ml-1.5 pointer-events-none"
          style={{ left: `${percentMin}%`, zIndex: 1 }}
        />
        <div 
          className="absolute w-3 h-3 bg-accent rounded-full -mt-1 -ml-1.5 pointer-events-none"
          style={{ left: `${percentMax}%`, zIndex: 2 }}
        />
      </div>
    </div>
  );
}
