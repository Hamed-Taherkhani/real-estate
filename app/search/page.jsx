import SearchForm from "../ui/forms/search-form";
import Footer from "../ui/layouts/footer";
import Header from "../ui/layouts/header";
import FilterSearchResults from "./ui/filter-search-results";
import Homes from "./ui/homes";

export default function SearchPage() {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
        <div className="h-12 bg-gray-100 border-b py-1 px-4 md:px-8 lg:px-12 flex gap-2">
          <SearchForm className="w-full" />
          <FilterSearchResults />
        </div>
      </div>
      <main>
        <Homes />
      </main>
      <Footer />
    </div>
  );
}
