// Numbers come from the notebook's 10-fold cross-validation.
export const models = [
  { label: "Support vector regression", value: 0.618 },
  { label: "Linear regression", value: 0.61 },
  { label: "Random forest", value: 0.587 },
];

export function BarChart({ title, rows }: { title: string; rows: { label: string; value: number }[] }) {
  return (
    <figure>
      <figcaption className="text-sm font-semibold">
        {title}
      </figcaption>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-sm">
              <dt className="text-muted">{row.label}</dt>
              <dd className="font-semibold tabular-nums">{row.value.toFixed(2)}</dd>
            </div>
            <div className="mt-1.5 h-2 bg-line">
              <div className="h-full bg-accent" style={{ width: `${row.value * 100}%` }} />
            </div>
          </div>
        ))}
      </dl>
    </figure>
  );
}
