const DEFAULT_WORDS = [
  "SITES PROFISSIONAIS", "SISTEMAS WEB", "AUTOMAÇÕES N8N", "LANDING PAGES",
  "E-COMMERCE", "DASHBOARDS", "APIs & INTEGRAÇÕES", "RPA WEB", "IA / GPT",
];

export default function Marquee({
  words = DEFAULT_WORDS,
  reverse = false,
}: {
  words?: string[];
  reverse?: boolean;
}) {
  const row = [...words, ...words];
  return (
    <section className="border-y border-white/5 bg-surface2 py-4 overflow-hidden">
      <div className={`marquee ${reverse ? "marquee--rev" : ""}`}>
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-5 px-5">
            <span className="font-display text-base font-bold uppercase tracking-wide text-gold-metal md:text-lg">
              {w}
            </span>
            <span className="text-gold-3/40 text-sm md:text-base">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
