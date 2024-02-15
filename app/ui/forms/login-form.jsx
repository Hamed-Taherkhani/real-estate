import { twMerge } from "tailwind-merge";
import Input from "../inputs/input";

export default function LoginForm({ className }) {
  return (
    <form className={twMerge("flex flex-col gap-4", className)}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <button
        type="submit"
        className="bg-gray-900 text-gray-50 w-full px-5 py-4 rounded-md"
      >
        Login
      </button>
    </form>
  );
}
