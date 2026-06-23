"use client";

import { LayoutGrid, List } from "lucide-react";

interface SortBarProps {
  count: number;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function SortBar({ count, viewMode, onViewModeChange, sortBy, onSortChange }: SortBarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6">
      <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-4 sm:mb-0">
        Inventaire. {count} référence{count > 1 ? 's' : ''}
      </div>

      <div className="flex items-center gap-8">
        <select 
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-transparent text-[#111] text-xs font-bold uppercase tracking-widest focus:outline-none cursor-pointer"
        >
          <option value="relevance">Pertinence</option>
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
          <option value="new">Nouveautés</option>
          <option value="availability">Disponibilité</option>
        </select>
      </div>
    </div>
  );
}
