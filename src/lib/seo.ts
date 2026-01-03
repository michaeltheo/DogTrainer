import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  locale: string;
  path: string;
  images?: { url: string; alt: string }[];
  keywords?: string[];
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'https://yourdomain.com';

export function generateMetadata({
  title,
  description,
  locale,
  path,
  images = [],
  keywords = []
}: SEOConfig): Metadata {
  const alternateLocale = locale === 'en' ? 'el' : 'en';
  const canonicalUrl = `${DOMAIN}/${locale}${path}`;
  const alternateUrl = `${DOMAIN}/${alternateLocale}${path}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${DOMAIN}/en${path}`,
        'el': `${DOMAIN}/el${path}`,
        'x-default': `${DOMAIN}/el${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Professional Dog Training Services',
      locale: locale === 'en' ? 'en_US' : 'el_GR',
      type: 'website',
      images: images.length > 0 ? images : [
        {
          url: `${DOMAIN}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.length > 0 ? images.map(img => img.url) : [`${DOMAIN}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
}

export function generateLocalBusinessSchema({
  name,
  description,
  locale,
  address,
  phone,
  email,
  image
}: LocalBusinessSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${DOMAIN}/#localbusiness`,
    name,
    description,
    image: image || `${DOMAIN}/logo.png`,
    url: DOMAIN,
    telephone: phone,
    email,
    priceRange: '$$',
    address: address ? {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    } : undefined,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.6401,
      longitude: 22.9444,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '89',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.6401,
        longitude: 22.9444,
      },
      geoRadius: '50000',
    },
  };
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
  provider = 'Professional Dog Training Services'
}: ServiceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      url: DOMAIN,
    },
    areaServed: {
      '@type': 'City',
      name: locale === 'en' ? 'Thessaloniki' : 'Θεσσαλονίκη',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: DOMAIN,
    },
  };
}
