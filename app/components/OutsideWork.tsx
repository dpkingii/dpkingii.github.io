const items = [
  {
    title: "Noodle hunting",
    art: <NoodleBowl />,
    body: "I'll go a long way for a good bowl. Spicy, brothy, or no broth at all, I'm in.",
    listLabel: "Current rotation",
    list: [
      "Jjamppong, Korean spicy seafood noodle soup",
      "Abura soba, Japanese brothless ramen",
      "Chinese hand-pulled noodles",
    ],
  },
  {
    title: "The night sky",
    art: <DarkField />,
    body: "I look up every time I walk back to my apartment on campus. Someday I want to lie in a field somewhere truly dark and just watch. No bugs, ideally.",
  },
  {
    title: "Pickup sports",
    art: <Sports />,
    body: "Volleyball, table tennis, and badminton. A pickup game is my favorite way to meet new people and connect.",
  },
];

export default function OutsideWork() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="flex flex-col border border-line bg-card">
          <div className="border-b border-line">{item.art}</div>
          <div className="space-y-3 px-6 py-6">
            <h3 className="font-display text-sm font-extrabold tracking-[0.18em] uppercase">
              {item.title}
            </h3>
            <p className="leading-relaxed">{item.body}</p>
            {item.list && (
              <div className="pt-1">
                <p className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-muted uppercase">
                  {item.listLabel}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted marker:text-accent">
                  {item.list.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function NoodleBowl() {
  return (
    <svg viewBox="0 0 160 120" className="block w-full bg-bg" role="img" aria-label="A bowl of noodles with chopsticks">
      <g fill="none" strokeLinecap="round">
        <path d="M62 34c-6-6 6-10 0-16M80 30c-6-6 6-10 0-16M98 34c-6-6 6-10 0-16" stroke="var(--muted)" strokeWidth="2.5" />
        <path d="M100 54 148 16M108 56 152 24" stroke="var(--ink)" strokeWidth="3" />
        <path d="M30 58c8-9 14 6 22-3s14 6 22-3 14 6 22-3 14 6 22-3 14 6 22-3" stroke="#e8c27a" strokeWidth="3" />
        <path d="M34 56c9-6 13 4 21-1" stroke="#e8c27a" strokeWidth="3" />
      </g>
      <path d="M18 58h124a62 46 0 0 1-124 0z" fill="var(--accent)" />
      <rect x="58" y="102" width="44" height="8" rx="2" fill="var(--accent)" />
      <path d="M30 70h100" stroke="var(--card)" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 6" />
    </svg>
  );
}

function DarkField() {
  const stars: [number, number, number][] = [
    [14, 14, 1.2], [32, 30, 0.8], [48, 10, 1.4], [62, 38, 0.9], [76, 18, 1], [90, 8, 0.8],
    [104, 30, 1.5], [118, 14, 0.9], [132, 36, 1.1], [146, 12, 1.3], [24, 50, 0.8], [56, 58, 1],
    [84, 48, 0.8], [112, 56, 0.9], [140, 54, 0.8], [70, 66, 0.7], [100, 70, 0.8], [8, 66, 0.9],
    [152, 70, 0.7], [40, 40, 0.6], [126, 46, 0.6],
  ];
  return (
    <svg viewBox="0 0 160 120" className="block w-full" role="img" aria-label="Stars over a dark field">
      <rect width="160" height="120" fill="#0d1022" />
      <ellipse cx="80" cy="44" rx="90" ry="14" transform="rotate(-24 80 44)" fill="#9fb3ff" fillOpacity="0.08" />
      {stars.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#fff" fillOpacity={0.5 + r / 3} />
      ))}
      <path d="M120 22l14 8" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M0 94c30-10 62-10 92-2s50 6 68-4v32H0z" fill="#070912" />
      <path d="M22 92v-5M25 92v-7M28 92v-4M128 93v-5M131 93v-6M134 93v-4" stroke="#1b2140" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Sports() {
  return (
    <svg viewBox="0 0 160 120" className="block w-full bg-bg" role="img" aria-label="A volleyball, a table tennis paddle, and a badminton shuttlecock">
      <g fill="none" stroke="var(--ink)" strokeWidth="1.1" strokeLinecap="round" transform="translate(14 40) scale(2)">
        <circle cx="12" cy="12" r="10" fill="var(--card)" />
        <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4M12 12a12.6 12.6 0 0 1-8.7 5M16.8 13.6a16.55 16.55 0 0 1-9 7.5M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
      </g>
      <rect x="78" y="70" width="8" height="22" rx="3" fill="#a07850" transform="rotate(-20 82 81)" />
      <circle cx="86" cy="58" r="16" fill="var(--accent)" />
      <circle cx="106" cy="38" r="4" fill="#fff" stroke="var(--muted)" strokeWidth="1.2" />
      <g fill="none" stroke="var(--muted)" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M124 84 116 48h32l-8 36z" fill="var(--card)" />
        <path d="M128 84 124 48M132 84V48M136 84l4-36" />
      </g>
      <path d="M124 84a8 8 0 0 0 16 0z" fill="var(--ink)" />
    </svg>
  );
}
