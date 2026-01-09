"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const DogSittingHero = memo(() => {
  const t = useTranslations("services.sitting");

  return (
    <section className="relative min-h-100 md:min-h-125 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 -mb-150">
        <Image
          src="/dog-sitting-hero.jpg"
          alt="Φύλαξη σκύλων Θεσσαλονίκη - Dog sitting Thessaloniki"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
        <div
          className="max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            {t("hero.title")}
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("hero.subtitle")}
          </p>
          {/* Key Benefits */}
          <div
            className="flex flex-wrap justify-center gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[t("hero.benefit1"), t("hero.benefit2"), t("hero.benefit3")].map(
              (benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="text-sm md:text-base font-semibold">
                    {benefit}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

DogSittingHero.displayName = "DogSittingHero";

export default DogSittingHero;
