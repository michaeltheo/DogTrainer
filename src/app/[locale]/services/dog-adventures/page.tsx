import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as genMeta, generateServiceSchema } from "@/lib/seo";
import AdventuresHero from "@/components/services/dog-adventures/AdventuresHero";
import AdventuresTypesSection from "@/components/services/dog-adventures/AdventuresTypesSection";
import AdventuresBenefitsSection from "@/components/services/dog-adventures/AdventuresBenefitsSection";
import AdventuresWhyChooseUsSection from "@/components/services/dog-adventures/AdventuresWhyChooseUsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.adventures" });

  const keywords =
    locale === "el"
      ? [
          "εκδρομές σκύλων",
          "εκδρομές σκύλων Θεσσαλονίκη",
          "πεζοπορία με σκύλο",
          "dog adventures",
          "υπαίθριες δραστηριότητες σκύλων",
          "ορειβασία με σκύλους",
          "κοινωνικοποίηση σκύλων",
          "ομαδικές βόλτες σκύλων",
          "εκδρομές στην παραλία με σκύλο",
          "περιπέτειες σκύλων φύση",
          "Θεσσαλονίκη",
        ]
      : [
          "dog adventures",
          "dog adventures Thessaloniki",
          "dog hiking",
          "outdoor dog activities",
          "mountain hiking with dogs",
          "dog socialization",
          "group dog walks",
          "beach trips for dogs",
          "dog nature activities",
          "Thessaloniki",
        ];

  return genMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/services/dog-adventures",
    keywords,
  });
}

export default async function DogAdventuresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.adventures");

  const serviceSchema = generateServiceSchema({
    name: t("title"),
    description: t("metaDescription"),
    locale,
    serviceType: "Pet Activity Services",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AdventuresHero />
      <AdventuresTypesSection />
      <AdventuresBenefitsSection />
      <AdventuresWhyChooseUsSection />
    </>
  );
}
