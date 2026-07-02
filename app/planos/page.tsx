import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import PlanosAssinatura from "@/components/PlanosAssinatura";
import ModelosGaleria from "@/components/ModelosGaleria";
import Marquee from "@/components/sections/Marquee";
import UnicornBackground from "@/components/backgrounds/UnicornBackground";
import GridGlow from "@/components/backgrounds/GridGlow";
import Testimonials from "@/components/sections/Testimonials";
import { SITE } from "@/lib/site";
import {
  INCLUSO_TODOS, COMPARACAO, COMO_FUNCIONA, PARA_QUEM, FAQ_ASSINATURA,
} from "@/lib/planos-assinatura";
import {
  Check, X, Zap, ShieldCheck, Clock, Rocket, Sparkles,
  Stethoscope, Store, TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Site por Assinatura — Seu site no ar em 48h, criação grátis",
  description:
    "Tenha um site profissional no ar em até 48h sem custo de criação. Você paga apenas uma assinatura fixa com hospedagem, suporte, SEO e manutenção inclusos. Planos a partir de R$97/mês.",
  // Página de campanha (anúncios) — fora do índice e sem ligação com o site.
  robots: { index: false, follow: false },
};

const PARA_QUEM_ICON = [Stethoscope, Store, TrendingUp];

const MARQUEE_A = [
  "SITE NO AR EM 48H", "CRIAÇÃO SEM CUSTO", "HOSPEDAGEM INCLUSA",
  "DOMÍNIO PRÓPRIO", "SSL SEGURO", "FEITO PRA VENDER", "SUPORTE DE VERDADE",
];
const MARQUEE_B = [
  "PAGUE SÓ A MENSALIDADE", "MANUTENÇÃO INCLUSA", "CANCELE QUANDO QUISER",
  "SEO NO GOOGLE", "WHATSAPP INTEGRADO", "DESIGN SOB MEDIDA", "ENTREGA RÁPIDA",
];

