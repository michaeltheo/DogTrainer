import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as genMeta } from "@/lib/seo";

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
  const t = await getTranslations("about");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold text-primary-900 mb-4"
            data-aos="fade-up"
          >
            {t("title")}
          </h1>
          <p
            className="text-xl text-primary-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-32 h-32 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">Team photo</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("title")}
              </h2>
              <p className="text-lg text-gray-700 mb-6">{t("story")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white p-8 rounded-xl shadow-lg"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("mission.title")}
              </h3>
              <p className="text-gray-700">{t("mission.description")}</p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("approach.title")}
              </h3>
              <p className="text-gray-700">{t("approach.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
