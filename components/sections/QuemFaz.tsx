import Reveal from "@/components/Reveal";
import { QUEM_FAZ, SITE } from "@/lib/site";
import { Code2, MessageSquare, Zap } from "lucide-react";

const ICONS = [MessageSquare, Code2, Zap];

export default function QuemFaz() {
  const wa = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "#contato";

  return (
    <section id="quem-faz" className="section-dark relative overflow-hidden bg-dark py-32">
      {/* brilho dourado sutil ao fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(201,162,75,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Coluna do "rosto" — assinatura premium em vez de foto (placeholder pro retrato real) */}
          <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative">
              <div className="flex h-44 w-44 items-center justify-center rounded-3xl border border-gold-3/40 bg-black/50 gold-glow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jv-mark.svg" alt="JV WEB STUDIO" className="h-24 w-24" loading="lazy" decoding="async" />
              </div>
              <span className="absolute -bottom-3 -right-3 rounded-full border border-gold-3/50 bg-black px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-100">
                desde 2024
              </span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold text-white">
              {QUEM_FAZ.nome}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-100">
              {QUEM_FAZ.papel}
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="btn-gold mt-7 px-7 py-3 text-xs uppercase tracking-widest"
            >
              Falar direto comigo
            </a>
          </Reveal>

          {/* Coluna do texto em 1ª pessoa */}
          <Reveal delay={150}>
            <div className="section-label">[ QUEM FAZ O SEU PROJETO ]</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Sem agência, sem ruído. <span className="text-gold-shine">É comigo que você fala.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-neutral-300 md:text-lg">
              {QUEM_FAZ.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* 3 pilares */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {QUEM_FAZ.pilares.map((pil, i) => {
                const Icon = ICONS[i] ?? Zap;
                return (
                  <div key={pil.titulo} className="card-dark flex h-full flex-col gap-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-metal text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-gold-metal">{pil.titulo}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-white/80">{pil.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
