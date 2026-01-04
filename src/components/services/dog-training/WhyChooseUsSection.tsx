"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/react";
import {
  CheckBadgeIcon,
  HeartIcon,
  AcademicCapIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

interface Reason {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
}

const reasons: Reason[] = [
  {
    icon: CheckBadgeIcon,
    titleKey: "whyChooseUs.certified.title",
    descriptionKey: "whyChooseUs.certified.description",
  },
  {
    icon: HeartIcon,
    titleKey: "whyChooseUs.positive.title",
    descriptionKey: "whyChooseUs.positive.description",
  },
  {
    icon: AcademicCapIcon,
    titleKey: "whyChooseUs.experience.title",
    descriptionKey: "whyChooseUs.experience.description",
  },
  {
    icon: TrophyIcon,
    titleKey: "whyChooseUs.results.title",
    descriptionKey: "whyChooseUs.results.description",
  },
];

const WhyChooseUsSection = memo(() => {
  const t = useTranslations("services.training");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("whyChooseUs.title")}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full mb-6 shadow-lg" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("whyChooseUs.subtitle")}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.titleKey}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-4 border-green-500 bg-white group">
                  <CardBody className="p-8 flex flex-col items-center text-center gap-4">
                    {/* Icon with Background */}
                    <div className="w-20 h-20 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {t(reason.titleKey)}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-green-400 rounded-full group-hover:w-16 transition-all duration-300" />

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {t(reason.descriptionKey)}
                    </p>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = "WhyChooseUsSection";

export default WhyChooseUsSection;
