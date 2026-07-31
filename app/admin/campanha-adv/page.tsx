import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import BriefingsAdv, { type BriefingAdv } from "./BriefingsAdv";
import LogoutButton from "../LogoutButton";
import { Scale, FileText, Clock, CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";
export const metadata = { title: "Campanha ADV", robots: { index: false, follow: false } };

/** Briefings da campanha Mês do Advogado.
 *  Chegam pelo public/briefing-advogados.html, que grava em `leads` com
 *  origem "briefing-adv" e o briefing inteiro serializado no campo `busca`. */
export default async function CampanhaAdvPage() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-gold-metal">Campanha ADV</h1>
        <p className="mt-4 text-neutral-400">
          Configure o Supabase para ver os briefings salvos. Enquanto isso, eles continuam
          chegando normalmente por e-mail via Formspree.
        </p>
        <Link
          href="/admin"
          className="btn-outline-gold mt-8 inline-flex px-6 py-3 text-sm uppercase tracking-widest"
        >
          Voltar ao painel
        </Link>
      </div>
    );
  }

  const supabase = createClient();
  const { data } = await supabase
    .from("leads")
    .select("*")
    .eq("origem", "briefing-adv")
    .order("created_at", { ascending: false });

  const lista = (data || []) as BriefingAdv[];
  const conta = (t: string) =>
    lista.filter((b) => (b.cupom || "").toLowerCase().includes(t)).length;
  const hoje = lista.filter(
    (b) => new Date(b.created_at).toDateString() === new Date().toDateString()
  ).length;

  const stats = [
    { icon: FileText, label: "Briefings recebidos", value: lista.length },
    { icon: Scale, label: "Plano Essencial", value: conta("essenc") },
    { icon: CheckCircle2, label: "Plano Autoridade", value: conta("autorid") },
    { icon: Clock, label: "Hoje", value: hoje },
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
            <h1 className="font-display text-xl font-bold text-neutral-900">Campanha ADV</h1>
            <p className="text-xs text-neutral-600">
              Mês do Advogado · briefings preenchidos após o pagamento
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="btn-outline-gold px-5 py-2.5 text-xs uppercase tracking-widest"
          >
            Leads gerais
          </Link>
          <Link href="/admin/seo" className="text-xs text-neutral-700 hover:text-gold-600">
            Gestão SEO
          </Link>
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
        <h2 className="mb-4 font-display text-lg font-bold text-neutral-900">
          Briefings por cliente
        </h2>
        <BriefingsAdv initial={lista} />
      </div>
    </div>
  );
}
