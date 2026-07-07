import Brandmark from "@/components/Brandmark";

export default function S14PromptPatterns() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <span className="absolute bottom-[6vh] right-[4vw] font-display text-[16vw] font-black leading-none text-inverse/5">
        11
      </span>

      <div className="absolute left-[5vw] top-[13vh] z-10 max-w-[84vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          Toolkit
        </span>
        <h1 className="mt-[2.5vh] font-display text-[5vw] font-black leading-none tracking-tight text-inverse">
          Advanced Prompt Patterns
        </h1>
        <p className="mt-[2.5vh] max-w-[62vw] font-body text-[1.6vw] leading-snug text-inverse-muted [text-wrap:pretty]">
          Reusable moves that keep long builds on track.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[46vh] z-10 grid w-[90vw] grid-cols-2 gap-x-[3vw] gap-y-[4vh]">
        <div className="border-t border-inverse/15 pt-[2vh]">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            Plan Before Build
          </h3>
          <p className="mt-[1vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Have the agent map the approach in Plan Mode before it writes any
            code.
          </p>
        </div>
        <div className="border-t border-inverse/15 pt-[2vh]">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            One Change at a Time
          </h3>
          <p className="mt-[1vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Ship and check small commits instead of rewriting many files at
            once.
          </p>
        </div>
        <div className="border-t border-inverse/15 pt-[2vh]">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            Show, Don't Tell
          </h3>
          <p className="mt-[1vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Paste the error, the screenshot, or the design instead of describing
            it.
          </p>
        </div>
        <div className="border-t border-inverse/15 pt-[2vh]">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            Name the Constraints
          </h3>
          <p className="mt-[1vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            State the stack, the rules, and what not to touch so the agent stays
            in bounds.
          </p>
        </div>
      </div>

      <Brandmark dark />
    </div>
  );
}
