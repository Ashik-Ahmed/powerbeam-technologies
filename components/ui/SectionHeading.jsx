import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
  dark = false,
}) {
  return (
    <Reveal
      className={cn("max-w-3xl mb-12", center ? "mx-auto text-center" : "")}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full border border-solar-500/40 bg-solar-500/10 text-solar-500">
          <span className="w-1.5 h-1.5 rounded-full bg-solar-500 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl font-bold mt-4 leading-tight",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            dark ? "text-white/70" : "text-slate-600",
          )}
        >
          {desc}
        </p>
      )}
    </Reveal>
  );
}
