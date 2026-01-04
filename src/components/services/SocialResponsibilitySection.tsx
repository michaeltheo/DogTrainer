"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { HeartIcon } from "@heroicons/react/24/outline";

const SocialResponsibilitySection = memo(() => {
  const t = useTranslations("services");

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
            <HeartIcon className="w-10 h-10 brightness-60 stroke-2" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("socialResponsibility.title")}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {t("socialResponsibility.description")}
          </p>
        </div>
      </div>
    </section>
  );
});

SocialResponsibilitySection.displayName = "SocialResponsibilitySection";

export default SocialResponsibilitySection;
