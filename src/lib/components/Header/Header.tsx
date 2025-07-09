import { Logo } from "../../ui";

export const Header = () => (
  <header className="fixed top-0 left-0 w-full p-4 z-10 bg-[#1a1a1a] border-b border-[#333]">
    <div className="flex items-center">
      <Logo />
    </div>
  </header>
);
