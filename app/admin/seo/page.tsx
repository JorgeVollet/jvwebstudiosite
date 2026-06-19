import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SeoForm from "./SeoForm";

export const dynamic = "force-dynamic";

export default async function SeoPage() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-gold-metal">Gestão SEO</h1>
        <p className="mt-4 text-neutral-400">Configure o Supabase primeiro (veja o README).</p>
        <Link href="/admin" className="btn-outline-gold mt-6 inline-flex px-6 py-3 text-sm uppercase tracking-widest">Voltar</Link>
      </div>
    );
  }

  const supabase = createClient();
  const { data } = await supabase.from("seo_settings").select("*").eq("id", 1).single();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
      <header className="flex items-center justify-between border-b border-white/5 pb-6">
        <div>
          <h1 className="font-display text-xl font-bold">Gestão SEO</h1>
          <p className="text-xs text-neutral-500">Metadados, Open Graph, Analytics e Search Console</p>
        </div>
        <Link href="/admin" className="text-xs text-neutral-400 hover:text-gold-100">← Voltar ao painel</Link>
      </header>
      <SeoForm initial={data} />
    </div>
  );
}
