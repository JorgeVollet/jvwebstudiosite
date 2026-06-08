// Conteúdo central do site — copy extraída da Apresentação JV WEB STUDIO 2026.
export const SITE = {
  name: "JV WEB STUDIO",
  tagline: "SITES · SISTEMAS WEB · AUTOMAÇÕES N8N",
  email: "jorgehenriquevollet@gmail.com",
  instagram: "jvwebstudio",
  url: "https://jvwebstudio.com.br",
  founder: "Jorge Henrique",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  location: "Brasil · 100% Online",
};

export const HERO = {
  badge: "ESTÚDIO DIGITAL · 2026",
  titleTop: "Soluções digitais",
  titleAccent: "construídas para escalar.",
  sub: "Sites profissionais, sistemas sob medida e automações N8N para empresas que querem entregar — e não apenas existir online.",
};

export const STATS = [
  { value: "100%", label: "Projetos personalizados" },
  { value: "N8N", label: "Automação inteligente" },
  { value: "24/7", label: "Suporte e manutenção" },
  { value: "∞", label: "Escalabilidade real" },
];

export const SERVICES = [
  {
    n: "01",
    title: "Sites Profissionais",
    desc: "Sites institucionais, landing pages e e-commerce com design premium e foco em conversão.",
    items: [
      "Landing pages que vendem",
      "Sites institucionais",
      "E-commerce sob medida",
      "SEO técnico embarcado",
      "Hospedagem e domínio",
      "Responsivo 100%",
    ],
  },
  {
    n: "02",
    title: "Sistemas Web sob Medida",
    desc: "Plataformas internas, dashboards e ERPs construídos para a realidade exata do seu negócio.",
    items: [
      "Painéis administrativos",
      "Dashboards em tempo real",
      "ERPs e CRMs customizados",
      "APIs e integrações",
      "Banco de dados otimizado",
      "Acesso multiusuário",
    ],
  },
  {
    n: "03",
    title: "Automações N8N",
    desc: "Fluxos automatizados que conectam suas ferramentas e eliminam tarefas repetitivas.",
    items: [
      "Integrações entre apps",
      "Automação de WhatsApp",
      "RPA web (web scraping)",
      "Robôs de e-mail",
      "Conexão com IA / GPT",
      "Workflows complexos",
    ],
  },
];

export const DIFFERENTIALS = [
  { n: "01", title: "Atendimento Direto", desc: "Você fala com quem realmente desenvolve. Sem intermediários, sem ruído." },
  { n: "02", title: "Código Próprio, Sem Caixinhas", desc: "Nada de templates engessados ou plataformas limitantes. Sua solução é sua." },
  { n: "03", title: "Performance Real", desc: "Sites rápidos, sistemas leves, automações estáveis. Otimização desde o briefing." },
  { n: "04", title: "Entrega no Prazo", desc: "Cronograma claro, sprints semanais e transparência total durante todo o projeto." },
  { n: "05", title: "Suporte Continuado", desc: "Manutenção, ajustes e evolução pós-entrega. Seu projeto não fica abandonado." },
  { n: "06", title: "Preço Honesto", desc: "Orçamentos detalhados, sem surpresas. Você sabe exatamente o que está pagando." },
];

export const PROCESS = [
  {
    n: "01",
    title: "Escolha do Pacote",
    tag: "PASSO 1",
    desc: "Você define o pacote ideal e quantas seções quer. Escopo claro desde o início — sem surpresas, sem enrolação.",
    img: "https://images.unsplash.com/photo-1627518788331-b3b7fdaa382f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Briefing Enviado",
    tag: "ATÉ 2 DIAS ÚTEIS",
    desc: "Em no máximo 2 dias úteis você recebe um briefing estruturado para preencher — tudo que eu preciso saber para construir o seu site.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Você Envia os Materiais",
    tag: "SEU TURNO",
    desc: "Briefing respondido + logo, imagens, vídeos e textos. Com o material em mãos, o cronômetro da entrega começa a contar.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Desenvolvimento do Site",
    tag: "STACKS DE PONTA",
    desc: "Construção com as melhores stacks do mercado — código próprio, performático e escalável. Nada de template genérico.",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    title: "Entrega do Site",
    tag: "7 DIAS ÚTEIS",
    desc: "Em até 7 dias úteis seu site está pronto e no ar. Agilidade real, sem perder a qualidade premium.",
    img: "/process/entrega-segredo-fungi.png",
    pos: "32% 42%",
  },
  {
    n: "06",
    title: "Refinamentos Juntos",
    tag: "ATÉ FICAR PERFEITO",
    desc: "Ajustes e melhorias a gente vê juntos, até chegar no resultado ideal. Você no controle, eu na execução.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const PORTFOLIO = [
  { tag: "WEB · SISTEMA", client: "Cliente A", desc: "Site institucional + Sistema de leads" },
  { tag: "AUTOMAÇÃO", client: "Cliente B", desc: "Automação N8N + Integração WhatsApp" },
  { tag: "E-COMMERCE", client: "Cliente C", desc: "E-commerce performático" },
  { tag: "SISTEMA WEB", client: "Cliente D", desc: "Dashboard analítico em tempo real" },
];

export const TESTIMONIALS = [
  { name: "Ricardo Alves", role: "CEO · Comércio Local", quote: "O site novo trouxe leads no primeiro mês. Direto, rápido e sem enrolação técnica." },
  { name: "Marina Costa", role: "Gestora · Clínica", quote: "A automação de WhatsApp economiza horas da minha equipe todo dia. Mudou o jogo." },
  { name: "Felipe Souza", role: "Fundador · E-commerce", quote: "Loja rápida, painel sob medida e suporte que responde de verdade. Recomendo." },
  { name: "Ana Beatriz", role: "Diretora · Imobiliária", quote: "Dashboard em tempo real que eu sonhava. O Jorge entendeu o negócio, não só o código." },
];

export const NAV = [
  { label: "Estúdio", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Contato", href: "#contato" },
];
