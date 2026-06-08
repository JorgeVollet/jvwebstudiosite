/* =========================================================
   OLDSCHOOL BARBEARIA — Base de dados (protótipo)
   Conteúdo fictício. Trocar pelos dados reais da barbearia.
   ========================================================= */

const DADOS = {

  /* --- Barbearia --- */
  barbearia: {
    nome: 'OldSchool Barbearia',
    cidade: 'Horizontina · RS',
    endereco: 'Rua Osvaldo Aranha, 432 — Centro, Horizontina/RS',
    // Número de teste (formato 55 + DDD + número, só dígitos). Trocar pelo número real da barbearia.
    whatsapp: '5555997379998'
  },

  /* --- Barbeiros --- (pin = senha do painel admin) --- */
  barbeiros: [
    { id:'rafa',   nome:'Rafael Lima',   apelido:'Rafa',   inicial:'R',
      especialidade:'Cortes clássicos & navalhado', exp:'8 anos de cadeira', nota:4.9, pin:'1010',
      bio:'Mão firme no clássico. Se o assunto é navalhado e degradê limpo, é com o Rafa.' },
    { id:'diego',  nome:'Diego Souza',   apelido:'Diego',  inicial:'D',
      especialidade:'Degradê, freestyle & platinado', exp:'6 anos de cadeira', nota:4.8, pin:'2020',
      bio:'O mais antenado nas tendências. Degradê na régua e colorização sem medo.' },
    { id:'marcao', nome:'Marcos Pereira', apelido:'Marcão', inicial:'M',
      especialidade:'Barba, barboterapia & tratamentos', exp:'12 anos de cadeira', nota:5.0, pin:'3030',
      bio:'O barbeiro mais experiente da casa. Especialista em barba e no ritual da toalha quente.' }
  ],

  /* --- Serviços --- (preço varia por barbeiro) --- */
  servicos: [
    { id:'corte',     nome:'Corte Masculino',        icone:'mdi:content-cut',
      desc:'Tesoura, máquina e acabamento na navalha.',  dur:40,
      precos:{ rafa:45, diego:45, marcao:40 } },
    { id:'combo',     nome:'Combo Corte + Barba',    icone:'mdi:face-man-shimmer', destaque:true,
      desc:'O clássico completo: corte + barba com toalha quente.', dur:70,
      precos:{ rafa:70, diego:70, marcao:65 } },
    { id:'barba',     nome:'Barba Completa',         icone:'mdi:razor-double-edge',
      desc:'Toalha quente, navalha e finalização com produtos.', dur:30,
      precos:{ rafa:35, diego:35, marcao:35 } },
    { id:'infantil',  nome:'Corte Infantil',         icone:'mdi:baby-face-outline',
      desc:'Atendimento com paciência para os pequenos.', dur:35,
      precos:{ rafa:35, diego:35, marcao:35 } },
    { id:'platinado', nome:'Platinado / Descoloração', icone:'mdi:bottle-tonic-plus',
      desc:'Descoloração global com produtos premium.',  dur:120,
      precos:{ rafa:130, diego:120, marcao:140 } }
  ],

  /* --- Adicionais (preço fixo) --- */
  addons: [
    { id:'pezinho',     nome:'Pézinho',           icone:'mdi:content-cut',    preco:15 },
    { id:'sobrancelha', nome:'Sobrancelha',       icone:'mdi:eye-outline',    preco:20 },
    { id:'hidratacao',  nome:'Hidratação',        icone:'mdi:water',          preco:30 },
    { id:'pigmentacao', nome:'Pigmentação barba', icone:'mdi:spray',          preco:50 }
  ],

  /* --- Horários base (slots possíveis no dia) --- */
  horarios: ['09:00','10:00','11:00','13:30','14:30','15:30','16:30','17:30','18:30'],

  /* --- Galeria (imagens ilustrativas) --- */
  galeria: [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521590832167-7bcbfac86b25?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=700&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=700&auto=format&fit=crop'
  ],

  /* --- Depoimentos --- */
  depoimentos: [
    { nome:'Lucas Fontana',  nota:5, texto:'Melhor barbearia de Horizontina, sem discussão. Agendei pelo site em 30 segundos e fui atendido na hora marcada.' },
    { nome:'André Beck',     nota:5, texto:'O Marcão é mestre na barba. Toalha quente, navalha, aquele cuidado de antigamente. Saio de lá outro homem.' },
    { nome:'Vinícius Hoff',  nota:5, texto:'Degradê do Diego é outro nível. Ambiente top, café cortesia e atendimento que respeita o horário do cliente.' }
  ],

  /* --- Planos de fidelidade --- */
  planos: [
    { nome:'Sempre na Régua', preco:119, periodo:'mês', destaque:false,
      itens:['4 cortes no mês','Pézinho ilimitado','Agendamento prioritário'] },
    { nome:'Barba & Cabelo',  preco:189, periodo:'mês', destaque:true,
      itens:['4 cortes + 4 barbas','Pézinho e sobrancelha inclusos','Agendamento prioritário','10% de desconto na loja'] },
    { nome:'Clube VIP',       preco:259, periodo:'mês', destaque:false,
      itens:['Cortes e barbas ilimitados','Hidratação mensal inclusa','15% de desconto na loja','Bebida cortesia'] }
  ],

  /* --- Loja --- */
  loja: [
    { nome:'Pomada Modeladora', preco:39, icone:'mdi:hair-dryer-outline' },
    { nome:'Óleo para Barba',   preco:45, icone:'mdi:bottle-tonic' },
    { nome:'Shampoo de Barba',  preco:35, icone:'mdi:bottle-tonic-plus' },
    { nome:'Kit Navalha',       preco:89, icone:'mdi:razor-double-edge' }
  ]
};

