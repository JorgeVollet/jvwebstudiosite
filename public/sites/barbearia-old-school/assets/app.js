/* =========================================================
   OLDSCHOOL BARBEARIA — Logica do site (prototipo)
   Build responsivo
   ========================================================= */

/* ---------- Helpers ---------- */
function formatDur(min){
  const h = Math.floor(min/60), m = min%60;
  let s = '';
  if (h) s += h + 'h';
  if (m) s += (h ? ' ' : '') + m + 'min';
  return s || '0min';
}
function hashStr(s){
  let h = 0;
  for (let i=0;i<s.length;i++){ h = (h*31 + s.charCodeAt(i)) | 0; }
  return Math.abs(h);
}
function waLink(texto){
  return 'https://wa.me/' + DADOS.barbearia.whatsapp + '?text=' + encodeURIComponent(texto);
}
function estrelas(n){
  return '★'.repeat(Math.round(n)) + '☆'.repeat(5-Math.round(n));
}

/* ---------- Estado do configurador ---------- */
const estado = {
  barbeiro:null,            // id
  servicos:{},              // { id: true }
  addons:{},                // { id: true }
  data:null, dataLabel:null,// iso, label
  hora:null
};

/* =========================================================
   1. SEÇÕES ESTÁTICAS
   ========================================================= */
