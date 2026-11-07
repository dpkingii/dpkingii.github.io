// Numbers come from the relay-authz README: single k6 runs at 8,000 checks/s on an M4 Pro.
const p99 = [
  { label: "Uncached", value: 95.3 },
  { label: "Redis cache, 46% hits", value: 12.6 },
];

const tuples = [
  "document:budget#parent@folder:finance",
  "folder:finance#viewer@group:analysts#member",
  "group:analysts#member@user:alice",
];

export default function RelayAuthzVisual() {
  return (
    <div className="grid gap-8 @xl:grid-cols-[auto_1fr]">
      <RelayAuthzCheck />
      <figure>
        <figcaption className="text-sm font-semibold">p99 latency at 8,000 checks/s</figcaption>
        <dl className="mt-4 space-y-3">
          {p99.map((row) => (
            <div key={row.label}>
              <div className="flex justify-between text-sm">
                <dt className="text-muted">{row.label}</dt>
                <dd className="font-semibold tabular-nums">{row.value} ms</dd>
              </div>
              <div className="mt-1.5 h-2 bg-line">
                <div className="h-full bg-accent" style={{ width: `${(row.value / 100) * 100}%` }} />
              </div>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-muted">Lower is better. Single 60-second runs, Postgres 17 and Redis 7 in Docker.</p>
      </figure>
    </div>
  );
}

export function RelayAuthzCheck() {
  return (
    <figure>
      <figcaption className="text-sm font-semibold">Can alice view the budget?</figcaption>
      <pre className="mt-4 overflow-x-auto bg-bg p-4 font-mono text-xs leading-relaxed">
        {tuples.join("\n")}
        {"\n\n"}
        <span className="text-muted">GET /v1/check?object=document:budget</span>
        {"\n"}
        <span className="text-muted">    &relation=viewer&user=user:alice</span>
        {"\n"}
        <span className="text-accent">{'→ {"allowed": true, "revision": 42}'}</span>
      </pre>
    </figure>
  );
}
