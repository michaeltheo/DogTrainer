"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Card, CardBody, CardFooter, Divider, Button } from "@heroui/react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard = memo(
  ({ image, imageAlt, title, description, link, delay }: ServiceCardProps) => {
    const t = useTranslations("common");

    return (
      <Card className="h-full" data-aos="fade-up" data-aos-delay={delay}>
        <CardBody className="p-8 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image src={image} alt={imageAlt} fill className="object-contain" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-base text-gray-700 leading-relaxed text-left hyphens-auto">
            {description}
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="justify-center p-4">
          <Button
            as={Link}
            href={link}
            variant="solid"
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 font-semibold hover:scale-105 transition-all text-white"
            endContent={
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          >
            {t("learnMore")}
          </Button>
        </CardFooter>
      </Card>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

const ServicesOverview = memo(() => {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  const services = [
    {
      image: "/dog-sitting.png",
      imageAlt: tCommon("imageAlt.dogSitting"),
      title: t("services.sitting.title"),
      description: t("services.sitting.description"),
      link: "/services/dog-sitting",
    },
    {
      image: "/dog-training.png",
      imageAlt: tCommon("imageAlt.dogTraining"),
      title: t("services.training.title"),
      description: t("services.training.description"),
      link: "/services/dog-training",
    },
    {
      image: "/dog-adventure.png",
      imageAlt: tCommon("imageAlt.dogAdventure"),
      title: t("services.adventures.title"),
      description: t("services.adventures.description"),
      link: "/services/dog-adventures",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("services.title")}
            </h2>
            <Divider className="max-w-24 mx-auto bg-orange-500 h-1" />
          </div>

          <p
            className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("services.subtitle")}
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={200 + index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesOverview.displayName = "ServicesOverview";

export default ServicesOverview;
