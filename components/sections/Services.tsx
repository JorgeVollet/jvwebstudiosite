import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { SERVICES } from "@/lib/site";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <section id="servicos" className="relative border-t border-black/10 bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ O QUE FAZEMOS ]</div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Nossos <span className="text-gold-metal">Serviços</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Três pilares. Uma entrega completa. Solução fim-a-fim para o seu negócio digital.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <TiltCard className="h-full p-8">
                <div className="font-display text-5xl font-bold text-gold-metal">{s.n}</div>
                <div className="my-5 h-px w-12 bg-gold-3" />
                <h3 className="font-display text-2xl font-bold leading-tight text-gold-metal">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-white">
                      <Check className="h-4 w-4 shrink-0 text-gold-100" />
                      {it}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
