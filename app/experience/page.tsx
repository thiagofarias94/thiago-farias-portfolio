"use client";

import { Navbar } from '../../components/ui/navbar'
import { useLanguage } from '../../components/language/language-provider'

const experiences = {
  EN: [
    {
      period: "Jun 2024 — Present",
      role: "QA Automation Engineer (SDET)",
      company: "Zallpy Digital",
      location: "Global Project for BMW",
      description:
        "Working as a QA Automation Engineer in a global project for BMW, focusing on end-to-end quality for large-scale web applications.",
      highlights: [
        "Building and maintaining E2E automation using Playwright (TypeScript) and Capybara (Ruby)",
        "Improving test reliability by addressing flaky tests through better waits, retries and test isolation",
        "Contributing to CI/CD pipelines to ensure fast and stable feedback cycles",
        "Validating microservices and API integrations focusing on data consistency and system behavior",
        "Collaborating with developers and product teams to define test strategies for critical flows",
      ],
    },
    {
      period: "Sep 2022 — Jun 2024",
      role: "Backend Software Engineer",
      company: "Moskit CRM",
      location: "Londrina, Paraná, Brazil",
      description:
        "Worked as a Backend Developer building and maintaining CRM services in a high-concurrency environment.",
      highlights: [
        "Developed backend services using Java (Spring Boot), Go and Groovy",
        "Applied strong testing practices with unit and integration tests",
        "Contributed to system reliability through validation and error handling improvements",
        "Participated in architectural discussions focused on scalability and maintainability",
      ],
    },
    {
      period: "Jun 2021 — Sep 2022",
      role: "Full Stack Software Engineer",
      company: "Pulse",
      location: "São Luís, Maranhão, Brazil",
      description:
        "Worked as a Full Stack Developer delivering end-to-end features across backend and frontend.",
      highlights: [
        "Built backend services and web interfaces using Java and JavaScript",
        "Worked with performance-sensitive components including C++ modules",
        "Participated in agile development cycles contributing to feature delivery and validation",
      ],
    },
    {
      period: "Jan 2021 — Jun 2021",
      role: "Full Stack Developer Trainee",
      company: "Agrotools",
      location: "São José dos Campos, São Paulo, Brazil",
      description:
        "Worked as a Full Stack Developer Trainee contributing to web application development.",
      highlights: [
        "Developed backend and frontend features under supervision",
        "Worked with Java and JavaScript in a production environment",
        "Collaborated with senior developers in an agile team",
        "Gained hands-on experience with real-world software development workflows",
      ],
    },
    {
      period: "Jan 2019 — Jan 2020",
      role: "Full Stack Developer Intern",
      company: "Ocidental Informatica",
      location: "São Luís, Brazil",
      description:
        "Worked as a Full Stack Developer Intern contributing to web application development in a professional environment.",
      highlights: [
        "Assisted in backend and frontend development",
        "Worked with Java and JavaScript technologies",
        "Supported maintenance and improvement of existing systems",
        "Learned software engineering practices, version control and team collaboration",
      ],
    },
  ],

  PT: [
    {
      period: "Jun 2024 — Atualmente",
      role: "QA Automation Engineer (SDET)",
      company: "Zallpy Digital",
      location: "Projeto Global para BMW",
      description:
        "Atuando como QA Automation Engineer em um projeto global para a BMW, com foco em qualidade end-to-end para aplicações web de larga escala.",
      highlights: [
        "Construção e manutenção de automações E2E utilizando Playwright (TypeScript) e Capybara (Ruby)",
        "Melhoria da confiabilidade dos testes através da redução de flaky tests com waits, retries e isolamento de cenários",
        "Contribuição em pipelines de CI/CD para garantir ciclos rápidos e estáveis de feedback",
        "Validação de microsserviços e integrações de APIs com foco em consistência de dados e comportamento do sistema",
        "Colaboração com desenvolvedores e times de produto na definição de estratégias de testes para fluxos críticos",
      ],
    },
    {
      period: "Set 2022 — Jun 2024",
      role: "Backend Software Engineer",
      company: "Moskit CRM",
      location: "Londrina, Paraná, Brasil",
      description:
        "Atuei como Backend Developer desenvolvendo e mantendo serviços de CRM em um ambiente de alta concorrência.",
      highlights: [
        "Desenvolvimento de serviços backend utilizando Java (Spring Boot), Go e Groovy",
        "Aplicação de boas práticas de testes unitários e de integração",
        "Contribuição para confiabilidade do sistema através de melhorias em validações e tratamento de erros",
        "Participação em discussões arquiteturais focadas em escalabilidade e manutenibilidade",
      ],
    },
    {
      period: "Jun 2021 — Set 2022",
      role: "Full Stack Software Engineer",
      company: "Pulse",
      location: "São Luís, Maranhão, Brasil",
      description:
        "Atuei como Full Stack Developer entregando funcionalidades end-to-end entre backend e frontend.",
      highlights: [
        "Desenvolvimento de serviços backend e interfaces web utilizando Java e JavaScript",
        "Trabalho com componentes sensíveis à performance, incluindo módulos em C++",
        "Participação em ciclos ágeis contribuindo para entrega e validação de funcionalidades",
      ],
    },
    {
      period: "Jan 2021 — Jun 2021",
      role: "Full Stack Developer Trainee",
      company: "Agrotools",
      location: "São José dos Campos, São Paulo, Brasil",
      description:
        "Atuei como Full Stack Developer Trainee contribuindo para o desenvolvimento de aplicações web.",
      highlights: [
        "Desenvolvimento de funcionalidades backend e frontend sob supervisão",
        "Trabalho com Java e JavaScript em ambiente de produção",
        "Colaboração com desenvolvedores seniores em equipe ágil",
        "Experiência prática com fluxos reais de desenvolvimento de software",
      ],
    },
    {
      period: "Jan 2019 — Jan 2020",
      role: "Full Stack Developer Intern",
      company: "Ocidental Informatica",
      location: "São Luís, Brasil",
      description:
        "Atuei como estagiário Full Stack contribuindo para o desenvolvimento de aplicações web em ambiente profissional.",
      highlights: [
        "Auxílio no desenvolvimento backend e frontend",
        "Trabalho com tecnologias Java e JavaScript",
        "Suporte na manutenção e melhoria de sistemas existentes",
        "Aprendizado de práticas de engenharia de software, versionamento e colaboração em equipe",
      ],
    },
  ],
} as const;

