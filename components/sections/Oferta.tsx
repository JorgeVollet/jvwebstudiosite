import Reveal from "@/components/Reveal";
import { OFERTA } from "@/lib/site";
import { ShieldCheck, Eye, HandCoins, Check } from "lucide-react";

const ICONS = [Eye, ShieldCheck, HandCoins];

export default function Oferta() {
  return (
    <section
      id="oferta"
      className="section-dark relative overflow-hidden bg-dark py-28"
    >
      {/* halo dourado central */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, rgba(201,162,75,0.14), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/50 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-100 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" /> {OFERTA.badge}
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {OFERTA.titulo}{" "}
            <span className="text-gold-shine">{OFERTA.tituloAccent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
            {OFERTA.sub}
          </p>
        </Reveal>

        {/* 3 garantias */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {OFERTA.pontos.map((p, i) => {
            const Icon = ICONS[i] ?? Check;
            return (
              <Reveal key={p.titulo} delay={i * 120}>
                <div className="card-dark gold-border flex h-full flex-col items-center gap-4 p-7 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-metal text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gold-metal">
                    {p.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/85">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <a
              href="#briefing"
              className="btn-gold px-9 py-4 text-sm uppercase tracking-widest"
            >
              {OFERTA.cta}
            </a>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Sem cartão · sem compromisso · resposta em até 24h
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
