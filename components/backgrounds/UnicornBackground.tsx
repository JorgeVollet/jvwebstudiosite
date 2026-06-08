"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window { UnicornStudio?: { isInitialized: boolean; init: () => void } }
}

/**
 * Embed de um projeto UnicornStudio como background.
 * `dim` força o fundo preto por cima (mix) garantindo coerência com o tema.
 */
export default function UnicornBackground({
  projectId,
  className = "",
  dim = 0.35,
  invert = false,
}: {
  projectId: string;
  className?: string;
  dim?: number;
  invert?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const s = document.createElement("script");
      s.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      s.onload = () => {
        if (!window.UnicornStudio?.isInitialized) {
          window.UnicornStudio!.init();
          window.UnicornStudio!.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(s);
    } else if (window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
    }
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black ${className}`}>
      <div
        ref={ref}
        data-us-project={projectId}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={invert ? { filter: "invert(1) grayscale(1) brightness(1.6)" } : undefined}
      />
      {/* Camadas de escurecimento p/ manter o preto dominante */}
      <div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dim }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
    </div>
  );
}
