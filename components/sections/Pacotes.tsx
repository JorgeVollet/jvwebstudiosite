"use client";

import { Check, Star, Server, CreditCard, LifeBuoy } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PACOTES, MENSALIDADE_INFRA, PAGAMENTOS, SUPORTE } from "@/lib/pacotes";
import { SITE } from "@/lib/site";

export default function Pacotes() {
  const waBase = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "#contato";
  const waLink = (pacote: string) =>
    SITE.whatsapp
      ? `${waBase}?text=${encodeURIComponent(
          `Olá! Vim pelo site da JV WEB STUDIO e quero um orçamento do pacote ${pacote}.`,
        )}`
      : "#contato";

  return (
    <section id="pacotes" className="section-dark relative border-t border-white/10 bg-dark py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ PLANOS · PACOTES DISPONÍVEIS ]</div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Nossos <span className="text-gold-metal">Pacotes</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700">
            Três níveis pensados para cada momento do seu negócio — da presença online
            à máquina de clientes. O valor final é sempre um orçamento personalizado,
            entregue em até <strong className="text-gold-100">2 dias úteis</strong>.
          </p>
        </Reveal>

        {/* Cards de pacote */}
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {PACOTES.map((p, i) => (
            <Reveal key={p.nome} delay={i * 120} className="h-full">
              <div
                className={`pacote-card group relative flex h-full flex-col p-8 ${
                  p.destaque ? "pacote-card--destaque" : ""
                }`}
              >
                {p.destaque && (
                  <span className="pacote-badge">
                    <Star className="h-3 w-3" /> Mais escolhido
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {p.medal}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-none">{p.nome}</h3>
                    <p className="mt-1 tech-mono text-[11px] uppercase tracking-widest text-gold-100/80">
                      {p.conceito}
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px w-full bg-gradient-to-r from-gold-3/50 via-gold-3/20 to-transparent" />

                <div>
                  <div className="font-display text-3xl font-bold text-gold-metal">{p.faixa}</div>
                  {p.faixaNota && <p className="mt-1 text-xs text-neutral-500">{p.faixaNota}</p>}
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(p.nome)}
                  target={SITE.whatsapp ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest ${
                    p.destaque ? "btn-gold" : "btn-outline-gold"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Adendo: como o valor varia */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-gold-3/40 bg-gold-3/10 p-6 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-3/40 bg-gold-3/10 text-gold-100">
              <Star className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg font-bold text-gold-100">
                Importante: o valor de cada pacote é personalizado
              </p>
              <p className="mt-1 text-sm text-neutral-300">
                O preço varia conforme a <strong className="text-gold-100">quantidade de seções</strong> e de{" "}
                <strong className="text-gold-100">sistemas integrados</strong> que você precisa. Como padrão, o pacote
                Profissional já inicia com <strong className="text-gold-100">8 seções e 1 sistema integrado</strong>.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Faixa: mensalidade de infraestrutura */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-gold-3/25 bg-black/40 p-6 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-3/30 text-gold-100">
              <Server className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg font-bold">
                + <span className="text-gold-metal">{MENSALIDADE_INFRA.valor}</span> de infraestrutura
                <span className="ml-2 align-middle tech-mono text-[11px] font-normal uppercase tracking-widest text-neutral-500">
                  · além do valor do site
                </span>
              </p>
              <p className="mt-1 text-sm text-neutral-400">{MENSALIDADE_INFRA.desc}</p>
            </div>
          </div>
        </Reveal>

        {/* Pagamento + Suporte */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal delay={200}>
            <div className="glass-glow h-full p-7">
              <div className="flex items-center gap-2.5 text-gold-100">
                <CreditCard className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-ink">Formas de pagamento</h3>
              </div>
              <div className="mt-5 space-y-4">
                {PAGAMENTOS.map((p) => (
                  <div key={p.titulo}>
                    <p className="text-sm font-semibold text-gold-100/90">{p.titulo}</p>
                    <p className="mt-0.5 text-sm text-neutral-400">{p.desc}</p>
                    {p.enfase && (
                      <span className="mt-2 inline-block rounded-md border border-gold-3/40 bg-gold-3/10 px-2.5 py-1 tech-mono text-[11px] font-bold uppercase tracking-wider text-gold-100">
                        {p.enfase}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="glass-glow h-full p-7">
              <div className="flex items-center gap-2.5 text-gold-100">
                <LifeBuoy className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-ink">
                  Suporte <span className="text-neutral-500">(após os 3 meses grátis)</span>
                </h3>
              </div>
              <div className="mt-5 space-y-4">
                {SUPORTE.map((s) => (
                  <div key={s.titulo}>
                    <p className="text-sm font-semibold text-gold-100/90">{s.titulo}</p>
                    <p className="mt-0.5 text-sm text-neutral-400">{s.desc}</p>
                  </div>
                ))}
              </div>
              {/* Benefício: desconto na infraestrutura ao contratar suporte */}
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-gold-3/30 bg-gold-3/10 p-3.5">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" />
                <p className="text-sm text-gold-100">
                  Contratando o suporte, você ganha{" "}
                  <strong className="font-semibold">R$ 50 de desconto</strong> na
                  infraestrutura mensal do site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-center text-xs text-neutral-500">
            Sistemas SaaS sob medida a partir de R$ 4.000 · todo projeto inclui implementação +
            3 meses de suporte grátis. Fale com a gente e montamos a proposta ideal pro seu caso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
