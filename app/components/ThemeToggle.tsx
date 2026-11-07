"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    // Without this, every color transition on the page fires at once and the switch smears. The icons keep theirs so they still cross-fade.
    const freeze = document.createElement("style");
    freeze.textContent = "*:not(.theme-icon),*::before,*::after{transition:none!important}";
    document.head.appendChild(freeze);
    root.dataset.theme = next;
    void getComputedStyle(root).color;
    requestAnimationFrame(() => requestAnimationFrame(() => freeze.remove()));
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Which icon shows is decided in globals.css, so the server and client render the same markup.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="ml-auto grid shrink-0 place-items-center border-l border-line px-5 text-muted hover:text-accent"
    >
      <svg viewBox="0 0 24 24" className="theme-icon theme-sun size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      <svg viewBox="0 0 24 24" className="theme-icon theme-moon size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
      </svg>
    </button>
  );
}
