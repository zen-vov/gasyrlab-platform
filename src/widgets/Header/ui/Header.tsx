import { Navbar } from "@/entities/Navbar";
import { LangSwitcher } from "@/features/lang-switcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 flex items-center justify-between container">
      <Navbar />
      <LangSwitcher />
      <Link href={'/singup'}>
        Регистрация
      </Link>
    </header>
  );
}
