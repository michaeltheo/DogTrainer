import { setRequestLocale, getTranslations } from "next-intl/server";
import { generateMetadata as genMeta, generateItemListSchema } from "@/lib/seo";
import ServicesHero from "@/components/services/ServicesHero";
import AdditionalServicesSection from "@/components/services/AdditionalServicesSection";
import MainServicesSection from "@/components/services/MainServicesSection";
import SocialResponsibilitySection from "@/components/services/SocialResponsibilitySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const keywords =
    locale === "el"
      ? [
          "υπηρεσίες σκύλων",
          "εκπαίδευση σκύλων",
          "διατροφή σκύλου",
          "dog handling",
          "περίπατος σκύλου",
          "φύλαξη σκύλων",
          "κτηνιατρική υποστήριξη",
          "εκδρομές σκύλων",
          "dog sitting",
          "dog training",
          "Θεσσαλονίκη",
        ]
      : [
          "dog services",
          "dog training",
          "dog nutrition",
          "dog handling",
          "dog walking",
          "dog sitting",
          "pet care",
          "veterinary support",
          "dog adventures",
          "Thessaloniki",
        ];

  return genMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/services",
    keywords,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  // Generate ItemList schema for all services
  const servicesListSchema = generateItemListSchema(
    [
      // Main services
      {
        name: t("main.training.title"),
        description: t("main.training.description"),
      },
      {
        name: t("main.sitting.title"),
        description: t("main.sitting.description"),
      },
      {
        name: t("main.adventures.title"),
        description: t("main.adventures.description"),
      },
      // Additional services
      {
        name: t("additional.nutrition.title"),
        description: t("additional.nutrition.description"),
      },
      {
        name: t("additional.activities.title"),
        description: t("additional.activities.description"),
      },
      {
        name: t("additional.training.title"),
        description: t("additional.training.description"),
      },
      {
        name: t("additional.guides.title"),
        description: t("additional.guides.description"),
      },
      {
        name: t("additional.veterinary.title"),
        description: t("additional.veterinary.description"),
      },
      {
        name: t("additional.excursions.title"),
        description: t("additional.excursions.description"),
      },
    ],
    t("hero.title")
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />

      {/* Page Hero */}
      <ServicesHero />

      {/* Additional Services - Care & Advice */}
      <AdditionalServicesSection />

      {/* Main Services - Training, Sitting, Adventures */}
      <MainServicesSection />

      {/* Social Responsibility */}
      <SocialResponsibilitySection />
    </>
  );
}
