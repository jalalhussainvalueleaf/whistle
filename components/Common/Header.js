import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/Menu/MobileMenu";

function Header({ toggleLogin }) {
  const pathname = usePathname();

  return (
    <div className="absolute z-50 flex w-full items-center justify-between p-4">
      {pathname === "/" ? (
        <div></div>
      ) : (
        <Link href="/">
          <Image
            src="/images/whl-logo.png"
            width={400}
            height={400}
            className="w-28"
          />
        </Link>
      )}
      {pathname === "/" ? (
        <button
          className="hidden rounded-full bg-wlOrange px-8 py-2 text-white lg:block"
          onClick={() => toggleLogin()}
        >
          Login
        </button>
      ) : (
        <Link
          href=""
          className="hidden rounded-full bg-wlOrange px-8 py-2 text-white lg:block"
        >
          Login
        </Link>
      )}
      <MobileMenu />
    </div>
  );
}

export default Header;
