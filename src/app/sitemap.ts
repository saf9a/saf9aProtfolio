import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const routes = [
    "/",
    "/services",
    "/work",
    "/about",
    "/contact",
    "/book",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
