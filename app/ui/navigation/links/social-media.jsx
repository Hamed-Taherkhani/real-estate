import { socialMedia } from "@/app/lib/data/placeholder-data";
import List from "../../data display/list";
import { twMerge } from "tailwind-merge";

export default function SocialMedia({ className }) {
  return (
    <List
      items={socialMedia}
      renderItem={({ title, href }) => (
        <a href={href} type="_blank" className="block p-4">
          {title}
        </a>
      )}
      className={twMerge("flex text-2xl", className)}
    />
  );
}
