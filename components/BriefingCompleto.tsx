"use client";
import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, Send, Check, Lock } from "lucide-react";
import { SITE } from "@/lib/site";
import { PLANOS_ASSINATURA } from "@/lib/planos-assinatura";

/* Paletas / estilos prontos pra quem fica perdido na hora de escolher cor.
   O cliente clica no card; a paleta escolhida vai junto no briefing. */
type Paleta = { id: string; nome: string; desc: string; cores: string[] };
const PALETAS: Paleta[] = [
  { id: "preto-dourado", nome: "Preto & Dourado", desc: "Luxo, premium, sofisticado", cores: ["#0a0a0a", "#8c6d2f", "#c9a24b", "#f4d88a"] },
  { id: "azul-confianca", nome: "Azul Confiança", desc: "Corporativo, saúde, tecnologia", cores: ["#0f2f5f", "#2563eb", "#60a5fa", "#f1f5f9"] },
  { id: "verde-natural", nome: "Verde Natural", desc: "Bem-estar, orgânico, sustentável", cores: ["#14532d", "#16a34a", "#86efac", "#f2fbe9"] },
  { id: "rosa-nude", nome: "Rosa & Nude", desc: "Beleza, estética, delicado", cores: ["#7a3b52", "#d98da5", "#f3c9d4", "#fdf2f5"] },
  { id: "vermelho-preto", nome: "Vermelho & Preto", desc: "Gastronomia, energia, força", cores: ["#171717", "#b91c1c", "#ef4444", "#fdeaea"] },
  { id: "terroso", nome: "Terroso Aconchego", desc: "Artesanal, café, rústico", cores: ["#4a2f1b", "#a97449", "#d9b38c", "#f5ece0"] },
  { id: "roxo-criativo", nome: "Roxo Criativo", desc: "Moderno, criativo, digital", cores: ["#3b1f6e", "#7c3aed", "#c4b5fd", "#f5f3ff"] },
  { id: "clean-minimal", nome: "Clean Minimalista", desc: "Neutro, elegante, atemporal", cores: ["#111111", "#6b7280", "#d1d5db", "#ffffff"] },
];

/* Briefing pós-compra (página de obrigado da Kiwify).
   Coleta o essencial pra montar o site e envia pro /api/leads
   (origem "assinatura-briefing") — cai no painel/Supabase do Jorge. */
