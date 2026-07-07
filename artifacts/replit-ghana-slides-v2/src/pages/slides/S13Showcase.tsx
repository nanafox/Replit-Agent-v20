import Brandmark from "@/components/Brandmark";

export default function S13Showcase() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute left-0 top-0 h-full w-[38vw] bg-bg-panel" />
      <div className="absolute left-[38vw] top-[14vh] h-[72vh] w-[0.3vw] bg-accent/40" />

      <div className="absolute left-[5vw] top-[26vh] z-10 w-[28vw]">
        <span className="font-mono text-[1.5vw] font-medium tracking-[0.35em] text-accent">
          1 0
        </span>
        <h1 className="mt-[2.5vh] font-display text-[4vw] font-black leading-[0.98] tracking-tight text-text">
          Community Builder Showcase
        </h1>
        <p className="mt-[3vh] font-body text-[1.5vw] leading-snug text-muted [text-wrap:pretty]">
          A Ghana community builder walks through a production system built
          entirely on Replit.
        </p>
      </div>

      <div className="absolute left-[44vw] top-[24vh] z-10 flex w-[50vw] flex-col gap-[4vh]">
        <div className="flex gap-[1.4vw]">
          <span className="font-body text-[1.9vw] text-accent">→</span>
          <div>
            <h3 className="font-display text-[2vw] font-bold text-text">
              The Inception Phase
            </h3>
            <p className="mt-[0.6vh] font-body text-[1.45vw] leading-snug text-muted">
              Turning an idea into a clear, step-by-step prompt plan.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.4vw]">
          <span className="font-body text-[1.9vw] text-accent">→</span>
          <div>
            <h3 className="font-display text-[2vw] font-bold text-text">
              The Hurdle Breakthrough
            </h3>
            <p className="mt-[0.6vh] font-body text-[1.45vw] leading-snug text-muted">
              Navigating edge cases, bugs, and system routing logic.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.4vw]">
          <span className="font-body text-[1.9vw] text-accent">→</span>
          <div>
            <h3 className="font-display text-[2vw] font-bold text-text">
              Live Demo Walkthrough
            </h3>
            <p className="mt-[0.6vh] font-body text-[1.45vw] leading-snug text-muted">
              A live tour of the deployed product in action.
            </p>
          </div>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}
