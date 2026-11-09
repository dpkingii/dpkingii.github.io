const rotation: [string, string][] = [
  ["Jjamppong", "Korean spicy seafood noodle soup"],
  ["Abura soba", "Japanese brothless ramen"],
  ["Hand-pulled noodles", "Chinese"],
];

export default function OutsideWork() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Tile
        wide
        art={<NoodleBowl />}
        title="Noodle hunting"
        body="I'll go a long way for a good bowl. Spicy, brothy, or no broth at all, I'm in."
      >
        <div className="mt-5 border-t border-dashed border-line pt-4">
          <p className="font-display text-[11px] font-extrabold tracking-[0.2em] text-muted uppercase">
            Current rotation
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            {rotation.map(([name, note]) => (
              <li key={name} className="flex items-baseline gap-2">
                <span className="shrink-0 font-semibold">{name}</span>
                <span aria-hidden="true" className="min-w-4 flex-1 border-b border-dotted border-muted/60" />
                <span className="text-right text-muted">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Tile>
      <Tile
        art={
          <div className="flex w-full flex-col items-center gap-3">
            <Car />
            <span className="rounded-[3px] border-2 border-ink bg-card px-2.5 py-0.5 font-display text-[10px] font-extrabold tracking-[0.18em] uppercase">
              Porsche 911 Turbo S
            </span>
          </div>
        }
        title="Car spotting"
        body="JDM, Euro, old classics. If it's clearly someone's pride and joy, I'm stopping to look. When I see a build I like, I usually end up looking up every mod on it later."
      />
      <Tile
        art={<Sports />}
        title="Pickup sports"
        body="Volleyball, table tennis, and badminton. A pickup game is my favorite way to meet new people and connect."
      />
    </div>
  );
}

function Tile({
  wide,
  art,
  title,
  body,
  children,
}: {
  wide?: boolean;
  art: React.ReactNode;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <article
      className={`group flex flex-col border border-line bg-card transition-colors duration-150 ease-out hover:border-muted ${
        wide ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center border-b border-line bg-bg bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-[length:14px_14px] px-6 py-8 ${
          wide ? "md:flex-1 md:border-r md:border-b-0" : "md:h-56"
        }`}
      >
        {art}
      </div>
      <div className={`px-6 py-5 ${wide ? "md:flex md:flex-1 md:flex-col md:justify-center md:px-8 md:py-7" : "flex-1"}`}>
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{body}</p>
        {children}
      </div>
    </article>
  );
}

function NoodleBowl() {
  const steam = ["M62 34c-6-6 6-10 0-16", "M80 30c-6-6 6-10 0-16", "M98 34c-6-6 6-10 0-16"];
  return (
    <svg viewBox="0 0 160 120" className="block w-full max-w-[18rem]" role="img" aria-label="A bowl of noodles with chopsticks">
      <g fill="none" strokeLinecap="round">
        {steam.map((d, i) => (
          <path
            key={d}
            d={d}
            stroke="var(--muted)"
            strokeWidth="2.5"
            className="motion-safe:animate-[steam_2.4s_ease-out_infinite_both]"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
        <path
          d="M100 54 148 16M108 56 152 24"
          stroke="var(--ink)"
          strokeWidth="3"
          className="origin-[104px_55px] transition-[rotate] duration-300 ease-out motion-safe:group-hover:-rotate-6"
        />
        <path d="M30 58c8-9 14 6 22-3s14 6 22-3 14 6 22-3 14 6 22-3 14 6 22-3" stroke="#e8c27a" strokeWidth="3" />
        <path d="M34 56c9-6 13 4 21-1" stroke="#e8c27a" strokeWidth="3" />
      </g>
      <path d="M18 58h124a62 46 0 0 1-124 0z" fill="var(--accent)" />
      <rect x="58" y="102" width="44" height="8" rx="2" fill="var(--accent)" />
      <path d="M30 70h100" stroke="var(--card)" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 6" />
    </svg>
  );
}

function Car() {
  const spokes = Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI) / 5;
    const [x, y] = [Math.cos(a), Math.sin(a)];
    return `M${(15 * x).toFixed(1)} ${(15 * y).toFixed(1)}L${(68 * x).toFixed(1)} ${(68 * y).toFixed(1)}`;
  }).join("");
  return (
    <svg viewBox="0 36 160 58" className="block w-full max-w-[20rem]" role="img" aria-label="A Porsche 911 Turbo S in side profile">
      <g transform="matrix(-1 0 0 1 160 0)">
        <path d="M148 66h9M150 74h8" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" />
        {/* Traced in photo pixels, then scaled into the 160x120 frame */}
        <g transform="matrix(0.125 0 0 0.125 -6.25 14.75)">
          <path d="M1080 322 1165 316 1160 336 1095 340z" fill="var(--muted)" />
          <path d="M100 528C88 520 82 500 82 470V440C85 425 100 412 125 405 150 380 190 362 240 355 300 348 380 340 430 335 480 315 540 280 600 258 650 245 740 242 800 248 880 258 960 285 1040 310 1070 318 1085 322 1095 328 1130 335 1160 345 1180 360 1195 375 1200 395 1200 430V495C1200 510 1190 520 1165 525z" fill="var(--muted)" />
          <path d="M520 340C540 310 565 280 590 268 650 258 740 255 800 262 860 270 910 295 935 322z" fill="var(--card)" />
          <path d="M770 256 792 262 794 331 774 332z" fill="var(--muted)" />
          <path d="M520 322C525 312 560 312 580 318V345C560 350 530 350 520 340z" fill="var(--muted)" stroke="#1d1b19" strokeOpacity="0.4" strokeWidth="6" />
          <path d="M455 345C450 400 452 460 458 505M792 335C797 400 787 460 772 505" stroke="var(--card)" strokeOpacity="0.35" strokeWidth="8" fill="none" />
          <rect x="712" y="380" width="55" height="10" rx="5" fill="#1d1b19" fillOpacity="0.3" />
          <path d="M830 360C860 352 885 360 880 375L850 420C840 430 820 425 822 410z" fill="#1d1b19" fillOpacity="0.7" />
          <path d="M160 405C175 380 205 362 238 360 230 380 205 400 170 412z" fill="#e8c27a" />
          <rect x="92" y="448" width="45" height="55" rx="8" fill="#1d1b19" fillOpacity="0.6" />
          <path d="M1078 368H1170M1125 445H1195" stroke="#1d1b19" strokeWidth="9" strokeLinecap="round" />
          <path d="M410 520H860" stroke="#1d1b19" strokeOpacity="0.3" strokeWidth="10" />
          {[320, 955].map((cx) => (
            <g key={cx} transform={`translate(${cx} 480)`}>
              <circle r="102" fill="var(--bg)" />
              <circle r="90" fill="#1d1b19" />
              <path d="M-39-22.5A45 45 0 0 1-15.4-42.3" stroke="#e8c27a" strokeWidth="20" fill="none" />
              {/* The caliper stays put while the rim spins. Pausing instead of removing the animation lets the wheel stop where it is. */}
              <g className="origin-center [transform-box:fill-box] motion-safe:animate-[spin_0.6s_linear_infinite_paused] motion-safe:group-hover:[animation-play-state:running]">
                <circle r="70" fill="none" stroke="var(--muted)" strokeWidth="7" />
                <path d={spokes} stroke="var(--muted)" strokeWidth="7" />
                <circle r="14" fill="var(--muted)" />
              </g>
            </g>
          ))}
        </g>
      </g>
      <path d="M8 86h144" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Sports() {
  return (
    <svg viewBox="0 24 160 76" className="block w-full max-w-[18rem] overflow-visible" role="img" aria-label="A volleyball, a table tennis paddle, and a badminton shuttlecock">
      <g fill="none" stroke="var(--ink)" strokeWidth="1.1" strokeLinecap="round" transform="translate(14 40) scale(2)">
        <circle cx="12" cy="12" r="10" fill="var(--card)" />
        <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4M12 12a12.6 12.6 0 0 1-8.7 5M16.8 13.6a16.55 16.55 0 0 1-9 7.5M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
      </g>
      <g transform="rotate(25 86 56)">
        <rect x="82" y="66" width="8" height="26" rx="3" fill="#a07850" />
        <circle cx="86" cy="56" r="16" fill="var(--accent)" />
      </g>
      <circle
        cx="106"
        cy="38"
        r="4"
        fill="#fff"
        stroke="var(--muted)"
        strokeWidth="1.2"
        className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-3"
      />
      <g fill="none" stroke="var(--muted)" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M124 84 116 48h32l-8 36z" fill="var(--card)" />
        <path d="M128 84 124 48M132 84V48M136 84l4-36" />
      </g>
      <path d="M124 84a8 8 0 0 0 16 0z" fill="var(--ink)" />
    </svg>
  );
}
