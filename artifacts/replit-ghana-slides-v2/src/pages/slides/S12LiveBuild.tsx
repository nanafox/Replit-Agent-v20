import Brandmark from "@/components/Brandmark";

const base = import.meta.env.BASE_URL;

export default function S12LiveBuild() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div className="absolute left-[5vw] top-[24vh] z-10 w-[38vw]">
        <span className="font-mono text-[1.4vw] font-medium tracking-[0.35em] text-accent">
          0 9
        </span>
        <p className="mt-[1.5vh] font-mono text-[1vw] uppercase tracking-[0.35em] text-muted">
          Live Build
        </p>
        <h1 className="mt-[2.5vh] font-display text-[4vw] font-black leading-[0.98] tracking-tight text-text">
          Multi-Tenant SaaS
        </h1>
        <p className="mt-[3vh] font-body text-[1.55vw] leading-snug text-muted [text-wrap:pretty]">
          We take the Claude design, orchestrate the build, and stand up a
          working multi-tenant dashboard — live.
        </p>
        <div className="mt-[4vh] flex items-center gap-[1vw]">
          <span className="h-[0.7vw] w-[0.7vw] rounded-full bg-accent" />
          <span className="font-body text-[1.3vw] font-medium text-text">
            Idea → design → orchestrated build → deploy
          </span>
        </div>
      </div>

      <div className="absolute right-[4vw] top-[8vh] z-10 h-[84vh] w-[48vw] overflow-hidden rounded-[1.4vw] bg-bg-panel p-[1vw]">
        <img
          src={`${base}saas-dashboard.png`}
          crossOrigin="anonymous"
          alt="Multi-tenant SaaS dashboard mockup"
          className="h-full w-full rounded-[1vw] object-cover"
        />
      </div>

      <Brandmark />
    </div>
  );
}