export default function BriefingCompleto() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [paleta, setPaleta] = useState("");
  const [resumo, setResumo] = useState({ nome: "", plano: "", negocio: "" });
  const [planoLock, setPlanoLock] = useState("");

  // Descobre o plano contratado pela URL (?plano=) ou pelo localStorage
  // (gravado no funil) e trava o campo pra evitar confusão.
  useEffect(() => {
    let id = "";
    try {
      id = (new URLSearchParams(window.location.search).get("plano") || "").toLowerCase().trim();
      if (!id) id = (localStorage.getItem("jv_plano") || "").toLowerCase().trim();
    } catch {}
    const found = PLANOS_ASSINATURA.find((p) => p.id === id);
    if (found) {
      setPlanoLock(found.nome);
      try { localStorage.setItem("jv_plano", found.id); } catch {}
    }
  }, []);

  const field =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-3 focus:ring-1 focus:ring-gold-3";
  const label = "block text-sm font-medium text-white/90 mb-1.5";

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "");
    const telefone = String(fd.get("telefone") || "");
    const email = String(fd.get("email") || "");
    if (!nome || !telefone || !email) {
      setError("Preencha nome, WhatsApp e e-mail.");
      return;
    }
    setLoading(true); setError("");

    const detalhe = String(fd.get("coresDetalhe") || "").trim();
    const coresFinal = [paleta ? `Paleta: ${paleta}` : "", detalhe]
      .filter(Boolean).join(" — ") || "—";

    const busca = [
      `PLANO: ${planoLock || fd.get("plano") || "—"}`,
      `Negócio/Nicho: ${fd.get("negocio") || "—"}`,
      `Já tem logo/identidade: ${fd.get("identidade") || "—"}`,
      `Cores/estilo: ${coresFinal}`,
      `O que oferece: ${fd.get("oferta") || "—"}`,
      `Contatos p/ o site: ${fd.get("contatos") || "—"}`,
      `Domínio desejado: ${fd.get("dominio") || "—"}`,
      `Observações: ${fd.get("obs") || "—"}`,
    ].join(" | ");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome, telefone, email,
          empresa: fd.get("negocio") || null,
          instagram: fd.get("instagram") || null,
          busca,
          origem: "assinatura-briefing",
        }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Erro ao enviar.");
      const plano = planoLock || String(fd.get("plano") || "");
      const negocioNome = String(fd.get("negocio") || "");
      setResumo({ nome, plano, negocio: negocioNome });
      setDone(true);
    } catch (err: any) {
      setError(err.message);
    } finally { setLoading(false); }
  }

  if (done) {
    const msg = `Olá! Sou ${resumo.nome}. Acabei de contratar o plano ${resumo.plano || "de assinatura"} da JV WEB STUDIO e enviei o briefing do meu site${resumo.negocio ? ` (${resumo.negocio})` : ""}. Quero começar! ✦`;
    const wa = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}` : "#";
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <CheckCircle2 className="h-16 w-16 text-gold-100" />
        <h3 className="font-display text-2xl font-bold text-white">Briefing enviado! ✦</h3>
        <p className="max-w-md text-neutral-300">
          Recebi tudo que preciso pra começar. Seu site fica pronto em até{" "}
          <strong className="text-gold-metal">48 horas úteis</strong>. Se quiser adiantar,
          abra o meu WhatsApp no botão abaixo e me manda um oi. ✦
        </p>
        {SITE.whatsapp && (
          <a href={wa} target="_blank" rel="noopener" className="btn-gold mt-2 px-7 py-3 text-sm uppercase tracking-widest">
            Abrir o meu WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Dados de contato */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Seu nome *</label>
          <input name="nome" required className={field} placeholder="Nome completo" />
        </div>
        <div>
          <label className={label}>WhatsApp *</label>
          <input name="telefone" required className={field} placeholder="(00) 00000-0000" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>E-mail *</label>
          <input name="email" type="email" required className={field} placeholder="voce@email.com" />
        </div>
        <div>
          <label className={label}>Plano contratado</label>
          {planoLock ? (
            <div className="flex items-center gap-2 rounded-lg border border-gold-3/40 bg-gold-3/10 px-4 py-3 text-sm">
              <Lock className="h-4 w-4 shrink-0 text-gold-100" />
              <span className="font-semibold text-white">{planoLock}</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-gold-100">Confirmado</span>
            </div>
          ) : (
            <select name="plano" className={field} defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Essencial</option>
              <option>Profissional</option>
              <option>Completo</option>
            </select>
          )}
        </div>
      </div>

      {/* Sobre o negócio */}
      <div>
        <label className={label}>Nome do seu negócio / nicho *</label>
        <input name="negocio" required className={field} placeholder="Ex.: Clínica Sorriso · Odontologia" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>@ do Instagram</label>
          <input name="instagram" className={field} placeholder="@seu_negocio" />
        </div>
        <div>
          <label className={label}>Já tem logo / identidade visual?</label>
          <select name="identidade" className={field} defaultValue="">
            <option value="" disabled>Selecione</option>
            <option>Sim, tenho logo e cores</option>
            <option>Tenho só o logo</option>
            <option>Não tenho — preciso de ajuda</option>
          </select>
        </div>
      </div>

      {/* Estilo / paleta — caixaria visual */}
      <div>
        <label className={label}>Qual estilo combina com o seu negócio?</label>
        <p className="mb-3 text-xs text-neutral-500">
          Escolha a paleta que mais te agrada — se estiver na dúvida, a gente ajusta depois. ✦
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {PALETAS.map((p) => {
            const sel = paleta === p.nome;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPaleta(sel ? "" : p.nome)}
                aria-pressed={sel}
                className={`group relative flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                  sel
                    ? "border-gold-3 bg-gold-3/10 ring-1 ring-gold-3"
                    : "border-white/10 bg-black/40 hover:border-white/25"
                }`}
              >
                <div className="flex shrink-0 overflow-hidden rounded-lg border border-white/10">
                  {p.cores.map((c) => (
                    <span key={c} style={{ backgroundColor: c }} className="h-11 w-5" />
                  ))}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">{p.nome}</p>
                  <p className="truncate text-xs text-neutral-400">{p.desc}</p>
                </div>
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                    sel ? "border-gold-3 bg-gold-3 text-black" : "border-white/20 text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
              </button>
            );
          })}
        </div>
        <input
          name="coresDetalhe"
          className={`${field} mt-3`}
          placeholder="Quer detalhar? Ex.: gosto de azul, algo clean… (opcional)"
        />
      </div>

      <div>
        <label className={label}>O que você oferece (serviços/produtos)</label>
        <textarea name="oferta" rows={3} className={field} placeholder="Descreva rapidamente o que seu negócio faz e o que quer destacar no site" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Contatos que aparecem no site</label>
          <input name="contatos" className={field} placeholder="WhatsApp, e-mail, endereço…" />
        </div>
        <div>
          <label className={label}>Domínio desejado (se tiver)</label>
          <input name="dominio" className={field} placeholder="seunegocio.com.br" />
        </div>
      </div>
      <div>
        <label className={label}>Observações / referências</label>
        <textarea name="obs" rows={2} className={field} placeholder="Sites que você curte, algo que não pode faltar, etc." />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-4 text-sm uppercase tracking-widest disabled:opacity-60"
      >
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</> : <>Enviar briefing <Send className="h-4 w-4" /></>}
      </button>
      <p className="text-center text-[11px] text-neutral-500">
        Assim que enviar, começo seu site. Entrega em até 48h úteis.
      </p>
    </form>
  );
}
