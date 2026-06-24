"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trash2, Calendar, Video, User, Building2, Mail, Phone, Plus, Download, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/ui/Header";

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

  const getWhatsAppMessage = () => {
    let msg = `Bonjour Vision Adéquate, je souhaite vous envoyer une demande de devis.\n\n`;
    if (formData.nom || formData.societe) {
      msg += `👤 Client : ${formData.nom} ${formData.societe ? `(${formData.societe})` : ''}\n`;
    }
    if (formData.dateDebut && formData.dateFin) {
      msg += `📅 Dates : du ${formatDate(formData.dateDebut)} au ${formatDate(formData.dateFin)}\n`;
    }
    msg += `\n🎥 Matériel sélectionné :\n`;
    items.forEach(i => {
      msg += `- ${i.quantity}x ${i.model}\n`;
    });
    return encodeURIComponent(msg);
  };

  const handleGenerateDevis = async () => {
    // Dynamically import jsPDF and autoTable to avoid SSR issues
    const jsPDF = (await import("jspdf")).default;
    const autoTable = (await import("jspdf-autotable")).default;

    const doc = new jsPDF();
    
    // Convert logo image to base64
    const logoUrl = '/assets/logo/logo.png';
    const logoImg = new Image();
    logoImg.src = logoUrl;
    
    await new Promise((resolve) => {
      logoImg.onload = resolve;
    });

    const canvas = document.createElement('canvas');
    canvas.width = logoImg.width;
    canvas.height = logoImg.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Invert the colors for the PDF (black logo on white bg instead of white on black)
      ctx.drawImage(logoImg, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        // Only invert if it's not transparent
        if (data[i + 3] > 0) {
          data[i] = 255 - data[i];     // red
          data[i + 1] = 255 - data[i + 1]; // green
          data[i + 2] = 255 - data[i + 2]; // blue
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
    const logoBase64 = canvas.toDataURL('image/png');

    // Add Company Logo/Header
    doc.addImage(logoBase64, 'PNG', 14, 15, 30, 30 * (logoImg.height / logoImg.width));
    
    doc.setFontSize(22);
    doc.text("VISION ADEQUATE", 50, 25);
    doc.setFontSize(10);
    doc.text("12 Rue de la Précision", 50, 32);
    doc.text("75011 Paris, France", 50, 37);
    doc.text("contact@vision-adequate.fr", 50, 42);

    // Add Client Info
    doc.setFontSize(14);
    doc.text("DEMANDE DE DEVIS", 14, 60);
    doc.setFontSize(10);
    doc.text(`Nom : ${formData.nom || "Non précisé"}`, 14, 70);
    doc.text(`Société : ${formData.societe || "Non précisé"}`, 14, 76);
    doc.text(`Email : ${formData.email || "Non précisé"}`, 14, 82);
    doc.text(`Téléphone : ${formData.telephone || "Non précisé"}`, 14, 88);
    
    doc.text(`Date de début : ${formatDate(formData.dateDebut)}`, 120, 70);
    doc.text(`Date de fin : ${formatDate(formData.dateFin)}`, 120, 76);
    doc.text(`Type de production : ${formData.type || "Non précisé"}`, 120, 82);

    // Add Table
    const tableColumn = ["Description", "Marque", "Quantité", "Prix Unitaire HT", "Total HT"];
    const tableRows = items.map(item => [
      item.model,
      item.brand,
      item.quantity.toString(),
      `${item.pricePerDay} €`,
      `${item.pricePerDay * item.quantity} €`
    ]);

    autoTable(doc, {
      startY: 100,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      headStyles: { fillColor: [17, 17, 17] }
    });

    const finalY = (doc as any).lastAutoTable.finalY || 100;
    
    // Calculate total duration if dates are provided
    let durationMultiplier = 1;
    let durationText = "(1 jour)";
    if (formData.dateDebut && formData.dateFin) {
      const start = new Date(formData.dateDebut);
      const end = new Date(formData.dateFin);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
      if (diffDays > 0) {
        durationMultiplier = diffDays;
        durationText = `(${diffDays} jours)`;
      }
    }

    const finalTotalHT = totalHT * durationMultiplier;
    
    doc.setFontSize(12);
    doc.text(`Total HT ${durationText} : ${finalTotalHT} €`, 120, finalY + 15);
    doc.text(`TVA (20%) : ${(finalTotalHT * 0.2).toFixed(2)} €`, 120, finalY + 22);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Total TTC estimé : ${(finalTotalHT * 1.2).toFixed(2)} €`, 120, finalY + 32);

    // Save the PDF
    doc.save(`Devis_Vision_Adequate_${formData.nom || "Client"}.pdf`);

    // Optionally open mail client
    const subject = encodeURIComponent("Nouvelle demande de devis - " + (formData.societe || formData.nom || "Client"));
    const body = encodeURIComponent(`Bonjour l'équipe Vision Adéquate,\n\nVeuillez trouver ci-joint ma demande de devis en PDF que je viens de générer sur votre site.\n\nMerci,\n${formData.nom}`);
    window.open(`mailto:contact@vision-adequate.fr?subject=${subject}&body=${body}`, '_blank');
    
    setStep(3);
    clearCart();
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      <Header variant="default" />

      <main className="pt-[72px] md:pt-[96px] flex flex-col md:flex-row min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-96px)]">
        
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="pt-8 flex flex-col md:flex-row gap-4">
                  <button onClick={() => setStep(1)} className="px-6 py-5 border border-[#333] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#222] transition-colors">
                    Retour
                  </button>
                  <div className="flex-1 flex flex-col xl:flex-row gap-4">
                    <button 
                      onClick={handleGenerateDevis} 
                      className="flex-1 py-5 bg-white text-[#111] text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                    >
                      PDF <Download className="w-4 h-4 shrink-0" />
                    </button>
                    <a 
                      href={`https://wa.me/33666737410?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setStep(3);
                        setTimeout(() => clearCart(), 1000);
                      }}
                      className="flex-1 py-5 bg-[#25D366] text-[#111] text-xs font-bold uppercase tracking-widest hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-3"
                    >
                      WhatsApp <MessageCircle className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-16 h-16 border-2 border-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Demande envoyée.</h2>
                <p className="text-sm font-medium text-[#888] max-w-sm">
                  Votre demande a bien été traitée. Si vous avez choisi le PDF, n&apos;oubliez pas de nous l&apos;envoyer par mail !
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
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[0.2em]">Estimation {
                formData.dateDebut && formData.dateFin ? 
                `(${Math.ceil(Math.abs(new Date(formData.dateFin).getTime() - new Date(formData.dateDebut).getTime()) / (1000 * 60 * 60 * 24)) + 1} jours)` : 
                "(1 Jour)"
              }</div>
              <div className="text-right">
                <div className="font-black text-4xl leading-none">
                  {totalHT * (formData.dateDebut && formData.dateFin ? 
                    (Math.ceil(Math.abs(new Date(formData.dateFin).getTime() - new Date(formData.dateDebut).getTime()) / (1000 * 60 * 60 * 24)) + 1) : 
                    1)}€
                </div>
                <div className="text-[10px] font-bold text-[#888] uppercase tracking-widest mt-1">HT (+ TVA = {(totalHT * 1.2 * (formData.dateDebut && formData.dateFin ? 
                    (Math.ceil(Math.abs(new Date(formData.dateFin).getTime() - new Date(formData.dateDebut).getTime()) / (1000 * 60 * 60 * 24)) + 1) : 
                    1)).toFixed(2)}€ TTC)</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
