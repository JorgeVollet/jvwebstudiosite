import { MessageCircle } from "lucide-react";
import { GUIAS_CONTEUDO, GUIAS_ORDEM } from "./guias-data";
import LexBg from "./LexBg";

/* ============================================================================
   RODAPÉ NOIR · demo Autoridade (tema Lex)
   Rodapé de fechamento com presença: marca d'água MA gigante em Cinzel,
   três colunas (marca · guias por área · contato) e a régua institucional.
   Compartilhado pela home e pelas 6 páginas-guia.
============================================================================ */

const SERIF = { fontFamily: "var(--font-cinzel), Georgia, serif" };

const NOMES_GUIAS: Record<string, string> = {
  "recuperacao-de-creditos-tributarios": "Recuperação de créditos tributários",
  "acordo-de-socios": "Acordo de sócios",
  "contratos-empresariais": "Contratos empresariais",
  "recuperacao-judicial": "Recuperação judicial",
  "holding-familiar": "Holding familiar",
  "contencioso-empresarial": "Empresa processada: primeiras 72h",
};

export default function NoirFooter({ wa }: { wa: string }) {
  return (
    <footer className="relative overflow-hidden border-t lex-fio bg-[#080809]">
      {/* Couro por baixo de tudo: dá matéria ao rodapé sem roubar leitura */}
      <LexBg img="couro" opacity={0.13} veu="auto" posicao="center 30%" />

      {/* Marca d'água MA: monograma gigante sangrando pela direita */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-10 select-none text-[16rem] leading-none text-transparent md:-bottom-40 md:-right-6 md:text-[30rem]"
        style={{
          ...SERIF,
          fontWeight: 600,
          WebkitTextStroke: "1px rgba(212,175,55,0.14)",
        }}
      >
        MA
      </span>
      {/* Véu dourado sutil atrás do monograma */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_88%_100%,rgba(212,175,55,.07),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-24">
        <div className="grid gap-14 md:grid-cols-[5fr_3fr_4fr]">
          {/* Marca */}
          <div>
            <p className="text-2xl tracking-[0.08em] text-[#F2F0EA]" style={{ ...SERIF, fontWeight: 600 }}>
              MEIRELLES<span className="text-[#D4AF37]"> ADVOCACIA</span>
            </p>
            <p className="mt-4 max-w-[36ch] text-[14.5px] leading-relaxed text-[#A6A29A]">
              Advocacia empresarial, tributária e societária para quem tem patrimônio a proteger e decisões grandes a tomar.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[#A6A29A]/70">
              OAB/SC 00.000 · Joinville, SC · Atuação nacional
            </p>
          </div>

          {/* Guias por área */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A24B]">Guias por área</p>
            <ul className="mt-5 space-y-3">
              {GUIAS_ORDEM.map((slug) => (
                <li key={slug}>
                  <a
                    href={`/advogados/demo-autoridade/${slug}`}
                    className="text-[13.5px] text-[#A6A29A] transition-colors hover:text-[#F5D76E]"
                  >
                    {NOMES_GUIAS[slug] ?? GUIAS_CONTEUDO[slug].area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A24B]">Contato</p>
            <p className="mt-5 text-[14px] leading-relaxed text-[#A6A29A]">
              Atendimento em horário comercial,
              <br />
              com resposta no mesmo dia útil.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#F5D76E] to-[#C9A24B] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#171204] shadow-[0_14px_40px_-12px_rgba(212,175,55,.5)] transition hover:-translate-y-[2px]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com o escritório
            </a>
            <p className="mt-6 text-[13px] text-[#A6A29A]">
              contato@meirellesadvocacia.adv.br
            </p>
          </div>
        </div>

        {/* Régua institucional */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#A6A29A]/70">
            © 2026 Meirelles Advocacia · Publicidade em conformidade com o Provimento 205/2021 do CFOAB
          </p>
          <p className="text-[11px] text-[#A6A29A]/70">
            Site demonstrativo com conteúdo fictício ·{" "}
            <a href="/advogados" className="text-[#F5D76E] underline underline-offset-4 hover:text-white">
              feito pela JV Web Studio. Quero um site assim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
