import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { generateMetadata as genMeta } from "@/lib/seo";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import TrainerSection from "@/components/about/TrainerSection";
import TeamDogsSection from "@/components/about/TeamDogsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return genMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <AboutHero />
      {/* Mission Section */}
      <MissionSection />
      {/* Values Section */}
      <ValuesSection />
      {/* Trainer Section */}
      <TrainerSection />
      {/* Team Dogs Section */}
      <TeamDogsSection />
    </>
  );
}
