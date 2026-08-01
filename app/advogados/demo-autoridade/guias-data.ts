/* ============================================================================
   CONTEÚDO DAS PÁGINAS-GUIA · demo Autoridade (tema Lex)
   Uma guia por área de atuação — é isto que o plano Autoridade entrega:
   conteúdo educativo, segmentado, que o Google ranqueia por problema.
   O template visual fica em GuiaTemplate.tsx; aqui mora só o conteúdo.
============================================================================ */

export type Guia = {
  slug: string;
  area: string;
  /** Imagem de capa da guia (chave de LEX_IMG) — cada área ganha a sua. */
  capa: "livro" | "sinete" | "marmore" | "couro" | "balancas" | "guilloche";
  metaTitle: string;
  metaDesc: string;
  /** H1 em três pedaços: texto normal + trecho em ouro + texto normal (opcional) */
  h1: { antes: string; ouro: string; depois?: string };
  intro: string;
  entenda: { titulo: string; paragrafos: string[] };
  lista: { titulo: string; itens: string[] };
  passos: { titulo: string; itens: { n: string; t: string; d: string }[] };
  destaque: { titulo: string; texto: string };
  faq: { q: string; a: string }[];
  cta: { antes: string; ouro: string; texto: string };
};

export const GUIAS_CONTEUDO: Record<string, Guia> = {
  /* ------------------------------------------------------------------ */
  "recuperacao-de-creditos-tributarios": {
    slug: "recuperacao-de-creditos-tributarios",
    area: "Tributário estratégico",
    capa: "marmore",
    metaTitle: "Recuperação de créditos tributários: sua empresa pode ter dinheiro a receber",
    metaDesc:
      "Guia direto sobre recuperação de tributos pagos indevidamente: quem tem direito, como funciona a análise e o prazo de 5 anos. Site demonstrativo da JV Web Studio.",
    h1: { antes: "Sua empresa pode ter ", ouro: "dinheiro a receber", depois: " do fisco." },
    intro:
      "Boa parte das empresas brasileiras paga mais tributo do que a lei exige, todos os meses, sem saber. Este guia explica de onde vêm esses valores, quem pode revisar e como o processo funciona na prática.",
    entenda: {
      titulo: "O que é recuperação de créditos tributários",
      paragrafos: [
        "O sistema tributário brasileiro muda o tempo todo, e os tribunais superiores frequentemente decidem que uma cobrança era indevida. O caso mais conhecido é a exclusão do ICMS da base de cálculo do PIS e da COFINS, decidida pelo STF. Quando isso acontece, o que a empresa pagou a mais vira crédito.",
        "Recuperar esses créditos é um direito, não uma manobra: a própria legislação prevê a restituição e a compensação de tributos pagos indevidamente nos últimos 5 anos.",
      ],
    },
    lista: {
      titulo: "Quem costuma ter valores a recuperar",
      itens: [
        "Empresas do Lucro Real ou Presumido que recolhem PIS, COFINS, ICMS, IPI ou contribuições sobre a folha",
        "Indústrias e distribuidoras com operações interestaduais ou substituição tributária",
        "Prestadoras de serviço com ISS e retenções na fonte em vários municípios",
        "Empresas que passaram por mudança de regime, fusão ou reorganização nos últimos 5 anos",
      ],
    },
    passos: {
      titulo: "Como o trabalho funciona",
      itens: [
        { n: "I", t: "Levantamento", d: "Análise das apurações e notas dos últimos 5 anos, feita sobre os arquivos que a sua contabilidade já possui. Sem parar a operação." },
        { n: "II", t: "Parecer", d: "Você recebe por escrito o que foi pago indevidamente, com a tese aplicável a cada valor e o grau de solidez de cada uma." },
        { n: "III", t: "Recuperação", d: "Via administrativa ou judicial, conforme o caso. Compensação com tributos futuros ou restituição em espécie." },
        { n: "IV", t: "Rotina", d: "Correção da parametrização para a empresa parar de pagar errado daqui para a frente. O ganho vira recorrente." },
      ],
    },
    destaque: {
      titulo: "O prazo corre contra a empresa",
      texto:
        "A lei permite revisar apenas os últimos 5 anos. Cada mês que passa, o mês mais antigo do período prescreve e o valor correspondente deixa de ser recuperável, em definitivo. Quem revisa primeiro, recupera mais.",
    },
    faq: [
      {
        q: "Minha contabilidade já não faria isso?",
        a: "São trabalhos diferentes e complementares. A contabilidade apura conforme a regra vigente; a revisão jurídica questiona a própria regra, aplicando teses firmadas pelos tribunais superiores, como a exclusão do ICMS da base do PIS e da COFINS. É comum encontrar valores relevantes em empresas com contabilidade impecável.",
      },
      {
        q: "Existe risco de chamar a atenção do fisco?",
        a: "A revisão usa exclusivamente teses consolidadas e caminhos previstos em lei, como o pedido administrativo de restituição e a ação judicial. Não se trata de brecha, e sim de cobrar de volta o que foi pago além do devido.",
      },
      {
        q: "Quanto tempo leva para ver o dinheiro?",
        a: "O levantamento inicial leva algumas semanas. A recuperação em si varia com a via escolhida: compensações administrativas costumam ser mais rápidas, discussões judiciais levam mais tempo. No parecer você recebe uma estimativa realista por tese, não uma promessa.",
      },
      {
        q: "E se a análise não encontrar nada?",
        a: "Você recebe o parecer do mesmo jeito, com a confirmação de que a empresa está pagando corretamente. A proposta de honorários é apresentada antes, por escrito, e contempla esse cenário com transparência.",
      },
    ],
    cta: {
      antes: "Vale a pena olhar os ",
      ouro: "seus últimos 5 anos?",
      texto: "Uma conversa franca resolve essa dúvida. Análise inicial sobre documentos que a sua contabilidade já tem.",
    },
  },

  /* ------------------------------------------------------------------ */
  "acordo-de-socios": {
    slug: "acordo-de-socios",
    area: "Societário e M&A",
    capa: "sinete",
    metaTitle: "Acordo de sócios: as cláusulas que evitam a guerra societária",
    metaDesc:
      "Guia prático sobre acordo de sócios: o que é, as cláusulas essenciais e por que o melhor momento de assinar é enquanto a sociedade vai bem. Site demonstrativo da JV Web Studio.",
    h1: { antes: "A sociedade vai bem. É agora que se escreve o ", ouro: "acordo de sócios." },
    intro:
      "Quase toda guerra societária nasce do que nunca foi combinado: saída, morte, divórcio, desempate. Este guia mostra o que um acordo de sócios resolve e quais cláusulas não podem faltar no seu.",
    entenda: {
      titulo: "O que é um acordo de sócios",
      paragrafos: [
        "O contrato social é um documento público e, na maioria das empresas, genérico: diz quem são os sócios e quanto cada um tem. O acordo de sócios é o documento privado que diz como a sociedade funciona de verdade: como se decide, como se sai, como se resolve empate e o que acontece nos cenários que ninguém gosta de imaginar.",
        "Ele vale entre os sócios e pode ser oponível à própria sociedade. Na prática, é a diferença entre resolver um conflito em uma reunião ou em cinco anos de processo.",
      ],
    },
    lista: {
      titulo: "As cláusulas que evitam guerra",
      itens: [
        "Compra e venda de participações: direito de preferência, tag along e drag along",
        "Morte ou incapacidade de sócio: quem fica com as quotas e como os herdeiros são pagos",
        "Divórcio de sócio: blindagem para o ex-cônjuge não virar seu novo sócio",
        "Saída voluntária: prazo, aviso e critério de apuração de haveres definidos ANTES do conflito",
        "Não concorrência e não aliciamento de clientes e equipe após a saída",
        "Pró-labore e distribuição de lucros: regra clara, não humor do caixa",
        "Desempate (deadlock): mecanismo objetivo para sociedades 50/50 não travarem",
        "Entrada de herdeiros e de terceiros: quem pode virar sócio e com aprovação de quem",
        "Exclusão por falta grave: o que é falta grave e qual o rito, por escrito",
      ],
    },
    passos: {
      titulo: "Como o trabalho funciona",
      itens: [
        { n: "I", t: "Diagnóstico", d: "Leitura do contrato social, da composição societária e da dinâmica real entre os sócios. Cada sociedade tem pontos de tensão próprios." },
        { n: "II", t: "Desenho", d: "As cláusulas são discutidas cenário a cenário com os sócios, em linguagem direta. Ninguém assina o que não entendeu." },
        { n: "III", t: "Formalização", d: "Redação final, assinatura e arquivamento, com ajuste do contrato social quando necessário para dar eficácia ao acordo." },
        { n: "IV", t: "Revisão", d: "A sociedade muda: entra sócio, nasce herdeiro, cresce o faturamento. O acordo é revisitado a cada mudança relevante." },
      ],
    },
    destaque: {
      titulo: "O melhor momento é enquanto ninguém precisa dele",
      texto:
        "Acordo de sócios se assina em tempo de paz. Depois que o conflito se instala, cada cláusula vira negociação de guerra e, na maioria dos casos, ninguém assina mais nada. Se a sua sociedade vai bem hoje, este é exatamente o momento.",
    },
    faq: [
      {
        q: "Já temos contrato social. Não basta?",
        a: "Para existir, sim. Para conviver, quase nunca. O contrato social raramente trata de saída, morte, divórcio, desempate e concorrência. É justamente nesses vazios que nascem as disputas mais caras.",
      },
      {
        q: "Sociedade 50/50 tem solução?",
        a: "Tem, e é onde o acordo mais importa. Mecanismos de desempate, como voto de qualidade alternado, mediador pré-definido ou cláusulas de compra forçada, evitam que a empresa trave por falta de maioria.",
      },
      {
        q: "Quanto tempo leva para ficar pronto?",
        a: "O ritmo é dos sócios: o desenho das cláusulas costuma tomar algumas reuniões, e a formalização é rápida. O que não se recomenda é assinar modelo pronto sem discutir os cenários com quem entende.",
      },
      {
        q: "E se um dos sócios não quiser assinar?",
        a: "A recusa já é informação valiosa sobre a sociedade. O acordo não pode ser imposto, mas a conversa estruturada, mediada por quem faz isso todos os dias, costuma destravar resistências ao mostrar que o documento protege todos os lados.",
      },
    ],
    cta: {
      antes: "Sua sociedade tem ",
      ouro: "regras para os dias difíceis?",
      texto: "Uma conversa franca sobre a composição da sua sociedade e os cenários que o seu contrato social não cobre.",
    },
  },

  /* ------------------------------------------------------------------ */
  "contratos-empresariais": {
    slug: "contratos-empresariais",
    area: "Contratos empresariais",
    capa: "livro",
    metaTitle: "Contratos empresariais: o guia para não assinar o próximo problema",
    metaDesc:
      "Guia prático de contratos empresariais: os erros mais comuns, o que revisar antes de assinar e como montar uma rotina de minutas. Site demonstrativo da JV Web Studio.",
    h1: { antes: "O contrato que sua empresa assina vale ", ouro: "o que está escrito.", depois: " Nada mais." },
    intro:
      "Aperto de mão não sustenta operação. Este guia lista os erros de contrato que aparecem toda semana nas empresas, o que revisar antes de assinar e como transformar contrato em rotina, não em susto.",
    entenda: {
      titulo: "Onde os contratos das empresas falham",
      paragrafos: [
        "A maioria dos contratos empresariais em uso no Brasil nasceu de um modelo baixado da internet, adaptado às pressas, com cláusulas copiadas de outro negócio. Ele funciona enquanto tudo vai bem, porque contrato não é testado no dia da assinatura: é testado no dia do problema.",
        "Quando o problema chega, a empresa descobre que a multa não tem gatilho claro, que o foro é em outro estado e que a rescisão não previu aviso. O custo dessa descoberta costuma ser dez vezes maior que o de uma revisão feita a tempo.",
      ],
    },
    lista: {
      titulo: "Erros que aparecem toda semana",
      itens: [
        "Multa sem teto, sem gatilho definido ou impossível de executar",
        "Foro de eleição na cidade da outra parte, do outro lado do país",
        "Reajuste sem índice ou periodicidade: o preço congela e a margem derrete",
        "Prazo de entrega e nível de serviço sem critério objetivo de medição",
        "Confidencialidade sem prazo de vigência após o fim do contrato",
        "Rescisão sem aviso prévio definido nem regra de transição",
        "Assinatura por quem não tem poderes de representação no contrato social",
      ],
    },
    passos: {
      titulo: "Como o trabalho funciona",
      itens: [
        { n: "I", t: "Mapeamento", d: "Levantamento dos contratos vigentes da empresa: fornecedores, clientes, prestadores. Você descobre o que assinou de verdade." },
        { n: "II", t: "Padronização", d: "Minutas próprias para as operações recorrentes, escritas para o SEU negócio, no lugar dos modelos adaptados." },
        { n: "III", t: "Negociação", d: "Nas cláusulas críticas dos contratos relevantes, quem negocia do seu lado é quem conhece a consequência de cada palavra." },
        { n: "IV", t: "Rotina", d: "Fluxo simples de revisão antes de qualquer assinatura relevante, com prazo de resposta definido para não travar o comercial." },
      ],
    },
    destaque: {
      titulo: "Contrato bom é o que evita o processo",
      texto:
        "O objetivo de uma boa cláusula não é ganhar a briga: é fazer a briga não valer a pena para o outro lado. Uma multa executável, um foro conveniente e um critério objetivo de medição resolvem no e-mail o que custaria anos no Judiciário.",
    },
    faq: [
      {
        q: "Posso usar modelo pronto da internet?",
        a: "Para entender a estrutura, sim. Para assinar, é arriscado: o modelo não conhece a sua operação, o seu risco nem a legislação específica do seu setor. As cláusulas que mais causam prejuízo são justamente as que o modelo trata de forma genérica.",
      },
      {
        q: "Contrato fechado por e-mail ou WhatsApp vale?",
        a: "Em regra, vale e obriga. A questão é o que se consegue provar: escopo, prazo e preço combinados em conversa esparsa viram discussão infinita. Formalizar em documento único é proteção para os dois lados.",
      },
      {
        q: "O que revisar primeiro na minha empresa?",
        a: "Os contratos de maior valor e os recorrentes: o contrato com o principal fornecedor, o modelo usado com clientes e os de prestadores estratégicos. Três documentos costumam concentrar a maior parte do risco contratual.",
      },
      {
        q: "Minha empresa é pequena. Isso se aplica?",
        a: "Quanto menor a empresa, menor a gordura para absorver um contrato ruim. Um único litígio evitável consome o lucro de meses. A rotina de revisão se dimensiona ao tamanho da operação.",
      },
    ],
    cta: {
      antes: "Quais contratos sustentam ",
      ouro: "a sua operação hoje?",
      texto: "Uma conversa franca sobre os três contratos mais importantes da sua empresa e o que há dentro deles.",
    },
  },

  /* ------------------------------------------------------------------ */
  "recuperacao-judicial": {
    slug: "recuperacao-judicial",
    area: "Reestruturação e recuperação judicial",
    capa: "couro",
    metaTitle: "Recuperação judicial sem mitos: o que a lei realmente permite",
    metaDesc:
      "Guia sem mitos sobre reestruturação e recuperação judicial: o que a lei permite, os sinais de alerta e por que chegar cedo amplia as opções. Site demonstrativo da JV Web Studio.",
    h1: { antes: "Recuperação judicial não é o fim. É a ferramenta de ", ouro: "quem decidiu continuar." },
    intro:
      "O mito de que recuperação judicial é atestado de falência faz empresários adiarem a decisão até restar pouca coisa a proteger. Este guia explica o que a lei realmente oferece e quais sinais pedem ação imediata.",
    entenda: {
      titulo: "O que a lei realmente permite",
      paragrafos: [
        "A Lei 11.101/2005 existe para preservar empresas viáveis: ela suspende temporariamente execuções e penhoras (o chamado stay period), obriga os credores a negociar de forma coletiva e permite um plano de pagamento compatível com a capacidade real do caixa.",
        "Recuperação judicial não é falência, e a maior parte das reestruturações nem chega ao Judiciário: renegociações extrajudiciais bem conduzidas, com os credores certos e na ordem certa, resolvem antes. A via judicial é uma das ferramentas, não a primeira.",
      ],
    },
    lista: {
      titulo: "Sinais de que é hora de olhar para isso",
      itens: [
        "Parcela relevante do faturamento comprometida com serviço de dívida cara",
        "Execuções, protestos ou penhoras em andamento contra a empresa",
        "Fornecedores estratégicos cortando prazo e exigindo pagamento à vista",
        "Folha de pagamento ou impostos correntes começando a atrasar",
        "Sócios usando crédito pessoal para cobrir capital de giro da empresa",
      ],
    },
    passos: {
      titulo: "Como o trabalho funciona",
      itens: [
        { n: "I", t: "Diagnóstico", d: "Radiografia da dívida: quem são os credores, quais garantias existem e qual o fluxo de caixa real. Sem isso, qualquer plano é chute." },
        { n: "II", t: "Estratégia", d: "A via extrajudicial é testada primeiro: renegociação estruturada com os credores decisivos. A judicial entra quando amplia o poder de negociação." },
        { n: "III", t: "Proteção", d: "Se a via judicial for o caminho, o pedido bem instruído ativa o stay period e dá fôlego imediato à operação." },
        { n: "IV", t: "Plano", d: "Construção e aprovação do plano com os credores, e acompanhamento da execução até a empresa sair da recuperação de pé." },
      ],
    },
    destaque: {
      titulo: "Quem chega cedo escolhe. Quem chega tarde aceita.",
      texto:
        "Cada mês de atraso na decisão fecha portas: garantias são executadas, fornecedores desligam, o caixa encolhe. A empresa que procura orientação nos primeiros sinais negocia com opções na mesa. A que espera negocia de joelhos.",
    },
    faq: [
      {
        q: "Pedir recuperação significa que a empresa vai fechar?",
        a: "Não. O objetivo do instituto é exatamente o contrário: preservar a atividade, os empregos e a função social da empresa. Falência é outro procedimento, para empresas inviáveis. A recuperação é para quem tem operação que se sustenta depois de reorganizar o passivo.",
      },
      {
        q: "Eu perco o controle da minha empresa?",
        a: "Em regra, não: os sócios e administradores permanecem à frente do negócio durante o processo, sob fiscalização de um administrador judicial. Afastamento é exceção, reservada a casos de fraude ou má gestão comprovada.",
      },
      {
        q: "Meus fornecedores vão sumir?",
        a: "Essa é a conversa mais delicada e mais importante do processo. Fornecedores que continuam vendendo durante a recuperação ganham tratamento privilegiado pela lei, e comunicar isso bem, antes do pânico, é parte central da estratégia.",
      },
      {
        q: "E as dívidas fiscais, entram no plano?",
        a: "Dívida tributária não entra no plano de recuperação, mas tem caminhos próprios: transações tributárias e parcelamentos especiais para empresas em recuperação, que hoje estão mais vantajosos do que já foram. As duas frentes andam juntas.",
      },
    ],
    cta: {
      antes: "A dívida está ditando ",
      ouro: "as decisões da empresa?",
      texto: "Uma conversa franca e sigilosa sobre o tamanho real do problema e as opções que ainda estão na mesa.",
    },
  },

  /* ------------------------------------------------------------------ */
  "holding-familiar": {
    slug: "holding-familiar",
    area: "Holding e planejamento patrimonial",
    capa: "guilloche",
    metaTitle: "Holding familiar: quando faz sentido e quando é só moda",
    metaDesc:
      "Guia honesto sobre holding familiar: o que é, quando faz sentido, o passo a passo da constituição e os limites da proteção patrimonial. Site demonstrativo da JV Web Studio.",
    h1: { antes: "Organizar o patrimônio ", ouro: "em vida", depois: " custa menos que inventariar depois." },
    intro:
      "Holding virou moda, e moda produz tanto estrutura bem feita quanto promessa vazia. Este guia explica sem mistério o que uma holding familiar resolve, quando ela faz sentido e onde estão os limites que os anúncios não contam.",
    entenda: {
      titulo: "O que é uma holding familiar",
      paragrafos: [
        "Holding familiar é uma sociedade criada para concentrar o patrimônio da família: imóveis, participações em empresas, investimentos. Em vez de cada bem estar no nome de uma pessoa física, os bens pertencem à sociedade, e a família detém as quotas dela.",
        "Bem estruturada, ela separa o patrimônio pessoal do risco da atividade empresarial, organiza a sucessão em vida com doação de quotas e reserva de usufruto, e dá governança ao patrimônio: regras claras sobre venda, aluguel e administração dos bens.",
      ],
    },
    lista: {
      titulo: "Quando ela costuma fazer sentido",
      itens: [
        "Imóveis alugados na pessoa física, com o patrimônio exposto e sem organização",
        "Mais de um herdeiro e vontade de definir a sucessão em vida, sem litígio futuro",
        "Empresa operacional e patrimônio da família misturados no mesmo CNPJ ou CPF",
        "Preocupação com o custo e a duração de um inventário: anos de espera e despesas relevantes",
        "Desejo de doar em vida mantendo controle e renda, via usufruto das quotas",
      ],
    },
    passos: {
      titulo: "Como o trabalho funciona",
      itens: [
        { n: "I", t: "Inventário em vida", d: "Levantamento completo do patrimônio, das dívidas e da situação de cada bem. O desenho começa pela realidade, não pelo modelo." },
        { n: "II", t: "Desenho", d: "Definição da estrutura: uma ou mais sociedades, regime de bens de cada casal, cláusulas de proteção e regras de governança familiar." },
        { n: "III", t: "Constituição", d: "Criação da sociedade e transferência dos bens, com atenção a custos de transmissão e à correta avaliação de cada ativo." },
        { n: "IV", t: "Sucessão", d: "Doação de quotas com reserva de usufruto e cláusulas de incomunicabilidade e impenhorabilidade, conforme o plano da família." },
      ],
    },
    destaque: {
      titulo: "Holding não é escudo mágico",
      texto:
        "Estrutura criada às pressas, com dívidas já vencidas ou credores batendo à porta, pode ser desconsiderada pela Justiça como fraude. A proteção real vem de planejar cedo, com finalidade legítima e execução técnica. Feita na hora certa, protege. Feita na hora errada, agrava.",
    },
    faq: [
      {
        q: "Holding paga menos imposto?",
        a: "Depende do caso, e desconfie de quem promete economia antes de conhecer os números. Em cenários de locação de imóveis, a tributação na pessoa jurídica costuma ser menor que na física; em outros, não compensa. A análise se faz com as suas receitas na mesa, não com percentuais de anúncio.",
      },
      {
        q: "Eu perco o controle dos meus bens?",
        a: "Não, se a estrutura for desenhada para isso. A doação de quotas com reserva de usufruto mantém a administração e a renda com você. Os herdeiros recebem a propriedade das quotas, mas o comando permanece com quem construiu o patrimônio.",
      },
      {
        q: "Serve para qualquer família?",
        a: "Não. Patrimônios pequenos podem não justificar o custo de constituição e manutenção da estrutura. Parte séria do trabalho é dizer quando a holding NÃO vale a pena e apontar alternativas mais simples, como testamento e doações diretas.",
      },
      {
        q: "Quanto tempo leva para estruturar?",
        a: "O desenho e a constituição costumam levar algumas semanas; a transferência dos bens varia com a quantidade de imóveis e os cartórios envolvidos. Mais importante que a pressa é a ordem certa das etapas, que evita custo desnecessário de transmissão.",
      },
    ],
    cta: {
      antes: "Seu patrimônio está organizado ",
      ouro: "para a próxima geração?",
      texto: "Uma conversa franca sobre o que você construiu, o que está exposto e o que faz sentido estruturar agora.",
    },
  },

  /* ------------------------------------------------------------------ */
  "contencioso-empresarial": {
    slug: "contencioso-empresarial",
    area: "Contencioso empresarial",
    capa: "balancas",
    metaTitle: "Empresa processada: o que fazer nas primeiras 72 horas",
    metaDesc:
      "Guia prático para empresas citadas em processo: prazos, primeiros passos, acordo versus defesa e o Domicílio Judicial Eletrônico. Site demonstrativo da JV Web Studio.",
    h1: { antes: "Sua empresa foi processada. As ", ouro: "primeiras 72 horas", depois: " decidem muito." },
    intro:
      "O que a empresa faz nos primeiros dias após a citação define o custo e o rumo do processo inteiro. Este guia mostra os passos imediatos, os erros clássicos e como se decide, com frieza, entre acordo e defesa.",
    entenda: {
      titulo: "Por que o relógio importa tanto",
      paragrafos: [
        "Recebida a citação, os prazos processuais começam a correr, e eles não esperam a agenda de ninguém. Perder o prazo de defesa pode levar à revelia: os fatos alegados pelo autor podem ser presumidos verdadeiros, e o processo anda sem a sua versão.",
        "Desde a implantação do Domicílio Judicial Eletrônico, empresas são citadas eletronicamente, e a falta de monitoramento da caixa faz prazos correrem sem que ninguém na empresa saiba. Grande parte das derrotas evitáveis começa exatamente aí.",
      ],
    },
    lista: {
      titulo: "O que fazer ao ser citado",
      itens: [
        "Registrar a data exata da citação: é dela que o prazo de defesa se conta",
        "Não ignorar e não subestimar: revelia transforma alegação do autor em presunção",
        "Reunir tudo sobre a relação: contrato, e-mails, conversas, notas e comprovantes",
        "Não contatar a outra parte por conta própria: o que se diz vira prova",
        "Avaliar acordo e defesa com números, não com orgulho: qual o custo de cada caminho?",
        "Verificar apólices de seguro e provisões: parte do risco pode já estar coberta",
      ],
    },
    passos: {
      titulo: "Como o trabalho funciona",
      itens: [
        { n: "I", t: "Análise de risco", d: "Leitura fria do processo: chance real de cada cenário, valores envolvidos e custo total de cada caminho, por escrito." },
        { n: "II", t: "Estratégia", d: "Acordo, defesa, reconvenção ou uma combinação. A escolha é econômica e jurídica ao mesmo tempo, e é sua, com todos os dados na mesa." },
        { n: "III", t: "Condução", d: "Defesa técnica, audiências e recursos com relatório a cada movimentação relevante, em linguagem de negócio." },
        { n: "IV", t: "Aprendizado", d: "Fim do processo, ajuste na origem: o contrato, a rotina ou o processo interno que gerou o litígio é corrigido para não repetir." },
      ],
    },
    destaque: {
      titulo: "Monitore o Domicílio Judicial Eletrônico",
      texto:
        "A citação da sua empresa pode chegar por via eletrônica, e o prazo corre mesmo que ninguém abra a caixa. Ter rotina de monitoramento, com responsável definido, é hoje uma das proteções mais baratas e mais ignoradas do contencioso empresarial.",
    },
    faq: [
      {
        q: "Fazer acordo é sinal de fraqueza?",
        a: "É sinal de matemática. Em muitos casos o acordo custa menos que a vitória, considerando tempo, honorários, garantias e o desgaste da operação. Em outros, a defesa firme é o único caminho sensato. A decisão certa sai de uma conta feita com frieza, caso a caso.",
      },
      {
        q: "Quanto tempo dura um processo empresarial?",
        a: "De meses, quando há acordo bem construído, a vários anos, quando a disputa vai até as instâncias superiores. Na análise inicial você recebe uma estimativa realista para o seu caso específico, com os cenários e custos de cada rota.",
      },
      {
        q: "Posso cobrar de volta quem me processou sem razão?",
        a: "Existem instrumentos para isso: a reconvenção permite formular pedidos contra o autor no mesmo processo, e a litigância de má-fé pode gerar condenação de quem usa o processo de forma abusiva. A viabilidade depende do caso concreto.",
      },
      {
        q: "Minha empresa processa ou é processada com frequência. E agora?",
        a: "Litígio recorrente é sintoma, não sina. O trabalho de contencioso sério inclui olhar para a origem: contratos frágeis, cobrança desorganizada ou rotina interna que fabrica conflito. Resolver a causa custa menos que enxugar processo para sempre.",
      },
    ],
    cta: {
      antes: "Chegou uma citação ",
      ouro: "na sua mesa?",
      texto: "Uma conversa franca e imediata sobre prazos, riscos e os caminhos que ainda estão abertos.",
    },
  },
};

/** Ordem de exibição no catálogo da home */
export const GUIAS_ORDEM = [
  "recuperacao-de-creditos-tributarios",
  "acordo-de-socios",
  "contratos-empresariais",
  "recuperacao-judicial",
  "holding-familiar",
  "contencioso-empresarial",
] as const;
