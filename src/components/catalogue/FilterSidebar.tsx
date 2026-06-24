"use client";

import { FilterAccordion } from "./FilterAccordion";
import { RangeSlider } from "./RangeSlider";
import { Checkbox } from "@/components/ui/Checkbox";
import { Toggle } from "@/components/ui/Toggle";
import { Video, Aperture, Lightbulb, Move, Mic, Plane, Monitor, Wrench, Package } from "lucide-react";

interface FilterSidebarProps {
  filters: any;
  setFilters: (filters: any) => void;
  counts: Record<string, number>;
}

export function FilterSidebar({ filters, setFilters, counts }: FilterSidebarProps) {

  const handleCategoryChange = (cat: string) => {
    setFilters({ ...filters, category: cat === filters.category ? null : cat });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...filters.brands, brand]
      : filters.brands.filter((b: string) => b !== brand);
    setFilters({ ...filters, brands: newBrands });
  };

  const resetFilters = () => {
    setFilters({
      category: null,
      availableOnly: false,
      brands: [],
      priceRange: [0, 2000],
      sensorFormat: []
    });
  };

  return (
    <aside className="w-full md:sticky md:top-[128px] md:h-[calc(100vh-128px)] overflow-y-auto hide-scrollbar flex flex-col">
      
      {/* 1. CATÉGORIES */}
      <div className="border-b border-[#111] p-8">
        <h3 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] mb-6">Catégories</h3>
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => handleCategoryChange('all')}
            className={`flex items-center justify-between text-xs transition-colors group ${!filters.category || filters.category === 'all' ? 'text-[#111] font-bold' : 'text-[#666] hover:text-[#111] font-medium'}`}
          >
            <span className="flex items-center gap-3 uppercase tracking-widest">
              <Package className="w-4 h-4 opacity-70" /> Inventaire complet
            </span>
            <span className="text-[9px] font-mono text-[#888]">[{counts['all'] || 0}]</span>
          </button>
          
          {[
            { id: 'cameras', label: 'Caméras Cinéma', icon: Video },
            { id: 'objectifs', label: 'Objectifs', icon: Aperture },
            { id: 'eclairage', label: 'Éclairage', icon: Lightbulb },
            { id: 'stabilisation', label: 'Stabilisation', icon: Move },
            { id: 'audio', label: 'Audio', icon: Mic },
            { id: 'drones', label: 'Drones', icon: Plane },
            { id: 'moniteurs', label: 'Moniteurs', icon: Monitor },
            { id: 'accessoires', label: 'Accessoires', icon: Wrench },
          ].map(cat => (
            <button 
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center justify-between text-xs transition-colors group ${filters.category === cat.id ? 'text-[#111] font-bold' : 'text-[#666] hover:text-[#111] font-medium'}`}
            >
              <span className="flex items-center gap-3 uppercase tracking-widest">
                <cat.icon className="w-4 h-4 opacity-70" /> {cat.label}
              </span>
              <span className="text-[9px] font-mono text-[#888]">[{counts[cat.id] || 0}]</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. DISPONIBILITÉ */}
      <div className="border-b border-[#111] p-8">
        <h3 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] mb-6">Disponibilité</h3>
        <div className="space-y-6">
          <Toggle 
            checked={filters.availableOnly} 
            onChange={(c) => setFilters({...filters, availableOnly: c})} 
            label="En stock uniquement" 
          />
          <div className="pt-2">
            <input 
              type="text" 
              placeholder="DATES (EX: 12-15 NOV)" 
              className="w-full bg-transparent border-b border-[#111] py-2 text-xs font-bold uppercase tracking-widest text-[#111] focus:outline-none transition-colors placeholder:text-[#888]"
            />
          </div>
        </div>
      </div>

      {/* 3. MARQUE */}
      <div className="border-b border-[#111] p-8">
        <h3 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] mb-6">Constructeurs</h3>
        <div className="flex flex-col gap-4">
          {['Sony', 'Canon', 'DJI', 'ARRI', 'RED', 'Zeiss', 'Leica', 'Sennheiser'].map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={filters.brands.includes(brand)}
                onChange={(e) => handleBrandChange(brand, e.target.checked)}
              />
              <span className="text-xs font-medium uppercase tracking-widest text-[#555] group-hover:text-[#111] transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* RESET BUTTON */}
      <div className="p-8 mt-auto">
        <button 
          onClick={resetFilters}
          className="text-[#666] hover:text-[#111] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors w-full text-left"
        >
          [ Réinitialiser les paramètres ]
        </button>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border);
        }
      `}</style>
    </aside>
  );
}
