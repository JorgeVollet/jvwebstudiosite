import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfólio — Projetos & Cases",
  description:
    "Projetos reais entregues pela JV WEB STUDIO: sites, e-commerce, sistemas web e automações. Veja cada um rodando de verdade.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioIndex() {
  return (
    <>
      <Header />
      <main className="bg-base pb-32 pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 transition hover:text-gold-metal"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para a home
          </Link>

          <div className="section-label mt-8">[ PORTFÓLIO · PROJETOS &amp; CASES ]</div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Projetos reais, <span className="text-gold-metal">no ar e funcionando.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-600">
            Clique em qualquer projeto para ver o site rodando de verdade — com scroll,
            efeitos e tudo funcional.
          </p>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
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
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-gold-metal">{p.client}</h2>
                  <p className="mt-2 text-sm text-white/80">{p.desc}</p>
                  <p className="mt-4 tech-mono text-[11px] uppercase tracking-widest text-gold-100/70">
                    {p.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
