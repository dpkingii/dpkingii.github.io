// Numbers come from the notebook's 10-fold cross-validation and random forest outputs.
const models = [
  { label: "Support vector regression", value: 0.618 },
  { label: "Linear regression", value: 0.61 },
  { label: "Random forest", value: 0.587 },
];

const features = [
  { label: "Review sentiment (VADER)", value: 0.741 },
  { label: "Average GPA", value: 0.148 },
  { label: "Expected GPA from reviews", value: 0.111 },
];

export default function ProfRatingCharts() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <BarChart title="R² by model" rows={models} />
      <BarChart title="What drives the rating" rows={features} />
    </div>
  );
}

function BarChart({ title, rows }: { title: string; rows: { label: string; value: number }[] }) {
  return (
    <figure>
      <figcaption className="font-display text-[0.7rem] font-bold tracking-[0.2em] uppercase">
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
