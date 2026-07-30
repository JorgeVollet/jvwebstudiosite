"use client";
import { useEffect, useRef, ReactNode } from "react";

/** Reveal que REPETE: acende quando o elemento entra na tela e apaga quando
 *  sai por completo — assim toda rolagem (descendo ou voltando) reanima.
 *  Usa as mesmas classes .reveal/.in do CSS global (estilizadas no .demo-root). */
export default function DemoReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: any;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const alto = e.boundingClientRect.height > window.innerHeight * 0.7;
          if (e.isIntersecting && (e.intersectionRatio >= 0.12 || alto)) {
            el.classList.add("in");
          } else if (!e.isIntersecting) {
            el.classList.remove("in");
          }
        });
      },
      { threshold: [0, 0.12] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
