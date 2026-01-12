"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/react";
import {
  HomeIcon,
  CameraIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string[];
}

const services: Service[] = [
  {
    icon: HomeIcon,
    titleKey: "services.home.title",
    descriptionKey: "services.home.description",
    featuresKey: [
      "services.home.feature1",
      "services.home.feature2",
      "services.home.feature3",
    ],
  },
  {
    icon: CameraIcon,
    titleKey: "services.daycare.title",
    descriptionKey: "services.daycare.description",
    featuresKey: [
      "services.daycare.feature1",
      "services.daycare.feature2",
      "services.daycare.feature3",
    ],
  },
  {
    icon: ClockIcon,
    titleKey: "services.extended.title",
    descriptionKey: "services.extended.description",
    featuresKey: [
      "services.extended.feature1",
      "services.extended.feature2",
      "services.extended.feature3",
    ],
  },
  {
    icon: HeartIcon,
    titleKey: "services.special.title",
    descriptionKey: "services.special.description",
    featuresKey: [
      "services.special.feature1",
      "services.special.feature2",
      "services.special.feature3",
    ],
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = memo<ServiceCardProps>(({ service, index }) => {
  const t = useTranslations("services.sitting");
  const Icon = service.icon;

  return (
    <Card
      className="shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border-t-4 border-orange-500 overflow-hidden group"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={index * 100}
    >
      <CardBody className="p-8">
        {/* Icon with Background */}
        <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 mb-6">
          <Icon className="w-10 h-10 text-white stroke-2" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
          {t(service.titleKey)}
        </h3>

        {/* Divider */}
        <div className="w-12 h-1 bg-orange-400 rounded-full group-hover:w-16 transition-all duration-300 mb-4" />

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t(service.descriptionKey)}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {service.featuresKey.map((featureKey) => (
            <li key={featureKey} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-orange-600 shrink-0 mt-0.5"
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
      </CardBody>
    </Card>
  );
});

ServiceCard.displayName = "ServiceCard";

const SittingServicesSection = memo(() => {
  const t = useTranslations("services.sitting");

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto rounded-full mb-6 shadow-lg" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
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

SittingServicesSection.displayName = "SittingServicesSection";

export default SittingServicesSection;
