import type { Metadata } from "next";
import { cinzel } from "./fonts";
import Reveal from "@/components/advogados/demo/DemoReveal";
import DemoCountUp from "@/components/advogados/demo/DemoCountUp";
import DemoParallax, { DemoHeroFade } from "@/components/advogados/demo/DemoParallax";
import { NoirHeader, NoirFaq, NoirSpotlight } from "./interativos";
import { Scale, Landmark, FileSignature, LifeBuoy, Shield, Gavel, MessageCircle, ArrowRight, Check } from "lucide-react";

/* ============================================================================
   SITE MODELO · PLANO AUTORIDADE · TEMA LEX
   Advogado fictício de direito empresarial. Noir editorial: near-black,
   fios dourados finos, Cinzel (capitular romana) + Inter.
   Demonstra o diferencial do Autoridade: páginas-guia por área de atuação
   (uma guia REAL navegável em ./recuperacao-de-creditos-tributarios).
   Todos os CTAs apontam para o WhatsApp da JV identificando a origem.
============================================================================ */

export const metadata: Metadata = {
  title: "Meirelles Advocacia Empresarial — Societário, Tributário e Patrimonial",
  description: "Site demonstrativo do plano Autoridade (tema Lex) da JV Web Studio.",
  robots: { index: false, follow: false },
};

const SERIF = { fontFamily: "var(--font-cinzel), Georgia, serif" };
const SERIF_MED = { ...SERIF, fontWeight: 500 };

const WA = `https://wa.me/5547999234449?text=${encodeURIComponent(
  "Olá! Naveguei no site modelo do plano Autoridade (Meirelles) e quero um site assim para minha advocacia."
)}`;

/* ---------------------------------------------------------------------------
   FOTOS · slots para o pipeline Magnific (mesmo processo do demo Aurum).
   O layout fica completo sem elas; quando existirem, basta preencher os
   caminhos abaixo e as molduras trocam o material tipográfico pela imagem.
   Sugestões de geração no fim do arquivo.
--------------------------------------------------------------------------- */
const FOTO_HERO = "";     // ex.: "/demo-autoridade/colunas-noir.webp"
const FOTO_RETRATO = "";  // ex.: "/demo-autoridade/meirelles-retrato.webp"

const NUMEROS = [
  { v: 18, sufixo: "", rotulo: "anos de advocacia empresarial" },
  { v: 6, sufixo: "", rotulo: "áreas integradas em um só escritório" },
  { v: 240, sufixo: "+", rotulo: "empresas assessoradas" },
];

const SITUACOES = [
  {
    titulo: "O sócio virou adversário",
    desc: "Quebra de affectio societatis, apuração de haveres, exclusão de sócio. O conflito interno é resolvido antes que ele consuma a operação.",
    grande: true,
  },
  {
    titulo: "A autuação fiscal chegou",
    desc: "Defesa administrativa e judicial contra autos de infração, com revisão do passivo e da tese que o fisco aplicou.",
  },
  {
    titulo: "O contrato não protege você",
    desc: "Contratos que a sua empresa assina todos os dias, renegociados e blindados cláusula por cláusula.",
  },
  {
    titulo: "A dívida sufoca a operação",
    desc: "Reestruturação de passivo, negociação coletiva com credores e, quando é o caminho, recuperação judicial bem conduzida.",
  },
  {
    titulo: "O patrimônio da família está exposto",
    desc: "Holding patrimonial e planejamento sucessório: separar o risco da empresa do futuro de quem você ama.",
    grande: true,
  },
  {
    titulo: "Clientes devem e não pagam",
    desc: "Régua de cobrança jurídica, execução de títulos e recuperação de crédito sem destruir a relação comercial.",
  },
];

