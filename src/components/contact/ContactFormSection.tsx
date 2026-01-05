"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@heroui/react";
import { ClockIcon } from "@heroicons/react/24/solid";

const ContactFormSection = memo(() => {
  const tForm = useTranslations("contact.form");
  const tHours = useTranslations("contact.hours");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.currentTarget.reset();
    }, 3000);
  };

  const services = [
    { key: "training", label: tForm("serviceTraining") },
    { key: "sitting", label: tForm("serviceSitting") },
    { key: "adventures", label: tForm("serviceAdventures") },
  ];

  const schedule = [
    { day: tHours("weekdays"), hours: tHours("weekdaysHours") },
    { day: tHours("saturday"), hours: tHours("saturdayHours") },
    { day: tHours("sunday"), hours: tHours("sundayHours") },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div data-aos="fade-right">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {tForm("title")}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6" />
                <p className="text-lg text-gray-700">
                  {tForm("description")}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
                <form
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-gray-700 font-semibold text-sm"
                    >
                      {tForm("name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder={tForm("namePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-gray-700 font-semibold text-sm"
                    >
                      {tForm("email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder={tForm("emailPlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-gray-700 font-semibold text-sm"
                    >
                      {tForm("phone")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder={tForm("phonePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="dogName"
                      className="text-gray-700 font-semibold text-sm"
                    >
                      {tForm("dogName")}
                    </label>
                    <input
                      id="dogName"
                      type="text"
                      name="dogName"
                      placeholder={tForm("dogNamePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="text-gray-700 font-semibold text-sm"
                    >
                      {tForm("service")} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                    >
                      <option value="">{tForm("selectService")}</option>
                      {services.map((service) => (
                        <option key={service.key} value={service.key}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-gray-700 font-semibold text-sm"
                    >
                      {tForm("message")} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={tForm("messagePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="font-bold text-lg mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg"
                    isLoading={isSubmitting}
                  >
                    {tForm("submit")}
                  </Button>

                  {submitted && (
                    <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl text-center">
                      <p className="font-semibold">
                        {tForm("successMessage")}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Side - Working Hours */}
            <div data-aos="fade-left">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {tHours("title")}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6" />
                <p className="text-lg text-gray-700">
                  {tHours("description")}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <ClockIcon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                    >
                      <span className="text-lg md:text-xl font-semibold text-gray-900">
                        {item.day}
                      </span>
                      <span className="text-lg md:text-xl font-bold text-orange-600">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm md:text-base text-gray-800 text-center leading-relaxed">
                    <strong className="text-orange-600">{tHours("note")}</strong> {tHours("noteText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactFormSection.displayName = "ContactFormSection";

export default ContactFormSection;
