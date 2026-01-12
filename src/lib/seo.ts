import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  locale: string;
  path: string;
  images?: { url: string; alt: string }[];
  keywords?: string[];
}

const DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || "https://dog-trainer.vercel.app";

export function generateMetadata({
  title,
  description,
  locale,
  path,
  images = [],
  keywords = [],
}: SEOConfig): Metadata {
  const canonicalUrl = `${DOMAIN}/${locale}${path}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": `${DOMAIN}/en${path}`,
        "el-GR": `${DOMAIN}/el${path}`,
        en: `${DOMAIN}/en${path}`,
        el: `${DOMAIN}/el${path}`,
        "x-default": `${DOMAIN}/el${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Cobrelius Dog Training Center",
      locale: locale === "en" ? "en_US" : "el_GR",
      type: "website",
      images:
        images.length > 0
          ? images
          : [
              {
                url: `${DOMAIN}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images:
        images.length > 0
          ? images.map((img) => img.url)
          : [`${DOMAIN}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "GR-B",
      "geo.placename": "Thessaloniki",
      "geo.position": "40.6401;22.9444",
      ICBM: "40.6401, 22.9444",
    },
  };
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  locale: string;
  address?: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  phone?: string;
  email?: string;
  image?: string;
  openingHours?: string[];
}

export function generateLocalBusinessSchema({
  name,
  description,
  address,
  phone,
  email,
  image,
  openingHours,
  reviewCount,
  ratingValue,
}: LocalBusinessSchema & { reviewCount?: number; ratingValue?: number }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${DOMAIN}/#localbusiness`,
    name,
    description,
    image: image || `${DOMAIN}/logo.png`,
    url: DOMAIN,
    telephone: phone,
    email,
    priceRange: "$$",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.6401,
      longitude: 22.9444,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue?.toString() || "5",
      reviewCount: reviewCount?.toString() || "60",
      bestRating: "5",
      worstRating: "1",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.6401,
        longitude: 22.9444,
      },
      geoRadius: "50000",
    },
  };

  if (address && (address.street || address.city)) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    };
  }

  if (openingHours && openingHours.length > 0) {
    schema.openingHoursSpecification = openingHours.map((hours) => {
      const [days, time] = hours.split(" ");
      const [opens, closes] = time.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split(","),
        opens,
        closes,
      };
    });
  }

  return schema;
}

export interface ServiceSchema {
  name: string;
  description: string;
  locale: string;
  serviceType: string;
  provider?: string;
}

export function generateServiceSchema({
  name,
  description,
  locale,
  serviceType,
  provider = "Professional Dog Training Services",
}: ServiceSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
      url: DOMAIN,
    },
    areaServed: {
      "@type": "City",
      name: locale === "en" ? "Thessaloniki" : "Θεσσαλονίκη",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: DOMAIN,
    },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${DOMAIN}${item.url}`,
    })),
  };
}

export interface ItemListItem {
  name: string;
  description: string;
}

export function generateItemListSchema(items: ItemListItem[], name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  };
}
