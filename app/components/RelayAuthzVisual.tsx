// Latencies come from relay-authz's docs/benchmarks.md, measured with k6 on an M4 Pro with everything in Docker.
const p99 = [
  { label: "No cache", ms: 95.3 },
  { label: "Redis cache", ms: 12.6 },
];

const path = [
  { type: "user", id: "alice", edge: "member of" },
  { type: "group", id: "finance", edge: "viewer of" },
  { type: "folder", id: "finance", edge: "parent of" },
  { type: "document", id: "budget" },
];

export default function RelayAuthzVisual() {
  return (
    <div className="space-y-6">
      <RelayAuthzDiagram />
      <figure className="grid gap-4 border-t border-line pt-6 @lg:grid-cols-[2fr_3fr] @lg:items-center @lg:gap-8">
        <figcaption>
          <span className="text-sm font-semibold">p99 at 8,000 checks/s</span>
          <span className="mt-2 block text-xs leading-snug text-muted">
            Up to 4,000 checks/s, p99 stays under 8 ms with or without the
            cache.
          </span>
        </figcaption>
        <dl className="space-y-3">
          {p99.map((row, i) => (
            <div key={row.label}>
              <div className="flex justify-between text-sm">
                <dt className="text-muted">{row.label}</dt>
                <dd className="font-semibold tabular-nums">{row.ms} ms</dd>
              </div>
              <div className="mt-1.5 h-2 bg-line">
                <div
                  className={`h-full ${i === 0 ? "bg-muted" : "bg-accent"}`}
                  style={{ width: `${(row.ms / p99[0].ms) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </dl>
      </figure>
    </div>
  );
}

export function RelayAuthzDiagram() {
  return (
    // Its own container, so the path runs sideways only when this column is wide enough for all four boxes.
    <div className="@container w-full">
      <figure className="mx-auto w-fit font-mono text-sm @xl:w-full">
        <figcaption className="text-xs text-muted">
          Can alice view the budget?
        </figcaption>
        <ol className="mt-4 flex flex-col @xl:mt-8 @xl:flex-row @xl:items-center">
          {path.map((step) => (
            <li
              key={`${step.type}:${step.id}`}
              className={`flex @xl:flex-row @xl:items-center ${
                step.edge
                  ? "flex-col items-start @xl:flex-1"
                  : "items-center gap-3"
              }`}
            >
              <Box accent={!step.edge} type={step.type} id={step.id} />
              {step.edge ? (
                <Edge label={step.edge} />
              ) : (
                <Allowed className="@xl:hidden" />
              )}
            </li>
          ))}
        </ol>
        <Allowed className="mt-4 hidden text-right @xl:block" />
      </figure>
    </div>
  );
}

function Allowed({ className }: { className: string }) {
  return <p className={`text-accent ${className}`}>✓ allowed · 3 hops</p>;
}

function Box({
  accent,
  type,
  id,
}: {
  accent?: boolean;
  type: string;
  id: string;
}) {
  // One line as type:id when the path runs down, so the narrow layout stays short.
  return (
    <span
      className={`flex min-w-40 shrink-0 border px-3 py-2 whitespace-nowrap @xl:min-w-24 @xl:flex-col @xl:py-1.5 ${
        accent ? "border-accent text-accent" : "border-line bg-bg"
      }`}
    >
      <span className="text-muted @xl:text-xs">
        {type}
        <span className="@xl:hidden">:</span>
      </span>
      {id}
    </span>
  );
}

function Edge({ label }: { label: string }) {
  return (
    <span className="relative flex h-7 items-center gap-3 pl-5 text-xs text-muted @xl:h-auto @xl:min-w-20 @xl:flex-1 @xl:px-2">
      <svg
        viewBox="0 0 10 28"
        className="h-7 w-2.5 shrink-0 @xl:hidden"
        fill="none"
        stroke="currentColor"
      >
        <path d="M5 0 V27 M1.5 22.5 L5 27 L8.5 22.5" />
      </svg>
      <span className="whitespace-nowrap @xl:absolute @xl:bottom-full @xl:left-1/2 @xl:mb-1 @xl:-translate-x-1/2">
        {label}
      </span>
      <span className="hidden flex-1 items-center @xl:flex">
        <span className="h-px flex-1 bg-current" />
        <svg
          viewBox="0 0 6 10"
          className="-ml-1.5 h-2.5 w-1.5 shrink-0"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0 1 L5.5 5 L0 9" />
        </svg>
      </span>
    </span>
  );
}
