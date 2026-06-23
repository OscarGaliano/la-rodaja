import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nav",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://larodaja.es"),
  title: {
    default: "La Rodaja | Cítricos en rodajas al vacío para hostelería",
    template: "%s | La Rodaja",
  },
  description:
    "Rodajas frescas de limón, lima, naranja y pomelo envasadas al vacío para hoteles, restaurantes, beach clubs y coctelerías de la Costa del Sol. Muestra gratuita y entrega en 24–48 h.",
  keywords: [
    "cítricos hostelería",
    "rodajas limón",
    "fruta al vacío",
    "Horeca Costa del Sol",
    "coctelería Marbella",
    "mise en place cítricos",
  ],
  authors: [{ name: "La Rodaja" }],
  creator: "La Rodaja",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://larodaja.es",
    siteName: "La Rodaja",
    title: "La Rodaja — Los cítricos listos para servir",
    description:
      "Rodajas frescas envasadas al vacío para hostelería y coctelería en la Costa del Sol.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Rodaja — Cítricos al vacío para Horeca",
    description:
      "Rodajas frescas de limón, lima, naranja y pomelo. Muestra gratuita.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://larodaja.es",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "La Rodaja",
  description:
    "Cítricos frescos cortados en rodajas y envasados al vacío para hostelería y coctelería en la Costa del Sol.",
  url: "https://larodaja.es",
  email: "hola@larodaja.es",
  telephone: "+34-600-000-000",
  areaServed: "Costa del Sol, Málaga, España",
  serviceType: ["Suministro Horeca", "Cítricos envasados al vacío"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
