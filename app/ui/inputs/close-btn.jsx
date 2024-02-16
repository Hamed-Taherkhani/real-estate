import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export default function CloseBtn({ onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "text-2xl w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center",
        className
      )}
    >
      <IoClose aria-label="Close" />
    </button>
  );
}
