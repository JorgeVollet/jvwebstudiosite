import localFont from "next/font/local";

/** Cinzel — display exclusiva do tema Lex (demo Autoridade).
 *  Capitular romana inscricional: a letra dos frontões de tribunal.
 *  Open Font License (Google Fonts), self-hosted via @fontsource.
 *  Ver REGISTRO-FONTES.md. */
export const cinzel = localFont({
  src: [
    { path: "./_fontes/cinzel-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./_fontes/cinzel-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./_fontes/cinzel-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./_fontes/cinzel-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-cinzel",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
