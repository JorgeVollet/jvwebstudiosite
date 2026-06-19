"use client";

import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/site";

/**
 * Testimonials — "Floating Glassmorphism Testimonial Constellation".
 * Desktop: cards de vidro espalhados como constelação, flutuando suave em loop.
 *   Hover em um card → ele vem à frente e ganha foco; os outros desfocam.
 * Mobile: vira carrossel horizontal com scroll-snap.
 * Fundo escuro (o vidro fosco precisa de fundo escuro pra brilhar).
 */

type Item = (typeof TESTIMONIALS)[number];

function Stars() {
  return (
    <div className="constel-stars" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function Card({ t, featured = false }: { t: Item; featured?: boolean }) {
  return (
    <figure className={`constel-card ${featured ? "constel-card--featured" : ""}`}>
      <div className="constel-card__top">
        <Stars />
        <span className="constel-card__quote" aria-hidden>
          &rdquo;
        </span>
      </div>
      <blockquote className="constel-card__text">{t.quote}</blockquote>
      <figcaption className="constel-card__author">
        <span className="constel-card__avatar">{t.name.charAt(0)}</span>
        <span className="min-w-0">
          <span className="constel-card__name">{t.name}</span>
          <span className="constel-card__role">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const featured = TESTIMONIALS.find((t) => "featured" in t && t.featured) ?? TESTIMONIALS[0];
  const others = TESTIMONIALS.filter((t) => t !== featured);

  // posições da constelação (desktop) para até 4 cards ao redor do central
  const spots = [
    "constel-pos-1",
    "constel-pos-2",
    "constel-pos-3",
    "constel-pos-4",
  ];

  return (
    <section className="section-dark relative overflow-hidden border-t border-white/10 bg-dark py-28">
      {/* brilho radial de fundo */}
      <div className="constel-glow" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <div className="section-label">[ DEPOIMENTOS ]</div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Quem confia, <span className="text-gold-metal">recomenda.</span>
            </h2>
          </div>
        </Reveal>

        {/* ===== Desktop: constelação flutuante ===== */}
        <div className="constel hidden md:block">
          {/* card central destacado */}
          <div className="constel-center">
            <Card t={featured} featured />
          </div>
          {/* cards ao redor */}
          {others.map((t, i) => (
            <div key={t.name} className={`constel-float ${spots[i] ?? ""}`}>
              <Card t={t} />
            </div>
          ))}
        </div>

        {/* ===== Mobile: carrossel horizontal ===== */}
        <div className="constel-carousel md:hidden">
          <Card t={featured} featured />
          {others.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
