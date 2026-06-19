"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Maximize2, Monitor, Smartphone, RotateCw, X, Images } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ShowcaseFrame({ project }: { project: Project }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  const isGallery = Array.isArray(project.shots) && project.shots.length > 0;

  const close = () => router.push("/#portfolio");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reload = () => {
    setLoading(true);
    setKey((k) => k + 1);
  };

  const fullscreen = () => {
    frameRef.current?.requestFullscreen?.();
  };

  return (
    <div className="flex min-h-screen flex-col bg-base">
      {/* Botão flutuante de FECHAR */}
      <button
        data-cursor
        onClick={close}
        className="fixed right-4 top-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-gold-3/60 bg-black/80 text-gold-100 shadow-lg backdrop-blur-md transition hover:scale-105 hover:border-gold-2 hover:bg-black md:right-6 md:top-6"
        aria-label="Fechar e voltar ao portfólio"
        title="Fechar (ESC)"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Topbar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <button
              onClick={close}
              data-cursor
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-200 transition hover:border-gold-3/50 hover:text-gold-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar ao portfólio</span>
            </button>
            <div className="h-5 w-px bg-white/10" />
            <div className="min-w-0">
              <h1 className="truncate font-display text-sm font-bold md:text-base">
                {project.client}
              </h1>
              <p className="truncate tech-mono text-[10px] uppercase tracking-widest text-gold-100/80">
                {project.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isGallery ? (
              <span className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 tech-mono text-[10px] uppercase tracking-widest text-gold-100/80 sm:inline-flex">
                <Images className="h-3.5 w-3.5" />
                {project.shots!.length} telas
              </span>
            ) : (
              <>
                <div className="hidden items-center rounded-full border border-white/10 p-1 sm:flex">
                  <button
                    data-cursor
                    onClick={() => setDevice("desktop")}
                    className={`flex h-7 w-8 items-center justify-center rounded-full transition ${
                      device === "desktop" ? "bg-gold-metal text-black" : "text-neutral-400 hover:text-white"
                    }`}
                    aria-label="Visualizar desktop"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    data-cursor
                    onClick={() => setDevice("mobile")}
                    className={`flex h-7 w-8 items-center justify-center rounded-full transition ${
                      device === "mobile" ? "bg-gold-metal text-black" : "text-neutral-400 hover:text-white"
                    }`}
                    aria-label="Visualizar mobile"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                </div>
                <button
                  data-cursor
                  onClick={reload}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-gold-3/50 hover:text-gold-100"
                  aria-label="Recarregar"
                >
                  <RotateCw className="h-4 w-4" />
                </button>
                <button
                  data-cursor
                  onClick={fullscreen}
                  className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-gold-3/50 hover:text-gold-100 sm:flex"
                  aria-label="Tela cheia"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </>
            )}
            {project.live && (
              <a
                data-cursor
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Abrir site real</span>
                <span className="md:hidden">Abrir</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Palco */}
      <main className="flex flex-1 items-start justify-center p-3 md:p-6">
        {isGallery ? (
          /* === MODO GALERIA DE PRINTS === */
          <div className="w-full max-w-[1100px]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_40px_120px_-40px_rgba(201,162,75,0.35)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center tech-mono text-[11px] text-neutral-400">
                  {project.live?.replace(/^https?:\/\//, "") ?? project.slug}
                </div>
              </div>
              {/* prints empilhados, sem emenda */}
              <div className="bg-black">
                {project.shots!.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`${project.client} — tela ${i + 1}`}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="block w-full"
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-neutral-500">
              Projeto desenvolvido pela JV WEB STUDIO · galeria de telas do projeto.
            </p>
          </div>
        ) : (
          /* === MODO IFRAME (site rodando) === */
          <div
            className={`relative w-full transition-all duration-500 ease-out ${
              device === "mobile" ? "max-w-[400px]" : "max-w-[1600px]"
            }`}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_40px_120px_-40px_rgba(201,162,75,0.35)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center tech-mono text-[11px] text-neutral-400">
                  {project.live?.replace(/^https?:\/\//, "") ?? project.slug}
                </div>
              </div>
              <div className="relative bg-white" style={{ height: "calc(100vh - 200px)", minHeight: "520px" }}>
                {loading && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-base">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold-3/30 border-t-gold-2" />
                      <span className="tech-mono text-xs text-neutral-400">carregando projeto…</span>
                    </div>
                  </div>
                )}
                <iframe
                  key={key}
                  ref={frameRef}
                  src={project.embed}
                  title={project.client}
                  className="h-full w-full border-0"
                  loading="lazy"
                  onLoad={() => setLoading(false)}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-neutral-500">
              Projeto desenvolvido pela JV WEB STUDIO · navegue à vontade, é o site real rodando.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
