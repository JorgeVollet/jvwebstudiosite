import Reveal from "@/components/advogados/demo/DemoReveal";
import { ArrowLeft, MessageCircle, Check } from "lucide-react";
import { cinzel } from "./fonts";
import type { Guia } from "./guias-data";
import { GUIAS_CONTEUDO, GUIAS_ORDEM } from "./guias-data";

/* ============================================================================
   TEMPLATE DAS PÁGINAS-GUIA · demo Autoridade (tema Lex)
   O mesmo esqueleto visual para as 6 áreas — é assim que o Autoridade escala:
   estrutura de SEO idêntica (H1 com a pergunta, headings, FAQ com JSON-LD),
   conteúdo 100% próprio por área (vem de guias-data.ts).
============================================================================ */

const SERIF = { fontFamily: "var(--font-cinzel), Georgia, serif" };
const SERIF_MED = { ...SERIF, fontWeight: 500 };

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
        .lex-ouro{background:linear-gradient(112deg,#F5D76E 8%,#D4AF37 38%,#8f6f1f 52%,#F5D76E 78%);-webkit-background-clip:text;background-clip:text;color:transparent;}
        .lex-fio{border-color:rgba(212,175,55,.22);}
        @media (prefers-reduced-motion: no-preference){
          .lex-root .reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);}
          .lex-root .reveal.in{opacity:1;transform:none;}
        }
      `}</style>

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

      <main className="mx-auto max-w-3xl px-6 pb-28 pt-[92px]">
        {/* Volta */}
        <a
          href="/advogados/demo-autoridade"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#A6A29A] transition hover:text-[#F5D76E]"
        >
          <ArrowLeft className="h-4 w-4" /> Meirelles Advocacia
        </a>

        {/* Cabeça da guia */}
        <header className="mt-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#C9A24B]">Guia · {guia.area}</p>
          <h1 className="mt-6 text-[2.2rem] leading-[1.12] md:text-5xl" style={SERIF_MED}>
            {guia.h1.antes}
            <span className="lex-ouro">{guia.h1.ouro}</span>
            {guia.h1.depois ?? ""}
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-[#A6A29A]">{guia.intro}</p>
        </header>

        {/* Entenda */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>{guia.entenda.titulo}</h2>
            <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-[#CFCBC2]">
              {guia.entenda.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Lista com checks */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>{guia.lista.titulo}</h2>
            <ul className="mt-6 space-y-4">
              {guia.lista.itens.map((item) => (
                <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-[#CFCBC2]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#C9A24B]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Passos */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>{guia.passos.titulo}</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {guia.passos.itens.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="rounded-[3px] border border-white/10 bg-[#121212] p-7">
                  <span aria-hidden className="block text-4xl text-[#2E2A20]" style={SERIF}>{p.n}</span>
                  <h3 className="mt-3 text-lg text-[#F2F0EA]" style={SERIF}>{p.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#A6A29A]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Destaque */}
        <section className="mt-16">
          <Reveal>
            <div className="rounded-[3px] border lex-fio bg-gradient-to-br from-[#161410] to-[#111110] p-8">
              <h2 className="text-2xl md:text-3xl" style={SERIF}>{guia.destaque.titulo}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#CFCBC2]">{guia.destaque.texto}</p>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>Perguntas frequentes</h2>
          </Reveal>
          <div className="mt-8 space-y-10">
            {guia.faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <h3 className="text-lg text-[#F5D76E]" style={SERIF}>{f.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#A6A29A]">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 border-t lex-fio pt-14 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[24ch] text-3xl leading-tight md:text-4xl" style={SERIF_MED}>
              {guia.cta.antes}
              <span className="lex-ouro">{guia.cta.ouro}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[#A6A29A]">{guia.cta.texto}</p>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#F5D76E] to-[#C9A24B] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#171204] shadow-[0_16px_44px_-14px_rgba(212,175,55,.55)] transition hover:-translate-y-[2px]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com o escritório
            </a>
          </Reveal>
        </section>

        {/* Continue lendo: links internos entre guias (a malha que o Google percorre) */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A6A29A]">Continue lendo</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {outras.map((o) => (
              <a
                key={o.slug}
                href={`/advogados/demo-autoridade/${o.slug}`}
                className="group rounded-[3px] border border-white/10 bg-[#121212] p-5 transition-colors hover:border-[#D4AF37]/40"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A24B]">{o.area}</p>
                <p className="mt-2 text-[15px] leading-snug text-[#F2F0EA] transition-colors group-hover:text-[#F5D76E]" style={SERIF}>
                  {o.h1.antes}
                  {o.h1.ouro}
                  {o.h1.depois ?? ""}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t lex-fio bg-[#0A0A0B] py-12 text-center">
        <p className="text-xl tracking-[0.08em] text-[#F2F0EA]" style={SERIF}>
          MEIRELLES<span className="text-[#D4AF37]"> ADVOCACIA</span>
        </p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#A6A29A]/70">
          OAB/SC 00.000 · Publicidade em conformidade com o Provimento 205/2021 do CFOAB
        </p>
        <p className="mt-5 text-[11px] text-[#A6A29A]/70">
          Página demonstrativa com conteúdo fictício e informativo, sem valor de parecer jurídico ·{" "}
          <a href="/advogados" className="text-[#F5D76E] underline underline-offset-4 hover:text-white">
            feita pela JV Web Studio. Quero um site assim
          </a>
        </p>
      </footer>
    </div>
  );
}