function renderSecoes(){

  /* --- Serviços (vitrine) --- */
  document.getElementById('servicos-grid').innerHTML = DADOS.servicos.map(s => {
    const vals = Object.values(s.precos);
    const min = Math.min(...vals), max = Math.max(...vals);
    const faixa = min === max ? formatBRL(min) : formatBRL(min)+'–'+formatBRL(max);
    return `
    <div class="glass rounded-2xl p-6 flex flex-col hover:border-gold/40 transition-colors group">
      ${s.destaque ? '<span class="self-start text-[10px] uppercase tracking-[.2em] bg-gold text-ink font-semibold px-2 py-0.5 rounded-sm mb-3">Mais pedido</span>' : ''}
      <iconify-icon icon="${s.icone}" class="text-gold text-3xl mb-4 group-hover:scale-110 transition-transform"></iconify-icon>
      <h3 class="font-display text-xl text-cream uppercase">${s.nome}</h3>
      <p class="text-sm text-neutral-500 mt-2 flex-1">${s.desc}</p>
      <div class="flex items-center justify-between mt-5 pt-4 border-t border-gold/10">
        <span class="text-[11px] text-neutral-500"><iconify-icon icon="lucide:clock"></iconify-icon> ${formatDur(s.dur)}</span>
        <span class="font-display text-xl text-gold">${faixa}</span>
      </div>
    </div>`;
  }).join('');

  /* --- Galeria --- */
  document.getElementById('galeria-grid').innerHTML = DADOS.galeria.map((url,i) => `
    <div class="img-ph relative aspect-square rounded-xl overflow-hidden border border-gold/10 group ${i%3===0?'md:row-span-2 md:aspect-auto':''}">
      <div class="absolute inset-0 flex items-center justify-center">
        <iconify-icon icon="lucide:scissors" class="text-gold/20 text-4xl"></iconify-icon>
      </div>
      <img src="${url}" onerror="this.style.display='none'" alt="Corte ${i+1}"
           class="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>`).join('');

  /* --- Barbeiros (seção sobre) --- */
  document.getElementById('barbeiros-sobre').innerHTML = DADOS.barbeiros.map(b => `
    <div class="glass rounded-2xl p-7 text-center hover:border-gold/40 transition-colors">
      <div class="w-20 h-20 mx-auto rounded-full bg-ink3 border-2 border-gold/40 flex items-center justify-center mb-4">
        <span class="font-display text-3xl text-gold">${b.inicial}</span>
      </div>
      <h4 class="font-display text-xl text-cream uppercase">${b.nome}</h4>
      <p class="text-xs text-gold tracking-[.2em] uppercase mt-1">"${b.apelido}"</p>
      <p class="text-sm text-neutral-400 mt-3">${b.especialidade}</p>
      <p class="text-sm text-neutral-500 mt-3 leading-relaxed">${b.bio}</p>
      <div class="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gold/10 text-xs text-neutral-500">
        <span class="text-gold">${estrelas(b.nota)} ${b.nota.toFixed(1)}</span>
        <span class="w-px h-3 bg-gold/20"></span>
        <span>${b.exp}</span>
      </div>
    </div>`).join('');

  /* --- Depoimentos --- */
  document.getElementById('depoimentos-grid').innerHTML = DADOS.depoimentos.map(d => `
    <div class="glass rounded-2xl p-7">
      <div class="text-gold text-lg mb-3">${estrelas(d.nota)}</div>
      <p class="text-neutral-300 leading-relaxed">"${d.texto}"</p>
      <div class="flex items-center gap-3 mt-5 pt-4 border-t border-gold/10">
        <span class="w-10 h-10 rounded-full bg-ink3 border border-gold/30 flex items-center justify-center font-display text-gold">${d.nome[0]}</span>
        <div>
          <div class="text-cream text-sm font-medium">${d.nome}</div>
          <div class="text-[11px] text-neutral-500">Avaliação via Google</div>
        </div>
      </div>
    </div>`).join('');

  /* --- Planos --- */
  document.getElementById('planos-grid').innerHTML = DADOS.planos.map(p => `
    <div class="glass rounded-2xl p-7 flex flex-col relative ${p.destaque ? 'border-gold/50 gold-glow' : ''}">
      ${p.destaque ? '<span class="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[.2em] bg-gold text-ink font-semibold px-3 py-1 rounded-sm">Mais vantajoso</span>' : ''}
      <h3 class="font-display text-2xl text-cream uppercase">${p.nome}</h3>
      <div class="mt-3 mb-1">
        <span class="font-display text-4xl text-gold">${formatBRL(p.preco)}</span>
        <span class="text-sm text-neutral-500">/${p.periodo}</span>
      </div>
      <ul class="space-y-2.5 mt-5 mb-7 flex-1">
        ${p.itens.map(i => `<li class="flex items-start gap-2 text-sm text-neutral-300"><iconify-icon icon="lucide:check" class="text-gold mt-0.5"></iconify-icon> ${i}</li>`).join('')}
      </ul>
      <a href="${waLink('Olá! Tenho interesse no plano *'+p.nome+'* ('+formatBRL(p.preco)+'/'+p.periodo+'). Pode me explicar como funciona?')}"
         target="_blank" class="text-center font-semibold py-3 rounded-sm transition-colors ${p.destaque ? 'bg-gold text-ink hover:bg-goldlt' : 'border border-gold/25 text-cream hover:border-gold/60'}">
        Quero esse plano
      </a>
    </div>`).join('');

  /* --- Loja --- */
  document.getElementById('loja-grid').innerHTML = DADOS.loja.map(p => `
    <div class="glass rounded-2xl p-6 text-center hover:border-gold/40 transition-colors">
      <div class="img-ph rounded-xl aspect-square flex items-center justify-center mb-4">
        <iconify-icon icon="${p.icone}" class="text-gold text-5xl"></iconify-icon>
      </div>
      <h4 class="font-display text-lg text-cream uppercase">${p.nome}</h4>
      <div class="font-display text-2xl text-gold mt-1">${formatBRL(p.preco)}</div>
      <a href="${waLink('Olá! Quero comprar: *'+p.nome+'* ('+formatBRL(p.preco)+'). Tem em estoque?')}"
         target="_blank" class="block mt-4 text-xs uppercase tracking-wider border border-gold/20 text-neutral-300 py-2.5 rounded-sm hover:border-gold/60 hover:text-cream transition-colors">
        Reservar
      </a>
    </div>`).join('');
}

/* =========================================================
   2. CONFIGURADOR
   ========================================================= */

