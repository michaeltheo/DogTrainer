import { memo } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Logo = memo(() => {
  return (
    <Link
      href="/"
      className="shrink-0 flex items-center"
      aria-label="Dog Trainer's - Home"
    >
      <Image
        src="/Cobrelius_logo.png"
        alt="Dog Trainer's Logo"
        width={180}
        height={50}
        priority
        className="mr-2"
      />
    </Link>
  );
});

Logo.displayName = "Logo";

export default Logo;
