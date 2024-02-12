import { FiSearch } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export default function SearchBtn({ type, className }) {
  return (
    <button
      type={type || "submit"}
      aria-label="Search"
      className={twMerge(
        "bg-black w-11 h-11 flex justify-center items-center rounded-full relative -right-[1px]",
        className
      )}
    >
      <FiSearch aria-label="Search icon" />
    </button>
  );
}
