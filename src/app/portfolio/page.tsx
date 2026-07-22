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
        <div className="px-6 md:px-16 pt-16 md:pt-24 pb-24 md:pb-36">
          <h1 className="text-6xl md:text-[8vw] lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.85] mb-10">
            Portfolio<br />Visuel.
          </h1>
          <p className="text-base md:text-xl font-medium text-[#999] max-w-xl leading-relaxed">
            Un aperçu de nos réalisations photo & vidéo, tournées avec le matériel que nous louons chaque jour.
          </p>
        </div>

        {/* GALLERY */}
        <div className="flex flex-col gap-32 md:gap-48 pb-32 md:pb-48">
          {GALLERY.map((section, gi) => (
            <section
              key={section.group}
              className="flex flex-col gap-6 md:gap-8"
            >
              <div className="px-6 md:px-16 flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#555]">{String(gi + 1).padStart(2, "0")}</span>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">{section.group}</h2>
              </div>

              <div className={`flex flex-col md:flex-row gap-4 md:gap-6 px-0 md:px-16 ${gi % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-[62%] aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#161616]">
                  <img
                    src={section.images[0]}
                    alt={`${section.group} 1`}
                    width={900}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="md:w-[38%] aspect-[4/3] overflow-hidden bg-[#161616]">
                  <img
                    src={section.images[1]}
                    alt={`${section.group} 2`}
                    width={900}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
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