/* --- Passo 1: barbeiros --- */
function renderConfigBarbeiros(){
  document.getElementById('barbeiros-grid').innerHTML = DADOS.barbeiros.map(b => `
    <button type="button" data-barbeiro="${b.id}"
      class="config-barbeiro text-left rounded-xl border border-gold/10 bg-ink/40 p-4 hover:border-gold/50 transition-all">
      <div class="flex items-center gap-3">
        <span class="w-12 h-12 rounded-full bg-ink3 border-2 border-gold/30 flex items-center justify-center font-display text-xl text-gold">${b.inicial}</span>
        <div>
          <div class="text-cream font-medium text-sm">${b.apelido}</div>
          <div class="text-[11px] text-gold">${estrelas(b.nota)} ${b.nota.toFixed(1)}</div>
        </div>
      </div>
      <p class="text-[11px] text-neutral-500 mt-3 leading-snug">${b.especialidade}</p>
    </button>`).join('');

  document.querySelectorAll('.config-barbeiro').forEach(btn => {
    btn.addEventListener('click', () => {
      estado.barbeiro = btn.dataset.barbeiro;
      document.querySelectorAll('.config-barbeiro').forEach(b => {
        const on = b.dataset.barbeiro === estado.barbeiro;
        b.classList.toggle('border-gold', on);
        b.classList.toggle('bg-gold/10', on);
        b.classList.toggle('border-gold/10', !on);
      });
      renderConfigServicos();
      atualizar();
    });
  });
}

/* --- Passo 2: serviços (preço pelo barbeiro) --- */
function renderConfigServicos(){
  const cont = document.getElementById('servicos-lista');
  if (!estado.barbeiro){ cont.innerHTML = ''; return; }
  cont.innerHTML = DADOS.servicos.map(s => {
    const preco = s.precos[estado.barbeiro];
    const sel = !!estado.servicos[s.id];
    return `
    <button type="button" data-servico="${s.id}"
      class="config-servico w-full text-left rounded-xl border ${sel?'border-gold bg-gold/10':'border-gold/10 bg-ink/40'} p-4 flex items-center gap-4 hover:border-gold/50 transition-all">
      <span class="w-10 h-10 shrink-0 rounded-lg border ${sel?'border-gold/50':'border-gold/15'} flex items-center justify-center">
        <iconify-icon icon="${sel?'lucide:check':s.icone}" class="text-gold text-xl"></iconify-icon>
      </span>
      <span class="flex-1 min-w-0">
        <span class="block text-cream font-medium text-sm">${s.nome}${s.destaque?' <span class="text-[10px] text-gold">• popular</span>':''}</span>
        <span class="block text-[11px] text-neutral-500 truncate">${s.desc} · ${formatDur(s.dur)}</span>
      </span>
      <span class="font-display text-lg text-gold whitespace-nowrap">${formatBRL(preco)}</span>
    </button>`;
  }).join('');

  cont.querySelectorAll('.config-servico').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.servico;
      if (estado.servicos[id]) delete estado.servicos[id];
      else estado.servicos[id] = true;
      renderConfigServicos();
      atualizar();
    });
  });
}

/* --- Passo 3: adicionais --- */
function renderAddons(){
  const cont = document.getElementById('addons-grid');
  cont.innerHTML = DADOS.addons.map(a => {
    const sel = !!estado.addons[a.id];
    return `
    <button type="button" data-addon="${a.id}"
      class="config-addon rounded-xl border ${sel?'border-gold bg-gold/10':'border-gold/10 bg-ink/40'} p-4 text-center hover:border-gold/50 transition-all">
      <iconify-icon icon="${a.icone}" class="text-gold text-2xl"></iconify-icon>
      <div class="text-cream text-xs font-medium mt-2">${a.nome}</div>
      <div class="text-gold text-sm font-display mt-0.5">+${formatBRL(a.preco)}</div>
    </button>`;
  }).join('');

  cont.querySelectorAll('.config-addon').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.addon;
      if (estado.addons[id]) delete estado.addons[id];
      else estado.addons[id] = true;
      renderAddons();
      atualizar();
    });
  });
}

