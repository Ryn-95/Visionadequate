import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const NAV = [
  { label: "Locations", href: "/catalogue" },
  { label: "Prestations", href: "/tarifs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Devis", href: "/devis" },
];

const LOGO = "/assets/RYN/LOGO NOIR ,BLANC, ROUGE/58959_VISION ADEQUATE_AK-01.png";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F4F4F0]">
      {/* CTA */}
      <div className="px-6 md:px-12 pt-20 md:pt-28 pb-16 md:pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 mb-6">
              Vision Adéquate
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              Prêt à<br />tourner.
            </h2>
          </div>
          <Link
            href="/devis"
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#111] px-9 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/80 transition-colors shrink-0"
          >
            Démarrer un devis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Liens */}
      <div className="px-6 md:px-12 py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src={LOGO}
              alt="Vision Adéquate"
              loading="eager"
              decoding="async"
              className="h-12 md:h-16 w-auto object-contain invert mb-7"
            />
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Le juste équipement. La pleine vision. Location de matériel cinéma
              &amp; vidéo, préparé et testé avec une rigueur chirurgicale.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">
              Navigation
            </div>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">
              Contact
            </div>
            <ul className="flex flex-col gap-5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                <span>95140 Garges-lès-Gonesse, France</span>
              </li>
              <li>
                <a
                  href="mailto:contact.visionadequate@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-white/40" />
                  contact.visionadequate@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/visionadequate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 shrink-0 text-white/40" />
                  @visionadequate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <span>© 2026 Vision Adéquate. Tous droits réservés.</span>
          <div className="flex gap-8">
            <a
              href="/assets/RYN/Contrat LOCATION + CGL/Contrat ADÉQUATE .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Contrat de location
            </a>
            <a
              href="/assets/RYN/Contrat LOCATION + CGL/CGL_Location_Audiovisuel_Clauses.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
