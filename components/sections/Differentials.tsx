import Reveal from "@/components/Reveal";
import { DIFFERENTIALS } from "@/lib/site";

export default function Differentials() {
  return (
    <section className="relative border-t border-white/5 bg-base py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ POR QUE JV WEB STUDIO ]</div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Nossos <span className="text-gold-metal">Diferenciais</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            O que você ganha ao escolher um estúdio que entrega de verdade.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.n} delay={(i % 3) * 100}>
              <div className="card-dark flex h-full gap-5 p-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-metal font-display text-sm font-bold text-black">
                  {d.n}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
