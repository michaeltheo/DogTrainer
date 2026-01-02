import { MetadataRoute } from 'next';

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'https://yourdomain.com';

const locales = ['en', 'el'];
const pages = [
  '',
  '/about',
  '/services',
  '/services/dog-training',
  '/services/dog-sitting',
  '/services/dog-adventures',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${DOMAIN}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${DOMAIN}/en${page}`,
            el: `${DOMAIN}/el${page}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
