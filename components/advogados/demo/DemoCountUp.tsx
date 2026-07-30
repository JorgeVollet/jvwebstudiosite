"use client";
import { useEffect, useRef } from "react";

/** Número que conta de 0 ao valor quando entra no viewport.
 *  Atualiza via textContent (sem re-render por frame). Respeita reduced-motion. */
export default function DemoCountUp({
  value,
  suffix = "",
  className = "",
  style,
}: {
  value: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    let raf = 0;
    const anima = () => {
      cancelAnimationFrame(raf);
      const dur = 1100;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${Math.round(value * eased)}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    // Reconta toda vez que volta para a tela; zera quando sai por completo
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) anima();
        else {
          cancelAnimationFrame(raf);
          el.textContent = `0${suffix}`;
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, suffix]);

  return <span ref={ref} className={className} style={style}>0{suffix}</span>;
}
