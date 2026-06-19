"use client";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { Instagram as IgIcon, Heart, MessageCircle, ExternalLink } from "lucide-react";

type IgItem = { id: string; media_url?: string; thumbnail_url?: string; permalink?: string; caption?: string; media_type?: string };

export default function Instagram() {
  const [items, setItems] = useState<IgItem[]>([]);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => { setConfigured(d.configured); setItems(d.data || []); })
      .catch(() => {});
  }, []);

  const igUrl = `https://instagram.com/${SITE.instagram}`;
  const placeholders = Array.from({ length: 9 });

  return (
    <section className="relative border-t border-white/5 bg-base py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="section-label">[ NO INSTAGRAM ]</div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Acompanhe nossos <span className="text-gold-metal">bastidores.</span>
            </h2>
            <a href={igUrl} target="_blank" rel="noopener"
               className="mt-3 inline-flex items-center gap-2 text-neutral-400 transition hover:text-gold-100">
              <IgIcon className="h-4 w-4" /> @{SITE.instagram}
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a href={igUrl} target="_blank" rel="noopener"
               className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 text-sm uppercase tracking-widest">
              <IgIcon className="h-4 w-4" /> Seguir
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {configured && items.length > 0
            ? items.map((it) => (
                <a key={it.id} href={it.permalink} target="_blank" rel="noopener"
                   className="group relative aspect-square overflow-hidden rounded-xl border border-white/5">
                  <img
                    src={it.media_type === "VIDEO" ? it.thumbnail_url : it.media_url}
                    alt={it.caption?.slice(0, 60) || "Instagram"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/60 group-hover:opacity-100">
                    <ExternalLink className="h-6 w-6 text-gold-100" />
                  </div>
                </a>
              ))
            : placeholders.map((_, i) => (
                <a key={i} href={igUrl} target="_blank" rel="noopener"
                   className="group relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-surface2 to-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IgIcon className="h-8 w-8 text-gold-3/30 transition group-hover:scale-125 group-hover:text-gold-100" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-xs text-white"><Heart className="h-3 w-3" /> —</span>
                    <span className="flex items-center gap-1 text-xs text-white"><MessageCircle className="h-3 w-3" /> —</span>
                  </div>
                </a>
              ))}
        </div>

        {!configured && (
          <p className="mt-6 text-center font-mono text-xs text-neutral-600">
            [ feed conectado automaticamente quando o token do Instagram for configurado ·
            por enquanto os cards levam ao perfil ]
          </p>
        )}
      </div>
    </section>
  );
}
