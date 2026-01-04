"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const MissionSection = memo(() => {
  const t = useTranslations("about");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dog-training.jpg"
                alt="Εκπαίδευση σκύλων με θετική ενίσχυση - Positive reinforcement dog training"
                fill
                quality={75}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Title */}
            <div className="mb-8" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("mission.title")}
              </h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-accent-400 to-accent-600 rounded-full mb-6" />
            </div>

            {/* Mission Content */}
            <div
              className="space-y-6 text-gray-700 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p className="text-lg md:text-xl font-semibold text-primary-700">
                {t("mission.subtitle")}
              </p>
              <p className="text-base md:text-lg">{t("mission.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MissionSection.displayName = "MissionSection";

export default MissionSection;
