// Modelos (templates) por nicho exibidos na página /planos.
// PREENCHA quando hospedar cada modelo:
//   - embed: URL do site do modelo já no ar (ex: https://modelo-psicologia.vercel.app)
//   - thumb: caminho de um print/capa em /public/modelos/... (ex: /modelos/psicologia.webp)
// Enquanto não tiver, deixe embed:"" e thumb:"" — o card mostra um placeholder "Em breve".

export type Modelo = {
  id: string;
  nome: string;
  nicho: string;        // usado no filtro
  embed: string;        // URL do site hospedado (vazio = "em breve")
  thumb: string;        // print/capa em /public/modelos (vazio = placeholder)
};

// Nichos do filtro (a ordem aparece nos botões; "Todos" é adicionado automático)
export const NICHOS = [
  "Psicologia",
  "Nutricionista",
  "Estética",
  "Dentista",
  "Advocacia",
  "Infoprodutor",
];

export const MODELOS: Modelo[] = [
  { id: "psicologia-acolhedora", nome: "Psicologia Acolhedora", nicho: "Psicologia", embed: "", thumb: "" },
  { id: "nutri-premium",         nome: "Nutricionista Premium", nicho: "Nutricionista", embed: "", thumb: "" },
  { id: "bella-estetica",        nome: "Bella Estética",        nicho: "Estética", embed: "", thumb: "" },
  { id: "clinica-odonto",        nome: "Clínica Odontológica",  nicho: "Dentista", embed: "", thumb: "" },
  { id: "advocacia-confianca",   nome: "Advocacia Confiança",   nicho: "Advocacia", embed: "", thumb: "" },
  { id: "infoproduto-v1",        nome: "Infoprodutor V1",       nicho: "Infoprodutor", embed: "", thumb: "" },
];
