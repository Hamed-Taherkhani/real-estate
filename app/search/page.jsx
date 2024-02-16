import SearchForm from "../ui/forms/search-form";
import Header from "../ui/layouts/header";
import FilterSearchResults from "./ui/filter-search-results";

export default function SearchPage() {
  return (
    <div>
      <div>
        <Header />
        <div className="h-12 border-b py-1 px-4 md:px-8 lg:px-12 flex gap-2">
          <SearchForm className="w-full" />
          <FilterSearchResults />
        </div>
      </div>
    </div>
  );
}
