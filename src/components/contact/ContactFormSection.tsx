"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Form, Input, Textarea, Select, SelectItem, Button } from "@heroui/react";
import { ClockIcon } from "@heroicons/react/24/solid";

const ContactFormSection = memo(() => {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

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
    { key: "training", label: "Dog Training - Εκπαίδευση Σκύλων" },
    { key: "sitting", label: "Dog Sitting - Φύλαξη Σκύλων" },
    { key: "adventures", label: "Dog Adventures - Εκδρομές στη Φύση" },
  ];

  const schedule = [
    { day: "Δευτέρα - Παρασκευή", hours: "10:00 - 20:00" },
    { day: "Σάββατο", hours: "11:00 - 15:00" },
    { day: "Κυριακή", hours: "Κλειστά" },
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
                  Στείλτε μας Μήνυμα
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mb-6" />
                <p className="text-lg text-gray-700">
                  Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το
                  συντομότερο
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <Form
                  className="flex flex-col gap-6"
                  validationErrors={errors}
                  onSubmit={handleSubmit}
                >
                  <Input
                    type="text"
                    label={t("name")}
                    name="name"
                    isRequired
                    labelPlacement="outside"
                    placeholder="Π.χ. Γιάννης Παπαδόπουλος"
                    variant="bordered"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                    }}
                  />

                  <Input
                    type="email"
                    label={t("email")}
                    name="email"
                    isRequired
                    labelPlacement="outside"
                    placeholder="email@example.com"
                    variant="bordered"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                    }}
                  />

                  <Input
                    type="tel"
                    label={t("phone")}
                    name="phone"
                    labelPlacement="outside"
                    placeholder="+30 698 983 5114"
                    variant="bordered"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                    }}
                  />

                  <Input
                    type="text"
                    label={t("dogName")}
                    name="dogName"
                    labelPlacement="outside"
                    placeholder="Π.χ. Μαξ"
                    variant="bordered"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                    }}
                  />

                  <Select
                    label={t("service")}
                    name="service"
                    isRequired
                    labelPlacement="outside"
                    placeholder={t("selectService")}
                    variant="bordered"
                    classNames={{
                      trigger:
                        "border-gray-300 hover:border-accent-500 data-[focus=true]:border-accent-500",
                    }}
                  >
                    {services.map((service) => (
                      <SelectItem key={service.key}>{service.label}</SelectItem>
                    ))}
                  </Select>

                  <Textarea
                    label={t("message")}
                    name="message"
                    isRequired
                    labelPlacement="outside"
                    placeholder="Πείτε μας για τον σκύλο σας και τις ανάγκες σας..."
                    minRows={5}
                    variant="bordered"
                    classNames={{
                      input: "text-base",
                      inputWrapper:
                        "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                    }}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                    isLoading={isSubmitting}
                    size="lg"
                  >
                    {t("submit")}
                  </Button>

                  {submitted && (
                    <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg text-center">
                      <p className="font-semibold">
                        Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας σύντομα.
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>

            {/* Right Side - Working Hours */}
            <div data-aos="fade-left">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Ωράριο Λειτουργίας
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mb-6" />
                <p className="text-lg text-gray-700">
                  Επικοινωνήστε μαζί μας εντός του ωραρίου μας
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-orange-100 rounded-2xl p-8 md:p-10 shadow-lg border-2 border-accent-200">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                    <ClockIcon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-6 border-b border-accent-300 last:border-b-0 last:pb-0"
                    >
                      <span className="text-lg md:text-xl font-semibold text-gray-900">
                        {item.day}
                      </span>
                      <span className="text-lg md:text-xl font-bold text-accent-600">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white rounded-xl border-2 border-accent-300 shadow-sm">
                  <p className="text-sm md:text-base text-gray-800 text-center leading-relaxed">
                    <strong className="text-accent-600">Σημείωση:</strong> Τα
                    ραντεβού γίνονται μόνο με κράτηση. Επικοινωνήστε μαζί μας
                    για να κλείσετε το δικό σας ραντεβού!
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
