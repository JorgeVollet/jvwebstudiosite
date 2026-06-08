"use client";
import UnicornBackground from "@/components/backgrounds/UnicornBackground";
import { HERO, SITE, STATS } from "@/lib/site";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="section-dark relative flex min-h-screen items-center overflow-hidden">
      {/* Background animado (UnicornStudio) — forçado preto */}
      <UnicornBackground projectId="cqcLtDwfoHqqRPttBbQE" dim={0.4} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:px-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-100" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-100">
            {HERO.badge}
          </span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          {HERO.titleTop}
          <br />
          <span className="text-gold-shine">{HERO.titleAccent}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
          {HERO.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#contato" className="btn-gold px-8 py-4 text-sm uppercase tracking-widest">
            Começar meu projeto
          </a>
          <a href="#servicos" className="btn-outline-gold px-8 py-4 text-sm uppercase tracking-widest">
            Ver serviços
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-black/40 p-6 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold text-gold-metal md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold-100/70 animate-float" aria-label="Rolar">
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
