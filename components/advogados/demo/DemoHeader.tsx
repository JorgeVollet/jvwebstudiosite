"use client";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#situacoes", label: "Como ajudo" },
  { href: "#areas", label: "Áreas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Atendimento" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "Dúvidas" },
];

/** Cabeçalho que nasce transparente sobre a foto do hero (só 10% de véu + blur)
 *  e vira sólido quando a pessoa passa do hero. Sem scroll listener:
 *  IntersectionObserver em uma sentinela no fim do hero. */
export default function DemoHeader({ wa, serif }: { wa: string; serif: React.CSSProperties }) {
  const [solido, setSolido] = useState(false);
  const armado = useRef(false);

  useEffect(() => {
    const alvo = document.getElementById("hero-fim");
    if (!alvo) return;
    const io = new IntersectionObserver(
      ([e]) => setSolido(!e.isIntersecting),
      { rootMargin: "-110px 0px 999px 0px", threshold: 0 }
    );
    io.observe(alvo);
    armado.current = true;
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-[33px] z-50 border-b transition-colors duration-500 ${
        solido
          ? "border-[#E5DCC9] bg-[#F6F2E9]/90 backdrop-blur-md"
          : "border-white/10 bg-[#F6F2E9]/10 backdrop-blur-[6px]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="leading-tight">
          <span
            className={`block font-serif text-xl font-semibold tracking-tight transition-colors duration-500 ${
              solido ? "text-[#211D16]" : "text-[#F6F2E9] [text-shadow:0_1px_12px_rgba(4,12,8,0.6)]"
            }`}
            style={serif}
          >
            Helena <span className={solido ? "text-[#24523D]" : "text-[#BEDBC6]"}>Vasconcellos</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors duration-500 ${
                solido
                  ? "text-[#6B6455] hover:text-[#211D16]"
                  : "text-[#E4EDE2] hover:text-white [text-shadow:0_1px_10px_rgba(4,12,8,0.55)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={wa}
          target="_blank"
          rel="noopener"
          className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-500 hover:-translate-y-[1px] ${
            solido
              ? "bg-[#1C3A2E] text-[#CDE3D3] hover:bg-black"
              : "bg-[#F5F0E3]/95 text-[#16281F] shadow-[0_10px_30px_-12px_rgba(4,12,8,0.8)] hover:bg-white"
          }`}
        >
          Conversar no WhatsApp
        </a>
      </div>
    </header>
  );
}
