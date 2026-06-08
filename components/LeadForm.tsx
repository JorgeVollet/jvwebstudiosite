"use client";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export type LeadFormProps = {
  origem?: string;
  cupom?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

export default function LeadForm({ origem = "popup", cupom, compact, onSuccess }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      nome: fd.get("nome"), telefone: fd.get("telefone"), email: fd.get("email"),
      empresa: fd.get("empresa"), busca: fd.get("busca"), instagram: fd.get("instagram"),
      origem, cupom,
    };
    try {
      const res = await fetch("/api/leads", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Erro ao enviar.");
      setDone(true); onSuccess?.();
    } catch (err: any) {
      setError(err.message);
    } finally { setLoading(false); }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold-100" />
        <h3 className="font-display text-2xl font-bold">Cadastro confirmado! ✦</h3>
        {cupom && (
          <p className="text-neutral-300">
            Seu cupom: <span className="font-mono font-bold text-gold-metal">{cupom}</span> — 20% OFF
            no seu primeiro projeto.
          </p>
        )}
        <p className="text-sm text-neutral-400">Entraremos em contato em até 24 horas úteis.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-3 focus:ring-1 focus:ring-gold-3";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className={compact ? "" : "grid gap-3 sm:grid-cols-2"}>
        <input name="nome" required placeholder="Seu nome *" className={field} />
        <input name="telefone" required placeholder="Telefone / WhatsApp *" className={field} />
      </div>
      <div className={compact ? "" : "grid gap-3 sm:grid-cols-2"}>
        <input name="email" type="email" required placeholder="E-mail *" className={field} />
        <input name="empresa" placeholder="Empresa / Nicho" className={field} />
      </div>
      <div className={compact ? "" : "grid gap-3 sm:grid-cols-2"}>
        <input name="instagram" placeholder="@seu_instagram" className={field} />
        <input name="busca" placeholder="O que você busca?" className={field} />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={loading}
        className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-4 text-sm uppercase tracking-widest disabled:opacity-60">
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</> :
          cupom ? "Quero meu cupom 20% OFF" : "Enviar"}
      </button>
      <p className="text-center text-[11px] text-neutral-500">
        Seus dados ficam seguros. Sem spam — só contato sobre o seu projeto.
      </p>
    </form>
  );
}
