import { twMerge } from "tailwind-merge";
import SearchInput from "../inputs/search-input.";

export default function SearchForm({ className }) {
  return (
    <form className={twMerge(className)}>
      <SearchInput className="bg-gray-200 w-full max-w-md" />
    </form>
  );
}
