const fs = require('fs');

// 1. Generate new products for products.ts
const newProducts = [
  {
    id: 'carte-sd-angelbird-128',
    slug: 'carte-sd-angelbird-128',
    brand: 'Angelbird',
    model: 'Carte SD 128GB',
    category: 'accessoires',
    subcategory: 'Stockage',
    specs: ['128GB', 'V90', '300MB/s'],
    pricePerDay: 25,
    available: true,
    imageUrl: '/assets/MATERIELS 2/CARTE SD/1 - ANGELBIRD 128GB.JPG',
  },
  {
    id: 'dji-mic-2',
    slug: 'dji-mic-2',
    brand: 'DJI',
    model: 'Mic 2',
    category: 'audio',
    subcategory: 'Microphone sans fil',
    specs: ['2 TX + 1 RX', '32-bit Float', '250m portée'],
    pricePerDay: 35,
    available: true,
    badge: 'NOUVEAU',
    imageUrl: '/assets/MATERIELS 2/DJI Mic 2/1 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement.jpg',
  },
  {
    id: 'godox-flash-v1-pro-s',
    slug: 'godox-flash-v1-pro-s',
    brand: 'Godox',
    model: 'Flash V1 PRO S',
    category: 'eclairage',
    subcategory: 'Flash',
    specs: ['Tête ronde', 'TTL', 'Batterie Li-ion'],
    pricePerDay: 20,
    available: true,
    imageUrl: '/assets/MATERIELS 2/Flash V1 PRO S/1 - Flash V1 PRO S .jpg',
  },
  {
    id: 'godox-x3-s',
    slug: 'godox-x3-s',
    brand: 'Godox',
    model: 'X3-S Déclencheur',
    category: 'eclairage',
    subcategory: 'Déclencheur',
    specs: ['Sony', 'Écran tactile', '2.4GHz'],
    pricePerDay: 10,
    available: true,
    imageUrl: '/assets/MATERIELS 2/Godox X3-S/1 - Godox X3-S Déclencheur de Flash.jpg',
  },
  {
    id: 'micro-cravate',
    slug: 'micro-cravate',
    brand: 'Générique',
    model: 'Micro Cravate',
    category: 'audio',
    subcategory: 'Microphone',
    specs: ['Omnidirectionnel', 'Jack 3.5mm'],
    pricePerDay: 5,
    available: true,
    imageUrl: '/assets/MATERIELS 2/MicroCravate/1 - MicroCravate.jpg',
  }
];

let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');

// Check if already added
if (!productsContent.includes('carte-sd-angelbird-128')) {
  const arrayEndIndex = productsContent.lastIndexOf('];');
  if (arrayEndIndex !== -1) {
    let toInsert = '';
    for (const p of newProducts) {
      toInsert += `,\n  {\n    id: '${p.id}',\n    slug: '${p.slug}',\n    brand: '${p.brand}',\n    model: '${p.model}',\n    category: '${p.category}',\n    subcategory: '${p.subcategory}',\n    specs: ${JSON.stringify(p.specs)},\n    pricePerDay: ${p.pricePerDay},\n    available: ${p.available},\n${p.badge ? `    badge: '${p.badge}',\n` : ''}    imageUrl: '${p.imageUrl}'\n  }`;
    }
    productsContent = productsContent.substring(0, arrayEndIndex) + toInsert + '\n];\n';
    fs.writeFileSync('src/data/products.ts', productsContent);
  }
}

// 2. Update page.tsx to add all missing products to PRODUCTS_DATA
let pageContent = fs.readFileSync('src/app/catalogue/[id]/page.tsx', 'utf8');

