"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "../language/language-provider";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  const t = {
    EN: {
      about: "About",
      experience: "Experience",
      contact: "Let's talk!",
    },
    PT: {
      about: "Sobre",
      experience: "Experiência",
      contact: "Vamos conversar",
    },
  } as const;

  const L = t[language as keyof typeof t];

  return (
    <header className="w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-[-0.08em] md:text-4xl"
        >
          Thiago.
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/about"
            className="transition hover:opacity-60"
          >
            {L.about}
          </Link>

          <Link
            href="/experience"
            className="transition hover:opacity-60"
          >
            {L.experience}
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* LANGUAGE */}
          <button
            onClick={() =>
              setLanguage(language === "EN" ? "PT" : "EN")
            }
            className="
              rounded-full
              border
              border-[var(--border)]
              px-4
              py-2
              text-sm
              transition
              hover:bg-black/5
              dark:hover:bg-white/5
            "
          >
            {language}
          </button>

          {/* DARK MODE */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              transition
              hover:bg-black/5
              dark:hover:bg-white/5
            "
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              rounded-full
              bg-[var(--primary)]
              px-6
              py-3
              text-sm
              text-[var(--primary-foreground)]
              transition
              hover:opacity-90
            "
          >
            {L.contact}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            lg:hidden
          "
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mt-4
              rounded-[28px]
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-6
              shadow-sm
              backdrop-blur-xl
              lg:hidden
            "
          >
            {/* LINKS */}
            <nav className="flex flex-col gap-6">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {L.about}
              </Link>

              <Link
                href="/experience"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {L.experience}
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {L.contact}
              </Link>
            </nav>

            {/* ACTIONS */}
            <div className="mt-8 flex items-center gap-3">

              {/* LANGUAGE */}
              <button
                onClick={() =>
                  setLanguage(language === "EN" ? "PT" : "EN")
                }
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  px-4
                  py-2
                  text-sm
                "
              >
                {language}
              </button>

              {/* DARK MODE */}
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                "
              >
                {theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;