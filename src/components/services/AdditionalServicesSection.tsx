"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardBody } from "@heroui/react";

interface AdditionalService {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

const additionalServices: AdditionalService[] = [
  {
    icon: "/dog-food.png",
    titleKey: "additional.nutrition.title",
    descriptionKey: "additional.nutrition.description",
  },
  {
    icon: "/dog-health.png",
    titleKey: "additional.activities.title",
    descriptionKey: "additional.activities.description",
  },
  {
    icon: "/dog-bone.png",
    titleKey: "additional.training.title",
    descriptionKey: "additional.training.description",
  },
  {
    icon: "/dog-pet.png",
    titleKey: "additional.guides.title",
    descriptionKey: "additional.guides.description",
  },
  {
    icon: "/dog-support.png",
    titleKey: "additional.veterinary.title",
    descriptionKey: "additional.veterinary.description",
  },
  {
    icon: "/dog-walk.png",
    titleKey: "additional.excursions.title",
    descriptionKey: "additional.excursions.description",
  },
];

interface ServiceCardProps {
  service: AdditionalService;
}

const ServiceCard = memo<ServiceCardProps>(({ service }) => {
  const t = useTranslations("services");

  return (
    <Card
      className="shadow-lg bg-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <CardBody className="p-8 flex flex-col items-center text-center gap-4">
        {/* Icon with Background */}
        <div className="relative w-16 h-16">
          <Image
            src={service.icon}
            alt={t(service.titleKey)}
            fill
            className="object-contain brightness-0 opacity-70"
            sizes="64px"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {t(service.titleKey)}
        </h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {t(service.descriptionKey)}
        </p>
      </CardBody>
    </Card>
  );
});

ServiceCard.displayName = "ServiceCard";

const AdditionalServicesSection = memo(() => {
  const t = useTranslations("services");

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("additional.title")}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-accent-400 via-accent-500 to-accent-600 mx-auto rounded-full mb-6 shadow-lg" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("additional.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={service.titleKey}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AdditionalServicesSection.displayName = "AdditionalServicesSection";

export default AdditionalServicesSection;
