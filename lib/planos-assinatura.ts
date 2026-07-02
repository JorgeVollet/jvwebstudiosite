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
    conceito: "Pra sair do zero já com cara de profissional",
    precoMensal: "97",
    precoAnual: "799",
    economiaAnual: "Economize R$ 365 no ano",
    features: [
      "No ar em até 48h, prontinho",
      "Uma página afiada pra converter visita em contato",
      "Domínio próprio grátis no 1º ano",
      "Hospedagem veloz e segura inclusa",
      "Cadeado de segurança (SSL) ativado",
      "SEO inicial pra o Google te achar",
      "Botão de WhatsApp que cai direto no seu zap",
      "1 alteração por mês inclusa",
      "Suporte por e-mail",
    ],
    cta: "Quero o Essencial",
    waMsg: "Olá! Quero o plano ESSENCIAL (R$97/mês) da JV WEB STUDIO. Pode me ajudar?",
    checkoutMensal: "https://pay.kiwify.com.br/XJNjv2H",
    checkoutAnual: "https://pay.kiwify.com.br/H9DCnMV",
  },
  {
    id: "profissional",
    nome: "Profissional",
    conceito: "O queridinho: site completo que trabalha por você",
    precoMensal: "119",
    precoAnual: "1.050",
    economiaAnual: "Economize R$ 378 no ano",
    destaque: true,
    features: [
      "Tudo do Essencial, e mais:",
      "+1 página interna",
      "3 alterações por mês inclusas",
      "WhatsApp e redes sociais tudo conectado",
      "SEO turbinado pra subir no Google",
      "Galeria ou portfólio dos seus serviços",
      "Suporte com prioridade",
    ],
    cta: "Quero o Profissional",
    waMsg: "Olá! Quero o plano PROFISSIONAL (R$119/mês) da JV WEB STUDIO. Pode me ajudar?",
    checkoutMensal: "https://pay.kiwify.com.br/d6pXuIS",
    checkoutAnual: "https://pay.kiwify.com.br/KFAREMl",
  },
  {
    id: "completo",
    nome: "Completo",
    conceito: "Presença no talo e o controle na sua mão",
    precoMensal: "149",
    precoAnual: "1.300",
    economiaAnual: "Economize R$ 488 no ano",
    features: [
      "Tudo do Profissional, e mais:",
      "2 a 3 páginas internas",
      "Domínio próprio grátis por 2 anos",
      "5 alterações por mês inclusas",
      "Painel de controle sob medida",
      "Relatório de resultados todo mês",
      "Suporte VIP, prioridade máxima",
    ],
    cta: "Quero o Completo",
    waMsg: "Olá! Quero o plano COMPLETO (R$149/mês) da JV WEB STUDIO. Pode me ajudar?",
    checkoutMensal: "https://pay.kiwify.com.br/hb4309l",
    checkoutAnual: "https://pay.kiwify.com.br/zvaM49R",
  },
];

// Itens "o que está incluso em todos os planos"
export const INCLUSO_TODOS = [
  { titulo: "Design feito pra sua marca", desc: "Cores, identidade e estilo pensados pro seu negócio." },
  { titulo: "Sempre no ar, sempre rápido", desc: "Hospedagem estável que aguenta o movimento sem cair." },
  { titulo: "Seguro e achável no Google", desc: "SSL, otimização inicial de SEO e boa performance." },
  { titulo: "WhatsApp a um clique", desc: "Seu cliente sai da dúvida direto pra conversa." },
  { titulo: "Domínio resolvido com você", desc: "A gente cuida do endereço do site lado a lado." },
  { titulo: "Ajustes e suporte todo mês", desc: "Manutenção e alterações já embutidas no plano." },
];

// Comparação: agência x fazer você mesmo x assinatura JV
export const COMPARACAO = {
  agencia: {
    titulo: "Contratar agência",
    itens: ["Orçamento de R$ 3 mil+ só pra começar a conversa", "1 a 2 meses batendo na porta pra sair do papel", "Cada ajuste depois vira uma fatura nova"],
  },
  diy: {
    titulo: "Fazer por conta própria",
    itens: ["Fins de semana perdidos brigando com editor", "Resultado que grita \"fiz sozinho às pressas\"", "Plugin aqui, taxa ali, e a conta só cresce"],
  },
  jv: {
    titulo: "Assinatura JV WEB STUDIO",
    itens: [
      { destaque: "A criação é por nossa conta.", desc: "Você não põe a mão no bolso pra desenvolver." },
      { destaque: "Feito pra converter, não só existir.", desc: "Na sua mão em até 48h." },
      { destaque: "A gente não some depois.", desc: "Hospedagem, suporte e ajustes na mesma mensalidade." },
    ],
  },
};

// Passos de como funciona
export const COMO_FUNCIONA = [
  { n: "01", titulo: "Escolha seu plano", desc: "Você seleciona a assinatura e o estilo com a cara do negócio. Pronto, o start é seu.", tag: "Agora" },
  { n: "02", titulo: "Conta pra gente", desc: "Um formulário rápido: logo, cores, fotos e as informações principais do seu negócio.", tag: "5 min" },
  { n: "03", titulo: "Deixa com a gente", desc: "Montamos o site, escrevemos os textos, ligamos os botões e mandamos pra sua aprovação.", tag: "Até 48h" },
  { n: "04", titulo: "No ar e bem cuidado", desc: "Com o seu ok, publicamos e seguimos cuidando de hospedagem, suporte e melhorias.", tag: "Sempre" },
];

// Para quem é
export const PARA_QUEM = [
  { titulo: "Profissionais liberais", desc: "Dentistas, psicólogos, advogados e consultores que vendem confiança antes de vender o serviço." },
  { titulo: "Negócios locais", desc: "Clínicas, academias, salões e serviços que vivem de agenda cheia e boca a boca." },
  { titulo: "Marcas em início", desc: "Quem está começando agora e quer parecer sério já no primeiro cliente." },
];

// FAQ
export const FAQ_ASSINATURA = [
  { q: "É de graça mesmo criar o site?", a: "É sério, sim. Você não paga um centavo pelo desenvolvimento, design ou código. O que existe é a mensalidade fixa que mantém o site vivo — hospedagem, suporte e manutenção, tudo junto." },
  { q: "E se eu quiser sair?", a: "Sem prisão. Cancela quando quiser, sem multa. Enquanto a assinatura estiver em dia, seu site continua no ar." },
  { q: "Em quanto tempo meu site fica pronto?", a: "A primeira versão chega em até 48 horas úteis depois que você manda o briefing e o material." },
  { q: "Posso pedir mudanças depois de pronto?", a: "Antes da sua aprovação, mexemos no que for preciso sem cobrar nada — quantas rodadas forem necessárias, até ficar exatamente do seu jeito. A cota de alterações mensais do plano só passa a valer depois que o site é aprovado e entregue." },
  { q: "O domínio entra no plano?", a: "Entra sim. Domínio grátis por 1 ano nos planos Essencial e Profissional, e por 2 anos no Completo. Passado esse período, a renovação anual fica com você — e a gente te orienta na configuração em qualquer plano." },
  { q: "Qual a diferença pros projetos sob medida da JV WEB STUDIO Agency?", a: "A assinatura é o jeito mais rápido e acessível de ter um site profissional no ar. Já pra sistemas, e-commerce robusto e automações N8N, o caminho são os projetos sob medida da JV WEB STUDIO Agency — chama a gente que a gente aponta o melhor pra você." },
];
