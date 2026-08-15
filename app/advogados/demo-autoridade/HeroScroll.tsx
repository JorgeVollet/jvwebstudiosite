'use client';

/* ============================================================================
   HERO EM SCROLL · demo Autoridade (tema Lex)
   Sequência de frames desenhada em canvas e conduzida pelo scroll. O conteúdo
   textual é HTML real (SEO e leitor de tela leem sem depender de rolagem).
   Toda a coreografia vive em ./hero-timeline.
============================================================================ */

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  T,
  TRILHAS,
  escolherTrilha,
  caminhoFrame,
  faixa,
  suave,
  suaveDupla,
  lerp,
  clamp,
  type TrilhaId,
} from './hero-timeline';

const SERIF = { fontFamily: 'var(--font-cinzel), Georgia, serif' };
const SERIF_MED = { ...SERIF, fontWeight: 500 };

type Conexao = { saveData?: boolean; effectiveType?: string };

export default function HeroScroll({ wa }: { wa: string }) {
  const palco = useRef<HTMLElement | null>(null);
  const cv = useRef<HTMLCanvasElement | null>(null);
  const poster = useRef<HTMLImageElement | null>(null);
  const kicker = useRef<HTMLParagraphElement | null>(null);
  const l1 = useRef<HTMLSpanElement | null>(null);
  const l2 = useRef<HTMLSpanElement | null>(null);
  const l3 = useRef<HTMLSpanElement | null>(null);
  const sub = useRef<HTMLParagraphElement | null>(null);
  const acoes = useRef<HTMLDivElement | null>(null);
  const coluna = useRef<HTMLDivElement | null>(null);
  const card = useRef<HTMLDivElement | null>(null);
  const moldura = useRef<SVGRectElement | null>(null);
  const conteudoCard = useRef<HTMLDivElement | null>(null);
  const ano = useRef<HTMLSpanElement | null>(null);
  const mono = useRef<HTMLSpanElement | null>(null);
  const rodape = useRef<HTMLDivElement | null>(null);
  const fio = useRef<HTMLDivElement | null>(null);
  const cue = useRef<HTMLDivElement | null>(null);
  const veu = useRef<HTMLDivElement | null>(null);
  const barraTopo = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = cv.current;
    const secao = palco.current;
    if (!canvas || !secao) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, T.dprMax);
    const trilha: TrilhaId = escolherTrilha(window.innerWidth, window.devicePixelRatio || 1);
    const N = TRILHAS[trilha].frames;
    const quadros: (HTMLImageElement | null)[] = new Array(N).fill(null);

    let W = 0;
    let H = 0;
    let pronto = false;
    let rodando = false;
    let alvo = 0;
    let atual = 0;
    let vivo = true;

    const medir = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pintar = (i: number, p: number) => {
      let im = quadros[clamp(i, 0, N - 1)] ?? null;
      if (!im) for (let d = 1; d < N && !im; d++) im = quadros[i - d] ?? quadros[i + d] ?? null;
      if (!im) return;
      const ri = im.width / im.height;
      const rc = W / H;
      let w: number;
      let h: number;
      if (ri > rc) {
        h = H;
        w = H * ri;
      } else {
        w = W;
        h = W / ri;
      }
      // no celular o quadro caminha para a esquerda no mergulho, senão o abajur sai de cena
      const foco = W < 820 ? lerp(0.62, 0.34, suaveDupla(faixa(p, [0.55, 1]))) : 0.62;
      ctx.fillStyle = '#0B0B0C';
      ctx.fillRect(0, 0, W, H);
      ctx.drawImage(im, (W - w) * foco, (H - h) / 2, w, h);
    };

    const entra = (
      node: HTMLElement | null,
      p: number,
      janela: readonly [number, number],
      dx: number,
    ) => {
      if (!node) return 0;
      const t = suave(faixa(p, janela));
      node.style.opacity = String(t);
      node.style.filter = `blur(${lerp(8, 0, t)}px)`;
      node.style.transform = `translate3d(${lerp(dx, 0, t)}px,${lerp(26, 0, t)}px,0)`;
      return t;
    };

    const sai = (
      node: HTMLElement | null,
      p: number,
      janela: readonly [number, number],
      dir: number,
    ) => {
      if (!node) return;
      const s = suaveDupla(faixa(p, janela));
      if (s <= 0) return;
      node.style.opacity = String(1 - s);
      node.style.filter = `blur(${s * 14}px)`;
      node.style.transform = `translate3d(${dir * s * 46}vw,${-s * 4}vh,0) scale(${lerp(1, 1.12, s)})`;
    };

    const posicionarCard = (p: number) => {
      const c = card.current;
      const rect = moldura.current;
      const cont = conteudoCard.current;
      if (!c || !rect || !cont) return;
      const estreito = W < 820;
      const t = suaveDupla(faixa(p, estreito ? T.cardViraSeloMobile : T.cardViraSelo));
      const largA = estreito ? 62 : Math.min(320, W * 0.26);
      const largB = estreito ? 62 : 84;
      const w = lerp(largA, largB, t);
      const h = w * lerp(estreito ? 1 : 4.2 / 3, 1, t);
      const right = lerp(estreito ? T.seloRight : W * 0.06, T.seloRight, t);
      const top = lerp(estreito ? H - h - T.seloBottom : (H - h) / 2 + 24, H - h - T.seloBottom, t);

      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      c.style.right = `${right}px`;
      c.style.top = `${top}px`;
      c.style.opacity = String(faixa(p, estreito ? T.cardEntraMobile : T.cardEntra));
      c.style.willChange = t > 0.001 && t < 0.999 ? 'width,height,top' : 'auto';

      const perim = 2 * (w + h);
      const d = suave(faixa(p, T.cardMoldura));
      rect.setAttribute('width', String(Math.max(0, w - 1.4)));
      rect.setAttribute('height', String(Math.max(0, h - 1.4)));
      rect.style.strokeDasharray = String(perim);
      rect.style.strokeDashoffset = String(perim * (1 - d));

      cont.style.padding = `${lerp(8, 0, t)}% ${lerp(8, 0, t)}% ${lerp(7, 0, t)}%`;
      cont.style.justifyContent = t > 0.6 ? 'center' : 'space-between';

      if (mono.current) {
        const m = suave(faixa(p, T.cardMono));
        mono.current.style.fontSize = `${w * (t > 0.6 ? 0.52 : 0.46)}px`;
        mono.current.style.opacity = String(m);
        mono.current.style.filter = `blur(${lerp(14, 0, m)}px)`;
        mono.current.style.transform = `translate3d(0,${lerp(26, 0, m)}px,0)`;
      }

      const fade = estreito ? 0 : 1 - suave(faixa(p, T.cardTextosSai));
      const tx = suave(faixa(p, T.cardTextos));
      if (ano.current) {
        ano.current.style.opacity = String(tx * fade);
        ano.current.style.fontSize = `${Math.max(7, w * 0.032)}px`;
      }
      if (rodape.current) {
        rodape.current.style.opacity = String(tx * fade);
        rodape.current.style.paddingTop = `${w * 0.075}px`;
        rodape.current.style.transform = `translate3d(0,${lerp(14, 0, tx)}px,0)`;
        const nome = rodape.current.querySelector('b');
        const linha = rodape.current.querySelector('i');
        if (nome) (nome as HTMLElement).style.fontSize = `${Math.max(8, w * 0.041)}px`;
        if (linha) (linha as HTMLElement).style.fontSize = `${Math.max(6, w * 0.031)}px`;
      }
    };

    const aplicar = (p: number) => {
      const q = faixa(p, [T.respiro[1], 1]);
      pintar(Math.round(q * (N - 1)), p);

      if (barraTopo.current) barraTopo.current.style.opacity = String(1 - faixa(p, T.headerSai));
      if (cue.current) cue.current.style.opacity = String(1 - faixa(p, T.cueSai));
      if (veu.current) veu.current.style.opacity = String(lerp(1, 0.18, suaveDupla(faixa(p, T.veuAlivia))));
      if (coluna.current) coluna.current.style.transform = `translate3d(0,${-p * 34}px,0)`;

      entra(kicker.current, p, T.kicker, -18);
      entra(l1.current, p, T.linha1, -26);
      entra(l2.current, p, T.linha2, -26);
      entra(l3.current, p, T.linha3, -26);
      entra(sub.current, p, T.sub, -20);

      const c = suave(faixa(p, T.cta));
      if (acoes.current) {
        acoes.current.style.opacity = String(c);
        acoes.current.style.transform = `translate3d(0,${lerp(24, 0, c)}px,0)`;
        // nada de foco de teclado em botão invisível
        acoes.current.style.visibility = c < 0.05 ? 'hidden' : 'visible';
        acoes.current.setAttribute('aria-hidden', c < 0.05 ? 'true' : 'false');
      }

      if (p > T.subSai[0]) {
        if (kicker.current) kicker.current.style.opacity = String(1 - faixa(p, T.kickerSai));
        sai(l1.current, p, T.linha1Sai, -1);
        sai(l2.current, p, T.linha2Sai, 1);
        sai(l3.current, p, T.linha3Sai, -1);
        const s = suaveDupla(faixa(p, T.subSai));
        if (sub.current) {
          sub.current.style.opacity = String(1 - s);
          sub.current.style.transform = `translate3d(0,${-s * 30}px,0)`;
        }
        const a = suaveDupla(faixa(p, T.ctaSai));
        if (acoes.current) {
          acoes.current.style.opacity = String(c * (1 - a));
          acoes.current.style.transform = `translate3d(0,${-a * 26}px,0)`;
          if (a > 0.95) {
            acoes.current.style.visibility = 'hidden';
            acoes.current.setAttribute('aria-hidden', 'true');
          }
        }
      }

      posicionarCard(p);

      if (fio.current) {
        const f = faixa(p, T.fio);
        const op = f > 0 ? Math.sin(f * Math.PI) : 0;
        fio.current.style.display = op < 0.02 ? 'none' : 'block';
        fio.current.style.opacity = String(op);
        fio.current.style.width = `${f * 100}%`;
        fio.current.style.top = `${lerp(H * 0.72, H * 0.5, f)}px`;
      }
    };

    const progresso = () => {
      const r = secao.getBoundingClientRect();
      const total = secao.offsetHeight - window.innerHeight;
      return total > 0 ? clamp(-r.top / total) : 0;
    };

    const quadro = () => {
      if (!vivo) return;
      atual += (alvo - atual) * T.amortecimento;
      if (Math.abs(alvo - atual) < 0.0002) atual = alvo;
      aplicar(atual);
      rodando = Math.abs(alvo - atual) > 0.0002;
      if (rodando) requestAnimationFrame(quadro);
    };

    const aoRolar = () => {
      alvo = progresso();
      if (!rodando && pronto) {
        rodando = true;
        requestAnimationFrame(quadro);
      }
    };

    const aoRedimensionar = () => {
      medir();
      alvo = progresso();
      atual = alvo;
      aplicar(atual);
    };

    const revelarCanvas = () => {
      canvas.style.opacity = '1';
      if (poster.current) poster.current.style.opacity = '0';
    };

    medir();

    if (menosMovimento) {
      // sem movimento: o quadro em que ele encara, e todo o texto em repouso
      secao.style.height = '100dvh';
      const im = new Image();
      im.onload = () => {
        quadros[0] = im;
        pronto = true;
        revelarCanvas();
        aplicar(T.quadroEstatico);
      };
      im.src = caminhoFrame(trilha, Math.round(N * T.quadroEstatico));
      window.addEventListener('resize', aoRedimensionar);
      return () => {
        vivo = false;
        window.removeEventListener('resize', aoRedimensionar);
      };
    }

    const conexao = (navigator as Navigator & { connection?: Conexao }).connection;
    const redeFraca = !!conexao?.saveData || /(^|-)2g$/.test(conexao?.effectiveType ?? '');

    if (!redeFraca) {
      // duas ondas: 1 a cada 4 libera o scrub, o resto refina sozinho
      const ordem: number[] = [];
      for (let i = 0; i < N; i += 4) ordem.push(i);
      for (let i = 0; i < N; i++) if (i % 4) ordem.push(i);
      const primeiraOnda = Math.ceil(N / 4);
      let feitos = 0;

      ordem.forEach((idx, pos) => {
        const disparar = () => {
          if (!vivo) return;
          const im = new Image();
          im.decoding = 'async';
          const fim = () => {
            quadros[idx] = im.naturalWidth ? im : null;
            feitos += 1;
            if (!pronto && feitos >= primeiraOnda) {
              pronto = true;
              revelarCanvas();
              alvo = progresso();
              atual = alvo;
              aplicar(atual);
            }
          };
          im.onload = fim;
          im.onerror = fim;
          im.src = caminhoFrame(trilha, idx);
        };
        if (pos < primeiraOnda) disparar();
        else window.setTimeout(disparar, 80);
      });
    }

    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRedimensionar);
    aplicar(0);

    return () => {
      vivo = false;
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRedimensionar);
    };
  }, []);

  return (
    <section ref={palco} id="inicio" className="relative h-[400vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={poster}
          src="/demo-autoridade/hero/poster.webp"
          alt=""
          aria-hidden
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-500"
        />
        <canvas ref={cv} aria-hidden className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500" />

        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(58%_70%_at_78%_30%,rgba(212,175,55,.10),transparent_70%)]" />
        <div
          ref={veu}
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/95 via-[#0B0B0C]/90 to-[#0B0B0C]/35 md:bg-gradient-to-r md:from-[#0B0B0C] md:via-[#0B0B0C]/88 md:to-[#0B0B0C]/25"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/70 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0C] to-transparent" />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center pt-[97px]">
          <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 md:grid-cols-[7fr_5fr] md:items-center md:gap-8">
            <div ref={coluna}>
              <p ref={kicker} className="text-xs uppercase tracking-[0.32em] text-[#A6A29A]">
                Advocacia empresarial, tributária e societária
              </p>
              <h1 className="mt-7 text-[2.6rem] leading-[1.06] tracking-tight md:text-6xl" style={SERIF_MED}>
                <span ref={l1} className="block">Empresas fortes</span>
                <span ref={l2} className="block">não improvisam</span>
                <span ref={l3} className="lex-ouro block">no jurídico.</span>
              </h1>
              <p ref={sub} className="mt-7 max-w-[46ch] text-[15.5px] leading-relaxed text-[#A6A29A]">
                Prevenção e confronto na medida certa, para quem tem patrimônio a proteger e decisões grandes a tomar.
              </p>
              <div ref={acoes} className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-gradient-to-b from-[#F5D76E] to-[#C9A24B] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#171204] shadow-[0_14px_40px_-12px_rgba(212,175,55,.5)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_48px_-12px_rgba(212,175,55,.65)]"
                >
                  Falar com o escritório
                </a>
                <a
                  href="#areas"
                  className="group inline-flex items-center gap-2 px-2 py-4 text-[13px] uppercase tracking-[0.14em] text-[#A6A29A] transition hover:text-[#F5D76E]"
                >
                  Conhecer as áreas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Estela de vidro: nasce como placa e termina como selo, acima do FAB */}
        <div
          ref={card}
          aria-hidden
          className="absolute z-20 overflow-hidden rounded-[3px] border border-[#D4AF37]/35 bg-[#0B0B0C]/40 opacity-0 shadow-[0_34px_90px_-34px_rgba(0,0,0,0.95)] backdrop-blur-md"
        >
          <svg preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <rect ref={moldura} x="0.7" y="0.7" rx="2" fill="none" stroke="rgba(212,175,55,.55)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          </svg>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.09] via-transparent to-black/25" />
          <div aria-hidden className="pointer-events-none absolute inset-[1px] rounded-[2px] border border-white/10" />
          <div ref={conteudoCard} className="relative flex h-full w-full flex-col items-center justify-between">
            <span ref={ano} className="uppercase tracking-[0.5em] text-[#C9A24B]" style={SERIF}>MMVIII</span>
            <span ref={mono} className="lex-ouro leading-[0.82]" style={SERIF}>M</span>
            <div ref={rodape} className="w-full border-t border-[#D4AF37]/30 text-center">
              <b className="block font-normal uppercase tracking-[0.26em] text-[#F2F0EA]" style={SERIF}>Meirelles</b>
              <i className="mt-2 block not-italic uppercase tracking-[0.3em] text-[#A6A29A]">Advocacia empresarial</i>
            </div>
          </div>
        </div>

        <div ref={fio} aria-hidden className="absolute left-0 z-20 hidden h-px bg-gradient-to-r from-transparent via-[#F5D76E] to-transparent" />

        <div ref={cue} aria-hidden className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[9.5px] uppercase tracking-[0.34em] text-[#A6A29A]">
          <span className="lex-desce h-10 w-px bg-gradient-to-b from-[#C9A24B] to-transparent" />
          role
        </div>
      </div>
      <div id="hero-fim" aria-hidden className="absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
