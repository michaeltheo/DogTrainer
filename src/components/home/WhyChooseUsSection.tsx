"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import {
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
}

const features: Feature[] = [
  {
    icon: AcademicCapIcon,
    titleKey: "certified.title",
    descriptionKey: "certified.description",
  },
  {
    icon: HeartIcon,
    titleKey: "positive.title",
    descriptionKey: "positive.description",
  },
  {
    icon: SparklesIcon,
    titleKey: "personalized.title",
    descriptionKey: "personalized.description",
  },
  {
    icon: MapPinIcon,
    titleKey: "coverage.title",
    descriptionKey: "coverage.description",
  },
];

const FeatureCard = memo(
  ({
    icon: Icon,
    titleKey,
    descriptionKey,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    titleKey: string;
    descriptionKey: string;
  }) => {
    const t = useTranslations("whyChooseUs");

    return (
      <Card
        className="shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-3 border-accent-500"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <CardBody className="p-6 md:p-8 flex flex-col items-start gap-4">
          {/* Icon with Background */}
          <div className="w-16 h-16 rounded-xl bg-accent-100 flex items-center justify-center shadow-md">
            <Icon className="w-8 h-8 text-gray-900 stroke-2" />
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            {t(titleKey)}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {t(descriptionKey)}
          </p>
        </CardBody>
      </Card>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

const WhyChooseUsSection = memo(() => {
  const t = useTranslations("whyChooseUs");

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden ">
              <Image
                src="/dog_trainer_with_dog.jpg"
                alt="Professional dog trainer with dog"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-8 md:mb-12" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("title")}
              </h2>
              <div className="w-20 h-1.5 rounded-full mb-6" />
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.titleKey}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <FeatureCard
                    icon={feature.icon}
                    titleKey={feature.titleKey}
                    descriptionKey={feature.descriptionKey}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = "WhyChooseUsSection";

export default WhyChooseUsSection;
