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
      cta: "View LinkedIn",
      resume: "Download Resume",
      introCard: "Hi, I'm Thiago, a passionate software engineer. Let's connect and collaborate on exciting projects together!",
    },
    PT: {
      role: "Engenheiro de Software",
      heading: ["Construindo", "confiáveis e", "escaláveis", "experiências", "de software."],
      para:
        "Focado em automação de testes, qualidade, frontend e backend e arquitetura moderna de software.",
      cta: "Ver LinkedIn",
      resume: "Baixar Currículo",
      introCard: "Oi, sou Thiago, um engenheiro de software apaixonado. Vamos conectar e colaborar em projetos empolgantes!",
    },
  } as const;

  const L = t[language as keyof typeof t];

  // LinkedIn URL - update with your profile
  const LINKEDIN_URL = "https://linkedin.com/in/thiago-farias-b09280163";

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/docs/Thiago_Farias_SDET_QA_Automation_Engineer.pdf";
    link.download = "Thiago_Farias_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewLinkedIn = () => {
    window.open(LINKEDIN_URL, "_blank");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

<section className="container mx-auto overflow-hidden px-6 py-8 md:py-12">
  <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">

    {/* LEFT SIDE */}
    <div className="max-w-[780px] order-2 lg:order-1">

      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--sidebar-accent)] md:text-sm">
        {L.role}
      </p>

      <h1
        className="
          text-[3.5rem]
          font-bold
          leading-[0.92]
          tracking-[-0.08em]
          text-foreground

          sm:text-[4.5rem]
          md:text-[5.5rem]
          lg:text-[6rem]
        "
      >
        {L.heading.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>

      <p
        className="
          mt-8
          max-w-xl
          text-base
          leading-relaxed
          text-[var(--muted)]

          md:text-lg
        "
      >
        {L.para}
      </p>

      {/* BUTTONS */}
      <div
        className="
          mt-10
          flex
          flex-col
          gap-4

          sm:flex-row
        "
      >
        <button
          onClick={handleViewLinkedIn}
          className="
            rounded-full
            bg-[var(--primary)]
            px-8
            py-4
            text-base
            text-white
            transition
            hover:opacity-90
            hover:scale-[1.02]
            active:scale-[0.98]
          "
        >
          {L.cta}
        </button>

        <button
          onClick={handleDownloadResume}
          className="
            rounded-full
            border
            border-[var(--primary)]
            px-8
            py-4
            text-base
            text-[var(--primary)]
            transition
            hover:bg-[var(--primary)]
            hover:text-white
            hover:scale-[1.02]
            active:scale-[0.98]
          "
        >
          {L.resume}
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div
      className="
        relative
        flex
        items-center
        justify-center

        order-1
        lg:order-2
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          z-0
          h-[320px]
          w-[320px]
          rounded-full
          bg-[var(--sidebar-accent)]
          opacity-10
          blur-3xl

          md:h-[500px]
          md:w-[500px]
        "
      />

      {/* splash */}
      <img
        src="/images/splash.png"
        alt="Splash"
        className="
          absolute
          z-0
          w-[340px]
          max-w-none
          object-contain
          opacity-90

          md:w-[520px]
          lg:w-[760px]
        "
      />

      {/* image */}
      <div className="relative z-10">
        <img
          src="/images/profile_pic.svg"
          alt="Thiago"
          className="
            h-[420px]
            w-auto
            object-contain

            md:h-[620px]
            lg:h-[860px]
          "
        />
      </div>

      {/* intro card */}
      <div
        className="
          absolute
          bottom-[10px]
          right-[0px]
          z-10
          max-w-[220px]
          rounded-[20px]
          border
          border-[var(--border)]
          bg-[var(--card)]
          px-4
          py-4
          shadow-sm
          backdrop-blur-md

          md:right-[20px]
          md:top-[80px]
          md:bottom-auto
          md:max-w-[260px]
        "
      >
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {L.introCard}
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}