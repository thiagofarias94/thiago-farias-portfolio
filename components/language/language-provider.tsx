"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "EN" | "PT";

type LangContext = {
  language: Lang;
  setLanguage: (l: Lang) => void;
};

const LanguageContext = createContext<LangContext | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>(() => {
    if (typeof window === "undefined") return "EN";
    return (localStorage.getItem("language") as Lang) || "EN";
  });

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {}
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
