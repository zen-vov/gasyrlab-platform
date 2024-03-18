import { Navbar } from "@/entities/Navbar";
import { LangSwitcher } from "@/features/lang-switcher";

export default function Header() {
  return (
    <header>
      <Navbar />
      <LangSwitcher />
    </header>
  );
}
