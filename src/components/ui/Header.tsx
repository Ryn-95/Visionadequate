"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header({ variant = 'default' }: { variant?: 'default' | 'transparent' }) {
  const { items } = useCart();
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <header className={`fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center ${variant === 'transparent' ? 'bg-transparent text-[#111] pointer-events-none' : 'bg-[#F4F4F0] border-b border-[#111]'}`}>
      <div className={`flex items-center ${variant === 'transparent' ? 'pointer-events-auto' : ''}`}>
        <Link href="/" className="hover:opacity-50 transition-opacity">
          <img src="/assets/logo/logo.png" alt="Vision Adéquate" className="h-8 md:h-12 w-auto object-contain invert" />
        </Link>
      </div>
      <nav className={`flex gap-6 md:gap-12 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase ${variant === 'transparent' ? 'pointer-events-auto' : ''}`}>
        <Link href="/catalogue" className="hover:opacity-50 transition-opacity">Inventaire</Link>
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
