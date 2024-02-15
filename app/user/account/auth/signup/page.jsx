import SignupForm from "@/app/ui/forms/signup-form";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-8">
      <div className="min-h-screen flex justify-center items-center bg-white lg:col-span-3">
        <div className="w-full max-w-md p-4">
          <div>
            <h1 className="text-gray-800 text-2xl md:text-[1.7rem] font-bold">
              Sign up
            </h1>
            <p className="text-gray-600 text-sm md:text-base my-4 md:mb-6">
              Hello
              <br />
              The entry point of exploring dream homes.
            </p>
          </div>

          <div>
            <SignupForm className="w-full mb-1" />
            <Link href="./login" className="inline-block text-sm md:text-base">
              I have an account!
              <span className="font-bold ml-1 text-blue-600">Login</span>
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/images/hero.jpg"
        width={720}
        height={480}
        className="hidden md:block lg:col-span-5 w-full h-full object-cover"
      />
    </div>
  );
}
