"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, HelpCircle, PackageOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Header } from "@/components/ui/Header";

const PRODUCTS_DATA: Record<string, any> = {
  "sony-a7iv": {
    name: "Sony A7IV", brand: "Sony", price: "65", status: "Disponible",
    images: ["/assets/materielsdetails/1-sony-a7iv/1-sony-a7iv-.webp", "/assets/materielsdetails/1-sony-a7iv/1-ii--sony-a7iv-.webp", "/assets/materielsdetails/1-sony-a7iv/1-iii-sony-a7iv.webp"],
    desc: "Appareil photo hybride plein format 33 MP, parfait pour la vidéo et la photo. Autofocus ultra-rapide et suivi des yeux.",
    specs: [["Capteur", "Plein format Exmor R 33 MP"], ["Résolution", "4K 60p"], ["Autofocus", "Hybride rapide avec suivi en temps réel"], ["Poids", "658 g"]]
  },
  "sony-fx3": {
    name: "Sony FX3", brand: "Sony", price: "120", status: "En location",
    images: ["/assets/materielsdetails/10-fx3/10-i-.avif", "/assets/materielsdetails/10-fx3/10-ii-.avif", "/assets/materielsdetails/10-fx3/10-iii.avif"],
    desc: "Caméra cinéma compacte plein format, idéale pour les tournages solo et les petites équipes.",
    specs: [["Capteur", "Plein format 4K"], ["Dynamique", "15+ stops"], ["Monture", "E-Mount"], ["Poids", "715 g"]]
  },
  "sony-a7siii": {
    name: "Sony A7S III", brand: "Sony", price: "80", status: "Disponible",
    images: ["/assets/materielsdetails/12-sony-a7siii/12-i.webp", "/assets/materielsdetails/12-sony-a7siii/12-ii.webp", "/assets/materielsdetails/12-sony-a7siii/12-iii.webp"],
    desc: "Le roi de la basse lumière. Hybride plein format optimisé pour la vidéo 4K à haute fréquence d'images.",
    specs: [["Capteur", "Exmor R 12.1 MP"], ["Vidéo", "4K 120p"], ["Dynamique", "15 stops"], ["Sensibilité", "ISO 40-409600"]]
  },
  "sony-a7v": {
    name: "Sony A7RV", brand: "Sony", price: "75", status: "Disponible",
    images: ["/assets/materielsdetails/13-sony-a7v/13-i.jpg", "/assets/materielsdetails/13-sony-a7v/13-ii.jpg.webp", "/assets/materielsdetails/13-sony-a7v/13-iii.jpg.webp"],
    desc: "Résolution ultime avec un capteur de 61 MP et un nouvel autofocus basé sur l'IA.",
    specs: [["Capteur", "Plein format 61 MP"], ["Vidéo", "8K 24p"], ["Autofocus", "IA avancée"], ["Écran", "Inclinable 4 axes"]]
  },
  "sony-14mm-gm": {
    name: "Sony 14mm GM", brand: "Sony", price: "35", status: "Maintenance",
    images: ["/assets/materielsdetails/14-sony-14-mm-gm-i/14-i.jpg.webp", "/assets/materielsdetails/14-sony-14-mm-gm-i/14-ii.jpg.webp", "/assets/materielsdetails/14-sony-14-mm-gm-i/14-iii.jpg.webp"],
    desc: "Optique ultra grand-angle lumineuse, idéale pour l'astrophotographie, l'architecture et le paysage.",
    specs: [["Focale", "14mm"], ["Ouverture", "f/1.8"], ["Monture", "E-Mount"], ["Série", "G Master"]]
  },
  "dji-rs3-mini": {
    name: "DJI RS3 Mini", brand: "DJI", price: "25", status: "Disponible",
    images: ["/assets/materielsdetails/15-rs3-mini-dji/15-i-.jpg", "/assets/materielsdetails/15-rs3-mini-dji/15-ii.jpg", "/assets/materielsdetails/15-rs3-mini-dji/15-iii-.jpg"],
    desc: "Stabilisateur léger pour appareils hybrides, offrant une charge utile suffisante pour la plupart des configurations.",
    specs: [["Charge utile", "Jusqu'à 2 kg"], ["Poids", "795 g"], ["Autonomie", "10 heures"], ["Bluetooth", "Contrôle obturateur"]]
  },
  "sony-24-70-gm-ii": {
    name: "Objectif 24-70 GM II", brand: "Sony", price: "45", status: "Disponible",
    images: ["/assets/materielsdetails/2-objectif-24-70-gm-ii/2-i-.jpg.webp", "/assets/materielsdetails/2-objectif-24-70-gm-ii/2-ii.jpg.webp", "/assets/materielsdetails/2-objectif-24-70-gm-ii/2-iii.jpg.webp"],
    desc: "Zoom standard professionnel de deuxième génération, plus léger et plus net.",
    specs: [["Focales", "24-70mm"], ["Ouverture", "f/2.8 constant"], ["Monture", "E-Mount"], ["Poids", "695 g"]]
  },
  "osmo-pocket-3": {
    name: "Osmo Pocket 3", brand: "DJI", price: "30", status: "Disponible",
    images: ["/assets/materielsdetails/4-osmo-pocket-3/4-i-.webp", "/assets/materielsdetails/4-osmo-pocket-3/4-ii-.webp"],
    desc: "Caméra à nacelle miniature avec un capteur 1 pouce, idéale pour le vlogging et les tournages dynamiques.",
    specs: [["Capteur", "CMOS 1 pouce"], ["Résolution", "4K 120p"], ["Stabilisation", "Mécanique 3 axes"], ["Écran", "Rotatif 2 pouces"]]
  },
  "dji-mini-4-pro": {
    name: "DJI Mini 4 Pro", brand: "DJI", price: "50", status: "Disponible",
    images: ["/assets/materielsdetails/5-dji-mini-4-pro/5-i-.jpg", "/assets/materielsdetails/5-dji-mini-4-pro/5-ii.jpg", "/assets/materielsdetails/5-dji-mini-4-pro/5-iii-.jpg"],
    desc: "Drone miniature de moins de 250g, doté d'une détection d'obstacles omnidirectionnelle et d'une caméra 4K/60fps HDR.",
    specs: [["Poids", "< 249 g"], ["Capteur", "CMOS 1/1.3 pouce"], ["Vidéo", "4K 60fps HDR"], ["Autonomie", "34 minutes"]]
  },
  "dji-rs3": {
    name: "DJI RS3", brand: "DJI", price: "55", status: "Disponible",
    images: ["/assets/materielsdetails/6---dji-rs3/6-i-.jpg", "/assets/materielsdetails/6---dji-rs3/6-ii.jpg"],
    desc: "Stabilisateur professionnel avec verrouillage automatique des axes pour une mise en place instantanée.",
    specs: [["Charge utile", "Jusqu'à 3 kg"], ["Poids", "1.3 kg"], ["Verrouillage", "Automatique"], ["Autonomie", "12 heures"]]
  },
  "insta-360-x3": {
    name: "Insta 360 X3", brand: "Insta360", price: "25", status: "Disponible",
    images: ["/assets/materielsdetails/8-insta-360-x3/8-i-.jpg", "/assets/materielsdetails/8-insta-360-x3/8-ii-.webp", "/assets/materielsdetails/8-insta-360-x3/8-iii.jpg"],
    desc: "Caméra d'action 360° avec deux capteurs 1/2 pouce, capturant des vidéos 5.7K immersives.",
    specs: [["Capteurs", "Double 1/2 pouce"], ["Résolution", "5.7K 360°"], ["Étanchéité", "10 m"], ["Écran", "Tactile 2.29 pouces"]]
  }
,

  "filtre-nd-freewell": {
    name: "Filtre ND Variable", brand: "Freewell", price: "10", status: "Disponible",
    images: ["/assets/MATERIELS 2/Freewel Filtre Nd/Freewel.jpg", "/assets/MATERIELS 2/Freewel Filtre Nd/3 - freewel .jpg"],
    desc: "Filtre ND variable de haute qualité pour contrôler l'exposition en vidéo.",
    specs: [["Type", "Variable"], ["Densité", "ND8 à ND1000"], ["Fixation", "Magnétique"]]
  },
  "trepied-joby": {
    name: "Trépied Joby", brand: "Joby", price: "5", status: "Disponible",
    images: ["/assets/MATERIELS 2/Trépied/1 Joby .jpg", "/assets/MATERIELS 2/Trépied/2 - Joby.jpg", "/assets/MATERIELS 2/Trépied/3 - Joby.jpg"],
    desc: "Trépied flexible et robuste, idéal pour les vlogs et les installations créatives.",
    specs: [["Type", "Flexible"], ["Poids max", "3 kg"], ["Matériau", "Plastique ABS / Métal"]]
  },
  "cage-sony-a7iv": {
    name: "Cage A7IV / A7S3", brand: "SmallRig", price: "10", status: "Disponible",
    images: ["/assets/MATERIELS 2/SmallRight Cage/1 - SmallRight Cage A7IV, A7S3.jpg", "/assets/MATERIELS 2/SmallRight Cage/2 - SmallRight Cage .jpg", "/assets/MATERIELS 2/SmallRight Cage/3 - SmallRight Cage .jpg"],
    desc: "Cage de protection et de montage pour Sony A7IV et A7S III. Offre de multiples points de fixation.",
    specs: [["Matériau", "Alliage d'aluminium"], ["Compatibilité", "Sony A7IV, A7S III"], ["Fixations", "1/4\"", "3/8\"", "Griffe froide"]]
  },
  "carte-sd-128": {
    name: "Carte SD Sony 128GB", brand: "Sony", price: "30", status: "Disponible",
    images: ["/assets/materiels/11-sd-iii-.jpg"],
    desc: "Carte mémoire SDXC ultra-rapide pour l'enregistrement vidéo 4K et 8K.",
    specs: [["Capacité", "128 GB"], ["Vitesse lecture", "300 MB/s"], ["Classe", "V90"]]
  },
  "carte-sd-angelbird-128": {
    name: "Carte SD Angelbird 128GB", brand: "Angelbird", price: "25", status: "Disponible",
    images: ["/assets/MATERIELS 2/CARTE SD/1 - ANGELBIRD 128GB.JPG"],
    desc: "Carte mémoire SDXC V90 haute performance, conçue pour les flux de travail vidéo exigeants.",
    specs: [["Capacité", "128 GB"], ["Vitesse", "300 MB/s"], ["Classe", "V90"]]
  },
  "dji-mic-2": {
    name: "DJI Mic 2", brand: "DJI", price: "35", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/DJI Mic 2/1 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement.jpg",
      "/assets/MATERIELS 2/DJI Mic 2/2 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement .jpg",
      "/assets/MATERIELS 2/DJI Mic 2/3 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement..jpg"
    ],
    desc: "Système de microphone sans fil professionnel avec enregistrement interne 32-bit float.",
    specs: [["Émetteurs", "2"], ["Récepteur", "1"], ["Enregistrement", "32-bit Float interne"], ["Portée", "250m"]]
  },
  "godox-flash-v1-pro-s": {
    name: "Godox Flash V1 PRO S", brand: "Godox", price: "20", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/Flash V1 PRO S/1 - Flash V1 PRO S .jpg",
      "/assets/MATERIELS 2/Flash V1 PRO S/2 - Flash V1 PRO S .jpg",
      "/assets/MATERIELS 2/Flash V1 PRO S/3 - Flash V1 PRO S .jpg"
    ],
    desc: "Flash cobra professionnel à tête ronde pour Sony. Éclairage doux et uniforme.",
    specs: [["Tête", "Ronde"], ["Compatibilité", "Sony TTL"], ["Batterie", "Li-ion rechargeable"]]
  },
  "godox-x3-s": {
    name: "Godox X3-S", brand: "Godox", price: "10", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/Godox X3-S/1 - Godox X3-S Déclencheur de Flash.jpg",
      "/assets/MATERIELS 2/Godox X3-S/2 - Godox X3-S Déclencheur de Flash...jpg"
    ],
    desc: "Déclencheur de flash sans fil ultra-compact avec écran tactile OLED.",
    specs: [["Compatibilité", "Sony"], ["Écran", "Tactile OLED"], ["Fréquence", "2.4 GHz"]]
  },
  "micro-cravate": {
    name: "Micro Cravate", brand: "Générique", price: "5", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/MicroCravate/1 - MicroCravate.jpg",
      "/assets/MATERIELS 2/MicroCravate/2 - MicroCravate.jpg"
    ],
    desc: "Microphone cravate filaire pour des prises de son discrètes et claires.",
    specs: [["Type", "Omnidirectionnel"], ["Connecteur", "Jack 3.5mm"]]
  }

};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  
  const realProduct = products.find(p => p.id === params.id);
  const product = PRODUCTS_DATA[params.id] || (realProduct ? {
    name: realProduct.model,
    brand: realProduct.brand,
    price: realProduct.pricePerDay.toString(),
    status: realProduct.available ? "Disponible" : "Indisponible",
    images: [realProduct.imageUrl],
    desc: "Matériel professionnel de haute qualité.",
    specs: realProduct.specs.map(s => ["Spec", s])
  } : PRODUCTS_DATA["sony-fx3"]);


  const handleAdd = () => {
    // Retrouver le vrai objet Product depuis la base de données
    const realProduct = products.find(p => p.id === params.id) || products.find(p => p.id === "sony-fx3");
    if (realProduct) {
      addItem(realProduct);
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  const total = product.images.length;
  const goNext = () => setActiveImage((i: number) => (i + 1) % total);
  const goPrev = () => setActiveImage((i: number) => (i - 1 + total) % total);

  // Swipe tactile (mobile)
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { dx < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      <Header variant="default" />

      <main className="pt-[72px] md:pt-[96px]">
        {/* TOP BAR - Breadcrumb & Price */}
        <div className="flex justify-between items-center gap-4 px-6 md:px-12 h-12 md:h-14 border-b border-black/10 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#999] whitespace-nowrap">
          <Link href="/catalogue" className="flex items-center gap-2 hover:text-[#111] transition-colors shrink-0">
            <ArrowLeft className="w-3.5 h-3.5 shrink-0" /> <span className="hidden xs:inline sm:inline">Retour à l&apos;inventaire</span><span className="sm:hidden">Retour</span>
          </Link>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline text-[#555]">REF. {params.id.toUpperCase()}</span>
            <span className="hidden sm:inline w-1 h-1 bg-[#CCC] rounded-full" />
            <span className={product.status === "Disponible" ? "text-emerald-600" : "text-amber-600"}>{product.status}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* GAUCHE : GALERIE (Sticky sur Desktop) */}
          <div className="w-full lg:w-[58%] lg:border-r border-black/10">
            <div className="lg:sticky lg:top-[96px] lg:h-[calc(100vh-152px)] flex flex-col">
              {/* Stage produit */}
              <div
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="group relative flex-1 flex items-center justify-center px-6 md:px-8 py-10 h-[52vh] min-h-[360px] lg:h-auto overflow-hidden select-none"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_38%,_#FDFDFB_0%,_#EEEEE8_55%,_#E4E4DD_100%)]" />
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  draggable={false}
                  className="relative z-10 max-w-[80%] max-h-[85%] w-auto h-auto object-contain mix-blend-multiply drop-shadow-[0_35px_55px_rgba(0,0,0,0.22)]"
                />

                {total > 1 && (
                  <>
                    {/* Flèches navigation */}
                    <button
                      onClick={goPrev}
                      aria-label="Image précédente"
                      className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/85 backdrop-blur-sm border border-black/10 flex items-center justify-center text-[#111] shadow-sm hover:bg-white hover:scale-105 active:scale-95 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goNext}
                      aria-label="Image suivante"
                      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/85 backdrop-blur-sm border border-black/10 flex items-center justify-center text-[#111] shadow-sm hover:bg-white hover:scale-105 active:scale-95 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    {/* Compteur */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[11px] font-semibold tabular-nums text-[#111] bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-black/5">
                      {activeImage + 1} / {total}
                    </div>
                  </>
                )}
              </div>

              {/* Miniatures (toujours visibles) */}
              {total > 1 && (
                <div className="shrink-0 flex gap-2.5 md:gap-3 justify-center flex-wrap px-6 py-4 md:py-5 border-t border-black/10 bg-[#F4F4F0]">
                  {product.images.map((img: string, i: number) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Voir l'image ${i + 1}`}
                      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-[#EBEBE6] flex items-center justify-center transition-all duration-300 ${i === activeImage ? 'ring-2 ring-[#111] ring-offset-2 ring-offset-[#F4F4F0]' : 'opacity-45 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" decoding="async" className="w-full h-full object-contain p-2 mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DROITE : INFOS & DEVIS */}
          <div className="w-full lg:w-[42%] flex flex-col">
            {/* Product Header */}
            <div className="px-8 md:px-14 pt-12 md:pt-20 pb-10">
              <div className="text-[11px] font-semibold text-[#999] uppercase tracking-[0.25em] mb-5">{product.brand}</div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.86] mb-8 break-words">
                {product.name}
              </h1>
              <p className="text-base font-medium text-[#666] leading-relaxed max-w-md">
                {product.desc}
              </p>
            </div>

            {/* Price */}
            <div className="px-8 md:px-14 py-8 border-y border-black/10 flex items-end justify-between">
              <div>
                <div className="text-[10px] font-semibold text-[#999] uppercase tracking-[0.2em] mb-1.5">Tarif journalier</div>
                <div className="text-xs font-medium text-[#AAA] uppercase tracking-wider">HT / jour</div>
              </div>
              <div className="font-black text-5xl lg:text-6xl leading-none tracking-tighter">{product.price}€</div>
            </div>

            {/* CTA */}
            <div className="px-8 md:px-14 py-8 flex flex-col gap-3">
              <button
                onClick={handleAdd}
                className={`group w-full py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex justify-center items-center gap-2 ${
                  added ? "bg-emerald-600 text-white" : "bg-[#111] text-white hover:bg-[#333]"
                }`}
              >
                {added ? (
                  <><CheckCircle2 className="w-4 h-4" /> Ajouté au devis</>
                ) : (
                  <>Ajouter au devis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
              <Link href="/devis" className="w-full py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2 border border-[#111]/20 text-[#111] hover:bg-[#111] hover:text-white">
                Voir mon devis
              </Link>
            </div>

            {/* Quick Specs */}
            <div className="px-8 md:px-14 pb-16 pt-4">
              <div className="text-[10px] font-semibold text-[#999] uppercase tracking-[0.25em] mb-4">Spécifications clés</div>
              <div className="flex flex-col">
                {product.specs.map(([label, value]: [string, string], i: number) => (
                  <div key={i} className="flex justify-between items-center gap-4 py-4 border-b border-black/10">
                    <span className="text-xs font-semibold text-[#888] uppercase tracking-wider">{label}</span>
                    <span className="text-sm font-bold text-[#111] text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: DANS LA VALISE & FAQ (Blueprint Style) */}
        <section className="border-t border-black/10 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Dans la valise */}
          <div className="border-b md:border-b-0 md:border-r border-black/10 flex flex-col">
            {/* Header */}
            <div className="p-8 md:p-16 border-b border-black/10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="flex items-center gap-4 text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9]">
                  <PackageOpen className="w-6 h-6 md:w-9 md:h-9 shrink-0" /> Inclus dans<br className="hidden md:block" /> la valise.
                </h2>
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-white bg-[#111] px-3 py-1.5">
                  {[
                    { qty: "1", name: `Boîtier ${product.name}` },
                    { qty: "3", name: "Batteries NPF-Z100" },
                    { qty: "1", name: "Chargeur double rapide" },
                    { qty: "2", name: "Cartes CFexpress Type A (160GB)" },
                    { qty: "1", name: "Lecteur de carte USB-C" },
                    { qty: "1", name: "Cage complète (Top Handle, Baseplate)" },
                    { qty: "1", name: "Valise rigide sur-mesure (Pelican/HPRC)" }
                  ].length} éléments
                </span>
              </div>
              <p className="text-sm font-medium text-[#666] leading-relaxed max-w-md">
                Chaque kit part contrôlé et prêt à tourner. Contenu vérifié pièce par pièce à la sortie comme au retour.
              </p>
            </div>

            {/* Kit list */}
            <ul className="flex flex-col">
              {[
                { qty: "1", name: `Boîtier ${product.name}` },
                { qty: "3", name: "Batteries NPF-Z100" },
                { qty: "1", name: "Chargeur double rapide" },
                { qty: "2", name: "Cartes CFexpress Type A (160GB)" },
                { qty: "1", name: "Lecteur de carte USB-C" },
                { qty: "1", name: "Cage complète (Top Handle, Baseplate)" },
                { qty: "1", name: "Valise rigide sur-mesure (Pelican/HPRC)" }
              ].map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-5 md:gap-6 px-8 md:px-16 py-5 border-b border-[#DDD] last:border-b-0 hover:bg-[#EBEBE6] transition-colors"
                >
                  <span className="shrink-0 text-[10px] font-bold text-[#AAA] tabular-nums tracking-widest w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 border border-[#111] font-black text-sm tabular-nums group-hover:bg-[#111] group-hover:text-white transition-colors">
                    ×{item.qty}
                  </span>
                  <span className="text-sm md:text-base font-bold tracking-tight uppercase leading-tight">
                    {item.name}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#111] ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
          
          {/* FAQ */}
          <div className="p-8 md:p-24 bg-[#EBEBE6]">
            <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-black tracking-tighter uppercase mb-8 md:mb-12"><HelpCircle className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> Assistance & FAQ.</h2>
            <div className="space-y-8">
              {[
                { q: "Le matériel est-il assuré ?", a: "Oui, une assurance bris de machine est incluse avec une franchise de 1500€. Une option zéro franchise est disponible sur devis." },
                { q: "Faites-vous des tests caméra ?", a: "Notre salle de test est à votre disposition gratuitement pour vérifier votre liste la veille du départ." },
                { q: "Livrez-vous sur le plateau ?", a: "Nous assurons la livraison par coursier dédié en Île-de-France (optionnel)." },
                { q: "Votre matériel est-il en bon état ?", a: "Tous nos équipements sont contrôlés, nettoyés et testés avant chaque location. Nous demandons à nos clients de restituer le matériel dans l'état dans lequel il a été remis. En cas de perte, de casse ou de détérioration, des frais pourront être appliqués conformément au contrat de location." },
                { q: "Comment utiliser le matériel ?", a: "Le matériel est destiné à une utilisation conforme à sa fonction. Toute modification, sous-location ou utilisation inadaptée est interdite. Notre équipe reste disponible pour répondre à vos questions et vous conseiller avant votre événement." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-[#CCC] pb-6">
                  <div className="text-xs font-bold uppercase tracking-widest mb-3">{faq.q}</div>
                  <div className="text-sm font-medium text-[#555] leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUGGESTIONS */}
        <section className="border-t border-black/10 px-6 md:px-12 py-16 md:py-24">
          <div className="flex justify-between items-end mb-10 md:mb-14 gap-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              Recommandations <br/> Techniques
            </h2>
            <Link href="/catalogue" className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b-2 border-[#111] pb-1 hover:opacity-50 transition-opacity shrink-0">
              Tout l&apos;inventaire <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {products.filter(p => p.id !== params.id).slice(0, 3).map((sugg, i) => (
              <Link href={`/catalogue/${sugg.id}`} key={i} className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-black/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="relative aspect-[4/3] p-10 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#FFFFFF_0%,_#ECECE6_100%)]">
                  <img
                    src={sugg.imageUrl}
                    alt={sugg.model}
                    loading="lazy"
                    decoding="async"
                    className="max-w-[70%] max-h-[75%] w-auto h-auto object-contain mix-blend-multiply drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="p-6 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-semibold text-[#999] uppercase tracking-[0.2em] mb-1.5">{sugg.brand}</div>
                    <h3 className="text-xl font-black tracking-tight uppercase leading-none">
                      {sugg.model}
                    </h3>
                  </div>
                  <div className="font-black text-lg shrink-0">{sugg.pricePerDay}€ <span className="text-[9px] font-semibold text-[#999] uppercase tracking-widest">/ J</span></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] text-[#F4F4F0] px-6 md:px-12 py-12 border-t border-[#333] flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
        <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
        <div className="flex gap-8">
          <span className="text-[#555]">Mentions Légales</span>
          <span className="text-[#555]">CGV</span>
        </div>
      </footer>
    </div>
  );
}
