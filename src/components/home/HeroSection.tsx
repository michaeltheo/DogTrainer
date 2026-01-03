"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = memo(() => {
  const t = useTranslations("home");

  return (
    <section className="relative min-h-150 md:min-h-175 lg:min-h-200 flex items-center justify-center overflow-hidden">
      {/* Background Image  */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-dog-background.jpg"
          alt="Επαγγελματική εκπαίδευση σκύλων Θεσσαλονίκη - Professional dog training Thessaloniki"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight">
            {t("hero.title")}
          </h1>

          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-2xl md:text-3xl lg:text-4xl text-accent-400 font-bold mb-3 drop-shadow-lg">
              {t("hero.cta")}
            </p>
            <a
              href="tel:6989835114"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white hover:text-accent-300 transition-colors drop-shadow-lg inline-block"
            >
              {t("hero.phone")}
            </a>
          </div>

          <p
            className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-lg max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
