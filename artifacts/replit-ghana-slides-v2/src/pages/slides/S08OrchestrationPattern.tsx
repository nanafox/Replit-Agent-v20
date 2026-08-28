import Brandmark from "@/components/Brandmark";

export default function S08OrchestrationPattern() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <span className="absolute bottom-[6vh] right-[4vw] font-display text-[16vw] font-black leading-none text-inverse/5">
        06
      </span>

      <div className="absolute left-[5vw] top-[14vh] z-10 max-w-[84vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          How It Works
        </span>
        <h1 className="mt-[2.5vh] font-display text-[5vw] font-black leading-none tracking-tight text-inverse">
          The Orchestration Pattern
        </h1>
        <p className="mt-[2.5vh] max-w-[64vw] font-body text-[1.6vw] leading-snug text-inverse-muted [text-wrap:pretty]">
          One shared contract keeps parallel agents from drifting apart.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[36vh] z-10 flex w-[90vw] flex-col gap-[2vh]">
        <div className="flex items-start gap-[1.8vw] rounded-[1vw] bg-inverse/5 p-[1.4vw]">
          <span className="font-mono text-[1.6vw] font-bold text-accent">
            01
          </span>
          <div>
            <h3 className="font-display text-[1.8vw] font-bold text-inverse">
              Write the contract first
            </h3>
            <p className="mt-[0.8vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
              Define the API shape and data model before any agent starts, so
              every agent builds to the same interface.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[1.8vw] rounded-[1vw] bg-inverse/5 p-[1.4vw]">
          <span className="font-mono text-[1.6vw] font-bold text-accent">
            02
          </span>
          <div>
            <h3 className="font-display text-[1.8vw] font-bold text-inverse">
              Run agents against it in parallel
            </h3>
            <p className="mt-[0.8vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
              Each agent works its own slice independently while the contract
              holds the shared boundary steady.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[1.8vw] rounded-[1vw] bg-inverse/5 p-[1.4vw]">
          <span className="font-mono text-[1.6vw] font-bold text-accent">
            03
          </span>
          <div>
            <h3 className="font-display text-[1.8vw] font-bold text-inverse">
              Reconcile and test end to end
            </h3>
            <p className="mt-[0.8vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
              Merge the slices, resolve mismatches against the contract, and
              verify the full flow works.
            </p>
          </div>
        </div>
      </div>

      <Brandmark dark />
    </div>
  );
}
