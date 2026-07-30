import type { Metadata } from "next";
import { geogira } from "./fonts";
import Reveal from "@/components/advogados/demo/DemoReveal";
import DemoScrolly from "@/components/advogados/demo/DemoScrolly";
import DemoCountUp from "@/components/advogados/demo/DemoCountUp";
import DemoDepoimentos from "@/components/advogados/demo/DemoDepoimentos";
import DemoHeader from "@/components/advogados/demo/DemoHeader";
import DemoParallax, { DemoHeroFade } from "@/components/advogados/demo/DemoParallax";
import { Scale, Check, MessageCircle, MapPin, Clock, Landmark, Star } from "lucide-react";

/* ============================================================================
   SITE MODELO · PLANO ESSENCIAL · TEMA AURUM
   Advogada fictícia. Editorial claro + dourado, serif de display, scrollytelling.
   Todos os CTAs apontam para o WhatsApp da JV identificando a origem.
============================================================================ */

export const metadata: Metadata = {
  title: "Dra. Helena Vasconcellos — Advocacia Trabalhista e Previdenciária",
  description: "Site demonstrativo do plano Essencial (tema Aurum) da JV Web Studio.",
  robots: { index: false, follow: false },
};

/* Display do tema: Geogira (acervo próprio). O peso vem das classes font-* do Tailwind. */
const SERIF = { fontFamily: "var(--font-geogira), Georgia, serif" };
/* Eyebrows/labels em Geogira Light caixa alta (substitui o Space Mono no demo) */
const SERIF_LIGHT = { ...SERIF, fontWeight: 300 };
/** Sombra de texto do hero: garante leitura sobre a foto sem precisar de degradê pesado */
const SOMBRA = { textShadow: "0 2px 26px rgba(4,12,8,0.92), 0 1px 4px rgba(4,12,8,0.55)" };

const WA = `https://wa.me/5547999234449?text=${encodeURIComponent(
  "Olá! Naveguei no site modelo da Dra. Helena e quero um site assim para minha advocacia."
)}`;

/* Imagens próprias (geradas no Magnific) — vivem em /public/demo */
const FOTO_TEMIS = "/demo/temis-hero.webp";
const FOTO_TRIBUNAL = "/demo/tribunal.webp";
const TEXTURA_MARMORE = "/demo/marmore-verde.webp";
const FOTO_RETRATO = "/demo/helena-retrato.webp";

