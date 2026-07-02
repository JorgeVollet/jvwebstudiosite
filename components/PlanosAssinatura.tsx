"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Crown, X, ArrowRight, Loader2 } from "lucide-react";
import { PLANOS_ASSINATURA, type PlanoAssinatura } from "@/lib/planos-assinatura";
import { SITE } from "@/lib/site";

/* Cards dos 3 planos com toggle Mensal / Anual.
   Ao clicar, abre um modal (via portal no body, com blur no site atrás) que
   captura Nome/E-mail/Telefone (vira lead no /api/leads) e SÓ DEPOIS redireciona
   pro checkout — assim conseguimos ir atrás de quem não concluir a compra. */
export default function PlanosAssinatura() {
  const [anual, setAnual] = useState(false);
  const [modal, setModal] = useState<PlanoAssinatura | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const waBase = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "#";
  const waLink = (msg: string) =>
    SITE.whatsapp ? `${waBase}?text=${encodeURIComponent(msg)}` : "#contato";

  function ctaLink(p: PlanoAssinatura) {
    const checkout = anual ? p.checkoutAnual : p.checkoutMensal;
    return checkout && checkout.trim() ? checkout : waLink(p.waMsg);
  }

  // ESC fecha o modal + trava scroll
  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && !loading) setModal(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modal, loading]);

  function abrir(p: PlanoAssinatura) {
    setErro("");
    setModal(p);
  }

  async function irParaCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!modal) return;
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const telefone = String(fd.get("telefone") || "").trim();
    if (!nome || !email || !telefone) {
      setErro("Preencha nome, e-mail e telefone.");
      return;
    }
    setLoading(true); setErro("");

    const periodo = anual ? "Anual" : "Mensal";
    const preco = anual ? modal.precoAnual : modal.precoMensal;
    const destino = ctaLink(modal);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome, email, telefone,
          empresa: null,
          busca: `INTENÇÃO DE COMPRA · Plano ${modal.nome} (${periodo}) · R$${preco} · seguiu para o checkout`,
          origem: "planos-checkout",
        }),
      });
    } catch { /* segue pro checkout mesmo se o registro falhar */ }

    try { localStorage.setItem("jv_plano", modal.id); } catch {}

    window.location.href = destino;
  }

  const modalNode = modal && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-md"
      onClick={() => !loading && setModal(null)}
    >
      <div
        className="card-dark gold-border relative w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => !loading && setModal(null)}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 transition hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-100">
          Plano {modal.nome} · {anual ? "Anual" : "Mensal"}
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">
          Falta pouco para começar
        </h3>
        <p className="mt-1 text-sm text-neutral-400">
          Preencha seus dados para seguir para o checkout seguro.
        </p>

        <form onSubmit={irParaCheckout} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/90">Nome</label>
            <input
              name="nome"
              required
              autoFocus
              placeholder="Seu nome completo"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-3 focus:ring-1 focus:ring-gold-3"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/90">E-mail</label>
            <input
              name="email"
              type="email"
              required
              placeholder="voce@email.com"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-3 focus:ring-1 focus:ring-gold-3"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white/90">Telefone</label>
            <input
              name="telefone"
              required
              placeholder="(00) 00000-0000"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-3 focus:ring-1 focus:ring-gold-3"
            />
          </div>

          {erro && <p className="text-sm text-red-400">{erro}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-4 text-sm uppercase tracking-widest disabled:opacity-60"
          >
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Indo pro checkout…</> : <>Ir para o checkout <ArrowRight className="h-4 w-4" /></>}
          </button>
          <p className="text-center text-[11px] text-neutral-500">
            Seus dados são só para acompanharmos seu pedido.
          </p>
        </form>
      </div>
    </div>
  );

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
          Anual <span className="text-gold-100">(melhor preço)</span>
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

              <button
                type="button"
                onClick={() => abrir(p)}
                className={`mt-8 inline-flex w-full items-center justify-center px-6 py-4 text-sm uppercase tracking-widest ${
                  p.destaque ? "btn-gold" : "btn-outline-gold"
                }`}
              >
                {p.cta}
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-neutral-500">
        Sem custo de criação · Cancele quando quiser · Entrega em até 48h
      </p>

      {/* Modal via portal no body (escapa de ancestrais com transform) */}
      {mounted && modalNode ? createPortal(modalNode, document.body) : null}
    </div>
  );
}
