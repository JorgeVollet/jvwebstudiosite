"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

const COUPON = "BEMVINDO20";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = localStorage.getItem("jv_popup_seen");
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 3500);
      return () => clearTimeout(t);
    }
  }, []);

  function close() {
    setOpen(false);
    try { localStorage.setItem("jv_popup_seen", "1"); } catch {}
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-gold/30 bg-surface gold-glow">
        {/* topo dourado */}
        <div className="relative bg-gold-metal px-8 py-7 text-black">
          <button onClick={close} aria-label="Fechar"
            className="absolute right-4 top-4 text-black/60 transition hover:text-black">
            <X className="h-5 w-5" />
          </button>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em]">Oferta de boas-vindas</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-none">
            Ganhe <span className="text-4xl">20% OFF</span>
          </h2>
          <p className="mt-1 text-sm font-medium text-black/80">
            no seu primeiro projeto com a JV WEB STUDIO.
          </p>
        </div>

        <div className="p-8">
          <p className="mb-5 text-sm text-neutral-300">
            Cadastre-se em 30 segundos e receba seu cupom na hora. Sem compromisso.
          </p>
          <LeadForm origem="popup" cupom={COUPON} />
        </div>
      </div>
    </div>
  );
}
