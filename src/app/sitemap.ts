import type { MetadataRoute } from "next";

const BASE = "https://www.cccaworks.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/the-why", priority: 0.8 },
    { url: "/services", priority: 0.8 },
    { url: "/partners", priority: 0.7 },
    { url: "/process", priority: 0.7 },
    { url: "/contact", priority: 0.9 },
    { url: "/media", priority: 0.6 },
  ];

  return pages.map(({ url, priority }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