/* --- Passo 4: datas --- */
function gerarDatas(){
  const lista = [];
  const hoje = new Date();
  for (let off=0; off<14 && lista.length<6; off++){
    const dt = new Date(hoje); dt.setDate(dt.getDate()+off);
    const wd = dt.getDay();              // 0 dom .. 6 sáb
    if (wd === 0 || wd === 1) continue;  // fechado dom e seg
    lista.push({
      iso: dt.toISOString().slice(0,10),
      dia: dt.getDate(),
      mes: dt.toLocaleDateString('pt-BR',{month:'short'}).replace('.',''),
      semana: off===0 ? 'Hoje' : dt.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.','')
    });
  }
  return lista;
}
function renderDatas(){
  const datas = gerarDatas();
  document.getElementById('datas-lista').innerHTML = datas.map(d => {
    const sel = estado.data === d.iso;
    return `
    <button type="button" data-data="${d.iso}" data-label="${d.semana}, ${d.dia} ${d.mes}"
      class="config-data shrink-0 w-[78px] rounded-xl border ${sel?'border-gold bg-gold/10':'border-gold/10 bg-ink/40'} py-3 text-center hover:border-gold/50 transition-all">
      <div class="text-[10px] uppercase tracking-wider text-neutral-500">${d.semana}</div>
      <div class="font-display text-2xl text-cream leading-tight">${d.dia}</div>
      <div class="text-[10px] uppercase text-gold">${d.mes}</div>
    </button>`;
  }).join('');

  document.querySelectorAll('.config-data').forEach(btn => {
    btn.addEventListener('click', () => {
      estado.data = btn.dataset.data;
      estado.dataLabel = btn.dataset.label;
      estado.hora = null;
      renderDatas();
      renderHorarios();
      atualizar();
    });
  });
}

/* --- Passo 4: horários --- */
function slotOcupado(bId, iso, hora){
  const real = lerAgendamentos().some(a =>
    a.barbeiroId===bId && a.data===iso && a.hora===hora && a.status!=='recusado');
  if (real) return true;
  return hashStr(bId+iso+hora) % 6 === 0;   // ocupação simulada
}
function renderHorarios(){
  const grid = document.getElementById('horarios-grid');
  if (!estado.data){
    grid.innerHTML = '<p class="col-span-full text-sm text-neutral-600 italic">Selecione um dia para ver os horários.</p>';
    return;
  }
  grid.innerHTML = DADOS.horarios.map(h => {
    const ocup = slotOcupado(estado.barbeiro, estado.data, h);
    const sel = estado.hora === h;
    if (ocup) return `
      <span class="rounded-lg border border-white/5 bg-ink/30 py-2.5 text-center text-sm text-neutral-700 line-through cursor-not-allowed">${h}</span>`;
    return `
      <button type="button" data-hora="${h}"
        class="config-hora rounded-lg border ${sel?'border-gold bg-gold/10 text-cream':'border-gold/10 bg-ink/40 text-neutral-300'} py-2.5 text-center text-sm hover:border-gold/50 transition-all">${h}</button>`;
  }).join('');

  grid.querySelectorAll('.config-hora').forEach(btn => {
    btn.addEventListener('click', () => {
      estado.hora = btn.dataset.hora;
      renderHorarios();
      atualizar();
    });
  });
}

/* --- Cálculos --- */
function servicosSelecionados(){
  return DADOS.servicos
    .filter(s => estado.servicos[s.id])
    .map(s => ({ nome:s.nome, preco:s.precos[estado.barbeiro], dur:s.dur }));
}
function addonsSelecionados(){
  return DADOS.addons.filter(a => estado.addons[a.id]).map(a => ({ nome:a.nome, preco:a.preco }));
}
function calcular(){
  const servs = servicosSelecionados();
  const adds  = addonsSelecionados();
  const total = servs.reduce((s,x)=>s+x.preco,0) + adds.reduce((s,x)=>s+x.preco,0);
  const dur   = servs.reduce((s,x)=>s+x.dur,0) + adds.length*15;
  return { servs, adds, total, dur };
}

