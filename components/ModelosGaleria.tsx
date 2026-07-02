"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import { MODELOS, type Modelo } from "@/lib/modelos";

/* Vitrine de trabalhos entregues.
   - Card: PRINT ESTÁTICO da hero (mShots/WordPress, grátis, sem animação).
   - Clique: janela grande CENTRALIZADA (renderizada via portal no <body> pra
     não ficar presa em ancestral com transform). Site ao vivo quando permite;
     quando bloqueia iframe (noframe), mostra o print grande + "abrir em nova aba". */

// Print automático via mShots (grátis). Tenta recarregar algumas vezes porque
// na 1ª vez o serviço pode devolver "gerando" antes do print ficar pronto.
function Thumb({ url, nome }: { url: string; nome: string }) {
  const [tries, setTries] = useState(0);
  const enc = encodeURIComponent(url);
  const src = `https://s.wordpress.com/mshots/v1/${enc}?w=1200&h=900${tries ? `&reload=${tries}` : ""}`;
  useEffect(() => {
    if (tries >= 4) return;
    const t = setTimeout(() => setTries((v) => v + 1), 4000);
    return () => clearTimeout(t);
  }, [tries]);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={nome}
      loading="lazy"
      decoding="async"
      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
  );
}

function fullShot(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400&h=1900`;
}

export default function ModelosGaleria() {
  const [aberto, setAberto] = useState<Modelo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  function queroMeuSite() {
    setAberto(null);
    setTimeout(() => {
      document.getElementById("planos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  const modal = aberto && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm md:p-6"
      onClick={() => setAberto(null)}
    >
      <div
        className="flex h-[90vh] w-full max-w-[1600px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* barra superior estilo navegador */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-neutral-900 px-4 py-3">
          <div className="flex shrink-0 gap-2">
            <span className="h-3 w-3 rounded-full bg-neutral-600" />
            <span className="h-3 w-3 rounded-full bg-neutral-600" />
            <span className="h-3 w-3 rounded-full bg-neutral-600" />
          </div>
          <div className="mx-auto truncate font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            {aberto.nicho} · {aberto.nome}
          </div>
          <a
            href={aberto.embed}
            target="_blank"
            rel="noopener"
            className="hidden shrink-0 items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-300 transition hover:text-white sm:inline-flex"
          >
            Abrir <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setAberto(null)}
            aria-label="Fechar"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* conteúdo: site ao vivo OU print grande (sites que bloqueiam iframe) */}
        {aberto.noframe ? (
          <div className="flex-1 overflow-y-auto bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={fullShot(aberto.embed)} alt={aberto.nome} className="w-full" />
          </div>
        ) : (
          <iframe
            src={aberto.embed}
            title={aberto.nome}
            className="w-full flex-1 border-0 bg-white"
          />
        )}

        {/* CTA inferior */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-neutral-900 px-5 py-4">
          <div className="min-w-0">
            <p className="font-display text-sm font-bold text-white">Gostou desse trabalho?</p>
            <p className="text-xs text-neutral-400">Criamos o seu com a sua marca, suas cores e seus textos.</p>
          </div>
          <button
            type="button"
            onClick={queroMeuSite}
            className="btn-gold inline-flex shrink-0 items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest"
          >
            Quero meu site <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Grade de trabalhos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MODELOS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setAberto(m)}
            className="portfolio-card group block overflow-hidden rounded-2xl text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
              {/* Placeholder dourado (base) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#161208] to-[#0a0a0a] text-center">
                <span className="px-4 font-display text-xl font-bold text-gold-metal">{m.nome}</span>
                <span className="mt-2 tech-mono text-[9px] uppercase tracking-widest text-gold-100/70">ver ao vivo</span>
              </div>

              {/* Print estático da hero */}
              <Thumb url={m.embed} nome={m.nome} />

              {/* selo do segmento */}
              <div className="absolute bottom-3 left-3 z-20 rounded-full bg-gold-metal px-3 py-1 tech-mono text-[9px] font-bold uppercase tracking-widest text-black">
                {m.nicho}
              </div>

              {/* overlay no hover */}
              <div className="portfolio-card__overlay z-20">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/60 bg-black/50 px-4 py-2 tech-mono text-xs uppercase tracking-widest text-gold-100 backdrop-blur-sm">
                  Ver ao vivo <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <h3 className="font-display text-base font-bold text-gold-metal">{m.nome}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Popup renderizado via portal no body (escapa de ancestrais com transform) */}
      {mounted && modal ? createPortal(modal, document.body) : null}
    </div>
  );
}
