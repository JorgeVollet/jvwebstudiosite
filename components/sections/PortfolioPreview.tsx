import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import UnicornBackground from "@/components/backgrounds/UnicornBackground";
import { PROJECTS } from "@/lib/projects";

/**
 * Prévia do portfólio para a home — fundo preto com WebGL (UnicornStudio).
 * Mostra uma amostra de projetos em cards estáticos — imagem WebP para quem
 * tem shots, placeholder preto+dourado para os demais. SEM iframe (esses
 * ficam só na subpágina /portfolio e /portfolio/[slug]).
 * O WebGL aqui é leve pois não há iframes ao vivo competindo na home.
 */
export default function PortfolioPreview() {
  // amostra: prioriza quem tem print (mais bonito), completa com os demais
  const comShots = PROJECTS.filter((p) => p.shots && p.shots.length > 0);
  const semShots = PROJECTS.filter((p) => !p.shots || p.shots.length === 0);
  const amostra = [...comShots, ...semShots].slice(0, 4);

  return (
    <section
      id="portfolio"
      className="section-dark relative overflow-hidden border-t border-white/10 bg-dark py-32"
    >
      {/* Background animado (UnicornStudio) — o mesmo do portfólio, fundo preto */}
      <UnicornBackground projectId="N9XzvQXu7fA5SY2ewADJ" dim={0.3} className="!z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ PORTFÓLIO · PROJETOS & CASES ]</div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Projetos reais, <span className="text-gold-metal">no ar e funcionando.</span>
            </h2>
            <Link
              href="/portfolio"
              className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3 text-xs uppercase tracking-widest"
            >
              Ver portfólio completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Uma amostra do que entrego. Clique para ver cada projeto rodando de verdade.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amostra.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="portfolio-card group block h-full overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                  {p.shots && p.shots.length > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.shots[0]}
                      alt={p.client}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#161208] to-[#0a0a0a] text-center">
                      <span className="px-4 font-display text-2xl font-bold text-gold-metal">
                        {p.client}
                      </span>
                      <span className="mt-2 tech-mono text-[9px] uppercase tracking-widest text-gold-100/70">
                        ver projeto
                      </span>
                    </div>
                  )}
                  <div className="portfolio-card__overlay">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/60 bg-black/50 px-4 py-2 tech-mono text-xs uppercase tracking-widest text-gold-100 backdrop-blur-sm">
                      Ver projeto <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 z-10 rounded-full bg-gold-metal px-3 py-1 tech-mono text-[9px] font-bold uppercase tracking-widest text-black">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-gold-metal">{p.client}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">{p.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
