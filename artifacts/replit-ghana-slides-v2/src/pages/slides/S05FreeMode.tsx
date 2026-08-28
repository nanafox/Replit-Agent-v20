import Brandmark from "@/components/Brandmark";

export default function S05FreeMode() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-bg">
      <div className="absolute left-0 top-0 h-full w-[38vw] bg-bg-panel" />
      <div className="absolute left-[38vw] top-[14vh] h-[72vh] w-[0.3vw] bg-accent/40" />

      <div className="absolute left-[5vw] top-[23vh] z-10 w-[28vw]">
        <span className="font-mono text-[1.5vw] font-medium tracking-[0.35em] text-accent">
          0 3
        </span>
        <p className="mt-[1.5vh] font-mono text-[1vw] uppercase tracking-[0.35em] text-muted">
          Agent Modes
        </p>
        <h1 className="mt-[2.5vh] font-display text-[4.8vw] font-black leading-[0.98] tracking-tight text-text">
          Free Mode
        </h1>
        <p className="mt-[3vh] font-body text-[1.55vw] leading-snug text-muted [text-wrap:pretty]">
          Chat, create, and build without using Power Mode or Max Mode credits.
        </p>
        <p className="mt-[4vh] border-l-[0.3vw] border-accent pl-[1.3vw] font-body text-[1.25vw] leading-snug text-muted [text-wrap:pretty]">
          Check Settings → Usage for your remaining allowance and reset timing.
        </p>
      </div>

      <div className="absolute left-[44vw] top-[18vh] z-10 flex w-[50vw] flex-col gap-[3.2vh]">
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-mono text-[1.6vw] font-bold text-accent">
              01
            </span>
            <div>
              <h2 className="font-display text-[2vw] font-bold text-text">
                Start with focused work
              </h2>
              <p className="mt-[1vh] font-body text-[1.45vw] leading-snug text-muted">
                Explore an idea, make a first pass at a feature, or work through
                a smaller change.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-text/10 pb-[3vh]">
          <div className="flex gap-[1.4vw]">
            <span className="font-mono text-[1.6vw] font-bold text-accent">
              02
            </span>
            <div>
              <h2 className="font-display text-[2vw] font-bold text-text">
                Let intelligent routing choose
              </h2>
              <p className="mt-[1vh] font-body text-[1.45vw] leading-snug text-muted">
                Free Mode selects the model for the request, so you can stay
                focused on the outcome.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-[1.4vw]">
            <span className="font-mono text-[1.6vw] font-bold text-accent">
              03
            </span>
            <div>
              <h2 className="font-display text-[2vw] font-bold text-text">
                Switch when the work calls for it
              </h2>
              <p className="mt-[1vh] font-body text-[1.45vw] leading-snug text-muted">
                Move to Power or Max when you need more capability, model
                choice, or reach your Free allowance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}