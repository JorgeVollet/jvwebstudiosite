/**
 * Logo JV WEB STUDIO — wordmark em Bodoni Moda (didone de alto contraste,
 * mesmo estilo da logo "Nova" de referência). Maiúsculas, espaçamento bem apertado.
 * "WEB" em dourado com o efeito shine (brilho que arrasta) igual aos títulos.
 * 100% em código, sem imagens externas.
 */
export default function Logo({
  href = "#top",
  showWordmark = true,
  className = "",
}: {
  href?: string;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center ${className}`}
      aria-label="JV WEB STUDIO"
    >
      <span className="inline-flex flex-col items-start">
        <span
          className="logo-wordmark text-gold-shine whitespace-nowrap text-[22px] font-semibold leading-none"
          style={{
            fontFamily: "var(--font-serif), 'Bodoni Moda', Didot, Georgia, serif",
            letterSpacing: "-0.07em",
          }}
        >
          JV WEB STUDIO
        </span>
        <span className="mt-1.5 h-px w-full bg-gradient-to-r from-transparent via-gold-3 to-transparent" />
      </span>
    </a>
  );
}
