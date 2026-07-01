"use client";
import { useState, Fragment } from "react";
import { createClient } from "@/lib/supabase/client";
import { ChevronDown, MessageCircle, Mail } from "lucide-react";

type Lead = {
  id: string; created_at: string; nome: string; telefone: string; email: string;
  empresa?: string; busca?: string; instagram?: string; origem?: string;
  cupom?: string; status: string;
};

const STATUS = ["novo", "contatado", "proposta", "fechado", "perdido"];
const STATUS_COLOR: Record<string, string> = {
  novo: "bg-gold-metal text-black",
  contatado: "bg-blue-100 text-blue-800",
  proposta: "bg-purple-100 text-purple-800",
  fechado: "bg-green-100 text-green-800",
  perdido: "bg-red-100 text-red-800",
};

/* Transforma o campo "busca" (Chave: valor | Chave: valor) em pares legíveis. */
function parseBriefing(busca?: string): { k: string; v: string }[] {
  if (!busca) return [];
  return busca
    .split("|")
    .map((part) => {
      const i = part.indexOf(":");
      if (i === -1) return null;
      const k = part.slice(0, i).trim();
      const v = part.slice(i + 1).trim();
      if (!k) return null;
      return { k, v: v || "—" };
    })
    .filter(Boolean) as { k: string; v: string }[];
}

/* Normaliza telefone p/ link wa.me (só dígitos, garante DDI 55). */
function waNumber(phone?: string): string {
  const d = (phone || "").replace(/\D/g, "");
  if (!d) return "";
  return d.startsWith("55") ? d : `55${d}`;
}

export default function LeadsTable({ initial }: { initial: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initial);
  const [filter, setFilter] = useState("todos");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  async function updateStatus(id: string, status: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    await createClient().from("leads").update({ status }).eq("id", id);
  }

  function exportCSV() {
    const headers = ["Data","Nome","Telefone","Email","Empresa/Nicho","Busca","Instagram","Origem","Cupom","Status"];
    const rows = leads.map((l) => [
      new Date(l.created_at).toLocaleString("pt-BR"), l.nome, l.telefone, l.email,
      l.empresa || "", l.busca || "", l.instagram || "", l.origem || "", l.cupom || "", l.status,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `leads-jv-${new Date().toISOString().slice(0,10)}.csv`; a.click();
  }

  const view = leads.filter((l) => {
    const okStatus = filter === "todos" || l.status === filter;
    const okQ = !q || [l.nome, l.email, l.empresa, l.telefone].join(" ").toLowerCase().includes(q.toLowerCase());
    return okStatus && okQ;
  });

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input placeholder="Buscar nome, e-mail, empresa…" value={q} onChange={(e) => setQ(e.target.value)}
          className="flex-1 min-w-[200px] rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-gold-3" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-gold-3">
          <option value="todos">Todos os status</option>
          {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={exportCSV} className="btn-outline-gold px-5 py-2.5 text-xs uppercase tracking-widest">
          Exportar CSV
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-black/10 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/10 bg-black/[0.03] text-left font-mono text-[11px] uppercase tracking-wider text-neutral-600">
              <th className="px-4 py-3 w-8"></th>
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Contato</th>
              <th className="px-4 py-3">Empresa / Nicho</th>
              <th className="px-4 py-3">Origem</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {view.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-10 text-center text-neutral-500">Nenhum lead ainda.</td></tr>
            )}
            {view.map((l) => {
              const briefing = parseBriefing(l.busca);
              const isBriefing = (l.origem || "").includes("briefing");
              const isOpen = open === l.id;
              const wa = waNumber(l.telefone);
              const waMsg = encodeURIComponent(
                `Olá ${l.nome}! Aqui é a JV WEB STUDIO. Recebi seu briefing — já estou começando seu site! ✦`
              );
              return (
                <Fragment key={l.id}>
                  <tr
                    onClick={() => setOpen(isOpen ? null : l.id)}
                    className="cursor-pointer border-b border-black/[0.06] transition hover:bg-black/[0.02]"
                  >
                    <td className="px-4 py-3 text-neutral-400">
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </td>
                    <td className="px-4 py-3 text-xs text-neutral-600">
                      {new Date(l.created_at).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      {l.nome}
                      {l.cupom && <span className="ml-2 rounded bg-gold-metal px-1.5 py-0.5 font-mono text-[10px] text-black">{l.cupom}</span>}
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      <div>{l.email}</div>
                      <div className="text-xs text-neutral-500">{l.telefone}</div>
                      {l.instagram && <div className="text-xs text-gold-600">{l.instagram}</div>}
                    </td>
                    <td className="px-4 py-3 text-neutral-700">{l.empresa || "—"}</td>
                    <td className="px-4 py-3 text-xs">
                      {isBriefing ? (
                        <span className="rounded-full bg-gold-metal px-2 py-0.5 font-medium text-black">Briefing</span>
                      ) : (
                        <span className="text-neutral-600">{l.origem}</span>
                      )}
                    </td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <select value={l.status} onChange={(e) => updateStatus(l.id, e.target.value)}
                        className={`rounded-full px-2.5 py-1 text-xs font-medium outline-none ${STATUS_COLOR[l.status] || "bg-black/10 text-neutral-800"}`}>
                        {STATUS.map((s) => <option key={s} value={s} className="bg-white text-neutral-900">{s}</option>)}
                      </select>
                    </td>
                  </tr>

                  {isOpen && (
                    <tr className="border-b border-black/[0.06] bg-black/[0.015]">
                      <td colSpan={7} className="px-4 py-5">
                        {/* Ações rápidas */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {wa && (
                            <a
                              href={`https://wa.me/${wa}?text=${waMsg}`}
                              target="_blank"
                              rel="noopener"
                              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
                            >
                              <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
                            </a>
                          )}
                          <a
                            href={`mailto:${l.email}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:bg-black/[0.04]"
                          >
                            <Mail className="h-4 w-4" /> Enviar e-mail
                          </a>
                        </div>

                        {/* Briefing detalhado */}
                        {briefing.length > 0 ? (
                          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                            {briefing.map((b, i) => (
                              <div key={i} className="border-b border-black/[0.06] pb-2">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">{b.k}</p>
                                <p className="mt-0.5 text-sm text-neutral-900">{b.v}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-neutral-500">Sem detalhes de briefing para este lead.</p>
                        )}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
