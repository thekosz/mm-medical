import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppProviders from "@/components/layout/Providers";
import { siteConfig } from '@/site.config';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [{ url: siteConfig.logo, width: 400, height: 100, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": siteConfig.name,
              "description": siteConfig.description,
              "url": siteConfig.url,
              "logo": `${siteConfig.url}${siteConfig.logo}`,
              "telephone": siteConfig.phone,
              "priceRange": "$$",
              "medicalSpecialty": ["Vascular Medicine", "Interventional Radiology", "Pain Management"],
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 10 },
              "areaServed": [
                { "@type": "City", "name": "Queens" },
                { "@type": "City", "name": "Great Neck" },
                { "@type": "City", "name": "Forest Hills" }
              ],
              "sameAs": [],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vascular & Pain Management Services",
                "itemListElement": [
                  { "@type": "MedicalProcedure", "name": "Genicular Artery Embolization (GAE)" },
                  { "@type": "MedicalProcedure", "name": "Interventional Radiology" },
                  { "@type": "MedicalProcedure", "name": "Vascular Medicine" },
                  { "@type": "MedicalProcedure", "name": "Pain Management" },
                  { "@type": "MedicalProcedure", "name": "PRP Therapy" },
                  { "@type": "MedicalProcedure", "name": "Physical Therapy" },
                  { "@type": "MedicalProcedure", "name": "Diagnostic Imaging" },
                  { "@type": "MedicalProcedure", "name": "Coordinated Senior Care" }
                ]
              },
              "location": [
                { "@type": "MedicalClinic", "name": "MM Medical Services - Forest Hills", "address": { "@type": "PostalAddress", "streetAddress": "76-55 Austin Street", "addressLocality": "Forest Hills", "addressRegion": "NY", "postalCode": "11375" }, "telephone": "(718) 897-2228" },
                { "@type": "MedicalClinic", "name": "MM Medical Services - Great Neck", "address": { "@type": "PostalAddress", "streetAddress": "935 Northern Blvd Ste 102", "addressLocality": "Great Neck", "addressRegion": "NY", "postalCode": "11021" }, "telephone": "(516) 960-1954" }
              ]
            })
          }}
        />
        <AppProviders>
          <Navbar />
          <main className="pt-20 lg:pt-[116px]">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
