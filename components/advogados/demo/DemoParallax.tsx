"use client";
import { useEffect, useRef, ReactNode } from "react";

/** Parallax de scroll: desloca o conteúdo conforme a posição da seção na tela.
 *  Scroll listener passivo + rAF (uma leitura de layout por frame, transform-only).
 *  speed 0.1 = movimento sutil · 0.2 = pronunciado. Respeita reduced-motion. */
export default function DemoParallax({
  speed = 0.14,
  className = "",
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const alvo = el.parentElement || el;
    let ticking = false;

    const aplica = () => {
      ticking = false;
      const r = alvo.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -120 || r.top > vh + 120) return; // fora da tela: não faz nada
      // progresso -1 (entrando por baixo) .. +1 (saindo por cima), 0 = centro
      const prog = (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2);
      el.style.transform = `translate3d(0, ${(prog * speed * -100).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(aplica);
      }
    };
    aplica();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/** Saída cinematográfica do hero: o bloco de texto sobe um pouco mais devagar
 *  que o scroll e esmaece conforme a pessoa deixa a primeira tela. */
export function DemoHeroFade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;

    const aplica = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y > vh * 1.2) return;
      const p = Math.min(1, y / (vh * 0.85));
      el.style.opacity = String(Math.max(0, 1 - p * 1.1));
      el.style.transform = `translate3d(0, ${(p * 48).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(aplica);
      }
    };
    aplica();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
