/**
 * Registro dos projetos do portfólio que rodam em showcase.
 * Cada site estático vive em /public/sites/[slug]/ e é servido same-origin,
 * então embute em iframe sem bloqueio de X-Frame-Options.
 */
export type Project = {
  slug: string;
  client: string;
  category: string;
  tag: string;
  desc: string;
  /** caminho do site embutido (em /public/sites/...) OU url externa. Opcional se for galeria. */
  embed?: string;
  /** url pública real (botão "abrir site original") */
  live?: string;
  /** site estático local (true) ou externo (false) */
  local: boolean;
  /** se preenchido, o showcase mostra esta galeria de prints em vez do iframe */
  shots?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "barbearia-old-school",
    client: "Barbearia Old School",
    category: "Barbearia · Landing + Agendamento",
    tag: "WEB · SISTEMA",
    desc: "Site institucional com identidade vintage, galeria, serviços e painel administrativo para gestão de agendamentos.",
    embed: "/sites/barbearia-old-school/index.html",
    live: "https://barbeariaoldschoolhz.vercel.app/",
    local: true,
  },
  {
    slug: "sushi-art",
    client: "Sushi Art",
    category: "Restaurante · Site & Cardápio",
    tag: "WEB · EXPERIÊNCIA",
    desc: "Experiência visual imersiva para restaurante japonês, com galeria de pratos, animações de scroll e localização das unidades.",
    embed: "/sites/sushi-art/index.html",
    live: "https://sushiartgui.netlify.app/",
    local: true,
  },
  {
    slug: "compor-acabamentos",
    client: "Compor Acabamentos",
    category: "Indústria · Site Institucional",
    tag: "WEB · INSTITUCIONAL",
    desc: "Site institucional para empresa de acabamentos, com apresentação de setores, fachadas e catálogo visual de produtos.",
    embed: "/sites/compor-acabamentos/index.html",
    live: "https://compor-acabamentos.vercel.app/",
    local: true,
  },
  {
    slug: "auge-academy",
    client: "AUGE Academy",
    category: "Educação · Harmonização Facial",
    tag: "WEB · EDUCAÇÃO",
    desc: "Plataforma de cursos de harmonização facial, com páginas de turmas, área do aluno e captação de matrículas.",
    embed: "/sites/auge-academy/index.html",
    live: "https://augeacademy.vercel.app/",
    local: true,
  },
  {
    slug: "autodrive",
    client: "AutoDrive BC",
    category: "Automotivo · Landing Page",
    tag: "WEB · LANDING",
    desc: "Landing page para serviços automotivos, com galeria de veículos, identidade forte e chamada direta para contato.",
    embed: "/sites/autodrive/index.html",
    live: "https://autodrivebc.netlify.app/",
    local: true,
  },
  {
    slug: "segredo-fungi",
    client: "O Segredo Fungi",
    category: "E-commerce · Marca & Loja",
    tag: "WEB · E-COMMERCE",
    desc: "Marca de vestuário e cogumelos funcionais, com identidade conceitual forte, efeitos 3D e loja headless.",
    live: "https://osegredofungi.com/",
    local: true,
    shots: Array.from({ length: 12 }, (_, i) =>
      `/portfolio-shots/segredo-fungi/${String(i + 1).padStart(2, "0")}.png`,
    ),
  },
  {
    slug: "site-integra",
    client: "Integra Máquinas",
    category: "Indústria · Catálogo Web",
    tag: "WEB · SISTEMA",
    desc: "Site institucional e catálogo de máquinas industriais, com painel administrativo e gestão de leads.",
    live: "https://site-integra.vercel.app/",
    local: true,
    shots: Array.from({ length: 11 }, (_, i) =>
      `/portfolio-shots/site-integra/${String(i + 1).padStart(2, "0")}.png`,
    ),
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
