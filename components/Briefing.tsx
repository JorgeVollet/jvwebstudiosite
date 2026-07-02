"use client";
import { useState } from "react";
import {
  Loader2, CheckCircle2, ArrowRight, ArrowLeft,
  Globe, Palette, Rocket, MessageSquare,
} from "lucide-react";
import { submitLead } from "@/lib/submitLead";

/* ------------------------------------------------------------------ *
 * Quiz / briefing interativo multi-etapas
 * Envia para /api/leads (mesmo endpoint do LeadForm), empacotando as
 * respostas do quiz no campo "busca" para não exigir migração no banco.
 * ------------------------------------------------------------------ */

type Paleta = { nome: string; cores: [string, string, string] };

const PALETAS: Paleta[] = [
  { nome: "Preto & Dourado", cores: ["#0a0a0a", "#c9a24b", "#f4d88a"] },
  { nome: "Clean & Azul", cores: ["#ffffff", "#1e3a8a", "#3b82f6"] },
  { nome: "Verde Natureza", cores: ["#0f3d2e", "#10b981", "#d1fae5"] },
  { nome: "Quente & Vibrante", cores: ["#1a1a1a", "#ea580c", "#fbbf24"] },
  { nome: "Rosé & Elegante", cores: ["#1c1117", "#be185d", "#fbcfe8"] },
  { nome: "Ainda não sei", cores: ["#262626", "#737373", "#a3a3a3"] },
];

const TIPOS = [
  "Landing page (1 página)",
  "Site institucional",
  "E-commerce / loja",
  "Sistema / plataforma web",
  "Automação N8N",
  "Ainda não sei",
];

