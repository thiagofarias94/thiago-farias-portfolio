"use client";

import { Navbar } from "../../components/ui/navbar";
import { useLanguage } from "../../components/language/language-provider";

export default function AboutPage() {
  const { language } = useLanguage();

  const t = {
    EN: {
      title: "About Me",
      para1:
        "I'm a software engineer passionate about building reliable, scalable and user-focused digital experiences.",

      para2:
        "I enjoy turning ideas into solid solutions and continuously improving systems, processes and code.",

      para3:
        "I'm always eager to learn new technologies and methodologies to stay at the forefront of the industry.",

      stats: {
        years: "Years of experience",
        projects: "Projects delivered",
        learning: "Learning & building",
      },
    },

    PT: {
      title: "Sobre Mim",

      para1:
        "Sou um engenheiro de software apaixonado por construir experiências digitais confiáveis e escaláveis.",

      para2:
        "Gosto de transformar ideias em soluções sólidas e de aprimorar continuamente sistemas, processos e código.",

      para3:
        "Estou sempre em busca de aprender novas tecnologias e metodologias para me manter em constante evolução.",

      stats: {
        years: "Anos de experiência",
        projects: "Projetos entregues",
        learning: "Aprendendo & construindo",
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
          items-center
          gap-8
          px-5
          py-8

          md:px-6
          md:py-10

          lg:grid-cols-2
          lg:gap-12
        "
      >

        {/* LEFT */}
        <div className="order-2 lg:order-1">

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
              text-4xl
              font-bold
              leading-[0.92]
              tracking-[-0.06em]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Software
            <br />
            Engineer.
          </h1>

          {/* TEXT */}
          <div
            className="
              mt-6
              space-y-4
              text-sm
              leading-7
              text-[var(--muted)]

              md:mt-8
              md:text-base
            "
          >
            <p>{L.para1}</p>

            <p>{L.para2}</p>

            <p>{L.para3}</p>
          </div>

          {/* STATS */}
          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-5

              md:mt-10
              md:max-w-md
            "
          >
            <div
              className="
                rounded-[18px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-4
              "
            >
              <h3 className="text-2xl font-bold md:text-3xl">
                5+
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-relaxed
                  text-[var(--muted)]

                  md:text-sm
                "
              >
                {L.stats.years}
              </p>
            </div>

            <div
              className="
                rounded-[18px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-4
              "
            >
              <h3 className="text-2xl font-bold md:text-3xl">
                10+
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-relaxed
                  text-[var(--muted)]

                  md:text-sm
                "
              >
                {L.stats.projects}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
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

          {/* GLOW */}
          <div
            className="
              absolute
              z-0
              h-[280px]
              w-[280px]
              rounded-full
              bg-[var(--sidebar-accent)]
              opacity-10
              blur-3xl

              md:h-[420px]
              md:w-[420px]
            "
          />

          {/* SPLASH */}
          <img
            src="/images/splash.png"
            alt="Splash"
            className="
              absolute
              z-0
              w-[320px]
              opacity-80

              md:w-[480px]
              lg:w-[650px]
            "
          />

          {/* PROFILE */}
          <img
            src="/images/profile_pic.svg"
            alt="Thiago"
            className="
              relative
              z-10
              h-[360px]
              w-auto
              object-contain

              md:h-[520px]
              lg:h-[700px]
            "
          />
        </div>
      </section>
    </main>
  );
}