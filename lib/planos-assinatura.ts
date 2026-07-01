// Planos de ASSINATURA (modelo "site grátis, paga só a mensalidade").
// Página /planos — usada nos anúncios de Instagram/Facebook.

export type PlanoAssinatura = {
  id: string;
  nome: string;
  conceito: string;
  precoMensal: string;   // só o número, ex: "97"
  precoAnual: string;    // só o número, ex: "799"
  economiaAnual?: string; // texto de economia vs 12x mensal
  destaque?: boolean;
  features: string[];
  cta: string;
  waMsg: string;         // mensagem pré-preenchida no WhatsApp (fallback)
  checkoutMensal?: string; // link do checkout (Kiwify/Hotmart/MP) do plano MENSAL
  checkoutAnual?: string;  // link do checkout do plano ANUAL
};

export const PLANOS_ASSINATURA: PlanoAssinatura[] = [
  {
    id: "essencial",
    nome: "Essencial",
    conceito: "Pra começar com presença profissional",
    precoMensal: "97",
    precoAnual: "799",
    economiaAnual: "Economize R$ 365 no ano",
    features: [
      "Site profissional no ar em até 48h",
      "Landing page de alta conversão (1 página)",
      "Domínio próprio grátis por 1 ano",
      "Hospedagem rápida e segura inclusa",
      "Certificado SSL (cadeado de segurança)",
      "SEO básico (otimização para o Google)",
      "Botão de WhatsApp integrado",
      "1 edição gratuita por mês",
      "Suporte por e-mail",
    ],
    cta: "Quero o Essencial",
    waMsg: "Olá! Quero o plano ESSENCIAL (R$97/mês) da JV WEB STUDIO. Pode me ajudar?",
    checkoutMensal: "https://kiwify.app/lXGrCx1",
    checkoutAnual: "https://kiwify.app/oy5FUrl",
  },
  {
    id: "profissional",
    nome: "Profissional",
    conceito: "O mais escolhido — site completo que vende",
    precoMensal: "119",
    precoAnual: "1.050",
    economiaAnual: "Economize R$ 378 no ano",
    destaque: true,
    features: [
      "Tudo do Essencial",
      "Site com 1 subpágina adicional",
      "3 edições gratuitas por mês",
      "WhatsApp e redes integrados",
      "SEO avançado (mais visibilidade no Google)",
      "Galeria / portfólio de serviços",
      "Suporte prioritário",
    ],
    cta: "Quero o Profissional",
    waMsg: "Olá! Quero o plano PROFISSIONAL (R$119/mês) da JV WEB STUDIO. Pode me ajudar?",
    checkoutMensal: "https://kiwify.app/7TDn0kU",
    checkoutAnual: "https://kiwify.app/X3d8aTA",
  },
  {
    id: "completo",
    nome: "Completo",
    conceito: "Máxima presença + gestão do seu negócio",
    precoMensal: "149",
    precoAnual: "1.300",
    economiaAnual: "Economize R$ 488 no ano",
    features: [
      "Tudo do Profissional",
      "Site com 2 a 3 subpáginas",
      "Domínio próprio grátis por 2 anos",
      "5 edições gratuitas por mês",
      "Painel administrativo personalizado",
      "Relatório mensal de desempenho",
      "Prioridade máxima no atendimento",
    ],
    cta: "Quero o Completo",
    waMsg: "Olá! Quero o plano COMPLETO (R$149/mês) da JV WEB STUDIO. Pode me ajudar?",
    checkoutMensal: "https://kiwify.app/L6fZ6D2",
    checkoutAnual: "https://kiwify.app/VEpTENR",
  },
];

