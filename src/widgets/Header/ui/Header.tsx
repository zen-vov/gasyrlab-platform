import { Navbar } from "@/entities/Navbar";
import { LangSwitcher } from "@/features/lang-switcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between container">
      <Navbar />
      <LangSwitcher />
    </header>
  );
}
