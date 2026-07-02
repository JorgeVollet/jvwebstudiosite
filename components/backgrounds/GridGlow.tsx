"use client";
import { useEffect, useRef } from "react";

/**
 * Fundo interativo: grade dourada + "spotlight" que segue o mouse.
 * - Grade base dourada discreta (igual às outras seções).
 * - Perto do cursor, as linhas ACENDEM (grade clara revelada por máscara radial).
 * - Um brilho dourado acompanha o mouse e se FUNDE com o glow fixo de baixo
 *   (mesma cor + mix-blend screen).
 * Só atualiza variáveis CSS (--mx/--my) via rAF — bem leve.
 * No mobile (sem mouse) fica a grade + glow de baixo estáticos.
 */
export default function GridGlow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`grid-glow pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="grid-glow__base" />
      <div className="grid-glow__lines" />
      <div className="grid-glow__floor" />
      <div className="grid-glow__cursor" />
    </div>
  );
}
