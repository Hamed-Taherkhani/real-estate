import AppMenu from "../navigation/app-menu";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="h-20 sticky top-0 z-50 flex items-center justify-between border-b bg-gray-100 px-4 md:p-8 lg:p-12">
      {/* Header left */}
      <div>
        <Logo />
      </div>

      {/* Header right */}
      <div>
        <AppMenu />
      </div>
    </header>
  );
}
