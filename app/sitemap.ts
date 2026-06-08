import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#servicos`, lastModified: now, priority: 0.8 },
    { url: `${base}/#processo`, lastModified: now, priority: 0.7 },
    { url: `${base}/#portfolio`, lastModified: now, priority: 0.7 },
    { url: `${base}/#contato`, lastModified: now, priority: 0.9 },
  ];
}
