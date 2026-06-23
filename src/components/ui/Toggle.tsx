"use client";

import { motion } from "framer-motion";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <div 
          className={`w-9 h-5 rounded-full border transition-colors duration-200 ease-in-out ${
            checked ? 'bg-accent/10 border-accent' : 'bg-surface border-border group-hover:border-border-hover'
          }`}
        />
        <motion.div
          layout
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
            checked ? 'bg-accent' : 'bg-text-muted'
          }`}
          animate={{
            left: checked ? 'calc(100% - 14px)' : '4px'
          }}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "easeOut"
          }}
        />
      </div>
      {label && (
        <span className={`text-sm transition-colors ${checked ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
          {label}
        </span>
      )}
    </label>
  );
}
