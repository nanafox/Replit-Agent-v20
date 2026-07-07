import Brandmark from "@/components/Brandmark";

export default function S09ScalingProduction() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute left-0 top-0 h-full w-[38vw] bg-bg-panel" />
      <div className="absolute left-[38vw] top-[14vh] h-[72vh] w-[0.3vw] bg-accent/40" />

      <div className="absolute left-[5vw] top-[26vh] z-10 w-[28vw]">
        <span className="font-mono text-[1.5vw] font-medium tracking-[0.35em] text-accent">
          0 7
        </span>
        <p className="mt-[1.5vh] font-mono text-[1vw] uppercase tracking-[0.35em] text-muted">
          From MVP to Product
        </p>
        <h1 className="mt-[2.5vh] font-display text-[4.2vw] font-black leading-[0.98] tracking-tight text-text">
          Scaling to Production
        </h1>
        <p className="mt-[3vh] font-body text-[1.5vw] leading-snug text-muted [text-wrap:pretty]">
          A live-build demo is not a product yet. These are the gaps to close
          before real users arrive.
        </p>
      </div>

      <div className="absolute left-[44vw] top-[22vh] z-10 flex w-[50vw] flex-col gap-[3.5vh]">
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-body text-[1.9vw] text-accent">→</span>
            <p className="font-body text-[1.85vw] leading-snug text-text">
              Add real{" "}
              <span className="font-semibold text-accent">
                authentication and roles
              </span>{" "}
              instead of a single shared account.
            </p>
          </div>
        </div>
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-body text-[1.9vw] text-accent">→</span>
            <p className="font-body text-[1.85vw] leading-snug text-text">
              Move secrets to{" "}
              <span className="font-semibold text-accent">
                environment configuration
              </span>{" "}
              and out of the code.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-[1.4vw]">
            <span className="font-body text-[1.9vw] text-accent">→</span>
            <p className="font-body text-[1.85vw] leading-snug text-text">
              Harden inputs, handle errors, and{" "}
              <span className="font-semibold text-accent">
                test the critical paths
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
