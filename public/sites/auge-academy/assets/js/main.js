/* ============================================================
   AUGĒ ACADEMY — JS GLOBAL
   ============================================================ */

// Constantes globais
const WHATSAPP_GUSTAVO = '5547999999999';   // PENDENTE confirmar com cliente
const WHATSAPP_MARINA  = '5547888888888';   // PENDENTE confirmar com cliente
const WHATSAPP_PRINCIPAL = WHATSAPP_GUSTAVO; // canal principal de vendas

// Mensagens prontas
const WA_MSGS = {
  home: 'Olá! Acessei o site da AUGĒ Academy e gostaria de mais informações sobre as mentorias.',
  faceBasics: 'Olá! Quero saber mais sobre a mentoria FACE BASICS da AUGĒ Academy.',
  faceExpert: 'Olá! Quero saber mais sobre a mentoria FACE EXPERT da AUGĒ Academy.',
  gluteo: 'Olá! Quero saber mais sobre a mentoria GLÚTEO 360° da AUGĒ Academy.',
  duvida: 'Olá! Tenho uma dúvida sobre as mentorias da AUGĒ Academy.'
};

function abrirWhatsApp(tipo = 'home', phone = WHATSAPP_PRINCIPAL) {
  const msg = encodeURIComponent(WA_MSGS[tipo] || WA_MSGS.home);
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

/* ============================================================
   NAVBAR DINÂMICA
   ============================================================ */
const nav = document.querySelector('.nav');
if (nav) {
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    lastY = y;
  });

  const burger = nav.querySelector('.nav__burger');
  const menu = nav.querySelector('.nav__menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));
} else {
  reveals.forEach(r => r.classList.add('is-visible'));
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
document.querySelectorAll('.faq__item').forEach(item => {
  const q = item.querySelector('.faq__q');
  if (q) {
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  }
});

/* ============================================================
   COUNTERS (números animados)
   ============================================================ */
const counters = document.querySelectorAll('[data-counter]');
if (counters.length && 'IntersectionObserver' in window) {
  const cobs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.counter, 10);
        const dur = 1600;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const v = Math.floor(target * (0.5 - Math.cos(Math.PI * p) / 2));
          el.textContent = v + (el.dataset.suffix || '');
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cobs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => cobs.observe(c));
}
