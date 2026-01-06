"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { socialLinks, contactLinks } from "@/constants/socialLinks";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Cobrelius_logo.png"
                alt="Dog Trainer's Logo"
                width={160}
                height={45}
                className=" hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.home")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.about")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.services")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.contact")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              {t("nav.services")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/dog-training"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.dogTraining")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dog-sitting"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.dogSitting")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dog-adventures"
                  className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t("nav.dogAdventures")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              {t("footer.followUs")}
            </h4>
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full ${social.bgColor} ${social.hoverBgColor} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group`}
                    aria-label={social.name}
                  >
                    <Icon
                      className={`w-5 h-5 ${social.color} group-hover:animate-pulse transition-all duration-300`}
                    />
                  </a>
                );
              })}
            </div>
            {/* Contact Info */}
            <div className="space-y-2">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.name}
                    href={contact.href}
                    className={`flex items-center gap-2 text-gray-400 ${contact.color} transition-colors text-sm group`}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{contact.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Dog Trainer&apos;s. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
