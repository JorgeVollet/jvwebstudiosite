"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

const COUPON = "BEMVINDO20";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Só esconde de quem JÁ enviou o formulário. Quem não preencheu, vê sempre.
    const jaEnviou = localStorage.getItem("jv_lead_enviado");
    if (jaEnviou) return;

    // Aparece só depois que a pessoa rola 60% do site (já viu o conteúdo).
    let shown = false;
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
      if (pct >= 0.6 && !shown) {
        shown = true;
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // caso a página já abra rolada
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar (X / clicar fora) NÃO marca nada → o popup volta na próxima visita
  // até a pessoa preencher o formulário.
  function close() {
    setOpen(false);
  }

  // Enviou o formulário com sucesso → fecha (a flag jv_lead_enviado é gravada
  // pelo LeadForm, então não aparece mais).
  function handleSuccess() {
    setTimeout(() => setOpen(false), 2500); // deixa ver a confirmação antes de fechar
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-gold/30 bg-surface gold-glow">
        {/* X sempre visível e fácil de tocar */}
        <button onClick={close} aria-label="Fechar"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-black/70 transition hover:bg-black/60 hover:text-black">
          <X className="h-5 w-5" />
        </button>
        {/* topo dourado */}
        <div className="relative bg-gold-metal px-6 py-5 text-black">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em]">Oferta de boas-vindas</p>
          <h2 className="mt-1.5 font-display text-2xl font-bold leading-none">
            Ganhe <span className="text-3xl">20% OFF</span>
          </h2>
          <p className="mt-1 text-xs font-medium text-black/80">
            no seu primeiro projeto com a JV WEB STUDIO.
          </p>
        </div>

        <div className="p-6">
          <p className="mb-4 text-xs text-neutral-300">
            Cadastre-se em 30 segundos e receba seu cupom na hora. Sem compromisso.
          </p>
          <LeadForm origem="popup" cupom={COUPON} onSuccess={handleSuccess} compact />
        </div>
      </div>
    </div>
  );
}
