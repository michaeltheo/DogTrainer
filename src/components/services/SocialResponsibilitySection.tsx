"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { HeartIcon } from "@heroicons/react/24/solid";

const SocialResponsibilitySection = memo(() => {
  const t = useTranslations("services");

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
            {/* Decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600" />

            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-orange-100 to-orange-200 shadow-lg mb-6">
                <HeartIcon className="w-10 h-10 text-orange-600" />
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t("socialResponsibility.title")}
              </h2>

              {/* Divider */}
              <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-6" />

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {t("socialResponsibility.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SocialResponsibilitySection.displayName = "SocialResponsibilitySection";

export default SocialResponsibilitySection;
