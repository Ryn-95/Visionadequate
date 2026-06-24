"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trash2, Calendar, Video, User, Building2, Mail, Phone, Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Devis() {
  const [step, setStep] = useState(1);
  const { items, removeItem, totalHT, clearCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    dateDebut: "",
    dateFin: "",
    type: "",
    nom: "",
    societe: "",
    email: "",
    telephone: ""
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "Non précisé";
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const handleGenerateDevis = () => {
    const datesText = formData.dateDebut && formData.dateFin 
      ? `Du ${formatDate(formData.dateDebut)} au ${formatDate(formData.dateFin)}`
      : "Non précisé";

    const message = `*NOUVELLE DEMANDE DE DEVIS* 🎬
    
*PROJET*
Dates : ${datesText}
Type : ${formData.type || "Non précisé"}
Nom : ${formData.nom || "Non précisé"}
Société : ${formData.societe || "Non précisé"}
Email : ${formData.email || "Non précisé"}
Tél : ${formData.telephone || "Non précisé"}

*MATÉRIEL SÉLECTIONNÉ*
${items.map(item => `- ${item.quantity}x ${item.brand} ${item.model} (${item.pricePerDay}€ HT/j)`).join("\n")}

*TOTAL ESTIMÉ (1 Jour)* : ${totalHT}€ HT (+ TVA 20% = ${(totalHT * 1.2).toFixed(2)}€ TTC)`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/33666737410?text=${encodedMessage}`, '_blank');
    
    setStep(3);
    clearCart();
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#F4F4F0] border-b border-[#111]">
        <Link href="/" className="hover:opacity-50 transition-opacity flex items-center">
          <img src="/assets/logo/logo.png" alt="Vision Adéquate" className="h-16 md:h-20 w-auto object-contain invert" />
        </Link>
        <nav className="flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase">
          <Link href="/catalogue" className="hover:opacity-50 transition-opacity">Inventaire</Link>
          <Link href="/devis" className="text-[#111]">Devis ({items.reduce((acc, i) => acc + i.quantity, 0)})</Link>
        </nav>
      </header>

      <main className="pt-[112px] md:pt-[128px] flex flex-col md:flex-row min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-128px)]">
        
        {/* COLONNE GAUCHE - Récapitulatif Matériel */}
        <div className="w-full md:w-1/2 border-r border-[#111] flex flex-col">
          <div className="p-8 md:p-12 border-b border-[#111]">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Matériel <br/> Sélectionné.
            </h1>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-12 text-center text-[#666] text-sm font-bold uppercase tracking-widest">
                Votre sélection est vide.
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex border-b border-[#111] group">
                  <div className="w-32 md:w-48 aspect-square border-r border-[#111] bg-[#EBEBE6] flex items-center justify-center p-6">
                    <img src={item.imageUrl} alt={item.model} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-2">{item.brand}</div>
                        <div className="text-2xl font-black uppercase tracking-tight">{item.model} {item.quantity > 1 ? `(x${item.quantity})` : ''}</div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-[#888] hover:text-[#111] transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-right mt-4">
                      <div className="font-black text-2xl">{item.pricePerDay * item.quantity}€</div>
                      <div className="text-[9px] font-bold text-[#666] uppercase tracking-widest mt-1">/ Jour HT</div>
                    </div>
                  </div>
                </div>
              ))
            )}
            
            <Link href="/catalogue" className="flex items-center justify-center gap-2 w-full p-8 text-center text-[10px] font-bold text-[#666] hover:text-[#111] uppercase tracking-[0.2em] transition-colors">
              <Plus className="w-3 h-3" /> Ajouter un équipement
            </Link>
          </div>
        </div>

        {/* COLONNE DROITE - Formulaire Blueprint */}
        <div className="w-full md:w-1/2 flex flex-col bg-[#111] text-white">
          <div className="p-8 md:p-12 border-b border-[#333]">
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">
              <span className={step >= 1 ? "text-white" : ""}>01. Projet</span>
              <span className="w-4 h-[1px] bg-[#333]"></span>
              <span className={step >= 2 ? "text-white" : ""}>02. Détails</span>
              <span className="w-4 h-[1px] bg-[#333]"></span>
              <span className={step >= 3 ? "text-white" : ""}>03. Validation</span>
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Calendar className="w-3 h-3" /> Date de début</label>
                    <input 
                      type="date" 
                      value={formData.dateDebut}
                      onChange={e => setFormData({...formData, dateDebut: e.target.value})}
                      className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white placeholder:text-[#555] focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:invert" 
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Calendar className="w-3 h-3" /> Date de fin</label>
                    <input 
                      type="date" 
                      value={formData.dateFin}
                      onChange={e => setFormData({...formData, dateFin: e.target.value})}
                      className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white placeholder:text-[#555] focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:invert" 
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Video className="w-3 h-3" /> Type de Production</label>
                  <select 
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" className="text-[#111]">SÉLECTIONNER...</option>
                    <option value="Court-métrage" className="text-[#111]">COURT-MÉTRAGE / FICTION</option>
                    <option value="Publicité" className="text-[#111]">PUBLICITÉ / BRAND CONTENT</option>
                    <option value="Clip musical" className="text-[#111]">CLIP MUSICAL</option>
                    <option value="Documentaire" className="text-[#111]">DOCUMENTAIRE</option>
                  </select>
                </div>
                <div className="pt-8">
                  <button 
                    onClick={() => setStep(2)} 
                    disabled={items.length === 0}
                    className="w-full py-5 bg-white text-[#111] text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Étape suivante <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><User className="w-3 h-3" /> Nom</label>
                    <input 
                      type="text" 
                      value={formData.nom}
                      onChange={e => setFormData({...formData, nom: e.target.value})}
                      className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Building2 className="w-3 h-3" /> Société / Prod</label>
                    <input 
                      type="text" 
                      value={formData.societe}
                      onChange={e => setFormData({...formData, societe: e.target.value})}
                      className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Mail className="w-3 h-3" /> Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors" 
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-[10px] font-bold text-[#888] uppercase tracking-[0.2em] mb-4"><Phone className="w-3 h-3" /> Téléphone</label>
                  <input 
                    type="tel" 
                    value={formData.telephone}
                    onChange={e => setFormData({...formData, telephone: e.target.value})}
                    className="w-full bg-transparent border-b border-[#333] py-3 text-sm font-bold uppercase tracking-widest text-white focus:outline-none focus:border-white transition-colors" 
                  />
                </div>
                <div className="pt-8 flex gap-4">
                  <button onClick={() => setStep(1)} className="px-6 py-5 border border-[#333] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#222] transition-colors">
                    Retour
                  </button>
                  <button 
                    onClick={handleGenerateDevis} 
                    className="flex-1 py-5 bg-white text-[#111] text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                  >
                    Générer WhatsApp <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-16 h-16 border-2 border-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Demande Transmise.</h2>
                <p className="text-sm font-medium text-[#888] max-w-sm">
                  WhatsApp s&apos;est ouvert pour envoyer votre demande. Notre équipe technique étudie la disponibilité de votre liste matériel.
                </p>
                <Link href="/" className="mt-8 inline-block border-b border-[#555] pb-1 text-[10px] font-bold text-[#888] hover:text-white uppercase tracking-[0.2em] transition-colors">
                  Retour au site
                </Link>
              </motion.div>
            )}
          </div>
          
          {/* Total Bar */}
          {step < 3 && (
            <div className="p-8 md:p-12 border-t border-[#333] flex justify-between items-end">
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em]">Estimation (1 Jour)</div>
              <div className="text-right">
                <div className="font-black text-4xl leading-none">{totalHT}€</div>
                <div className="text-[10px] font-bold text-[#888] uppercase tracking-widest mt-1">HT (+ TVA = {(totalHT * 1.2).toFixed(2)}€ TTC)</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
