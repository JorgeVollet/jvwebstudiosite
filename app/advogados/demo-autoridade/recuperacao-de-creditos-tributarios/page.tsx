import type { Metadata } from "next";
import { cinzel } from "../fonts";
import Reveal from "@/components/advogados/demo/DemoReveal";
import { ArrowLeft, MessageCircle, Check } from "lucide-react";

/* ============================================================================
   PÁGINA-GUIA DEMO · o diferencial do plano Autoridade em ação.
   É este tipo de página, uma por área de atuação, que faz o Google apresentar
   o advogado a quem pesquisa o problema. Estrutura de SEO real: título com a
   pergunta, hierarquia de headings, FAQ com Schema (JSON-LD) e CTA.
============================================================================ */

export const metadata: Metadata = {
  title: "Recuperação de créditos tributários: sua empresa pode ter dinheiro a receber",
  description:
    "Guia direto sobre recuperação de tributos pagos indevidamente: quem tem direito, como funciona a análise e o prazo de 5 anos. Site demonstrativo da JV Web Studio.",
  robots: { index: false, follow: false },
};

const SERIF = { fontFamily: "var(--font-cinzel), Georgia, serif" };
const SERIF_MED = { ...SERIF, fontWeight: 500 };

const WA = `https://wa.me/5547999234449?text=${encodeURIComponent(
  "Olá! Vi a página-guia do site modelo Autoridade (Meirelles) e quero um site assim para minha advocacia."
)}`;

const QUEM_PODE = [
  "Empresas do Lucro Real ou Presumido que recolhem PIS, COFINS, ICMS, IPI ou contribuições sobre a folha",
  "Indústrias e distribuidoras com operações interestaduais ou substituição tributária",
  "Prestadoras de serviço com ISS e retenções na fonte em vários municípios",
  "Empresas que passaram por mudança de regime, fusão ou reorganização nos últimos 5 anos",
];

const PASSOS = [
  { n: "I", t: "Levantamento", d: "Análise das apurações e notas dos últimos 5 anos, feita sobre os arquivos que a sua contabilidade já possui. Sem parar a operação." },
  { n: "II", t: "Parecer", d: "Você recebe por escrito o que foi pago indevidamente, com a tese aplicável a cada valor e o grau de solidez de cada uma." },
  { n: "III", t: "Recuperação", d: "Via administrativa ou judicial, conforme o caso. Compensação com tributos futuros ou restituição em espécie." },
  { n: "IV", t: "Rotina", d: "Correção da parametrização para a empresa parar de pagar errado daqui para a frente. O ganho vira recorrente." },
];

const FAQ_GUIA = [
  {
    q: "Minha contabilidade já não faria isso?",
    a: "São trabalhos diferentes e complementares. A contabilidade apura conforme a regra vigente; a revisão jurídica questiona a própria regra, aplicando teses firmadas pelos tribunais superiores, como a exclusão do ICMS da base do PIS e da COFINS. É comum encontrar valores relevantes em empresas com contabilidade impecável.",
  },
  {
    q: "Existe risco de chamar a atenção do fisco?",
    a: "A revisão usa exclusivamente teses consolidadas e caminhos previstos em lei, como o pedido administrativo de restituição e a ação judicial. Não se trata de brecha, e sim de cobrar de volta o que foi pago além do devido.",
  },
  {
    q: "Quanto tempo leva para ver o dinheiro?",
    a: "O levantamento inicial leva algumas semanas. A recuperação em si varia com a via escolhida: compensações administrativas costumam ser mais rápidas, discussões judiciais levam mais tempo. No parecer você recebe uma estimativa realista por tese, não uma promessa.",
  },
  {
    q: "E se a análise não encontrar nada?",
    a: "Você recebe o parecer do mesmo jeito, com a confirmação de que a empresa está pagando corretamente. A proposta de honorários é apresentada antes, por escrito, e contempla esse cenário com transparência.",
  },
];

export default function GuiaRecuperacaoTributaria() {
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
            mainEntity: FAQ_GUIA.map((f) => ({
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
        {/* Volta + trilha */}
        <a
          href="/advogados/demo-autoridade"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#A6A29A] transition hover:text-[#F5D76E]"
        >
          <ArrowLeft className="h-4 w-4" /> Meirelles Advocacia
        </a>

        {/* Cabeça da guia */}
        <header className="mt-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#C9A24B]">Guia · Tributário estratégico</p>
          <h1 className="mt-6 text-[2.2rem] leading-[1.12] md:text-5xl" style={SERIF_MED}>
            Sua empresa pode ter <span className="lex-ouro">dinheiro a receber</span> do fisco.
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-[#A6A29A]">
            Boa parte das empresas brasileiras paga mais tributo do que a lei exige, todos os meses, sem saber. Este guia explica de onde vêm esses valores, quem pode revisar e como o processo funciona na prática.
          </p>
        </header>

        {/* O que é */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>O que é recuperação de créditos tributários</h2>
            <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-[#CFCBC2]">
              <p>
                O sistema tributário brasileiro muda o tempo todo, e os tribunais superiores frequentemente decidem que uma cobrança era indevida. O caso mais conhecido é a exclusão do ICMS da base de cálculo do PIS e da COFINS, decidida pelo STF. Quando isso acontece, o que a empresa pagou a mais vira crédito.
              </p>
              <p>
                Recuperar esses créditos é um direito, não uma manobra: a própria legislação prevê a restituição e a compensação de tributos pagos indevidamente nos <strong className="text-[#F2F0EA]">últimos 5 anos</strong>.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Quem pode */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>Quem costuma ter valores a recuperar</h2>
            <ul className="mt-6 space-y-4">
              {QUEM_PODE.map((item) => (
                <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-[#CFCBC2]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#C9A24B]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Como funciona */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>Como o trabalho funciona</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {PASSOS.map((p, i) => (
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

        {/* Prazo */}
        <section className="mt-16">
          <Reveal>
            <div className="rounded-[3px] border lex-fio bg-gradient-to-br from-[#161410] to-[#111110] p-8">
              <h2 className="text-2xl md:text-3xl" style={SERIF}>O prazo corre contra a empresa</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#CFCBC2]">
                A lei permite revisar apenas os últimos 5 anos. Cada mês que passa, o mês mais antigo do período prescreve e o valor correspondente deixa de ser recuperável, em definitivo. Quem revisa primeiro, recupera mais.
              </p>
            </div>
          </Reveal>
        </section>

        {/* FAQ da guia */}
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl" style={SERIF}>Perguntas frequentes</h2>
          </Reveal>
          <div className="mt-8 space-y-10">
            {FAQ_GUIA.map((f, i) => (
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
              Vale a pena olhar os <span className="lex-ouro">seus últimos 5 anos?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[#A6A29A]">
              Uma conversa franca resolve essa dúvida. Análise inicial sobre documentos que a sua contabilidade já tem.
            </p>
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
