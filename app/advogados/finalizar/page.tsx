import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import AdvCountdown from "@/components/advogados/AdvCountdown";
import AdvCta from "@/components/advogados/AdvCta";
import AdvBuyCta from "@/components/advogados/AdvBuyCta";
import AdvPixel from "@/components/advogados/AdvPixel";
import { ADV_PLANOS, ADV_PAGAMENTO, ADV_LOTE, ADV_WHATS } from "@/lib/advogados";
import {
  Check, ShieldCheck, Sparkles, Award, QrCode, CreditCard, ArrowLeft,
  MessageCircle, FileText, Palette, Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Finalizar — Mês do Advogado · JV WEB STUDIO",
  description: "Garanta seu site de advogado com a condição do Mês do Advogado.",
  robots: { index: false, follow: false },
};

const POS_PAGAMENTO = [
  {
    icon: FileText,
    t: "1 · Briefing guiado (30 min)",
    d: "Logo após o pagamento você é direcionado ao briefing oficial — é dele que sai toda a copy do seu site.",
  },
  {
    icon: Palette,
    t: "2 · Escolha do tema + materiais",
    d: "No próprio briefing você escolhe 1 dos 4 temas exclusivos e depois envia logo e fotos pelo WhatsApp.",
  },
  {
    icon: Rocket,
    t: "3 · Site no ar",
    d: "Produção começa no mesmo dia útil. Em até 7 dias úteis (Essencial) ou 15 (Autoridade), sua advocacia tem endereço próprio.",
  },
];

function waPagamento(texto: string) {
  return `https://wa.me/${ADV_WHATS}?text=${encodeURIComponent(texto)}`;
}

