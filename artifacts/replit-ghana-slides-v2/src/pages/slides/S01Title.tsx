import Brandmark from "@/components/Brandmark";

export default function S01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute -right-[8vw] -top-[12vh] h-[42vw] w-[42vw] rounded-full bg-accent/10" />
      <div className="absolute -left-[10vw] -bottom-[18vh] h-[30vw] w-[30vw] rounded-full bg-bg-panel" />

      <div className="absolute left-[5vw] top-[13vh] z-10 max-w-[80vw]">
        <div className="h-[0.5vh] w-[4vw] bg-accent" />
        <div className="mt-[4vh] flex items-center gap-[1vw]">
          <div className="h-[0.9vw] w-[0.9vw] rounded-full bg-accent" />
          <span className="font-mono text-[1.15vw] font-medium uppercase tracking-[0.5em] text-accent">
            Replit Ghana Ecosystem
          </span>
        </div>

        <h1 className="mt-[3.5vh] font-display text-[6.4vw] font-black leading-[0.98] tracking-tight text-text">
          Build with Replit Agent 4
        </h1>
        <h2 className="mt-[0.5vh] font-display text-[4.6vw] font-bold leading-none tracking-tight text-accent">
          Version 2.0 Ecosystem
        </h2>

        <p className="mt-[5vh] max-w-[46vw] font-body text-[1.9vw] font-normal leading-snug text-muted [text-wrap:pretty]">
          Theme: Free Mode, advanced orchestration, and shipping to
          production.
        </p>

        <div className="mt-[6vh] flex items-center gap-[1.4vw] font-body text-[1.35vw] text-muted">
          <span>7:00 PM – 9:00 PM</span>
          <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-accent" />
          <span>August 29, 2026</span>
          <span className="h-[0.5vw] w-[0.5vw] rounded-full bg-accent" />
          <span>Live on Google Meet</span>
        </div>
      </div>

      <span className="absolute bottom-[4.5vh] right-[4vw] z-10 font-mono text-[1.1vw] uppercase tracking-[0.45em] text-muted">
        Maxwell Nana Forson
      </span>

      <Brandmark />
    </div>
  );
}
