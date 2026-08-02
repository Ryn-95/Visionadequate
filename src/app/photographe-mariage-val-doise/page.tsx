import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  AREAS_SERVED,
  SITE_LOCALITY,
  SITE_POSTAL_CODE,
  breadcrumbJsonLd,
  url,
} from "@/lib/seo";

/*
  Page locale dédiée. Le SERP de « photographe mariage 95 » (110 rech./mois,
  difficulté 7, CPC 3,25€) est occupé exclusivement par des pages de ce type
  (/photographe-mariage-val-d-oise/) : une section sur la page d'accueil ne
  suffit pas à se positionner. Couvre aussi « photographe val d'oise » (70),
  « photographe mariage val d'oise » (30) et « photographe mariage cergy ».

  Le contenu s'appuie uniquement sur des éléments réels : les cinq mariages
  du portfolio, la grille tarifaire publiée et le parc matériel de l'agence.
*/

const TITLE = "Photographe de mariage en Val-d'Oise (95)";
const DESCRIPTION =
  "Photographe et vidéaste de mariage en Val-d'Oise : Sarcelles, Cergy, Argenteuil, Villiers-le-Bel et toute l'Île-de-France. Tarifs affichés dès 500€, matériel professionnel doublé. Basés à Garges-lès-Gonesse (95140).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/photographe-mariage-val-doise" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/photographe-mariage-val-doise",
    type: "website",
  },
};

const PORTFOLIO = "/assets/RYN/Portfolio";

/** Une image par mariage réellement photographié, pour montrer la variété. */
const SHOTS = [
  { src: `${PORTFOLIO}/Mariage de C & A/Amir&Chaïma-013.jpg`, alt: "Mariage en Val-d'Oise photographié par Vision Adéquate — cérémonie" },
  { src: `${PORTFOLIO}/Mariage de S & C/Sara&Chris-093.jpg`, alt: "Photographe de mariage en Île-de-France — portrait des mariés" },
  { src: `${PORTFOLIO}/Mariage de A & M/B2.jpg`, alt: "Reportage de mariage en Val-d'Oise — moment de réception" },
  { src: `${PORTFOLIO}/Mariage de B & D/C2.jpg`, alt: "Photographe mariage 95 — couple de mariés en extérieur" },
  { src: `${PORTFOLIO}/Mariage de F & R/A2.jpg`, alt: "Vidéaste et photographe de mariage à Sarcelles et alentours" },
  { src: `${PORTFOLIO}/Mariage de C & A/Amir&Chaïma-164.jpg`, alt: "Détails de mariage capturés en Val-d'Oise" },
];

/** Grille réelle, reprise de /tarifs. */
const FORMULES = [
  { nom: "Photo seule", prix: "500€", detail: "4 h de couverture · 700€ pour 8 h · 1 120€ pour 12 h" },
  { nom: "Vidéo seule", prix: "700€", detail: "4 h de couverture · 1 000€ pour 8 h · 1 700€ pour 12 h" },
  { nom: "Photo + vidéo", prix: "1 200€", detail: "4 h en équipe · 1 700€ pour 8 h · 2 820€ pour 12 h" },
];

const VILLES = [
  "Garges-lès-Gonesse",
  "Sarcelles",
  "Villiers-le-Bel",
  "Cergy",
  "Argenteuil",
  "Enghien-les-Bains",
  "Montmorency",
  "Paris",
];

