"use client";

import { products } from "@/data/products";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NetflixLogo, CanalPlusLogo, ArteLogo, IconoclastLogo, ColorsLogo } from '@/components/ui/PartnerLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      {/* HEADER - Brutaliste et Minimal */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-[#111] pointer-events-none">
        <div className="pointer-events-auto flex items-center">
          <Link href="/">
            <img src="/assets/logo/logo.png" alt="Vision Adéquate" className="h-14 md:h-16 w-auto object-contain invert" />
          </Link>
        </div>
        <nav className="flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase pointer-events-auto">
          <Link href="/catalogue" className="hover:opacity-50 transition-opacity">Inventaire</Link>
          <Link href="/devis" className="hover:opacity-50 transition-opacity">Devis</Link>
        </nav>
      </header>

      <main className="pt-32">
        {/* HERO SECTION - Typographie Massive & Image Flottante */}
        <section className="px-6 md:px-12 min-h-[85vh] flex flex-col justify-between">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mt-12">
            
            {/* Texte Gauche */}
            <div className="w-full md:w-1/2 z-10 relative">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] uppercase"
              >
                La Norme <br/>
                Absolue.
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center"
              >
                <Link href="/catalogue" className="group flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors">
                  Accéder au catalogue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm font-medium text-[#555] max-w-xs leading-relaxed">
                  Location de matériel cinématographique pour les productions qui exigent la perfection technique.
                </p>
              </motion.div>
            </div>

            {/* Image Droite */}
            <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh]">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                src="/assets/materiels/9---rig.jpg" 
                alt="Rig Cinéma" 
                className="w-full h-full object-contain mix-blend-multiply scale-110 md:scale-125 origin-right"
              />
            </div>
          </div>
        </section>

        {/* MARQUEE TECHNIQUE */}
        <section className="border-y border-[#111] bg-[#111] text-[#F4F4F0] py-3 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-8 text-[10px] font-mono font-bold tracking-[0.3em] uppercase">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span>Contrôle Qualité Strict</span>
                <span className="w-1 h-1 bg-white rounded-full" />
                <span>Support Plateau 24/7</span>
                <span className="w-1 h-1 bg-white rounded-full" />
                <span>Livraison France Entière</span>
                <span className="w-1 h-1 bg-white rounded-full" />
              </div>
            ))}
          </div>
        </section>

        {/* PARTENAIRES / TRUSTED BY */}
        <section className="py-24 px-6 md:px-12 border-b border-[#111] flex flex-col md:flex-row justify-between items-center gap-12 bg-white">
          <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] whitespace-nowrap">
            Ils nous font confiance
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <NetflixLogo className="h-6 md:h-8 w-auto" />
            <CanalPlusLogo className="h-4 md:h-6 w-auto" />
            <ArteLogo className="h-6 md:h-8 w-auto" />
            <IconoclastLogo className="h-6 md:h-8 w-auto" />
            <ColorsLogo className="h-6 md:h-8 w-auto" />
          </div>
        </section>

        {/* NOUVELLE SECTION: STUDIO / MANIFESTO */}
        <section className="px-6 md:px-12 py-32 border-b border-[#111] bg-[#111] text-white">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Le <br/> Studio.
              </h2>
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-12">
                / Manifeste
              </div>
              <div className="space-y-8 text-sm md:text-base font-medium text-[#ccc] leading-relaxed max-w-lg">
                <p>
                  Nous ne sommes pas de simples loueurs. Vision Adéquate est né d'une frustration : celle de voir la logistique entraver la création.
                </p>
                <p>
                  Chaque pièce de notre inventaire est sélectionnée, testée et calibrée avec une rigueur chirurgicale. Si un équipement n'atteint pas nos standards de fiabilité, il n'est pas proposé à la location. Point.
                </p>
                <p>
                  Notre mission est simple : faire disparaître l'outil pour laisser toute la place à votre vision.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-square bg-[#222] flex items-center justify-center p-12 overflow-hidden group">
              <div className="absolute inset-0 border border-[#333] m-4 pointer-events-none z-10" />
              <img 
                src="/assets/materielsdetails/12-sony-a7siii/12-ii.webp" 
                alt="Sony A7S III Details" 
                className="w-full h-full object-contain mix-blend-screen opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </section>

        {/* NOUVELLE SECTION: SERVICES */}
        <section className="px-6 md:px-12 py-32 border-b border-[#111]">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-24 text-center">
            Infrastructure <br/> de Soutien.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#111]">
            {[
              {
                num: "01",
                title: "Laboratoire de Test",
                desc: "Accès gratuit à notre salle de préparation équipée de mires 4K pour calibrer vos optiques la veille du départ."
              },
              {
                num: "02",
                title: "Hotline Plateau",
                desc: "Un assistant opérateur disponible 24/7. Un problème matériel à 3h du matin ? Nous trouvons la solution en temps réel."
              },
              {
                num: "03",
                title: "Logistique Sécurisée",
                desc: "Livraison par coursier technique sur votre lieu de tournage en Île-de-France, dans des flight cases blindés Pelican."
              }
            ].map((service, i) => (
              <div key={i} className="p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111] hover:bg-[#EBEBE6] transition-colors group">
                <div className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.num}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-[#555] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCT GRID - Blueprint Architectural Style */}
        <section className="px-6 md:px-12 py-32 border-b border-[#111]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Sélection <br/> Technique
            </h2>
            <Link href="/catalogue" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-[#111] pb-1 hover:opacity-50 transition-opacity">
              Voir tout l'inventaire <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grille avec bordures strictes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#111]">
            {products.slice(0, 6).map((product) => (
              <Link href={`/catalogue/${product.id}`} key={product.id} className="group flex flex-col border-r border-b border-[#111] bg-[#F4F4F0] hover:bg-[#EBEBE6] transition-colors duration-300">
                
                {/* Zone Image */}
                <div className="relative aspect-[4/3] p-12 flex items-center justify-center overflow-hidden border-b border-[#111]">
                  {product.badge && (
                    <div className="absolute top-4 left-4 border border-[#111] text-[#111] px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.imageUrl} 
                    alt={product.model} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                
                {/* Zone Info */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="mb-8">
                    <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-2">{product.brand}</div>
                    <h3 className="text-2xl font-black tracking-tight uppercase leading-none">
                      {product.model}
                    </h3>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span key={i} className="text-[9px] font-mono text-[#555] uppercase tracking-widest bg-white border border-[#DDD] px-2 py-1">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="font-black text-xl leading-none">{product.pricePerDay}€</div>
                      <div className="text-[9px] font-bold text-[#666] uppercase tracking-widest mt-1">/ Jour HT</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NOUVELLE SECTION: ÉCOSYSTÈME / SETUP */}
        <section className="px-6 md:px-12 py-32 bg-[#EBEBE6]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Configurations <br/> Prêtes à tourner.</h2>
          </div>
          <div className="flex flex-col md:flex-row border border-[#111]">
            <div className="w-full md:w-1/2 p-12 border-b md:border-b-0 md:border-r border-[#111] bg-white flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-4">Pack Documentaire</div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Setup FX3 Run & Gun</h3>
                <ul className="space-y-4 font-mono text-sm mb-12">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#111]"></span> Sony FX3 (Boîtier Nu)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#111]"></span> Objectif 24-70mm GM II</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#111]"></span> DJI RS3 Pro</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#111]"></span> Filtres ND Freewell</li>
                </ul>
              </div>
              <div className="flex items-end justify-between pt-8 border-t border-[#EEE]">
                <div>
                  <div className="text-3xl font-black">230€</div>
                  <div className="text-[9px] font-bold text-[#666] uppercase tracking-widest mt-1">/ Jour HT (au lieu de 240€)</div>
                </div>
                <Link href="/devis" className="bg-[#111] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#333] transition-colors">
                  Réserver ce pack
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto flex items-center justify-center p-12 overflow-hidden bg-[#F4F4F0]">
              <img src="/assets/materielsdetails/10-fx3/10-ii-.avif" alt="Setup FX3" className="w-full h-full object-contain mix-blend-multiply scale-110 hover:scale-125 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* FOOTER - Minimaliste */}
        <footer className="bg-[#111] text-[#F4F4F0] px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 border-b border-[#333] pb-24">
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Prêt à <br/> Tourner.
              </h2>
              <Link href="/devis" className="inline-flex items-center justify-center gap-3 bg-white text-[#111] px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Démarrer un devis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm font-medium text-[#888]">
              <div className="flex flex-col gap-4">
                <div className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Catalogue</div>
                <Link href="#" className="hover:text-white transition-colors">Caméras</Link>
                <Link href="#" className="hover:text-white transition-colors">Objectifs</Link>
                <Link href="#" className="hover:text-white transition-colors">Machinerie</Link>
                <Link href="#" className="hover:text-white transition-colors">Lumière</Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Contact</div>
                <p>12 Rue de la Précision<br/>75011 Paris, France</p>
                <a href="mailto:contact@vision-adequate.fr" className="hover:text-white transition-colors mt-2">contact@vision-adequate.fr</a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase text-[#555]">
            <span>© 2026 Vision Adéquate.</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
              <Link href="#" className="hover:text-white transition-colors">CGV</Link>
            </div>
          </div>
        </footer>
      </main>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
