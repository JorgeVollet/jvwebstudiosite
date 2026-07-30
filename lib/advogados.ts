// ============================================================================
// CAMPANHA MÊS DO ADVOGADO — conteúdo central da página /advogados
// Edite AQUI preços, vagas, links e textos (a página renderiza tudo daqui).
// ============================================================================

/** WhatsApp exclusivo da campanha (atendido pelo OpenClaw). */
export const ADV_WHATS = "5547999234449";

/** Meta Pixel da campanha — cole o ID quando criar no Gerenciador de Eventos. */
export const ADV_PIXEL_ID = "";

/** Lote promocional — atualize `restantes` 2x por semana (urgência REAL). */
export const ADV_LOTE = { total: 10, restantes: 10 };

/** Data de encerramento da condição (23:59 de 31/08, horário de Brasília). */
export const ADV_DEADLINE = "2026-08-31T23:59:59-03:00";

/** Links de pagamento do Mercado Pago — cole aqui quando criar.
 *  Enquanto estiverem vazios (""), os botões de pagar caem no WhatsApp automaticamente.
 *  IMPORTANTE: configure o retorno pós-pagamento (back_url/redirect) de cada link para:
 *  https://jvwebstudio.agency/briefing-advogados.html?k=jv9x2k7p&plano=essencial (ou autoridade) */
export const ADV_PAGAMENTO = {
  essencial: { pix: "", cartao: "" },
  autoridade: { pix: "", cartao: "" },
};

/** Destino pós-pagamento — o briefing oficial (gate ?k= igual às páginas pós-compra). */
export const ADV_BRIEFING_URL = "/briefing-advogados.html?k=jv9x2k7p";

export const ADV_HERO = {
  badge: "AGOSTO · MÊS DO ADVOGADO — CONDIÇÃO ESPECIAL ATÉ 31/08",
  titleTop: "Enquanto você cuida dos seus clientes,",
  titleAccent: "seu site conquista os próximos.",
  sub: "Sites profissionais feitos para advogados: prontos em até 7 dias úteis, dentro das normas de publicidade da OAB, com domínio e hospedagem grátis por 1 ano.",
  bullets: [
    "Pronto em até 7 dias úteis",
    "Domínio + hospedagem grátis por 1 ano",
    "Dentro das normas da OAB",
  ],
};

export const ADV_STATS = [
  { v: "7 dias", l: "úteis até o site no ar" },
  { v: "R$ 0", l: "de domínio e hospedagem no 1º ano" },
  { v: "OAB", l: "publicidade dentro das normas" },
  { v: "1h", l: "só do seu tempo no processo todo" },
];

export const ADV_DORES = [
  {
    titulo: "Invisível no Google",
    desc: "Quem procura \"advogado da sua área\" na sua cidade encontra seus concorrentes — e fecha com quem apareceu.",
  },
  {
    titulo: "Só Instagram não sustenta",
    desc: "Rede social é terreno alugado. O site é o seu endereço próprio: é ele que passa seriedade quando pesquisam seu nome.",
  },
  {
    titulo: "Medo de errar na publicidade",
    desc: "Anunciar fora das normas pode virar problema no Tribunal de Ética. Um site feito por quem conhece as regras resolve isso.",
  },
];

export const ADV_PILARES = [
  {
    titulo: "Dentro das normas da OAB",
    desc: "Estrutura, linguagem e conteúdo respeitando o Provimento 205/2021. Você anuncia tranquilo, sem risco com o Tribunal de Ética.",
  },
  {
    titulo: "No ar em até 7 dias úteis",
    desc: "Processo padronizado com temas exclusivos: do briefing ao ar em uma semana, com apenas ~1h do seu tempo.",
  },
  {
    titulo: "Custo zero de infraestrutura",
    desc: "Domínio e hospedagem grátis por 1 ano. No plano Autoridade à vista, domínio grátis por 2 anos.",
  },
  {
    titulo: "Estrutura que converte",
    desc: "Cada seção tem um papel: posicionar, gerar confiança, derrubar objeção e levar o visitante ao seu WhatsApp.",
  },
];

