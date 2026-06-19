"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Falha no login.");
    } finally { setLoading(false); }
  }

  const field =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold-3";

  return (
    <div className="flex min-h-screen items-center justify-center bg-base px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gold/30 bg-surface p-8 gold-glow">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <span
            className="inline-flex h-12 w-12 rounded bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/jv-mark.svg)" }}
            aria-hidden="true"
          />
          <div>
            <h1 className="font-display text-xl font-bold">Painel Admin</h1>
            <p className="text-xs text-neutral-500">JV WEB STUDIO</p>
          </div>
        </div>
        <form onSubmit={login} className="space-y-3">
          <input type="email" placeholder="E-mail" value={email}
            onChange={(e) => setEmail(e.target.value)} required className={field} />
          <input type="password" placeholder="Senha" value={password}
            onChange={(e) => setPassword(e.target.value)} required className={field} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button disabled={loading}
            className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-3 text-sm uppercase tracking-widest disabled:opacity-60">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            Entrar
          </button>
        </form>
        <p className="mt-5 text-center text-[11px] text-neutral-600">
          Crie seu usuário em Supabase → Authentication → Users
        </p>
      </div>
    </div>
  );
}
