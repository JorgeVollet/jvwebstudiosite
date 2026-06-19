import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LeadsTable from "./LeadsTable";
import LogoutButton from "./LogoutButton";
import { Users, Search, TrendingUp, Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // Se não há Supabase, mostra instrução em vez de quebrar.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-gold-metal">Painel Admin</h1>
        <p className="mt-4 text-neutral-400">
          Configure o Supabase (veja o README) e crie um usuário admin para acessar o painel de
          leads e SEO.
        </p>
        <Link href="/" className="btn-outline-gold mt-8 inline-flex px-6 py-3 text-sm uppercase tracking-widest">
          Voltar ao site
        </Link>
      </div>
    );
  }

  const supabase = createClient();
  const { data: leads } = await supabase
    .from("leads").select("*").order("created_at", { ascending: false });

  const list = leads || [];
  const total = list.length;
  const novos = list.filter((l: any) => l.status === "novo").length;
  const fechados = list.filter((l: any) => l.status === "fechado").length;
  const hoje = list.filter(
    (l: any) => new Date(l.created_at).toDateString() === new Date().toDateString()
  ).length;

  const stats = [
    { icon: Users, label: "Total de leads", value: total },
    { icon: Clock, label: "Novos (não tratados)", value: novos },
    { icon: TrendingUp, label: "Fechados", value: fechados },
    { icon: Search, label: "Hoje", value: hoje },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-10 w-10 rounded bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/jv-mark.svg)" }}
            aria-hidden="true"
          />
          <div>
            <h1 className="font-display text-xl font-bold text-neutral-900">Painel Admin</h1>
            <p className="text-xs text-neutral-600">JV WEB STUDIO · Gestão de Leads &amp; SEO</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/seo" className="btn-outline-gold px-5 py-2.5 text-xs uppercase tracking-widest">
            Gestão SEO
          </Link>
          <Link href="/" className="text-xs text-neutral-700 hover:text-gold-600">Ver site</Link>
          <LogoutButton />
        </div>
      </header>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card-dark p-6">
            <s.icon className="h-6 w-6 text-gold-100" />
            <div className="mt-4 font-display text-3xl font-bold text-gold-metal">{s.value}</div>
            <div className="text-xs text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="mb-4 font-display text-lg font-bold text-neutral-900">Leads recebidos</h2>
        <LeadsTable initial={list} />
      </div>
    </div>
  );
}
