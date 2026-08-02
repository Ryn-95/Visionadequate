import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  findProduct,
  productJsonLd,
  productSeo,
} from "@/lib/seo";

/** Prérend les 19 fiches au build : chacune devient une page indexable. */
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

/** Toute autre référence renvoie un 404 plutôt qu'une page dupliquée. */
export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const product = findProduct(params.id);
  if (!product) return {};

  const { title, description, name } = productSeo(product);
  const canonical = `/catalogue/${product.id}`;

  return {
    // `absolute` : pas de suffixe de marque ici, le titre est déjà à la
    // longueur maximale affichée par Google (~60 caractères).
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: encodeURI(product.imageUrl), alt: `Location ${name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [encodeURI(product.imageUrl)],
    },
  };
}

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const product = findProduct(params.id);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Locations", path: "/catalogue" },
            {
              name: `${product.brand} ${product.model}`,
              path: `/catalogue/${product.id}`,
            },
          ]),
        ]}
      />
      {children}
    </>
  );
}
