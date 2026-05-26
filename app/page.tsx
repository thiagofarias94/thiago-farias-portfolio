"use client";

import React from "react";
import { useLanguage } from "../components/language/language-provider";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  const { language } = useLanguage();

  const t = {
    EN: {
      role: "Software Engineer",
      heading: ["Building", "reliable and", "scalable", "software", "experiences."],
      para:
        "Focused on test automation, quality engineering, frontend and backend development and modern software architecture.",
      cta: "View Experience",
      resume: "Download Resume",
      introCard: "Hi, I'm Thiago, a passionate software engineer. Let's connect and collaborate on exciting projects together!",
    },
    PT: {
      role: "Engenheiro de Software",
      heading: ["Construindo", "confiáveis e", "escaláveis", "experiências", "de software."],
      para:
        "Focado em automação de testes, qualidade, frontend e backend e arquitetura moderna de software.",
      cta: "Ver Experiência",
      resume: "Baixar Currículo",
      introCard: "Oi, sou Thiago, um engenheiro de software apaixonado. Vamos conectar e colaborar em projetos empolgantes!",
    },
  } as const;

  const L = t[language as keyof typeof t];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-6 py-10">
        <div className="grid items-center gap-0 lg:grid-cols-[1fr_1fr]">

          {/* LEFT SIDE */}
          <div className="max-w-[780px]">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--sidebar-accent)]">
              {L.role}
            </p>

            <h1
              className={
                "text-[7rem] font-bold leading-[0.88] tracking-[-0.06em] text-foreground"
              }
            >
              {L.heading.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-500">{L.para}</p>

            <div className="mt-12 flex gap-5">
              <button className="rounded-full bg-[var(--primary)] px-8 py-4 text-lg text-white transition hover:opacity-90">{L.cta}</button>

              <button className="rounded-full border border-[var(--primary)] px-8 py-4 text-lg text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white">{L.resume}</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">

            {/* glow */}
            <div className="absolute z-0 h-[700px] w-[700px] rounded-full bg-[var(--sidebar-accent)] opacity-10 blur-3xl" />

            {/* splash */}
            <img src="/images/splash.png" alt="Splash" className="absolute z-0 w-[820px] max-w-none object-contain opacity-95 translate-x-10 translate-y-8" />

            {/* image */}
            <div className="relative z-10">
              <img src="/images/profile_pic.svg" alt="Thiago" className="h-[920px] w-auto object-contain mix-blend-multiply drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]" />
            </div>

            {/* intro card */}
            <div className="absolute right-[5px] top-[90px] z-10 rounded-[24px] border border-zinc-200/60 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-md">
              <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-zinc-500">{L.introCard}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}