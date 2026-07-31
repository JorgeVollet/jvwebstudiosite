import type { Metadata } from "next";
import GuiaTemplate from "../GuiaTemplate";
import { GUIAS_CONTEUDO } from "../guias-data";

/* Página-guia da área · conteúdo em guias-data.ts · visual em GuiaTemplate.tsx */

const guia = GUIAS_CONTEUDO["contencioso-empresarial"];

export const metadata: Metadata = {
  title: guia.metaTitle,
  description: guia.metaDesc,
  robots: { index: false, follow: false },
};

export default function GuiaContenciosoEmpresarial() {
  return <GuiaTemplate guia={guia} />;
}
