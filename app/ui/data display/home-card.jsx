import { formatMoney } from "@/app/lib/money";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { PiBathtub, PiRuler } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";

export default function HomeCard({
  price,
  bed,
  bath,
  sqr,
  city,
  street,
  postal_address,
  lat,
  lon,
  pictures,
  tabIndex,
  className,
}) {
  return (
    <article
      tabIndex={tabIndex}
      className={twMerge("border rounded-xl", className)}
    >
      <div className="aspect-video">
        <Image
          src={pictures[0]}
          alt=""
          width={480}
          height={360}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <main className="p-4 text-gray-600">
        <p className="text-2xl font-medium text-gray-900">
          {formatMoney(price)}
        </p>
        <div className="flex gap-8 text-lg mb-1">
          <div className="flex items-center gap-1">
            <IoBedOutline aria-label="Bedroom" />
            <span>{bed}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiBathtub aria-label="Bathroom" />
            <span>{bath}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiRuler aria-label="Ruler" />
            <span>{sqr}</span>
          </div>
        </div>
        <h4>
          {street}
          <br />
          {city}
        </h4>
      </main>
    </article>
  );
}
