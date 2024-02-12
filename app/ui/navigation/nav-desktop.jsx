"use client";

import Link from "next/link";
import List from "../data display/list";
import { navLinks } from "@/app/lib/data/placeholder-data";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function NavDesktop({ className }) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <List
        items={navLinks}
        renderItem={({ title, href }) => (
          <Link
            href={href}
            className={clsx("block p-4", {
              "text-black font-medium": pathname === href,
            })}
          >
            {title}
          </Link>
        )}
        className="flex text-lg lg:text-xl text-gray-400"
      />
    </nav>
  );
}
