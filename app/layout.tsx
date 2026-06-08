import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import CustomCursor from "@/components/CustomCursor";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});
const serif = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "JV WEB STUDIO — Sites, Sistemas Web e Automações N8N",
    template: "%s · JV WEB STUDIO",
  },
  description:
    "Estúdio digital de alta performance. Sites profissionais, sistemas web sob medida e automações N8N para empresas que querem escalar.",
  keywords: [
    "criação de sites", "sistemas web sob medida", "automação N8N",
    "landing page", "e-commerce", "dashboard", "ERP", "JV WEB STUDIO",
    "desenvolvimento web", "automação WhatsApp",
  ],
  authors: [{ name: SITE.founder }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: "JV WEB STUDIO — Soluções digitais construídas para escalar",
    description:
      "Sites profissionais, sistemas sob medida e automações N8N. Performance real, código próprio e entrega no prazo.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "JV WEB STUDIO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JV WEB STUDIO",
    description: "Soluções digitais construídas para escalar.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description:
    "Estúdio digital especializado em sites profissionais, sistemas web sob medida e automações N8N.",
  email: SITE.email,
  url: SITE.url,
  areaServed: "BR",
  founder: { "@type": "Person", name: SITE.founder },
  sameAs: [`https://instagram.com/${SITE.instagram}`],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sites Profissionais" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas Web sob Medida" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automações N8N" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="font-sans noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
