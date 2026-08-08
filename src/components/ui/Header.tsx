"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const LINKS = [
  { href: "/catalogue", label: "Locations" },
  { href: "/tarifs", label: "Prestations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/devis", label: "Devis" },
];

const LOGO = "/assets/RYN/LOGO NOIR ,BLANC, ROUGE/58959_VISION ADEQUATE_AK-01.png";

export function Header({ variant = 'default' }: { variant?: 'default' | 'transparent' }) {
  const { items } = useCart();
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Referme le menu quand on change de page.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Empêche le défilement de l'arrière-plan quand le menu est ouvert.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /*
    En variante transparente (accueil), le header n'a pas de fond : sur mobile
    les titres de section passaient derrière la nav. On pose donc un fond dès
    que la page défile, tout en gardant le hero épuré en haut de page.
  */
  useEffect(() => {
    if (variant !== 'transparent') return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const solid = variant === 'default' || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 h-[72px] md:h-[96px] px-4 md:px-6 flex justify-between items-center text-[#111] transition-colors duration-300 ${
          solid
            ? 'bg-[#F4F4F0]/90 backdrop-blur-md border-b border-[#111]/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Link href="/" className="hover:opacity-50 transition-opacity shrink-0" aria-label="Vision Adéquate — accueil">
          <img
            src={LOGO}
            alt="Vision Adéquate"
            className="h-9 md:h-12 w-auto object-contain brightness-0"
          />
        </Link>

        {/* Navigation complète — à partir de md uniquement */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-[0.15em] uppercase">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-50 transition-opacity flex items-center gap-2"
            >
              {link.label}
              {link.href === "/devis" && itemCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 bg-emerald-600 text-white rounded-full text-[9px] font-mono leading-none">
                  {itemCount}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Bouton burger — mobile uniquement */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          className="md:hidden relative -mr-2 w-12 h-12 flex items-center justify-center text-[#111]"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          {itemCount > 0 && !menuOpen && (
            <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-emerald-600 text-white rounded-full text-[10px] font-mono leading-none">
              {itemCount}
            </span>
          )}
        </button>
      </header>

      {/* Panneau de navigation mobile */}
      {/*
        On pilote l'affichage par la classe et non par l'attribut `hidden` :
        la classe `flex` de Tailwind l'emporterait sur le `display:none` du
        navigateur et le panneau resterait visible.
      */}
      <div
        id="menu-mobile"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-40 bg-[#F4F4F0] pt-[72px] flex-col ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        <nav className="flex flex-col px-6 pt-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-5 border-b border-[#111]/10 flex items-center justify-between text-3xl font-black uppercase tracking-tighter text-[#111] active:opacity-50 transition-opacity"
            >
              {link.label}
              {link.href === "/devis" && itemCount > 0 && (
                <span className="flex items-center justify-center min-w-7 h-7 px-2 bg-emerald-600 text-white rounded-full text-xs font-mono leading-none">
                  {itemCount}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888]">
          <a href="mailto:contact.visionadequate@gmail.com" className="block py-3">
            contact.visionadequate@gmail.com
          </a>
          <p className="py-1">95140 Garges-lès-Gonesse</p>
        </div>
      </div>
    </>
  );
}
