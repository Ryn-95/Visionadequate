"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { gridContainer } from "@/lib/animations";

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
}

export function ProductGrid({ products, viewMode }: ProductGridProps) {
  const isGrid = viewMode === 'grid';

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-text-muted font-inter mb-6">
          Aucune référence ne correspond à votre sélection.<br/>
          Modifier les filtres ou demander un devis sur-mesure pour ce matériel.
        </p>
        <div className="flex gap-4">
          <button className="bg-transparent border border-border text-text-muted hover:text-text-secondary hover:border-border-hover px-4 py-2 rounded-[4px] text-sm font-inter transition-colors duration-200">
            Réinitialiser les filtres
          </button>
          <button className="bg-transparent border border-border text-text-secondary hover:text-text-primary hover:border-accent px-4 py-2 rounded-[4px] text-sm font-inter transition-colors duration-200">
            Demander un devis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${viewMode}-${products.map(p => p.id).join(',')}`}
          variants={gridContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#111]"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination mock */}
      {products.length >= 12 && (
        <div className="mt-32 flex flex-col items-center justify-center">
          <button className="bg-transparent border-b border-[#111] text-[#111] hover:opacity-50 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-opacity mb-6">
            Charger l&apos;inventaire complet
          </button>
          <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.2em]">
            (87 références restantes)
          </span>
        </div>
      )}
    </div>
  );
}
