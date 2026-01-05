"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/react";
import {
  AcademicCapIcon,
  SparklesIcon,
  UserGroupIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

interface Program {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string[];
}

const programs: Program[] = [
  {
    icon: SparklesIcon,
    titleKey: "programs.puppy.title",
    descriptionKey: "programs.puppy.description",
    featuresKey: [
      "programs.puppy.feature1",
      "programs.puppy.feature2",
      "programs.puppy.feature3",
    ],
  },
  {
    icon: AcademicCapIcon,
    titleKey: "programs.obedience.title",
    descriptionKey: "programs.obedience.description",
    featuresKey: [
      "programs.obedience.feature1",
      "programs.obedience.feature2",
      "programs.obedience.feature3",
    ],
  },
  {
    icon: UserGroupIcon,
    titleKey: "programs.behavioral.title",
    descriptionKey: "programs.behavioral.description",
    featuresKey: [
      "programs.behavioral.feature1",
      "programs.behavioral.feature2",
      "programs.behavioral.feature3",
    ],
  },
  {
    icon: HomeIcon,
    titleKey: "programs.private.title",
    descriptionKey: "programs.private.description",
    featuresKey: [
      "programs.private.feature1",
      "programs.private.feature2",
      "programs.private.feature3",
    ],
  },
];

interface ProgramCardProps {
  program: Program;
  index: number;
}

const ProgramCard = memo<ProgramCardProps>(({ program, index }) => {
  const t = useTranslations("services.training");
  const Icon = program.icon;

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
          {t(program.titleKey)}
        </h3>

        {/* Divider */}
        <div className="w-12 h-1 bg-orange-400 rounded-full group-hover:w-16 transition-all duration-300 mb-4" />

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t(program.descriptionKey)}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {program.featuresKey.map((featureKey) => (
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

ProgramCard.displayName = "ProgramCard";

const TrainingProgramsSection = memo(() => {
  const t = useTranslations("services.training");

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("programs.title")}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto rounded-full mb-6 shadow-lg" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("programs.subtitle")}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.titleKey}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

TrainingProgramsSection.displayName = "TrainingProgramsSection";

export default TrainingProgramsSection;
