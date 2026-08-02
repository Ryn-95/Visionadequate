import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, servicesJsonLd } from "@/lib/seo";

/*
  Cible (volumes Semrush France) : « tarif photographe mariage » (880/mois,
  difficulté 13) et la grappe de questions tarifaires « combien coûte un
  photographe de mariage » (~450/mois cumulés, difficulté 0 à 10) — traitée
  en contenu visible dans la FAQ de la page.
*/
const TITLE = "Tarif photographe mariage & vidéaste 2026";
const DESCRIPTION =
  "Combien coûte un photographe de mariage ? Grille tarifaire complète et sans devis préalable : pack mariage photo et vidéo dès 1200€, photo seule dès 500€, vidéo seule dès 700€, session photo dès 120€, contenu UGC dès 140€. Val-d'Oise (95), Paris et Île-de-France.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tarifs",
    type: "website",
  },
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          servicesJsonLd(),
          faqJsonLd(),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Prestations", path: "/tarifs" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