// Itens "o que está incluso em todos os planos"
export const INCLUSO_TODOS = [
  { titulo: "Design profissional personalizado", desc: "Adaptado à sua marca, cores e identidade." },
  { titulo: "Hospedagem rápida e segura", desc: "Seu site no ar com performance e estabilidade." },
  { titulo: "SSL + SEO básico + performance", desc: "Cadeado de segurança e otimização pro Google." },
  { titulo: "Botão de WhatsApp integrado", desc: "O cliente fala com você em um clique." },
  { titulo: "Configuração de domínio orientada", desc: "Te ajudamos a deixar o endereço do seu jeito." },
  { titulo: "Manutenção e edições mensais", desc: "Ajustes e suporte já inclusos no plano." },
];

// Comparação (estilo SiteRápido): tradicional x você mesmo x assinatura JV
export const COMPARACAO = {
  agencia: {
    titulo: "Agências & Freelas",
    itens: ["Custo inicial alto (R$ 3.000+)", "30 a 60 dias para lançar", "Manutenção cobrada à parte"],
  },
  diy: {
    titulo: "Fazer você mesmo",
    itens: ["Exige seu tempo e energia", "Risco de ficar lento e amador", "Mensalidades ocultas de plugins"],
  },
  jv: {
    titulo: "Assinatura JV WEB STUDIO",
    itens: [
      { destaque: "Você não paga pela criação.", desc: "Zero custo de desenvolvimento." },
      { destaque: "Profissional e focado em vender.", desc: "Entrega em até 48h." },
      { destaque: "Hospedagem, suporte e manutenção.", desc: "Tudo em uma assinatura." },
    ],
  },
};

// Passos de como funciona
export const COMO_FUNCIONA = [
  { n: "01", titulo: "Escolha o plano", desc: "Você seleciona a assinatura, escolhe o estilo que combina com o negócio e confirma o início.", tag: "Hoje" },
  { n: "02", titulo: "Envie o briefing", desc: "Mandamos um formulário simples: logo, cores, fotos, contatos e informações principais.", tag: "5 min" },
  { n: "03", titulo: "Montamos seu site", desc: "Nossa equipe cria o site, organiza os textos, configura os botões e prepara tudo para sua aprovação.", tag: "Até 48h" },
  { n: "04", titulo: "Publicamos e cuidamos", desc: "Depois do seu ok, colocamos no ar e seguimos com hospedagem, suporte e atualizações.", tag: "Sempre" },
];

// Para quem é
export const PARA_QUEM = [
  { titulo: "Profissionais liberais", desc: "Dentistas, psicólogos, advogados, nutricionistas e consultores que precisam gerar confiança rápido." },
  { titulo: "Negócios locais", desc: "Clínicas, academias, salões e serviços que dependem de agenda, contato e indicação." },
  { titulo: "Marcas começando", desc: "Empresas que querem sair do improviso sem investir milhares no primeiro site." },
];

// FAQ
export const FAQ_ASSINATURA = [
  { q: "A criação do site é realmente grátis?", a: "Sim. Você não paga pelo desenvolvimento, design ou programação. Paga apenas uma assinatura fixa para manter o site no ar, com hospedagem, suporte e manutenção inclusos." },
  { q: "E se eu quiser cancelar?", a: "Você pode cancelar quando quiser, sem multa. O site permanece ativo enquanto a assinatura estiver em dia." },
  { q: "Em quanto tempo meu site fica pronto?", a: "Entregamos a primeira versão em até 48 horas úteis após o preenchimento do briefing e o envio do material." },
  { q: "Posso pedir alterações depois de pronto?", a: "Sim! Todos os planos incluem edições gratuitas mensais para ajustes de texto, imagens ou layout (a quantidade varia por plano)." },
  { q: "O domínio está incluso?", a: "Sim! No Essencial o domínio é grátis por 1 ano e no Completo por 2 anos. Em todos os planos te orientamos na configuração do endereço." },
  { q: "Qual a diferença para os projetos sob medida da JV?", a: "A assinatura é a forma mais rápida e acessível de ter um site profissional no ar. Para sistemas, e-commerce avançado e automações N8N, temos os projetos sob medida — fale com a gente que indicamos o melhor caminho." },
];