/* --- Atualiza resumo + travas dos passos --- */
function atualizar(){
  const { servs, adds, total, dur } = calcular();

  /* --- travas --- */
  const temBarbeiro = !!estado.barbeiro;
  const temServico  = servs.length > 0;
  const temDataHora = !!estado.data && !!estado.hora;
  trava('passo-2', !temBarbeiro);
  trava('passo-3', !temBarbeiro);
  trava('passo-4', !temServico);
  trava('passo-5', !temDataHora);
  if (!temServico){ estado.data=null; estado.hora=null; }

  /* --- resumo: barbeiro --- */
  const rb = document.getElementById('resumo-barbeiro');
  if (temBarbeiro){
    const b = getBarbeiro(estado.barbeiro);
    rb.classList.remove('hidden'); rb.classList.add('flex');
    document.getElementById('resumo-barbeiro-av').textContent = b.inicial;
    document.getElementById('resumo-barbeiro-nome').textContent = b.nome + ' ("'+b.apelido+'")';
    document.getElementById('resumo-barbeiro-esp').textContent = b.especialidade;
  } else {
    rb.classList.add('hidden'); rb.classList.remove('flex');
  }

  /* --- resumo: itens --- */
  const itens = document.getElementById('resumo-itens');
  if (!servs.length && !adds.length){
    itens.innerHTML = temBarbeiro
      ? '<p class="text-neutral-600 italic">Selecione os serviços…</p>'
      : '<p class="text-neutral-600 italic">Comece escolhendo um barbeiro…</p>';
  } else {
    itens.innerHTML =
      servs.map(x=>linhaResumo(x.nome,x.preco)).join('') +
      adds.map(x=>linhaResumo(x.nome,x.preco,true)).join('');
  }

  /* --- resumo: data/hora --- */
  const dh = document.getElementById('resumo-datahora');
  if (temDataHora){
    dh.classList.remove('hidden');
    dh.innerHTML = `
      <div class="flex justify-between text-neutral-300">
        <span class="flex items-center gap-1.5"><iconify-icon icon="lucide:calendar" class="text-gold"></iconify-icon> ${estado.dataLabel}</span>
        <span class="flex items-center gap-1.5"><iconify-icon icon="lucide:clock" class="text-gold"></iconify-icon> ${estado.hora}</span>
      </div>`;
  } else {
    dh.classList.add('hidden');
  }

  /* --- total e duração --- */
  document.getElementById('resumo-total').textContent = formatBRL(total);
  const rd = document.getElementById('resumo-duracao');
  if (dur>0){ rd.classList.remove('hidden'); rd.querySelector('span').textContent = formatDur(dur); }
  else rd.classList.add('hidden');

  /* --- botão confirmar --- */
  document.getElementById('btn-confirmar').disabled = !(temBarbeiro && temServico && temDataHora);
}
function linhaResumo(nome, preco, addon){
  return `<div class="flex justify-between gap-2">
    <span class="${addon?'text-neutral-500':'text-neutral-300'}">${addon?'+ ':''}${nome}</span>
    <span class="text-cream whitespace-nowrap">${formatBRL(preco)}</span>
  </div>`;
}
function trava(id, travado){
  const el = document.getElementById(id);
  el.classList.toggle('step-locked', travado);
  el.querySelector('.lock-msg').classList.toggle('hidden', !travado);
}

/* =========================================================
   3. CONFIRMAÇÃO — booking + PDF + WhatsApp
   ========================================================= */
function confirmar(){
  const erro = document.getElementById('confirmar-erro');
  const nome = document.getElementById('in-nome').value.trim();
  const tel  = document.getElementById('in-tel').value.trim();
  const obs  = document.getElementById('in-obs').value.trim();

  if (nome.length < 3){ return mostrarErro('Informe seu nome completo.'); }
  if (tel.replace(/\D/g,'').length < 10){ return mostrarErro('Informe um WhatsApp válido com DDD.'); }
  erro.classList.add('hidden');

  const { servs, adds, total, dur } = calcular();
  const b = getBarbeiro(estado.barbeiro);

  const booking = {
    id: 'OS' + Date.now(),
    criadoEm: Date.now(),
    barbeiroId: b.id,
    barbeiroNome: b.nome + ' ('+b.apelido+')',
    cliente: nome,
    telefone: tel,
    data: estado.data,
    dataLabel: estado.dataLabel,
    hora: estado.hora,
    servicos: servs.map(x=>({nome:x.nome,preco:x.preco})),
    addons: adds,
    total, duracao: dur,
    obs,
    status: 'pendente'
  };

  /* salva no localStorage (vai para o painel admin) */
  const lista = lerAgendamentos();
  lista.push(booking);
  salvarAgendamentos(lista);

  /* gera PDF e WhatsApp */
  gerarPDF(booking);
  abrirModal(booking);
}
function mostrarErro(msg){
  const erro = document.getElementById('confirmar-erro');
  erro.textContent = msg;
  erro.classList.remove('hidden');
}

