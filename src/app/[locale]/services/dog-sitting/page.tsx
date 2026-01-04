import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as genMeta, generateServiceSchema } from "@/lib/seo";
import DogSittingHero from "@/components/services/dog-sitting/DogSittingHero";
import SittingServicesSection from "@/components/services/dog-sitting/SittingServicesSection";
import SittingMethodsSection from "@/components/services/dog-sitting/SittingMethodsSection";
import SittingWhyChooseUsSection from "@/components/services/dog-sitting/SittingWhyChooseUsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.sitting" });

  const keywords =
    locale === "el"
      ? [
          "φύλαξη σκύλων",
          "φύλαξη σκύλων Θεσσαλονίκη",
          "dog sitting",
          "περίπατος σκύλου",
          "φροντίδα σκύλων",
          "φύλαξη κατοικιδίων",
          "υπηρεσίες φροντίδας σκύλων",
          "φύλαξη σκύλου στο σπίτι",
          "ημερήσια φροντίδα σκύλων",
          "pet sitting Θεσσαλονίκη",
          "dog walker Θεσσαλονίκη",
          "επαγγελματική φύλαξη σκύλων",
          "αξιόπιστη φύλαξη σκύλων",
        ]
      : [
          "dog sitting",
          "dog sitting Thessaloniki",
          "pet sitting",
          "dog walking",
          "dog care",
          "dog boarding",
          "pet care services",
          "home dog sitting",
          "dog daycare",
          "pet sitting Thessaloniki",
          "dog walker Thessaloniki",
          "professional pet sitter",
          "reliable dog sitting",
        ];

  return genMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/services/dog-sitting",
    keywords,
  });
}

export default async function DogSittingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.sitting");

  const serviceSchema = generateServiceSchema({
    name: t("title"),
    description: t("metaDescription"),
    locale,
    serviceType: "Pet Sitting",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DogSittingHero />
      <SittingServicesSection />
      <SittingMethodsSection />
      <SittingWhyChooseUsSection />
    </>
  );
}
