import { homesList } from "@/app/lib/data/placeholder-data";
import HomeCard from "@/app/ui/data display/home-card";
import List from "@/app/ui/data display/list";

export default function Homes() {
  return (
    <div>
      <List
        className="p-4 grid gap-4 md:grid-cols-2"
        items={homesList}
        renderItem={(home) => <HomeCard {...home} />}
      />
    </div>
  );
}
