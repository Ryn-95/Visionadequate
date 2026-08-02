import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { CartProvider } from "@/context/CartContext";
import Loader from "@/components/ui/Loader";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd, websiteJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const HOME_TITLE = "Location matériel photo & vidéo en Val-d'Oise (95)";
const HOME_DESCRIPTION =
  "Location de caméras Sony, objectifs, drones DJI et stabilisateurs en Val-d'Oise et Île-de-France. Prestations photo, vidéo et mariage. Devis en ligne immédiat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${HOME_TITLE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  category: "Location de matériel audiovisuel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${HOME_TITLE} | ${SITE_NAME}`,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOME_TITLE} | ${SITE_NAME}`,
    description: HOME_DESCRIPTION,
  },
  // Renseigner NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION pour valider Search Console.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className="font-sans bg-[#F4F4F0] text-[#111] overflow-x-hidden">
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <CartProvider>
          <Loader />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
