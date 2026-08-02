import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, catalogueJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Catalogue — Location de caméras, objectifs et drones",
  description:
    "Louez du matériel photo et vidéo professionnel en Val-d'Oise (95) : Sony FX3, A7IV, A7S III, drones DJI, stabilisateurs RS3, éclairage Godox et audio. Dès 6€ par jour.",
  alternates: { canonical: "/catalogue" },
  openGraph: {
    title: "Catalogue — Location de caméras, objectifs et drones",
    description:
      "Sony FX3, A7IV, A7S III, drones DJI, stabilisateurs, éclairage et audio en location en Val-d'Oise et Île-de-France. Dès 6€ par jour.",
    url: "/catalogue",
    type: "website",
  },
};

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          catalogueJsonLd(),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Locations", path: "/catalogue" },
          ]),
        ]}
      />
      {/*
        La page n'a aucun titre visible : ce H1 lui donne un intitulé pour
        Google et pour les lecteurs d'écran, sans modifier le rendu.
      */}
      <h1 className="sr-only">
        Location de matériel photo et vidéo en Val-d&apos;Oise et Île-de-France
      </h1>
      {children}
    </>
  );
}
