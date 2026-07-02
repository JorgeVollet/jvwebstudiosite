"use client";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  antes: string;
  depois: string;
  alt?: string;
};

export default function BeforeAfter({ antes, depois, alt = "" }: Props) {
  const [pos, setPos] = useState(50); // %
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  function onDown(clientX: number) {
    dragging.current = true;
    setFromClientX(clientX);
  }
  function onMove(clientX: number) {
    if (dragging.current) setFromClientX(clientX);
  }
  function onUp() { dragging.current = false; }

  return (
    <div
      ref={ref}
      className="group relative aspect-[1280/702] w-full select-none overflow-hidden rounded-2xl border border-white/10"
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onUp}
    >
      {/* DEPOIS (base, embaixo) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={depois} alt={`${alt} — depois`} draggable={false} loading="lazy" decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top" />

      {/* ANTES (por cima, recortado pela posição) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={antes} alt={`${alt} — antes`} draggable={false} loading="lazy" decoding="async"
          className="absolute inset-0 h-full w-full max-w-none object-cover object-top"
          style={{ width: ref.current ? ref.current.clientWidth : "100%" }} />
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
          Antes
        </span>
        <span className="absolute bottom-3 left-3 rounded border border-white/15 bg-black/60 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white/45">
          ilustração
        </span>
      </div>

      {/* etiqueta DEPOIS */}
      <span className="absolute right-3 top-3 rounded-full border border-gold-3/50 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold-100">
        Depois · JV
      </span>

      {/* handle */}
      <div
        className="absolute top-0 z-10 h-full w-0.5 bg-gold-3"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          aria-label="Arraste para comparar antes e depois"
          onMouseDown={(e) => { e.preventDefault(); onDown(e.clientX); }}
          onTouchStart={(e) => onDown(e.touches[0].clientX)}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-gold-3 bg-black text-gold-100 shadow-[0_0_24px_-6px_rgba(201,162,75,0.8)] transition group-hover:scale-105"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
