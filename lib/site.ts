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

/** Oferta "risco zero" — exibida no Hero e na seção dedicada. */
export const OFERTA = {
  badge: "RISCO ZERO",
  titulo: "Você vê o site pronto",
  tituloAccent: "antes de pagar qualquer coisa.",
  sub: "Eu desenvolvo uma demonstração real do seu site — não um mockup, não uma promessa. Você navega, testa e só fecha negócio se aprovar. Se não amar, não paga nada.",
  pontos: [
    {
      titulo: "Demonstração real, não maquete",
      desc: "Você recebe um site funcional pra navegar de verdade — no celular e no computador.",
    },
    {
      titulo: "Zero compromisso antecipado",
      desc: "Nada de sinal pra ver a proposta. Primeiro você aprova, depois a gente conversa sobre valores.",
    },
    {
      titulo: "Só paga se aprovar",
      desc: "Se a demonstração não te convencer, você não deve nada. O risco é todo meu.",
    },
  ],
  cta: "Quero minha demonstração grátis",
};

/** História pessoal — quem faz, em primeira pessoa. */
export const QUEM_FAZ = {
  nome: "Jorge Henrique",
  papel: "Fundador & Desenvolvedor · JV WEB STUDIO",
  paragrafos: [
    "Sou o Jorge, fundador da JV WEB STUDIO. Quando você fecha um projeto aqui, é comigo que você fala — do primeiro briefing à entrega final. Sem equipe de atendimento no meio, sem telefone sem fim, sem ruído entre o que você pediu e o que é construído.",
    "Eu escrevo cada site em código próprio (React e Next.js), sem builders engessados e sem template genérico. Isso me dá controle total sobre performance, design e o que dá pra fazer depois — seu projeto cresce com o seu negócio, não trava num limite de plataforma.",
    "Além de sites, eu construo as automações N8N que tiram o trabalho repetitivo das suas costas: atendimento no WhatsApp, captação de leads, disparo de campanhas e geração de conteúdo no automático. Site bonito é o começo — eu entrego a máquina que trabalha por você.",
  ],
  pilares: [
    { titulo: "Atendimento direto comigo", desc: "Você fala com quem desenvolve, do briefing à entrega." },
    { titulo: "Código próprio, sem caixinha", desc: "React e Next.js de verdade — performance e liberdade total." },
    { titulo: "Entrega rápida e premium", desc: "Seu site no ar em até 7 dias úteis, com acabamento de estúdio." },
  ],
};

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
  { n: "04", title: "Entrega no Prazo", desc: "Cronograma claro, sprints diários e transparência total durante todo o projeto.", enfase: "Entrega em até 7 dias após o envio do briefing e material do cliente." },
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
    desc: "Briefing respondido + logo, imagens e vídeos. Com o briefing em mãos eu crio a COPY perfeita para o seu site, focada na melhor estratégia de Neurociência e Marketing. Material em mãos, o cronômetro da entrega começa a contar.",
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
    img: "/process/entrega-segredo-fungi.webp",
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
  { name: "Ricardo Senhorinha", role: "Fundador · Íntegra Representações", featured: true, quote: "Ficou sensacional, superou minhas expectativas! Dá pra ver o cuidado que o Jorge teve em entender meu negócio e transformar isso em algo profissional, moderno e alinhado com o posicionamento que eu queria passar pro mercado. Agradeço pela dedicação, agilidade e parceria durante todo o processo — vou indicar o trabalho dele sempre que surgir oportunidade." },
  { name: "Luana Noronha", role: "Sócia-proprietária · Compor Construtintas", quote: "Buscávamos um atendimento personalizado para a criação do nosso catálogo digital e site, e o Jorge foi muito atencioso e profissional — demonstrando conhecimento na área, sempre buscando soluções para nossas demandas e pronto para resolver qualquer mudança solicitada. Mostrou domínio de design e estética para elaborar uma interface não só prática, mas muito bonita e atrativa. Indicamos seus serviços e estamos muito felizes com o andamento do projeto." },
  { name: "Marcelo Scienza", role: "Sócio-fundador · Segredo Fungi", quote: "Sobre o serviço prestado pelo Jorge? Tão rápido que talvez ele finalize um projeto inteiro enquanto escrevo esse comentário. Suporte fora do comum, personalizado e com uma perspectiva ampla focada em conceitos disruptivos — tornando ideias em realidade e deixando aquela sensação de que agora você tem algo único, exclusivo e com requinte." },
  { name: "Jéssica Regina", role: "Gestora de Marketing e Conteúdo · Briefing Digital", quote: "Achei o sistema de briefing excelente! Além de facilitar muito meu trabalho, ele me ajudou a passar uma imagem mais profissional para os clientes. O processo ficou mais rápido, organizado e objetivo, sem perder informações importantes. Realmente me poupou tempo e deixou minha rotina muito mais prática." },
];

export const NAV = [
  { label: "Estúdio", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Contato", href: "#contato" },
];
