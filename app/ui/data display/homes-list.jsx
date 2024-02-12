import { twMerge } from "tailwind-merge";
import HomeCard from "./home-card";
import List from "./list";

export default function HomesList({ items, className }) {
  return (
    <List
      items={items}
      renderItem={(item, index) => <HomeCard {...item} tabIndex={index} />}
      className={twMerge("grid gap-4", className)}
    />
  );
}
