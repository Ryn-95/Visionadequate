"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, HelpCircle, PackageOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

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
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  const product = PRODUCTS_DATA[params.id] || PRODUCTS_DATA["sony-fx3"];

  const handleAdd = () => {
    // Retrouver le vrai objet Product depuis la base de données
    const realProduct = products.find(p => p.id === params.id) || products.find(p => p.id === "sony-fx3");
    if (realProduct) {
      addItem(realProduct);
    }
    
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#F4F4F0] border-b border-[#111]">
        <Link href="/" className="hover:opacity-50 transition-opacity flex items-center">
          <img src="/assets/logo/logo.png" alt="Vision Adéquate" className="h-16 md:h-20 w-auto object-contain invert" />
        </Link>
        <nav className="flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase">
          <Link href="/catalogue" className="hover:opacity-50 transition-opacity">Inventaire</Link>
          <Link href="/devis" className="hover:opacity-50 transition-opacity">Devis</Link>
        </nav>
      </header>

      <main className="pt-[112px] md:pt-[128px]">
        {/* TOP BAR - Breadcrumb & Price */}
        <div className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-[#111] text-[10px] font-bold uppercase tracking-widest text-[#555]">
          <Link href="/catalogue" className="flex items-center gap-2 hover:text-[#111] transition-colors">
            <ArrowLeft className="w-3 h-3" /> Retour à l&apos;inventaire
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[#111]">REF. {params.id.toUpperCase()}</span>
            <span className="w-1 h-1 bg-[#111] rounded-full" />
            <span className={product.status === "Disponible" ? "text-emerald-600" : "text-amber-600"}>{product.status}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* GAUCHE : GALERIE */}
          <div className="w-full lg:w-2/3 border-r border-[#111] flex flex-col">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] bg-[#EBEBE6] flex items-center justify-center p-12 border-b border-[#111]">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl"
              />
            </div>
            {/* THUMBNAILS */}
            <div className="flex border-b border-[#111]">
              {product.images.map((img: string, i: number) => (
                <button 
                  key={img} 
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-1 aspect-[16/9] border-r border-[#111] last:border-r-0 flex items-center justify-center bg-[#F4F4F0] hover:bg-[#EBEBE6] transition-colors ${i === activeImage ? 'opacity-100' : 'opacity-40'}`}
                >
                  <img src={img} alt={`Miniature ${product.model} ${i+1}`} className="w-full h-full object-contain p-4 mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* DROITE : INFOS & DEVIS (Sticky sur Desktop) */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="lg:sticky lg:top-[128px] flex flex-col lg:h-[calc(100vh-128px)]">
              {/* Product Header */}
              <div className="p-8 border-b border-[#111]">
                <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-4">{product.brand}</div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
                  {product.name}
                </h1>
                <p className="text-sm font-medium text-[#555] leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Price & Action */}
              <div className="p-8 border-b border-[#111] bg-[#111] text-white">
                <div className="flex justify-between items-end mb-8">
                  <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em]">Tarif Journalier</div>
                  <div className="text-right">
                    <div className="font-black text-4xl leading-none">{product.price}€</div>
                    <div className="text-[10px] font-bold text-[#888] uppercase tracking-widest mt-1">/ Jour HT</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="DATES DE LOCATION (EX: 12 NOV - 15 NOV)" 
                    className="w-full bg-transparent border-b border-[#333] py-3 text-xs font-bold uppercase tracking-widest text-white placeholder:text-[#555] focus:outline-none focus:border-white transition-colors"
                  />
                  <button 
                    onClick={handleAdd}
                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2 ${
                      added ? "bg-emerald-600 text-white" : "bg-white text-[#111] hover:bg-gray-200"
                    }`}
                  >
                    {added ? "Ajouté au devis" : "Ajouter au devis"} {added ? null : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="p-8 overflow-y-auto flex-1 hide-scrollbar">
                <div className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] mb-6">Spécifications clés</div>
                <div className="space-y-4">
                  {product.specs.map(([label, value]: [string, string], i: number) => (
                    <div key={i} className="flex justify-between border-b border-[#DDD] pb-4">
                      <span className="text-[11px] font-bold text-[#666] uppercase tracking-widest">{label}</span>
                      <span className="text-[11px] font-medium text-[#111]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: DANS LA VALISE & FAQ (Blueprint Style) */}
        <section className="border-t border-[#111] grid grid-cols-1 md:grid-cols-2">
          {/* Dans la valise */}
          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-[#111]">
            <h2 className="flex items-center gap-4 text-3xl font-black tracking-tighter uppercase mb-12"><PackageOpen className="w-8 h-8" /> Inclus dans la valise.</h2>
            <ul className="space-y-6">
              {[
                `1x Boîtier ${product.name}`,
                "3x Batteries NPF-Z100",
                "1x Chargeur double rapide",
                "2x Cartes CFexpress Type A (160GB)",
                "1x Lecteur de carte USB-C",
                "1x Cage complète (Top Handle, Baseplate)",
                "1x Valise rigide sur-mesure (Pelican/HPRC)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#111]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* FAQ */}
          <div className="p-12 md:p-24 bg-[#EBEBE6]">
            <h2 className="flex items-center gap-4 text-3xl font-black tracking-tighter uppercase mb-12"><HelpCircle className="w-8 h-8" /> Assistance & FAQ.</h2>
            <div className="space-y-8">
              {[
                { q: "Le matériel est-il assuré ?", a: "Oui, une assurance bris de machine est incluse avec une franchise de 1500€. Une option zéro franchise est disponible sur devis." },
                { q: "Faites-vous des tests caméra ?", a: "Notre salle de test est à votre disposition gratuitement pour vérifier votre liste la veille du départ." },
                { q: "Livrez-vous sur le plateau ?", a: "Nous assurons la livraison par coursier dédié en Île-de-France (optionnel)." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-[#CCC] pb-6">
                  <div className="text-xs font-bold uppercase tracking-widest mb-3">{faq.q}</div>
                  <div className="text-sm font-medium text-[#555] leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUGGESTIONS (Grid Style) */}
        <section className="border-t border-[#111] overflow-hidden">
          <div className="px-6 md:px-12 py-16 flex justify-between items-end border-b border-[#111]">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] break-words">
              Recommandations <br/> Techniques
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3">
            {products.slice(0, 3).map((sugg, i) => (
              <Link href={`/catalogue/${sugg.id}`} key={i} className="group flex flex-col border-r border-b md:border-b-0 border-[#111] last:border-r-0 bg-[#F4F4F0] hover:bg-[#EBEBE6] transition-colors">
                <div className="relative aspect-[4/3] p-12 flex items-center justify-center overflow-hidden border-b border-[#111]">
                  <img 
                    src={sugg.imageUrl} 
                    alt={sugg.model} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-2">{sugg.brand}</div>
                  <h3 className="text-xl font-black tracking-tight uppercase leading-none mb-4">
                    {sugg.model}
                  </h3>
                  <div className="font-black text-lg">{sugg.pricePerDay}€ <span className="text-[9px] font-bold text-[#666] uppercase tracking-widest">/ Jour</span></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] text-[#F4F4F0] px-6 md:px-12 py-12 border-t border-[#333] flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
        <span>© 2026 Vision Adéquate.</span>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
          <Link href="#" className="hover:text-white transition-colors">CGV</Link>
        </div>
      </footer>
    </div>
  );
}
