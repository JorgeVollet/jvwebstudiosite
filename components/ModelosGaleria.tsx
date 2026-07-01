"use client";
import { useEffect, useState } from "react";
import { X, ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { MODELOS, NICHOS, type Modelo } from "@/lib/modelos";

/* Galeria de modelos por nicho — filtro + grade + popup com iframe ao vivo.
   Cards sem `embed` mostram "Em breve" (placeholder) até você hospedar. */
export default function ModelosGaleria() {
  const [filtro, setFiltro] = useState("Todos");
  const [aberto, setAberto] = useState<Modelo | null>(null);

  const lista = filtro === "Todos" ? MODELOS : MODELOS.filter((m) => m.nicho === filtro);

  // ESC fecha o popup + trava o scroll do body
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setAberto(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto]);

  return (
    <div>
      {/* Filtro por nicho */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {["Todos", ...NICHOS].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setFiltro(n)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition ${
              filtro === n
                ? "border-gold-3 bg-gold-3/15 text-gold-100"
                : "border-white/15 bg-black/30 text-neutral-400 hover:border-gold-3/50 hover:text-gold-100"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Grade de modelos */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((m) => {
          const disponivel = !!m.embed;
          return (
            <button
              key={m.id}
              type="button"
              disabled={!disponivel}
              onClick={() => disponivel && setAberto(m)}
              className="portfolio-card group block overflow-hidden rounded-2xl text-left disabled:cursor-default"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                {m.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.thumb}
                    alt={m.nome}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#161208] to-[#0a0a0a] text-center">
                    <span className="px-4 font-display text-xl font-bold text-gold-metal">{m.nome}</span>
                    <span className="mt-2 tech-mono text-[9px] uppercase tracking-widest text-gold-100/70">
                      {disponivel ? "ver modelo" : "em breve"}
                    </span>
                  </div>
                )}

                {/* selo do nicho */}
                <div className="absolute bottom-3 left-3 z-10 rounded-full bg-gold-metal px-3 py-1 tech-mono text-[9px] font-bold uppercase tracking-widest text-black">
                  {m.nicho}
                </div>

                {/* overlay no hover */}
                <div className="portfolio-card__overlay">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/60 bg-black/50 px-4 py-2 tech-mono text-xs uppercase tracking-widest text-gold-100 backdrop-blur-sm">
                    {disponivel ? <>Ver modelo <ArrowUpRight className="h-4 w-4" /></> : <>Em breve <Lock className="h-3.5 w-3.5" /></>}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <h3 className="font-display text-base font-bold text-gold-metal">{m.nome}</h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Popup com o modelo ao vivo (iframe) */}
      {aberto && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/92 backdrop-blur-sm"
          onClick={() => setAberto(null)}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/60 px-5 py-4">
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-gold-100">{aberto.nicho}</div>
              <div className="truncate font-display text-sm font-bold text-white">{aberto.nome}</div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={aberto.embed}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold-3/50 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-gold-100"
              >
                Abrir em nova aba <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setAberto(null)}
                aria-label="Fechar"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 p-3 md:p-5" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={aberto.embed}
              title={aberto.nome}
              className="h-full w-full rounded-xl border border-white/10 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
