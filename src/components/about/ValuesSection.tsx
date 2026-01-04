"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/react";
import {
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
}

const values: Value[] = [
  {
    icon: HeartIcon,
    titleKey: "values.love.title",
    descriptionKey: "values.love.description",
  },
  {
    icon: AcademicCapIcon,
    titleKey: "values.expertise.title",
    descriptionKey: "values.expertise.description",
  },
  {
    icon: UserGroupIcon,
    titleKey: "values.support.title",
    descriptionKey: "values.support.description",
  },
  {
    icon: HandThumbUpIcon,
    titleKey: "values.results.title",
    descriptionKey: "values.results.description",
  },
];

const ValueCard = memo(
  ({
    icon: Icon,
    titleKey,
    descriptionKey,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    titleKey: string;
    descriptionKey: string;
  }) => {
    const t = useTranslations("about");

    return (
      <Card
        className="shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-3 border-accent-500"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <CardBody className="p-6 md:p-8 flex flex-col items-center text-center gap-4 overflow-hidden">
          {/* Icon with Background */}
          <div className="w-16 h-16 rounded-xl bg-accent-100 flex items-center justify-center shadow-md">
            <Icon className="w-8 h-8 text-gray-900 stroke-2" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            {t(titleKey)}
          </h3>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{t(descriptionKey)}</p>
        </CardBody>
      </Card>
    );
  }
);

ValueCard.displayName = "ValueCard";

const ValuesSection = memo(() => {
  const t = useTranslations("about");

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("values.title")}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-accent-400 to-accent-600 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {t("values.subtitle")}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.titleKey}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ValueCard
                icon={value.icon}
                titleKey={value.titleKey}
                descriptionKey={value.descriptionKey}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ValuesSection.displayName = "ValuesSection";

export default ValuesSection;
