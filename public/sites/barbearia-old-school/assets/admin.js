/* =========================================================
   OLDSCHOOL BARBEARIA — Painel do barbeiro (protótipo)
   ========================================================= */

let sessao = null;          // id do barbeiro logado
let barbeiroLogin = null;   // id selecionado na etapa de PIN
let filtro = 'todos';

const STATUS = {
  pendente:   { rotulo:'Pendente',   cor:'gold',   icone:'lucide:clock' },
  confirmado: { rotulo:'Confirmado', cor:'vgreen', icone:'lucide:check-circle' },
  recusado:   { rotulo:'Recusado',   cor:'vred',   icone:'lucide:x-circle' }
};

/* ---------- Helpers ---------- */
function tempoRelativo(ts){
  const diff = Date.now() - ts;
  const min = Math.floor(diff/60000);
  if (min < 1)  return 'agora mesmo';
  if (min < 60) return 'há ' + min + ' min';
  const h = Math.floor(min/60);
  if (h < 24)   return 'há ' + h + 'h';
  return 'há ' + Math.floor(h/24) + ' dia(s)';
}
function telParaWhats(tel){
  return '55' + tel.replace(/\D/g,'');
}

/* =========================================================
   LOGIN
   ========================================================= */
function renderLogin(){
  document.getElementById('login-lista').innerHTML = DADOS.barbeiros.map(b => `
    <button type="button" data-id="${b.id}"
      class="login-barbeiro w-full flex items-center gap-3 rounded-xl border border-gold/10 bg-ink/40 p-3 hover:border-gold/50 transition-all text-left">
      <span class="w-11 h-11 rounded-full bg-ink3 border border-gold/30 flex items-center justify-center font-display text-lg text-gold">${b.inicial}</span>
      <span>
        <span class="block text-cream font-medium text-sm">${b.nome}</span>
        <span class="block text-[11px] text-neutral-500">${b.especialidade}</span>
      </span>
      <iconify-icon icon="lucide:chevron-right" class="ml-auto text-gold"></iconify-icon>
    </button>`).join('');

  document.querySelectorAll('.login-barbeiro').forEach(btn => {
    btn.addEventListener('click', () => abrirPin(btn.dataset.id));
  });

  document.getElementById('login-dica').innerHTML = DADOS.barbeiros.map(b => `
    <div class="bg-ink/50 rounded py-1.5">
      <div class="text-neutral-400">${b.apelido}</div>
      <div class="text-gold font-display text-base tracking-widest">${b.pin}</div>
    </div>`).join('');
}

function abrirPin(id){
  barbeiroLogin = id;
  const b = getBarbeiro(id);
  document.getElementById('pin-nome').textContent = b.apelido;
  document.getElementById('login-barbeiros').classList.add('hidden');
  document.getElementById('login-pin').classList.remove('hidden');
  document.getElementById('pin-erro').classList.add('hidden');
  const input = document.getElementById('pin-input');
  input.value = ''; input.focus();
}

function validarPin(){
  const b = getBarbeiro(barbeiroLogin);
  const val = document.getElementById('pin-input').value.trim();
  if (val === b.pin){
    sessao = b.id;
    document.getElementById('login').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    abrirDashboard();
  } else {
    document.getElementById('pin-erro').classList.remove('hidden');
    document.getElementById('pin-input').value = '';
  }
}

/* =========================================================
   DASHBOARD
   ========================================================= */
function abrirDashboard(){
  const b = getBarbeiro(sessao);
  document.getElementById('dash-av').textContent = b.inicial;
  document.getElementById('dash-nome').textContent = b.nome + ' ("'+b.apelido+'")';
  renderFiltros();
  renderTudo();
}

function meusAgendamentos(){
  return lerAgendamentos()
    .filter(a => a.barbeiroId === sessao)
    .sort((x,y) => y.criadoEm - x.criadoEm);
}

function renderTudo(){
  renderStats();
  renderLista();
}

