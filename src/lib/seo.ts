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

/**
 * FAQ tarifaire affichée sur /tarifs.
 *
 * Cible la grappe de questions « combien coûte un photographe de mariage »
 * (~450 recherches/mois cumulées en France, difficulté 0 à 10). Les montants
 * reprennent la grille publiée sur la même page — toute modification de prix
 * doit être répercutée ici.
 *
 * Source unique : consommée à la fois par l'affichage et par le JSON-LD, pour
 * éviter que le texte visible et les données structurées divergent.
 */
export const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "Combien coûte un photographe de mariage ?",
    a: "En France, comptez généralement entre 1 200€ et 2 500€ pour une couverture complète. Chez Vision Adéquate, la photographie de mariage seule démarre à 500€ pour 4 heures, 700€ pour 8 heures et 1 120€ pour 12 heures. Ces montants sont fermes et affichés publiquement : il n'y a pas de devis préalable pour connaître le prix.",
  },
  {
    q: "Quel est le prix d'un vidéaste pour un mariage ?",
    a: "La vidéo de mariage seule est facturée 700€ pour 4 heures, 1 000€ pour 8 heures et 1 700€ pour 12 heures. La vidéo est plus chère que la photo à durée égale car elle demande davantage de matériel (stabilisateur, son, éclairage) et surtout un temps de montage et d'étalonnage après l'événement.",
  },
  {
    q: "Faut-il prendre la photo et la vidéo ensemble ?",
    a: "Le pack photo et vidéo simultanées coûte 1 200€ pour 4 heures, 1 700€ pour 8 heures et 2 820€ pour 12 heures — soit exactement le prix des deux prestations réservées séparément, sans surcoût de coordination. L'intérêt n'est donc pas financier mais pratique : une seule équipe habituée à travailler ensemble, qui ne se gêne pas pendant les moments clés, et une vraie cohérence visuelle entre les photos et le film.",
  },
  {
    q: "Comment choisir son photographe de mariage ?",
    a: "Regardez un reportage complet et pas seulement les meilleures images d'un portfolio : c'est la régularité sur toute une journée qui compte. Vérifiez que le style correspond au vôtre, que le tarif est clair et écrit, et que le matériel est professionnel et doublé en cas de panne. Notre portfolio présente des mariages entiers, du préparatif à la soirée.",
  },
  {
    q: "Proposez-vous des prises de vue par drone ?",
    a: "Oui, la prise de vue par drone est proposée en service additionnel à 150€, en complément d'une prestation photo ou vidéo. Elle permet des plans d'ensemble du lieu de réception et des séquences aériennes des moments clés.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: "Nous sommes basés à Garges-lès-Gonesse (95140) et intervenons dans tout le Val-d'Oise — Sarcelles, Villiers-le-Bel, Cergy, Argenteuil — ainsi qu'à Paris et en Île-de-France. Pour un mariage en dehors de cette zone, indiquez-nous le lieu dans votre demande.",
  },
  {
    q: "Comment réserver une date ?",
    a: "Envoyez votre demande via le formulaire de la page, par e-mail ou par WhatsApp en précisant la date et le lieu. La date est bloquée une fois le devis validé. Les dates de printemps et d'été partant en premier, mieux vaut s'y prendre le plus tôt possible.",
  },
];

export function faqJsonLd(
  entries: { q: string; a: string }[] = PRICING_FAQ
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.q,
      acceptedAnswer: { "@type": "Answer", text: e.a },
    })),
  };
}

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
