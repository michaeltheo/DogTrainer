"use client";

import { memo, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CTASection = memo(() => {
  const t = useTranslations("cta");
  const router = useRouter();
  const locale = useLocale();

  const handleClick = useCallback(() => {
    router.push(`/${locale}/contact`);
  }, [locale, router]);

  return (
    <section className="relative h-100  w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/dog-adventures.jpg"
          alt="Εκπαίδευση σκύλων και φύλαξη σκύλων Θεσσαλονίκη - Dog training and dog sitting services"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          quality={75}
          priority={false}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Main Heading */}
            <h2 className="text-3xl  font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              {t("title")}
            </h2>

            {/* Subheading */}
            <p
              className="text-lg  text-white/90 mb-8 drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("subtitle")}
            </p>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className=" font-bold text-lg px-8 py-6 shadow-3xl hover:shadow-4xl transition-all transform hover:scale-105 hover:cursor-pointer"
                onClick={handleClick}
              >
                {t("button")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
