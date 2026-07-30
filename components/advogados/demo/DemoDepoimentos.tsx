"use client";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

type Depo = { nome: string; texto: string; quando: string };

const GAP = 20; // precisa bater com o gap-5 das fileiras

/** Marquee duplo de avaliações: fileira de cima corre para a esquerda, a de
 *  baixo para a direita, em loop infinito de verdade.
 *
 *  O truque do loop: a fileira é montada com N cópias do conjunto de cards,
 *  onde N é calculado para que UMA cópia sozinha já seja mais larga que a tela.
 *  Sem isso, ao dar a volta sobrava um vão sem cards (o bug antigo). O reset
 *  acontece exatamente na largura de uma cópia, então é imperceptível.
 *
 *  No hover a velocidade DIMINUI suavemente (lerp via rAF + translateX — sem
 *  re-render, sem scroll listener). Reduced-motion: grade estática. */
export default function DemoDepoimentos({ itens }: { itens: Depo[] }) {
  const fileiraA = useRef<HTMLDivElement>(null);
  const fileiraB = useRef<HTMLDivElement>(null);
  const conjuntoA = useRef<HTMLDivElement>(null);
  const conjuntoB = useRef<HTMLDivElement>(null);
  const posicoes = useRef<number[] | null>(null);

  const [copias, setCopias] = useState(3);
  const [reduzido, setReduzido] = useState(false);

  // Quantas cópias são necessárias para cobrir a largura visível
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduzido(true);
      return;
    }
    const calcular = () => {
      const conjunto = conjuntoA.current;
      const fileira = fileiraA.current;
      if (!conjunto || !fileira) return;
      const larguraConjunto = conjunto.offsetWidth + GAP;
      if (larguraConjunto <= GAP) return;
      const visivel = fileira.parentElement?.offsetWidth || window.innerWidth;
      setCopias(Math.max(2, Math.ceil(visivel / larguraConjunto) + 1));
    };
    calcular();
    window.addEventListener("resize", calcular);
    return () => window.removeEventListener("resize", calcular);
  }, []);

  // Animação
  useEffect(() => {
    if (reduzido) return;
    const linhas = [
      { el: fileiraA.current, conj: conjuntoA.current, dir: -1 },
      { el: fileiraB.current, conj: conjuntoB.current, dir: 1 },
    ].filter((l) => l.el && l.conj) as {
      el: HTMLDivElement;
      conj: HTMLDivElement;
      dir: number;
    }[];
    if (!linhas.length) return;

    const larguras = linhas.map((l) => l.conj.offsetWidth + GAP);
    if (larguras.some((w) => w <= GAP)) return;

    // preserva a posição entre recálculos (resize não faz a fileira pular)
    if (!posicoes.current) {
      posicoes.current = linhas.map((l, i) => (l.dir === 1 ? -larguras[i] : 0));
    }

    const velocidades = linhas.map(() => ({ v: 0.6, alvo: 0.6 }));
    const entrar = linhas.map((_, i) => () => { velocidades[i].alvo = 0.12; });
    const sair = linhas.map((_, i) => () => { velocidades[i].alvo = 0.6; });
    linhas.forEach((l, i) => {
      l.el.addEventListener("mouseenter", entrar[i]);
      l.el.addEventListener("mouseleave", sair[i]);
    });

    let raf = 0;
    const tique = () => {
      const pos = posicoes.current!;
      linhas.forEach((l, i) => {
        const s = velocidades[i];
        s.v += (s.alvo - s.v) * 0.06; // desacelera/acelera suave
        pos[i] += s.v * l.dir;
        const largura = larguras[i];
        // volta exatamente uma cópia — como há cópias sobrando à frente,
        // o salto cai sempre num ponto idêntico e não aparece
        if (l.dir === -1 && -pos[i] >= largura) pos[i] += largura;
        if (l.dir === 1 && pos[i] >= 0) pos[i] -= largura;
        l.el.style.transform = `translate3d(${pos[i].toFixed(2)}px,0,0)`;
      });
      raf = requestAnimationFrame(tique);
    };
    raf = requestAnimationFrame(tique);

    return () => {
      cancelAnimationFrame(raf);
      linhas.forEach((l, i) => {
        l.el.removeEventListener("mouseenter", entrar[i]);
        l.el.removeEventListener("mouseleave", sair[i]);
      });
    };
  }, [reduzido, copias, itens.length]);

  const metade = Math.ceil(itens.length / 2);
  const linhaA = itens.slice(0, metade);
  const linhaB = itens.slice(metade);

  const Card = ({ d }: { d: Depo }) => (
    <figure className="w-[340px] shrink-0 rounded-2xl border border-[#E5DCC9] bg-white p-6 transition-transform duration-300 hover:scale-[0.98]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#E8A93C] text-[#E8A93C]" />
          ))}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8272]">
          Avaliação Google
        </span>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-[#433D30]">&ldquo;{d.texto}&rdquo;</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-[#211D16]">
        {d.nome} <span className="ml-1 font-normal text-[#8A8272]">· {d.quando}</span>
      </figcaption>
    </figure>
  );

  /** Uma fileira = N cópias do mesmo conjunto, lado a lado */
  const Fileira = ({
    dados,
    refFileira,
    refConjunto,
  }: {
    dados: Depo[];
    refFileira: React.RefObject<HTMLDivElement>;
    refConjunto: React.RefObject<HTMLDivElement>;
  }) => (
    <div ref={refFileira} className="flex w-max gap-5 will-change-transform">
      {Array.from({ length: reduzido ? 1 : copias }).map((_, c) => (
        <div
          key={c}
          ref={c === 0 ? refConjunto : undefined}
          aria-hidden={c > 0 || undefined}
          className="flex shrink-0 gap-5"
        >
          {dados.map((d, i) => (
            <Card key={`${c}-${i}`} d={d} />
          ))}
        </div>
      ))}
    </div>
  );

  if (reduzido) {
    return (
      <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
        {itens.map((d, i) => (
          <Card key={i} d={d} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <Fileira dados={linhaA} refFileira={fileiraA} refConjunto={conjuntoA} />
      <Fileira dados={linhaB} refFileira={fileiraB} refConjunto={conjuntoB} />
    </div>
  );
}
