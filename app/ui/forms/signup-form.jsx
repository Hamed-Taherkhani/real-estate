import { twMerge } from "tailwind-merge";
import Input from "../inputs/input";

export default function SignupForm({ className }) {
  return (
    <form className={twMerge("flex flex-col gap-4", className)}>
      <div className="flex gap-2">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm password" type="password" />
      <button
        type="submit"
        className="bg-gray-900 text-gray-50 w-full px-5 py-4 rounded-md"
      >
        Sign up
      </button>
    </form>
  );
}