const additionalData = `
  "filtre-nd-freewell": {
    name: "Filtre ND Variable", brand: "Freewell", price: "10", status: "Disponible",
    images: ["/assets/MATERIELS 2/Freewel Filtre Nd/Freewel.jpg", "/assets/MATERIELS 2/Freewel Filtre Nd/3 - freewel .jpg"],
    desc: "Filtre ND variable de haute qualité pour contrôler l'exposition en vidéo.",
    specs: [["Type", "Variable"], ["Densité", "ND8 à ND1000"], ["Fixation", "Magnétique"]]
  },
  "trepied-joby": {
    name: "Trépied Joby", brand: "Joby", price: "5", status: "Disponible",
    images: ["/assets/MATERIELS 2/Trépied/1 Joby .jpg", "/assets/MATERIELS 2/Trépied/2 - Joby.jpg", "/assets/MATERIELS 2/Trépied/3 - Joby.jpg"],
    desc: "Trépied flexible et robuste, idéal pour les vlogs et les installations créatives.",
    specs: [["Type", "Flexible"], ["Poids max", "3 kg"], ["Matériau", "Plastique ABS / Métal"]]
  },
  "cage-sony-a7iv": {
    name: "Cage A7IV / A7S3", brand: "SmallRig", price: "10", status: "Disponible",
    images: ["/assets/MATERIELS 2/SmallRight Cage/1 - SmallRight Cage A7IV, A7S3.jpg", "/assets/MATERIELS 2/SmallRight Cage/2 - SmallRight Cage .jpg", "/assets/MATERIELS 2/SmallRight Cage/3 - SmallRight Cage .jpg"],
    desc: "Cage de protection et de montage pour Sony A7IV et A7S III. Offre de multiples points de fixation.",
    specs: [["Matériau", "Alliage d'aluminium"], ["Compatibilité", "Sony A7IV, A7S III"], ["Fixations", "1/4\\"", "3/8\\"", "Griffe froide"]]
  },
  "carte-sd-128": {
    name: "Carte SD Sony 128GB", brand: "Sony", price: "30", status: "Disponible",
    images: ["/assets/materiels/11-sd-iii-.jpg"],
    desc: "Carte mémoire SDXC ultra-rapide pour l'enregistrement vidéo 4K et 8K.",
    specs: [["Capacité", "128 GB"], ["Vitesse lecture", "300 MB/s"], ["Classe", "V90"]]
  },
  "carte-sd-angelbird-128": {
    name: "Carte SD Angelbird 128GB", brand: "Angelbird", price: "25", status: "Disponible",
    images: ["/assets/MATERIELS 2/CARTE SD/1 - ANGELBIRD 128GB.JPG"],
    desc: "Carte mémoire SDXC V90 haute performance, conçue pour les flux de travail vidéo exigeants.",
    specs: [["Capacité", "128 GB"], ["Vitesse", "300 MB/s"], ["Classe", "V90"]]
  },
  "dji-mic-2": {
    name: "DJI Mic 2", brand: "DJI", price: "35", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/DJI Mic 2/1 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement.jpg",
      "/assets/MATERIELS 2/DJI Mic 2/2 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement .jpg",
      "/assets/MATERIELS 2/DJI Mic 2/3 - DJI Mic 2 Système audfio sans fil (2 TX + 1 RX) + Étui de charge + Sac de rangement..jpg"
    ],
    desc: "Système de microphone sans fil professionnel avec enregistrement interne 32-bit float.",
    specs: [["Émetteurs", "2"], ["Récepteur", "1"], ["Enregistrement", "32-bit Float interne"], ["Portée", "250m"]]
  },
  "godox-flash-v1-pro-s": {
    name: "Godox Flash V1 PRO S", brand: "Godox", price: "20", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/Flash V1 PRO S/1 - Flash V1 PRO S .jpg",
      "/assets/MATERIELS 2/Flash V1 PRO S/2 - Flash V1 PRO S .jpg",
      "/assets/MATERIELS 2/Flash V1 PRO S/3 - Flash V1 PRO S .jpg"
    ],
    desc: "Flash cobra professionnel à tête ronde pour Sony. Éclairage doux et uniforme.",
    specs: [["Tête", "Ronde"], ["Compatibilité", "Sony TTL"], ["Batterie", "Li-ion rechargeable"]]
  },
  "godox-x3-s": {
    name: "Godox X3-S", brand: "Godox", price: "10", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/Godox X3-S/1 - Godox X3-S Déclencheur de Flash.jpg",
      "/assets/MATERIELS 2/Godox X3-S/2 - Godox X3-S Déclencheur de Flash...jpg"
    ],
    desc: "Déclencheur de flash sans fil ultra-compact avec écran tactile OLED.",
    specs: [["Compatibilité", "Sony"], ["Écran", "Tactile OLED"], ["Fréquence", "2.4 GHz"]]
  },
  "micro-cravate": {
    name: "Micro Cravate", brand: "Générique", price: "5", status: "Disponible",
    images: [
      "/assets/MATERIELS 2/MicroCravate/1 - MicroCravate.jpg",
      "/assets/MATERIELS 2/MicroCravate/2 - MicroCravate.jpg"
    ],
    desc: "Microphone cravate filaire pour des prises de son discrètes et claires.",
    specs: [["Type", "Omnidirectionnel"], ["Connecteur", "Jack 3.5mm"]]
  }
`;

// Also we need to fix the fallback to sony-fx3 in page.tsx:
// "const product = PRODUCTS_DATA[params.id] || PRODUCTS_DATA["sony-fx3"];"

if (!pageContent.includes('filtre-nd-freewell')) {
  const dataEndIndex = pageContent.indexOf('};\n\nexport default function ProductPage');
  if (dataEndIndex !== -1) {
    pageContent = pageContent.substring(0, dataEndIndex) + ',\n' + additionalData + '\n' + pageContent.substring(dataEndIndex);
  }
}

const fallbackSearch = `const product = PRODUCTS_DATA[params.id] || PRODUCTS_DATA["sony-fx3"];`;
const fallbackReplace = `
  const realProduct = products.find(p => p.id === params.id);
  const product = PRODUCTS_DATA[params.id] || (realProduct ? {
    name: realProduct.model,
    brand: realProduct.brand,
    price: realProduct.pricePerDay.toString(),
    status: realProduct.available ? "Disponible" : "Indisponible",
    images: [realProduct.imageUrl],
    desc: "Matériel professionnel de haute qualité.",
    specs: realProduct.specs.map(s => ["Spec", s])
  } : PRODUCTS_DATA["sony-fx3"]);
`;
pageContent = pageContent.replace(fallbackSearch, fallbackReplace);

fs.writeFileSync('src/app/catalogue/[id]/page.tsx', pageContent);

console.log('Update completed successfully.');