const SITUACOES = [
  {
    titulo: "Fui demitido e não recebi meus direitos",
    foto: "/demo/situacao-01.webp",
    desc: "Verbas rescisórias, aviso prévio, FGTS e multa de 40%. Analisamos ponto a ponto o que a empresa deixou de pagar e o caminho para cobrar.",
    dicas: [
      "Não assine a rescisão sem ler; se discordar de algo, escreva a ressalva no próprio documento",
      "Guarde holerites, contrato e as conversas com o RH (prints valem)",
      "Confira o extrato do FGTS no aplicativo da Caixa",
    ],
    prazo: "você tem até 2 anos após a saída para cobrar, e o processo alcança os últimos 5 anos trabalhados.",
  },
  {
    titulo: "Trabalhei anos sem carteira assinada",
    foto: "/demo/situacao-02.webp",
    desc: "O vínculo pode ser reconhecido na Justiça, com todos os direitos do período: férias, 13º, FGTS e recolhimentos.",
    dicas: [
      "Reúna provas da rotina: mensagens do chefe, escalas, comprovantes de pagamento (Pix conta)",
      "Anote o período trabalhado, a função e o valor combinado",
      "Pense em colegas que possam confirmar como testemunhas",
    ],
    prazo: "os mesmos 2 anos após o fim do trabalho valem aqui.",
  },
  {
    titulo: "Sofro assédio no ambiente de trabalho",
    foto: "/demo/situacao-03.webp",
    desc: "Orientação sigilosa sobre como registrar as situações, sair protegido e responsabilizar quem devia ter cuidado de você.",
    dicas: [
      "Registre cada episódio: data, local, o que foi dito e quem presenciou",
      "Salve prints e e-mails no seu celular pessoal, nunca só no da empresa",
      "Se houver abalo à saúde, procure atendimento médico e guarde o atestado",
    ],
  },
  {
    titulo: "Meu benefício do INSS foi negado",
    foto: "/demo/situacao-04.webp",
    desc: "Auxílios, aposentadorias e BPC negados viram recurso administrativo ou ação judicial, com a documentação certa.",
    dicas: [
      "Guarde a carta de indeferimento com o motivo da negativa",
      "Reúna laudos, exames e receitas atualizados, com CID legível",
      "Anote o número do protocolo no Meu INSS",
    ],
    prazo: "o recurso administrativo tem janela de 30 dias, e a via judicial continua aberta depois.",
  },
  {
    titulo: "Quero revisar minha aposentadoria",
    foto: "/demo/situacao-05.webp",
    desc: "Conferimos vínculos, contribuições e o cálculo aplicado para verificar se você recebe o valor correto todo mês.",
    dicas: [
      "Baixe o extrato CNIS no Meu INSS e confira se todos os vínculos aparecem",
      "Separe as carteiras de trabalho antigas, mesmo as de capa amarela",
      "Liste períodos especiais: insalubridade, ruído, atividade rural",
    ],
    prazo: "a revisão pode ser pedida em até 10 anos contados do primeiro pagamento.",
  },
  {
    titulo: "Sofri um acidente de trabalho",
    foto: "/demo/situacao-06.webp",
    desc: "Do afastamento à reparação: auxílio-acidente, estabilidade no emprego e indenizações quando há responsabilidade da empresa.",
    dicas: [
      "Exija a emissão da CAT; se a empresa se recusar, o sindicato ou o médico podem emitir",
      "Guarde todos os atestados, receitas e comprovantes de gastos",
      "Se possível, fotografe o local e o equipamento envolvido",
    ],
    prazo: "quem volta de afastamento acidentário tem 12 meses de estabilidade no emprego.",
  },
];

const PROCESSO = [
  { v: "Conversar", d: "Você me conta sua situação pelo WhatsApp, sem compromisso e sem juridiquês. Eu escuto primeiro." },
  { v: "Analisar", d: "Estudo seus documentos e devolvo um diagnóstico honesto: se existe caminho, qual é, e o que ele exige." },
  { v: "Definir", d: "Alinhamos a estratégia e os honorários com total transparência antes de qualquer contratação." },
  { v: "Acompanhar", d: "Você recebe atualização a cada movimentação do processo, direto no seu WhatsApp. Nunca no escuro." },
];

const FAQ = [
  { q: "A primeira conversa é paga?", a: "A conversa inicial serve para eu entender sua situação e dizer com sinceridade se existe caminho jurídico. Honorários são apresentados com clareza antes de qualquer contratação." },
  { q: "Você atende fora de Joinville?", a: "Sim. O escritório fica em Joinville/SC, e atendo todo o Brasil de forma online. Processos trabalhistas e previdenciários correm normalmente a distância." },
  { q: "Quanto tempo demora um processo?", a: "Depende da complexidade, da vara e da possibilidade de acordo. Na nossa primeira conversa te dou uma estimativa realista para o seu caso, não uma promessa genérica." },
  { q: "Preciso ter provas para começar?", a: "Documentos ajudam, mas a ausência deles não encerra o assunto. Mensagens, testemunhas e registros digitais também constroem um caso. Traga o que tiver." },
  { q: "Como acompanho meu caso?", a: "A cada movimentação relevante você recebe uma mensagem minha explicando o que aconteceu e qual é o próximo passo." },
  { q: "Quanto custa contratar?", a: "Depende do tipo de caso, e você sabe tudo antes de decidir: na conversa inicial eu explico as formas de cobrança possíveis para a sua situação, com valores e condições registrados em contrato. Sem surpresa em nenhuma etapa." },
  { q: "Vou precisar ir a audiências?", a: "Em boa parte das etapas eu compareço por você. Quando a sua presença for necessária, você é avisado com antecedência e preparado antes: conversamos sobre o que esperar e o que será perguntado." },
];