export default function PhotographeMariageValDoise() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Photographe de mariage en Val-d'Oise", path: "/photographe-mariage-val-doise" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Photographe et vidéaste de mariage en Val-d'Oise",
            serviceType: "Photographie et vidéo de mariage",
            provider: { "@id": url("/#business") },
            areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
            url: url("/photographe-mariage-val-doise"),
            offers: {
              "@type": "Offer",
              price: 500,
              priceCurrency: "EUR",
              url: url("/tarifs"),
              description: "Reportage photo de mariage, 4 heures de couverture",
            },
          },
        ]}
      />
      <Header variant="default" />

      <main className="pt-[72px] md:pt-[96px]">
        {/* HERO */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-b border-[#111]">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#111]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Val-d&apos;Oise · {SITE_POSTAL_CODE} {SITE_LOCALITY}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 max-w-4xl">
              Photographe de mariage en Val-d&apos;Oise.
            </h1>
            <p className="text-base md:text-lg font-medium text-[#555] leading-relaxed max-w-2xl mb-10">
              Nous photographions et filmons des mariages dans le 95 et partout
              en Île-de-France. Basés à Garges-lès-Gonesse, nous intervenons à
              Sarcelles, Cergy, Argenteuil, Villiers-le-Bel et à Paris. Les
              tarifs sont affichés publiquement, sans devis préalable pour
              connaître le prix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tarifs"
                className="group inline-flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors"
              >
                Voir les tarifs mariage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 border border-[#111] px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#111] hover:text-white transition-colors"
              >
                Voir les mariages
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO LOCAL */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-b border-[#111]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
              Des mariages entiers, pas trois belles photos.
            </h2>
            <p className="text-sm md:text-base font-medium text-[#555] leading-relaxed max-w-2xl mb-12">
              Un portfolio se juge sur la régularité d&apos;une journée
              complète, du préparatif à la soirée — pas sur une sélection
              d&apos;images isolées. Voici un aperçu ; les reportages complets
              sont sur la page portfolio.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {SHOTS.map((shot) => (
                <div key={shot.src} className="overflow-hidden bg-[#EBEBE6]">
                  <img
                    src={encodeURI(shot.src)}
                    alt={shot.alt}
                    loading="eager"
                    decoding="async"
                    className="block w-full h-full object-cover aspect-[4/5] hover:scale-[1.03] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-10 text-xs font-bold uppercase tracking-widest border-b-2 border-[#111] pb-1 hover:opacity-50 transition-opacity"
            >
              Voir tous les reportages <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* TARIFS */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-b border-[#111] bg-[#EBEBE6]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-12">
              Combien coûte un mariage&nbsp;?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#111]">
              {FORMULES.map((f) => (
                <div key={f.nom} className="border-r border-b border-[#111] bg-white p-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#666] mb-4">
                    {f.nom}
                  </div>
                  <div className="text-4xl font-black tracking-tighter mb-3">
                    dès {f.prix}
                  </div>
                  <p className="text-xs font-medium text-[#555] leading-relaxed">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-[#555] leading-relaxed max-w-2xl mt-8">
              Prise de vue par drone en supplément à 150€. La grille complète —
              sessions photo, vidéo, contenu UGC et services additionnels — est
              détaillée sur la{" "}
              <Link href="/tarifs" className="text-[#111] font-bold border-b border-[#111] hover:opacity-60 transition-opacity">
                page tarifs
              </Link>
              .
            </p>
          </div>
        </section>

        {/* DIFFÉRENCIATEUR MATÉRIEL */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-b border-[#111]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                Nous sommes aussi loueur de matériel.
              </h2>
              <p className="text-sm md:text-base font-medium text-[#555] leading-relaxed mb-6">
                C&apos;est notre particularité : Vision Adéquate loue du
                matériel cinéma et photo à d&apos;autres professionnels. Le
                parc que nous entretenons au quotidien — Sony FX3, A7S III,
                A7IV, optiques G Master, stabilisateurs DJI, drones — est celui
                avec lequel nous filmons votre mariage.
              </p>
              <p className="text-sm md:text-base font-medium text-[#555] leading-relaxed">
                Concrètement : chaque boîtier est contrôlé, nettoyé et testé
                avant de partir, les batteries sont chargées et nous avons du
                matériel de remplacement sur place. Un mariage ne se rejoue pas
                — une panne d&apos;appareil n&apos;est pas une option.
              </p>
              <Link
                href="/catalogue"
                className="inline-flex items-center gap-2 mt-8 text-xs font-bold uppercase tracking-widest border-b-2 border-[#111] pb-1 hover:opacity-50 transition-opacity"
              >
                Voir notre parc matériel <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                Où nous intervenons.
              </h2>
              <p className="text-sm md:text-base font-medium text-[#555] leading-relaxed mb-8">
                Basés au {SITE_POSTAL_CODE} {SITE_LOCALITY}, nous couvrons tout
                le Val-d&apos;Oise et la région parisienne :
              </p>
              <ul className="flex flex-wrap gap-2">
                {VILLES.map((v) => (
                  <li
                    key={v}
                    className="border border-[#111] px-4 py-2 text-[11px] font-bold uppercase tracking-widest"
                  >
                    {v}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium text-[#666] leading-relaxed mt-6">
                Votre mariage a lieu ailleurs&nbsp;? Indiquez-nous le lieu dans
                votre demande, nous nous déplaçons au-delà de l&apos;Île-de-France.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-[#111] text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Parlons de<br />votre mariage.
              </h2>
              <p className="text-sm font-medium text-white/60 max-w-md leading-relaxed">
                Dites-nous la date et le lieu, nous vous répondons avec les
                disponibilités et un devis clair.
              </p>
            </div>
            <Link
              href="/tarifs#demande-devis"
              className="group inline-flex items-center justify-center gap-3 bg-white text-[#111] px-9 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/80 transition-colors shrink-0"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
