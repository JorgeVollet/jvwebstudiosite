"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Save, CheckCircle2 } from "lucide-react";

type Seo = {
  site_title?: string; description?: string; keywords?: string; og_image?: string;
  canonical?: string; robots?: string; ga_id?: string; gsc_token?: string;
};

const FIELDS: { key: keyof Seo; label: string; hint?: string; textarea?: boolean }[] = [
  { key: "site_title", label: "Título do site (title tag)" },
  { key: "description", label: "Meta description", hint: "150–160 caracteres ideais", textarea: true },
  { key: "keywords", label: "Palavras-chave", hint: "separadas por vírgula" },
  { key: "canonical", label: "URL canônica" },
  { key: "og_image", label: "Imagem Open Graph (URL)", hint: "1200×630px recomendado" },
  { key: "robots", label: "Robots", hint: "ex: index, follow" },
  { key: "ga_id", label: "Google Analytics ID", hint: "ex: G-XXXXXXX" },
  { key: "gsc_token", label: "Search Console (verification)" },
];

export default function SeoForm({ initial }: { initial: Seo | null }) {
  const [form, setForm] = useState<Seo>(initial || {});
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function save() {
    setLoading(true); setSaved(false);
    await createClient().from("seo_settings").update({ ...form, updated_at: new Date().toISOString() }).eq("id", 1);
    setLoading(false); setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const field =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold-3";

  return (
    <div className="mt-8 space-y-5">
      {FIELDS.map((f) => (
        <div key={f.key}>
          <label className="mb-1.5 block text-sm font-medium text-neutral-300">
            {f.label} {f.hint && <span className="text-xs text-neutral-500">· {f.hint}</span>}
          </label>
          {f.textarea ? (
            <textarea rows={3} className={field}
              value={(form[f.key] as string) || ""}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
          ) : (
            <input className={field}
              value={(form[f.key] as string) || ""}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
          )}
        </div>
      ))}

      <div className="flex items-center gap-4 pt-2">
        <button onClick={save} disabled={loading}
          className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 text-sm uppercase tracking-widest disabled:opacity-60">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Salvar
        </button>
        {saved && (
          <span className="inline-flex items-center gap-1.5 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" /> Salvo!
          </span>
        )}
      </div>
      <p className="text-xs text-neutral-600">
        Dica: estes campos ficam salvos no banco. Para refleti-los nas meta tags em produção,
        o layout pode ler de <code className="text-gold-100">seo_settings</code> via
        <code className="text-gold-100"> generateMetadata</code> (já documentado no README).
      </p>
    </div>
  );
}
