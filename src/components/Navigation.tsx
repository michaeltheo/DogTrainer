"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useCallback, useMemo, useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = useMemo(() => [
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
  ], [t]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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
          <div className="flex items-center md:hidden">
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
        />
      )}
    </nav>
  );
}
