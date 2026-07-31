import Reveal from "@/components/advogados/demo/DemoReveal";
import { ArrowLeft, ArrowRight, MessageCircle, Check } from "lucide-react";
import { cinzel } from "./fonts";
import { NoirHeader } from "./interativos";
import NoirFooter from "./NoirFooter";
import type { Guia } from "./guias-data";
import { GUIAS_CONTEUDO, GUIAS_ORDEM } from "./guias-data";

/* ============================================================================
   TEMPLATE DAS PÁGINAS-GUIA · demo Autoridade (tema Lex)
   Mesmo esqueleto para as 6 áreas, em composição LARGA: capítulos com título
   fixo à esquerda, listas em duas colunas, passos em quatro. Header e rodapé
   idênticos aos da home. Conteúdo em guias-data.ts.
============================================================================ */

const SERIF = { fontFamily: "var(--font-cinzel), Georgia, serif" };
const SERIF_MED = { ...SERIF, fontWeight: 500 };

const BASE = "/advogados/demo-autoridade";

export default function GuiaTemplate({ guia }: { guia: Guia }) {
  const WA = `https://wa.me/5547999234449?text=${encodeURIComponent(
    `Olá! Vi a página-guia de ${guia.area} do site modelo Autoridade (Meirelles) e quero um site assim para minha advocacia.`
  )}`;

  /** As outras guias, para a régua de leitura no fim (link interno = SEO real) */
  const outras = GUIAS_ORDEM.filter((s) => s !== guia.slug)
    .slice(0, 3)
    .map((s) => GUIAS_CONTEUDO[s]);

  return (
    <div className={`lex-root ${cinzel.variable} bg-[#0B0B0C] text-[#F2F0EA]`}>
      <style>{`
        .lex-root{--gold:#D4AF37;--gold-soft:#F5D76E;--gold-deep:#C9A24B;}
        .lex-root ::selection{background:rgba(212,175,55,.28);}
        .lex-grain{position:fixed;inset:0;z-index:60;pointer-events:none;opacity:.05;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
        .lex-ouro{background:linear-gradient(112deg,#F5D76E 8%,#D4AF37 38%,#8f6f1f 52%,#F5D76E 78%);-webkit-background-clip:text;background-clip:text;color:transparent;}
        .lex-fio{border-color:rgba(212,175,55,.22);}
        @media (prefers-reduced-motion: no-preference){
          .lex-root .reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);}
          .lex-root .reveal.in{opacity:1;transform:none;}
        }
      `}</style>

      <div className="lex-grain" aria-hidden />

      {/* Schema FAQPage: o "SEO técnico" do plano Autoridade, demonstrado de verdade */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guia.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Banner site modelo */}
      <div className="fixed inset-x-0 top-0 z-[70] flex h-[33px] items-center justify-center border-b border-[#D4AF37]/30 bg-[#141210] px-4">
        <a href="/advogados" className="truncate font-mono text-[9px] uppercase tracking-[0.14em] text-[#F5D76E] hover:text-white sm:text-[10px] sm:tracking-[0.18em]">
          ✦ Página-guia do site modelo<span className="hidden sm:inline"> · Plano Autoridade</span>, por JV Web Studio · <u>Quero um site assim</u>
        </a>
      </div>

      {/* Cabeçalho: o mesmo da home, já sólido nas páginas internas */}
      <NoirHeader wa={WA} serif={SERIF} base={BASE} />

      <main className="pt-[130px]">
        {/* ============ ABERTURA · larga, com fio de capítulo ============ */}
        <header className="mx-auto max-w-6xl px-6 pb-16 pt-10">
          <a
            href={BASE}
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#A6A29A] transition hover:text-[#F5D76E]"
          >
            <ArrowLeft className="h-4 w-4" /> Meirelles Advocacia
          </a>
          <div className="mt-10 border-l-2 border-[#D4AF37]/50 pl-6 md:pl-10">
            <p className="text-xs uppercase tracking-[0.32em] text-[#C9A24B]">Guia · {guia.area}</p>
            <h1 className="mt-6 max-w-[26ch] text-4xl leading-[1.08] md:text-6xl" style={SERIF_MED}>
              {guia.h1.antes}
              <span className="lex-ouro">{guia.h1.ouro}</span>
              {guia.h1.depois ?? ""}
            </h1>
            <p className="mt-8 max-w-[72ch] text-[16.5px] leading-relaxed text-[#A6A29A] md:text-lg">{guia.intro}</p>
          </div>
        </header>

        {/* ============ ENTENDA · capítulo fixo à esquerda, prosa à direita ============ */}
        <section className="border-t lex-fio bg-[#0D0D0E]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[4fr_8fr] md:gap-16">
            <div className="md:sticky md:top-36 md:self-start">
              <Reveal>
                <h2 className="max-w-[16ch] text-3xl leading-tight md:text-4xl" style={SERIF_MED}>
                  {guia.entenda.titulo}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="space-y-5 text-[16px] leading-relaxed text-[#CFCBC2] md:text-[17px]">
                {guia.entenda.paragrafos.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ LISTA · duas colunas de verificação ============ */}
        <section className="border-t lex-fio">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <h2 className="max-w-[28ch] text-3xl leading-tight md:text-4xl" style={SERIF_MED}>
                {guia.lista.titulo}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-x-14 gap-y-6 md:grid-cols-2">
              {guia.lista.itens.map((item, i) => (
                <Reveal key={item} delay={(i % 2) * 80}>
                  <div className="flex gap-4 border-b border-white/[0.06] pb-6 text-[15.5px] leading-relaxed text-[#CFCBC2]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#C9A24B]" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PASSOS · quatro colunas, numerais romanos ============ */}
        <section className="border-t lex-fio bg-[#0D0D0E]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <h2 className="text-3xl leading-tight md:text-4xl" style={SERIF_MED}>
                {guia.passos.titulo}
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {guia.passos.itens.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <span aria-hidden className="block text-5xl text-[#2E2A20]" style={SERIF}>{p.n}</span>
                  <h3 className="mt-4 text-xl text-[#F2F0EA]" style={SERIF}>{p.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#A6A29A]">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DESTAQUE · faixa larga de ouro ============ */}
        <section className="relative overflow-hidden border-y lex-fio">
          <div className="absolute inset-0 bg-[radial-gradient(65%_130%_at_18%_120%,rgba(212,175,55,.13),transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="max-w-[76ch]">
                <h2 className="text-3xl leading-tight md:text-4xl" style={SERIF_MED}>
                  <span className="lex-ouro">{guia.destaque.titulo}</span>
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-[#CFCBC2] md:text-[17px]">{guia.destaque.texto}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ · duas colunas ============ */}
        <section className="bg-[#0D0D0E]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <h2 className="text-3xl leading-tight md:text-4xl" style={SERIF_MED}>
                Perguntas frequentes
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
              {guia.faq.map((f, i) => (
                <Reveal key={f.q} delay={(i % 2) * 70}>
                  <h3 className="text-xl text-[#F5D76E]" style={SERIF}>{f.q}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#A6A29A]">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative overflow-hidden border-t lex-fio">
          <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_115%,rgba(212,175,55,.16),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-[24ch] text-4xl leading-tight md:text-5xl" style={SERIF_MED}>
                {guia.cta.antes}
                <span className="lex-ouro">{guia.cta.ouro}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#A6A29A]">{guia.cta.texto}</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#F5D76E] to-[#C9A24B] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#171204] shadow-[0_18px_50px_-14px_rgba(212,175,55,.55)] transition hover:-translate-y-[2px]"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com o escritório
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ CONTINUE LENDO · malha interna entre guias ============ */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs uppercase tracking-[0.28em] text-[#A6A29A]">Continue lendo</p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {outras.map((o) => (
                <a
                  key={o.slug}
                  href={`${BASE}/${o.slug}`}
                  className="group flex flex-col justify-between rounded-[3px] border border-white/10 bg-[#121212] p-6 transition-colors hover:border-[#D4AF37]/40"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A24B]">{o.area}</p>
                    <p className="mt-3 text-[16px] leading-snug text-[#F2F0EA] transition-colors group-hover:text-[#F5D76E]" style={SERIF}>
                      {o.h1.antes}
                      {o.h1.ouro}
                      {o.h1.depois ?? ""}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A24B] transition-colors group-hover:text-[#F5D76E]">
                    Ler a guia
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <NoirFooter wa={WA} />

      {/* WhatsApp flutuante */}
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#F5D76E] to-[#C9A24B] text-[#171204] shadow-[0_14px_40px_-10px_rgba(212,175,55,.6)] transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Falar com o escritório</span>
      </a>
    </div>
  );
}
