import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.jpeg";
import OutsideWork from "./components/OutsideWork";
import { ButtonLink, Card, CardHeader, ProjectCard } from "./components/ProjectCard";
import { education, links, projects, skills } from "./content";


export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-[17rem_1fr] lg:gap-10 lg:py-12">
        <Sidebar />

        <main className="mt-8 space-y-8 lg:mt-0">
          <About />

          <Section id="outside" title="When I&rsquo;m not in front of my computer">
            <OutsideWork />
          </Section>

          <Section id="projects" title="Projects">
            {projects
              .filter((p) => p.featured)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} sizes="(min-width: 768px) 24rem, 100vw" horizontal />
              ))}
            <div className="flex justify-center">
              <ButtonLink href="/projects">See more</ButtonLink>
            </div>
          </Section>

          <Section id="background" title="Background & Tech Stack">
            <Card>
              <CardHeader
                title={education.degree}
                subtitle={education.school}
                meta={education.dates}
                logo={education.logo}
              />
              <div className="space-y-6 px-6 py-6 sm:px-8">
                <p>
                  <span className="font-semibold">GPA {education.gpa}</span>
                  <span className="text-muted"> · Coursework: {education.coursework.join(", ")}</span>
                </p>
                <dl className="space-y-3">
                  {skills.map((group) => (
                    <div key={group.label} className="sm:flex sm:gap-4">
                      <dt className="shrink-0 font-semibold sm:w-32">{group.label}</dt>
                      <dd className="text-muted">{group.items.join(" · ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </Section>
        </main>
      </div>
    </>
  );
}

function Sidebar() {
  return (
    <aside className="self-start lg:sticky lg:top-24">
      <div className="flex items-center gap-5 lg:block">
        <Image
          src={avatar}
          alt="Lianyu Peng"
          className="size-20 shrink-0 rounded-sm outline-1 -outline-offset-1 outline-black/10 lg:size-24"
          priority
        />
        <div>
          <h1 className="font-display text-3xl leading-tight font-extrabold tracking-[0.18em] uppercase lg:mt-6 lg:text-4xl">
            Lianyu
            <br />
            Peng
          </h1>
        </div>
      </div>

      <ul className="mt-6 space-y-1.5 text-muted">
        <li>Software Engineer</li>
        <li>CS @ UMD</li>
        <li>Prev. SWE Intern @ Visa</li>
      </ul>

      <p className="mt-6 border-l-2 border-accent pl-3 text-sm leading-relaxed">
        Open to Summer 2027 internships and new-grad roles.
      </p>

      <div className="mt-6 flex gap-4 text-muted">
        <a href={links.linkedin} aria-label="LinkedIn" className="hover:text-accent">
          <LinkedInIcon />
        </a>
        <a href={links.github} aria-label="GitHub" className="hover:text-accent">
          <GitHubIcon />
        </a>
      </div>
    </aside>
  );
}

function About() {
  return (
    <section id="about">
      <Card>
        <div className="px-6 py-8 sm:px-8 md:py-10">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, I&rsquo;m Lianyu. Call me Nick!
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-snug sm:text-xl">
            I&rsquo;m a software engineer studying Computer Science at the University of Maryland.
            I keep ending up on the authorization side of things: who is allowed to do what, and
            how to prove nothing else slipped through.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed">
            On the side, I build frontends for fun, usually for projects that make a daily task a
            little more efficient. Something about turning an idea in my head into an interface
            people can actually use just makes me happy. I also love hearing people&rsquo;s stories,
            often over a pickup game or a good bowl of noodles!
          </p>
          <p className="mt-6 max-w-3xl border-t border-line pt-5 leading-relaxed text-muted">
            This past summer I interned at Visa, reworking access control for an agentic AI
            workforce planning app. Before that, I got to work at two startups, Qubi and Chosan.{" "}
            <Link
              href="/experience"
              className="font-semibold whitespace-nowrap text-accent underline-offset-4 hover:text-accent-hover hover:underline"
            >
              Full timeline →
            </Link>
          </p>
        </div>
      </Card>
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-6">
      <h2 className="pt-4 font-display text-xs font-extrabold tracking-[0.3em] text-accent uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}
