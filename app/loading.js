export default function Loading() {
  return (
    <div className="min-h-screen bg-ink-950 grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-full border-4 border-white/10 border-t-solar-500 animate-spin" />
        <p className="font-display tracking-widest text-solar-500 text-sm">
          POWERBEAM LOADING…
        </p>
      </div>
    </div>
  );
}
