import Image from "next/image";
import avatar from "@/public/avatar.jpeg";
import quietplatePopup from "@/public/projects/quietplate-popup.png";
import OutsideWork from "./components/OutsideWork";
import ProfRatingCharts from "./components/ProfRatingCharts";
import QuietPlateDemo from "./components/QuietPlateDemo";
import ThemeToggle from "./components/ThemeToggle";
import {
  education,
  experience,
  leadership,
  links,
  projects,
  skills,
  type Job,
  type Project,
} from "./content";

const sections = [
  { id: "about", label: "About" },
  { id: "outside", label: "Outside work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "education", label: "Education" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-card/90 backdrop-blur">
        <div className="flex overflow-x-auto">
          <a
            href="#about"
            className="shrink-0 border-r border-line px-6 py-4 font-display text-xs font-extrabold tracking-[0.25em] uppercase"
          >
            Lianyu Peng
          </a>
          <nav className="flex items-center">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 border-l border-line px-5 font-display text-[0.7rem] tracking-[0.2em] text-muted uppercase first:border-l-0 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-[17rem_1fr] lg:gap-10 lg:py-12">
        <Sidebar />

        <main className="mt-8 space-y-8 lg:mt-0">
          <About />

          <Section id="outside" title="Outside of Work">
            <OutsideWork />
          </Section>

          <Section id="projects" title="Projects">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </Section>

          <Section id="experience" title="Experience">
            <Card>
              <ul className="divide-y divide-line">
                {experience.map((job) => (
                  <JobRow key={`${job.org}-${job.role}`} job={job} />
                ))}
              </ul>
            </Card>
          </Section>

          <Section id="leadership" title="Leadership & Campus Involvement">
            <Card>
              <ul className="divide-y divide-line">
                {leadership.map((job) => (
                  <JobRow key={`${job.org}-${job.role}`} job={job} />
                ))}
              </ul>
            </Card>
          </Section>

          <Section id="education" title="Education">
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
                      <dt className="shrink-0 font-display text-[0.7rem] font-bold tracking-[0.2em] uppercase sm:w-32 sm:pt-1">
                        {group.label}
                      </dt>
                      <dd className="text-muted">{group.items.join(" · ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </Section>

          <footer className="pt-4 pb-8 text-center font-display text-[0.7rem] tracking-[0.2em] text-muted uppercase">
            Lianyu Peng · College Park, MD
          </footer>
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
          className="size-20 shrink-0 rounded-sm border border-line lg:size-24"
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

      <ul className="mt-6 space-y-3 font-display text-[0.75rem] tracking-[0.2em] text-muted uppercase">
        <li>Software Engineer</li>
        <li>CS @ UMD &rsquo;28</li>
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

      <hr className="mt-8 hidden border-line lg:block" />
      <nav className="mt-6 hidden space-y-2 lg:block">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="block font-display text-[0.7rem] tracking-[0.2em] text-muted uppercase hover:text-accent"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function About() {
  return (
    <section id="about">
      <Card>
        <div className="border-b border-line px-6 py-8 sm:px-8">
          <h2 className="font-display text-xl font-extrabold tracking-[0.2em] uppercase sm:text-2xl">
            Hi, I&rsquo;m Lianyu. Call me Nick.
          </h2>
        </div>
        <div className="max-w-3xl space-y-4 px-6 py-6 leading-relaxed sm:px-8 md:py-8">
          <p>
            I&rsquo;m a computer science student at the University of Maryland who builds{" "}
            <strong>full-stack and agentic AI software</strong>. This past summer I was a
            software engineer intern at <strong>Visa</strong>, where I reworked the access
            control for an agentic AI workforce planning app.
          </p>
          <p>
            I keep ending up on the authorization side of things: who is allowed to do what,
            and how to prove nothing else slipped through. Before Visa I built the storage
            layer for a quantum computing education app, automated property syncing at a
            startup, and run authentication and Linux support across the UMD CS department&rsquo;s
            1,200+ node network.
          </p>
          <p>
            Outside of code, I love hearing people&rsquo;s stories, and I find joy in making daily
            tasks a little more efficient, which is how most of my side projects start.
          </p>
          <p className="text-muted">
            The best way to reach me is{" "}
            <a href={links.linkedin} className="text-accent underline-offset-4 hover:underline">
              LinkedIn
            </a>
            .
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

function Card({ children }: { children: React.ReactNode }) {
  return <article className="border border-line bg-card">{children}</article>;
}

function CardHeader({
  title,
  subtitle,
  meta,
  logo,
}: {
  title: string;
  subtitle: string;
  meta: string;
  logo?: string;
}) {
  return (
    <div className="flex border-b border-line">
      <div className="flex flex-1 items-center gap-4 px-6 py-6 sm:gap-5 sm:px-8">
        {logo && (
          <Image
            src={logo}
            alt=""
            width={48}
            height={48}
            unoptimized={logo.endsWith(".svg")}
            className="size-11 shrink-0 self-start rounded-sm border border-line bg-white sm:size-12 sm:self-center"
          />
        )}
        <div>
          <h3 className="font-display text-base font-extrabold tracking-[0.2em] uppercase sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 font-display text-[0.7rem] tracking-[0.2em] text-muted uppercase">
            {subtitle}
          </p>
          <p className="mt-2 font-display text-[0.7rem] tracking-[0.2em] text-muted uppercase sm:hidden">
            {meta}
          </p>
        </div>
      </div>
      <div className="hidden w-60 items-center justify-end border-l border-line px-8 py-6 text-right font-display text-[0.7rem] tracking-[0.2em] whitespace-nowrap text-muted uppercase sm:flex">
        {meta}
      </div>
    </div>
  );
}

function CardFooter({ tags, children }: { tags: string[]; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-6 pb-6 sm:px-8">
      <div className="flex flex-wrap gap-3">{children}</div>
      <p className="font-display text-[0.65rem] tracking-[0.2em] text-muted uppercase">
        {tags.join(", ")}
      </p>
    </div>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Card>
      <CardHeader title={p.name} subtitle={p.tagline} meta={p.dates} />
      <div className="border-b border-line px-6 py-6 sm:px-8">
        {p.slug === "quietplate" ? (
          <div className="grid items-center gap-6 md:grid-cols-[1fr_12rem]">
            <QuietPlateDemo />
            <Image
              src={quietplatePopup}
              alt="The QuietPlate popup showing Numbers hidden"
              className="hidden rounded-md border border-line md:block"
              sizes="12rem"
            />
          </div>
        ) : (
          <ProfRatingCharts />
        )}
      </div>
      <div className="space-y-4 px-6 py-6 sm:px-8">
        <p className="leading-relaxed">{p.description}</p>
        <p className="border-l-2 border-accent pl-4 leading-relaxed text-muted">{p.highlight}</p>
      </div>
      <CardFooter tags={p.tags}>
        <ButtonLink href={p.repo}>GitHub repo</ButtonLink>
        {p.slides && <ButtonLink href={p.slides}>Slide deck</ButtonLink>}
      </CardFooter>
    </Card>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <li className="px-6 py-6 sm:px-8">
      <div className="flex gap-4 sm:gap-5">
        <Image
          src={job.logo}
          alt=""
          width={48}
          height={48}
          unoptimized={job.logo.endsWith(".svg")}
          className="size-11 shrink-0 rounded-sm border border-line bg-white sm:size-12"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-sm font-extrabold tracking-[0.18em] uppercase sm:text-base">
              {job.role}
            </h3>
            <p className="font-display text-[0.7rem] tracking-[0.2em] whitespace-nowrap text-muted uppercase">
              {job.dates}
            </p>
          </div>
          <p className="mt-1 font-display text-[0.7rem] tracking-[0.2em] text-muted uppercase">
            {job.org} · {job.location}
          </p>
          <p className="mt-3 leading-relaxed">{job.summary}</p>
          <details className="group mt-3">
            <summary className="cursor-pointer list-none font-display text-[0.7rem] font-bold tracking-[0.2em] text-accent uppercase hover:text-accent-hover [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Details +</span>
              <span className="hidden group-open:inline">Hide details −</span>
            </summary>
            <ul className="mt-4 list-disc space-y-3 pl-4 leading-relaxed marker:text-accent">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              {job.link && <ButtonLink href={job.link.href}>{job.link.label}</ButtonLink>}
              <p className="font-display text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                {job.tags.join(", ")}
              </p>
            </div>
          </details>
        </div>
      </div>
    </li>
  );
}

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block border border-line px-5 py-3 font-display text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
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
