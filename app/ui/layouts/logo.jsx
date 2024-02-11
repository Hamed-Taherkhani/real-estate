import { twMerge } from "tailwind-merge";
import Element from "../element";
import Link from "next/link";

export default function Logo({ elementName, className }) {
  return (
    <Link href="/">
      <Element
        name={elementName || "h1"}
        className={twMerge("text-xl font-medium", className)}
      >
        RealEstate
      </Element>
    </Link>
  );
}
