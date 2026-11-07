import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#education", label: "Education" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-card/90 backdrop-blur">
      <div className="flex overflow-x-auto">
        <NavLink
          href="/"
          className="shrink-0 border-r border-line px-6 py-4 font-display text-xs font-extrabold tracking-[0.25em] uppercase"
        >
          Lianyu Peng
        </NavLink>
        <nav className="flex">
          {sections.map((s) => (
            <NavLink
              key={s.href}
              href={s.href}
              className="flex shrink-0 items-center border-l border-line px-5 font-display text-xs tracking-[0.2em] text-muted uppercase first:border-l-0 hover:text-accent"
            >
              {s.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
