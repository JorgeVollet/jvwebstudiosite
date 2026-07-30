// Trabalhos entregues exibidos na página /planos (seção "Alguns trabalhos entregues").
//   - embed: URL do site no ar (usada no popup / "abrir em nova aba").
//   - thumb: PRINT ESTÁTICO da hero (thum.io). Para print próprio, salve em
//     /public/modelos/<id>.webp e troque a URL do thumb pelo caminho local.
//   - noframe: true = o site bloqueia exibição em iframe; o popup mostra o print + "abrir em nova aba".

export type Modelo = {
  id: string;
  nome: string;
  nicho: string;
  embed: string;
  thumb: string;
  noframe?: boolean;
};

export const MODELOS: Modelo[] = [
  { id: "demo-adv-essencial", nome: "Dra. Helena Martins · Modelo Advogados", nicho: "Advocacia", embed: "https://jvwebstudio.agency/advogados/demo-essencial", thumb: "https://image.thum.io/get/width/1200/crop/900/https://jvwebstudio.agency/advogados/demo-essencial" },
  { id: "ana-noronha", nome: "Ana Noronha Engenharia", nicho: "Engenharia", embed: "https://www.ananoronha.eng.br/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://www.ananoronha.eng.br/" },
  { id: "dr-rafael-cordeiro", nome: "Dr. Rafael Cordeiro", nicho: "Saúde", embed: "https://rafa-cordeiro-site.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://rafa-cordeiro-site.vercel.app/" },
  { id: "alma-fotografia", nome: "Alma Fotografia", nicho: "Fotografia", embed: "https://site-alma-fotografia.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://site-alma-fotografia.vercel.app/" },
  { id: "barbearia-oldschool", nome: "Barbearia Old School", nicho: "Barbearia", embed: "https://barbeariaoldschoolhz.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://barbeariaoldschoolhz.vercel.app/" },
  { id: "moveis-castelo", nome: "Móveis Castelo Branco", nicho: "Móveis", embed: "https://www.moveiscastelobranco.com.br/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://www.moveiscastelobranco.com.br/" },
  { id: "integra-cnc", nome: "Íntegra CNC & Automação", nicho: "Indústria", embed: "https://www.ricardointegra.com.br/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://www.ricardointegra.com.br/" },
  { id: "compor-acabamentos", nome: "Compor Acabamentos", nicho: "Acabamentos", embed: "https://compor-acabamentos.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://compor-acabamentos.vercel.app/" },
  { id: "leonardo-ceretta", nome: "Leonardo Ceretta · Lupo", nicho: "Representação", embed: "https://www.leonardocerettasilveira.com.br/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://www.leonardocerettasilveira.com.br/" },
  { id: "simone-perfumaria", nome: "Simone Perfumaria", nicho: "Perfumaria", embed: "https://site-simone-perfumaria.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://site-simone-perfumaria.vercel.app/" },
  { id: "auge-academy", nome: "Auge Academy", nicho: "Academia", embed: "https://augeacademy.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://augeacademy.vercel.app/", noframe: true },
  { id: "jess-reg-mkt", nome: "Jess Reg Marketing", nicho: "Marketing", embed: "https://jessregmkt.vercel.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://jessregmkt.vercel.app/" },
  { id: "sushi-art-gui", nome: "Sushi Art Gui", nicho: "Gastronomia", embed: "https://sushiartgui.netlify.app/", thumb: "https://image.thum.io/get/width/1200/crop/900/https://sushiartgui.netlify.app/" },
];
