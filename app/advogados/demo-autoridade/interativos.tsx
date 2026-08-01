"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

/* ============================================================================
   Peças interativas do demo Autoridade (tema Lex) — header, FAQ e tilt.
   Coladas na rota para não misturar identidade com os componentes do Aurum.
============================================================================ */

const LINKS = [
  { href: "#situacoes", label: "Situações" },
  { href: "#areas", label: "Áreas" },
  { href: "#guias", label: "Guias" },
  { href: "#sobre", label: "O advogado" },
  { href: "#metodo", label: "Método" },
  { href: "#faq", label: "Dúvidas" },
];

/** Cabeçalho noir: nasce como vidro escuro sobre o hero e ganha corpo
 *  quando a pessoa passa da primeira tela. IntersectionObserver na
 *  sentinela #hero-fim — nenhum scroll listener. */
export function NoirHeader({
  wa,
  serif,
  base = "",
}: {
  wa: string;
  serif: React.CSSProperties;
  /** Nas páginas internas, prefixo absoluto para os links de âncora (ex.: "/advogados/demo-autoridade"). */
  base?: string;
}) {
  const [solido, setSolido] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("hero-fim");
    if (!alvo) {
      // Página interna, sem hero: o cabeçalho já nasce sólido.
      setSolido(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => setSolido(!e.isIntersecting),
      { rootMargin: "-110px 0px 999px 0px", threshold: 0 }
    );
    io.observe(alvo);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-[33px] z-50 border-b transition-colors duration-500 ${
        solido
          ? "border-[#D4AF37]/25 bg-[#0B0B0C]/92 backdrop-blur-md"
          : "border-white/10 bg-[#0B0B0C]/35 backdrop-blur-[6px]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href={base ? base : "#inicio"} className="leading-tight">
          <span className="block text-lg tracking-[0.06em] text-[#F2F0EA]" style={{ ...serif, fontWeight: 600 }}>
            MEIRELLES<span className="text-[#D4AF37]"> ADVOCACIA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={`${base}${l.href}`}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A6A29A] transition-colors hover:text-[#F5D76E]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={wa}
          target="_blank"
          rel="noopener"
          className="rounded-full border border-[#D4AF37]/60 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5D76E] transition duration-300 hover:-translate-y-[1px] hover:border-[#F5D76E] hover:bg-[#D4AF37]/10"
        >
          Falar com o escritório
        </a>
      </div>
    </header>
  );
}

/** FAQ em sanfona: uma pergunta aberta por vez, seta girando, altura animada
 *  via grid-template-rows (transform/opacity-friendly, sem medir layout). */
export function NoirFaq({
  itens,
  serif,
}: {
  itens: { q: string; a: string }[];
  serif: React.CSSProperties;
}) {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {itens.map((item, i) => {
        const ativa = aberta === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setAberta(ativa ? null : i)}
              aria-expanded={ativa}
              className="flex w-full items-baseline justify-between gap-6 py-6 text-left transition-colors hover:bg-white/[0.02]"
            >
              <span
                className={`text-lg leading-snug transition-colors md:text-xl ${ativa ? "text-[#F5D76E]" : "text-[#F2F0EA]"}`}
                style={serif}
              >
                {item.q}
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-xl leading-none text-[#D4AF37] transition-transform duration-300 ${ativa ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: ativa ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-7 pr-10 text-[15px] leading-relaxed text-[#A6A29A]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Moldura com brilho que segue o cursor: o filete dourado acende no ponto
 *  onde a mão está. CSS custom properties atualizadas fora do ciclo do React. */
export function NoirSpotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);

  return (
    <div ref={ref} className={`noir-spot ${className}`}>
      {children}
    </div>
  );
}
