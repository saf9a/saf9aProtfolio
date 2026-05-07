import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { DocumentLanguage } from "@/components/DocumentLanguage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Web Development, DevOps & AI Automation in Tunisia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/fr",
      "x-default": "/",
    },
  },
  keywords: [
    "Saf9a",
    "web development Tunisia",
    "web development Tunis",
    "DevOps Tunisia",
    "AI automation Tunisia",
    "web development studio Tunis",
    "DevOps consulting",
    "AI automation services",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${site.name} | Web Development, DevOps & AI Automation in Tunisia`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Web Development, DevOps & AI Automation in Tunisia`,
    description: site.description,
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      areaServed: ["Tunisia", "MENA", "Europe"],
      sameAs: [site.socials.linkedin, site.socials.github].filter(Boolean),
      description: site.description,
    },
    {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      email: site.email,
      areaServed: ["Tunisia", "MENA", "Europe"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      description: site.description,
      serviceType: ["Web development", "DevOps consulting", "AI automation"],
    },
  ],
};

const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} bg-background text-foreground`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <DocumentLanguage />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
