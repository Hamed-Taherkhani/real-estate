import Image from "next/image";
import SearchFormHero from "./forms/search-form-hero";

export default function Hero() {
  return (
    <div className="w-full h-[25rem] md:h-[27rem] lg:h-[30rem] overflow-hidden p-2 md:px-8 lg:px-12">
      <div className="w-full h-full rounded-lg overflow-hidden relative">
        <Image
          src="/images/hero.jpg"
          width={720}
          height={480}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center text-gray-50 bg-black/50">
          <h2 className="text-4xl md:text-[2.75rem] font-bold mb-4 md:mb-6 text-center">
            Find more
            <br />
            than a Home
          </h2>
          <SearchFormHero />
        </div>
      </div>
    </div>
  );
}
