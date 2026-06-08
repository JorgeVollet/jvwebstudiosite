import Reveal from "@/components/Reveal";
import SplineOrb from "@/components/backgrounds/SplineOrb";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-white/5 bg-base py-32">
      {/* Spline orb sutil ao fundo da direita */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-60">
        <SplineOrb />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ QUEM SOMOS ]</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Estúdio Digital de <span className="text-gold-metal">Alta Performance</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Reveal className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              A <strong className="text-white">JV WEB STUDIO</strong> é um estúdio digital
              especializado na criação de sites profissionais, sistemas web sob medida e
              automações inteligentes com N8N.
            </p>
            <p>
              Trabalhamos com pequenas e médias empresas que precisam de presença digital robusta,
              sistemas internos eficientes e processos automatizados — sem complicação, sem código
              inflado e sem prazos elásticos.
            </p>
            <p>
              Cada projeto é tratado como uma extensão do negócio do cliente: estratégia, design,
              desenvolvimento e operação caminham juntos do briefing à entrega.
            </p>
          </Reveal>

          <Reveal delay={150} className="flex flex-col justify-center">
            <div className="card-dark gold-border p-8">
              <div className="section-label">[ NOSSA ABORDAGEM ]</div>
              <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                Tecnologia que entrega <span className="text-gold-metal">resultado.</span>
              </h3>
              <p className="mt-4 text-neutral-400">
                Construímos cada solução com foco em performance, usabilidade e ROI claro — não em
                jargão técnico ou tendências passageiras.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
