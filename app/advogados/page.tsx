import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import Marquee from "@/components/sections/Marquee";
import ModelosGaleria from "@/components/ModelosGaleria";
import Testimonials from "@/components/sections/Testimonials";
import AdvCountdown from "@/components/advogados/AdvCountdown";
import AdvCta from "@/components/advogados/AdvCta";
import AdvBuyCta from "@/components/advogados/AdvBuyCta";
import AdvPixel from "@/components/advogados/AdvPixel";
import {
  ADV_HERO, ADV_STATS, ADV_DORES, ADV_PILARES, ADV_ANATOMIA, ADV_PLANOS,
  ADV_TEMAS, ADV_PROCESSO, ADV_GARANTIAS, ADV_FAQ, ADV_LOTE,
  ADV_MARQUEE_A, ADV_MARQUEE_B,
} from "@/lib/advogados";
import {
  Scale, Search, Smartphone, ShieldCheck, Check, Star, Sparkles, Clock,
  FileText, Rocket, Award, MessageCircle, Timer, Globe, Camera, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sites para Advogados — Mês do Advogado · pronto em 7 dias, dentro das normas da OAB",
  description:
    "Agosto é o Mês do Advogado: seu site profissional pronto em até 7 dias úteis, dentro do Provimento 205/2021 da OAB, com domínio e hospedagem grátis por 1 ano. A partir de 12x de R$ 97,90 — vagas limitadas.",
  // Página de campanha (anúncios) — fora do índice, como a /planos.
  robots: { index: false, follow: false },
};

const DOR_ICON = [Search, Smartphone, Scale];
const PILAR_ICON = [ShieldCheck, Timer, Globe, Zap];
const GARANTIA_ICON = [Sparkles, Clock, Scale, ShieldCheck];

const WA_GERAL = "Olá! Vim da página do Mês do Advogado e quero saber mais sobre o site para advogados.";

