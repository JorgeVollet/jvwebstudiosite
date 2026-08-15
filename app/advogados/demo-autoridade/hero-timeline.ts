/* ============================================================================
   HERO EM SCROLL · demo Autoridade — pontos da coreografia
   Tudo que define TEMPO vive aqui. Ajustar o ritmo do hero não deve exigir
   abrir o componente. Cada par é [início, fim] em progresso do scroll (0 a 1).
============================================================================ */

export type Janela = readonly [number, number];

export const T = {
  /** primeiro quadro parado: o respiro que o resto do site tem */
  respiro: [0.0, 0.04] as Janela,

  kicker: [0.05, 0.13] as Janela,
  linha1: [0.07, 0.17] as Janela,
  linha2: [0.09, 0.19] as Janela, // stagger de 0.02 ≈ os 90ms usados nos grids
  linha3: [0.11, 0.21] as Janela,
  sub: [0.15, 0.26] as Janela,
  /** o CTA só entra quando ele termina de cruzar os braços */
  cta: [0.44, 0.56] as Janela,

  kickerSai: [0.62, 0.72] as Janela,
  linha1Sai: [0.66, 0.86] as Janela,
  linha2Sai: [0.68, 0.88] as Janela,
  linha3Sai: [0.7, 0.9] as Janela,
  subSai: [0.6, 0.74] as Janela,
  ctaSai: [0.68, 0.82] as Janela,

  cardEntra: [0.05, 0.12] as Janela,
  cardMoldura: [0.06, 0.26] as Janela,
  cardMono: [0.14, 0.32] as Janela,
  cardTextos: [0.2, 0.36] as Janela,
  cardTextosSai: [0.6, 0.7] as Janela,
  /** placa → selo; termina em 0.88 para os últimos 12% serem só o mergulho */
  cardViraSelo: [0.62, 0.88] as Janela,
  /** no celular a placa grande brigaria com o texto: nasce selo */
  cardViraSeloMobile: [0.3, 0.44] as Janela,
  cardEntraMobile: [0.26, 0.36] as Janela,

  fio: [0.86, 1.0] as Janela,
  veuAlivia: [0.66, 0.92] as Janela,
  cueSai: [0.005, 0.06] as Janela,

  /** quanto o scrub persegue o scroll: menor = mais arrastado */
  amortecimento: 0.18,
  /** acima disso o canvas amplia mais do que a fonte 1080p tem para dar */
  dprMax: 1.5,
  /** selo pousa acima do FAB do WhatsApp (bottom-5 + h-14 + respiro) */
  seloBottom: 96,
  seloRight: 20,
  /** quadro mostrado quando o usuário pede menos movimento */
  quadroEstatico: 0.52,
} as const;

export const TRILHAS = {
  m: { dir: 'm', frames: 90, poster: 'poster-m.webp' },
  /** 1920px: a resolução nativa do vídeo — uma trilha só para todo desktop */
  d: { dir: 'd', frames: 150, poster: 'poster.webp' },
} as const;

export type TrilhaId = keyof typeof TRILHAS;

/** Escolhe a trilha pelo espaço real de tela. */
export function escolherTrilha(largura: number): TrilhaId {
  return largura < 820 ? 'm' : 'd';
}

export const caminhoFrame = (t: TrilhaId, i: number) =>
  `/demo-autoridade/hero/${t}/f${String(i + 1).padStart(3, '0')}.webp`;

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const faixa = (p: number, [a, b]: Janela) => clamp((p - a) / (b - a));
/** aproxima o cubic-bezier(.16,1,.3,1) usado na classe .reveal do demo */
export const suave = (t: number) => 1 - Math.pow(1 - t, 3);
export const suaveDupla = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
