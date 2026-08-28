import Brandmark from "@/components/Brandmark";

export default function S16Questions() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <div className="absolute -right-[6vw] -bottom-[18vh] h-[38vw] w-[38vw] rounded-full bg-accent/15" />

      <div className="absolute left-[5vw] top-[15vh] z-10 max-w-[80vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          Discussion
        </span>
        <h1 className="mt-[2.5vh] font-display text-[6vw] font-black leading-none tracking-tight text-inverse">
          Questions &amp; Discussion
        </h1>
        <p className="mt-[3vh] max-w-[52vw] font-body text-[1.7vw] leading-snug text-inverse-muted [text-wrap:pretty]">
          Drop a question or share what you plan to build. We will answer as
          many as time allows and stay in the chat afterward.
        </p>
      </div>

      <div className="absolute left-[5vw] top-[58vh] z-10 w-[42vw]">
        <div className="h-[0.3vh] w-full bg-accent" />
        <h3 className="mt-[2.5vh] font-display text-[1.9vw] font-bold text-inverse">
          Stay Connected
        </h3>
        <p className="mt-[1vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
          Join the Replit Ghana Ecosystem group for build prompts, weekly
          challenges, and community support.
        </p>
        <div className="mt-[3.5vh] h-[0.3vh] w-full bg-accent" />
        <h3 className="mt-[2.5vh] font-display text-[1.9vw] font-bold text-inverse">
          Resources &amp; Next Steps
        </h3>
        <p className="mt-[1vh] font-body text-[1.3vw] leading-snug text-inverse-muted">
          Try tonight&rsquo;s workflow: start in Free Mode, give Replit focused
          context, and build from there.
        </p>
      </div>

      <Brandmark dark />
    </div>
  );
}
