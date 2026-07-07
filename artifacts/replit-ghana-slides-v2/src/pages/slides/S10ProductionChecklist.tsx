import Brandmark from "@/components/Brandmark";

export default function S10ProductionChecklist() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <span className="absolute right-[3vw] top-[9vh] font-display text-[13vw] font-black leading-none text-text/5">
        08
      </span>

      <div className="absolute left-[5vw] top-[12vh] z-10">
        <span className="font-mono text-[1.4vw] font-medium tracking-[0.35em] text-accent">
          0 8
        </span>
        <h1 className="mt-[2vh] font-display text-[4.6vw] font-black leading-none tracking-tight text-text">
          Production Checklist
        </h1>
      </div>

      <div className="absolute left-[5vw] top-[36vh] z-10 flex w-[90vw] flex-col gap-[2.6vh]">
        <div className="rounded-[1vw] bg-card px-[2.4vw] py-[2.2vh]">
          <div className="flex items-start gap-[1.4vw]">
            <span className="mt-[0.4vh] font-body text-[1.6vw] font-bold text-accent">
              ✓
            </span>
            <div>
              <h3 className="font-display text-[1.9vw] font-bold text-text">
                Secure the data layer
              </h3>
              <p className="mt-[0.6vh] font-body text-[1.35vw] leading-snug text-muted">
                Explicit schema, validated inputs, and access rules on every
                table.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[1vw] bg-card px-[2.4vw] py-[2.2vh]">
          <div className="flex items-start gap-[1.4vw]">
            <span className="mt-[0.4vh] font-body text-[1.6vw] font-bold text-accent">
              ✓
            </span>
            <div>
              <h3 className="font-display text-[1.9vw] font-bold text-text">
                Verify the critical paths
              </h3>
              <p className="mt-[0.6vh] font-body text-[1.35vw] leading-snug text-muted">
                Test sign-up, core actions, and payments before you invite real
                users.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[1vw] bg-card px-[2.4vw] py-[2.2vh]">
          <div className="flex items-start gap-[1.4vw]">
            <span className="mt-[0.4vh] font-body text-[1.6vw] font-bold text-accent">
              ✓
            </span>
            <div>
              <h3 className="font-display text-[1.9vw] font-bold text-text">
                Prepare to operate
              </h3>
              <p className="mt-[0.6vh] font-body text-[1.35vw] leading-snug text-muted">
                Environment secrets, error logging, and a rollback plan in
                place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Brandmark />
    </div>
  );
}
