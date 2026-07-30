"use client";
import { useEffect, useState } from "react";
import { ADV_DEADLINE } from "@/lib/advogados";

/** Contagem regressiva até o fim da condição (31/08 · 23:59, horário de Brasília).
 *  Renderiza só após o mount para evitar divergência de hidratação. */
export default function AdvCountdown({ className = "" }: { className?: string }) {
  const [left, setLeft] = useState<null | { d: number; h: number; m: number }>(null);
  const [over, setOver] = useState(false);

  useEffect(() => {
    const end = new Date(ADV_DEADLINE).getTime();
    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) { setOver(true); setLeft(null); return; }
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      setLeft({ d, h, m });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (over) {
    return (
      <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${className}`}>
        Condição encerrada — consulte valores atuais
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] ${className}`}
      aria-live="polite"
    >
      Encerra em{" "}
      <strong className="text-gold-metal text-sm tracking-normal">
        {left ? `${left.d}d ${left.h}h ${left.m}min` : "—"}
      </strong>
    </span>
  );
}
