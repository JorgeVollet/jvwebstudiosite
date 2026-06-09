"use client";

import { useEffect, useRef } from "react";

/** Orb reativo (Spline) como background. Forçado escuro pelo overlay preto.
 *  Pausa a composição do iframe quando sai da tela (economia de GPU). */
export default function SplineOrb({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const frame = frameRef.current;
    if (!wrap || !frame || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        frame.style.visibility = entry.isIntersecting ? "visible" : "hidden";
      },
      { rootMargin: "200px" }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`absolute inset-0 -z-10 overflow-hidden bg-black ${className}`}>
      <iframe
        ref={frameRef}
        src="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs"
        frameBorder="0"
        width="100%"
        height="100%"
        title="JV orb"
        className="absolute inset-0 h-full w-full"
        style={{
          filter: "grayscale(1) brightness(0.9) contrast(1.1)",
          transform: "scale(1.4)",
          transformOrigin: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
      {/* tinte dourado bem sutil */}
      <div className="absolute inset-0 mix-blend-overlay" style={{ background: "radial-gradient(circle at 70% 40%, rgba(201,162,75,0.12), transparent 60%)" }} />
    </div>
  );
}
