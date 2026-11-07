import type { Metadata } from "next";
import { ProjectCard, ProjectFrame, ProjectInfo, ProjectLinks } from "../components/ProjectCard";
import { projects } from "../content";

export const metadata: Metadata = {
  title: "Projects · Lianyu (Nick) Peng",
  description: "Everything Lianyu (Nick) Peng has built and shipped, with live demos and code.",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          Every project links to its code, and deployed ones link to the live app so you can try it.
        </p>
        <Label>Featured</Label>
        <div className="space-y-12 lg:space-y-16">
          {featured.map((p) => (
            <article key={p.slug} className="grid items-center gap-6 lg:grid-cols-[3fr_2fr] lg:gap-12">
              <ProjectFrame
                project={p}
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="border border-line bg-card"
              />
              <div>
                <ProjectInfo project={p} />
                <p className="mt-4 leading-relaxed">{p.description}</p>
                {p.notes && (
                  <>
                    <h4 className="mt-5 font-display text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
                      Notes &amp; limits
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.notes}</p>
                  </>
                )}
                <ProjectLinks project={p} />
              </div>
            </article>
          ))}
        </div>

        <Label>More projects</Label>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} sizes="(min-width: 768px) 38rem, 100vw" />
          ))}
        </div>
      </main>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 mb-6 font-display text-xs font-extrabold tracking-[0.3em] text-accent uppercase">
      {children}
    </h2>
  );
}
