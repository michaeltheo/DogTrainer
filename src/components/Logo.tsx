import { memo } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Logo = memo(() => {
  return (
    <Link
      href="/"
      className="flex items-center min-w-0"
      aria-label="Dog Trainer's - Home"
    >
      <Image
        src="/Cobrelius_logo.png"
        alt="Dog Trainer's Logo"
        width={180}
        height={50}
        priority
      />
    </Link>
  );
});

Logo.displayName = "Logo";

export default Logo;
