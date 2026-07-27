"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const BASE = "/assets/RYN/Portfolio";
const BASE_AUTO = "/assets/Porfolio ";

const GALLERY: { group: string; folder: string; files: string[]; base?: string }[] = [
  {
    group: "Mariage de A & M",
    folder: "Mariage de A & M",
    files: ["B1.jpg", "B2.jpg", "B3.jpg", "B4.jpg", "B5.jpg"],
  },
  {
    group: "Mariage de B & D",
    folder: "Mariage de B & D",
    files: ["C1.jpg", "C2.jpg", "C3.jpg", "C4.jpg"],
  },
  {
    group: "Mariage de C & A",
    folder: "Mariage de C & A",
    files: [
      "Amir&Chaïma-007.jpg",
      "Amir&Chaïma-013.jpg",
      "Amir&Chaïma-078.jpg",
      "Amir&Chaïma-142.jpg",
      "Amir&Chaïma-164.jpg",
      "Amir&Chaïma-178.jpg",
      "Amir&Chaïma-179.jpg",
      "Amir&Chaïma-264.jpg",
    ],
  },
  {
    group: "Mariage de F & R",
    folder: "Mariage de F & R",
    files: ["A1jpg.jpg", "A2.jpg", "A3.jpg", "A4.jpg"],
  },
  {
    group: "Mariage de S & C",
    folder: "Mariage de S & C",
    files: [
      "A-9.jpg",
      "A-98.jpg",
      "A-107.jpg",
      "A-120.jpg",
      "A-127.jpg",
      "Sara&Chris-018.jpg",
      "Sara&Chris-093.jpg",
      "Sara&Chris-125.jpg",
      "Sara&Chris-166.jpg",
      "Sara&Chris-197.jpg",
    ],
  },
  {
    group: "Akenzo",
    folder: "AKENZO",
    files: [
      "Akenzo P.1-34.jpg",
      "Akenzo P.2-25.jpg",
      "Akenzo P.2-28.jpg",
      "Akenzo P.3-17.jpg",
      "Akenzo P.3-28.jpg",
      "Akenzo P.3-36.jpg",
      "Akenzo P.4-22.jpg",
    ],
  },
  {
    group: "Charlito",
    folder: "CHARLITO",
    files: [
      "Charlito_R2-066.jpg",
      "Charlito_R2-101.jpg",
      "Charlito_R3-03.jpg",
      "Charlito_R3-07.jpg",
      "Charlito_R3-08.jpg",
      "Charlito_R3-10.jpg",
    ],
  },
  {
    group: "Classe G Brabus",
    folder: "CLASSE G BRABUS",
    base: BASE_AUTO,
    files: [
      "ELITE AUTO V1 CINEMATIQUE -04.jpg",
      "ELITE AUTO V1 CINEMATIQUE -08.jpg",
      "ELITE AUTO V1 CINEMATIQUE -14.jpg",
      "ELITE AUTO V1 CINEMATIQUE -15.jpg",
      "ELITE AUTO V1 CINEMATIQUE -16.jpg",
      "ELITE AUTO V1 CINEMATIQUE -18.jpg",
      "ELITE AUTO V1 CINEMATIQUE -20.jpg",
    ],
  },
  {
    group: "Audi R8 Spider",
    folder: "AUDI R8 SPIDER",
    base: BASE_AUTO,
    files: [
      "ELITE AUTO V1 CINEMATIQUE -32.jpg",
      "ELITE AUTO V1 CINEMATIQUE -34.jpg",
      "ELITE AUTO V1 CINEMATIQUE -38.jpg",
      "ELITE AUTO V1 CINEMATIQUE -39.jpg",
      "ELITE AUTO V1 CINEMATIQUE -42.jpg",
      "ELITE AUTO V1 CINEMATIQUE -43.jpg",
    ],
  },
];

const src = (folder: string, file: string, base: string = BASE) =>
  encodeURI(`${base}/${folder}/${file}`);

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
            const n = section.files.length;
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
                {section.files.map((file, i) => (
                  <figure
                    key={file}
                    className="group relative mb-4 md:mb-5 overflow-hidden break-inside-avoid bg-[#161616]"
                  >
                    <img
                      src={src(section.folder, file, section.base)}
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
