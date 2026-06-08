export type Pacote = {
  medal: string;
  nome: string;
  conceito: string;
  faixa: string;
  faixaNota?: string;
  features: string[];
  destaque?: boolean;
  cta: string;
};

export const PACOTES: Pacote[] = [
  {
    medal: "🥉",
    nome: "Essencial",
    conceito: "Presença",
    faixa: "R$ 1.000 – R$ 3.000",
    faixaNota: "valor do site · orçamento sob medida",
    features: [
      "Site profissional de 4 a 6 seções",
      "1 a 2 sistemas integrados à escolha (valor varia)",
      "Otimizado para celular e Google",
      "Botão de WhatsApp integrado",
      "Integração com Google Maps",
      "Domínio + hospedagem configurados",
      "3 meses de suporte grátis",
    ],
    cta: "Quero o Essencial",
  },
  {
    medal: "🥈",
    nome: "Profissional",
    conceito: "Presença + Conteúdo",
    faixa: "R$ 3.000 – R$ 6.000",
    faixaNota: "site completo · orçamento sob medida",
    destaque: true,
    features: [
      "Tudo do Essencial",
      "Site completo com várias páginas",
      "Pacote de fotos geradas com IA",
      "Instagram otimizado",
      "Sistema integrado de captação de leads",
      "SEO (otimização para o Google)",
      "Sistema integrado de e-commerce",
      "Sistema integrado de pagamentos",
      "Sistema integrado de agendamentos",
      "Sistema integrado de pacotes de serviços",
      "Relatório mensal de desempenho",
      "3 meses de suporte grátis",
    ],
    cta: "Quero o Profissional",
  },
  {
    medal: "🥇",
    nome: "Completo",
    conceito: "Máquina de Clientes",
    faixa: "a partir de R$ 5.000",
    faixaNota: "combo site + automação · sob medida",
    features: [
      "Tudo do Profissional",
      "Automações completas com IA (N8N)",
      "Atendimento automatizado no WhatsApp",
      "Captação ativa de leads",
      "Disparo de campanhas frias (N8N)",
      "Acompanhamento contínuo",
      "3 meses de suporte grátis",
    ],
    cta: "Quero o Completo",
  },
];

/** Taxa fixa mensal de infraestrutura (além do valor do site). */
export const MENSALIDADE_INFRA = {
  valor: "R$ 100/mês",
  desc: "Database, backend e hospedagem — mantém seu projeto no ar, rápido e seguro.",
};

/** Formas de pagamento do site. */
export const PAGAMENTOS: { titulo: string; desc: string; enfase?: string }[] = [
  {
    titulo: "Sites acima de R$ 3.500",
    desc: "Até 6x sem juros no cartão, ou à vista com 5% de desconto.",
  },
  {
    titulo: "Sites até R$ 3.500",
    desc: "Até 4x sem juros no cartão, ou à vista com 5% de desconto.",
  },
  {
    titulo: "Automações N8N",
    desc: "Agente de atendimento no WhatsApp, captação de leads, disparo de campanhas automáticas, geração de criativos e posts automáticos para o Instagram. Cada automação a partir de R$ 2.000 de implementação, com 3 meses de funcionamento grátis.",
    enfase: "a partir de R$ 2.000 CADA",
  },
];

/** Tipos de suporte (após os 3 meses grátis). */
export const SUPORTE = [
  {
    titulo: "Plano anual",
    desc: "12x de R$ 225 — suporte contínuo o ano todo.",
  },
  {
    titulo: "Avulso",
    desc: "R$ 300/mês, sem contrato. Use quando precisar.",
  },
  {
    titulo: "Manutenção do agente IA",
    desc: "R$ 250/mês para manter seu agente de WhatsApp no ar (após os 3 meses grátis).",
  },
];
