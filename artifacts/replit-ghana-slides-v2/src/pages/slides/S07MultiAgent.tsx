import Brandmark from "@/components/Brandmark";

export default function S07MultiAgent() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <span className="absolute right-[3vw] top-[10vh] font-display text-[14vw] font-black leading-none text-text/5">
        05
      </span>

      <div className="absolute left-[5vw] top-[13vh] z-10 max-w-[62vw]">
        <span className="font-mono text-[1.4vw] font-medium tracking-[0.35em] text-accent">
          0 5
        </span>
        <h1 className="mt-[2vh] font-display text-[5vw] font-black leading-none tracking-tight text-text">
          Multi-Agent Orchestration
        </h1>
        <p className="mt-[2.5vh] max-w-[58vw] font-body text-[1.6vw] leading-snug text-muted [text-wrap:pretty]">
          Split a large build across focused agents that each own one part of
          the system, then run them in parallel.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[48vh] z-10 flex w-[90vw] gap-[2vw]">
        <div className="flex-1 rounded-[1.2vw] bg-card p-[2.4vw]">
          <span className="font-mono text-[1.5vw] font-bold text-accent">
            /01
          </span>
          <h3 className="mt-[2vh] font-display text-[2vw] font-bold text-text">
            Frontend Agent
          </h3>
          <p className="mt-[2.5vh] font-body text-[1.35vw] leading-snug text-muted">
            Owns the interface, components, and client state from the imported
            design.
          </p>
        </div>
        <div className="flex-1 rounded-[1.2vw] bg-card p-[2.4vw]">
          <span className="font-mono text-[1.5vw] font-bold text-accent">
            /02
          </span>
          <h3 className="mt-[2vh] font-display text-[2vw] font-bold text-text">
            Backend Agent
          </h3>
          <p className="mt-[2.5vh] font-body text-[1.35vw] leading-snug text-muted">
            Owns the database schema, API routes, and business logic in
            parallel.
          </p>
        </div>
        <div className="flex-1 rounded-[1.2vw] bg-dark p-[2.4vw]">
          <span className="font-mono text-[1.5vw] font-bold text-accent">
            /03
          </span>
          <h3 className="mt-[2vh] font-display text-[2vw] font-bold text-inverse">
            Integration Agent
          </h3>
          <p className="mt-[2.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Wires the halves together and reconciles the contract between them.
          </p>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}
