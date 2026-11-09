import NavLink from "./NavLink";

const sections = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

const button =
  "shrink-0 border border-line px-1.5 py-1.5 font-display text-[11px] tracking-[0.1em] text-muted uppercase transition-[color,border-color,scale] duration-150 ease-out hover:border-accent hover:text-accent motion-safe:active:scale-[0.96] [-webkit-tap-highlight-color:transparent] sm:px-3 sm:text-xs md:px-5 md:py-2 md:text-sm md:tracking-[0.15em]";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-card/90 backdrop-blur">
      <div className="flex overflow-x-auto overscroll-x-contain">
        <NavLink
          href="/"
          className="hidden shrink-0 border-r border-line px-6 py-4 font-display text-xs font-extrabold tracking-[0.25em] uppercase sm:block md:px-5 md:text-sm md:tracking-[0.2em] lg:px-6 lg:tracking-[0.25em]"
        >
          Lianyu Peng
        </NavLink>
        <nav className="ml-auto flex items-center gap-1 py-3 pl-2 pr-3 sm:gap-2 sm:py-0 sm:pr-4">
          {sections.map((s) => (
            <NavLink
              key={s.href}
              href={s.href}
              className={`${button} aria-[current=page]:border-accent aria-[current=page]:text-accent`}
            >
              {s.label}
            </NavLink>
          ))}
          <a href="#contact" className={button}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
