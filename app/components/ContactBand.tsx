import { links } from "../content";
import { ButtonLink } from "./ProjectCard";

export default function ContactBand() {
  return (
    <section id="contact" className="border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-xl">
            <h2 className="font-display text-xs font-extrabold tracking-[0.3em] text-accent uppercase">
              Get in touch
            </h2>
            <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Let&rsquo;s talk.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              I&rsquo;m looking for Summer 2027 software engineering internships and new-grad roles.
              LinkedIn is the best way to reach me.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
            <ButtonLink href={links.linkedin} primary>
              Message me on LinkedIn
            </ButtonLink>
            <ButtonLink href={links.github}>GitHub</ButtonLink>
          </div>
        </div>
        <p className="mt-12 border-t border-line pt-6 text-sm text-muted">Lianyu Peng · College Park, MD</p>
      </div>
    </section>
  );
}
