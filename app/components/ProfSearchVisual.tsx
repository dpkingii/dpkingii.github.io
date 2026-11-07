// nDCG@10 per mode, from prof-search's README results table (60 queries, 1,413 graded judgments).
const retrievers = [
  // A non-breaking hyphen, so a narrow box wraps before "full-text" instead of inside it.
  { name: "keyword", detail: "Postgres full‑text", score: 0.51 },
  { name: "vector", detail: "pgvector HNSW", score: 0.6 },
];

// The retriever columns are split by a 0.75rem gap, so each center sits a quarter of the rest in from its edge.
const columnCenter = "calc((100% - 0.75rem) / 4)";

export default function ProfSearchDiagram() {
  return (
    <figure className="mx-auto w-full max-w-md font-mono text-sm">
      <figcaption className="text-xs text-muted">&ldquo;not much homework&rdquo;</figcaption>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {retrievers.map((r) => (
          <Stage key={r.name} {...r} />
        ))}
      </div>
      <div className="relative h-10 text-muted" aria-hidden="true">
        <span className="absolute top-0 h-4 w-px bg-current" style={{ left: columnCenter }} />
        <span className="absolute top-0 h-4 w-px bg-current" style={{ right: columnCenter }} />
        <span className="absolute top-4 h-px bg-current" style={{ left: columnCenter, right: columnCenter }} />
        <Arrow className="absolute top-4 left-1/2 -translate-x-1/2" />
      </div>
      <Stage name="hybrid" detail="rank fusion" score={0.64} />
      <Arrow className="mx-auto block text-muted" />
      <Stage name="rerank" detail="cross-encoder, top 50" score={0.74} accent />
      <Arrow className="mx-auto block text-muted" />
      <p className="text-center text-accent">professors, ranked</p>
      <p className="mt-4 text-right text-xs text-muted">nDCG@10 on 60 graded queries</p>
    </figure>
  );
}

function Stage({
  name,
  detail,
  score,
  accent,
}: {
  name: string;
  detail: string;
  score: number;
  accent?: boolean;
}) {
  return (
    <div className={`border px-3 py-1.5 ${accent ? "border-accent text-accent" : "border-line bg-bg"}`}>
      <div className="flex flex-wrap justify-between gap-x-2">
        <span>{name}</span>
        <span className="tabular-nums">{score.toFixed(2)}</span>
      </div>
      <p className="text-xs text-muted">{detail}</p>
    </div>
  );
}

function Arrow({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 10 24" className={`h-6 w-2.5 ${className}`} fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M5 0 V23 M1.5 18.5 L5 23 L8.5 18.5" />
    </svg>
  );
}
