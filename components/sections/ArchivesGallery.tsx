"use client";

import { useState, useEffect, useCallback } from "react";
import {
  X,
  Maximize2,
  ArrowLeft,
  ExternalLink,
  Workflow,
  ClipboardList,
  Layers,
  ChevronRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SEGMENTS, type ArchiveItem, type ArchiveSegment } from "@/lib/archives";

/**
 * ArchivesGallery — seção em 2 NÍVEIS.
 *  Nível 1: 3 cards de SEGMENTO (N8N, Briefings, SaaS) — hover expande.
 *  Nível 2: ao clicar num segmento, mostra os ITENS dele (hover expande).
 *           Clicar num item:
 *             - print  → lightbox em tamanho real;
 *             - ao vivo → popup com iframe (e botão "abrir em nova aba").
 */

const SEG_ICON = { workflow: Workflow, clipboard: ClipboardList, layers: Layers };

export default function ArchivesGallery() {
  const [openSeg, setOpenSeg] = useState<number | null>(null); // null = nível 1
  const [active, setActive] = useState(0); // painel em foco (hover)
  const [zoom, setZoom] = useState<ArchiveItem | null>(null); // lightbox de print
  const [live, setLive] = useState<ArchiveItem | null>(null); // popup ao vivo

  const closeOverlay = useCallback(() => {
    setZoom(null);
    setLive(null);
  }, []);

  // ESC fecha overlay; trava scroll do body quando algum overlay aberto
  useEffect(() => {
    const open = zoom || live;
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom, live, closeOverlay]);

  const enterSegment = (i: number) => {
    setOpenSeg(i);
    setActive(0);
  };
  const backToSegments = () => {
    setOpenSeg(null);
    setActive(0);
  };

  const onItemClick = (item: ArchiveItem) => {
    if (item.kind === "live") setLive(item);
    else setZoom(item);
  };

  const segment: ArchiveSegment | null = openSeg !== null ? SEGMENTS[openSeg] : null;

  return (
    <section id="archives" className="relative border-t border-white/5 bg-base py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Cabeçalho */}
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="section-label">[ ARCHIVES · ACERVO DE PROJETOS ]</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
                <span className="text-gold-metal">Archives</span>
              </h2>
            </div>
            {segment ? (
              <button
                type="button"
                data-cursor
                onClick={backToSegments}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-gold-3/50 hover:text-gold-100"
              >
                <ArrowLeft className="h-4 w-4" />
                voltar aos segmentos
              </button>
            ) : (
              <span className="hidden tech-mono text-xs text-neutral-500 md:block">
                escolha um segmento →
              </span>
            )}
          </div>
        </Reveal>

        {/* breadcrumb do nível 2 */}
        {segment && (
          <div className="mt-4 flex items-center gap-2 tech-mono text-xs text-neutral-500">
            <span>Archives</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold-100/80">{segment.label}</span>
          </div>
        )}

        {/* ===== NÍVEL 1: segmentos ===== */}
        {!segment && (
          <Reveal delay={120}>
            <div className="archive-strip mt-12">
              {SEGMENTS.map((seg, i) => {
                const isActive = active === i;
                const Icon = SEG_ICON[seg.icon];
                const count = seg.items.length;
                return (
                  <button
                    type="button"
                    key={seg.id}
                    data-cursor
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => enterSegment(i)}
                    aria-label={`Abrir segmento ${seg.label}`}
                    className={`archive-panel archive-panel--segment ${isActive ? "is-active" : ""}`}
                  >
                    {seg.cover ? (
                      <div
                        className="archive-panel__img"
                        style={{ backgroundImage: `url('${seg.cover}')` }}
                      />
                    ) : (
                      <div className="archive-panel__bg" />
                    )}
                    <div className="archive-panel__overlay" />
                    <div className="archive-panel__num tech-mono">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="archive-panel__mark font-display">JV</span>

                    {/* ícone do segmento */}
                    <div className="archive-seg__icon">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="archive-panel__content">
                      <span className="tech-tag">{seg.tagline}</span>
                      <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-gold-metal md:text-3xl">
                        {seg.label}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm text-neutral-300">{seg.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-2 tech-mono text-[11px] uppercase tracking-widest text-gold-100/80">
                        {count > 0 ? `${count} ${count === 1 ? "projeto" : "projetos"}` : "em breve"}
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* ===== NÍVEL 2: itens do segmento ===== */}
        {segment && (
          <div className="archive-strip mt-10">
            {segment.items.length === 0 && (
              <div className="flex h-[40vh] w-full items-center justify-center rounded-2xl border border-dashed border-white/10 text-center">
                <p className="tech-mono text-sm text-neutral-500">
                  Em breve — projetos deste segmento serão publicados aqui.
                </p>
              </div>
            )}
            {segment.items.map((item, i) => {
              const isActive = active === i;
              const num = String(i + 1).padStart(2, "0");
              return (
                <button
                  type="button"
                  key={item.title}
                  data-cursor
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => onItemClick(item)}
                  aria-label={
                    item.kind === "live"
                      ? `Abrir ${item.title} ao vivo`
                      : `Ver ${item.title} em tamanho real`
                  }
                  className={`archive-panel ${isActive ? "is-active" : ""}`}
                >
                  {/* fundo: print (image) ou capa estilizada (live) */}
                  {item.img || item.cover ? (
                    <div
                      className="archive-panel__img"
                      style={{ backgroundImage: `url('${item.img ?? item.cover}')` }}
                    />
                  ) : (
                    <div className="archive-panel__bg archive-panel__bg--live" />
                  )}
                  <div className="archive-panel__overlay" />

                  <div className="archive-panel__num tech-mono">{num}</div>
                  <span className="archive-panel__tag tech-mono">{item.tag}</span>

                  {/* dica de ação (canto) */}
                  <span className="archive-panel__expand" aria-hidden>
                    {item.kind === "live" ? (
                      <>
                        <ExternalLink className="h-3.5 w-3.5" />
                        abrir ao vivo
                      </>
                    ) : (
                      <>
                        <Maximize2 className="h-3.5 w-3.5" />
                        ampliar
                      </>
                    )}
                  </span>

                  <span className="archive-panel__mark font-display">JV</span>

                  <div className="archive-panel__content">
                    <h3 className="font-display text-2xl font-bold leading-tight text-gold-metal md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-neutral-300">{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ===== Lightbox: print(s) em tamanho real (1 imagem OU galeria com scroll) ===== */}
      {zoom && (zoom.img || (zoom.gallery && zoom.gallery.length > 0)) && (
        <div
          className="archive-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoom.title}
          onClick={closeOverlay}
        >
          <div className="archive-lightbox__bar" onClick={(e) => e.stopPropagation()}>
            <div className="min-w-0">
              <span className="tech-mono text-[10px] uppercase tracking-widest text-gold-100/80">
                {zoom.tag}
              </span>
              <h3 className="truncate font-display text-base font-bold md:text-lg">{zoom.title}</h3>
            </div>
            <button
              type="button"
              data-cursor
              onClick={closeOverlay}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-3/50 bg-black/70 text-gold-100 transition hover:scale-105 hover:border-gold-2 hover:bg-black"
              aria-label="Fechar"
              title="Fechar (ESC)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {zoom.gallery && zoom.gallery.length > 0 ? (
            // galeria: telas empilhadas, rolagem vertical
            <div className="archive-gallery" onClick={(e) => e.stopPropagation()}>
              {zoom.gallery.map((src, idx) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${zoom.title} — tela ${idx + 1}`}
                  className="archive-gallery__img"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          ) : (
            // imagem única: tamanho real com pan
            <div className="archive-lightbox__stage" onClick={(e) => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={zoom.img} alt={zoom.title} className="archive-lightbox__img" />
            </div>
          )}

          <p className="archive-lightbox__hint tech-mono">
            {zoom.gallery && zoom.gallery.length > 0
              ? `role para ver as ${zoom.gallery.length} telas · ESC ou clique fora para fechar`
              : "arraste para percorrer · ESC ou clique fora para fechar"}
          </p>
        </div>
      )}

      {/* ===== Popup: briefing ao vivo (iframe) ===== */}
      {live && live.url && (
        <div
          className="archive-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={live.title}
          onClick={closeOverlay}
        >
          <div className="archive-lightbox__bar" onClick={(e) => e.stopPropagation()}>
            <div className="min-w-0">
              <span className="tech-mono text-[10px] uppercase tracking-widest text-gold-100/80">
                {live.tag}
              </span>
              <h3 className="truncate font-display text-base font-bold md:text-lg">{live.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                data-cursor
                href={live.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Abrir em nova aba</span>
                <span className="md:hidden">Abrir</span>
              </a>
              <button
                type="button"
                data-cursor
                onClick={closeOverlay}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-3/50 bg-black/70 text-gold-100 transition hover:scale-105 hover:border-gold-2 hover:bg-black"
                aria-label="Fechar"
                title="Fechar (ESC)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="archive-live__stage" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={live.url}
              title={live.title}
              className="archive-live__frame"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
          <p className="archive-lightbox__hint tech-mono">
            briefing rodando ao vivo · se não carregar, use “abrir em nova aba”
          </p>
        </div>
      )}
    </section>
  );
}
