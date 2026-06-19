"use client";

import { useRef, ReactNode } from "react";

/**
 * TiltCard — efeito hover "finíssimo" (ref animations-gemini)
 * - Tilt 3D sutil seguindo o mouse (perspective + rotateX/Y)
 * - Spotlight dourado que persegue o cursor sobre o card
 * - Borda dourada reativa
 * - Desativa o tilt em touch / reduced-motion (CSS cuida do spotlight)
 *
 * Uso: <TiltCard className="card-dark p-6"> ...conteúdo... </TiltCard>
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number; // graus máximos de inclinação
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // tilt: centro = 0, bordas = ±intensity
    const rotateY = (px - 0.5) * intensity * 2;
    const rotateX = (0.5 - py) * intensity * 2;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    // posição do spotlight em %
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  return (
    <div
      ref={ref}
      data-cursor
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-card__spot" aria-hidden />
      <div className="tilt-card__inner">{children}</div>
    </div>
  );
}
