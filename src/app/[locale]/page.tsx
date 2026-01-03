import {getTranslations, setRequestLocale} from 'next-intl/server';
import { generateMetadata as genMeta, generateLocalBusinessSchema } from '@/lib/seo';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'home'});

  const keywords = locale === 'el' ? [
    'εκπαίδευση σκύλων',
    'εκπαιδευτής σκύλων',
    'επαγγελματική εκπαίδευση σκύλων',
    'φύλαξη σκύλων',
    'dog sitting',
    'βόλτα σκύλου',
    'περιπέτειες σκύλων',
    'εκπαίδευση κουταβιών',
    'υπακοή σκύλων',
    'συμπεριφορά σκύλων',
    'Θεσσαλονίκη',
    'Ελλάδα',
  ] : [
    'dog training',
    'dog trainer',
    'professional dog training',
    'dog sitting',
    'dog walking',
    'dog adventures',
    'puppy training',
    'obedience training',
    'behavioral training',
    'Thessaloniki',
    'Greece',
  ];

  return genMeta({
    title: t('metaTitle'),
    description: t('metaDescription'),
    locale,
    path: '',
    keywords,
  });
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  const businessSchema = generateLocalBusinessSchema({
    name: 'Cobrelius Dog Training Center',
    description: t('metaDescription'),
    locale,
    phone: '+306989835114',
    address: {
      street: '',
      city: 'Thessaloniki',
      region: 'Central Macedonia',
      postalCode: '',
      country: 'GR',
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(businessSchema)}}
      />

      {/* Hero Section - Full screen with background image */}
      <HeroSection />

      {/* About Section - Dog Trainer Profile */}
      <AboutSection />

      {/* Services Overview - Dog Sitting | Dog Training | Dog Adventures */}
      <ServicesOverview />

      {/* Testimonials Section - Google Reviews */}
      <TestimonialsSection />
    </>
  );
}
