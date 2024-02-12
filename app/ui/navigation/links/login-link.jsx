import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function LoginLink({ className }) {
  return (
    <Link
      href="/user/account/login"
      className={twMerge(
        "block bg-black text-gray-50 px-6 py-2 rounded-full ",
        className
      )}
    >
      Login
    </Link>
  );
}
