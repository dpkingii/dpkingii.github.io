import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "../components/ProjectCard";
import { experience, type Job } from "../content";

export const metadata: Metadata = {
  title: "Experience · Lianyu (Nick) Peng",
  description: "Lianyu (Nick) Peng's engineering roles and campus leadership, newest first.",
};

export default function Experience() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Experience</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        Engineering roles, then the teaching and support work I do alongside school. Newest first.
      </p>

      {/* On wide screens each card spans two grid rows and starts one row below the last, which staggers the two columns. */}
      <ol className="relative mt-10 flex flex-col gap-8 before:absolute before:inset-y-0 before:left-[5px] before:w-0.5 before:bg-line lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-10 lg:before:left-1/2 lg:before:-ml-px">
        {experience.map((job, i) => (
          <TimelineItem key={`${job.org}-${job.role}`} job={job} index={i} />
        ))}
      </ol>
    </main>
  );
}

function TimelineItem({ job, index }: { job: Job; index: number }) {
  const left = index % 2 === 0;
  return (
    <li
      style={{ gridRow: `${index + 1} / span 2` }}
      className={`group relative ml-8 lg:ml-0 ${left ? "lg:col-start-1" : "lg:col-start-2"}`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-[33px] -left-5 h-0.5 w-5 bg-line lg:w-[42px] ${
          left ? "lg:-right-[42px] lg:left-auto" : "lg:-left-[42px]"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute top-7 -left-8 size-3 rounded-full bg-accent ring-4 ring-bg transition-transform duration-150 ease-out motion-safe:group-hover:scale-125 ${
          left ? "lg:-right-[54px] lg:left-auto" : "lg:-left-[54px]"
        }`}
      />
      <article className="border border-line bg-card p-6 transition-colors duration-150 ease-out hover:border-muted sm:p-7">
        <div className="flex items-start gap-4">
          <Image
            src={job.logo}
            alt=""
            width={48}
            height={48}
            unoptimized={job.logo.endsWith(".svg")}
            className="size-12 shrink-0 rounded-sm border border-line bg-white"
          />
          <div className="min-w-0">
            <h2 className="font-display text-xl leading-snug font-bold sm:text-[1.375rem]">{job.role}</h2>
            <p className="mt-1 font-semibold">{job.org}</p>
          </div>
        </div>
        <p className="mt-3 text-[0.9375rem] text-muted">
          {job.dates} · {job.location}
        </p>
        <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[1.0625rem] leading-relaxed marker:text-accent">
          {job.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {job.more && (
          <details className="group/more mt-2.5">
            <summary className="w-fit cursor-pointer list-none text-sm font-semibold text-accent hover:text-accent-hover [&::-webkit-details-marker]:hidden">
              <span className="group-open/more:hidden">Show {job.more.length} more</span>
              <span className="hidden group-open/more:inline">Show less</span>
            </summary>
            <ul className="mt-2.5 list-disc space-y-2.5 pl-5 text-[1.0625rem] leading-relaxed marker:text-accent">
              {job.more.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </details>
        )}
        <ul className="mt-5 flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <li
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-3 py-1 text-sm"
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>
        {job.link && (
          <div className="mt-5">
            <ButtonLink href={job.link.href}>{job.link.label}</ButtonLink>
          </div>
        )}
      </article>
    </li>
  );
}
