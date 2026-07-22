"use client";

import { products } from "@/data/products";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Microscope, HeadphonesIcon, MapPin, Mail, PlayCircle, Settings, Box } from "lucide-react";
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

        {/* PARTENAIRES / TRUSTED BY - Premium Scrolling Marquee (Pure White) */}
        <section className="py-20 bg-[#050505] overflow-hidden border-y border-[#222]">
          <div className="max-w-[100vw] mx-auto" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-[10px] font-bold text-[#666] uppercase tracking-[0.4em]">Ils nous font confiance</h3>
            </div>
            <div className="flex whitespace-nowrap relative items-center">
              <div className="animate-marquee-slow flex items-center gap-20 md:gap-32 pr-20 md:pr-32">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-20 md:gap-32 opacity-80 hover:opacity-100 transition-opacity duration-500">
                    {/* INSPI: grayscale to keep shape, brightness to make it pop, mix-blend-screen for dark backgrounds */}
                    <img src="/assets/RYN/Partenaire de confiance/Inspi Pnj.png" alt="INSPI" loading="lazy" decoding="async" className="h-12 md:h-14 w-auto object-contain grayscale brightness-200 mix-blend-screen" />

                    {/* HELICE D'OR: JPEG. invert turns white bg to black, mix-blend-screen hides the black. px-8 prevents it from touching others */}
                    <div className="px-8">
                      <img src="/assets/RYN/Partenaire de confiance/HELICE DOR .jpeg" alt="HELICE D'OR" loading="lazy" decoding="async" className="h-12 md:h-14 w-auto object-contain grayscale invert mix-blend-screen" />
                    </div>

                    {/* MOWA AGENCY: Black PNG -> brightness-0 invert makes it pure white */}
                    <img src="/assets/RYN/Partenaire de confiance/MowaAgency.png" alt="MOWA AGENCY" loading="lazy" decoding="async" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />

                    {/* PAD PANIK PROD */}
                    <img src="/assets/RYN/Partenaire de confiance/Padpanikprod.png" alt="PAD PANIK PROD" loading="lazy" decoding="async" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />

                    {/* Le Bisso By Lion */}
                    <img src="/assets/RYN/Partenaire de confiance/PHOTO-2025-08-08-17-39-57-Photoroom.png" alt="Le Bisso By Lion" loading="lazy" decoding="async" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />

                    {/* Partenaire */}
                    <img src="/assets/RYN/Partenaire de confiance/PHOTO-2025-08-08-17-40-20-Photoroom.png" alt="Partenaire" loading="lazy" decoding="async" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
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
                src="/assets/image.webp"
                alt="Manifeste Vision Adéquate"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[70vh] object-contain"
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
                icon: Microscope,
                title: "Laboratoire de Test",
                desc: "Accès gratuit à notre salle de préparation équipée de mires 4K pour calibrer vos optiques la veille du départ."
              },
              {
                num: "02",
                icon: HeadphonesIcon,
                title: "Hotline Plateau",
                desc: "Un assistant opérateur disponible 24/7. Un problème matériel à 3h du matin ? Nous trouvons la solution en temps réel."
              },
              {
                num: "03",
                icon: ShieldCheck,
                title: "Logistique Sécurisée",
                desc: "Livraison par coursier technique sur votre lieu de tournage en Île-de-France, dans des flight cases blindés Pelican."
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

        {/* NOUVELLE SECTION: PORTFOLIO */}
        <section className="px-6 md:px-12 py-32 border-b border-[#111] bg-[#111] text-white">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Portfolio <br /> Visuel.
            </h2>
            <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em]">
              Aperçu de nos réalisations
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          </div>
        </section>

                {/* NOUVELLE SECTION: PRESTATIONS & TARIFS - Minimalist & Unique */}
        <section className="py-32 bg-[#F4F4F0] text-[#111] border-y border-[#111] relative overflow-hidden">
          
          {/* Arrière-plan décoratif */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
            <div className="absolute top-10 left-10 text-[20vw] font-black leading-none">PRICING</div>
            <div className="absolute bottom-10 right-10 text-[20vw] font-black leading-none">2026</div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-[#111]"></span>
                  <span className="text-[10px] font-bold text-[#111] uppercase tracking-[0.3em]">Investissement</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                  Grille Tarifaire <br/> Officielle.
                </h2>
                <p className="text-[#555] text-base md:text-lg font-medium leading-relaxed max-w-xl">
                  Transparence absolue sur nos prestations. Conçue pour les productions d&apos;excellence, sans compromis sur la qualité.
                </p>
              </div>
              <a href="/assets/RYN/Section Prestation/Grille Tarifaire .pdf" target="_blank" className="group flex items-center justify-center gap-4 bg-[#111] text-[#F4F4F0] px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors shrink-0">
                Télécharger le PDF <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
                      <span className="text-sm font-medium">Montage & Colo</span>
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
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Mariage Premium</h3>
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
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Frais d&apos;agence <span className="text-[9px] block">Hors Mariage</span></span> <span className="font-black text-lg text-[#111]">80€</span></li>
                      <li className="flex justify-between items-center text-sm font-medium"><span className="text-[#555]">Frais d&apos;agence <span className="text-[9px] block">Mariage</span></span> <span className="font-black text-lg text-[#111]">160€</span></li>
                    </ul>
                  </div>

                </div>

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
