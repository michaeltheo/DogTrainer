"use client";

import { memo } from "react";
import { useTranslations } from "next-intl";
import { ClockIcon } from "@heroicons/react/24/outline";

const WorkingHours = memo(() => {
  const t = useTranslations("contact");

  const schedule = [
    { day: "Δευτέρα - Παρασκευή", hours: "10:00 - 20:00" },
    { day: "Σάββατο", hours: "11:00 - 15:00" },
    { day: "Κυριακή", hours: "Κλειστά" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("info.hours")}
            </h2>
            <div className="w-20 h-1.5 bg-linear-to-r from-accent-400 to-accent-600 rounded-full mx-auto" />
          </div>

          {/* Working Hours Card */}
          <div
            className="bg-linear-to-br from-accent-50 to-accent-100 rounded-2xl p-8 md:p-12 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-linear-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
            </div>

            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center pb-6 border-b border-accent-200 last:border-b-0 last:pb-0"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.day}
                  </span>
                  <span className="text-lg md:text-xl font-bold text-accent-600">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/70 rounded-lg text-center">
              <p className="text-sm md:text-base text-gray-700">
                <strong>Σημείωση:</strong> Τα ραντεβού γίνονται μόνο με κράτηση.
                Επικοινωνήστε μαζί μας για να κλείσετε το δικό σας ραντεβού!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WorkingHours.displayName = "WorkingHours";

export default WorkingHours;
