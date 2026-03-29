import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
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
    default: `${site.name} | Full-stack, DevOps, AI automation`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: "/favicon-circle.png",
    shortcut: "/favicon-circle.png",
    apple: "/favicon-circle.png",
  },
  openGraph: {
    title: site.name,
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
    title: site.name,
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
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
