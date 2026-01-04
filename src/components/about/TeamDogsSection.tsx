"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TeamDog {
  name: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  gender: "male" | "female";
}

const teamDogs: TeamDog[] = [
  {
    name: "Moufasa",
    titleKey: "dogs.moufasa.title",
    descriptionKey: "dogs.moufasa.description",
    image: "/dog-training-male.jpg",
    gender: "male",
  },
  {
    name: "Kai",
    titleKey: "dogs.kai.title",
    descriptionKey: "dogs.kai.description",
    image: "/dog-training-female.jpg",
    gender: "female",
  },
];

interface DogCardProps {
  dog: TeamDog;
}

const DogCard = memo<DogCardProps>(({ dog }) => {
  const t = useTranslations("about");

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Image Container */}
      <div className="relative h-125 md:h-150 overflow-hidden">
        <Image
          src={dog.image}
          alt={`${dog.name} - ${t(dog.titleKey)}`}
          fill
          quality={75}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

        {/* Floating Name Badge */}
        <div className="absolute top-6 left-6">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">{dog.name}</h3>
          </div>
        </div>

        {/* Title at Bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="px-6 py-4">
            <p className="text-lg md:text-xl font-bold text-white">
              {t(dog.titleKey)}
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-8 md:p-10 bg-linear-to-b from-white to-gray-50">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {t(dog.descriptionKey)}
        </p>

        {/* Decorative Bottom Border */}
        <div className="mt-6 pt-6 border-t-2 border-accent-200">
          <div className="flex items-center justify-center">
            <div className="w-12 h-1 bg-accent-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
});

DogCard.displayName = "DogCard";

const TeamDogsSection = memo(() => {
  const t = useTranslations("about");

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <div className="bg-accent-100 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Meet The Team
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("dogs.title")}
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-accent-400 via-accent-500 to-accent-600 mx-auto rounded-full mb-6 shadow-lg" />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("dogs.subtitle")}
          </p>
        </div>

        {/* Dogs Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {teamDogs.map((dog, index) => (
            <div key={dog.name} data-aos="fade-up" data-aos-delay={index * 150}>
              <DogCard dog={dog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TeamDogsSection.displayName = "TeamDogsSection";

export default TeamDogsSection;
