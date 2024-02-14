import { footerLinks } from "@/app/lib/data/placeholder-data";
import List from "../data display/list";
import Logo from "./logo";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import SocialMedia from "../navigation/links/social-media";

export default function Footer({ className }) {
  return (
    <footer className={twMerge("p-4 md:p-8 lg:p-12 border-t", className)}>
      <Logo
        elementName="p"
        className="text-2xl pt-6 md:pt-0 md:text-3xl md:mb-2 md:text-dark-blue transition-[color] duration-700 delay-300"
      />
      <div className="text-lg text-gray-500 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-12">
        <h3 className="mb-4 lg:col-start-1 lg:col-end-6">
          Our company founded to help people to find their dream home as easily
          as possible.
        </h3>

        <List
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:col-start-6 lg:col-end-13"
          items={footerLinks}
          renderItem={({ title, links }) => (
            <>
              <h5 className="font-medium text-gray-700">{title}</h5>
              <List
                items={links}
                renderItem={({ title, href }) => (
                  <Link href={href} className="block">
                    {title}
                  </Link>
                )}
              />
            </>
          )}
        />
      </div>

      <div className="mt-8 mb-4 md:mt-14 md:mb-0">
        <span className="block w-9/12 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <SocialMedia className="justify-center text-gray-500 py-2 md:text-[1.6rem]" />
      </div>
    </footer>
  );
}