/* --- Texto formatado para o WhatsApp --- */
function textoWhats(b){
  let t = '*OLDSCHOOL BARBEARIA* — Novo agendamento\n';
  t += '──────────────────\n';
  t += '*Protocolo:* ' + b.id + '\n';
  t += '*Cliente:* ' + b.cliente + '\n';
  t += '*WhatsApp:* ' + b.telefone + '\n';
  t += '*Barbeiro:* ' + b.barbeiroNome + '\n';
  t += '*Data:* ' + b.dataLabel + '  ·  *Horário:* ' + b.hora + '\n';
  t += '──────────────────\n';
  t += '*Serviços:*\n';
  b.servicos.forEach(s => { t += '• ' + s.nome + ' — ' + formatBRL(s.preco) + '\n'; });
  if (b.addons.length){
    t += '*Adicionais:*\n';
    b.addons.forEach(a => { t += '• ' + a.nome + ' — ' + formatBRL(a.preco) + '\n'; });
  }
  if (b.obs) t += '*Obs.:* ' + b.obs + '\n';
  t += '──────────────────\n';
  t += '*Total estimado: ' + formatBRL(b.total) + '*\n';
  t += 'Duração aprox.: ' + formatDur(b.duracao) + '\n';
  t += '──────────────────\n';
  t += 'Solicitação enviada pelo site ✂️ Aguardando confirmação do barbeiro.';
  return t;
}

/* --- PDF estilizado (jsPDF) --- */
function gerarPDF(b){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  const W = 210;
  const ink   = [22,20,15];
  const gold  = [168,132,64];
  const dark  = [40,36,28];
  const mid   = [120,110,92];

  /* fundo creme */
  doc.setFillColor(245,241,231); doc.rect(0,0,W,297,'F');

  /* faixa superior */
  doc.setFillColor(...ink); doc.rect(0,0,W,46,'F');
  doc.setFillColor(...gold); doc.rect(0,46,W,1.8,'F');

  doc.setFont('times','bold'); doc.setFontSize(25); doc.setTextColor(245,241,231);
  doc.text('OLDSCHOOL BARBEARIA', W/2, 22, {align:'center'});
  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(...gold);
  doc.text('COMPROVANTE DE AGENDAMENTO', W/2, 31, {align:'center'});
  doc.setFontSize(8); doc.setTextColor(190,182,162);
  doc.text('Horizontina · RS   |   Feito à moda antiga desde 2014', W/2, 38, {align:'center'});

  let y = 62;
  const emitido = new Date(b.criadoEm).toLocaleString('pt-BR');
  doc.setFontSize(8); doc.setTextColor(...mid);
  doc.text('Protocolo: ' + b.id, 18, y);
  doc.text('Emitido em: ' + emitido, W-18, y, {align:'right'});

  /* status */
  y += 8;
  doc.setFillColor(...gold); doc.roundedRect(18, y-5, 52, 8, 1, 1, 'F');
  doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...ink);
  doc.text('SOLICITACAO PENDENTE', 44, y, {align:'center'});

  /* bloco: cliente + atendimento */
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
  doc.text('Horario:  ' + b.hora, colR, y);
  doc.text('Duracao aprox.:  ' + formatDur(b.duracao), colL, y);

  /* serviços */
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
  b.addons.forEach(a => {
    doc.setTextColor(...mid);
    doc.text('+ ' + a.nome + '  (adicional)', colL, y);
    doc.text(formatBRL(a.preco), W-18, y, {align:'right'});
    y += 7;
  });

  /* total */
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
    y += 10;
  }

  /* rodapé */
  doc.setDrawColor(...gold); doc.setLineWidth(0.3); doc.line(18, 268, W-18, 268);
  doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...mid);
  doc.text('Este comprovante confirma a SOLICITACAO de agendamento. O horario sera validado', W/2, 276, {align:'center'});
  doc.text('pelo barbeiro via WhatsApp. ' + DADOS.barbearia.endereco, W/2, 281, {align:'center'});
  doc.setTextColor(...gold);
  doc.text('OLDSCHOOL BARBEARIA  ·  ' + DADOS.barbearia.cidade, W/2, 288, {align:'center'});

  doc.save('Agendamento-OldSchool-' + b.id + '.pdf');
}

