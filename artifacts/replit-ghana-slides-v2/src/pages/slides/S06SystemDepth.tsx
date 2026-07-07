import Brandmark from "@/components/Brandmark";

export default function S06SystemDepth() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <div className="absolute -left-[6vw] -top-[14vh] h-[24vw] w-[24vw] rounded-full bg-accent/15" />
      <span className="absolute bottom-[6vh] right-[4vw] font-display text-[16vw] font-black leading-none text-inverse/5">
        04
      </span>

      <div className="absolute left-[5vw] top-[16vh] z-10 max-w-[86vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          Core Mental Framework
        </span>
        <h1 className="mt-[2.5vh] font-display text-[5vw] font-black leading-none tracking-tight text-inverse">
          Prompting for System Depth
        </h1>
        <div className="mt-[4vh] max-w-[70vw] border-l-[0.35vw] border-accent pl-[1.6vw]">
          <p className="font-body text-[1.9vw] leading-snug text-inverse/90 [text-wrap:pretty]">
            Describe the system you want, not just the screen — state the data,
            the rules, and how the pieces{" "}
            <span className="font-semibold text-accent">connect</span>.
          </p>
        </div>
      </div>

      <div className="absolute left-[5vw] top-[62vh] z-10 flex w-[90vw] gap-[3vw]">
        <div className="flex-1">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            Define the Data
          </h3>
          <p className="mt-[1.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Name the entities and their relationships up front so the schema is
            explicit.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            State the Rules
          </h3>
          <p className="mt-[1.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Spell out validation, permissions, and edge cases instead of leaving
            them to guesswork.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-[1.9vw] font-bold text-accent">
            Map the Flow
          </h3>
          <p className="mt-[1.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Describe how a user moves through the product end to end, screen by
            screen.
          </p>
        </div>
      </div>

      <Brandmark dark />
    </div>
  );
}
