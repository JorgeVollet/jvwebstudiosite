"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function Reveal({
  children, className = "", delay = 0, as: Tag = "div",
}: { children: ReactNode; className?: string; delay?: number; as?: any }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } },
      { threshold: 0.15 }
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
