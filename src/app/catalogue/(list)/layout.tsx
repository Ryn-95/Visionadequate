import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, catalogueJsonLd } from "@/lib/seo";

/*
  Cible (volumes Semrush France) : « location matériel photo » (390/mois),
  « location appareil photo Paris » (210), « location matériel photo
  professionnel » (170), « location matériel vidéo » (260).
  Le titre est volontairement court : le gabarit ajoute « | Vision Adéquate ».
*/
const TITLE = "Location matériel photo & vidéo professionnel";
const DESCRIPTION =
  "Location d'appareils photo et de matériel vidéo professionnel en Val-d'Oise (95), Paris et Île-de-France : Sony FX3, A7IV, A7S III, drones DJI, stabilisateurs, éclairage et audio. Dès 6€ par jour, matériel testé avant chaque départ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/catalogue" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
        Location de matériel photo et vidéo professionnel en Val-d&apos;Oise,
        Paris et Île-de-France
      </h1>
      {children}
    </>
  );
}
