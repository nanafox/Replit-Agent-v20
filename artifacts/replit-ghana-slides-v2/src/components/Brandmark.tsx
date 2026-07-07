export default function Brandmark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="absolute left-[3.5vw] bottom-[4vh] flex items-center gap-[0.9vw] z-20">
      <div className="flex h-[2vw] w-[2vw] items-center justify-center rounded-[0.4vw] bg-accent">
        <div className="h-[0.9vw] w-[0.9vw] rotate-45 rounded-[0.15vw] bg-inverse" />
      </div>
      <span
        className={`font-display text-[1.3vw] font-bold tracking-tight ${
          dark ? "text-inverse" : "text-text"
        }`}
      >
        Replit
      </span>
      <div className="ml-[0.4vw] flex h-[1.4vw] w-[2.1vw] flex-col overflow-hidden rounded-[0.2vw]">
        <div className="relative flex-1" style={{ background: "#ce1126" }} />
        <div className="relative flex-1" style={{ background: "#fcd116" }}>
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.7vw] leading-none"
            style={{ color: "#1a1a1a" }}
          >
            ★
          </span>
        </div>
        <div className="flex-1" style={{ background: "#006b3f" }} />
      </div>
    </div>
  );
}
