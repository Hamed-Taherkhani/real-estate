import SearchBtn from "../inputs/search-btn";
import SearchInput from "../inputs/search-input.";

export default function SearchFormHero() {
  return (
    <form className="w-full flex flex-col items-center">
      <fieldset className="mb-4 flex">
        <label className="relative cursor-pointer">
          <input
            type="radio"
            name="cat"
            defaultChecked
            hidden
            className="peer"
          />
          <span className="text-xl px-4 py-2 block">Buy</span>
          <span className="block h-1 w-0 bg-gray-50 rounded-full transition-[width] duration-300 peer-checked:w-full" />
        </label>
        <label className="relative cursor-pointer">
          <input type="radio" name="cat" hidden className="peer" />
          <span className="text-xl px-4 py-2 block">Rent</span>
          <span className="block h-1 w-0 bg-gray-50 rounded-full transition-[width] duration-300 peer-checked:w-full" />
        </label>
        <label className="relative cursor-pointer">
          <input type="radio" name="cat" hidden className="peer" />
          <span className="text-xl px-4 py-2 block">Mortgage</span>
          <span className="block h-1 w-0 bg-gray-50 rounded-full transition-[width] duration-300 peer-checked:w-full" />
        </label>
      </fieldset>
      <div className="flex bg-gray-50 rounded-full w-9/12 max-w-md">
        <SearchInput className="rounded-l-full flex-1" />
        <SearchBtn className="sm:w-[3.25rem] sm:h-[3.25rem] lg:w-14 lg:h-14 text-xl sm:text-2xl" />
      </div>
    </form>
  );
}
