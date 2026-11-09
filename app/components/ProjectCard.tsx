import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import fakeArtistDrawing from "@/public/projects/fake-artist-drawing.jpg";
import layerupToday from "@/public/projects/layerup-today.jpg";
import quietplatePopup from "@/public/projects/quietplate-popup.png";
import umdCalendar from "@/public/projects/umd-calendar.jpg";
import type { Project } from "../content";
import ProfSearchDiagram from "./ProfSearchVisual";
import RelayAuthzVisual, { RelayAuthzDiagram } from "./RelayAuthzVisual";

const shots: Partial<Record<Project["slug"], { src: StaticImageData; alt: string }>> = {
  layerup: {
    src: layerupToday,
    alt: "Layerup suggesting a crewneck, black jeans, and boots for dinner out, drawn as a layered mannequin",
  },
  "fake-artist": { src: fakeArtistDrawing, alt: "Fake Artist mid-game, with players drawing on a shared canvas" },
  "umd-calendar": {
    src: umdCalendar,
    alt: "UMD Calendar landing page with options for events, terms, and reminders, and an Add to Google Calendar button",
  },
  quietplate: { src: quietplatePopup, alt: "The QuietPlate popup showing Numbers hidden" },
};

export function Card({ children }: { children: React.ReactNode }) {
  return <article className="border border-line bg-card">{children}</article>;
}

export function CardHeader({
  title,
  subtitle,
  meta,
  logo,
}: {
  title: string;
  subtitle: string;
  meta?: string;
  logo?: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-line px-6 py-6 sm:gap-5 sm:px-8">
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
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg font-bold sm:text-xl">{title}</h3>
          {meta && <p className="text-sm whitespace-nowrap text-muted">{meta}</p>}
        </div>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
    </div>
  );
}

export function ProjectFrame({
  project: p,
  sizes,
  className,
  compact,
}: {
  project: Project;
  sizes: string;
  className: string;
  compact?: boolean;
}) {
  const shot = shots[p.slug];
  const shotClass =
    "rounded-md shadow-[0_1px_2px_rgb(0_0_0/0.06),0_8px_24px_rgb(0_0_0/0.1)] outline-1 -outline-offset-1 outline-black/10";
  return (
    <a
      href={p.live ?? p.repo}
      tabIndex={-1}
      aria-hidden="true"
      // The diagrams are shorter than a 16:10 frame, so it would leave them floating in empty space.
      className={`@container relative flex items-center justify-center p-6 ${compact ? "" : "sm:p-8"} ${
        compact || !shot ? "" : "aspect-[16/10]"
      } ${className}`}
    >
      {shot && compact ? (
        <Image src={shot.src} alt={shot.alt} sizes={sizes} className={`h-auto w-full ${shotClass}`} />
      ) : shot ? (
        <div className="absolute inset-6 flex items-center justify-center sm:inset-8">
          <Image
            src={shot.src}
            alt={shot.alt}
            sizes={sizes}
            className={`h-auto max-h-full w-auto max-w-full ${shotClass}`}
          />
        </div>
      ) : p.slug === "relay-authz" ? (
        compact ? (
          <RelayAuthzDiagram />
        ) : (
          <div className="w-full">
            <RelayAuthzVisual />
          </div>
        )
      ) : (
        <ProfSearchDiagram />
      )}
    </a>
  );
}

export function ProjectInfo({ project: p }: { project: Project }) {
  return (
    <>
      <h3 className="font-display text-xl font-bold">{p.name}</h3>
      <p className="mt-1 text-sm text-muted">{p.tagline}</p>
    </>
  );
}

export function ProjectLinks({ project: p }: { project: Project }) {
  return (
    <>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
        {p.live && <TextLink href={p.live}>Live ↗</TextLink>}
        <TextLink href={p.repo}>GitHub ↗</TextLink>
      </div>
      <p className="mt-3 text-sm text-muted">{p.tags.join(" · ")}</p>
    </>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-accent underline-offset-4 hover:text-accent-hover hover:underline">
      {children}
    </a>
  );
}

export function ProjectCard({
  project: p,
  sizes,
  horizontal,
}: {
  project: Project;
  sizes: string;
  horizontal?: boolean;
}) {
  return (
    // Side-by-side cards share the parent grid's rows, so the line under each frame sits at the same height.
    <article
      className={`border border-line bg-card ${horizontal ? "md:grid md:grid-cols-2" : "row-span-2 grid grid-rows-subgrid gap-0"}`}
    >
      <ProjectFrame
        project={p}
        sizes={sizes}
        compact={horizontal}
        className={`border-b border-line ${horizontal ? "md:border-r md:border-b-0" : "w-full min-w-0 self-stretch"}`}
      />
      <div className={`px-6 py-6 sm:px-8 ${horizontal ? "flex flex-col justify-center" : ""}`}>
        <ProjectInfo project={p} />
        <p className="mt-3 leading-relaxed">{p.summary}</p>
        <ProjectLinks project={p} />
      </div>
    </article>
  );
}

export function ButtonLink({ href, primary, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  const Tag = href.startsWith("/") ? Link : "a";
  return (
    <Tag
      href={href}
      className={`inline-block border px-5 py-2.5 text-sm font-semibold transition-[color,background-color,border-color,scale] duration-150 ease-out motion-safe:active:scale-[0.96] [-webkit-tap-highlight-color:transparent] ${
        primary
          ? "border-accent bg-accent text-card hover:border-accent-hover hover:bg-accent-hover"
          : "border-line hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </Tag>
  );
}
