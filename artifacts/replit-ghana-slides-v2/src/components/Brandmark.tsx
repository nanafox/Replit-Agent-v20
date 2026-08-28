const base = import.meta.env.BASE_URL;

export default function Brandmark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="absolute left-[6vw] bottom-[6.5vh] z-20">
      <img
        src={`${base}logos/replit-ghana-${dark ? "dark" : "light"}.png`}
        alt="Replit Ghana"
        className="h-auto w-[6.8vw]"
        crossOrigin="anonymous"
      />
    </div>
  );
}