function renderStats(){
  const lista = meusAgendamentos();
  const pend  = lista.filter(a => a.status==='pendente').length;
  const conf  = lista.filter(a => a.status==='confirmado');
  const rec   = lista.filter(a => a.status==='recusado').length;
  const fat   = conf.reduce((s,a) => s + a.total, 0);

  const cards = [
    { rotulo:'Pendentes',   valor:pend,         icone:'lucide:clock',        cor:'gold' },
    { rotulo:'Confirmados', valor:conf.length,  icone:'lucide:check-circle', cor:'vgreen' },
    { rotulo:'Recusados',   valor:rec,          icone:'lucide:x-circle',     cor:'vred' },
    { rotulo:'Faturamento confirmado', valor:formatBRL(fat), icone:'lucide:banknote', cor:'gold' }
  ];
  document.getElementById('dash-stats').innerHTML = cards.map(c => `
    <div class="glass rounded-xl p-5">
      <iconify-icon icon="${c.icone}" class="text-${c.cor} text-xl"></iconify-icon>
      <div class="font-display text-3xl text-cream mt-2">${c.valor}</div>
      <div class="text-[11px] uppercase tracking-[.16em] text-neutral-500 mt-0.5">${c.rotulo}</div>
    </div>`).join('');
}

function renderFiltros(){
  const opts = [
    { id:'todos',      rotulo:'Todos' },
    { id:'pendente',   rotulo:'Pendentes' },
    { id:'confirmado', rotulo:'Confirmados' },
    { id:'recusado',   rotulo:'Recusados' }
  ];
  document.getElementById('dash-filtros').innerHTML = opts.map(o => `
    <button type="button" data-filtro="${o.id}"
      class="filtro-btn px-3 py-1.5 rounded-sm border transition-colors ${filtro===o.id?'bg-gold text-ink border-gold font-semibold':'border-gold/15 text-neutral-400 hover:text-cream'}">
      ${o.rotulo}
    </button>`).join('');
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtro = btn.dataset.filtro;
      renderFiltros();
      renderLista();
    });
  });
}

function renderLista(){
  let lista = meusAgendamentos();
  if (filtro !== 'todos') lista = lista.filter(a => a.status === filtro);

  const cont = document.getElementById('dash-lista');
  if (!lista.length){
    cont.innerHTML = `
      <div class="glass rounded-xl p-12 text-center">
        <iconify-icon icon="lucide:calendar-x" class="text-gold/40 text-5xl"></iconify-icon>
        <p class="text-neutral-500 mt-3">Nenhuma solicitação ${filtro!=='todos'?'nesse filtro':'ainda'}.</p>
        <p class="text-xs text-neutral-600 mt-1">Os agendamentos feitos no site aparecem aqui automaticamente.</p>
      </div>`;
    return;
  }

  cont.innerHTML = lista.map(a => {
    const st = STATUS[a.status];
    const itens = [...a.servicos, ...a.addons.map(x=>({...x,addon:true}))];
    return `
    <div class="glass rounded-xl overflow-hidden reveal">
      <div class="flex items-center justify-between px-5 py-3 border-b border-gold/10 bg-ink/40">
        <span class="flex items-center gap-2 text-${st.cor} text-sm font-medium">
          <iconify-icon icon="${st.icone}"></iconify-icon> ${st.rotulo}
        </span>
        <span class="text-[11px] text-neutral-600">${a.id} · ${tempoRelativo(a.criadoEm)}</span>
      </div>
      <div class="p-5 grid sm:grid-cols-3 gap-5">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-neutral-500">Cliente</div>
          <div class="text-cream font-medium mt-1">${a.cliente}</div>
          <a href="https://wa.me/${telParaWhats(a.telefone)}" target="_blank"
             class="inline-flex items-center gap-1.5 text-sm text-gold hover:text-goldlt mt-1">
            <iconify-icon icon="mdi:whatsapp"></iconify-icon> ${a.telefone}
          </a>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-neutral-500">Data & horário</div>
          <div class="text-cream font-medium mt-1 flex items-center gap-1.5">
            <iconify-icon icon="lucide:calendar" class="text-gold"></iconify-icon> ${a.dataLabel}
          </div>
          <div class="text-cream font-display text-xl mt-0.5">${a.hora}</div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-neutral-500">Serviços</div>
          <ul class="mt-1 space-y-0.5 text-sm">
            ${itens.map(i => `<li class="flex justify-between gap-3">
              <span class="${i.addon?'text-neutral-500':'text-neutral-300'}">${i.addon?'+ ':''}${i.nome}</span>
              <span class="text-cream">${formatBRL(i.preco)}</span></li>`).join('')}
          </ul>
        </div>
      </div>
      ${a.obs ? `<div class="px-5 pb-2 -mt-1"><span class="text-xs text-neutral-500"><iconify-icon icon="lucide:message-square" class="text-gold"></iconify-icon> ${a.obs}</span></div>` : ''}
      <div class="flex items-center justify-between px-5 py-3 border-t border-gold/10 bg-ink/40">
        <span class="text-sm">
          <span class="text-neutral-500">Total · ${formatDur(a.duracao)}</span>
          <span class="font-display text-xl text-gold ml-2">${formatBRL(a.total)}</span>
        </span>
        <div class="flex gap-2 flex-wrap justify-end">
          <button data-pdf="${a.id}" class="border border-gold/25 text-gold text-xs font-semibold px-3 py-2 rounded-sm hover:bg-gold/10 transition-colors flex items-center gap-1">
            <iconify-icon icon="lucide:file-text"></iconify-icon> PDF
          </button>
          ${botoesAcao(a)}
        </div>
      </div>
    </div>`;
  }).join('');

  cont.querySelectorAll('[data-acao]').forEach(btn => {
    btn.addEventListener('click', () => mudarStatus(btn.dataset.id, btn.dataset.acao));
  });
  cont.querySelectorAll('[data-pdf]').forEach(btn => {
    btn.addEventListener('click', () => {
      const b = lerAgendamentos().find(x => x.id === btn.dataset.pdf);
      if (b) gerarPDF(b);
    });
  });
}

