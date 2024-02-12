import AppMenu from "../navigation/app-menu";
import LoginLink from "../navigation/links/login-link";
import NavDesktop from "../navigation/nav-desktop";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="h-20 lg:h-24 sticky top-0 z-50 flex items-center justify-between border-b bg-gray-100 px-4 md:px-8 lg:px-12">
      {/* Header left */}
      <div className="flex items-center">
        <Logo className="md:text-2xl md:border-r md:border-gray-300 md:pr-4" />
        <NavDesktop className="hidden md:block" />
      </div>

      {/* Header right */}
      <div>
        <AppMenu />
        <LoginLink className="hidden md:block" />
      </div>
    </header>
  );
}