/* =========================================================
   Helpers globais
   ========================================================= */
const STORAGE_KEY = 'oldschool_bookings_v2';

function formatBRL(n){
  return 'R$ ' + Number(n).toLocaleString('pt-BR');
}

function formatDur(min){
  const h = Math.floor(min/60), m = min%60;
  let s = '';
  if (h) s += h + 'h';
  if (m) s += (h ? ' ' : '') + m + 'min';
  return s || '0min';
}

function getBarbeiro(id){
  return DADOS.barbeiros.find(b => b.id === id);
}

function lerAgendamentos(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch(e){ return []; }
}

function salvarAgendamentos(lista){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

/* Semeia agendamentos de exemplo na primeira vez, para o painel
   já abrir com movimento na demonstração (cada barbeiro com casos
   pendentes, confirmados e recusados). */
function semearDemo(){
  if (localStorage.getItem(STORAGE_KEY) !== null) return;
  const hoje = new Date();
  const d = (offset) => {
    const x = new Date(hoje); x.setDate(x.getDate() + offset);
    const sem = x.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.','');
    return { iso:x.toISOString().slice(0,10),
             label: sem.charAt(0).toUpperCase()+sem.slice(1) + ', ' + x.getDate() +
                    ' ' + x.toLocaleDateString('pt-BR',{month:'short'}).replace('.','') };
  };
  const exemplos = [
    /* --- Rafa --- */
    { id:'OS'+(Date.now()-11000), criadoEm:Date.now()-1800000,
      barbeiroId:'rafa', barbeiroNome:'Rafael Lima (Rafa)',
      cliente:'Bruno Klein', telefone:'(55) 9 9912-4456',
      data:d(1).iso, dataLabel:d(1).label, hora:'09:00',
      servicos:[{nome:'Combo Corte + Barba',preco:70}], addons:[],
      total:70, duracao:70, obs:'', status:'pendente' },
    { id:'OS'+(Date.now()-12000), criadoEm:Date.now()-43200000,
      barbeiroId:'rafa', barbeiroNome:'Rafael Lima (Rafa)',
      cliente:'Tiago Marcheti', telefone:'(55) 9 9777-3344',
      data:d(2).iso, dataLabel:d(2).label, hora:'15:30',
      servicos:[{nome:'Combo Corte + Barba',preco:70}], addons:[],
      total:70, duracao:70, obs:'Degradê baixo, por favor.', status:'confirmado' },
    { id:'OS'+(Date.now()-13000), criadoEm:Date.now()-90000000,
      barbeiroId:'rafa', barbeiroNome:'Rafael Lima (Rafa)',
      cliente:'Cleiton Maas', telefone:'(55) 9 9650-1182',
      data:d(1).iso, dataLabel:d(1).label, hora:'11:00',
      servicos:[{nome:'Corte Masculino',preco:45}], addons:[],
      total:45, duracao:40, obs:'', status:'recusado' },
    /* --- Diego --- */
    { id:'OS'+(Date.now()-14000), criadoEm:Date.now()-7200000,
      barbeiroId:'diego', barbeiroNome:'Diego Souza (Diego)',
      cliente:'Henrique Vollet', telefone:'(55) 9 9123-4567',
      data:d(2).iso, dataLabel:d(2).label, hora:'16:30',
      servicos:[{nome:'Corte Masculino',preco:45},{nome:'Platinado / Descoloração',preco:120}],
      addons:[{nome:'Hidratação',preco:30}],
      total:195, duracao:175, obs:'Primeira vez fazendo platinado.', status:'pendente' },
    { id:'OS'+(Date.now()-15000), criadoEm:Date.now()-21600000,
      barbeiroId:'diego', barbeiroNome:'Diego Souza (Diego)',
      cliente:'Paulo Reolon', telefone:'(55) 9 9504-7781',
      data:d(3).iso, dataLabel:d(3).label, hora:'14:30',
      servicos:[{nome:'Corte Masculino',preco:45}], addons:[{nome:'Pézinho',preco:15}],
      total:60, duracao:55, obs:'', status:'confirmado' },
    /* --- Marcão --- */
    { id:'OS'+(Date.now()-16000), criadoEm:Date.now()-2700000,
      barbeiroId:'marcao', barbeiroNome:'Marcos Pereira (Marcão)',
      cliente:'Eduardo Brum', telefone:'(55) 9 9988-1122',
      data:d(1).iso, dataLabel:d(1).label, hora:'10:00',
      servicos:[{nome:'Barba Completa',preco:35}], addons:[{nome:'Sobrancelha',preco:20}],
      total:55, duracao:45, obs:'', status:'pendente' },
    { id:'OS'+(Date.now()-17000), criadoEm:Date.now()-100000000,
      barbeiroId:'marcao', barbeiroNome:'Marcos Pereira (Marcão)',
      cliente:'André Beck', telefone:'(55) 9 9461-2093',
      data:d(3).iso, dataLabel:d(3).label, hora:'17:30',
      servicos:[{nome:'Combo Corte + Barba',preco:65}], addons:[{nome:'Pigmentação barba',preco:50}],
      total:115, duracao:85, obs:'', status:'confirmado' }
  ];
  salvarAgendamentos(exemplos);
}

/* =========================================================
   PDF do comprovante (compartilhado: site + painel admin)
   Requer a biblioteca jsPDF carregada na página.
   ========================================================= */
function gerarPDF(b){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  const W = 210;
  const ink  = [22,20,15];
  const gold = [168,132,64];
  const dark = [40,36,28];
  const mid  = [120,110,92];

  doc.setFillColor(245,241,231); doc.rect(0,0,W,297,'F');
  doc.setFillColor(...ink);  doc.rect(0,0,W,46,'F');
  doc.setFillColor(...gold); doc.rect(0,46,W,1.8,'F');

  doc.setFont('times','bold'); doc.setFontSize(25); doc.setTextColor(245,241,231);
  doc.text('OLDSCHOOL BARBEARIA', W/2, 22, {align:'center'});
  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(...gold);
  doc.text('COMPROVANTE DE AGENDAMENTO', W/2, 31, {align:'center'});
  doc.setFontSize(8); doc.setTextColor(190,182,162);
  doc.text('Horizontina - RS   |   Feito a moda antiga desde 2014', W/2, 38, {align:'center'});

  let y = 62;
  doc.setFontSize(8); doc.setTextColor(...mid);
  doc.text('Protocolo: ' + b.id, 18, y);
  doc.text('Emitido em: ' + new Date(b.criadoEm).toLocaleString('pt-BR'), W-18, y, {align:'right'});

  const statusMap = {
    pendente:'SOLICITACAO PENDENTE',
    confirmado:'AGENDAMENTO CONFIRMADO',
    recusado:'SOLICITACAO RECUSADA'
  };
  y += 8;
  doc.setFillColor(...gold); doc.roundedRect(18, y-5, 66, 8, 1, 1, 'F');
  doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...ink);
  doc.text(statusMap[b.status] || statusMap.pendente, 51, y, {align:'center'});

  y += 16;
  doc.setDrawColor(...gold); doc.setLineWidth(0.3); doc.line(18, y, W-18, y);
  y += 8;
  const colL = 18, colR = 112;
  doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(...gold);
  doc.text('DADOS DO CLIENTE', colL, y);
  doc.text('ATENDIMENTO', colR, y);
  y += 7;
  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(...dark);
  doc.text('Nome:  ' + b.cliente, colL, y);
  doc.text('Barbeiro:  ' + b.barbeiroNome, colR, y);
  y += 6;
  doc.text('WhatsApp:  ' + b.telefone, colL, y);
  doc.text('Data:  ' + b.dataLabel, colR, y);
  y += 6;
  doc.text('Duracao aprox.:  ' + formatDur(b.duracao), colL, y);
  doc.text('Horario:  ' + b.hora, colR, y);

  y += 14;
  doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(...gold);
  doc.text('SERVICOS', colL, y);
  y += 3;
  doc.setDrawColor(210,200,178); doc.setLineWidth(0.2); doc.line(18, y, W-18, y);
  y += 7;
  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(...dark);
  b.servicos.forEach(s => {
    doc.text(s.nome, colL, y);
    doc.text(formatBRL(s.preco), W-18, y, {align:'right'});
    y += 7;
  });
  (b.addons || []).forEach(a => {
    doc.setTextColor(...mid);
    doc.text('+ ' + a.nome + '  (adicional)', colL, y);
    doc.text(formatBRL(a.preco), W-18, y, {align:'right'});
    y += 7;
  });

  y += 4;
  doc.setFillColor(...ink); doc.roundedRect(18, y, W-36, 18, 2, 2, 'F');
  doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(...gold);
  doc.text('TOTAL ESTIMADO', 26, y+11);
  doc.setFont('times','bold'); doc.setFontSize(20); doc.setTextColor(245,241,231);
  doc.text(formatBRL(b.total), W-26, y+12, {align:'right'});
  y += 26;

  if (b.obs){
    doc.setFont('helvetica','italic'); doc.setFontSize(9); doc.setTextColor(...mid);
    doc.text('Observacao: ' + b.obs, 18, y, {maxWidth:W-36});
  }

  doc.setDrawColor(...gold); doc.setLineWidth(0.3); doc.line(18, 268, W-18, 268);
  doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...mid);
  doc.text('Documento gerado pelo site OldSchool Barbearia. O horario e confirmado', W/2, 276, {align:'center'});
  doc.text('pelo barbeiro via WhatsApp. ' + DADOS.barbearia.endereco, W/2, 281, {align:'center'});
  doc.setTextColor(...gold);
  doc.text('OLDSCHOOL BARBEARIA  -  ' + DADOS.barbearia.cidade, W/2, 288, {align:'center'});

  doc.save('Comprovante-OldSchool-' + b.id + '.pdf');
}
