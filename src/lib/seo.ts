import { products, type Product } from "@/data/products";
import { fullPrice, formatEuro } from "@/lib/pricing";

// Hôte canonique : visionadequate.fr redirige (308) vers www.visionadequate.fr
export const SITE_URL = "https://www.visionadequate.fr";
export const SITE_NAME = "Vision Adéquate";
export const SITE_EMAIL = "contact.visionadequate@gmail.com";
export const SITE_INSTAGRAM = "https://www.instagram.com/visionadequate";
export const SITE_LOCALITY = "Garges-lès-Gonesse";
export const SITE_POSTAL_CODE = "95140";

/** Zones desservies — utilisées pour le référencement local. */
export const AREAS_SERVED = [
  "Garges-lès-Gonesse",
  "Sarcelles",
  "Villiers-le-Bel",
  "Val-d'Oise",
  "Île-de-France",
  "Paris",
];

export const url = (path = "") => `${SITE_URL}${path}`;

/** Prix public affiché sur le site (base + 20 % de frais d'agence). */
export const displayPrice = (p: Product) => fullPrice(p.pricePerDay);

const CATEGORY_LABELS: Record<Product["category"], string> = {
  cameras: "Caméra",
  objectifs: "Objectif",
  eclairage: "Éclairage",
  stabilisation: "Stabilisateur",
  audio: "Audio",
  drones: "Drone",
  moniteurs: "Moniteur",
  accessoires: "Accessoire",
};

export const categoryLabel = (c: Product["category"]) => CATEGORY_LABELS[c];

export const findProduct = (id: string) => products.find((p) => p.id === id);

/**
 * Fiche produit : titre et description uniques, construits autour de
 * l'intention de recherche réelle ("louer <modèle> <zone>").
 */
export function productSeo(p: Product) {
  const name = `${p.brand} ${p.model}`;
  const price = formatEuro(displayPrice(p));
  return {
    name,
    title: `Location ${name} — ${price}€/jour en Val-d'Oise (95)`,
    description: `Louez le ${name} (${p.subcategory}) chez Vision Adéquate à ${SITE_LOCALITY}. ${p.specs.join(
      " · "
    )}. ${price}€ par jour, matériel testé avant chaque départ. Devis immédiat, livraison en Île-de-France.`,
    price,
  };
}

type JsonLd = Record<string, unknown>;

/**
 * Fiche établissement. Volontairement limitée aux informations vérifiées :
 * pas de téléphone ni de numéro de rue publiés, donc non déclarés ici.
 */
export function localBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PhotographyBusiness"],
    "@id": url("/#business"),
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    image: url("/opengraph-image"),
    logo: url("/assets/RYN/LOGO NOIR ,BLANC, ROUGE/58959_VISION ADEQUATE_AK-01.png"),
    description:
      "Location de matériel photo et vidéo professionnel et prestations photo, vidéo et mariage en Val-d'Oise et en Île-de-France.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      postalCode: SITE_POSTAL_CODE,
      addressRegion: "Val-d'Oise",
      addressCountry: "FR",
    },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    sameAs: [SITE_INSTAGRAM],
    priceRange: "€€",
    knowsAbout: [
      "location de matériel vidéo",
      "location de caméra",
      "photographie de mariage",
      "vidéaste de mariage",
      "création de contenu UGC",
    ],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": url("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-FR",
    publisher: { "@id": url("/#business") },
  };
}

export function productJsonLd(p: Product): JsonLd {
  const { name, description } = productSeo(p);
  const price = displayPrice(p);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    sku: p.id,
    category: categoryLabel(p.category),
    image: url(encodeURI(p.imageUrl)),
    brand: { "@type": "Brand", name: p.brand },
    offers: {
      "@type": "Offer",
      url: url(`/catalogue/${p.id}`),
      price,
      priceCurrency: "EUR",
      availability: p.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      businessFunction: "https://purl.org/goodrelations/v1#LeaseOut",
      seller: { "@id": url("/#business") },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price,
        priceCurrency: "EUR",
        unitCode: "DAY",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "DAY",
        },
      },
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

/** Catalogue complet, exposé en liste pour aider Google à découvrir les fiches. */
export function catalogueJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catalogue de location — matériel photo et vidéo",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: url(`/catalogue/${p.id}`),
      name: `${p.brand} ${p.model}`,
    })),
  };
}

/** Prestations vendues, alignées sur la grille tarifaire publiée. */
const SERVICES = [
  { name: "Photographie de mariage", price: 500, type: "Photographie" },
  { name: "Vidéaste de mariage", price: 700, type: "Vidéographie" },
  { name: "Mariage — pack photo et vidéo", price: 1200, type: "Mariage" },
  { name: "Session photo", price: 120, type: "Photographie" },
  { name: "Session vidéo", price: 150, type: "Vidéographie" },
  { name: "Création de contenu UGC", price: 140, type: "Création de contenu" },
];

export function servicesJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Prestations photo et vidéo",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        serviceType: s.type,
        provider: { "@id": url("/#business") },
        areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
        offers: {
          "@type": "Offer",
          price: s.price,
          priceCurrency: "EUR",
          url: url("/tarifs"),
        },
      },
    })),
  };
}