const AREAS = [
  {
    icone: Scale,
    nome: "Societário e M&A",
    desc: "Acordos de sócios, reorganizações, compra e venda de participações. O desenho societário decide quem manda e quem responde.",
  },
  {
    icone: Landmark,
    nome: "Tributário estratégico",
    desc: "Planejamento lícito, defesa em autuações e recuperação de tributos pagos indevidamente nos últimos 5 anos.",
  },
  {
    icone: FileSignature,
    nome: "Contratos empresariais",
    desc: "Fornecimento, distribuição, prestação de serviços, NDA. O contrato certo evita o litígio que custaria dez vezes mais.",
  },
  {
    icone: LifeBuoy,
    nome: "Reestruturação e recuperação judicial",
    desc: "Crise não se administra com improviso. Plano de reestruturação, mediação com credores e recuperação quando necessária.",
  },
  {
    icone: Shield,
    nome: "Holding e planejamento patrimonial",
    desc: "Estrutura societária que organiza o patrimônio, planeja a sucessão e protege a família do risco da atividade.",
  },
  {
    icone: Gavel,
    nome: "Contencioso empresarial",
    desc: "Quando o litígio é inevitável, ele é conduzido com estratégia processual e foco no resultado econômico da disputa.",
  },
];

/** A guia real fica em ./recuperacao-de-creditos-tributarios — as demais são
 *  listadas como catálogo (no site de um cliente real, cada área ganha a sua). */
const GUIAS = [
  {
    titulo: "Recuperação de créditos tributários",
    resumo: "O que é, quais empresas podem revisar os últimos 5 anos e como o processo funciona na prática.",
    href: "/advogados/demo-autoridade/recuperacao-de-creditos-tributarios",
    real: true,
  },
  { titulo: "Holding familiar: quando faz sentido", resumo: "Custos, estrutura e o passo a passo de uma constituição bem feita." },
  { titulo: "Recuperação judicial sem mitos", resumo: "O que a lei permite, prazos reais e o que muda no dia a dia da empresa." },
  { titulo: "Acordo de sócios: as 9 cláusulas que evitam guerra", resumo: "O documento que resolve a disputa antes de ela existir." },
];

const CREDENCIAIS = [
  { ano: "2008", fato: "Graduação em Direito e início na advocacia empresarial" },
  { ano: "2013", fato: "Mestrado em Direito Tributário" },
  { ano: "2016", fato: "Funda o escritório Meirelles Advocacia Empresarial" },
  { ano: "2021", fato: "Membro de comissões de Direito Empresarial e Tributário da OAB" },
];

const METODO = [
  { n: "I", t: "Diagnóstico", d: "Imersão no contrato social, no passivo e nos contratos vigentes. Você recebe um mapa honesto dos riscos, por escrito." },
  { n: "II", t: "Estratégia", d: "Cada frente ganha plano, responsável e prazo. Honorários fechados com transparência antes de qualquer execução." },
  { n: "III", t: "Execução", d: "Defesas, contratos, teses e negociações conduzidas por quem faz só isso. Nada é terceirizado sem você saber." },
  { n: "IV", t: "Reporte", d: "Relatório mensal em linguagem de negócio: o que andou, o que travou e a decisão que está na sua mesa." },
];

const DEPOIMENTOS = [
  {
    frase: "Sai de reunião com resposta, não com juridiquês. É o único advogado que entende o balanço antes de citar a lei.",
    quem: "Marcos Duarte",
    cargo: "CEO, Duarte Alimentos",
  },
  {
    frase: "A reestruturação salvou a operação e o nome da família. Conduta firme com credores e transparência absoluta conosco.",
    quem: "Carla Winter",
    cargo: "Sócia, Winter Transportes",
  },
  {
    frase: "A holding organizou a sucessão que adiávamos havia dez anos. Processo claro, custo fechado, zero surpresa.",
    quem: "Eduardo Sassaki",
    cargo: "Fundador, Sassaki Componentes",
  },
];

const FAQ = [
  {
    q: "Como funcionam os honorários?",
    a: "Dois formatos: assessoria mensal fixa, para quem quer o jurídico acompanhando a operação de perto, ou escopo fechado por demanda. Nos dois casos o valor é apresentado por escrito antes de qualquer contratação, sem taxa surpresa.",
  },
  {
    q: "Minha empresa é pequena demais para esse tipo de assessoria?",
    a: "Se existe CNPJ, sócio, contrato e imposto, existe risco jurídico na mesma proporção. Boa parte dos clientes chegou como empresa familiar de médio porte. A estrutura da assessoria se ajusta ao tamanho da operação.",
  },
  {
    q: "Vocês atendem empresas fora de Joinville?",
    a: "Sim. A base é Joinville/SC e a atuação é nacional: processos eletrônicos, audiências por vídeo e reuniões remotas fazem a distância ser irrelevante na prática.",
  },
  {
    q: "A primeira conversa custa algo?",
    a: "A primeira conversa serve para entender o cenário e dizer com franqueza se podemos ajudar e em qual frente. Proposta e honorários vêm depois dela, por escrito.",
  },
  {
    q: "Tudo o que eu contar fica protegido?",
    a: "Integralmente. Sigilo profissional é dever legal do advogado e cláusula expressa da nossa proposta, inclusive sobre dados contábeis e societários compartilhados na análise.",
  },
  {
    q: "Já tenho contador e um advogado de confiança. Por que um escritório empresarial?",
    a: "Contador cuida da conformidade, o generalista cuida do cotidiano. Assessoria empresarial integra as duas pontas com visão de risco: societário, tributário, contratos e patrimônio conversando entre si, antes do problema.",
  },
];

