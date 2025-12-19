import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home Caregivers Care - Professional Home Care & Improvement Services | Home Caregivers GA LLC",
  description: "Home Caregivers Care - Your trusted partner for home care and professional home improvement services. 14 years of excellence in residential and commercial painting, home renovation, and comprehensive home care solutions in North Atlanta. Call 404-407-5719 for a free quote.",
  keywords: "Caregivers Care, home, Home Caregivers Care, home care, home improvement, home renovation, professional home services, home painting, home maintenance, home repair, North Atlanta home services, home caregivers, home care solutions, residential home care, commercial home care",
  authors: [{ name: "Home Caregivers GA LLC" }],
  creator: "Home Caregivers GA LLC",
  publisher: "Home Caregivers GA LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://homecaregiversga.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Home Caregivers Care - Professional Home Care & Improvement Services",
    description: "Home Caregivers Care - 14 years of excellence in home care and professional home improvement services. Serving North Atlanta Metro Area.",
    url: '/',
    siteName: "Home Caregivers GA LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Caregivers Care - Professional Home Care & Improvement",
    description: "Home Caregivers Care - 14 years of excellence in home care and professional home improvement services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Home Caregivers GA LLC",
    "alternateName": "Home Caregivers Care",
    "description": "Professional home care and home improvement services including painting, carpentry, and comprehensive home maintenance solutions.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://homecaregiversga.com",
    "telephone": "404-407-5719",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7490",
      "longitude": "-84.3880"
    },
    "areaServed": {
      "@type": "State",
      "name": "Georgia"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.7490",
        "longitude": "-84.3880"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Care and Improvement Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Care Services",
            "description": "Comprehensive home care and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Improvement",
            "description": "Professional home improvement and renovation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Painting",
            "description": "Interior and exterior home painting services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
