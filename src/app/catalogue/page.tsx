"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import { FilterSidebar } from "@/components/catalogue/FilterSidebar";
import { SortBar } from "@/components/catalogue/SortBar";
import { ProductGrid } from "@/components/catalogue/ProductGrid";

export default function Catalogue() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState("");
  
  const [filters, setFilters] = useState({
    category: null as string | null,
    availableOnly: false,
    brands: [] as string[],
    priceRange: [0, 2000] as [number, number],
    sensorFormat: [] as string[]
  });

  // Derived state: counts
  const counts = useMemo(() => {
    const acc: Record<string, number> = { all: products.length };
    products.forEach(p => {
      acc[p.category] = (acc[p.category] || 0) + 1;
    });
    return acc;
  }, []);

  // Filter and sort logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (searchQuery && !p.model.toLowerCase().includes(searchQuery.toLowerCase()) && !p.brand.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (filters.category && filters.category !== 'all' && p.category !== filters.category) return false;
      if (filters.availableOnly && !p.available) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false;
      if (p.pricePerDay < filters.priceRange[0] || p.pricePerDay > filters.priceRange[1]) return false;
      if (filters.sensorFormat.length > 0 && (!p.sensorFormat || !filters.sensorFormat.includes(p.sensorFormat))) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'price_desc') return b.pricePerDay - a.pricePerDay;
      if (sortBy === 'new') return (b.badge === 'NOUVEAU' ? 1 : 0) - (a.badge === 'NOUVEAU' ? 1 : 0);
      if (sortBy === 'availability') return (b.available ? 1 : 0) - (a.available ? 1 : 0);
      return 0; // relevance
    });
  }, [filters, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#F4F4F0] border-b border-[#111]">
        <Link href="/" className="hover:opacity-50 transition-opacity flex items-center">
          <img src="/assets/logo/logo.png" alt="Vision Adéquate" className="h-16 md:h-20 w-auto object-contain invert" />
        </Link>
        
        <div className="flex-1 max-w-md mx-8 relative group hidden md:block">
          <input 
            type="search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="RECHERCHE..." 
            className="w-full bg-transparent border-b border-[#111] py-2 px-0 text-[11px] font-bold tracking-[0.2em] uppercase text-[#111] placeholder:text-[#888] focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <nav className="flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase">
          <Link href="/catalogue" className="text-[#111] hover:opacity-50 transition-opacity">Inventaire</Link>
          <Link href="/devis" className="hover:opacity-50 transition-opacity">Devis</Link>
        </nav>
      </header>

      <main className="pt-[112px] md:pt-[128px] flex flex-col md:flex-row min-h-screen">
        {/* SIDEBAR */}
        <div className="w-full md:w-[320px] shrink-0 border-r border-[#111] bg-[#F4F4F0]">
          <FilterSidebar filters={filters} setFilters={setFilters} counts={counts} />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F4F4F0]">
          <div className="border-b border-[#111] px-6 md:px-12">
            <SortBar 
              count={filteredProducts.length} 
              viewMode={viewMode} 
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
          <div className="p-6 md:p-12">
            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          </div>
        </div>
      </main>
    </div>
  );
}
