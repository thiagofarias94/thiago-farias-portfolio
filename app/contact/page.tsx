"use client";

import React from "react";
import { Navbar } from '../../components/ui/navbar'
import { useLanguage } from '../../components/language/language-provider'

export default function ContactPage() {
  const { language } = useLanguage();
  const t = {
    EN: { title: 'Contact', heading: "Let’s build something together.", subheading: "Whether you have a project idea, an opportunity, or just want to connect, feel free to reach out.", email: 'Email', name: 'Name', message: 'Message', placeholder: { email: 'email@example.com', name: 'Your Name', message: 'Your Message' } },
    PT: { title: 'Contato', heading: 'Vamos construir algo juntos.', subheading: 'Se você tem uma ideia de projeto, uma oportunidade ou apenas quer se conectar, sinta-se à vontade para entrar em contato.',email: 'Email', name: 'Nome', message: 'Mensagem', placeholder: { email: 'email@exemplo.com', name: 'Seu Nome', message: 'Sua Mensagem' } },
  } as const;
  const L = t[language as keyof typeof t];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1fr]">
        
        {/* LEFT SIDE */}
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--sidebar-accent)]">{L.title}</p>

          <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.06em]">{L.heading}</h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-[var(--text-color)]">
            {L.subheading}
          </p>

          {/* CONTACT INFO */}
          <div className="mt-14 space-y-8">
            
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-color)]">
                Email
              </p>

              <a
                href="mailto:thiagosfarias.mt@gmail.com"
                className="mt-2 block text-2xl font-bold transition hover:opacity-60"
              >
                thiagosfarias.mt@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-color)]">
                Location
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Brazil
              </h3>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-color)]">
                Socials
              </p>

              <div className="mt-3 flex gap-6">
                <a
                  href="#"
                  className="text-lg font-medium transition hover:opacity-60"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/thiago-farias-b09280163/"
                  className="text-lg font-medium transition hover:opacity-60"
                >
                  LinkedIn
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            rounded-[28px]
            border
            border-zinc-200/80
            bg-[var(--background)]
            p-7
            shadow-sm
            backdrop-blur-md
          "
        >
          <form className="space-y-6">
            
            {/* NAME */}
            <div>
              <label className="mb-3 block text-sm text-[var(--text-color)]">
                {L.name}
              </label>

              <input
                type="text"
                placeholder={L.placeholder.name}
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-[var(--background)]
                  px-5
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-3 block text-sm text-[var(--text-color)]">
                {L.email}
              </label>

              <input
                type="email"
                placeholder={L.placeholder.email}
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-[var(--background)]
                  px-5
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-3 block text-sm text-[var(--text-color)]">
                {L.message}
              </label>

              <textarea
                rows={6}
                placeholder={L.placeholder.message}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-[var(--background)]
                  p-5
                  outline-none
                  transition
                  focus:border-[var(--primary)]
                "
              />
            </div>

            {/* BUTTON */}
            <button
              className="
                rounded-full
                bg-[var(--primary)]
                px-8
                py-4
                text-white
                transition
                hover:opacity-90
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}