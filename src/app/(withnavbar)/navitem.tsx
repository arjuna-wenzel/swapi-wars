"use client";

import { INavItem } from "@/interfaces/navitem";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";

export const NavItem = (navItem: INavItem) => {
  const pathname = usePathname();

  const classes = useMemo(() => {
    if (pathname.startsWith(navItem.href)) {
      return "w-full text-center py-3 hover:bg-gray-900 cursor-pointer bg-gray-900";
    }
    return "w-full text-center py-3 hover:bg-gray-900 cursor-pointer";
  }, [pathname, navItem.href]);

  return (
    <Link href={navItem.href} className={classes} key={navItem.href}>
      {navItem.label}
    </Link>
  );
};
