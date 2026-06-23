import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalogue | Vision Adéquate",
  description: "Location de matériel vidéo et cinéma professionnel. Le juste équipement. La pleine vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className="font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
