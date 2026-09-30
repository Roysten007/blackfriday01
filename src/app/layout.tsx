import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),
  title: "VOLTA | Black Friday Bénin — L'électronique qui tient sa promesse",
  description:
    "Boutique officielle Black Friday VOLTA au Bénin. Jusqu'à -45% sur les écouteurs, batteries 20000mAh, enceintes étanches et chargeurs GaN 65W. Livraison express 24h à Cotonou, paiement MTN/Moov Money ou à la livraison.",
  keywords: [
    "VOLTA",
    "Black Friday Bénin",
    "électronique Cotonou",
    "batterie 20000mAh",
    "chargeur GaN 65W",
    "écouteurs sans fil",
    "MTN Mobile Money",
    "Moov Money",
  ],
  openGraph: {
    title: "VOLTA | Black Friday Bénin — L'électronique qui tient sa promesse",
    description:
      "6 produits indispensables. Des prix qui ne reviendront pas. Jusqu'à -45% et livraison 24h à Cotonou.",
    url: "https://volta-bj.com",
    siteName: "VOLTA Bénin",
    images: [
      {
        url: "/images/volta-pack.jpg",
        width: 1200,
        height: 675,
        alt: "VOLTA Black Friday Bénin",
      },
    ],
    locale: "fr_BJ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOLTA | Black Friday Bénin",
    description: "Des prix qui ne reviendront pas. Jusqu'au 30 novembre à Cotonou.",
    images: ["/images/volta-pack.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body className="min-h-screen bg-volta-dark text-slate-100 selection:bg-volta-yellow selection:text-volta-dark antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
