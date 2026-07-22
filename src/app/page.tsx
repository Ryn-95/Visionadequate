"use client";

import { products } from "@/data/products";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Microscope, HeadphonesIcon, MapPin, Mail, PlayCircle, Settings, Box, Package, RotateCcw } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      <Header variant="transparent" />

      <main className="pt-24 md:pt-32">
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
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> Contrôle Qualité Strict</span>
                <span className="w-1 h-1 bg-white rounded-full" />
                <span className="flex items-center gap-2"><HeadphonesIcon className="w-3 h-3" /> Support Plateau 24/7</span>
                <span className="w-1 h-1 bg-white rounded-full" />
                <span className="flex items-center gap-2"><Box className="w-3 h-3" /> Livraison France Entière</span>
                <span className="w-1 h-1 bg-white rounded-full" />
              </div>
            ))}
          </div>
        </section>

        {/* PARTENAIRES / TRUSTED BY */}
        <section className="py-24 md:py-32 bg-[#050505] overflow-hidden border-y border-white/10">
          {/* Header éditorial, cohérent avec le reste du site */}
          <div className="px-6 md:px-12 mb-16 md:mb-20 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-white/25" />
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.35em]">Ils nous font confiance</span>
              <span className="w-8 h-[1px] bg-white/25" />
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Studios & agences partenaires
            </h3>
          </div>

          <div
            className="max-w-[100vw] mx-auto"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}
          >
            <div className="flex whitespace-nowrap relative items-stretch">
              <div className="animate-marquee-slow hover:[animation-play-state:paused] flex items-stretch pr-24 md:pr-32">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-stretch">
                    {[
                      { src: "/assets/RYN/Partenaire de confiance/Inspi Pnj.png", alt: "INSPI Studio", className: "max-h-[70%] grayscale brightness-200 mix-blend-screen" },
                      { src: "/assets/RYN/Partenaire de confiance/HELICE DOR .jpeg", alt: "Hélice d'Or", className: "max-h-[70%] grayscale invert mix-blend-screen" },
                      { src: "/assets/RYN/Partenaire de confiance/MowaAgency.png", alt: "MOWA Agency", className: "max-h-[50%] brightness-0 invert" },
                      { src: "/assets/RYN/Partenaire de confiance/Padpanikprod.png", alt: "Pad Panik Prod", className: "max-h-[62%] brightness-0 invert" },
                      { src: "/assets/RYN/Partenaire de confiance/PHOTO-2025-08-08-17-39-57-Photoroom.png", alt: "Le Bisso By Lion", className: "max-h-[68%] brightness-0 invert" },
                      { src: "/assets/RYN/Partenaire de confiance/PHOTO-2025-08-08-17-40-20-Photoroom.png", alt: "Charlito", className: "max-h-[42%] brightness-0 invert" },
                    ].map((partner, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-center h-20 md:h-24 w-36 md:w-44 mx-2 md:mx-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-500"
                      >
                        <img
                          src={partner.src}
                          alt={partner.alt}
                          loading="lazy"
                          decoding="async"
                          className={`w-auto object-contain ${partner.className}`}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOUVELLE SECTION: L'AGENCE / MANIFESTO */}
        <section className="px-6 md:px-12 py-32 bg-[#F4F4F0] text-[#111] border-b border-[#111]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                L&apos;Agence.
              </h2>
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#888]"></span> Manifeste
              </div>
              <div className="space-y-8 text-sm md:text-base font-medium text-[#555] leading-relaxed">
                <p className="text-xl md:text-2xl font-bold text-[#111] leading-tight">
                  Nous ne sommes pas de simples loueurs. Vision Adéquate est né d&apos;une frustration : celle de voir la logistique entraver la création.
                </p>
                <p>
                  Chaque pièce de notre inventaire est sélectionnée, testée et calibrée avec une rigueur chirurgicale. Si un équipement n&apos;atteint pas nos standards de fiabilité, il n&apos;est pas proposé à la location. Point.
                </p>
                <p className="text-[#111] font-bold">
                  Notre mission est simple : faire disparaître l&apos;outil pour laisser toute la place à votre vision.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src="/assets/L'Agence.png"
                alt="Manifeste Vision Adéquate"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </section>

        {/* NOUVELLE SECTION: CONDITIONS DE LOCATION */}
        <section className="px-6 md:px-12 py-32 border-b border-[#111]">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-24 text-center">
            Conditions <br/> de Location.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#111]">
            {[
              {
                num: "01",
                icon: Package,
                title: "Retrait du matériel",
                desc: "Retirez votre matériel directement auprès de notre agence ou profitez de notre service de livraison (sur devis). Les retraits s'effectuent du lundi au vendredi, de 10h00 à 14h00, sur rendez-vous. Pour les locations du week-end, le matériel est remis le vendredi et reste à votre disposition jusqu'au lundi, afin que vous puissiez profiter pleinement de votre événement."
              },
              {
                num: "02",
                icon: RotateCcw,
                title: "Retour du matériel",
                desc: "Les retours s'effectuent du lundi au vendredi, de 15h00 à 18h00, sur rendez-vous. Si vous avez bénéficié de notre service de livraison, nous pouvons également organiser la reprise du matériel selon les modalités convenues lors de votre réservation. Les locations effectuées pour le week-end sont restituées le lundi."
              },
              {
                num: "03",
                icon: ShieldCheck,
                title: "Avant votre location",
                desc: "Afin de garantir la disponibilité de nos équipements, toute réservation est confirmée après validation du devis. Une caution est demandée pour tout matériel loué. Chaque équipement est vérifié, testé et préparé avec soin avant sa remise pour vous garantir une prestation de qualité."
              }
            ].map((service, i) => (
              <div key={i} className="p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111] hover:bg-[#EBEBE6] transition-colors group">
                <div className="flex justify-between items-center mb-12">
                  <div className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">
                    {service.num}
                  </div>
                  <service.icon className="w-6 h-6 text-[#111] opacity-50 group-hover:opacity-100 transition-opacity" />
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
              Sélection <br /> Technique
            </h2>
            <Link href="/catalogue" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-[#111] pb-1 hover:opacity-50 transition-opacity">
              Voir tout l&apos;inventaire <ArrowUpRight className="w-4 h-4" />
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
                    loading="lazy"
                    decoding="async"
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
                  <li className="flex items-center gap-3"><PlayCircle className="w-4 h-4" /> Sony FX3 (Boîtier Nu)</li>
                  <li className="flex items-center gap-3"><Settings className="w-4 h-4" /> Objectif 24-70mm GM II</li>
                  <li className="flex items-center gap-3"><Box className="w-4 h-4" /> DJI RS3 Pro</li>
                  <li className="flex items-center gap-3"><Microscope className="w-4 h-4" /> Filtres ND Freewell</li>
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
              <img src="/assets/materielsdetails/10-fx3/10-ii-.avif" alt="Setup FX3" loading="lazy" decoding="async" className="w-full h-full object-contain mix-blend-multiply scale-110 hover:scale-125 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* NOUVELLE SECTION: PORTFOLIO (Teaser) */}
        <section className="px-6 md:px-12 py-32 border-b border-[#111] bg-[#111] text-white">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Portfolio <br /> Visuel.
            </h2>
            <Link href="/portfolio" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:opacity-50 transition-opacity">
              Voir le portfolio complet <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <Link href="/portfolio" className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/assets/portfolio-opt/akenzo.webp",
              "/assets/portfolio-opt/charlito.webp",
              "/assets/portfolio-opt/marie-yoann.webp",
              "/assets/portfolio-opt/mariage-am.webp",
              "/assets/portfolio-opt/mariage-ca.webp",
              "/assets/portfolio-opt/mariage-sc.webp"
            ].map((src, i) => (
              <div key={i} className="aspect-square bg-[#222] overflow-hidden group">
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  width={900}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </Link>
        </section>

        {/* NOUVELLE SECTION: PRESTATIONS & TARIFS (Teaser) */}
        <section className="py-32 bg-[#F4F4F0] text-[#111] border-y border-[#111] relative overflow-hidden">

          {/* Arrière-plan décoratif */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
            <div className="absolute top-10 left-10 text-[20vw] font-black leading-none">PRICING</div>
            <div className="absolute bottom-10 right-10 text-[20vw] font-black leading-none">2026</div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-[#111]"></span>
                  <span className="text-[10px] font-bold text-[#111] uppercase tracking-[0.3em]">Investissement</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6 max-w-2xl">
                  Grille tarifaire prestation photo et vidéo.
                </h2>
                <p className="text-[#555] text-base md:text-lg font-medium leading-relaxed max-w-xl">
                  Transparence absolue sur nos prestations. Conçue pour les productions d&apos;excellence, sans compromis sur la qualité.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0 w-full sm:w-auto">
                <Link href="/tarifs" className="group flex items-center justify-center gap-4 bg-[#111] text-[#F4F4F0] px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors">
                  Voir la grille complète <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER - Minimaliste */}
        <footer className="bg-[#111] text-[#F4F4F0] px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 border-b border-[#333] pb-24">
            <div>
              <img src="/assets/RYN/LOGO NOIR ,BLANC, ROUGE/58959_VISION ADEQUATE_AK-01.png" alt="Vision Adéquate" loading="lazy" decoding="async" className="h-16 md:h-24 w-auto object-contain mb-12 invert" />
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
                <Link href="/catalogue" className="hover:text-white transition-colors">Inventaire Complet</Link>
                <Link href="/devis" className="hover:text-white transition-colors">Demander un Devis</Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Contact</div>
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0" /> <span>12 Rue de la Précision<br/>75011 Paris, France</span></p>
                <a href="mailto:contact@vision-adequate.fr" className="hover:text-white transition-colors mt-2 flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> contact@vision-adequate.fr</a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-[#555]">
            <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
            <div className="flex gap-8">
              <a href="/assets/RYN/Contrat LOCATION + CGL/Contrat ADÉQUATE .pdf" target="_blank" className="hover:text-white transition-colors">Contrat Location</a>
              <a href="/assets/RYN/Contrat LOCATION + CGL/CGL_Location_Audiovisuel_Clauses.pdf" target="_blank" className="hover:text-white transition-colors">CGV</a>
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
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
