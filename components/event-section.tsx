import { cn } from "@/lib/utils";

type EventSectionProps = {
  number: number;
  title: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
};

export function EventSection({ number, title, note, className, children }: EventSectionProps) {
  const headingId = `section-${number}`;

  return (
    <section aria-labelledby={headingId} className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-600">
            {number}
          </span>
          <h2 id={headingId} className="text-lg font-bold text-slate-900">{title}</h2>
        </div>
        {note && <span className="shrink-0 text-xs text-slate-400">{note}</span>}
      </div>
      {children}
    </section>
  );
}
