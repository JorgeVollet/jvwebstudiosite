"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Lead = {
  id: string; created_at: string; nome: string; telefone: string; email: string;
  empresa?: string; busca?: string; instagram?: string; origem?: string;
  cupom?: string; status: string;
};

const STATUS = ["novo", "contatado", "proposta", "fechado", "perdido"];
const STATUS_COLOR: Record<string, string> = {
  novo: "bg-gold-metal text-black",
  contatado: "bg-blue-500/20 text-blue-300",
  proposta: "bg-purple-500/20 text-purple-300",
  fechado: "bg-green-500/20 text-green-300",
  perdido: "bg-red-500/20 text-red-300",
};

export default function LeadsTable({ initial }: { initial: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initial);
  const [filter, setFilter] = useState("todos");
  const [q, setQ] = useState("");

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
          className="flex-1 min-w-[200px] rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:border-gold-3" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none focus:border-gold-3">
          <option value="todos">Todos os status</option>
          {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={exportCSV} className="btn-outline-gold px-5 py-2.5 text-xs uppercase tracking-widest">
          Exportar CSV
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/5 text-left font-mono text-[11px] uppercase tracking-wider text-neutral-400">
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Contato</th>
              <th className="px-4 py-3">Empresa / Busca</th>
              <th className="px-4 py-3">Origem</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {view.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-neutral-500">Nenhum lead ainda.</td></tr>
            )}
            {view.map((l) => (
              <tr key={l.id} className="border-b border-white/5 transition hover:bg-white/[0.02]">
                <td className="px-4 py-3 text-xs text-neutral-500">
                  {new Date(l.created_at).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3 font-medium text-white">
                  {l.nome}
                  {l.cupom && <span className="ml-2 rounded bg-gold-metal px-1.5 py-0.5 font-mono text-[10px] text-black">{l.cupom}</span>}
                </td>
                <td className="px-4 py-3 text-neutral-300">
                  <div>{l.email}</div>
                  <div className="text-xs text-neutral-500">{l.telefone}</div>
                  {l.instagram && <div className="text-xs text-gold-100">{l.instagram}</div>}
                </td>
                <td className="px-4 py-3 text-neutral-400">
                  <div>{l.empresa || "—"}</div>
                  <div className="text-xs text-neutral-500">{l.busca || ""}</div>
                </td>
                <td className="px-4 py-3 text-xs text-neutral-500">{l.origem}</td>
                <td className="px-4 py-3">
                  <select value={l.status} onChange={(e) => updateStatus(l.id, e.target.value)}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium outline-none ${STATUS_COLOR[l.status] || "bg-white/10"}`}>
                    {STATUS.map((s) => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
