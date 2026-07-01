"use client";
import { useEffect } from "react";

/* Guarda o plano contratado no navegador quando o cliente entra no funil
   (via ?plano=... vindo do checkout). Assim o /briefing consegue travar
   o plano certo mesmo quem passa pelo upsell de fotos. */
export default function PersistPlano({ plano }: { plano?: string }) {
  useEffect(() => {
    const id = (plano || "").toLowerCase().trim();
    if (id) {
      try { localStorage.setItem("jv_plano", id); } catch {}
    }
  }, [plano]);
  return null;
}
