"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = memo(() => {
  const t = useTranslations("home");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("about.title")}
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto" />
          </div>

          {/* Subtitle */}
          <h3
            className="text-xl md:text-2xl font-semibold text-gray-700 mb-12 uppercase tracking-wide text-center border-b-2 border-gray-200 pb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("about.subtitle")}
          </h3>

          {/* Description */}
          <div
            className="mb-16 text-base md:text-lg text-gray-700 leading-relaxed space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-justify hyphens-auto">
              {t("about.description1")}
            </p>
            <p className="text-justify hyphens-auto">
              {t("about.description2")}
            </p>
            <p className="italic font-medium text-primary-700 text-center mt-8 text-xl">
              {t("about.cta")}
            </p>
          </div>

          {/* Trainer Profile */}
          <div
            className="flex flex-col items-center from-primary-50 to-purple-50 rounded-2xl p-8 "
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="mb-6 ring-4 ring-accent-400 shadow-xl rounded-full overflow-hidden">
              <Image
                src="/dog-trainer.jpg"
                alt="Virginia Tsigara - Professional Dog Trainer"
                width={256}
                height={256}
                className="object-cover w-48 h-48 md:w-64 md:h-64"
                priority
              />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t("about.trainer.name")}
            </h4>
            <p className="text-lg text-gray-800 font-semibold mb-1">
              {t("about.trainer.title")}
            </p>
            <p className="text-base text-gray-600 mb-1">
              {t("about.trainer.certification1")}
            </p>
            <p className="text-base text-gray-600">
              {t("about.trainer.certification2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