export default function PlanosPage() {
  const wa = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Olá! Quero meu site por assinatura na JV WEB STUDIO.")}`
    : "#planos";

  return (
    <>
      {/* Topo MÍNIMO — só o logo, sem navegação (página fechada de campanha) */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Logo href="/planos" />
          <a
            href={wa}
            target="_blank"
            rel="noopener"
            className="btn-gold px-5 py-2.5 text-[11px] uppercase tracking-widest"
          >
            Falar agora
          </a>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="section-dark relative overflow-hidden bg-dark pt-36 pb-24">
          <UnicornBackground projectId="N9XzvQXu7fA5SY2ewADJ" dim={0.55} className="!z-0" />
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ background: "radial-gradient(70% 60% at 50% 0%, rgba(201,162,75,0.14), transparent 65%)" }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/50 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-100 backdrop-blur-md">
                <Zap className="h-3.5 w-3.5" /> O site do seu negócio, por assinatura
              </span>
              <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Seu site pronto pra vender{" "}
                <span className="text-gold-shine">no ar em 48 horas.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                Nós desenhamos, escrevemos e publicamos o seu site <strong className="text-white">sem cobrar
                pela criação</strong>. Você entra só com uma mensalidade enxuta que mantém tudo de pé:
                hospedagem, suporte e ajustes inclusos.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="#planos" className="btn-gold px-8 py-4 text-sm uppercase tracking-widest">
                  Quero meu site
                </a>
                <a href="#como-funciona" className="btn-outline-gold px-8 py-4 text-sm uppercase tracking-widest">
                  Ver como funciona
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-100" /> Você não paga pra criar</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-100" /> Hospedagem e domínio inclusos</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-100" /> No ar em 48h</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== FAIXA DE NÚMEROS ===== */}
        <section className="border-y border-black/10 bg-surface py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 md:px-10">
            {[
              { v: "48h", l: "até publicar" },
              { v: "R$ 0", l: "pela criação" },
              { v: "100%", l: "do suporte incluso" },
              { v: "24/7", l: "no ar, rápido e seguro" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="font-display text-3xl font-bold text-gold-deep md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs text-neutral-600">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <Marquee words={MARQUEE_A} />

        {/* ===== COMPARAÇÃO ===== */}
        <section className="bg-grid relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ COMPARE VOCÊ MESMO ]</div>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Tem caminho melhor do que gastar caro <span className="text-gold-metal">— ou se virar sozinho.</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              <Reveal>
                <div className="card-dark h-full p-7 opacity-80">
                  <h3 className="font-display text-lg font-bold text-white/70">{COMPARACAO.agencia.titulo}</h3>
                  <ul className="mt-5 space-y-3">
                    {COMPARACAO.agencia.itens.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="card-dark h-full p-7 opacity-80">
                  <h3 className="font-display text-lg font-bold text-white/70">{COMPARACAO.diy.titulo}</h3>
                  <ul className="mt-5 space-y-3">
                    {COMPARACAO.diy.itens.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="pacote-card pacote-card--destaque h-full p-7">
                  <span className="pacote-badge"><Sparkles className="h-3 w-3" /> Novo padrão</span>
                  <h3 className="font-display text-lg font-bold text-gold-metal">{COMPARACAO.jv.titulo}</h3>
                  <ul className="mt-5 space-y-4">
                    {COMPARACAO.jv.itens.map((i) => (
                      <li key={i.destaque} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" />
                        <span className="text-sm">
                          <strong className="text-white">{i.destaque}</strong>{" "}
                          <span className="text-neutral-400">{i.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href="#planos" className="btn-gold mt-7 inline-flex w-full items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest">
                    Quero esse caminho
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="bg-dots relative border-t border-black/10 bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <div className="section-label">[ PARA QUEM É ]</div>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Presença profissional <span className="text-gold-metal">pra ontem.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PARA_QUEM.map((p, i) => {
                const Icon = PARA_QUEM_ICON[i] ?? Store;
                return (
                  <Reveal key={p.titulo} delay={i * 100}>
                    <div className="card-dark h-full p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-gold-metal">{p.titulo}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Marquee words={MARQUEE_B} reverse />

        {/* ===== MODELOS ===== */}
        <section id="modelos" className="bg-grid relative border-t border-black/10 bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ TRABALHOS ENTREGUES ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Alguns trabalhos que já <span className="text-gold-metal">entregamos.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Sites reais, no ar, feitos pra vender. Clique em qualquer um para ver
                rodando de verdade.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-12">
              <ModelosGaleria />
            </Reveal>
          </div>
        </section>

        {/* ===== COMO FUNCIONA ===== */}
        <section id="como-funciona" className="bg-grid relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ COMO FUNCIONA ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Do briefing ao ar, <span className="text-gold-metal">sem enrolação.</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {COMO_FUNCIONA.map((p, i) => (
                <Reveal key={p.n} delay={(i % 4) * 90}>
                  <div className="card-dark h-full p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-bold text-gold-metal">{p.n}</span>
                      <span className="rounded-full border border-gold-3/40 bg-gold-3/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-gold-100">
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{p.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Marquee words={MARQUEE_A} reverse />

        {/* ===== O QUE ESTÁ INCLUSO ===== */}
        <section className="relative border-t border-black/10 bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <div className="section-label">[ O QUE ESTÁ INCLUSO ]</div>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Já vem tudo pronto pra você <span className="text-gold-metal">não se preocupar com nada.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                Nada de juntar freelancer, hospedagem, domínio e manutenção em cantos diferentes.
                Está tudo numa assinatura só.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUSO_TODOS.map((it, i) => (
                <Reveal key={it.titulo} delay={(i % 3) * 90}>
                  <div className="card-dark flex h-full gap-4 p-6">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-100" />
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{it.titulo}</h3>
                      <p className="mt-1 text-sm text-white/75">{it.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PLANOS ===== */}
        <section id="planos" className="section-dark relative overflow-hidden bg-dark py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(70% 60% at 50% 0%, rgba(201,162,75,0.12), transparent 65%)" }}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ PLANOS ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Preço na mesa, <span className="text-gold-shine">sem pegadinha.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                A criação é por nossa conta. Você só escolhe como quer manter tudo rodando.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-14">
              <PlanosAssinatura />
            </Reveal>
          </div>
        </section>

        {/* ===== SEGURANÇA ===== */}
        <section className="bg-dots relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <div className="section-label">[ SEGURANÇA ]</div>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
                Sem pegadinha, sem taxa surpresa <span className="text-gold-metal">e sem a gente sumir depois.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: ShieldCheck, t: "Cancele quando quiser", d: "Mensalidade transparente, sem multa e sem drama pra sair." },
                { icon: Clock, t: "Manutenção inclusa", d: "Ajustes, suporte e atualizações fazem parte do plano." },
                { icon: Rocket, t: "Entregue com capricho", d: "Rápido, responsivo, com SSL e pronto pra receber gente." },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <div className="card-dark h-full p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-gold-metal">{s.t}</h3>
                    <p className="mt-2 text-sm text-white/80">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Marquee words={MARQUEE_B} />

        {/* ===== DEPOIMENTOS ===== */}
        <Testimonials />

        {/* ===== FAQ ===== */}
        <section id="faq" className="bg-grid relative border-t border-black/10 bg-surface py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ FAQ ]</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Perguntas <span className="text-gold-metal">frequentes.</span>
              </h2>
            </Reveal>
            <div className="mt-12 space-y-3">
              {FAQ_ASSINATURA.map((f, i) => (
                <Reveal key={f.q} delay={(i % 4) * 70}>
                  <details className="card-dark group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold text-white">
                      {f.q}
                      <span className="ml-4 text-gold-100 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="section-dark relative overflow-hidden bg-dark py-28">
          <GridGlow />
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-100">
                Bora começar? A criação é por nossa conta
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Seu site pode estar <span className="text-gold-shine">no ar já esta semana.</span>
              </h2>
              <p className="mt-5 text-neutral-300">
                Sem custo de criação, sem dor de cabeça. Só o seu site pronto pra trabalhar por você.
              </p>
              <div className="mt-9 flex flex-col items-center gap-3">
                <a href={wa} target="_blank" rel="noopener" className="btn-gold px-9 py-4 text-sm uppercase tracking-widest">
                  Quero meu site agora
                </a>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Entrega em 48h · Cancele quando quiser
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Rodapé MÍNIMO — sem links para o resto do site (página fechada) */}
      <footer className="border-t border-white/10 bg-dark py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:px-10">
          <Logo href="/planos" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            JV WEB STUDIO · Site por assinatura
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener"
            className="btn-outline-gold px-6 py-2.5 text-[11px] uppercase tracking-widest"
          >
            Falar no WhatsApp
          </a>
        </div>
      </footer>
    </>
  );
}