function botoesAcao(a){
  const aceitar = `<button data-id="${a.id}" data-acao="confirmado"
      class="bg-vgreen/90 text-cream text-xs font-semibold px-3 py-2 rounded-sm hover:bg-vgreen transition-colors flex items-center gap-1">
      <iconify-icon icon="lucide:check"></iconify-icon> Aceitar</button>`;
  const recusar = `<button data-id="${a.id}" data-acao="recusado"
      class="border border-vred/50 text-vred text-xs font-semibold px-3 py-2 rounded-sm hover:bg-vred/10 transition-colors flex items-center gap-1">
      <iconify-icon icon="lucide:x"></iconify-icon> Recusar</button>`;
  const reabrir = `<button data-id="${a.id}" data-acao="pendente"
      class="border border-gold/30 text-gold text-xs font-semibold px-3 py-2 rounded-sm hover:bg-gold/10 transition-colors flex items-center gap-1">
      <iconify-icon icon="lucide:rotate-ccw"></iconify-icon> Reabrir</button>`;
  if (a.status === 'pendente')   return aceitar + recusar;
  if (a.status === 'confirmado') return recusar;
  return reabrir;
}

function mudarStatus(id, novo){
  const lista = lerAgendamentos();
  const item = lista.find(a => a.id === id);
  if (!item) return;
  item.status = novo;
  salvarAgendamentos(lista);
  renderTudo();
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  semearDemo();
  renderLogin();

  document.getElementById('pin-voltar').addEventListener('click', () => {
    document.getElementById('login-pin').classList.add('hidden');
    document.getElementById('login-barbeiros').classList.remove('hidden');
  });
  document.getElementById('pin-entrar').addEventListener('click', validarPin);
  document.getElementById('pin-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') validarPin();
  });

  document.getElementById('dash-atualizar').addEventListener('click', renderTudo);
  document.getElementById('dash-sair').addEventListener('click', () => {
    sessao = null;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('login-pin').classList.add('hidden');
    document.getElementById('login-barbeiros').classList.remove('hidden');
  });
});
