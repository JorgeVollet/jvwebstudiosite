"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor customizado discreto — JV WEB STUDIO
 * - Pontinho dourado sólido (segue o mouse na hora)
 * - Anel fino dourado que segue com atraso suave (lerp)
 * - Cresce sobre elementos interativos (a, button, [data-cursor])
 * - Desativado automaticamente em telas touch / mobile
 * - Respeita prefers-reduced-motion
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // 1) Decide se ativa (só uma vez, no mount)
  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isFinePointer) setEnabled(true);
  }, []);

  // 2) Liga os listeners SÓ depois que os divs existem (enabled === true)
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return; // guard de segurança

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };

    const interactiveSel = "a, button, [data-cursor], input, textarea, label, select";
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest(interactiveSel)) ring.classList.add("cursor-ring--active");
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest(interactiveSel)) ring.classList.remove("cursor-ring--active");
    };
    const onDown = () => ring.classList.add("cursor-ring--down");
    const onUp = () => ring.classList.remove("cursor-ring--down");

    // entrar/sair da janela: usa o evento da window (mais confiável)
    const onWinLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onWinEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onWinLeave);
    document.documentElement.addEventListener("mouseenter", onWinEnter);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onWinLeave);
      document.documentElement.removeEventListener("mouseenter", onWinEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
