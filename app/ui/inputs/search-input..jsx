import { twMerge } from "tailwind-merge";

export default function SearchInput({ className }) {
  return (
    <input
      type="search"
      name="search"
      placeholder="City, Street, School & ..."
      className={twMerge(
        "outline-none px-4 py-2 bg-gray-50 rounded-md text-black",
        className
      )}
    />
  );
}
