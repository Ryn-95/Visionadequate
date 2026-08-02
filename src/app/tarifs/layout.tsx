import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Prestations photo & vidéo — Tarifs mariage, événement et UGC",
  description:
    "Photographe et vidéaste de mariage en Val-d'Oise (95) et Île-de-France : pack mariage photo et vidéo dès 1200€, photo seule dès 500€, session photo dès 120€, création de contenu UGC dès 140€.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Prestations photo & vidéo — Tarifs mariage, événement et UGC",
    description:
      "Grille tarifaire transparente : mariage, session photo, vidéo et création de contenu en Val-d'Oise et Île-de-France.",
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
