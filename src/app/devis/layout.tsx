import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Demande de devis — Location de matériel et prestations",
  description:
    "Obtenez un devis gratuit pour la location de matériel photo et vidéo ou une prestation mariage en Val-d'Oise (95) et Île-de-France. Devis PDF généré immédiatement.",
  alternates: { canonical: "/devis" },
  openGraph: {
    title: "Demande de devis — Location de matériel et prestations",
    description:
      "Devis gratuit et immédiat pour la location de matériel photo/vidéo ou une prestation en Val-d'Oise et Île-de-France.",
    url: "/devis",
    type: "website",
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Devis", path: "/devis" },
          ]),
        ]}
      />
      {/*
        Le contenu de la page est rendu côté client (panier en localStorage) :
        ce H1 serveur garantit que Google voit un intitulé pour cette URL.
      */}
      <h1 className="sr-only">
        Demande de devis — location de matériel et prestations photo/vidéo
      </h1>
      {children}
    </>
  );
}
