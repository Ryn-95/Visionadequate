"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group select-none">
      <div 
        className={`w-3.5 h-3.5 flex items-center justify-center border transition-colors duration-150 ${
          checked 
            ? 'bg-accent border-accent' 
            : 'bg-transparent border-border group-hover:border-border-hover'
        }`}
        style={{ borderRadius: '2px' }}
      >
        <AnimatePresence>
          {checked && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Check className="w-2.5 h-2.5 text-background" strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <input 
        type="checkbox" 
        className="hidden" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
      />
      <span className={`text-sm transition-colors ${checked ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
        {label}
      </span>
    </label>
  );
}
