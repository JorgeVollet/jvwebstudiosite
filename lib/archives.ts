/**
 * archives — dados da seção Archives em 2 níveis.
 *
 * Nível 1: 3 SEGMENTOS (N8N, Briefings, SaaS).
 * Nível 2: ao entrar num segmento, lista seus ITENS. Cada item define como abre:
 *   - kind "image": lightbox com o print em tamanho real (N8N) ou galeria com
 *     scroll (SaaS, vários prints).
 *   - kind "live": popup com iframe ao vivo na URL pública (Briefings),
 *     com botão de "abrir em nova aba" como fallback caso o site recuse iframe.
 *
 * Obs.: as imagens de SaaS levam ?v=2 (cache-busting) porque foram reprocessadas.
 */

export type ItemKind = "image" | "live";

export interface ArchiveItem {
  title: string;
  tag: string;
  desc: string;
  kind: ItemKind;
  /** print único em /public (kind "image" sem galeria) */
  img?: string;
  /** galeria de prints (kind "image" com várias telas → scroll no lightbox) */
  gallery?: string[];
  /** url pública ao vivo (kind "live") */
  url?: string;
  /** imagem de capa do card (opcional; se ausente usa um fundo estilizado) */
  cover?: string;
}

export interface ArchiveSegment {
  id: string;
  label: string; // título do segmento (card nível 1)
  tagline: string; // etiqueta curta
  desc: string; // descrição do segmento
  icon: "workflow" | "clipboard" | "layers"; // ícone do card de segmento
  /** imagem de capa do card de segmento (opcional; se ausente usa fundo estilizado) */
  cover?: string;
  items: ArchiveItem[];
}

export const SEGMENTS: ArchiveSegment[] = [
  {
    id: "n8n",
    label: "Automações N8N",
    tagline: "FLUXOS · N8N",
    desc: "Robôs que trabalham sozinhos: conteúdo, atendimento, prospecção e captação de leads.",
    icon: "workflow",
    cover: "/fluxos-n8n/agente-ia.png",
    items: [
      {
        title: "Fábrica de Criativos + Instagram",
        tag: "N8N · CONTEÚDO",
        desc: "Gera artes com IA, publica no Instagram e envia preview no WhatsApp — automático.",
        kind: "image",
        img: "/fluxos-n8n/criativos-ig.png",
      },
      {
        title: "Agente de IA no WhatsApp",
        tag: "N8N · AGENTE IA",
        desc: "Atende e prospecta leads com IA, memória e handoff humano quando necessário.",
        kind: "image",
        img: "/fluxos-n8n/agente-ia.png",
      },
      {
        title: "Disparo de Campanha Fria",
        tag: "N8N · OUTBOUND",
        desc: "Valida o número no WhatsApp, dispara a mensagem e organiza o follow-up.",
        kind: "image",
        img: "/fluxos-n8n/campanha-fria.png",
      },
      {
        title: "Captação via Google Places",
        tag: "N8N · CAPTAÇÃO",
        desc: "Busca empresas por cidade e nicho, filtra sem site e salva os leads na base.",
        kind: "image",
        img: "/fluxos-n8n/google-places.png",
      },
    ],
  },
  {
    id: "briefings",
    label: "Briefings Digitais",
    tagline: "BRIEFING · INTERATIVO",
    desc: "Formulários inteligentes que guiam o cliente e já entregam o briefing pronto. Clique para abrir ao vivo.",
    icon: "clipboard",
    cover: "/briefings/jessica.png",
    items: [
      {
        title: "Briefing · Ana Laura",
        tag: "BRIEFING · ARQUITETURA",
        desc: "Briefing digital interativo para projeto de arquitetura e marcenaria, com seleção de estilos e telhados.",
        kind: "live",
        url: "https://briefingananoronha.netlify.app/",
        cover: "/briefings/ana-laura.png",
      },
      {
        title: "Briefing · Jéssica Regina",
        tag: "BRIEFING · MARKETING",
        desc: "Briefing digital para marketing, com captura estruturada e geração de PDF do briefing.",
        kind: "live",
        url: "https://jessregmkt.vercel.app/",
        cover: "/briefings/jessica.png",
      },
    ],
  },
  {
    id: "saas",
    label: "Sistemas SaaS",
    tagline: "SISTEMAS · SAAS",
    desc: "Plataformas e painéis sob medida que desenvolvi do zero.",
    icon: "layers",
    cover: "/saas/tech-01.png?v=2",
    items: [
      {
        title: "TechRepairSys",
        tag: "SAAS · ERP",
        desc: "ERP completo para assistência técnica: ordens de serviço, estoque, financeiro, CRM e dashboard em tempo real.",
        kind: "image",
        cover: "/saas/tech-01.png?v=2",
        gallery: [
          "/saas/tech-01.png?v=2",
          "/saas/tech-02.png?v=2",
          "/saas/tech-03.png?v=2",
          "/saas/tech-04.png?v=2",
          "/saas/tech-05.png?v=2",
        ],
      },
      {
        title: "AN Engenharia · Gestão de Obras",
        tag: "SAAS · GESTÃO",
        desc: "Plataforma de gestão de obras para engenharia: acompanhamento de projetos, etapas, equipes e indicadores.",
        kind: "image",
        cover: "/saas/ana-01.png?v=2",
        gallery: [
          "/saas/ana-01.png?v=2",
          "/saas/ana-02.png?v=2",
          "/saas/ana-03.png?v=2",
          "/saas/ana-04.png?v=2",
          "/saas/ana-05.png?v=2",
          "/saas/ana-06.png?v=2",
          "/saas/ana-07.png?v=2",
          "/saas/ana-08.png?v=2",
          "/saas/ana-09.png?v=2",
          "/saas/ana-10.png?v=2",
        ],
      },
      {
        title: "JV Studio · CRM & Gestão",
        tag: "SAAS · CRM",
        desc: "Painel da JV WEB STUDIO: pipeline por etapa, receita, prazos críticos, leads e gestão de clientes em um só lugar.",
        kind: "image",
        cover: "/saas/jv-01.png?v=2",
        gallery: [
          "/saas/jv-01.png?v=2",
          "/saas/jv-02.png?v=2",
          "/saas/jv-03.png?v=2",
          "/saas/jv-04.png?v=2",
          "/saas/jv-05.png?v=2",
          "/saas/jv-06.png?v=2",
          "/saas/jv-07.png?v=2",
        ],
      },
    ],
  },
];