export default function FinalizarPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const planoId = typeof searchParams.plano === "string" ? searchParams.plano : "";
  const plano = ADV_PLANOS.find((p) => p.id === planoId);

  return (
    <>
      <AdvPixel />
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-10">
          <Logo href="/advogados" />
          <AdvCta
            text="Olá! Estou finalizando meu site do Mês do Advogado e fiquei com uma dúvida."
            className="btn-outline-gold px-5 py-2.5 text-[11px] uppercase tracking-widest"
          >
            Dúvidas? WhatsApp
          </AdvCta>
        </div>
      </header>

      <main className="section-dark relative min-h-screen overflow-hidden bg-dark pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 55% at 50% 0%, rgba(201,162,75,0.15), transparent 65%)" }}
        />

        {!plano ? (
          /* ===== SEM PLANO NA URL — escolher aqui ===== */
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-100">
                Finalizar · Mês do Advogado
              </span>
              <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Qual site você quer <span className="text-gold-shine">garantir?</span>
              </h1>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {ADV_PLANOS.map((p) => (
                  <AdvBuyCta
                    key={p.id}
                    href={`/advogados/finalizar?plano=${p.id}`}
                    className="card-dark block p-7 text-left transition hover:-translate-y-1"
                  >
                    <h2 className="font-display text-xl font-bold text-white">{p.nome}</h2>
                    <p className="mt-1 text-sm text-neutral-400">{p.conceito}</p>
                    <p className="mt-4 font-display text-2xl font-bold text-gold-metal">
                      {p.precoPor} <span className="text-sm font-normal text-neutral-400">à vista · {p.off}</span>
                    </p>
                    <span className="btn-gold mt-5 inline-flex px-5 py-2.5 text-[11px] uppercase tracking-widest">
                      Escolher este
                    </span>
                  </AdvBuyCta>
                ))}
              </div>
            </Reveal>
          </div>
        ) : (
          /* ===== CHECKOUT DO PLANO ===== */
          <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
            <Reveal>
              <div className="text-center">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-100">
                  Finalizar · Mês do Advogado
                </span>
                <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Falta pouco para sua advocacia ter{" "}
                  <span className="text-gold-shine">um site à altura.</span>
                </h1>
              </div>

              {/* Resumo do pedido */}
              <div className="pacote-card mt-10 p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold">{plano.nome}</h2>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-gold-100/80">
                      {plano.conceito} · {plano.entrega}
                    </p>
                  </div>
                  <span className="rounded-full border border-gold-3/50 bg-gold-3/15 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-gold-100">
                    Você economiza {plano.economia} · {plano.off}
                  </span>
                </div>

                <div className="my-6 h-px w-full bg-gradient-to-r from-gold-3/50 via-gold-3/20 to-transparent" />

                <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                  <div>
                    <p className="text-sm text-neutral-500">
                      preço normal: <span className="line-through">{plano.precoDe}</span>
                    </p>
                    <p className="font-display text-5xl font-bold text-gold-metal">{plano.precoPor}</p>
                  </div>
                  <p className="mb-1.5 text-sm text-neutral-300">
                    à vista no Pix · ou <strong className="text-gold-100">{plano.parcela}</strong> no cartão
                  </p>
                </div>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {plano.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" /> {f}
                    </li>
                  ))}
                  {plano.bonus.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gold-100/90">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Lote: restam {ADV_LOTE.restantes} vagas · <AdvCountdown className="!text-neutral-500" />
                </p>
              </div>

              {/* Pagamento */}
              <h3 className="mt-12 text-center font-display text-2xl font-bold text-white">
                Escolha como pagar <span className="text-gold-metal">— seguro, via Mercado Pago</span>
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {/* PIX */}
                <div className="card-dark relative flex flex-col p-7">
                  <span className="pacote-badge">Melhor preço</span>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                      <QrCode className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">Pix à vista</h4>
                      <p className="text-xs text-neutral-400">confirmação na hora</p>
                    </div>
                  </div>
                  <p className="mt-5 font-display text-3xl font-bold text-gold-metal">{plano.precoPor}</p>
                  <div className="flex-1" />
                  <AdvBuyCta
                    href={
                      ADV_PAGAMENTO[plano.id as "essencial" | "autoridade"].pix ||
                      waPagamento(`Quero pagar o ${plano.nome} no Pix (${plano.precoPor}).`)
                    }
                    external
                    event="AddPaymentInfo"
                    className="btn-gold mt-6 inline-flex w-full items-center justify-center px-6 py-4 text-xs uppercase tracking-widest"
                  >
                    Pagar com Pix
                  </AdvBuyCta>
                </div>
                {/* Cartão */}
                <div className="card-dark flex flex-col p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-3/40 text-gold-100">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">Cartão de crédito</h4>
                      <p className="text-xs text-neutral-400">parcele em até 12x</p>
                    </div>
                  </div>
                  <p className="mt-5 font-display text-3xl font-bold text-white">
                    {plano.parcela.replace("12x de ", "")}
                    <span className="ml-2 align-middle text-sm font-normal text-neutral-400">× 12</span>
                  </p>
                  <div className="flex-1" />
                  <AdvBuyCta
                    href={
                      ADV_PAGAMENTO[plano.id as "essencial" | "autoridade"].cartao ||
                      waPagamento(`Quero pagar o ${plano.nome} no cartão (${plano.parcela}).`)
                    }
                    external
                    event="AddPaymentInfo"
                    className="btn-outline-gold mt-6 inline-flex w-full items-center justify-center px-6 py-4 text-xs uppercase tracking-widest"
                  >
                    Pagar no cartão
                  </AdvBuyCta>
                </div>
              </div>

              {/* O que acontece depois */}
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {POS_PAGAMENTO.map((s) => (
                  <div key={s.t} className="card-dark h-full p-6">
                    <s.icon className="h-5 w-5 text-gold-100" />
                    <h4 className="mt-3 font-display text-base font-bold text-white">{s.t}</h4>
                    <p className="mt-1.5 text-sm text-neutral-400">{s.d}</p>
                  </div>
                ))}
              </div>

              {/* Segurança + dúvidas */}
              <div className="mt-10 flex flex-col items-center gap-4 text-center">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  <ShieldCheck className="h-4 w-4 text-gold-100" />
                  Pagamento processado pelo Mercado Pago · 3 rodadas de ajustes · prazo em contrato
                </p>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  <Award className="h-4 w-4 text-gold-100" />
                  Publicidade em conformidade com o Provimento 205/2021 da OAB
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-5">
                  <a
                    href="/advogados#planos"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 underline-offset-4 hover:text-gold-100 hover:underline"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Voltar aos planos
                  </a>
                  <AdvCta
                    text={`Olá! Estou na página de pagamento do ${plano.nome} e fiquei com uma dúvida.`}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 underline-offset-4 hover:text-gold-100 hover:underline"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Tirar dúvida no WhatsApp
                  </AdvCta>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </main>
    </>
  );
}
