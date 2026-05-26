"use client";

import React from "react";
import { Navbar } from "../../components/ui/navbar";
import { useLanguage } from "../../components/language/language-provider";

export default function ContactPage() {
  const { language } = useLanguage();

  const t = {
    EN: {
      title: "Contact",

      heading: "Let’s build something together.",

      subheading:
        "Whether you have a project idea, an opportunity or just want to connect, feel free to reach out.",

      email: "Email",
      name: "Name",
      message: "Message",
      location: "Location",
      socials: "Socials",
      button: "Send Message",

      placeholder: {
        email: "email@example.com",
        name: "Your Name",
        message: "Your Message",
      },
    },

    PT: {
      title: "Contato",

      heading: "Vamos construir algo juntos.",

      subheading:
        "Se você tem uma ideia de projeto, uma oportunidade ou apenas quer se conectar, fique à vontade para entrar em contato.",

      email: "Email",
      name: "Nome",
      message: "Mensagem",
      location: "Localização",
      socials: "Redes",
      button: "Enviar Mensagem",

      placeholder: {
        email: "email@exemplo.com",
        name: "Seu Nome",
        message: "Sua Mensagem",
      },
    },
  } as const;

  const L = t[language as keyof typeof t];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          px-5
          py-8

          md:px-6
          md:py-10

          lg:grid-cols-[0.85fr_1fr]
          lg:gap-12
        "
      >

        {/* LEFT SIDE */}
        <div>

          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.35em]
              text-[var(--sidebar-accent)]

              md:text-sm
            "
          >
            {L.title}
          </p>

          <h1
            className="
              max-w-2xl
              text-4xl
              font-bold
              leading-[0.92]
              tracking-[-0.06em]

              sm:text-5xl
              lg:text-6xl
            "
          >
            {L.heading}
          </h1>

          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-7
              text-[var(--muted)]

              md:text-base
            "
          >
            {L.subheading}
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-7">

            {/* EMAIL */}
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[var(--muted)]

                  md:text-xs
                "
              >
                {L.email}
              </p>

              <a
                href="mailto:thiagosfarias.mt@gmail.com"
                className="
                  mt-2
                  block
                  break-all
                  text-lg
                  font-bold
                  transition
                  hover:opacity-60

                  md:text-2xl
                "
              >
                thiagosfarias.mt@gmail.com
              </a>
            </div>

            {/* LOCATION */}
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[var(--muted)]

                  md:text-xs
                "
              >
                {L.location}
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-bold

                  md:text-2xl
                "
              >
                Brazil
              </h3>
            </div>

            {/* SOCIALS */}
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[var(--muted)]

                  md:text-xs
                "
              >
                {L.socials}
              </p>

              <div
                className="
                  mt-3
                  flex
                  flex-wrap
                  gap-5
                "
              >
                <a
                  href="#"
                  className="
                    text-base
                    font-medium
                    transition
                    hover:opacity-60

                    md:text-lg
                  "
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/thiago-farias-b09280163/"
                  className="
                    text-base
                    font-medium
                    transition
                    hover:opacity-60

                    md:text-lg
                  "
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
            rounded-[22px]
            border
            border-[var(--border)]
            bg-[var(--card)]
            p-4
            shadow-sm
            backdrop-blur-md

            md:rounded-[26px]
            md:p-6
          "
        >
          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-[var(--muted)]
                "
              >
                {L.name}
              </label>

              <input
                type="text"
                placeholder={L.placeholder.name}
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-background
                  px-4
                  text-sm
                  outline-none
                  transition

                  focus:border-[var(--primary)]

                  md:h-14
                  md:rounded-2xl
                  md:px-5
                  md:text-base
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-[var(--muted)]
                "
              >
                {L.email}
              </label>

              <input
                type="email"
                placeholder={L.placeholder.email}
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-background
                  px-4
                  text-sm
                  outline-none
                  transition

                  focus:border-[var(--primary)]

                  md:h-14
                  md:rounded-2xl
                  md:px-5
                  md:text-base
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  text-[var(--muted)]
                "
              >
                {L.message}
              </label>

              <textarea
                rows={5}
                placeholder={L.placeholder.message}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-background
                  p-4
                  text-sm
                  outline-none
                  transition

                  focus:border-[var(--primary)]

                  md:rounded-2xl
                  md:p-5
                  md:text-base
                "
              />
            </div>

            {/* BUTTON */}
            <button
              className="
                w-full
                rounded-full
                bg-[var(--primary)]
                px-6
                py-3
                text-sm
                text-[var(--primary-foreground)]
                transition
                hover:opacity-90
                hover:scale-[1.01]
                active:scale-[0.98]

                md:w-auto
                md:px-8
                md:py-4
                md:text-base
              "
            >
              {L.button}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}