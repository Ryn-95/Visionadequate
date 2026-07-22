"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/ui/Header";

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      <Header variant="default" />

      <main className="pt-[72px] md:pt-[96px]">
        {/* TOP BAR */}
        <div className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-[#111] text-[10px] font-bold uppercase tracking-widest text-[#555]">
          <Link href="/" className="flex items-center gap-2 hover:text-[#111] transition-colors">
            <ArrowLeft className="w-3 h-3" /> Retour à l&apos;accueil
          </Link>
        </div>

        {/* NOUVELLE SECTION: PRESTATIONS & TARIFS - Minimalist & Unique */}
        <section className="py-24 md:py-32 bg-[#F4F4F0] text-[#111] relative overflow-hidden">

          {/* Arrière-plan décoratif */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
            <div className="absolute top-10 left-10 text-[20vw] font-black leading-none">PRICING</div>
            <div className="absolute bottom-10 right-10 text-[20vw] font-black leading-none">2026</div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

            <div className="mb-24">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-[#111]"></span>
                  <span className="text-[10px] font-bold text-[#111] uppercase tracking-[0.3em]">Investissement</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6 max-w-2xl">
                  Grille tarifaire prestation photo et vidéo.
                </h1>
                <p className="text-[#555] text-base md:text-lg font-medium leading-relaxed max-w-xl">
                  Transparence absolue sur nos prestations. Conçue pour les productions d&apos;excellence, sans compromis sur la qualité.
                </p>
              </div>
            </div>

            {/* Layout en maçonnerie asymétrique */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

              {/* Colonne 1: Standard (Prend 5 colonnes sur 12) */}
              <div className="md:col-span-5 space-y-12">

                {/* Block Photo */}
                <div className="bg-white border border-[#111] p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 bg-[#111] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">Standard</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Photographie</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-[#EEE] pb-4">
                      <span className="text-sm font-medium">Session 2H</span>
                      <span className="text-2xl font-black">120€</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[#EEE] pb-4">
                      <span className="text-sm font-medium">Session 4H</span>
                      <span className="text-2xl font-black">240€</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[#EEE] pb-4">
                      <span className="text-sm font-medium">Session 8H</span>
                      <span className="text-2xl font-black">480€</span>
                    </div>
                    <div className="flex justify-between items-end pt-2 text-[#666]">
                      <span className="text-sm font-medium">Retouche Post-prod</span>
                      <span className="text-lg font-bold">200€<span className="text-xs font-normal">/jour</span></span>
                    </div>
                  </div>
                </div>

                {/* Block Vidéo */}
                <div className="bg-[#111] text-white border border-[#111] p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 bg-white text-[#111] text-[9px] font-bold uppercase tracking-widest px-3 py-1">Standard</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Vidéographie</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-[#333] pb-4">
                      <span className="text-sm font-medium text-[#CCC]">Session 2H</span>
                      <span className="text-2xl font-black">150€</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[#333] pb-4">
                      <span className="text-sm font-medium text-[#CCC]">Session 4H</span>
                      <span className="text-2xl font-black">300€</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-[#333] pb-4">
                      <span className="text-sm font-medium text-[#CCC]">Session 8H</span>
                      <span className="text-2xl font-black">600€</span>
                    </div>
                    <div className="flex justify-between items-end pt-2 text-[#888]">
                      <span className="text-sm font-medium">Montage & Colorimétrie</span>
                      <span className="text-lg font-bold text-white">400€<span className="text-xs font-normal text-[#888]">/jour</span></span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Colonne 2: Mariage & Extras (Prend 7 colonnes sur 12) */}
              <div className="md:col-span-7 space-y-12">

                {/* Block Mariage Premium (Gros block) */}
                <div className="bg-white border border-[#111] p-8 md:p-12 relative">
                  <div className="absolute top-8 right-8 w-16 h-16 border border-[#111] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#111] rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Mariage</h3>
                  <p className="text-[#666] text-sm mb-10 font-medium">L&apos;expérience complète : Photo & Vidéo simultanées.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="border border-[#111] p-6 hover:bg-[#111] hover:text-white transition-colors group cursor-default">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-4 group-hover:text-[#888]">Pack 4H</div>
                      <div className="text-3xl font-black mb-2">1200€</div>
                      <div className="text-xs font-medium text-[#666] group-hover:text-[#CCC]">Couverture essentielle</div>
                    </div>
                    <div className="border border-[#111] bg-[#111] text-white p-6 relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#111] text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-[#111]">Populaire</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-[#888]">Pack 8H</div>
                      <div className="text-3xl font-black mb-2">1700€</div>
                      <div className="text-xs font-medium text-[#CCC]">Couverture optimale</div>
                    </div>
                    <div className="border border-[#111] p-6 hover:bg-[#111] hover:text-white transition-colors group cursor-default">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-4 group-hover:text-[#888]">Pack 12H</div>
                      <div className="text-3xl font-black mb-2">2820€</div>
                      <div className="text-xs font-medium text-[#666] group-hover:text-[#CCC]">Couverture totale</div>
                    </div>
                  </div>
                </div>

                {/* Grid interne pour les autres prestations Mariage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">

                  {/* Photo Seule Mariage */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Mariage : Photo Seule</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prestation 4H</span> <span className="font-black text-lg text-[#111]">500€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prestation 8H</span> <span className="font-black text-lg text-[#111]">700€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prestation 12H</span> <span className="font-black text-lg text-[#111]">1120€</span></li>
                    </ul>
                  </div>

                  {/* Vidéo Seule Mariage */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Mariage : Vidéo Seule</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prestation 4H</span> <span className="font-black text-lg text-[#111]">700€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prestation 8H</span> <span className="font-black text-lg text-[#111]">1000€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prestation 12H</span> <span className="font-black text-lg text-[#111]">1700€</span></li>
                    </ul>
                  </div>

                  {/* Création de contenu Mariage */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Création Contenu (UGC)</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Format 4H</span> <span className="font-black text-lg text-[#111]">140€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Format 8H</span> <span className="font-black text-lg text-[#111]">280€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Format 12H</span> <span className="font-black text-lg text-[#111]">420€</span></li>
                    </ul>
                  </div>

                  {/* Extras */}
                  <div className="space-y-6 bg-[#EBEBE6] p-6 border border-[#111]">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Services Additionnels</h4>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Prise Drone</span> <span className="font-black text-lg text-[#111]">150€</span></li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-[#111] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] max-w-lg">
                Un projet en tête ?
              </h2>
              <Link href="/devis" className="group flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors shrink-0">
                Démarrer un devis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] text-[#F4F4F0] px-6 md:px-12 py-12 border-t border-[#333] flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
        <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
        <Link href="/" className="text-[#555] hover:text-white transition-colors">Accueil</Link>
      </footer>
    </div>
  );
}
