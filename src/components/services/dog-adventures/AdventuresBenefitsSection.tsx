"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AdventuresBenefitsSection = memo(() => {
  const t = useTranslations("services.adventures");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dog_trainer_with_dog.jpg"
                alt="Οφέλη εκδρομών σκύλων - Dog adventures benefits"
                fill
                quality={75}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Side */}
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="inline-block mb-4">
              <div className="bg-orange-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                {t("benefits.badge")}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("benefits.title")}
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t("benefits.description")}
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                t("benefits.benefit1"),
                t("benefits.benefit2"),
                t("benefits.benefit3"),
                t("benefits.benefit4"),
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl transition-all duration-300 hover:bg-orange-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AdventuresBenefitsSection.displayName = "AdventuresBenefitsSection";

export default AdventuresBenefitsSection;
