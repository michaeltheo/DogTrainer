import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

// Social media links configuration with official brand colors
export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/virginia_dogtrainers.gr/",
    icon: InstagramIcon,
    color: "text-[#E4405F]", // Instagram Pink/Red
    hoverColor: "hover:text-[#E4405F]",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-pink-50",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/dogtrainers.gr/",
    icon: FacebookIcon,
    color: "text-[#1877F2]", // Facebook Blue
    hoverColor: "hover:text-[#1877F2]",
    bgColor: "bg-white",
    hoverBgColor: "hover:bg-blue-50",
  },
];

// Contact links
export const contactLinks = [
  {
    name: "Email",
    icon: EnvelopeIcon,
    href: "mailto:virginia@dogtrainers.gr",
    value: "virginia@dogtrainers.gr",
    color: "hover:text-blue-600",
  },
  {
    name: "Phone",
    icon: PhoneIcon,
    href: "tel:+306989835114",
    value: "+30 698 983 5114",
    color: "hover:text-green-600",
  },
];
