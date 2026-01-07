"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutHero = memo(() => {
  const t = useTranslations("about");

  return (
    <section className="relative min-h-100 md:min-h-125 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dog-trainer-happy-dog.png"
          alt="Επαγγελματικός εκπαιδευτής σκύλων με ευτυχισμένο σκύλο - Professional dog trainer with happy dog"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />
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
            className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
});

AboutHero.displayName = "AboutHero";

export default AboutHero;
