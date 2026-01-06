"use client";

import { usePathname } from "@/i18n/routing";
import CTASection from "@/components/home/CTASection";

export default function ConditionalCTA() {
  const pathname = usePathname();

  // Don't show CTA section on contact page
  if (pathname === "/contact") {
    return null;
  }

  return <CTASection />;
}
