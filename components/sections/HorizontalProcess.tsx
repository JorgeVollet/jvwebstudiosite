"use client";
import { useEffect, useRef } from "react";
import { PROCESS } from "@/lib/site";

/**
 * Scrollytelling horizontal — mesma mecânica da referência:
 * a seção tem altura ~420vh; o conteúdo fica `sticky` por uma tela inteira;
 * conforme o usuário rola verticalmente, o track move horizontalmente (translateX)
 * proporcional à fração de scroll dentro da seção. Ao terminar, volta a descer.
 */
export default function HorizontalProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

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
          if (fillRef.current) fillRef.current.style.width = `${pct * 100}%`;
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
    <section ref={sectionRef} id="processo" className="horizontal-section border-t border-white/5 bg-surface">
      <div className="h-sticky">
        {/* Barra de progresso dourada */}
        <div className="absolute left-0 top-0 z-20 h-0.5 w-full bg-white/5">
          <div ref={fillRef} className="h-full bg-gold-metal" style={{ width: "0%" }} />
        </div>
        <div className="section-label absolute left-6 top-6 z-20 md:left-10">[ COMO TRABALHAMOS · ROLE PARA O LADO ]</div>

        <div ref={trackRef} className="h-track">
          {/* Painel de título */}
          <div className="flex w-[85vw] shrink-0 flex-col justify-center md:w-[40vw]">
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Nosso<br /><span className="text-gold-shine">Processo</span>
            </h2>
            <p className="mt-6 max-w-md text-neutral-400">
              Do pacote escolhido ao site no ar em <strong className="text-gold-100">7 dias úteis</strong>.
              Agilidade sem perder qualidade — role para o lado e veja cada etapa.
            </p>
          </div>

          {/* Etapas */}
          {PROCESS.map((p) => (
            <div key={p.n} className="flex w-[78vw] shrink-0 items-center md:w-[34vw]">
              <div className="process-card gold-border h-[58vh] w-full p-10 flex flex-col justify-between">
                {/* Foto de fundo da etapa */}
                <div
                  className="process-card__img"
                  style={{
                    backgroundImage: `url(${p.img})`,
                    backgroundPosition: p.pos ?? "center",
                  }}
                  aria-hidden
                />
                <div className="process-card__veil" aria-hidden />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="font-display text-7xl font-bold text-gold-metal md:text-8xl">
                    {p.n}
                  </span>
                  {p.tag && <span className="tech-tag mt-2 shrink-0">{p.tag}</span>}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <div className="my-4 h-px w-16 bg-gold-3" />
                  <p className="text-neutral-300">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Painel final / CTA */}
          <div className="flex w-[80vw] shrink-0 items-center md:w-[36vw]">
            <div className="w-full text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-100">pronto?</p>
              <h3 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                Vamos construir <span className="text-gold-metal">o seu projeto.</span>
              </h3>
              <a href="#contato" className="btn-gold mt-8 inline-flex px-8 py-4 text-sm uppercase tracking-widest">
                Iniciar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
