import Brandmark from "@/components/Brandmark";

export default function S02Host() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark">
      <div className="absolute -left-[8vw] bottom-[2vh] h-[26vw] w-[26vw] rounded-full bg-accent/15" />

      <div className="absolute left-[5vw] top-[28vh] z-10 max-w-[74vw]">
        <span className="font-mono text-[1.1vw] font-medium uppercase tracking-[0.5em] text-accent">
          Your Host
        </span>
        <h1 className="mt-[2.5vh] font-display text-[6vw] font-black leading-none tracking-tight text-inverse">
          Maxwell Nana Forson
        </h1>
        <p className="mt-[2vh] font-display text-[2.6vw] font-semibold text-inverse/90">
          Creators &amp; Developers Experience Lead
        </p>
        <p className="mt-[0.8vh] font-body text-[1.6vw] text-inverse-muted">
          Replit Ghana Ecosystem
        </p>

        <div className="mt-[6vh] max-w-[48vw] border-l-[0.35vw] border-accent pl-[1.6vw]">
          <p className="font-body text-[1.75vw] leading-snug text-inverse/85 [text-wrap:pretty]">
            Building tools and communities that make software creation
            accessible to everyone, everywhere.
          </p>
        </div>
      </div>

      <Brandmark dark />
    </div>
  );
}
