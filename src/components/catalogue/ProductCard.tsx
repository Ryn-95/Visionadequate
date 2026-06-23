"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { TagBadge } from "./TagBadge";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  
  const isGrid = viewMode === 'grid';
  
  return (
    <Link href={`/catalogue/${product.id}`} className="group flex flex-col border-r border-b border-[#111] bg-[#F4F4F0] hover:bg-[#EBEBE6] transition-colors duration-300 h-full">
      {/* Zone Image */}
      <div className="relative aspect-[4/3] p-12 flex items-center justify-center overflow-hidden border-b border-[#111]">
        {product.badge && (
          <div className="absolute top-4 left-4 border border-[#111] text-[#111] px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
            {product.badge}
          </div>
        )}
        {!product.badge && product.available && (
          <div className="absolute top-4 left-4 border border-emerald-600 text-emerald-600 px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
            En Stock
          </div>
        )}
        <img 
          src={product.imageUrl} 
          alt={product.model} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>
      
      {/* Zone Info */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="mb-8">
          <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-2">{product.brand}</div>
          <h3 className="text-2xl font-black tracking-tight uppercase leading-none">
            {product.model}
          </h3>
        </div>
        
        <div className="flex justify-between items-end">
          <div className="flex flex-wrap gap-2">
            {product.specs.slice(0, 2).map((spec, i) => (
              <span key={i} className="text-[9px] font-mono text-[#555] uppercase tracking-widest bg-white border border-[#DDD] px-2 py-1">
                {spec}
              </span>
            ))}
          </div>
          <div className="text-right">
            <div className="font-black text-xl leading-none">{product.pricePerDay}€</div>
            <div className="text-[9px] font-bold text-[#666] uppercase tracking-widest mt-1">/ Jour</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
