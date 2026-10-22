import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenedge-lawncare.ruvemopon.com";
const TITLE = "Lawn Care in Charlotte, NC | GreenEdge Lawn Care";
const DESCRIPTION =
  "Mowing, edging, fertilizing and seasonal cleanup in Charlotte, North Carolina. Get your weekends back - request a free lawn care quote from GreenEdge.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GreenEdge Lawn Care",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [{ url: "/images/home-hero.jpg", alt: "A freshly mowed lawn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/home-hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LawnCareService",
  name: "GreenEdge Lawn Care",
  url: SITE_URL,
  description: DESCRIPTION,
  areaServed: { "@type": "City", name: "Charlotte, NC" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
