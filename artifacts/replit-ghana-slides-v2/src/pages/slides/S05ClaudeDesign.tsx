import Brandmark from "@/components/Brandmark";

export default function S05ClaudeDesign() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute left-0 top-0 h-full w-[38vw] bg-bg-panel" />
      <div className="absolute left-[38vw] top-[14vh] h-[72vh] w-[0.3vw] bg-accent/40" />

      <div className="absolute left-[5vw] top-[24vh] z-10 w-[28vw]">
        <span className="font-mono text-[1.5vw] font-medium tracking-[0.35em] text-accent">
          0 3
        </span>
        <p className="mt-[1.5vh] font-mono text-[1vw] uppercase tracking-[0.35em] text-muted">
          Design Handoff
        </p>
        <h1 className="mt-[2.5vh] font-display text-[4vw] font-black leading-[0.98] tracking-tight text-text">
          Claude Design + Replit
        </h1>
        <p className="mt-[3vh] font-body text-[1.5vw] leading-snug text-muted [text-wrap:pretty]">
          Design the interface visually first, then hand it to Replit to build
          the real thing.
        </p>
      </div>

      <div className="absolute left-[44vw] top-[20vh] z-10 flex w-[50vw] flex-col gap-[3.5vh]">
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-mono text-[1.6vw] font-bold text-accent">
              01
            </span>
            <p className="font-body text-[1.8vw] leading-snug text-text">
              Design the interface visually in{" "}
              <span className="font-semibold text-accent">Claude Design</span>.
            </p>
          </div>
        </div>
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-mono text-[1.6vw] font-bold text-accent">
              02
            </span>
            <p className="font-body text-[1.8vw] leading-snug text-text">
              Connect{" "}
              <span className="font-semibold text-accent">Replit</span> and
              Claude Design so they can talk to each other.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-[1.4vw]">
            <span className="font-mono text-[1.6vw] font-bold text-accent">
              03
            </span>
            <p className="font-body text-[1.8vw] leading-snug text-text">
              Bring the Claude design into Replit and{" "}
              <span className="font-semibold text-accent">
                build from there
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}