/* =========================================================
   4. MODAL
   ========================================================= */
function abrirModal(b){
  const modal = document.getElementById('modal');
  document.getElementById('modal-resumo').innerHTML = `
    <div class="flex justify-between"><span class="text-neutral-500">Barbeiro</span><span class="text-cream">${b.barbeiroNome}</span></div>
    <div class="flex justify-between"><span class="text-neutral-500">Data / hora</span><span class="text-cream">${b.dataLabel} · ${b.hora}</span></div>
    <div class="flex justify-between"><span class="text-neutral-500">Serviços</span><span class="text-cream">${b.servicos.length + b.addons.length} item(ns)</span></div>
    <div class="flex justify-between border-t border-gold/10 pt-1 mt-1"><span class="text-neutral-500">Total</span><span class="text-gold font-display text-lg">${formatBRL(b.total)}</span></div>`;
  document.getElementById('modal-zap').href = waLink(textoWhats(b));
  document.getElementById('modal-pdf').onclick = () => gerarPDF(b);
  modal.classList.remove('hidden'); modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function fecharModal(){
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('modal').classList.remove('flex');
  document.body.style.overflow = '';
  /* reseta o configurador para um novo agendamento */
  estado.barbeiro=null; estado.servicos={}; estado.addons={};
  estado.data=null; estado.dataLabel=null; estado.hora=null;
  ['in-nome','in-tel','in-obs'].forEach(id=>document.getElementById(id).value='');
  renderConfigBarbeiros(); renderConfigServicos(); renderAddons();
  renderDatas(); renderHorarios(); atualizar();
  document.getElementById('agendar').scrollIntoView({behavior:'smooth'});
}

/* =========================================================
   5. INICIALIZAÇÃO
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  semearDemo();
  renderSecoes();
  renderConfigBarbeiros();
  renderConfigServicos();
  renderAddons();
  renderDatas();
  renderHorarios();
  atualizar();

  document.getElementById('btn-confirmar').addEventListener('click', confirmar);
  document.getElementById('modal-fechar').addEventListener('click', fecharModal);

  /* contato → WhatsApp */
  document.getElementById('contato-zap').href =
    waLink('Olá, OldSchool Barbearia! Gostaria de tirar uma dúvida.');
  document.getElementById('ct-enviar').addEventListener('click', () => {
    const n = document.getElementById('ct-nome').value.trim();
    const t = document.getElementById('ct-tel').value.trim();
    const m = document.getElementById('ct-msg').value.trim();
    if (!n || !m){ alert('Preencha ao menos seu nome e a mensagem.'); return; }
    const texto = 'Olá! Meu nome é ' + n + (t?' ('+t+')':'') + '.\n' + m;
    window.open(waLink(texto), '_blank');
  });

  /* menu mobile (hambúrguer) */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navIcon   = document.getElementById('nav-toggle-icon');
  navToggle.addEventListener('click', () => {
    const aberto = navMenu.classList.toggle('hidden') === false;
    navIcon.setAttribute('icon', aberto ? 'lucide:x' : 'lucide:menu');
  });
  navMenu.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.add('hidden');
      navIcon.setAttribute('icon', 'lucide:menu');
    });
  });

  /* sombra na nav ao rolar */
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('shadow-lg', window.scrollY > 20);
  });
});
