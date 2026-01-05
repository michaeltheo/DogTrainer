"use client";

import { memo, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

interface MainService {
  image: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
  features: string[];
}

const mainServices: MainService[] = [
  {
    image: "/positive-dog-training.jpg",
    titleKey: "main.training.title",
    descriptionKey: "main.training.description",
    href: "/services/dog-training",
    features: [
      "main.training.feature1",
      "main.training.feature2",
      "main.training.feature3",
      "main.training.feature4",
    ],
  },
  {
    image: "/dog_trainer_with_dog.jpg",
    titleKey: "main.sitting.title",
    descriptionKey: "main.sitting.description",
    href: "/services/dog-sitting",
    features: [
      "main.sitting.feature1",
      "main.sitting.feature2",
      "main.sitting.feature3",
      "main.sitting.feature4",
    ],
  },
  {
    image: "/dog-mountain-adventures.png",
    titleKey: "main.adventures.title",
    descriptionKey: "main.adventures.description",
    href: "/services/dog-adventures",
    features: [
      "main.adventures.feature1",
      "main.adventures.feature2",
      "main.adventures.feature3",
      "main.adventures.feature4",
    ],
  },
];

interface MainServiceCardProps {
  service: MainService;
  index: number;
}

const MainServiceCard = memo<MainServiceCardProps>(({ service, index }) => {
  const t = useTranslations("services");
  const router = useRouter();
  const locale = useLocale();
  const isReversed = index % 2 !== 0;
  const showCallButton = service.titleKey === "main.training.title" || service.titleKey === "main.sitting.title";

  const handleClick = useCallback(() => {
    router.push(`/${locale}${service.href}`);
  }, [locale, router, service.href]);

  const handleContactClick = useCallback(() => {
    router.push(`/${locale}/contact`);
  }, [locale, router]);

  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Image */}
      <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src={service.image}
            alt={t(service.titleKey)}
            fill
            quality={75}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        <div className="inline-block mb-4">
          <div className="bg-orange-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            {t("main.badge")}
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t(service.titleKey)}
        </h3>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {t(service.descriptionKey)}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {service.features.map((featureKey) => (
            <li key={featureKey} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-orange-600 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{t(featureKey)}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onPress={handleClick}
          >
            {t("main.learnMore")}
          </Button>
          {showCallButton && (
            <Button
              size="lg"
              className="bg-white hover:bg-orange-50 text-orange-600 font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-orange-500"
              onPress={handleContactClick}
            >
              {t("main.callNow")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

MainServiceCard.displayName = "MainServiceCard";

const MainServicesSection = memo(() => {
  const t = useTranslations("services");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("main.title")}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto rounded-full mb-6 shadow-lg" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("main.subtitle")}
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-20 md:space-y-24">
          {mainServices.map((service, index) => (
            <MainServiceCard
              key={service.titleKey}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

MainServicesSection.displayName = "MainServicesSection";

export default MainServicesSection;