export default function ExperiencePage() {
  const { language } = useLanguage();

  const t = {
    EN: {
      title: "Experience",
      heading:
        "Building scalable systems and reliable software experiences.",
      para:
        "My journey through software engineering, backend development, full stack applications and QA automation across startups and global products.",
    },

    PT: {
      title: "Experiência",
      heading:
        "Construindo sistemas escaláveis e experiências de software confiáveis.",
      para:
        "Minha jornada pela engenharia de software, desenvolvimento backend, aplicações full stack e automação de QA em startups e produtos globais.",
    },
  } as const;

  const L = t[language as keyof typeof t];

  const currentExperiences =
    experiences[language as keyof typeof experiences];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-8 md:px-6 md:py-12">

        {/* HEADER */}
        <div className="mb-10 md:mb-14">

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
              max-w-4xl
              text-4xl
              font-bold
              leading-[0.95]
              tracking-[-0.07em]

              sm:text-5xl
              lg:text-6xl
            "
          >
            {L.heading}
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-relaxed
              text-[var(--muted)]

              md:text-base
            "
          >
            {L.para}
          </p>
        </div>

        {/* TIMELINE */}
        <div
          className="
            relative
            border-l
            border-[var(--border)]
            pl-8

            md:pl-10
          "
        >
          {currentExperiences.map((item, index) => (
            <div
              key={index}
              className="relative mb-8 md:mb-10"
            >
            {/* DOT */}
            <div
            className="
                absolute
                top-2

                h-3
                w-3
                rounded-full
                bg-[var(--primary)]

                left-[-41px]

                md:h-4
                md:w-4
                md:left-[-49px]
            "
            />
              {/* CARD */}
              <div
                className="
                  rounded-[20px]
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  p-4
                  shadow-sm
                  backdrop-blur-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-md

                  md:p-5
                "
              >

                {/* PERIOD */}
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[var(--sidebar-accent)]

                    md:text-xs
                  "
                >
                  {item.period}
                </p>

                {/* ROLE */}
                <h2
                  className="
                    mt-2
                    text-xl
                    font-bold
                    leading-tight
                    tracking-[-0.04em]

                    md:text-2xl
                  "
                >
                  {item.role}
                </h2>

                {/* COMPANY */}
                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--muted)]
                  "
                >
                  {item.company} • {item.location}
                </p>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-4
                    max-w-3xl
                    text-sm
                    leading-6
                    text-[var(--muted)]

                    md:text-[15px]
                  "
                >
                  {item.description}
                </p>

                {/* HIGHLIGHTS */}
                <ul className="mt-4 space-y-1">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                        text-[var(--muted)]
                      "
                    >

                      <div
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[var(--sidebar-accent)]
                        "
                      />

                      <span
                        className="
                          text-sm
                          leading-6

                          md:text-[15px]
                        "
                      >
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}