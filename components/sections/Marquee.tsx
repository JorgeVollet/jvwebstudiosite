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
  // Repete as palavras o suficiente para um grupo cobrir telas largas,
  // garantindo o loop infinito sem espaços vazios.
  const base = words.length < 6 ? [...words, ...words, ...words] : [...words, ...words];

  const Group = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="marquee__group" aria-hidden={ariaHidden || undefined}>
      {base.map((w, i) => (
        <span key={i} className="flex items-center gap-4 px-4">
          <span className="text-gold-shine font-display text-sm font-bold uppercase tracking-wide md:text-base">
            {w}
          </span>
          <span className="text-gold-3/50 text-xs md:text-sm">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-white/10 bg-dark py-2 overflow-hidden">
      <div className={`marquee ${reverse ? "marquee--rev" : ""}`}>
        {/* dois grupos idênticos lado a lado → loop perfeito (anima -100% de um grupo) */}
        <Group />
        <Group ariaHidden />
      </div>
    </section>
  );
}
