"use client";
import { useState } from "react";
import { Check, Crown } from "lucide-react";
import { PLANOS_ASSINATURA } from "@/lib/planos-assinatura";
import { SITE } from "@/lib/site";

/* Cards dos 3 planos com toggle Mensal / Anual.
   Botão usa o link de checkout (Kiwify/MP) do período escolhido se houver;
   senão cai no WhatsApp (fallback) — assim nunca fica quebrado. */
export default function PlanosAssinatura() {
  const [anual, setAnual] = useState(false);

  const waBase = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "#";
  const waLink = (msg: string) =>
    SITE.whatsapp ? `${waBase}?text=${encodeURIComponent(msg)}` : "#contato";

  function ctaLink(p: (typeof PLANOS_ASSINATURA)[number]) {
    const checkout = anual ? p.checkoutAnual : p.checkoutMensal;
    return checkout && checkout.trim() ? checkout : waLink(p.waMsg);
  }

  return (
    <div>
      {/* Toggle Mensal / Anual */}
      <div className="mb-12 flex items-center justify-center gap-4">
        <span className={`text-sm font-medium ${!anual ? "text-gold-metal" : "text-neutral-500"}`}>
          Mensal
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={anual}
          onClick={() => setAnual((v) => !v)}
          className="relative h-7 w-14 rounded-full border border-gold-3/50 bg-black/40 transition"
        >
          <span
            className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-gold-metal transition-all ${
              anual ? "left-[34px]" : "left-1"
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${anual ? "text-gold-metal" : "text-neutral-500"}`}>
          Anual <span className="text-gold-100">(2 meses grátis)</span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {PLANOS_ASSINATURA.map((p) => {
          const preco = anual ? p.precoAnual : p.precoMensal;
          const periodo = anual ? "/ano" : "/mês";
          return (
            <div
              key={p.id}
              className={`pacote-card relative flex flex-col p-8 ${
                p.destaque ? "pacote-card--destaque" : ""
              }`}
            >
              {p.destaque && (
                <span className="pacote-badge">
                  <Crown className="h-3 w-3" /> Mais escolhido
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-white">{p.nome}</h3>
              <p className="mt-1 text-sm text-neutral-400">{p.conceito}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-2xl font-bold text-gold-100">R$</span>
                <span className="font-display text-5xl font-bold text-gold-metal">{preco}</span>
                <span className="mb-1 text-sm text-neutral-400">{periodo}</span>
              </div>
              {anual && p.economiaAnual && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-100">
                  {p.economiaAnual}
                </p>
              )}
              {!anual && (
                <p className="mt-1 text-xs text-neutral-500">sem custo de criação</p>
              )}

              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={ctaLink(p)}
                target="_blank"
                rel="noopener"
                className={`mt-8 inline-flex w-full items-center justify-center px-6 py-4 text-sm uppercase tracking-widest ${
                  p.destaque ? "btn-gold" : "btn-outline-gold"
                }`}
              >
                {p.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-neutral-500">
        Sem custo de criação · Cancele quando quiser · Entrega em até 48h
      </p>
    </div>
  );
}