export default function DemoAutoridade() {
  return (
    <div className={`lex-root ${cinzel.variable} bg-[#0B0B0C] text-[#F2F0EA]`}>
      <style>{`
        .lex-root{--gold:#D4AF37;--gold-soft:#F5D76E;--gold-deep:#C9A24B;}
        .lex-root ::selection{background:rgba(212,175,55,.28);}
        /* Grão de filme sobre tudo: overlay fixo, sem custo de repaint no scroll */
        .lex-grain{position:fixed;inset:0;z-index:60;pointer-events:none;opacity:.05;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
        /* Texto em ouro metálico */
        .lex-ouro{background:linear-gradient(112deg,#F5D76E 8%,#D4AF37 38%,#8f6f1f 52%,#F5D76E 78%);-webkit-background-clip:text;background-clip:text;color:transparent;}
        /* Filete dourado padrão */
        .lex-fio{border-color:rgba(212,175,55,.22);}
        /* Moldura spotlight: o brilho segue o cursor (variáveis vindas do NoirSpotlight) */
        .lex-root .noir-spot{position:relative;}
        .lex-root .noir-spot::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(212,175,55,.14),transparent 65%);}
        .lex-root .noir-spot:hover::before{opacity:1;}
        @media (prefers-reduced-motion: no-preference){
          .lex-root .reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);}
          .lex-root .reveal.in{opacity:1;transform:none;}
        }
      `}</style>

      <div className="lex-grain" aria-hidden />

      {/* Banner site modelo */}
      <div className="fixed inset-x-0 top-0 z-[70] flex h-[33px] items-center justify-center border-b border-[#D4AF37]/30 bg-[#141210] px-4">
        <a href="/advogados" className="truncate font-mono text-[9px] uppercase tracking-[0.14em] text-[#F5D76E] hover:text-white sm:text-[10px] sm:tracking-[0.18em]">
          ✦ Site modelo<span className="hidden sm:inline"> · Plano Autoridade · Tema Lex</span>, por JV Web Studio · <u>Quero um site assim</u>
        </a>
      </div>

      <NoirHeader wa={WA} serif={SERIF} />

      <main>
        {/* ============ HERO · assimétrico: manifesto à esquerda, estela à direita ============ */}
        <section id="inicio" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-[97px]">
          {/* Fundo: ou a foto do Magnific, ou o material tipográfico noir */}
          {FOTO_HERO ? (
            <DemoParallax speed={0.08} className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FOTO_HERO} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-[1.06] object-cover opacity-55" />
            </DemoParallax>
          ) : null}
          <div className="absolute inset-0 bg-[radial-gradient(58%_70%_at_78%_30%,rgba(212,175,55,.10),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(45%_60%_at_12%_78%,rgba(212,175,55,.05),transparent_70%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/70 to-transparent" />

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 md:grid-cols-[7fr_5fr] md:items-center md:gap-8">
            <DemoHeroFade>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.32em] text-[#A6A29A]">
                  Advocacia empresarial, tributária e societária
                </p>
                <h1 className="mt-7 text-[2.6rem] leading-[1.06] tracking-tight md:text-6xl" style={SERIF_MED}>
                  Empresas fortes
                  <br />
                  não improvisam
                  <br />
                  <span className="lex-ouro">no jurídico.</span>
                </h1>
                <p className="mt-7 max-w-[46ch] text-[15.5px] leading-relaxed text-[#A6A29A]">
                  Prevenção e confronto na medida certa, para quem tem patrimônio a proteger e decisões grandes a tomar.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full bg-gradient-to-b from-[#F5D76E] to-[#C9A24B] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#171204] shadow-[0_14px_40px_-12px_rgba(212,175,55,.5)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_48px_-12px_rgba(212,175,55,.65)]"
                  >
                    Falar com o escritório
                  </a>
                  <a href="#areas" className="group inline-flex items-center gap-2 px-2 py-4 text-[13px] uppercase tracking-[0.14em] text-[#A6A29A] transition hover:text-[#F5D76E]">
                    Conhecer as áreas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </DemoHeroFade>

            {/* Estela: coluna de mármore tipográfica com o monograma inscricional */}
            <Reveal delay={140} className="hidden md:block">
              <NoirSpotlight className="relative ml-auto flex aspect-[3/4.2] w-full max-w-[340px] flex-col items-center justify-between overflow-hidden rounded-[3px] border lex-fio bg-gradient-to-b from-[#161513] via-[#111110] to-[#0C0C0B] px-8 py-10">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#A6A29A]">MMVIII</span>
                <span aria-hidden className="lex-ouro text-[9rem] leading-none" style={SERIF}>M</span>
                <div className="w-full border-t lex-fio pt-6 text-center">
                  <p className="text-[13px] uppercase tracking-[0.26em] text-[#F2F0EA]" style={SERIF}>Meirelles</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#A6A29A]">Advocacia empresarial</p>
                </div>
              </NoirSpotlight>
            </Reveal>
          </div>
          <div id="hero-fim" aria-hidden className="absolute inset-x-0 bottom-0 h-px" />
        </section>

        {/* ============ NÚMEROS · fio fino, sem cartões ============ */}
        <section className="border-y lex-fio">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#D4AF37]/15 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {NUMEROS.map((n, i) => (
              <Reveal key={n.rotulo} delay={i * 90} className="flex flex-col items-center gap-1 py-9 text-center">
                <span className="lex-ouro text-4xl md:text-5xl" style={SERIF}>
                  <DemoCountUp value={n.v} suffix={n.sufixo} />
                </span>
                <span className="max-w-[24ch] text-[12.5px] leading-snug text-[#A6A29A]">{n.rotulo}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ SITUAÇÕES · bento assimétrico ============ */}
        <section id="situacoes" className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <h2 className="max-w-[22ch] text-3xl leading-tight md:text-[2.6rem]" style={SERIF_MED}>
              Se uma destas frases é sua, <span className="lex-ouro">a hora é agora.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {SITUACOES.map((s, i) => (
              <Reveal
                key={s.titulo}
                delay={(i % 3) * 90}
                className={s.grande ? "md:col-span-2" : ""}
              >
                <NoirSpotlight className="group h-full rounded-[3px] border border-white/10 bg-[#121212] p-8 transition-colors duration-300 hover:border-[#D4AF37]/40">
                  <span aria-hidden className="lex-ouro text-2xl leading-none" style={SERIF}>&ldquo;</span>
                  <h3 className="mt-3 text-xl leading-snug text-[#F2F0EA] md:text-[1.35rem]" style={SERIF}>
                    {s.titulo}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#A6A29A]">{s.desc}</p>
                </NoirSpotlight>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ ÁREAS · capítulo fixo à esquerda, lista à direita ============ */}
        <section id="areas" className="border-t lex-fio bg-[#0D0D0E]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[5fr_7fr]">
            <div className="md:sticky md:top-36 md:self-start">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.32em] text-[#A6A29A]">Áreas de atuação</p>
                <h2 className="mt-6 max-w-[16ch] text-3xl leading-tight md:text-[2.6rem]" style={SERIF_MED}>
                  Seis frentes. <span className="lex-ouro">Uma estratégia.</span>
                </h2>
                <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-[#A6A29A]">
                  Problema empresarial não respeita a divisória entre áreas do direito. Aqui, societário, tributário e contratos trabalham na mesma mesa.
                </p>
              </Reveal>
            </div>
            <div className="divide-y divide-white/10">
              {AREAS.map((a, i) => {
                const Icone = a.icone;
                return (
                  <Reveal key={a.nome} delay={i * 60}>
                    <div className="group flex gap-6 py-8 transition-colors">
                      <Icone className="mt-1 h-6 w-6 shrink-0 text-[#C9A24B] transition-colors group-hover:text-[#F5D76E]" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-xl text-[#F2F0EA] transition-colors group-hover:text-[#F5D76E]" style={SERIF}>
                          {a.nome}
                        </h3>
                        <p className="mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-[#A6A29A]">{a.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ PÁGINAS-GUIA · o diferencial do Autoridade, com guia real ============ */}
        <section id="guias" className="border-t lex-fio">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.32em] text-[#A6A29A]">Conteúdo que o Google encontra</p>
              <h2 className="mt-6 max-w-[26ch] text-3xl leading-tight md:text-[2.6rem]" style={SERIF_MED}>
                Cada área ganha uma <span className="lex-ouro">página-guia inteira</span>, escrita para quem procura.
              </h2>
              <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[#A6A29A]">
                É assim que o site trabalha sozinho: quando um empresário pesquisa o problema, encontra o guia, e o guia apresenta o escritório. A primeira está aberta para navegar.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {GUIAS.map((g, i) =>
                g.real ? (
                  <Reveal key={g.titulo} className="md:col-span-2">
                    <a href={g.href} className="block">
                      <NoirSpotlight className="group flex flex-col justify-between gap-6 rounded-[3px] border border-[#D4AF37]/35 bg-gradient-to-br from-[#161410] to-[#111110] p-9 transition hover:border-[#F5D76E]/60 md:flex-row md:items-center">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5D76E]">Guia aberta · navegue agora</p>
                          <h3 className="mt-3 text-2xl leading-snug text-[#F2F0EA] md:text-3xl" style={SERIF}>{g.titulo}</h3>
                          <p className="mt-3 max-w-[58ch] text-[14.5px] leading-relaxed text-[#A6A29A]">{g.resumo}</p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#D4AF37]/50 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#F5D76E] transition group-hover:bg-[#D4AF37]/10 md:self-center">
                          Ler a guia
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </NoirSpotlight>
                    </a>
                  </Reveal>
                ) : (
                  <Reveal key={g.titulo} delay={i * 70}>
                    <div className="flex h-full flex-col rounded-[3px] border border-white/10 bg-[#121212] p-8">
                      <h3 className="text-xl leading-snug text-[#F2F0EA]" style={SERIF}>{g.titulo}</h3>
                      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#A6A29A]">{g.resumo}</p>
                      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A6A29A]/70">Publicada no site do cliente real</p>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* ============ SOBRE · retrato + credenciais ============ */}
        <section id="sobre" className="border-t lex-fio bg-[#0D0D0E]">
          <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 py-28 md:grid-cols-[4fr_7fr]">
            <Reveal>
              {FOTO_RETRATO ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={FOTO_RETRATO} alt="Dr. Rafael Meirelles" className="aspect-[3/4] w-full rounded-[3px] border lex-fio object-cover" />
              ) : (
                <NoirSpotlight className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-6 rounded-[3px] border lex-fio bg-gradient-to-b from-[#161513] to-[#0C0C0B]">
                  <span aria-hidden className="lex-ouro text-8xl" style={SERIF}>RM</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#A6A29A]">OAB/SC 00.000</span>
                </NoirSpotlight>
              )}
            </Reveal>
            <div>
              <Reveal>
                <h2 className="text-3xl leading-tight md:text-[2.6rem]" style={SERIF_MED}>
                  Dr. Rafael Meirelles
                </h2>
                <p className="mt-2 text-[13px] uppercase tracking-[0.22em] text-[#C9A24B]">Sócio fundador · Mestre em Direito Tributário</p>
                <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-[#A6A29A]">
                  <p>
                    Há 18 anos na advocacia empresarial, aprendi que o cliente não quer aula de direito: quer saber o tamanho do risco, o custo de resolver e o prazo. É esse o idioma do escritório.
                  </p>
                  <p>
                    A prática reúne societário, tributário e contratos na mesma mesa porque é assim que os problemas chegam na vida real: misturados, urgentes e com um balanço no meio.
                  </p>
                </div>
              </Reveal>
              <div className="mt-10 border-t lex-fio">
                {CREDENCIAIS.map((c, i) => (
                  <Reveal key={c.ano} delay={i * 60}>
                    <div className="flex items-baseline gap-6 border-b border-white/[0.06] py-4">
                      <span className="lex-ouro w-14 shrink-0 text-lg" style={SERIF}>{c.ano}</span>
                      <span className="text-[14.5px] text-[#CFCBC2]">{c.fato}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ MÉTODO · numerais romanos ============ */}
        <section id="metodo" className="border-t lex-fio">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <Reveal>
              <h2 className="text-3xl leading-tight md:text-[2.6rem]" style={SERIF_MED}>
                Como a assessoria <span className="lex-ouro">funciona</span>
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {METODO.map((m, i) => (
                <Reveal key={m.n} delay={i * 90}>
                  <span aria-hidden className="block text-5xl text-[#2E2A20]" style={SERIF}>{m.n}</span>
                  <h3 className="mt-4 text-xl text-[#F2F0EA]" style={SERIF}>{m.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#A6A29A]">{m.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DEPOIMENTOS · editorial, sem cartões ============ */}
        <section className="border-t lex-fio bg-[#0D0D0E]">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <div className="grid gap-14 md:grid-cols-3">
              {DEPOIMENTOS.map((d, i) => (
                <Reveal key={d.quem} delay={i * 100}>
                  <p className="text-[17px] leading-relaxed text-[#E4E0D6]">
                    <span aria-hidden className="lex-ouro" style={SERIF}>&ldquo;</span>
                    {d.frase}
                    <span aria-hidden className="lex-ouro" style={SERIF}>&rdquo;</span>
                  </p>
                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#F2F0EA]">{d.quem}</p>
                  <p className="mt-1 text-[12px] text-[#A6A29A]">{d.cargo}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-14 border-t border-white/[0.06] pt-6 text-[11px] uppercase tracking-[0.18em] text-[#A6A29A]/60">
                Depoimentos ilustrativos deste site modelo. No site real entram avaliações verdadeiras dos seus clientes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="border-t lex-fio">
          <div className="mx-auto max-w-4xl px-6 py-28">
            <Reveal>
              <h2 className="text-3xl leading-tight md:text-[2.6rem]" style={SERIF_MED}>
                Perguntas de quem <span className="lex-ouro">está decidindo</span>
              </h2>
            </Reveal>
            <div className="mt-12">
              <NoirFaq itens={FAQ} serif={SERIF} />
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="relative overflow-hidden border-t lex-fio">
          <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_115%,rgba(212,175,55,.16),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-[20ch] text-4xl leading-tight md:text-5xl" style={SERIF_MED}>
                O risco não espera. <span className="lex-ouro">Você também não deveria.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#A6A29A]">
                Uma conversa franca sobre o cenário da sua empresa. Sem compromisso e com sigilo desde a primeira mensagem.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#F5D76E] to-[#C9A24B] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#171204] shadow-[0_18px_50px_-14px_rgba(212,175,55,.55)] transition hover:-translate-y-[2px]"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com o escritório
              </a>
              <div className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11.5px] uppercase tracking-[0.14em] text-[#A6A29A]">
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#C9A24B]" /> Resposta no mesmo dia útil</span>
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#C9A24B]" /> Sigilo profissional</span>
              </div>
            </Reveal>
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
          Site demonstrativo com conteúdo fictício ·{" "}
          <a href="/advogados" className="text-[#F5D76E] underline underline-offset-4 hover:text-white">
            feito pela JV Web Studio. Quero um site assim
          </a>
        </p>
      </footer>

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

/* ============================================================================
   FOTOS · prompts sugeridos para o Magnific (mesmo pipeline do demo Aurum):
   1. FOTO_HERO — "colunas de tribunal em mármore escuro, luz dourada rasante
      vindo da direita, fundo quase preto, atmosfera noir, grão de filme,
      sem pessoas, proporção 16:9" → salvar em /public/demo-autoridade/colunas-noir.webp
   2. FOTO_RETRATO — "advogado brasileiro de ~45 anos, terno grafite, fundo
      escuro desfocado de biblioteca jurídica, luz de janela lateral dourada,
      expressão firme e acessível, proporção 3:4"
      → salvar em /public/demo-autoridade/meirelles-retrato.webp
   Preencher as constantes FOTO_HERO e FOTO_RETRATO no topo e pronto.
============================================================================ */
