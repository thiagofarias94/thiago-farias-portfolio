"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../language/language-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const t = {
    EN: { about: "About", experience: "Experience", contact: "Let's talk!" },
    PT: { about: "Sobre", experience: "Experiência", contact: "Vamos conversar" },
  } as const;

  const L = t[language as keyof typeof t];

  return (
    <header className="w-full px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-4xl font-bold tracking-[-0.08em]">
          Thiago.
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link href="/about">{L.about}</Link>
          <Link href="/experience">{L.experience}</Link>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          {/* LANGUAGE */}
          <button
            onClick={() => setLanguage(language === "EN" ? "PT" : "EN")}
            className={
              "rounded-full border border-zinc-200 px-4 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            }
          >
            {language}
          </button>

          {/* DARK MODE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={
              "flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            }
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className={
              "rounded-full bg-[var(--primary)] px-6 py-3 text-sm text-[var(--primary-foreground)] transition hover:opacity-90"
            }
          >
            {L.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
