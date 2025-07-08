import { Logo } from "../../ui";

export const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a] border-b border-[#333]">
    <div className="flex items-center">
      <Logo />
    </div>
  </header>
);
