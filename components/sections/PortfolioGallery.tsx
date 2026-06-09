"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import UnicornBackground from "@/components/backgrounds/UnicornBackground";

export default function PortfolioGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // No mobile (iOS sobretudo), vários iframes ao vivo + WebGL estouram a memória
  // e crasham a aba. Detectamos mobile p/ trocar previews por imagem leve e
  // desligar o fundo WebGL aqui — o site ao vivo continua abrindo ao clicar.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    const section = sectionRef.current!;
    const track = trackRef.current!;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const winH = window.innerHeight;
        const scrollTop = window.scrollY;
        if (scrollTop >= offset && scrollTop <= offset + height - winH) {
          const pct = (scrollTop - offset) / (height - winH);
          const move = (track.scrollWidth - window.innerWidth) * pct;
          track.style.transform = `translateX(-${move}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="section-dark horizontal-section border-t border-white/10 bg-dark">
      <div className="h-sticky">
        {/* Background animado (UnicornStudio) atrás dos cards — só no desktop
            (no mobile pesa demais e crasha o Safari/iOS) */}
        {!isMobile && (
          <UnicornBackground projectId="N9XzvQXu7fA5SY2ewADJ" dim={0.25} className="!z-0" />
        )}

        <div className="absolute left-6 top-6 z-20 md:left-10">
          <div className="section-label">[ PORTFÓLIO · PROJETOS & CASES ]</div>
        </div>
        <div ref={trackRef} className="h-track relative z-10">
          <div className="flex w-[85vw] shrink-0 flex-col justify-center md:w-[38vw]">
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Projetos<br /><span className="text-gold-metal">& Cases</span>
            </h2>
            <p className="mt-6 max-w-md text-neutral-600">
              Clique em qualquer projeto para ver o site <strong className="text-gold-100">rodando de verdade</strong> —
              com scroll, efeitos e tudo funcional. Arraste para percorrer.
            </p>
          </div>

          {PROJECTS.map((p) => (
            <div key={p.slug} className="flex w-[80vw] shrink-0 items-center md:w-[42vw]">
              <Link
                href={`/portfolio/${p.slug}`}
                data-cursor
                className="portfolio-card group block h-[64vh] w-full overflow-hidden rounded-2xl"
              >
                {/* Preview: print (galeria), ou site ao vivo (iframe no desktop),
                    ou placeholder leve (mobile — evita crash por excesso de iframes) */}
                <div className="relative h-3/5 overflow-hidden bg-surface2">
                  {p.shots && p.shots.length > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.shots[0]}
                      alt={p.client}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : isMobile ? (
                    // mobile: placeholder estilizado em vez do iframe ao vivo
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#161208] to-[#0a0a0a]">
                      <span className="font-display text-4xl font-bold text-gold-metal opacity-80">
                        {p.client}
                      </span>
                      <span className="mt-2 tech-mono text-[10px] uppercase tracking-widest text-gold-100/70">
                        toque para ver ao vivo
                      </span>
                    </div>
                  ) : (
                    <div className="portfolio-card__preview">
                      <iframe
                        src={p.embed}
                        title={p.client}
                        tabIndex={-1}
                        aria-hidden
                        scrolling="no"
                        className="pointer-events-none"
                      />
                    </div>
                  )}
                  {/* overlay que escurece e mostra a ação */}
                  <div className="portfolio-card__overlay">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/60 bg-black/50 px-4 py-2 tech-mono text-xs uppercase tracking-widest text-gold-100 backdrop-blur-sm">
                      {p.shots ? "Ver telas" : "Ver rodando"} <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 rounded-full bg-gold-metal px-3 py-1 tech-mono text-[10px] font-bold uppercase tracking-widest text-black">
                    {p.tag}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-gold-metal">{p.client}</h3>
                  <div className="my-3 h-px w-12 bg-gold-3 transition-all duration-500 group-hover:w-24" />
                  <p className="text-sm text-white/85">{p.desc}</p>
                  <p className="mt-4 tech-mono text-[11px] uppercase tracking-widest text-gold-100/70">
                    {p.category}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
