import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const routes = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
    "/book",
    "/privacy",
    "/fr",
    "/fr/services",
    "/fr/work",
    "/fr/about",
    "/fr/contact",
    "/fr/book",
    "/fr/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
