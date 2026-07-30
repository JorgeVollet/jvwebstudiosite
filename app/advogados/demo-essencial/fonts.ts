import localFont from "next/font/local";

/** Geogira — display exclusiva do tema Aurum (acervo próprio JV, pack Loogofonts).
 *  Convertida para woff2 a partir dos OTF originais. Ver REGISTRO-FONTES.md. */
export const geogira = localFont({
  src: [
    { path: "./_fontes/geogira-300.woff2", weight: "300", style: "normal" },
    { path: "./_fontes/geogira-400.woff2", weight: "400", style: "normal" },
    { path: "./_fontes/geogira-500.woff2", weight: "500", style: "normal" },
    { path: "./_fontes/geogira-600.woff2", weight: "600", style: "normal" },
    { path: "./_fontes/geogira-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geogira",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
