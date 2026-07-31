"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ChevronDown, MessageCircle, Mail, Copy, Check } from "lucide-react";

export type BriefingAdv = {
  id: string;
  created_at: string;
  nome: string;
  telefone: string;
  email: string;
  empresa?: string | null;
  busca?: string | null;
  instagram?: string | null;
  cupom?: string | null; // guarda o plano contratado
  status: string;
};

const STATUS = ["novo", "contatado", "proposta", "fechado", "perdido"];
const STATUS_COLOR: Record<string, string> = {
  novo: "bg-gold-metal text-black",
  contatado: "bg-blue-100 text-blue-800",
  proposta: "bg-purple-100 text-purple-800",
  fechado: "bg-green-100 text-green-800",
  perdido: "bg-red-100 text-red-800",
};

/** As respostas chegam como "Chave: valor | Chave: valor" (ver briefing-advogados.html). */
function parsePares(busca?: string | null): { k: string; v: string }[] {
  if (!busca) return [];
  return busca
    .split("|")
    .map((parte) => {
      const i = parte.indexOf(":");
      if (i === -1) return null;
      const k = parte.slice(0, i).trim();
      const v = parte.slice(i + 1).trim();
      return k ? { k, v: v || "—" } : null;
    })
    .filter(Boolean) as { k: string; v: string }[];
}

/** Blocos do briefing, na ordem em que o cliente respondeu. Os prefixos a1_/a2_/a3_
 *  são as áreas de atuação repetíveis — ganham seção própria para não virar sopa. */
const SECOES: { titulo: string; campos: string[] }[] = [
  { titulo: "Identificação", campos: ["Nome completo", "Oab", "Whatsapp", "Email", "Plano", "Plano url", "Retorno pagamento", "Nome site", "Dominio desejado", "Site atual", "Redes", "Cidade atendimento", "Endereco horarios", "Contato preferido", "Quem aprova"] },
  { titulo: "Posicionamento", campos: ["Apresentacao frase", "Diferencial essencia", "Porque escolher", "Cliente ideal", "Cliente nao", "Cliente 5seg", "Cliente emocao", "Objetivo", "Visao 1ano", "Valeu cada centavo"] },
  { titulo: "Área de atuação 1", campos: ["A1 nome", "A1 cliente", "A1 situacoes", "A1 processo", "A1 prazos", "A1 faq"] },
  { titulo: "Área de atuação 2", campos: ["A2 nome", "A2 cliente", "A2 situacoes", "A2 processo", "A2 prazos", "A2 faq"] },
  { titulo: "Área de atuação 3", campos: ["A3 nome", "A3 cliente", "A3 situacoes", "A3 processo", "A3 prazos", "A3 faq"] },
  { titulo: "Credibilidade", campos: ["Credenciais", "Numeros", "Orgulho", "Tempo equipe", "Conteudos links", "Data importante"] },
  { titulo: "Visual e tom", campos: ["Tema", "Referencia visual", "Referencia oque", "Cores", "Tom", "Palavras imagem", "Metafora escritorio", "Identidade existente", "Fotos", "Referencias", "Odeia sites", "Sentir saida"] },
  { titulo: "Fechamento", campos: ["Nao pode faltar", "Essencial extra", "Origem"] },
];

