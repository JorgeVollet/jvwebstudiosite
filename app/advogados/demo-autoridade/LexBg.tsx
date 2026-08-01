/* ============================================================================
   FUNDOS DO TEMA LEX · demo Autoridade
   Camada de imagem full bleed atrás de uma seção, sempre com opacidade baixa
   e véu escuro por cima, para o texto continuar legível. Sem estado, sem JS.
   As 6 imagens vivem em /public/demo-autoridade.
============================================================================ */

export const LEX_IMG = {
  livro: "/demo-autoridade/livro-noir.webp",
  sinete: "/demo-autoridade/sinete-noir.webp",
  marmore: "/demo-autoridade/marmore-ouro.webp",
  couro: "/demo-autoridade/couro-ouro.webp",
  balancas: "/demo-autoridade/pattern-lex.webp",
  guilloche: "/demo-autoridade/pattern-guilloche.webp",
} as const;

export type LexImgKey = keyof typeof LEX_IMG;

export default function LexBg({
  img,
  opacity = 0.12,
  posicao = "center",
  /** Véu escuro por cima da imagem. "auto" = uniforme; "esquerda" = degradê para texto à esquerda. */
  veu = "auto",
  /** Marca a imagem como prioritária (só no hero, para o LCP). */
  prioridade = false,
  /** Seções que MUDAM DE ALTURA (sanfona do FAQ, abas): ancora a imagem no topo
   *  com altura proporcional à largura, para o fundo não reenquadrar ao expandir. */
  estavel = false,
}: {
  img: LexImgKey;
  opacity?: number;
  posicao?: string;
  veu?: "auto" | "esquerda" | "baixo" | "nenhum";
  prioridade?: boolean;
  estavel?: boolean;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LEX_IMG[img]}
        alt=""
        loading={prioridade ? "eager" : "lazy"}
        decoding="async"
        className={
          estavel
            ? "absolute inset-x-0 top-0 min-h-full w-full object-cover"
            : "h-full w-full object-cover"
        }
        style={{ opacity, objectPosition: posicao }}
      />
      {veu === "esquerda" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]/35" />
      )}
      {veu === "baixo" && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-[#0B0B0C]/85" />
      )}
      {veu === "auto" && <div className="absolute inset-0 bg-[#0B0B0C]/45" />}
    </div>
  );
}
