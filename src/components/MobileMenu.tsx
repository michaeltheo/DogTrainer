import { memo, useCallback, useEffect, useRef } from "react";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

interface SubMenuItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  submenu?: SubMenuItem[];
}

interface MobileMenuProps {
  navItems: NavItem[];
  pathname: string;
  onClose: () => void;
}

const MobileMenu = memo(({ navItems, pathname, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {/* Mobile menu content - relative positioned with slide animation */}
      <div
        ref={menuRef}
        className="relative max-h-[calc(100vh-4rem)] z-50 md:hidden bg-white shadow-xl overflow-y-auto animate-slideInRight"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                  pathname === item.href
                    ? "text-orange-300"
                    : "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className={`block px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        pathname === subitem.href
                          ? "text-orange-300"
                          : "text-gray-600 hover:text-primary-700 hover:bg-primary-50"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-3 py-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
