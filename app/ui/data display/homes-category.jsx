import { twMerge } from "tailwind-merge";
import HomesList from "./homes-list";

export default function HomesCategory({ title, items, className }) {
  return (
    <div className={twMerge("p-4 md:p-8 lg:p-12", className)}>
      <h3 className="text-xl mb-4 lg:text-2xl font-medium">{title}</h3>
      <HomesList items={items} className="md:grid-cols-2 lg:grid-cols-4" />
    </div>
  );
}
