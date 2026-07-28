"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const BASE = "/assets/portfolio-web";

// Images optimisées pour le web (1600px, WebP) — générées depuis les originaux
const GALLERY: { group: string; folder: string; count: number }[] = [
  { group: "Mariage de A & M", folder: "mariage-am", count: 5 },
  { group: "Mariage de B & D", folder: "mariage-bd", count: 4 },
  { group: "Mariage de C & A", folder: "mariage-ca", count: 8 },
  { group: "Mariage de F & R", folder: "mariage-fr", count: 4 },
  { group: "Mariage de S & C", folder: "mariage-sc", count: 10 },
  { group: "Akenzo", folder: "akenzo", count: 7 },
  { group: "Charlito", folder: "charlito", count: 6 },
  { group: "Classe G Brabus", folder: "classe-g-brabus", count: 7 },
  { group: "Audi R8 Spider", folder: "audi-r8-spider", count: 6 },
];

const src = (folder: string, index: number) => `${BASE}/${folder}/${index + 1}.webp`;

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-[#0A0A0A]">
      <Header variant="default" />

      <main>
        {/* MASTHEAD — éditorial, remonté en haut */}
        <header className="px-6 md:px-12 pt-[84px] md:pt-[104px] pb-14 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#888] hover:text-white transition-colors mb-9 md:mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Retour à l&apos;accueil
          </Link>

          {/* Ligne méta */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 md:pb-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#888]">
            <span>Sélection visuelle</span>
            <span className="hidden sm:inline">Mariages &amp; Événements</span>
            <span>09 — Projets</span>
          </div>

          {/* Wordmark géant + accroche */}
          <div className="mt-8 md:mt-12">
            <h1 className="font-black uppercase leading-[0.82] tracking-tighter text-white text-[17vw] md:text-[14vw] lg:text-[12vw]">
              Portfolio.
            </h1>
            <p className="mt-6 md:mt-8 md:ml-auto text-[#999] font-medium text-sm md:text-base leading-relaxed max-w-md md:text-right">
              Nos histoires en images — photo &amp; vidéo, capturées avec le
              matériel que nous louons chaque jour.
            </p>
          </div>
        </header>

        {/* GALLERIES */}
        <div className="pt-6 md:pt-10 pb-28 md:pb-40">
          {GALLERY.map((section) => {
            const n = section.count;
            const colClass =
              n <= 2
                ? "columns-1"
                : n <= 4
                ? "columns-1 sm:columns-2"
                : "columns-1 sm:columns-2 lg:columns-3";
            const widthClass = n <= 2 ? "max-w-3xl" : n <= 4 ? "max-w-5xl" : "max-w-[1440px]";
            return (
            <section
              key={section.group}
              className={`${widthClass} mx-auto px-4 sm:px-6 md:px-10 mb-24 md:mb-40`}
            >
              {/* Titre centré, serif, lettrage large */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-black uppercase text-3xl md:text-5xl tracking-tighter text-white leading-none">
                  {section.group}
                </h2>
              </div>

              {/* Mosaïque équilibrée — toutes les photos du dossier */}
              <div className={`${colClass} gap-4 md:gap-5 [column-fill:_balance]`}>
                {Array.from({ length: section.count }, (_, i) => (
                  <figure
                    key={i}
                    className="group relative mb-4 md:mb-5 overflow-hidden break-inside-avoid bg-[#161616]"
                  >
                    <img
                      src={src(section.folder, i)}
                      alt={`${section.group} — ${i + 1}`}
                      loading="eager"
                      decoding="async"
                      className="block w-full h-auto object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                    />
                  </figure>
                ))}
              </div>
            </section>
            );
          })}
        </div>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-24 md:py-36 text-center">
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#888] mb-6">
            Votre projet
          </p>
          <h2 className="font-black uppercase text-4xl md:text-6xl tracking-tighter text-white leading-[0.9] max-w-2xl mx-auto">
            Envie d&apos;un rendu similaire&nbsp;?
          </h2>
          <Link
            href="/devis"
            className="inline-flex items-center gap-3 mt-11 border border-white px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-white hover:bg-white hover:text-[#0A0A0A] transition-colors"
          >
            Démarrer un devis
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
