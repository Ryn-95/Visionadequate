import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio — Photo & vidéo de mariage et automobile",
  description:
    "Nos réalisations photo et vidéo : mariages en Val-d'Oise et Île-de-France, shootings automobile et création de contenu, capturés avec le matériel que nous louons chaque jour.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Photo & vidéo de mariage et automobile",
    description:
      "Mariages, shootings automobile et création de contenu réalisés par Vision Adéquate en Val-d'Oise et Île-de-France.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
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
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
