import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlup - Gestion moderne pour écoles de tennis",
  description:
    "Simplifiez votre enseignement, engagez vos élèves et fidélisez les parents avec la solution de gestion complète pour écoles de tennis.",
  keywords: [
    "gestion école tennis",
    "suivi élèves tennis",
    "application tennis",
    "carnet compétences tennis",
    "évaluation tennis",
    "gestion club tennis",
    "logiciel tennis",
  ],
  authors: [{ name: "Devlup" }],
  creator: "Devlup",
  publisher: "Devlup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devlup.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devlup - Gestion moderne pour écoles de tennis",
    description:
      "Simplifiez votre enseignement, engagez vos élèves et fidélisez les parents avec la solution de gestion complète pour écoles de tennis.",
    url: "https://devlup.app",
    siteName: "Devlup",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/screenshots/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devlup - Application de gestion pour écoles de tennis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlup - Gestion moderne pour écoles de tennis",
    description:
      "Simplifiez votre enseignement, engagez vos élèves et fidélisez les parents avec la solution de gestion complète pour écoles de tennis.",
    images: ["/assets/screenshots/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1B112C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
