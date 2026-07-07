import Brandmark from "@/components/Brandmark";

export default function S15WhatsNext() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <div className="absolute -right-[8vw] -top-[14vh] h-[34vw] w-[34vw] rounded-full bg-accent/15" />

      <div className="absolute left-[5vw] top-[16vh] z-10 max-w-[80vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          Future Teaser
        </span>
        <h1 className="mt-[2.5vh] font-display text-[5.2vw] font-black leading-none tracking-tight text-inverse">
          What&rsquo;s Coming Next
        </h1>
        <p className="mt-[2.5vh] max-w-[58vw] font-body text-[1.6vw] leading-snug text-inverse-muted [text-wrap:pretty]">
          A look at the sessions we are building toward after tonight.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[52vh] z-10 flex w-[90vw] gap-[3vw]">
        <div className="flex-1">
          <div className="h-[0.35vh] w-full bg-accent" />
          <h3 className="mt-[2.5vh] font-display text-[2vw] font-bold leading-tight text-inverse">
            Team Workflows
          </h3>
          <p className="mt-[1.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Collaborating on one build with shared agents, reviews, and roles.
          </p>
        </div>
        <div className="flex-1">
          <div className="h-[0.35vh] w-full bg-accent" />
          <h3 className="mt-[2.5vh] font-display text-[2vw] font-bold leading-tight text-inverse">
            Integrations Deep-Dive
          </h3>
          <p className="mt-[1.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Payments, auth, and third-party APIs wired into real products.
          </p>
        </div>
        <div className="flex-1">
          <div className="h-[0.35vh] w-full bg-accent" />
          <h3 className="mt-[2.5vh] font-display text-[2vw] font-bold leading-tight text-inverse">
            Scaling &amp; Observability
          </h3>
          <p className="mt-[1.5vh] font-body text-[1.35vw] leading-snug text-inverse-muted">
            Monitoring, performance, and operating apps once real users arrive.
          </p>
        </div>
      </div>

      <Brandmark dark />
    </div>
  );
}
