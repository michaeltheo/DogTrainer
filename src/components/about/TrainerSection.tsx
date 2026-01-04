"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { socialLinks } from "@/constants/socialLinks";

const TrainerSection = memo(() => {
  const t = useTranslations("about");

  return (
    <section className="py-16 md:py-24 bg-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Trainer Image */}
          <div
            className="relative order-1 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative h-125 md:h-150 lg:h-175 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dog-trainer.jpg"
                alt="Βιργινία Τσιγαρά - Επαγγελματίας εκπαιδευτής σκύλων - Virginia Tsigara Professional Dog Trainer"
                fill
                quality={55}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Trainer Info */}
          <div className="order-2 lg:order-2">
            {/* Section Header */}
            <div className="mb-8" data-aos="fade-left">
              <p className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-4">
                {t("trainer.hero")}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("trainer.name")}
              </h2>
            </div>

            {/* Trainer Bio */}
            <div
              className="space-y-6 mb-8"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <p className="text-base md:text-lg text-white/95 leading-relaxed">
                {t("trainer.bio")}
              </p>

              <div className="space-y-2">
                <p className="text-sm md:text-base text-white/90">
                  {t("trainer.certification1")}
                </p>
                <p className="text-sm md:text-base text-white/90">
                  {t("trainer.certification2")}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full ${social.bgColor} ${social.hoverBgColor} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group`}
                      aria-label={social.name}
                    >
                      <Icon
                        className={`w-6 h-6 ${social.color} group-hover:animate-pulse transition-all duration-300`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TrainerSection.displayName = "TrainerSection";

export default TrainerSection;