const NUMEROS = [
  { v: 12, s: " anos", l: "de advocacia dedicada" },
  { v: 2, s: " áreas", l: "de atuação especializada" },
  { v: 100, s: "%", l: "dos casos com a Dra. Helena" },
  { v: 27, s: " estados", l: "alcançados pelo atendimento online" },
];

const AREAS = [
  {
    t: "Direito Trabalhista",
    d: "Para quem vive de salário e sente que a conta não fechou. Da demissão mal feita ao assédio que ninguém viu.",
    itens: [
      "Verbas rescisórias e demissões irregulares",
      "Reconhecimento de vínculo empregatício",
      "Horas extras e adicionais não pagos",
      "Assédio moral no ambiente de trabalho",
      "Acidente de trabalho e doença ocupacional",
      "Acordos, homologações e rescisão indireta",
    ],
  },
  {
    t: "Direito Previdenciário",
    d: "Para quem contribuiu a vida inteira e agora precisa que o INSS cumpra a parte dele. Sem filas, sem enrolação.",
    itens: [
      "Aposentadoria por idade, tempo e especial",
      "Revisão do valor do benefício",
      "Auxílio por incapacidade (antigo auxílio-doença)",
      "BPC/LOAS para idosos e pessoas com deficiência",
      "Pensão por morte",
      "Recursos contra negativas do INSS",
    ],
  },
];

/** Depoimentos fictícios do site modelo — no site real entram as avaliações
 *  verdadeiras do Google do escritório. Elogiam atendimento e clareza,
 *  nunca prometem resultado (Provimento 205/2021 OAB). */
const DEPOIMENTOS = [
  { nome: "Marcos A.", quando: "há 2 meses", texto: "Fui demitido e não sabia nem por onde começar. A Dra. Helena me explicou tudo por áudio, sem juridiquês, e cuidou de cada detalhe. Me senti amparado do início ao fim." },
  { nome: "Juliana R.", quando: "há 3 semanas", texto: "Meu benefício tinha sido negado duas vezes. Ela revisou meus documentos, montou o recurso e me avisava de cada movimentação. Atendimento humano de verdade." },
  { nome: "Sebastião M.", quando: "há 1 mês", texto: "Advogada atenciosa e muito honesta. Na primeira conversa já me disse o que era possível e o que não era. Foi isso que me deu confiança para seguir." },
  { nome: "Patrícia L.", quando: "há 2 meses", texto: "Sou de outro estado e resolvi tudo online. Nunca fiquei sem resposta, é ela mesma que responde no WhatsApp. Recomendo de olhos fechados." },
  { nome: "Rodrigo F.", quando: "há 4 meses", texto: "Trabalhei seis anos sem carteira assinada achando que não tinha direito a nada. Ela reuniu as provas comigo, passo a passo, e hoje meu vínculo está reconhecido." },
  { nome: "Aparecida N.", quando: "há 3 meses", texto: "A doutora teve uma paciência enorme comigo, explicou cada papel que eu precisava levar para a aposentadoria. Trata a gente como gente, não como número." },
  { nome: "André T.", quando: "há 5 meses", texto: "Profissional séria e direta. Sempre soube em que pé estava o meu processo sem precisar ficar cobrando. Isso não tem preço." },
  { nome: "Fernanda C.", quando: "há 1 mês", texto: "Depois do acidente eu estava perdida com os prazos. Ela assumiu tudo e me deixou tranquila para cuidar da minha recuperação. Só tenho a agradecer." },
];

