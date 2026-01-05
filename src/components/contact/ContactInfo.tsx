"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ContactInfo = memo(() => {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: PhoneIcon,
      title: t("info.phone"),
      content: "+30 698 983 5114",
      href: "tel:+306989835114",
    },
    {
      icon: EnvelopeIcon,
      title: t("info.email"),
      content: "virginia@dogtrainers.gr",
      href: "mailto:virginia@dogtrainers.gr",
    },
    {
      icon: MapPinIcon,
      title: t("info.address"),
      content: "Τσιμισκή 31, 54624 Θεσσαλονίκη",
      href: null,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Επικοινωνήστε Μαζί Μας
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Είμαστε εδώ για να σας βοηθήσουμε με τις ανάγκες του σκύλου σας
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-accent-50 to-orange-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-accent-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-800 hover:text-accent-600 transition-colors font-medium"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-medium">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ContactInfo.displayName = "ContactInfo";

export default ContactInfo;
