import Brandmark from "@/components/Brandmark";

export default function S11Deployments() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <div className="absolute -right-[6vw] -top-[10vh] h-[28vw] w-[28vw] rounded-full bg-accent/15" />

      <div className="absolute left-[5vw] top-[14vh] z-10 max-w-[84vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          Shipping It
        </span>
        <h1 className="mt-[2.5vh] font-display text-[5vw] font-black leading-none tracking-tight text-inverse">
          Replit Deployments
        </h1>
        <p className="mt-[2.5vh] max-w-[64vw] font-body text-[1.6vw] leading-snug text-inverse-muted [text-wrap:pretty]">
          Pick the deployment type that matches how your app actually runs.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[48vh] z-10 flex w-[90vw] gap-[2vw]">
        <div className="flex-1 rounded-[1.2vw] bg-inverse/5 p-[2.2vw]">
          <h3 className="font-display text-[1.9vw] font-bold text-inverse">
            Autoscale
          </h3>
          <p className="mt-[1.2vh] font-mono text-[0.95vw] uppercase tracking-[0.25em] text-accent">
            Default
          </p>
          <p className="mt-[2vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
            Web apps and APIs that scale to demand and down to zero when idle.
          </p>
        </div>
        <div className="flex-1 rounded-[1.2vw] bg-inverse/5 p-[2.2vw]">
          <h3 className="font-display text-[1.9vw] font-bold text-inverse">
            Reserved VM
          </h3>
          <p className="mt-[1.2vh] font-mono text-[0.95vw] uppercase tracking-[0.25em] text-accent">
            Always On
          </p>
          <p className="mt-[2vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
            Long-running processes, bots, and background jobs that never sleep.
          </p>
        </div>
        <div className="flex-1 rounded-[1.2vw] bg-inverse/5 p-[2.2vw]">
          <h3 className="font-display text-[1.9vw] font-bold text-inverse">
            Static
          </h3>
          <p className="mt-[1.2vh] font-mono text-[0.95vw] uppercase tracking-[0.25em] text-accent">
            Fastest
          </p>
          <p className="mt-[2vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
            Prebuilt frontends served from the edge with no server to manage.
          </p>
        </div>
      </div>

      <Brandmark dark />
    </div>
  );
}
