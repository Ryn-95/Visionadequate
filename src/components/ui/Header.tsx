"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header({ variant = 'default' }: { variant?: 'default' | 'transparent' }) {
  const { items } = useCart();
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <header className={`fixed top-0 w-full z-50 h-[72px] md:h-[96px] px-4 md:px-6 flex justify-between items-center text-[#111] ${variant === 'transparent' ? 'bg-transparent pointer-events-none' : 'bg-[#F4F4F0]/90 backdrop-blur-md border-b border-[#111]/10'}`}>
      <div className={`flex items-center ${variant === 'transparent' ? 'pointer-events-auto' : ''}`}>
        <Link href="/" className="hover:opacity-50 transition-opacity">
          <img src="/assets/RYN/LOGO NOIR ,BLANC, ROUGE/58959_VISION ADEQUATE_AK-01.png" alt="Vision Adéquate" className="h-9 md:h-12 w-auto object-contain brightness-0" />
        </Link>
      </div>
      <nav className={`flex items-center gap-5 md:gap-10 text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase ${variant === 'transparent' ? 'pointer-events-auto' : ''}`}>
        <Link href="/catalogue" className="hover:opacity-50 transition-opacity">Inventaire</Link>
        <Link href="/portfolio" className="hover:opacity-50 transition-opacity">Portfolio</Link>
        <Link href="/tarifs" className="hover:opacity-50 transition-opacity">Tarifs</Link>
        <Link href="/devis" className="hover:opacity-50 transition-opacity flex items-center gap-1.5 md:gap-2">
          Devis
          {itemCount > 0 && (
            <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-emerald-600 text-white rounded-full text-[8px] md:text-[9px] font-mono leading-none">
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
