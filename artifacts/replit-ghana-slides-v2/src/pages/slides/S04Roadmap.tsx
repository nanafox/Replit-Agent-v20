import Brandmark from "@/components/Brandmark";

export default function S04Roadmap() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute -right-[6vw] -top-[10vh] h-[30vw] w-[30vw] rounded-full bg-accent/10" />

      <div className="absolute left-[5vw] top-[12vh] z-10 max-w-[60vw]">
        <span className="font-mono text-[1.4vw] font-medium tracking-[0.35em] text-accent">
          0 2
        </span>
        <h1 className="mt-[2vh] font-display text-[5vw] font-black leading-none tracking-tight text-text">
          Session Roadmap
        </h1>
        <p className="mt-[2.5vh] font-body text-[1.6vw] leading-snug text-muted">
          Three acts, from choosing the right mode to a live production build.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[46vh] z-10 flex w-[90vw] gap-[2vw]">
        <div className="flex-1 rounded-[1.2vw] bg-card p-[2.4vw]">
          <span className="font-mono text-[1.5vw] font-bold text-accent">
            /01
          </span>
          <h3 className="mt-[2vh] font-display text-[2.1vw] font-bold leading-tight text-text">
            Free Mode
          </h3>
          <p className="mt-[2.5vh] font-body text-[1.35vw] leading-snug text-muted">
            Keep momentum on everyday work without spending Power or Max credits.
          </p>
        </div>

        <div className="flex-1 rounded-[1.2vw] bg-dark p-[2.4vw]">
          <span className="font-mono text-[1.5vw] font-bold text-accent">
            /02
          </span>
          <h3 className="mt-[2vh] font-display text-[2.1vw] font-bold leading-tight text-inverse">
            Multi-Agent Orchestration
          </h3>
          <p className="mt-[2.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Coordinate separate agents across frontend, backend, and
            integration work.
          </p>
        </div>

        <div className="flex-1 rounded-[1.2vw] bg-card p-[2.4vw]">
          <span className="font-mono text-[1.5vw] font-bold text-accent">
            /03
          </span>
          <h3 className="mt-[2vh] font-display text-[2.1vw] font-bold leading-tight text-text">
            Scaling to Production
          </h3>
          <p className="mt-[2.5vh] font-body text-[1.35vw] leading-snug text-muted">
            Turn a live-build MVP into a deployed, production-ready product.
          </p>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}
