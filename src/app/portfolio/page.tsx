"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/ui/Header";

const GALLERY = [
  { group: "Akenzo", images: ["/assets/portfolio-opt/akenzo.webp", "/assets/portfolio-opt/akenzo-2.webp"] },
  { group: "Charlito", images: ["/assets/portfolio-opt/charlito.webp", "/assets/portfolio-opt/charlito-2.webp"] },
  { group: "Marie & Yoann", images: ["/assets/portfolio-opt/marie-yoann.webp", "/assets/portfolio-opt/marie-yoann-2.webp"] },
  { group: "Mariage A & M", images: ["/assets/portfolio-opt/mariage-am.webp", "/assets/portfolio-opt/mariage-am-2.webp"] },
  { group: "Mariage B & D", images: ["/assets/portfolio-opt/mariage-bd.webp", "/assets/portfolio-opt/mariage-bd-2.webp"] },
  { group: "Mariage C & A", images: ["/assets/portfolio-opt/mariage-ca.webp", "/assets/portfolio-opt/mariage-ca-2.webp"] },
  { group: "Mariage F & R", images: ["/assets/portfolio-opt/mariage-fr.webp", "/assets/portfolio-opt/mariage-fr-2.webp"] },
  { group: "Mariage S & C", images: ["/assets/portfolio-opt/mariage-sc.webp", "/assets/portfolio-opt/mariage-sc-2.webp"] },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-white selection:text-[#111]">
      <Header variant="default" />

      <main className="pt-[72px] md:pt-[96px]">
        {/* TOP BAR */}
        <div className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-[#333] text-[10px] font-bold uppercase tracking-widest text-[#888]">
          <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
            <ArrowLeft className="w-3 h-3" /> Retour à l&apos;accueil
          </Link>
          <span>{GALLERY.reduce((acc, g) => acc + g.images.length, 0)} clichés sélectionnés</span>
        </div>

        {/* HERO */}
        <div className="px-6 md:px-12 py-24 md:py-32 border-b border-[#333]">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Portfolio <br /> Visuel.
          </h1>
          <p className="text-sm md:text-base font-medium text-[#888] max-w-xl leading-relaxed">
            Un aperçu de nos réalisations photo & vidéo, tournées avec le matériel que nous louons chaque jour. Mariages, portraits et projets de marque.
          </p>
        </div>

        {/* GALLERY GROUPED BY PROJECT */}
        {GALLERY.map((section, gi) => (
          <div key={section.group} className="border-b border-[#333]">
            <div className="px-6 md:px-12 pt-12 md:pt-16 pb-6 flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#555] tabular-nums">{String(gi + 1).padStart(2, "0")}</span>
              <h2 className="text-lg md:text-2xl font-black tracking-tight uppercase">{section.group}</h2>
              <span className="flex-1 h-px bg-[#333]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#333] px-6 md:px-12 pb-12 md:pb-16">
              {section.images.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-[#111] overflow-hidden group">
                  <img
                    src={src}
                    alt={`${section.group} ${i + 1}`}
                    width={900}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] max-w-lg">
            Envie d&apos;un rendu similaire ?
          </h2>
          <Link href="/devis" className="group flex items-center justify-center gap-3 bg-white text-[#111] px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shrink-0">
            Démarrer un devis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-12 border-t border-[#333] flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-[#555]">
        <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
        <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
      </footer>
    </div>
  );
}
