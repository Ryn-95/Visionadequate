"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/ui/Header";

const BASE = "/assets/RYN/Portfolio";

const GALLERY: { group: string; folder: string; files: string[] }[] = [
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
];

const src = (folder: string, file: string) => encodeURI(`${BASE}/${folder}/${file}`);

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FBFAF7] text-[#1f1f1f] font-sans selection:bg-[#1f1f1f] selection:text-[#FBFAF7]">
      <Header variant="default" />

      <main>
        {/* TOP BAR */}
        <div className="pt-[92px] md:pt-[116px] px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9a9a90] hover:text-[#1f1f1f] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Retour à l&apos;accueil
          </Link>
        </div>

        {/* HERO — épuré, centré, serif */}
        <header className="text-center px-6 pt-24 md:pt-32 pb-20 md:pb-28">
          <p className="uppercase tracking-[0.45em] text-[10px] md:text-[11px] text-[#b0aca0] mb-7">
            Nos réalisations
          </p>
          <h1 className="font-serif font-normal text-5xl md:text-7xl lg:text-[5.5rem] tracking-[0.02em] leading-[1.05] text-[#232323]">
            Portfolio
          </h1>
          <div className="mx-auto mt-9 h-px w-14 bg-[#d8d4c8]" />
          <p className="mx-auto mt-9 max-w-xl text-[15px] md:text-base text-[#7d7a70] leading-relaxed">
            Un aperçu de nos réalisations photo &amp; vidéo, capturées avec le
            matériel que nous louons chaque jour.
          </p>
        </header>

        {/* GALLERIES */}
        <div className="pb-28 md:pb-40">
          {GALLERY.map((section) => (
            <section
              key={section.group}
              className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 mb-24 md:mb-40"
            >
              {/* Titre centré, serif, lettrage large */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-serif font-normal uppercase text-2xl md:text-[2.4rem] tracking-[0.28em] md:tracking-[0.32em] text-[#2b2b2b] leading-tight">
                  {section.group}
                </h2>
              </div>

              {/* Mosaïque équilibrée — toutes les photos du dossier */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
                {section.files.map((file, i) => (
                  <figure
                    key={file}
                    className="group relative mb-4 md:mb-5 overflow-hidden break-inside-avoid bg-[#efece4]"
                  >
                    <img
                      src={src(section.folder, file)}
                      alt={`${section.group} — ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA — élégant, épuré */}
        <section className="border-t border-[#e6e1d5] px-6 py-24 md:py-36 text-center">
          <p className="uppercase tracking-[0.4em] text-[10px] text-[#b0aca0] mb-6">
            Votre projet
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-5xl tracking-[0.02em] text-[#232323] leading-tight max-w-2xl mx-auto">
            Envie d&apos;un rendu similaire&nbsp;?
          </h2>
          <Link
            href="/devis"
            className="inline-flex items-center gap-3 mt-11 border border-[#1f1f1f] px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-[#FBFAF7] transition-colors"
          >
            Démarrer un devis
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-8 border-t border-[#e6e1d5] flex flex-col sm:flex-row gap-3 justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#a8a498]">
        <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
        <Link href="/" className="hover:text-[#1f1f1f] transition-colors">
          Accueil
        </Link>
      </footer>
    </div>
  );
}
