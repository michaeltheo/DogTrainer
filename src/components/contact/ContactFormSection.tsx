"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@heroui/react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const ContactFormSection = memo(() => {
  const tForm = useTranslations("contact.form");
  const tHours = useTranslations("contact.hours");
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string>("");

  const { register, reset, handleSubmit, formState: { isSubmitting } } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: "af79f74c-6252-4ba0-8016-bc4da25495e2",
    settings: {
      from_name: "Dog Trainers Website",
      subject: "New Contact Form Submission",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setResult("");
      }, 5000);
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

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
                  onSubmit={handleSubmit(onSubmit)}
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
                      placeholder={tForm("namePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                      {...register("name", { required: true })}
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
                      placeholder={tForm("emailPlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                      {...register("email", { required: true })}
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
                      placeholder={tForm("phonePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                      {...register("phone")}
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
                      placeholder={tForm("dogNamePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                      {...register("dogName")}
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
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900"
                      {...register("service", { required: true })}
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
                      rows={5}
                      placeholder={tForm("messagePlaceholder")}
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-gray-900 resize-none"
                      {...register("message", { required: true })}
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

                  {result && (
                    <div className={`${
                      isSuccess
                        ? "bg-green-50 border-green-500 text-green-700"
                        : "bg-red-50 border-red-500 text-red-700"
                    } border-2 px-6 py-4 rounded-xl text-center`}>
                      <p className="font-semibold">
                        {isSuccess ? tForm("successMessage") : result}
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
