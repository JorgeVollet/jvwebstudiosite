import type { Metadata } from "next";
import GuiaTemplate from "../GuiaTemplate";
import { GUIAS_CONTEUDO } from "../guias-data";

/* Página-guia da área · conteúdo em guias-data.ts · visual em GuiaTemplate.tsx */

const guia = GUIAS_CONTEUDO["contratos-empresariais"];

export const metadata: Metadata = {
  title: guia.metaTitle,
  description: guia.metaDesc,
  robots: { index: false, follow: false },
};

export default function GuiaContratosEmpresariais() {
  return <GuiaTemplate guia={guia} />;
}
