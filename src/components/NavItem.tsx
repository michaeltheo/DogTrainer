import { memo } from "react";
import { Link } from "@/i18n/routing";

interface SubMenuItem {
  href: string;
  label: string;
}

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  submenu?: SubMenuItem[];
  pathname: string;
}

const ChevronIcon = memo(() => (
  <svg
    className="ml-1 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
));

ChevronIcon.displayName = "ChevronIcon";

const NavItem = memo(
  ({ href, label, isActive, submenu, pathname }: NavItemProps) => {
    return (
      <div className="relative group">
        <Link
          href={href}
          className={`inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
            isActive
              ? "text-orange-500"
              : "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
          }`}
        >
          {label}
          {submenu && <ChevronIcon />}
        </Link>
        {submenu && (
          <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-lg border border-primary-200">
            <div className="py-2">
              {submenu.map((subitem) => (
                <Link
                  key={subitem.href}
                  href={subitem.href}
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg mx-2 transition-colors ${
                    pathname === subitem.href
                      ? "text-orange-500"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-800"
                  }`}
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

NavItem.displayName = "NavItem";

export default NavItem;
