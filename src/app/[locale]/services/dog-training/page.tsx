import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as genMeta, generateServiceSchema } from "@/lib/seo";
import DogTrainingHero from "@/components/services/dog-training/DogTrainingHero";
import TrainingProgramsSection from "@/components/services/dog-training/TrainingProgramsSection";
import TrainingMethodsSection from "@/components/services/dog-training/TrainingMethodsSection";
import WhyChooseUsSection from "@/components/services/dog-training/WhyChooseUsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.training" });

  const keywords =
    locale === "el"
      ? [
          "εκπαίδευση σκύλων",
          "εκπαίδευση σκύλων Θεσσαλονίκη",
          "dog training",
          "εκπαιδευτής σκύλων",
          "υπακοή σκύλων",
          "εκπαίδευση κουταβιών",
          "τροποποίηση συμπεριφοράς σκύλων",
          "επαγγελματική εκπαίδευση σκύλων",
          "ιδιωτικά μαθήματα σκύλων",
          "ομαδικά μαθήματα σκύλων",
          "Θεσσαλονίκη",
        ]
      : [
          "dog training",
          "dog training Thessaloniki",
          "obedience training",
          "puppy training",
          "behavioral training",
          "dog behavior modification",
          "professional dog trainer",
          "Thessaloniki",
          "private dog training",
          "group dog training",
        ];

  return genMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/services/dog-training",
    keywords,
  });
}

export default async function DogTrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.training");

  const serviceSchema = generateServiceSchema({
    name: t("title"),
    description: t("metaDescription"),
    locale,
    serviceType: "Dog Training",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <DogTrainingHero />
      <TrainingProgramsSection />
      <TrainingMethodsSection />
      <WhyChooseUsSection />
    </>
  );
}
