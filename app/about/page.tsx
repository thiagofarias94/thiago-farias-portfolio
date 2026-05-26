"use client";

import React from "react";
import { Navbar } from '../../components/ui/navbar'
import { useLanguage } from '../../components/language/language-provider'

export default function AboutPage() {
  const { language } = useLanguage();

  const t = {
    EN: { title: 'About Me', 
        para1: "I'm a software engineer passionate about building reliable, scalable and user-focused digital experiences.", 
        para2: "I enjoy turning ideas into solid solutions and continuously improving systems, processes and code.", 
        para3: "I'm always eager to learn new technologies and methodologies to stay at the forefront of the industry.", 
        stats: { years: 'Years of experience', projects: 'Projects delivered', learning: 'Learning & building' } },
    PT: { title: 'Sobre Mim', 
        para1: 'Sou um engenheiro de software apaixonado por construir experiências digitais confiáveis e escaláveis.', 
        para2: 'Gosto de transformar ideias em soluções sólidas e de aprimorar continuamente sistemas, processos e código.',
        para3: 'Estou sempre ansioso para aprender novas tecnologias e metodologias para me manter à frente da indústria.', stats: { years: 'Anos de experiência', projects: 'Projetos entregues', learning: 'Aprendendo & construindo' } },
  } as const;

  const L = t[language as keyof typeof t];

  return (
    <main className="min-h-screen bg-background text-foreground">
        <Navbar />
      <section className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--sidebar-accent)] --main-text">
            {L.title}
          </p>

          <h1 className="text-7xl font-bold leading-[0.9] tracking-[-0.05em]">
            Software
            <br />
            Engineer.
          </h1>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--text-color)]">
            <p>{L.para1}</p>

            <p>
              {L.para2}
            </p>

            <p>
              {L.para3}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="mt-2 text-sm text-[var(--text-color)]">{L.stats.years}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="mt-2 text-sm text-[var(--text-color)]">{L.stats.projects}</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <img
            src="/images/splash.png"
            alt="Splash"
            className="absolute z-0 w-[700px] opacity-80"
          />

          <img
            src="/images/profile_pic.svg"
            alt="Thiago"
            className="relative z-10 h-[760px] w-auto object-contain"
          />
        </div>
      </section>
    </main>
  )
}

