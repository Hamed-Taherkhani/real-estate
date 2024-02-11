import { twMerge } from "tailwind-merge";

export default function BurgerBtn({ className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-gray-200 w-12 h-12 flex justify-center items-center gap-1 rounded-full",
        className
      )}
    >
      <span className="block w-1.5 h-1.5 bg-black rounded-full" />
      <span className="block w-1.5 h-1.5 bg-black rounded-full" />
    </button>
  );
}
