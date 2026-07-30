"use client";
import { useEffect, useRef, useState } from "react";

export type ScrollyItem = {
  titulo: string;
  /** Foto da situação, exibida no painel fixo com crossfade */
  foto: string;
  desc: string;
  /** Passos práticos que a pessoa pode dar AGORA (reciprocidade: ajudar antes de vender) */
  dicas: string[];
  /** Prazo legal real — urgência legítima e educativa */
  prazo?: string;
};

const GEO = { fontFamily: "var(--font-geogira), var(--font-serif), Georgia, serif" };

/** Scrollytelling: painel esquerdo fixo (sticky) com número gigante + foto,
 *  que reage conforme os "dossiês" da direita entram no viewport.
 *  Cada situação é um dossiê: filete dourado, número fantasma, checklist e prazo.
 *  Sem scroll listener: IntersectionObserver puro. */
export default function DemoScrolly({ items }: { items: ScrollyItem[] }) {
  const [ativo, setAtivo] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const painel = useRef<HTMLDivElement>(null);

  /** Centraliza o painel na tela SEM criar vão: em vez de envolvê-lo num contêiner
   *  de altura total (que empurraria a foto para baixo desde o início da seção),
   *  calcula o `top` do sticky para que ele pare no centro óptico ao grudar. */
  useEffect(() => {
    const el = painel.current;
    if (!el) return;
    const CABECALHO = 92;
    const calcular = () => {
      const sobra = window.innerHeight - CABECALHO - el.offsetHeight;
      el.style.top = `${Math.max(CABECALHO, Math.round(CABECALHO + sobra / 2))}px`;
    };
    calcular();
    const ro = new ResizeObserver(calcular);
    ro.observe(el);
    window.addEventListener("resize", calcular);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calcular);
    };
  }, []);

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx || 0);
            setAtivo(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      {/* Painel sticky (desktop) */}
      <div className="relative hidden lg:block">
        {/* O `top` é calculado no efeito acima: a foto começa alinhada com o primeiro
            dossiê (sem vão) e, ao grudar, para no centro óptico da tela. */}
        <div ref={painel} className="sticky overflow-hidden rounded-[28px]">
          <div className="relative aspect-[3/4] bg-[#E3DACA]">
            {/* Uma foto por situação, com crossfade conforme o dossiê ativo */}
            {items.map((s, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={s.titulo}
                src={s.foto}
                alt=""
                aria-hidden
                className={`demo-kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === ativo ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#16281F] via-[#16281F]/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-9">
              <div
                className="font-serif text-[7rem] font-light leading-none text-[#E9F2EA]/90 transition-all duration-500"
                style={GEO}
                key={`n-${ativo}`}
              >
                {String(ativo + 1).padStart(2, "0")}
              </div>
              <p className="mt-2 max-w-xs text-lg font-semibold leading-snug text-white transition-opacity duration-500" key={`t-${ativo}`}>
                {items[ativo]?.titulo}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dossiês */}
      <div className="space-y-5 lg:space-y-7">
        {items.map((s, i) => {
          const on = i === ativo;
          return (
            <div
              key={s.titulo}
              data-idx={i}
              ref={(el) => { refs.current[i] = el; }}
              className={`relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ease-out lg:min-h-[36vh] lg:p-9 ${
                on
                  ? "border-[#D9C494]/80 bg-gradient-to-b from-white to-[#FBF7EE] shadow-[0_36px_70px_-32px_rgba(28,58,46,0.4)] lg:translate-x-2"
                  : "border-[#E5DCC9]/60 bg-white/45 lg:translate-x-0 lg:opacity-50 lg:saturate-[.8]"
              }`}
            >
              {/* filete dourado que acende com o dossiê ativo */}
              <span
                aria-hidden
                className={`absolute bottom-7 left-0 top-7 w-[3px] rounded-full bg-gradient-to-b from-[#F0D9A4] via-[#C89B58] to-[#8C6D2F] transition-opacity duration-500 ${
                  on ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* número fantasma do dossiê */}
              <span
                aria-hidden
                className={`pointer-events-none absolute -top-3 right-5 select-none font-serif text-[5.5rem] font-light leading-none transition-colors duration-500 ${
                  on ? "text-[#C89B58]/25" : "text-[#211D16]/[0.05]"
                }`}
                style={GEO}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="relative max-w-md font-serif text-xl font-semibold text-[#211D16] md:text-2xl" style={GEO}>
                &ldquo;{s.titulo}&rdquo;
              </p>
              <p className="relative mt-3 max-w-md leading-relaxed text-[#6B6455]">{s.desc}</p>

              {/* checklist */}
              <div className="relative mt-6 max-w-md rounded-xl border border-[#D8E5D3] bg-[#EFF5EC] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#24523D]">Faça isso agora, antes de qualquer coisa</p>
                <ul className="mt-3 space-y-2.5">
                  {s.dicas.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-[#3B463C]">
                      <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#3E7C5B]/15 text-[9px] font-bold text-[#24523D]">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* prazo legal: faixa âmbar, urgência legítima */}
              {s.prazo && (
                <p className="relative mt-4 max-w-md rounded-lg border border-[#EAD9B4] bg-[#FBF3DF] px-4 py-3 text-sm font-semibold leading-relaxed text-[#8C6D2F]">
                  ⏱ Atenção ao prazo: {s.prazo}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
