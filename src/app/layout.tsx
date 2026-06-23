import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { CartProvider } from "@/context/CartContext";
import Loader from "@/components/ui/Loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vision Adéquate | Location de matériel cinéma",
  description: "Location de matériel vidéo et cinéma professionnel. Le juste équipement. La pleine vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className="font-sans bg-[#F4F4F0] text-[#111]">
        <CartProvider>
          <Loader />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