export default function AdvogadosPage() {
  return (
    <>
      <AdvPixel />

      {/* Topo MÍNIMO — só o logo + CTA, sem navegação (página fechada de campanha) */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Logo href="/advogados" />
          <AdvCta text={WA_GERAL} className="btn-gold px-5 py-2.5 text-[11px] uppercase tracking-widest">
            Falar agora
          </AdvCta>
        </div>
      </header>

      <main>
        {/* ===== HERO — preto premium com glow dourado ===== */}
        <section className="section-dark relative overflow-hidden bg-dark pb-20 pt-36">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(70% 55% at 50% 0%, rgba(201,162,75,0.16), transparent 65%)" }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/50 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gold-100 backdrop-blur-md">
                <Scale className="h-3.5 w-3.5" /> {ADV_HERO.badge}
              </span>
              <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {ADV_HERO.titleTop}{" "}
                <span className="text-gold-shine">{ADV_HERO.titleAccent}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                {ADV_HERO.sub}
              </p>
              <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-1 rounded-2xl border border-gold-3/40 bg-white/5 px-6 py-4 backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  preço normal: <span className="line-through">R$ 1.497</span> · SÓ NESTE MOMENTO:
                </p>
                <p className="font-display text-4xl font-bold text-gold-metal">
                  R$ 897 <span className="align-middle text-base font-semibold text-neutral-300">ou 12x de R$ 97,90</span>
                </p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold-100">
                  desconto de R$ 600 (40% OFF)
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <AdvBuyCta href="#planos">Garantir com 40% de desconto</AdvBuyCta>
                <AdvCta
                  text={WA_GERAL}
                  className="btn-outline-gold px-8 py-4 text-sm uppercase tracking-widest"
                >
                  Tirar dúvida no WhatsApp
                </AdvCta>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                {ADV_HERO.bullets.map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-gold-100" /> {b}
                  </span>
                ))}
              </div>
              <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-2 rounded-2xl border border-gold-3/40 bg-white/5 px-6 py-4 backdrop-blur-md">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  Lote do Mês do Advogado:{" "}
                  <strong className="text-gold-100">restam {ADV_LOTE.restantes} de {ADV_LOTE.total} vagas</strong>
                </p>
                <AdvCountdown className="text-neutral-400" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== FAIXA DE NÚMEROS ===== */}
        <section className="border-y border-black/10 bg-surface py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 md:px-10">
            {ADV_STATS.map((s) => (
              <Reveal key={s.l}>
                <div className="font-display text-3xl font-bold text-gold-deep md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs text-neutral-600">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <Marquee words={ADV_MARQUEE_A} />

        {/* ===== DOR ===== */}
        <section className="bg-dots relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ A PERGUNTA QUE DECIDE ]</div>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                O que acontece quando pesquisam{" "}
                <span className="text-gold-metal">seu nome no Google?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
                Hoje a indicação não termina no &ldquo;te passo o contato&rdquo;. Termina no Google.
                O cliente pesquisa seu nome antes de chamar — e em segundos decide se a indicação
                se confirma ou esfria. Não é vaidade: é não perder o cliente que já estava quase seu.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {ADV_DORES.map((d, i) => {
                const Icon = DOR_ICON[i] ?? Search;
                return (
                  <Reveal key={d.titulo} delay={i * 100}>
                    <div className="card-dark h-full p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-gold-metal">{d.titulo}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{d.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SOLUÇÃO — 4 PILARES ===== */}
        <section className="relative border-t border-black/10 bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <div className="section-label">[ FEITO PARA ADVOCACIA ]</div>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Sites feitos por quem entende de advocacia —{" "}
                <span className="text-gold-metal">não templates genéricos.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ADV_PILARES.map((p, i) => {
                const Icon = PILAR_ICON[i] ?? ShieldCheck;
                return (
                  <Reveal key={p.titulo} delay={i * 90}>
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

        {/* ===== ANATOMIA — AS 10 SEÇÕES ===== */}
        <section className="bg-grid relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ O QUE VAI NO SEU SITE ]</div>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                As 10 seções que fazem um site de advogado{" "}
                <span className="text-gold-metal">gerar consultas.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Site de advogado não é enfeite — é estrutura. Cada seção tem um papel:
                posicionar, gerar confiança, derrubar objeção e abrir a conversa no seu WhatsApp.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {ADV_ANATOMIA.map((s, i) => (
                <Reveal key={s.n} delay={(i % 2) * 80}>
                  <div className="flex h-full gap-4 rounded-2xl border border-black/10 bg-surface p-5 transition hover:border-gold-3/50 hover:shadow-[0_14px_40px_-20px_rgba(201,162,75,0.45)]">
                    <span className="font-display text-2xl font-bold text-gold-metal">{s.n}</span>
                    <div>
                      <h3 className="font-display text-base font-bold text-neutral-900">{s.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA INTERMEDIÁRIO ===== */}
        <section className="border-y border-gold-3/30 bg-gold-3/10 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-6 text-center md:flex-row md:text-left md:px-10">
            <p className="font-display text-xl font-bold text-neutral-900 md:text-2xl">
              Tudo isso por <span className="line-through opacity-50">R$ 1.497</span>{" "}
              <span className="text-gold-metal">R$ 897 — só neste momento.</span>
            </p>
            <AdvBuyCta href="#planos" className="btn-gold shrink-0 px-7 py-3.5 text-xs uppercase tracking-widest">
              Quero os R$ 600 de desconto
            </AdvBuyCta>
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
              <div className="section-label">[ PLANOS · MÊS DO ADVOGADO ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Escolha como você quer{" "}
                <span className="text-gold-shine">ser encontrado.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                O <strong className="text-white">Essencial</strong> converte quem já te conhece.
                O <strong className="text-white">Autoridade</strong> faz o Google te apresentar a quem
                ainda não conhece. Um único cliente novo paga qualquer um dos dois.
              </p>
            </Reveal>

            <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
              {ADV_PLANOS.map((p, i) => (
                <Reveal key={p.id} delay={i * 120} className="h-full">
                  <div className={`pacote-card group relative flex h-full flex-col p-8 ${p.destaque ? "pacote-card--destaque" : ""}`}>
                    {p.destaque && (
                      <span className="pacote-badge">
                        <Star className="h-3 w-3" /> Mais completo
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-2xl font-bold leading-none">{p.nome}</h3>
                      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-gold-100/80">
                        {p.conceito}
                      </p>
                    </div>

                    <div className="my-6 h-px w-full bg-gradient-to-r from-gold-3/50 via-gold-3/20 to-transparent" />

                    <div>
                      <p className="text-sm text-neutral-500">
                        preço normal: <span className="line-through">{p.precoDe}</span> · agora:
                      </p>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="font-display text-5xl font-bold text-gold-metal">{p.precoPor}</span>
                        <span className="mb-1.5 text-sm text-neutral-400">à vista</span>
                      </div>
                      <p className="mt-1 text-sm text-neutral-300">
                        ou <strong className="text-gold-100">{p.parcela}</strong> no cartão
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-gold-3/60 bg-gold-3/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-gold-100">
                          <Sparkles className="h-3 w-3" /> Economia de {p.economia} · {p.off}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-gold-3/40 bg-gold-3/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-gold-100">
                          <Rocket className="h-3 w-3" /> {p.entrega}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-7 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl border border-gold-3/30 bg-gold-3/10 p-4">
                      <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold-100">
                        <Award className="h-3.5 w-3.5" /> Bônus do Mês do Advogado
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.bonus.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gold-100/90">
                            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1" />
                    <AdvBuyCta
                      href={`/advogados/finalizar?plano=${p.id}`}
                      className="btn-gold mt-8 inline-flex items-center justify-center px-6 py-4 text-xs uppercase tracking-widest"
                    >
                      {p.cta}
                    </AdvBuyCta>
                    <AdvCta
                      text={p.waText}
                      className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 underline-offset-4 hover:text-gold-100 hover:underline"
                    >
                      Prefere tirar uma dúvida antes? Chame no WhatsApp
                    </AdvCta>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-gold-3/25 bg-black/40 p-6 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-3/30 text-gold-100">
                  <Camera className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-lg font-bold">
                    No Essencial: adicione o{" "}
                    <span className="text-gold-metal">Pacote 5 Fotos Profissionais com IA</span>
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Retratos profissionais seus, gerados com IA e prontos para o site — de{" "}
                    <span className="line-through">R$ 197</span> por{" "}
                    <strong className="text-gold-100">R$ 47</strong>, oferecido após a compra.
                    No Autoridade, ele já vai <strong className="text-gold-100">grátis</strong>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Marquee words={ADV_MARQUEE_B} reverse />

        {/* ===== TEMAS ===== */}
        <section id="temas" className="bg-dots relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ 4 TEMAS EXCLUSIVOS ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Escolha o tema com a sua cara —{" "}
                <span className="text-gold-metal">nós cuidamos do resto.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Temas desenhados para a advocacia e testados para conversão. No briefing você escolhe
                o seu, e nós personalizamos com suas cores, sua marca e suas fotos — é assim que
                entregamos em 7 dias sem abrir mão de qualidade.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ADV_TEMAS.map((t, i) => (
                <Reveal key={t.id} delay={i * 90}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-black/10 bg-surface transition hover:-translate-y-1 hover:border-gold-3/50 hover:shadow-[0_20px_50px_-25px_rgba(201,162,75,0.5)]">
                    {/* mini-preview do tema (100% CSS) */}
                    <div className="p-4">
                      <div className="overflow-hidden rounded-xl border border-black/10" style={{ background: t.cores.bg }}>
                        <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/5 px-3 py-2">
                          <span className="h-2 w-2 rounded-full bg-black/20" />
                          <span className="h-2 w-2 rounded-full bg-black/20" />
                          <span className="h-2 w-2 rounded-full bg-black/20" />
                        </div>
                        <div className="space-y-2 p-4">
                          <div className="h-2.5 w-3/4 rounded" style={{ background: t.cores.primary }} />
                          <div className="h-2 w-1/2 rounded opacity-40" style={{ background: t.cores.text }} />
                          <div className="mt-3 grid grid-cols-3 gap-1.5">
                            <div className="h-8 rounded" style={{ background: t.cores.accent, opacity: 0.5 }} />
                            <div className="h-8 rounded" style={{ background: t.cores.accent, opacity: 0.35 }} />
                            <div className="h-8 rounded" style={{ background: t.cores.accent, opacity: 0.5 }} />
                          </div>
                          <div className="mt-3 h-6 w-2/5 rounded-full" style={{ background: t.cores.primary }} />
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <h3 className="font-display text-xl font-bold text-neutral-900">{t.nome}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{t.estilo}</p>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-gold-deep">
                        Ideal p/ {t.ideal}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-12 text-center">
              <AdvBuyCta href="#planos" className="btn-gold px-8 py-4 text-sm uppercase tracking-widest">
                Escolher meu plano com desconto
              </AdvBuyCta>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Você escolhe o tema no briefing, depois de garantir a vaga
              </p>
            </Reveal>
          </div>
        </section>

        {/* ===== TRABALHOS ENTREGUES ===== */}
        <section className="bg-grid relative border-t border-black/10 bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ TRABALHOS ENTREGUES ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Sites reais que já <span className="text-gold-metal">entregamos.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Padrão de acabamento do estúdio — clique e navegue de verdade.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-12">
              <ModelosGaleria />
            </Reveal>
          </div>
        </section>

        {/* ===== PROCESSO ===== */}
        <section className="relative border-t border-black/10 bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal className="text-center">
              <div className="section-label">[ COMO FUNCIONA ]</div>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Do briefing ao ar com{" "}
                <span className="text-gold-metal">1 hora do seu tempo.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                Advogado cuida dos autos. Do site, cuidamos nós.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ADV_PROCESSO.map((p, i) => (
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

        {/* ===== GARANTIAS ===== */}
        <section className="bg-dots relative bg-base py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Reveal>
              <div className="section-label">[ GARANTIAS REAIS ]</div>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
                Sem promessa vazia:{" "}
                <span className="text-gold-metal">o combinado, em contrato.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ADV_GARANTIAS.map((g, i) => {
                const Icon = GARANTIA_ICON[i] ?? ShieldCheck;
                return (
                  <Reveal key={g.titulo} delay={i * 90}>
                    <div className="card-dark h-full p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-gold-metal">{g.titulo}</h3>
                      <p className="mt-2 text-sm text-white/80">{g.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

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
              {ADV_FAQ.map((f, i) => (
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
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(70% 60% at 50% 100%, rgba(201,162,75,0.14), transparent 65%)" }}
          />
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-100">
                <FileText className="mr-1.5 inline h-3.5 w-3.5" />
                Agosto é o Mês do Advogado
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Você levou anos construindo sua reputação.{" "}
                <span className="text-gold-shine">Em 7 dias, ela ganha o endereço que merece.</span>
              </h2>
              <p className="mt-5 text-neutral-300">
                De <span className="line-through">R$ 1.497</span> por{" "}
                <strong className="text-gold-100">R$ 897</strong> — um desconto de R$ 600 que
                encerra dia 31/08 ou com o fim do lote. Depois, volta ao preço normal.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <AdvBuyCta href="#planos" className="btn-gold px-9 py-4 text-sm uppercase tracking-widest">
                  Garantir meu site com 40% OFF
                </AdvBuyCta>
                <AdvCta
                  text={WA_GERAL}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 underline-offset-4 hover:text-gold-100 hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Prefere conversar antes? WhatsApp
                </AdvCta>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Restam {ADV_LOTE.restantes} vagas
                </p>
                <AdvCountdown className="text-neutral-500" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Rodapé MÍNIMO — sem links para o resto do site (página fechada) */}
      <footer className="border-t border-white/10 bg-dark py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:px-10">
          <Logo href="/advogados" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            JV WEB STUDIO · Sites para advogados · Publicidade em conformidade com o
            Provimento 205/2021 do CFOAB
          </p>
          <AdvCta text={WA_GERAL} className="btn-outline-gold px-6 py-2.5 text-[11px] uppercase tracking-widest">
            Falar no WhatsApp
          </AdvCta>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <AdvCta
        text={WA_GERAL}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-metal text-black shadow-[0_14px_40px_-10px_rgba(201,162,75,0.7)] transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Falar no WhatsApp</span>
      </AdvCta>
    </>
  );
}
