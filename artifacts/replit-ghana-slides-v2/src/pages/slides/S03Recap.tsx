import Brandmark from "@/components/Brandmark";

export default function S03Recap() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute left-0 top-0 h-full w-[38vw] bg-bg-panel" />
      <div className="absolute left-[38vw] top-[14vh] h-[72vh] w-[0.3vw] bg-accent/40" />

      <div className="absolute left-[5vw] top-[26vh] z-10 w-[28vw]">
        <span className="font-mono text-[1.5vw] font-medium tracking-[0.35em] text-accent">
          0 1
        </span>
        <p className="mt-[1.5vh] font-mono text-[1vw] uppercase tracking-[0.35em] text-muted">
          Recap
        </p>
        <h1 className="mt-[2.5vh] font-display text-[4.4vw] font-black leading-[0.98] tracking-tight text-text">
          Where We Left Off
        </h1>
        <p className="mt-[3vh] font-body text-[1.5vw] leading-snug text-muted [text-wrap:pretty]">
          Version 1.0 covered the fundamentals of prompt-to-build. Tonight we go
          deeper.
        </p>
      </div>

      <div className="absolute left-[44vw] top-[22vh] z-10 flex w-[50vw] flex-col gap-[4vh]">
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-body text-[1.9vw] text-accent">→</span>
            <p className="font-body text-[1.9vw] leading-snug text-text">
              Effective prompting is a{" "}
              <span className="font-semibold text-accent">
                strategic architectural skill
              </span>
              , not autocomplete.
            </p>
          </div>
        </div>
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-body text-[1.9vw] text-accent">→</span>
            <p className="font-body text-[1.9vw] leading-snug text-text">
              Match the{" "}
              <span className="font-semibold text-accent">agent mode</span> to
              the task to balance quality and build credits.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-[1.4vw]">
            <span className="font-body text-[1.9vw] text-accent">→</span>
            <p className="font-body text-[1.9vw] leading-snug text-text">
              Treat the model like an{" "}
              <span className="font-semibold text-accent">
                intelligent junior developer
              </span>{" "}
              you brief clearly.
            </p>
          </div>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}