export default function BriefingsAdv({ initial }: { initial: BriefingAdv[] }) {
  const [lista, setLista] = useState<BriefingAdv[]>(initial);
  const [plano, setPlano] = useState("todos");
  const [q, setQ] = useState("");
  const [aberto, setAberto] = useState<string | null>(null);
  const [copiado, setCopiado] = useState<string | null>(null);

  async function mudarStatus(id: string, status: string) {
    setLista((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    await createClient().from("leads").update({ status }).eq("id", id);
  }

  function copiarBriefing(b: BriefingAdv) {
    const pares = parsePares(b.busca);
    const texto =
      `BRIEFING — ${b.nome}\n${"=".repeat(40)}\n` +
      `Plano: ${b.cupom || "não informado"}\n` +
      `WhatsApp: ${b.telefone}\nE-mail: ${b.email}\n` +
      `Recebido em: ${new Date(b.created_at).toLocaleString("pt-BR")}\n\n` +
      pares.map((p) => `${p.k.toUpperCase()}\n${p.v}\n`).join("\n");
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(b.id);
      setTimeout(() => setCopiado(null), 2000);
    });
  }

  function waNumero(tel?: string) {
    const d = (tel || "").replace(/\D/g, "");
    if (!d) return "";
    return d.startsWith("55") ? d : `55${d}`;
  }

  const view = lista.filter((b) => {
    const p = (b.cupom || "").toLowerCase();
    const okPlano =
      plano === "todos" ||
      (plano === "autoridade" && p.includes("autorid")) ||
      (plano === "essencial" && p.includes("essenc"));
    const okQ =
      !q ||
      [b.nome, b.email, b.empresa, b.telefone].join(" ").toLowerCase().includes(q.toLowerCase());
    return okPlano && okQ;
  });

  if (!lista.length) {
    return (
      <div className="rounded-xl border border-black/10 bg-white/60 p-10 text-center">
        <p className="text-sm text-neutral-600">
          Nenhum briefing recebido ainda. Assim que um cliente pagar e preencher, ele aparece aqui
          automaticamente.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        {["todos", "essencial", "autoridade"].map((p) => (
          <button
            key={p}
            onClick={() => setPlano(p)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
              plano === p
                ? "bg-gold-metal text-black"
                : "border border-black/15 text-neutral-600 hover:border-gold-300"
            }`}
          >
            {p}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nome, e-mail ou telefone…"
          className="ml-auto min-w-[240px] flex-1 rounded-full border border-black/15 bg-white px-4 py-2 text-sm outline-none focus:border-gold-300"
        />
      </div>

      <div className="space-y-3">
        {view.map((b) => {
          const pares = parsePares(b.busca);
          const mapa = new Map(pares.map((p) => [p.k.toLowerCase(), p.v]));
          const usados = new Set<string>();
          const on = aberto === b.id;

          return (
            <div key={b.id} className="overflow-hidden rounded-xl border border-black/10 bg-white">
              <button
                onClick={() => setAberto(on ? null : b.id)}
                className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-neutral-50"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-bold text-neutral-900">{b.nome}</span>
                    {b.cupom && (
                      <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-700">
                        {b.cupom}
                      </span>
                    )}
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        STATUS_COLOR[b.status] || "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-xs text-neutral-500">
                    {new Date(b.created_at).toLocaleString("pt-BR")} · {b.telefone} · {b.email}
                    {b.empresa ? ` · ${b.empresa}` : ""}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-neutral-400">{pares.length} respostas</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${on ? "rotate-180" : ""}`}
                />
              </button>

              {on && (
                <div className="border-t border-black/10 bg-neutral-50/60 p-5">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <a
                      href={`https://wa.me/${waNumero(b.telefone)}`}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                    <a
                      href={`mailto:${b.email}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-4 py-2 text-xs font-semibold text-neutral-700 hover:border-gold-300"
                    >
                      <Mail className="h-3.5 w-3.5" /> E-mail
                    </a>
                    <button
                      onClick={() => copiarBriefing(b)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-4 py-2 text-xs font-semibold text-neutral-700 hover:border-gold-300"
                    >
                      {copiado === b.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-600" /> Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copiar briefing inteiro
                        </>
                      )}
                    </button>
                    <select
                      value={b.status}
                      onChange={(e) => mudarStatus(b.id, e.target.value)}
                      className="ml-auto rounded-full border border-black/15 bg-white px-3 py-2 text-xs font-semibold text-neutral-700 outline-none"
                    >
                      {STATUS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-5">
                    {SECOES.map((sec) => {
                      const itens = sec.campos
                        .map((c) => {
                          const v = mapa.get(c.toLowerCase());
                          if (v === undefined) return null;
                          usados.add(c.toLowerCase());
                          return { k: c, v };
                        })
                        .filter(Boolean) as { k: string; v: string }[];
                      if (!itens.length) return null;
                      return (
                        <section key={sec.titulo}>
                          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-700">
                            {sec.titulo}
                          </h4>
                          <dl className="grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                            {itens.map((it) => (
                              <div key={it.k} className="border-b border-black/5 pb-2">
                                <dt className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                                  {it.k}
                                </dt>
                                <dd className="mt-0.5 whitespace-pre-wrap text-sm text-neutral-800">
                                  {it.v}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </section>
                      );
                    })}

                    {/* Qualquer campo novo que eu não tenha mapeado ainda aparece aqui,
                        em vez de sumir silenciosamente do painel. */}
                    {(() => {
                      const sobra = pares.filter((p) => !usados.has(p.k.toLowerCase()));
                      if (!sobra.length) return null;
                      return (
                        <section>
                          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                            Outros campos
                          </h4>
                          <dl className="grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                            {sobra.map((p) => (
                              <div key={p.k} className="border-b border-black/5 pb-2">
                                <dt className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                                  {p.k}
                                </dt>
                                <dd className="mt-0.5 whitespace-pre-wrap text-sm text-neutral-800">
                                  {p.v}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </section>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