/** As 10 seções do site (anatomia) — também é o que está incluso no Essencial. */
export const ADV_ANATOMIA = [
  { n: "01", t: "Capa com posicionamento", d: "Quem você atende e em quê, numa frase — com sua foto profissional." },
  { n: "02", t: "Barra de credenciais", d: "OAB, anos de atuação e atendimento presencial ou online." },
  { n: "03", t: "Situações em que você ajuda", d: "As dores do cliente em destaque: ele se reconhece e age. A seção que mais converte." },
  { n: "04", t: "Áreas de atuação", d: "Organizadas e objetivas, para confirmar em segundos que você resolve o problema." },
  { n: "05", t: "Sobre o(a) advogado(a)", d: "Bio, formação, especializações — onde a confiança nasce." },
  { n: "06", t: "Como funciona o atendimento", d: "4 passos do primeiro contato ao acompanhamento. Reduz o medo de quem nunca contratou." },
  { n: "07", t: "Autoridade dentro das normas", d: "Publicações, palestras e atuação institucional — sem promessa de resultado." },
  { n: "08", t: "Perguntas frequentes", d: "Derruba objeções antes mesmo da conversa." },
  { n: "09", t: "CTA intermediário", d: "Faixa de conversão no meio da rolagem, no momento certo da leitura." },
  { n: "10", t: "Contato sem atrito", d: "WhatsApp flutuante, formulário curto, mapa, horários e rodapé com OAB." },
];

export type AdvPlano = {
  id: string;
  nome: string;
  conceito: string;
  precoDe: string;
  precoPor: string;
  parcela: string;
  economia: string;
  off: string;
  destaque?: boolean;
  entrega: string;
  features: string[];
  bonus: string[];
  cta: string;
  waText: string;
};

export const ADV_PLANOS: AdvPlano[] = [
  {
    id: "essencial",
    nome: "Site Essencial",
    conceito: "One page profissional · 10 seções",
    precoDe: "R$ 1.497",
    precoPor: "R$ 897",
    parcela: "12x de R$ 97,90",
    economia: "R$ 600",
    off: "40% OFF",
    entrega: "No ar em até 7 dias úteis",
    features: [
      "One page completa com as 10 seções ao lado",
      "Escolha entre 4 temas exclusivos",
      "Textos escritos por nós (você só aprova)",
      "Conformidade com o Provimento 205/2021 da OAB",
      "Responsivo — perfeito no celular",
      "Botão de WhatsApp + formulário de contato",
      "SEO essencial: seu nome encontrável no Google",
      "3 rodadas de ajustes inclusas",
    ],
    bonus: [
      "Domínio grátis por 1 ano",
      "Hospedagem grátis por 1 ano",
      "Suporte por 1 mês",
    ],
    cta: "Garantir o Essencial com R$ 600 OFF",
    waText: "Olá! Quero garantir o Site Essencial do Mês do Advogado (R$ 897).",
  },
  {
    id: "autoridade",
    nome: "Site Autoridade",
    conceito: "Multi page + SEO avançado",
    precoDe: "R$ 3.497",
    precoPor: "R$ 1.997",
    parcela: "12x de R$ 199",
    economia: "R$ 1.500",
    off: "43% OFF",
    destaque: true,
    entrega: "No ar em até 15 dias úteis",
    features: [
      "Tudo do Essencial, e mais:",
      "1 página-guia otimizada para CADA área de atuação — conteúdo educativo que o Google ranqueia",
      "Pesquisa de palavras-chave da sua área + cidade",
      "SEO técnico: Schema jurídico, velocidade e estrutura de ranqueamento",
      "Google Business Profile otimizado (busca local + Maps)",
      "3 rodadas de ajustes inclusas",
    ],
    bonus: [
      "Pacote 5 Fotos Profissionais com IA — GRÁTIS (R$ 197)",
      "Domínio grátis por 1 ano (2 anos pagando à vista)",
      "Hospedagem grátis por 1 ano",
      "Suporte por 3 meses",
    ],
    cta: "Garantir o Autoridade com R$ 1.500 OFF",
    waText: "Olá! Quero garantir o Site Autoridade do Mês do Advogado (R$ 1.997).",
  },
];

export const ADV_TEMAS = [
  {
    id: "aurum",
    nome: "Aurum",
    estilo: "Claro, dourado e elegante — moderno e atual",
    ideal: "Advogados(as) com presença digital ativa",
    cores: { bg: "#f7f5f0", primary: "#c9a24b", text: "#1a1a1a", accent: "#8c6d2f" },
  },
  {
    id: "athena",
    nome: "Athena",
    estilo: "Clássico azul-marinho com serif — tradição e solidez",
    ideal: "Cível, família e sucessões, atuação tradicional",
    cores: { bg: "#0d1b2e", primary: "#c9a24b", text: "#f5f2ea", accent: "#22344d" },
  },
  {
    id: "vertice",
    nome: "Vértice",
    estilo: "Corporativo grafite, linhas retas — direto ao ponto",
    ideal: "Empresarial, tributário e escritórios",
    cores: { bg: "#f2f3f5", primary: "#2b2f36", text: "#16181d", accent: "#9aa3ad" },
  },
  {
    id: "lex",
    nome: "Lex",
    estilo: "Preto & branco editorial — personalidade forte",
    ideal: "Criminalista e advocacia boutique",
    cores: { bg: "#101010", primary: "#f5f5f5", text: "#fafafa", accent: "#c9a24b" },
  },
];

