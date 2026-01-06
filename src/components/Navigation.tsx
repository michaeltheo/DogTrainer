"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { socialLinks } from "@/constants/socialLinks";

export default function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLDivElement>(null);

  const navItems = useMemo(
    () => [
      { href: "/", label: t("home") },
      { href: "/about", label: t("about") },
      {
        href: "/services",
        label: t("services"),
        submenu: [
          { href: "/services/dog-training", label: t("dogTraining") },
          { href: "/services/dog-sitting", label: t("dogSitting") },
          { href: "/services/dog-adventures", label: t("dogAdventures") },
        ],
      },
      { href: "/contact", label: t("contact") },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`shadow-md md:sticky top-0 z-50 min-w-[320px] transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      } ${mobileMenuOpen ? "sticky" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 min-w-0">
          <div className="flex items-center gap-4 min-w-0 shrink">
            <Logo />
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-full ${social.bgColor} ${social.hoverBgColor} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md group`}
                    aria-label={social.name}
                  >
                    <Icon
                      className={`w-4 h-4 ${social.color} group-hover:animate-pulse transition-all duration-300`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8 shrink-0">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
                submenu={item.submenu}
                pathname={pathname}
              />
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div
            ref={mobileMenuButtonRef}
            className="flex items-center md:hidden shrink-0"
          >
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MobileMenu
          navItems={navItems}
          pathname={pathname}
          onClose={closeMobileMenu}
          buttonRef={mobileMenuButtonRef}
        />
      )}
    </nav>
  );
}