export default function Briefing() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  // respostas
  const [tipo, setTipo] = useState("");
  const [temSite, setTemSite] = useState("");
  const [temIdentidade, setTemIdentidade] = useState("");
  const [paleta, setPaleta] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nicho, setNicho] = useState("");

  const TOTAL = 6; // 0..4 perguntas + 5 contato
  const pct = Math.round(((step + 1) / (TOTAL)) * 100);

  function next() { setStep((s) => Math.min(s + 1, TOTAL - 1)); }
  function back() { setStep((s) => Math.max(s - 1, 0)); }

  async function submit() {
    if (!nome || !telefone || !email) {
      setError("Preencha nome, WhatsApp e e-mail para enviar.");
      return;
    }
    setLoading(true); setError("");
    const busca = [
      `Projeto: ${tipo || "—"}`,
      `Já tem site: ${temSite || "—"}`,
      `Identidade visual: ${temIdentidade || "—"}`,
      `Paleta preferida: ${paleta || "—"}`,
      `Descrição: ${descricao || "—"}`,
    ].join(" | ");

    const { ok, error: errMsg } = await submitLead({
      nome, telefone, email, empresa: nicho, busca, origem: "briefing",
    });
    setLoading(false);
    if (!ok) { setError(errMsg || "Erro ao enviar."); return; }
    try { localStorage.setItem("jv_lead_enviado", "1"); } catch {}
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="h-16 w-16 text-gold-100" />
        <h3 className="font-display text-2xl font-bold text-white">
          Briefing recebido! ✦
        </h3>
        <p className="max-w-md text-neutral-300">
          Já tenho o essencial do seu projeto. Vou preparar a sua{" "}
          <strong className="text-gold-metal">demonstração grátis</strong> e te
          chamo no WhatsApp em até 24 horas úteis.
        </p>
        <p className="text-sm text-neutral-500">
          Quer adiantar? Me chama agora mesmo.
        </p>
      </div>
    );
  }

  const optBtn =
    "w-full rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition";
  const optOff =
    "border-white/10 bg-black/40 text-white/90 hover:border-gold-3/60 hover:bg-gold-3/5";
  const optOn =
    "border-gold-3 bg-gold-3/15 text-white shadow-[0_0_24px_-10px_rgba(201,162,75,0.7)]";
  const field =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-3 focus:ring-1 focus:ring-gold-3";

  return (
    <div>
      {/* progresso */}
      <div className="mb-6">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-gold-100">
          <span>Etapa {step + 1} de {TOTAL}</span>
          <span>{pct}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-4 via-gold-3 to-gold-1 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* etapa 0 — tipo de projeto */}
      {step === 0 && (
        <Etapa icon={Rocket} titulo="O que você precisa criar?">
          <div className="grid gap-2.5 sm:grid-cols-2">
            {TIPOS.map((t) => (
              <button key={t} type="button"
                onClick={() => { setTipo(t); next(); }}
                className={`${optBtn} ${tipo === t ? optOn : optOff}`}>
                {t}
              </button>
            ))}
          </div>
        </Etapa>
      )}

      {/* etapa 1 — já tem site */}
      {step === 1 && (
        <Etapa icon={Globe} titulo="Você já tem um site hoje?">
          <div className="grid gap-2.5">
            {["Sim, mas quero refazer", "Sim, e está ok — quero outro projeto", "Não, seria o meu primeiro"].map((t) => (
              <button key={t} type="button"
                onClick={() => { setTemSite(t); next(); }}
                className={`${optBtn} ${temSite === t ? optOn : optOff}`}>
                {t}
              </button>
            ))}
          </div>
        </Etapa>
      )}

      {/* etapa 2 — identidade visual */}
      {step === 2 && (
        <Etapa icon={Palette} titulo="Você já tem identidade visual (logo, cores)?">
          <div className="grid gap-2.5">
            {["Sim, tenho logo e cores definidas", "Tenho só o logo", "Não tenho nada ainda — preciso de ajuda"].map((t) => (
              <button key={t} type="button"
                onClick={() => { setTemIdentidade(t); next(); }}
                className={`${optBtn} ${temIdentidade === t ? optOn : optOff}`}>
                {t}
              </button>
            ))}
          </div>
        </Etapa>
      )}

      {/* etapa 3 — paleta */}
      {step === 3 && (
        <Etapa icon={Palette} titulo="Qual estilo visual combina com a sua marca?">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {PALETAS.map((p) => (
              <button key={p.nome} type="button"
                onClick={() => { setPaleta(p.nome); next(); }}
                className={`flex flex-col gap-2 rounded-xl border p-3 text-center transition ${paleta === p.nome ? optOn : optOff}`}>
                <span className="flex h-10 w-full overflow-hidden rounded-md">
                  {p.cores.map((c) => (
                    <span key={c} className="flex-1" style={{ background: c }} />
                  ))}
                </span>
                <span className="text-[11px] font-medium">{p.nome}</span>
              </button>
            ))}
          </div>
        </Etapa>
      )}

      {/* etapa 4 — descrição */}
      {step === 4 && (
        <Etapa icon={MessageSquare} titulo="Conte rapidinho sobre o projeto">
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={5}
            placeholder="Ex.: tenho uma clínica de estética e quero um site que capte agendamentos pelo WhatsApp…"
            className={field}
          />
          <button type="button" onClick={next}
            className="btn-gold mt-4 flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm uppercase tracking-widest">
            Continuar <ArrowRight className="h-4 w-4" />
          </button>
        </Etapa>
      )}

      {/* etapa 5 — contato */}
      {step === 5 && (
        <Etapa icon={Rocket} titulo="Pra onde eu mando sua demonstração?">
          <div className="space-y-3">
            <input value={nome} onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome *" className={field} />
            <input value={telefone} onChange={(e) => setTelefone(e.target.value)}
              placeholder="WhatsApp *" className={field} />
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder="E-mail *" className={field} />
            <input value={nicho} onChange={(e) => setNicho(e.target.value)}
              placeholder="Nicho / segmento do seu negócio" className={field} />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button type="button" onClick={submit} disabled={loading}
              className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-4 text-sm uppercase tracking-widest disabled:opacity-60">
              {loading
                ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</>
                : <>Receber demonstração grátis <ArrowRight className="h-4 w-4" /></>}
            </button>
            <p className="text-center text-[11px] text-neutral-500">
              Sem compromisso. Você só paga se aprovar o site pronto.
            </p>
          </div>
        </Etapa>
      )}

      {/* voltar */}
      {step > 0 && !done && (
        <button type="button" onClick={back}
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400 transition hover:text-gold-100">
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar
        </button>
      )}
    </div>
  );
}

function Etapa({
  icon: Icon, titulo, children,
}: { icon: any; titulo: string; children: React.ReactNode }) {
  return (
    <div className="animate-[fadeIn_.4s_ease]">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-metal text-black">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-bold text-white">{titulo}</h3>
      </div>
      {children}
    </div>
  );
}
