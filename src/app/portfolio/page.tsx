"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/ui/Header";

const BASE = "/assets/RYN/Portfolio";

const GALLERY: { group: string; credit?: string; folder: string; files: string[] }[] = [
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
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-[#111]">
      <Header variant="default" />

      <main>
        {/* TOP BAR */}
        <div className="pt-[88px] md:pt-[112px] px-6 md:px-16 pb-6 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888] hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Retour à l&apos;accueil
          </Link>
        </div>

        {/* HERO */}
        <div className="px-6 md:px-16 pt-16 md:pt-24 pb-20 md:pb-32">
          <h1 className="text-6xl md:text-[8vw] lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.85] mb-10">
            Portfolio<br />Visuel.
          </h1>
          <p className="text-base md:text-xl font-medium text-[#999] max-w-xl leading-relaxed">
            Un aperçu de nos réalisations photo &amp; vidéo, tournées avec le matériel que nous louons chaque jour.
          </p>
        </div>

        {/* GALLERIES */}
        <div className="flex flex-col gap-28 md:gap-40 pb-32 md:pb-48">
          {GALLERY.map((section, gi) => (
            <section key={section.group} className="flex flex-col gap-8 md:gap-12">
              {/* Section heading */}
              <div className="px-6 md:px-16 flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#555] pt-1">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
                    {section.group}
                  </h2>
                  <div className="mt-3 h-px w-14 bg-white/25" />
                </div>
              </div>

              {/* Masonry mosaic — every photo in the folder */}
              <div className="px-3 md:px-16">
                <div className="[column-fill:_balance] columns-2 lg:columns-3 gap-3 md:gap-5">
                  {section.files.map((file, i) => (
                    <figure
                      key={file}
                      className="group relative mb-3 md:mb-5 overflow-hidden bg-[#161616] break-inside-avoid"
                    >
                      <img
                        src={src(section.folder, file)}
                        alt={`${section.group} — ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/15 transition-[box-shadow] duration-500" />
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 md:px-16 py-24 md:py-40 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] max-w-lg">
            Envie d&apos;un rendu similaire ?
          </h2>
          <Link href="/devis" className="group flex items-center justify-center gap-3 bg-white text-[#111] px-9 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors shrink-0">
            Démarrer un devis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-10 border-t border-white/10 flex justify-between items-center text-[10px] font-semibold tracking-widest uppercase text-[#555]">
        <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
        <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
      </footer>
    </div>
  );
}