export const ADV_PROCESSO = [
  {
    n: "01",
    tag: "HOJE",
    titulo: "Você garante sua vaga",
    desc: "Pelo WhatsApp, com pagamento seguro via Mercado Pago — Pix ou cartão em até 12x.",
  },
  {
    n: "02",
    tag: "30 MINUTOS",
    titulo: "Briefing guiado + escolha do tema",
    desc: "Você conta sua atuação num formulário simples e escolhe 1 dos 4 temas exclusivos.",
  },
  {
    n: "03",
    tag: "NOSSO TURNO",
    titulo: "Produção completa",
    desc: "Escrevemos os textos dentro das normas da OAB e montamos cada seção. Você acompanha e tem 3 rodadas de ajustes.",
  },
  {
    n: "04",
    tag: "ATÉ 7 DIAS ÚTEIS",
    titulo: "Site no ar",
    desc: "Com domínio, hospedagem e um treinamento rápido de uso. Sua reputação, com endereço próprio.",
  },
];

export const ADV_GARANTIAS = [
  {
    titulo: "3 rodadas de ajustes",
    desc: "Textos, cores e refinamentos dentro do tema escolhido, até a versão final.",
  },
  {
    titulo: "Prazo em contrato",
    desc: "Até 7 dias úteis (Essencial) ou 15 dias úteis (Autoridade) a partir do briefing completo.",
  },
  {
    titulo: "Conformidade OAB",
    desc: "Estrutura e linguagem dentro do Provimento 205/2021 — publicidade informativa, sem risco.",
  },
  {
    titulo: "Pagamento protegido",
    desc: "Mercado Pago: Pix ou cartão em até 12x, com a segurança da maior plataforma do país.",
  },
];

export const ADV_FAQ = [
  {
    q: "Advogado pode ter site?",
    a: "Pode e deve. A publicidade informativa é permitida pela OAB — o que não pode é promessa de resultado, captação indevida e mercantilização. Construímos tudo dentro do Provimento 205/2021, para você divulgar com tranquilidade.",
  },
  {
    q: "Preciso escrever os textos?",
    a: "Não. Você responde um briefing de 30 minutos (pode ser por áudio) e nós redigimos tudo: posicionamento, áreas, sobre, FAQ. Você revisa e aprova, com 3 rodadas de ajustes inclusas.",
  },
  {
    q: "Domínio e hospedagem estão inclusos?",
    a: "Sim — grátis por 1 ano nos dois planos (no Autoridade à vista, o domínio é grátis por 2 anos). Depois desse período, a renovação é anual e avisamos com antecedência.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Site Essencial: até 7 dias úteis. Site Autoridade: até 15 dias úteis. O prazo conta a partir do briefing completo (briefing respondido + materiais enviados).",
  },
  {
    q: "E depois de entregue?",
    a: "Você recebe treinamento rápido de uso e suporte grátis: 1 mês no Essencial e 3 meses no Autoridade — para dúvidas e pequenos ajustes.",
  },
  {
    q: "Posso mudar o tema depois?",
    a: "O tema escolhido no briefing é a base da produção — é isso que garante a entrega em 7 dias. Dentro dele, personalizamos cores, fotos e todo o conteúdo para a sua identidade.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Via Mercado Pago, com link seguro: Pix (valor promocional à vista) ou cartão em até 12x. Você recebe o link direto na conversa do WhatsApp.",
  },
  {
    q: "Até quando vale a condição?",
    a: `Até 31/08 ou até o fim do lote de ${ADV_LOTE.total} sites — o que acontecer primeiro. Depois disso, os valores voltam ao normal.`,
  },
];

export const ADV_MARQUEE_A = [
  "PRONTO EM 7 DIAS", "DENTRO DAS NORMAS DA OAB", "DOMÍNIO GRÁTIS 1 ANO",
  "HOSPEDAGEM GRÁTIS", "4 TEMAS EXCLUSIVOS", "TEXTOS POR NOSSA CONTA",
];

export const ADV_MARQUEE_B = [
  "MÊS DO ADVOGADO", "CONDIÇÃO ESPECIAL ATÉ 31/08", "VAGAS LIMITADAS",
  "PAGAMENTO VIA MERCADO PAGO", "SUPORTE INCLUSO", "3 RODADAS DE AJUSTES",
];
