"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageCircle, User, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/ui/Header";
import { PRICING_FAQ } from "@/lib/seo";
import { Footer } from "@/components/ui/Footer";

const WHATSAPP_NUMBER = "33666737410";


export default function TarifsPage() {
  const [formData, setFormData] = useState({
    prestation: "",
    date: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const choosePrestation = (label: string) => {
    setFormData((f) => ({ ...f, prestation: label }));
    document.getElementById("demande-devis")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const buildMessage = () => {
    let msg = `Bonjour Vision Adéquate, je souhaite faire une demande de devis prestation.\n\n`;
    if (formData.prestation) msg += `🎬 Prestation : ${formData.prestation}\n`;
    if (formData.date) msg += `📅 Date souhaitée : ${new Date(formData.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}\n`;
    if (formData.nom) msg += `👤 Nom : ${formData.nom}\n`;
    if (formData.telephone) msg += `📞 Téléphone : ${formData.telephone}\n`;
    if (formData.email) msg += `✉️ Email : ${formData.email}\n`;
    if (formData.message) msg += `\n📝 Message :\n${formData.message}\n`;
    return msg;
  };

  const isValid = formData.nom.trim() !== "" && (formData.email.trim() !== "" || formData.telephone.trim() !== "");

  const handleWhatsApp = () => {
    if (!isValid) return;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`, "_blank");
    setSent(true);
  };

  const handleEmail = () => {
    if (!isValid) return;
    const subject = encodeURIComponent("Demande de devis prestation - " + (formData.prestation || formData.nom));
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:contact.visionadequate@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      <Header variant="default" />

      <main className="pt-[72px] md:pt-[96px]">
        {/* TOP BAR */}
        <div className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-[#111] text-[10px] font-bold uppercase tracking-widest text-[#555]">
          <Link href="/" className="flex items-center gap-2 hover:text-[#111] transition-colors">
            <ArrowLeft className="w-3 h-3" /> Retour à l&apos;accueil
          </Link>
        </div>

        {/* NOUVELLE SECTION: PRESTATIONS & TARIFS - Minimalist & Unique */}
        <section className="py-24 md:py-32 bg-[#F4F4F0] text-[#111] relative overflow-hidden">

          {/* Arrière-plan décoratif */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
            <div className="absolute top-10 left-10 text-[20vw] font-black leading-none">PRICING</div>
            <div className="absolute bottom-10 right-10 text-[20vw] font-black leading-none">2026</div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

            <div className="mb-24">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-[#111]"></span>
                  <span className="text-[10px] font-bold text-[#111] uppercase tracking-[0.3em]">Investissement</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6 max-w-2xl">
                  Grille tarifaire prestation photo et vidéo.
                </h1>
                <p className="text-[#555] text-base md:text-lg font-medium leading-relaxed max-w-xl">
                  Transparence absolue sur nos prestations. Conçue pour les productions d&apos;excellence, sans compromis sur la qualité.
                </p>
              </div>
            </div>

            {/* Layout en maçonnerie asymétrique */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

              {/* Colonne 1: Standard (Prend 5 colonnes sur 12) */}
              <div className="md:col-span-5 space-y-12">

                {/* Block Photo */}
                <div className="bg-white border border-[#111] p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 bg-[#111] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">Standard</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Photographie</h3>
                  <div className="space-y-2">
                    <button onClick={() => choosePrestation("Photographie — Session 2H (120€)")} className="w-full flex justify-between items-end border-b border-[#EEE] py-3 hover:bg-[#F4F4F0] transition-colors text-left px-2 -mx-2">
                      <span className="text-sm font-medium">Session 2H</span>
                      <span className="text-2xl font-black">120€</span>
                    </button>
                    <button onClick={() => choosePrestation("Photographie — Session 4H (240€)")} className="w-full flex justify-between items-end border-b border-[#EEE] py-3 hover:bg-[#F4F4F0] transition-colors text-left px-2 -mx-2">
                      <span className="text-sm font-medium">Session 4H</span>
                      <span className="text-2xl font-black">240€</span>
                    </button>
                    <button onClick={() => choosePrestation("Photographie — Session 8H (480€)")} className="w-full flex justify-between items-end border-b border-[#EEE] py-3 hover:bg-[#F4F4F0] transition-colors text-left px-2 -mx-2">
                      <span className="text-sm font-medium">Session 8H</span>
                      <span className="text-2xl font-black">480€</span>
                    </button>
                    <div className="flex justify-between items-end pt-4 text-[#666]">
                      <span className="text-sm font-medium">Retouche Post-prod</span>
                      <span className="text-lg font-bold">200€<span className="text-xs font-normal">/jour</span></span>
                    </div>
                  </div>
                </div>

                {/* Block Vidéo */}
                <div className="bg-[#111] text-white border border-[#111] p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 bg-white text-[#111] text-[9px] font-bold uppercase tracking-widest px-3 py-1">Standard</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Vidéographie</h3>
                  <div className="space-y-2">
                    <button onClick={() => choosePrestation("Vidéographie — Session 2H (150€)")} className="w-full flex justify-between items-end border-b border-[#333] py-3 hover:bg-white/5 transition-colors text-left px-2 -mx-2">
                      <span className="text-sm font-medium text-[#CCC]">Session 2H</span>
                      <span className="text-2xl font-black">150€</span>
                    </button>
                    <button onClick={() => choosePrestation("Vidéographie — Session 4H (300€)")} className="w-full flex justify-between items-end border-b border-[#333] py-3 hover:bg-white/5 transition-colors text-left px-2 -mx-2">
                      <span className="text-sm font-medium text-[#CCC]">Session 4H</span>
                      <span className="text-2xl font-black">300€</span>
                    </button>
                    <button onClick={() => choosePrestation("Vidéographie — Session 8H (600€)")} className="w-full flex justify-between items-end border-b border-[#333] py-3 hover:bg-white/5 transition-colors text-left px-2 -mx-2">
                      <span className="text-sm font-medium text-[#CCC]">Session 8H</span>
                      <span className="text-2xl font-black">600€</span>
                    </button>
                    <div className="flex justify-between items-end pt-4 text-[#888]">
                      <span className="text-sm font-medium">Montage & Colorimétrie</span>
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
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Mariage</h3>
                  <p className="text-[#666] text-sm mb-10 font-medium">L&apos;expérience complète : Photo & Vidéo simultanées.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <button onClick={() => choosePrestation("Mariage — Pack complet 4H (1200€)")} className="border border-[#111] p-6 hover:bg-[#111] hover:text-white transition-colors group text-left">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-4 group-hover:text-[#888]">Pack 4H</div>
                      <div className="text-3xl font-black mb-2">1200€</div>
                      <div className="text-xs font-medium text-[#666] group-hover:text-[#CCC]">Couverture essentielle</div>
                    </button>
                    <button onClick={() => choosePrestation("Mariage — Pack complet 8H (1700€)")} className="border border-[#111] bg-[#111] text-white p-6 relative text-left hover:bg-[#222] transition-colors">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#111] text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-[#111]">Populaire</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-4 text-[#888]">Pack 8H</div>
                      <div className="text-3xl font-black mb-2">1700€</div>
                      <div className="text-xs font-medium text-[#CCC]">Couverture optimale</div>
                    </button>
                    <button onClick={() => choosePrestation("Mariage — Pack complet 12H (2820€)")} className="border border-[#111] p-6 hover:bg-[#111] hover:text-white transition-colors group text-left">
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-4 group-hover:text-[#888]">Pack 12H</div>
                      <div className="text-3xl font-black mb-2">2820€</div>
                      <div className="text-xs font-medium text-[#666] group-hover:text-[#CCC]">Couverture totale</div>
                    </button>
                  </div>
                </div>

                {/* Grid interne pour les autres prestations Mariage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">

                  {/* Photo Seule Mariage */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Mariage : Photo Seule</h4>
                    <ul className="space-y-1">
                      <li><button onClick={() => choosePrestation("Mariage — Photo seule 4H (500€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prestation 4H</span> <span className="font-black text-lg text-[#111]">500€</span></button></li>
                      <li><button onClick={() => choosePrestation("Mariage — Photo seule 8H (700€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prestation 8H</span> <span className="font-black text-lg text-[#111]">700€</span></button></li>
                      <li><button onClick={() => choosePrestation("Mariage — Photo seule 12H (1120€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prestation 12H</span> <span className="font-black text-lg text-[#111]">1120€</span></button></li>
                    </ul>
                  </div>

                  {/* Vidéo Seule Mariage */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Mariage : Vidéo Seule</h4>
                    <ul className="space-y-1">
                      <li><button onClick={() => choosePrestation("Mariage — Vidéo seule 4H (700€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prestation 4H</span> <span className="font-black text-lg text-[#111]">700€</span></button></li>
                      <li><button onClick={() => choosePrestation("Mariage — Vidéo seule 8H (1000€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prestation 8H</span> <span className="font-black text-lg text-[#111]">1000€</span></button></li>
                      <li><button onClick={() => choosePrestation("Mariage — Vidéo seule 12H (1700€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prestation 12H</span> <span className="font-black text-lg text-[#111]">1700€</span></button></li>
                    </ul>
                  </div>

                  {/* Création de contenu Mariage */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Création Contenu (UGC)</h4>
                    <ul className="space-y-1">
                      <li><button onClick={() => choosePrestation("Création de contenu (UGC) — Format 4H (140€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Format 4H</span> <span className="font-black text-lg text-[#111]">140€</span></button></li>
                      <li><button onClick={() => choosePrestation("Création de contenu (UGC) — Format 8H (280€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Format 8H</span> <span className="font-black text-lg text-[#111]">280€</span></button></li>
                      <li><button onClick={() => choosePrestation("Création de contenu (UGC) — Format 12H (420€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Format 12H</span> <span className="font-black text-lg text-[#111]">420€</span></button></li>
                    </ul>
                  </div>

                  {/* Extras */}
                  <div className="space-y-4 bg-[#EBEBE6] p-6 border border-[#111]">
                    <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-[0.2em] border-b border-[#111] pb-4">Services Additionnels</h4>
                    <ul className="space-y-1">
                      <li><button onClick={() => choosePrestation("Service additionnel — Prise Drone (150€)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Prise Drone</span> <span className="font-black text-lg text-[#111]">150€</span></button></li>
                      <li><button onClick={() => choosePrestation("Mariage — Prise & impression cliché (sur devis)")} className="w-full flex justify-between items-center text-sm font-medium py-2 px-2 -mx-2 hover:bg-white transition-colors text-left"><span className="text-[#555]">Mariage : Prise & impression cliché</span> <span className="font-black text-sm text-[#111] uppercase tracking-widest">Sur devis</span></button></li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-[#111] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] max-w-lg">
                Un projet en tête ?
              </h2>
              <a href="#demande-devis" className="group flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors shrink-0">
                Démarrer un devis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </section>

        {/*
          SECTION: FAQ TARIFAIRE
          Répond mot pour mot aux questions les plus recherchées sur le prix
          d'un photographe de mariage — contenu visible (et non masqué), seul
          format réellement pris en compte par Google.
        */}
        <section className="border-t border-[#111] px-6 md:px-12 py-24 md:py-32 bg-[#EBEBE6]">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#111]"></span>
              <span className="text-[10px] font-bold text-[#111] uppercase tracking-[0.3em]">
                Questions fréquentes
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-14 max-w-2xl">
              Combien coûte un photographe de mariage&nbsp;?
            </h2>

            <div className="flex flex-col">
              {PRICING_FAQ.map((item, i) => (
                <div
                  key={i}
                  className="border-t border-[#111] py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                >
                  <h3 className="md:col-span-5 text-base md:text-lg font-black uppercase tracking-tight leading-tight">
                    {item.q}
                  </h3>
                  <p className="md:col-span-7 text-sm md:text-base font-medium text-[#555] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: DEMANDE DE DEVIS — fonctionnelle, indépendante du panier matériel */}
        <section id="demande-devis" className="border-t border-[#111] bg-[#111] text-white px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 border-2 border-emerald-500 rounded-full flex items-center justify-center mb-8 mx-auto">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Demande envoyée.</h2>
                <p className="text-sm font-medium text-[#888] max-w-md mx-auto">
                  Merci ! Nous revenons vers vous rapidement pour finaliser votre devis prestation.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 inline-block border-b border-[#555] pb-1 text-[10px] font-bold text-[#888] hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <>
                <div className="mb-14 max-w-xl">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <span className="w-12 h-[2px] bg-white"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#888]">Demande de devis</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                    Un projet en tête ?
                  </h2>
                  <p className="text-[#888] text-sm md:text-base font-medium leading-relaxed">
                    Sélectionnez une prestation ci-dessus ou décrivez votre besoin. Nous répondons sous 24h.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4">Prestation souhaitée</label>
                    <input
                      type="text"
                      value={formData.prestation}
                      onChange={(e) => setFormData({ ...formData, prestation: e.target.value })}
                      placeholder="Ex : Mariage — Pack complet 8H"
                      className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white placeholder:text-[#555] placeholder:normal-case placeholder:tracking-normal placeholder:font-medium focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><User className="w-3 h-3" /> Nom</label>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Calendar className="w-3 h-3" /> Date souhaitée</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white placeholder:text-[#555] focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:invert"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Mail className="w-3 h-3" /> Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Phone className="w-3 h-3" /> Téléphone</label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4">Message (optionnel)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      placeholder="Détails, lieu, contexte du projet..."
                      className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-medium text-white placeholder:text-[#555] focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {!isValid && (formData.nom || formData.email || formData.telephone) && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                      Merci de renseigner votre nom et un email ou un téléphone.
                    </p>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleWhatsApp}
                      disabled={!isValid}
                      className="flex-1 py-5 bg-[#25D366] text-[#111] text-xs font-bold uppercase tracking-widest hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Envoyer via WhatsApp <MessageCircle className="w-4 h-4 shrink-0" />
                    </button>
                    <button
                      onClick={handleEmail}
                      disabled={!isValid}
                      className="flex-1 py-5 bg-white text-[#111] text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Envoyer par email <Mail className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
