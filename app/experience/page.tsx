"use client";

import { Navbar } from '../../components/ui/navbar'
import { useLanguage } from '../../components/language/language-provider'

const experiences = [
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
];

export default function ExperiencePage() {
  const { language } = useLanguage();
  const t = {
    EN: { title: 'Experience', heading: 'Building scalable systems and reliable software experiences.', para: 'My journey through software engineering, backend development, full stack applications and QA automation across startups and global products.' },
    PT: { title: 'Experiência', heading: 'Construindo sistemas escaláveis e experiências de software confiáveis.', para: 'Minha jornada pela engenharia de software, desenvolvimento backend, aplicações full stack e automação de QA em startups e produtos globais.' },
  } as const;
  const L = t[language as keyof typeof t];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        
        {/* HEADER */}
        <div className="mb-24">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--sidebar-accent)]">{L.title}</p>

          <h1 className="max-w-5xl text-7xl font-bold leading-[0.9] tracking-[-0.06em]">{L.heading}</h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-500">{L.para}</p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-zinc-300 pl-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative mb-20"
            >
              
              {/* DOT */}
              <div
                className="
                  absolute
                  -left-[49px]
                  top-2
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-[var(--background)]
                  bg-[var(--primary)]
                "
              />

              {/* CARD */}
              <div
                className="
                    rounded-[32px]
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    p-10
                    shadow-sm
                    backdrop-blur-md
                    transition
                    hover:-translate-y-1
                "
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--sidebar-accent)]">
                  {item.period}
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em]">
                  {item.role}
                </h2>

                <p className="mt-2 text-lg text-[var(--text-color)]">
                  {item.company} • {item.location}
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--text-color)]">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-[var(--text-color)]"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-[var(--sidebar-accent)]" />

                      <span className="leading-relaxed">
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