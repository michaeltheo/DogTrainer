import { MetadataRoute } from "next";

const DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || "https://dog-trainer.vercel.app";

const locales = ["en", "el"] as const;

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  {
    path: "/services/dog-training",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/dog-sitting",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/dog-adventures",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${DOMAIN}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${DOMAIN}/en${page.path}`,
            el: `${DOMAIN}/el${page.path}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