export default function DemoEssencialPage() {
  return (
    <div className={`${geogira.variable} demo-root min-h-screen bg-[#F6F2E9] text-[#211D16]`} style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}>
      <style>{`
        .demo-gold-shine{background:linear-gradient(115deg,#F8EDD0 0%,#F0D9A4 28%,#DCA95C 55%,#C58C3B 75%,#F0DCB0 100%);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none;filter:drop-shadow(0 2px 14px rgba(0,0,0,0.5));}
        section[id]{scroll-margin-top:104px;}
        @media (prefers-reduced-motion: no-preference){
          /* Reveal editorial do demo: sobe, assenta e sai do desfoque */
          .demo-root .reveal{opacity:0;transform:translateY(46px) scale(.985);filter:blur(7px);transition:opacity .95s cubic-bezier(.22,.61,.21,1),transform .95s cubic-bezier(.22,.61,.21,1),filter .95s cubic-bezier(.22,.61,.21,1);}
          .demo-root .reveal.in{opacity:1;transform:none;filter:none;}
          /* Fotos assentam de um leve zoom quando a seção revela */
          .demo-root .demo-zoom-img{transform:scale(1.14);transition:transform 1.5s cubic-bezier(.22,.61,.21,1);}
          .demo-root .reveal.in .demo-zoom-img{transform:scale(1);}
          /* Ken Burns contínuo, quase imperceptível, para fotos fixas */
          .demo-root .demo-kenburns{animation:demoKB 18s ease-in-out infinite alternate;}
          @keyframes demoKB{from{transform:scale(1.02)}to{transform:scale(1.09)}}
        }
      `}</style>
      {/* Banner site modelo */}
      <div className="fixed inset-x-0 top-0 z-[60] flex h-[33px] items-center justify-center border-b border-[#3E7C5B]/40 bg-[#16281F] px-4">
        <a href="/advogados" className="truncate font-mono text-[9px] uppercase tracking-[0.14em] text-[#CDE3D3] hover:text-[#E9F2EA] sm:text-[10px] sm:tracking-[0.18em]">
          ✦ Site modelo<span className="hidden sm:inline"> · Plano Essencial · Tema Aurum</span>, por JV Web Studio · <u>Quero um site assim</u>
        </a>
      </div>

      {/* Header (transparente sobre a foto, sólido depois do hero) */}
      <DemoHeader wa={WA} serif={SERIF} />

      <main>
        {/* ============ HERO · full-bleed com a Têmis + faixa de números embutida ============ */}
        {/* A foto começa no topo absoluto da página (o cabeçalho flutua por cima dela)
            e a seção ocupa exatamente uma tela, com os selos na base. */}
        <section id="inicio" className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-[#08120D] md:h-[100dvh] md:min-h-[600px] md:flex-row md:items-center md:pb-[136px] md:pt-[108px]">
          {/* Foto de fundo com parallax: a Têmis desce mais devagar que o scroll */}
          <DemoParallax speed={0.1} className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FOTO_TEMIS}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[62%_28%] md:object-[center_42%]"
            />
          </DemoParallax>
          {/* Clareada: véu branco crescendo da esquerda para a direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/34" />
          {/* No celular a foto vira close: escurece um pouco mais para o texto respirar */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05100B]/80 via-[#05100B]/55 to-[#05100B]/80 md:hidden" />
          {/* Verde predominando no topo, atrás do cabeçalho flutuante */}
          <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#0A1810] via-[#0A1810]/70 to-transparent" />
          {/* Sombra suave só atrás do texto — dá leitura sem escurecer a estátua */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(52% 62% at 18% 50%, rgba(4,12,8,0.55), rgba(4,12,8,0.22) 55%, transparent 80%)" }} />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-36 md:py-0">
            <DemoHeroFade className="max-w-2xl">
              <Reveal>
                <p className="text-[13px] uppercase tracking-[0.3em] text-[#CDE3D3]" style={{ ...SERIF_LIGHT, ...SOMBRA }}>
                  Advocacia Trabalhista e Previdenciária
                </p>
                <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-[#F6F2E9] md:text-7xl" style={{ ...SERIF, ...SOMBRA }}>
                  O seu direito<br />
                  não deveria<br />
                  <span className="demo-gold-shine">depender de sorte.</span>
                </h1>
                <p className="mt-7 max-w-md text-lg leading-relaxed text-[#EDE7DA]" style={SOMBRA}>
                  Atendimento direto com a advogada, em linguagem que você entende. Joinville e todo o Brasil, online.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#F5F0E3] to-[#E2D9C2] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1C3A2E] shadow-[0_18px_50px_-16px_rgba(62,124,91,0.75)] transition hover:-translate-y-0.5 hover:brightness-105">
                    <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
                  </a>
                  <span className="text-sm text-[#DCD5C6]" style={SOMBRA}>OAB/SC 00.000</span>
                </div>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#D6E2D4]" style={SOMBRA}>
                  Me conte sua situação, pode ser por áudio. Eu leio pessoalmente e te digo, com
                  sinceridade, se existe caminho para o seu caso.
                </p>
              </Reveal>
            </DemoHeroFade>
          </div>
          {/* Cartão de atendimento: ocupa o vazio à direita e reforça a promessa de agilidade */}
          <aside
            className="hidden lg:block"
            style={{ position: "absolute", top: "50%", right: "clamp(24px, 4vw, 72px)", width: 270, transform: "translateY(-50%)" }}
          >
            <div
              className="rounded-2xl p-6 backdrop-blur-md"
              style={{ background: "rgba(10,24,16,0.5)", border: "1px solid rgba(255,255,255,0.16)" }}
            >
              <p className="text-[12px] uppercase tracking-[0.22em] text-[#9FC0A6]" style={SERIF_LIGHT}>Atendimento</p>
              <p className="mt-3 font-serif text-2xl leading-snug text-[#F6F2E9]" style={SERIF}>
                Resposta em até 1 hora útil.
              </p>
              <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm leading-snug text-[#CFE0CF]">
                <p className="flex gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#8FC3A0]" /> Segunda a sexta, das 9h às 18h</p>
                <p className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8FC3A0]" /> Joinville/SC e todo o Brasil, online</p>
                <p className="flex gap-2.5"><Scale className="mt-0.5 h-4 w-4 shrink-0 text-[#8FC3A0]" /> Primeira conversa sem compromisso</p>
              </div>
            </div>
          </aside>

          {/* Selos: faixa de vidro verde na base do hero, dentro da primeira tela */}
          <div className="relative z-10 mt-auto border-t border-white/15 bg-[#0A1810]/55 backdrop-blur-md md:absolute md:inset-x-0 md:bottom-0 md:mt-0">
            <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-6 md:grid-cols-4">
              {NUMEROS.map((n) => (
                <div key={n.l} className="px-4 py-5 text-center md:py-7">
                  <DemoCountUp value={n.v} suffix={n.s} className="font-serif text-2xl font-semibold text-[#F6F2E9] md:text-3xl" style={SERIF} />
                  <p className="mt-1 text-[11px] leading-snug text-[#B9CFBC] md:text-xs">{n.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* sentinela: quando some pelo topo, o cabeçalho vira sólido */}
          <div id="hero-fim" aria-hidden className="pointer-events-none absolute bottom-24 h-px w-full" />
        </section>

        {/* ============ SCROLLYTELLING · situações ============ */}
        <section id="situacoes" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl" style={SERIF}>
                Talvez você esteja passando <span className="text-[#24523D]">por uma destas situações.</span>
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-[#6B6455]">
                Role a lista com calma. Se você se reconhecer em alguma delas, existe um caminho jurídico para resolver.
              </p>
            </Reveal>
            <div className="mt-14">
              <DemoScrolly items={SITUACOES} />
            </div>
            <Reveal className="mt-10">
              <p className="text-[#6B6455]">
                Não encontrou a sua situação?{" "}
                <a href={WA} target="_blank" rel="noopener" className="font-semibold text-[#24523D] underline underline-offset-4">
                  Me conte pelo WhatsApp.
                </a>{" "}
                Cada caso é único.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ A LEI DO SEU LADO · autoridade com referência real ============ */}
        <section className="border-t border-[#E5DCC9] bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-4xl font-semibold tracking-tight md:text-5xl" style={SERIF}>
                A lei já está <span className="text-[#24523D]">do seu lado.</span>
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-[#6B6455]">
                Três coisas que a maioria dos trabalhadores não sabe, e que mudam a conversa:
              </p>
            </Reveal>
            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-3">
              {[
                { t: "Reclamar não gera custo inicial", d: "Quem não pode pagar custas tem direito à justiça gratuita no processo do trabalho. A porta de entrada não depende do seu bolso (CLT, art. 790)." },
                { t: "A prova, muitas vezes, é da empresa", d: "Cartão de ponto, holerites e registros ficam com o empregador. Em muitos temas, é ele quem precisa provar que cumpriu a lei, não você." },
                { t: "O acordo também é vitória", d: "Boa parte dos casos termina em acordo homologado pelo juiz, com valores garantidos e prazo definido. Nem todo direito exige anos de briga." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 90}>
                  <div className="border-t-2 border-[#3E7C5B] pt-5">
                    <h3 className="font-semibold text-[#211D16]">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6455]">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CITAÇÃO · textura de mármore verde em opacidade baixa ============ */}
        <section className="relative overflow-hidden bg-[#16281F] py-24 md:py-32">
          <DemoParallax speed={0.18} className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TEXTURA_MARMORE} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-[1.2] object-cover opacity-[0.45]" />
          </DemoParallax>
          {/* Camada branca sólida em baixa opacidade: clareia a textura */}
          <div className="absolute inset-0 bg-white/[0.16]" />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(78% 88% at 50% 50%, transparent 30%, rgba(11,24,18,0.34) 100%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <Scale className="mx-auto h-8 w-8 text-[#BEDBC6]" />
              <blockquote className="mt-8 font-serif text-3xl font-semibold leading-snug text-[#F6F2E9] md:text-5xl" style={SERIF}>
                &ldquo;Ninguém deveria precisar de coragem para cobrar aquilo que já é seu.&rdquo;
              </blockquote>
              <p className="mt-7 text-sm uppercase tracking-[0.22em] text-[#CDE3D3]">Dra. Helena Vasconcellos</p>
            </Reveal>
          </div>
        </section>

        {/* ============ ÁREAS DE ATUAÇÃO · duas colunas editoriais ============ */}
        <section id="areas" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl" style={SERIF}>
                Duas áreas que <span className="text-[#24523D]">andam juntas.</span>
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[#6B6455]">
                Um acidente de trabalho vira um benefício no INSS. Uma demissão mexe nas suas
                contribuições. Atuar nas duas frentes evita que o seu caso caia no vão entre uma e outra.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[#E5DCC9]">
              {AREAS.map((a, i) => (
                <Reveal key={a.t} delay={i * 110}>
                  <div className={i === 0 ? "md:pr-14" : "md:pl-14"}>
                    <p className="font-serif text-6xl font-medium leading-none text-[#E0D7C3]" style={SERIF}>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight md:text-3xl" style={SERIF}>{a.t}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-[#6B6455]">{a.d}</p>
                    <ul className="mt-7 space-y-3 border-t border-[#EFE9DB] pt-7 text-sm text-[#433D30]">
                      {a.itens.map((it) => (
                        <li key={it} className="flex gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3E7C5B]" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12">
              <p className="border-t border-[#EFE9DB] pt-8 text-[#6B6455]">
                Não sabe em qual área o seu caso se encaixa?{" "}
                <a href={WA} target="_blank" rel="noopener" className="font-semibold text-[#24523D] underline underline-offset-4">
                  Me descreva o que aconteceu.
                </a>{" "}
                Descobrir a área certa é problema meu, não seu.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ SOBRE · foto + bloco sobreposto ============ */}
        <section id="sobre" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center md:grid-cols-12">
              <div className="md:col-span-7">
                <Reveal>
                  <div className="overflow-hidden rounded-[28px] bg-[#E3DACA]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={FOTO_RETRATO} alt="Dra. Helena Vasconcellos" className="demo-zoom-img aspect-[16/11] w-full object-cover object-[38%_center]" />
                  </div>
                </Reveal>
              </div>
              <div className="relative z-10 -mt-16 md:col-span-5 md:-ml-20 md:mt-0">
                <Reveal delay={120}>
                  <div className="rounded-[24px] border border-[#E5DCC9] bg-white p-9 shadow-[0_30px_70px_-40px_rgba(36,82,61,0.45)]">
                    <h2 className="font-serif text-3xl font-semibold tracking-tight" style={SERIF}>
                      Escolhi defender <span className="text-[#24523D]">quem trabalha.</span>
                    </h2>
                    <p className="mt-5 leading-relaxed text-[#5C5546]">
                      Sou a Helena. Advogo há 12 anos e continuo atendendo cada cliente pessoalmente,
                      do primeiro áudio no WhatsApp à conclusão do caso. Aqui você não fala com
                      assistente de escritório: fala comigo.
                    </p>
                    <ul className="mt-6 space-y-2.5 border-t border-[#EFE9DB] pt-6 text-sm text-[#433D30]">
                      <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#24523D]" /> Bacharel em Direito pela UFSC</li>
                      <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#24523D]" /> Pós-graduada em Direito do Trabalho</li>
                      <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#24523D]" /> Palestrante em sindicatos e associações da região</li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROCESSO · timeline vertical de verbos ============ */}
        <section id="processo" className="border-t border-[#E5DCC9] bg-[#FBF8F1] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-[13px] uppercase tracking-[0.3em] text-[#24523D]" style={SERIF_LIGHT}>Como funciona</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold tracking-tight md:text-5xl" style={SERIF}>
                Quatro verbos. Nenhum mistério.
              </h2>
            </Reveal>
            <div className="relative mt-14 md:pl-6">
              <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-gradient-to-b from-[#3E7C5B]/70 via-[#3E7C5B]/30 to-transparent md:block" />
              <div className="space-y-12">
                {PROCESSO.map((p, i) => (
                  <Reveal key={p.v} delay={i * 90}>
                    <div className="grid gap-3 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <h3 className="font-serif text-3xl font-semibold text-[#24523D] md:text-4xl" style={SERIF}>{p.v}</h3>
                      </div>
                      <p className="max-w-xl leading-relaxed text-[#5C5546] md:col-span-8 md:pt-2">{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ DEPOIMENTOS · marquee duplo estilo Google ============ */}
        <section id="avaliacoes" className="relative overflow-hidden bg-[#16281F] py-24">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 60% at 50% 0%, rgba(62,124,91,0.16), transparent 70%)" }} />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-[#F6F2E9] md:text-5xl" style={SERIF}>
                    Quem eu já defendi <span className="demo-gold-shine">recomenda.</span>
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-[#A9B5A8]">
                    Avaliações espontâneas deixadas no perfil do escritório no Google.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-[#3E7C5B]/40 bg-[#1C3A2E]/60 px-6 py-4">
                  <span className="font-serif text-4xl font-semibold text-[#F6F2E9]" style={SERIF}>5,0</span>
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#E8A93C] text-[#E8A93C]" />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-[#CDE3D3]">47 avaliações no Google</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative mt-12">
            <DemoDepoimentos itens={DEPOIMENTOS} />
          </Reveal>
        </section>

        {/* ============ FAQ · foto do tribunal sob véu claro ============ */}
        <section id="faq" className="relative overflow-hidden py-24">
          {/* Fundo cravado de propósito: o contêiner tem altura FIXA (não acompanha a
              seção), então abrir/fechar os <details> nunca recalcula o recorte da foto.
              A imagem é mais alta que o contêiner e puxada para cima (-50vh) para o
              microfone e a mesa aparecerem na área visível. */}
          <div aria-hidden className="absolute inset-x-0 top-0 h-[200vh] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FOTO_TRIBUNAL} alt="" className="-mt-[50vh] h-[240vh] w-full object-cover object-center blur-[1.5px]" />
          </div>
          <div className="absolute inset-0 bg-[#F3EFE4]/[0.78]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F2E9] via-transparent to-[#F6F2E9]" />
          <div className="relative mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="text-center font-serif text-4xl font-semibold tracking-tight md:text-5xl" style={SERIF}>
                O que todo mundo pergunta
              </h2>
            </Reveal>
            <div className="mt-12 divide-y divide-[#E5DCC9] border-y border-[#E5DCC9]">
              {FAQ.map((f, i) => (
                <Reveal key={f.q} delay={(i % 3) * 70}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg font-semibold text-[#211D16] md:text-xl" style={SERIF}>
                      {f.q}
                      <span className="text-2xl font-light text-[#24523D] transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-[#6B6455]">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL + CONTATO ============ */}
        <section id="contato" className="border-t border-[#E5DCC9] bg-[#FBF8F1] py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl" style={SERIF}>
                  O primeiro passo<br />é <span className="text-[#24523D]">uma conversa.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-[#5C5546]">
                  Me chame no WhatsApp contando brevemente sua situação. Eu respondo pessoalmente em horário comercial.
                </p>
                <a href={WA} target="_blank" rel="noopener" className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-[#1C3A2E] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#CDE3D3] shadow-[0_18px_45px_-16px_rgba(28,58,46,0.55)] transition hover:-translate-y-0.5 hover:bg-black">
                  <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={120}>
                <div className="space-y-6 border-l border-[#E5DCC9] pl-8 text-[#5C5546]">
                  <div className="flex gap-3.5">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#24523D]" />
                    <p>Rua Blumenau, 1250 · Sala 402<br />América, Joinville/SC</p>
                  </div>
                  <div className="flex gap-3.5">
                    <Clock className="mt-1 h-4 w-4 shrink-0 text-[#24523D]" />
                    <p>Segunda a sexta, das 9h às 18h<br />Atendimento com hora marcada</p>
                  </div>
                  <div className="flex gap-3.5">
                    <Landmark className="mt-1 h-4 w-4 shrink-0 text-[#24523D]" />
                    <p>Atendimento online para todo o Brasil,<br />com a mesma atenção do presencial</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#16281F] py-10 text-center">
        <p className="font-serif text-xl text-[#CDE3D3]" style={SERIF}>Helena Vasconcellos · Advocacia</p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          OAB/SC 00.000 · Publicidade em conformidade com o Provimento 205/2021 do CFOAB
        </p>
        <p className="mt-4 text-[11px] text-neutral-500">
          Site demonstrativo com conteúdo fictício ·{" "}
          <a href="/advogados" className="text-[#CDE3D3] underline underline-offset-4 hover:text-[#E9F2EA]">
            feito pela JV Web Studio. Quero um site assim
          </a>
        </p>
      </footer>

      {/* WhatsApp flutuante */}
      <a href={WA} target="_blank" rel="noopener" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#F5F0E3] to-[#E2D9C2] text-[#16281F] shadow-[0_14px_40px_-10px_rgba(62,124,91,0.55)] transition hover:scale-105">
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Conversar no WhatsApp</span>
      </a>
    </div>
  );
}
