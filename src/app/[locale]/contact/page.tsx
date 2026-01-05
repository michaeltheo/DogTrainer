import {getTranslations, setRequestLocale} from 'next-intl/server';
import { generateMetadata as genMeta } from '@/lib/seo';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFormSection from '@/components/contact/ContactFormSection';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'contact'});

  return genMeta({
    title: t('metaTitle'),
    description: t('metaDescription'),
    locale,
    path: '/contact',
  });
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Info Section */}
      <ContactInfo />

      {/* Contact Form & Working Hours Section */}
      <ContactFormSection />
    </>
  );
}
