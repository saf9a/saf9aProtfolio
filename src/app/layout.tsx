import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkipLink } from "@/components/SkipLink";
import { getSiteContent } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";

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

const buildJsonLd = (currentSite: typeof site) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: currentSite.name,
      url: currentSite.url,
      email: currentSite.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      areaServed: ["Tunisia", "MENA", "Europe"],
      sameAs: [currentSite.socials.linkedin, currentSite.socials.github].filter(Boolean),
      description: currentSite.description,
    },
    {
      "@type": "ProfessionalService",
      name: currentSite.name,
      url: currentSite.url,
      email: currentSite.email,
      areaServed: ["Tunisia", "MENA", "Europe"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      description: currentSite.description,
      serviceType: ["Web development", "DevOps consulting", "AI automation"],
    },
  ],
});

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
  const locale = getRequestLocale();
  const currentSite = getSiteContent(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.variable} ${sora.variable} bg-background text-foreground`}>
        <LocaleProvider initialLocale={locale}>
          <ScrollProgress />
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <SkipLink />
          <Navbar />
          <main id="content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(currentSite)) }}
          />
        </LocaleProvider>
      </body>
    </html>
  );
}
