import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/site";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative border-t border-white/5 bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ DEPOIMENTOS ]</div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Quem confia, <span className="text-gold-metal">recomenda.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 120}>
              <figure className="card-dark h-full p-8">
                <Quote className="h-8 w-8 text-gold-3/60" />
                <blockquote className="mt-4 text-lg leading-relaxed text-neutral-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-metal font-display font-bold text-black">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-xs text-neutral-600">
          [ depoimentos ilustrativos — substitua pelos reais quando quiser ]
        </p>
      </div>
    </section>
  );
}
