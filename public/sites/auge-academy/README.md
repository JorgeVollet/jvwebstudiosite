# AUGĒ Academy — Site Institucional

Site institucional da AUGĒ Academy, escola de formação em medicina estética injetável fundada em Balneário Camboriú/SC.

> "O brilho que nasce antes do amanhecer."

## Stack

- HTML5 + CSS3 + JavaScript puro (sem frameworks)
- Fontes: Cormorant Garamond + Sora (Google Fonts)
- Deploy: Vercel (estático)

## Estrutura

```
site/
├── index.html              # Home
├── face-basics.html        # Mentoria Face Basics
├── face-expert.html        # Mentoria Face Expert
├── gluteo-360.html         # Mentoria Glúteo 360°
├── area-aluno.html         # Login (placeholder)
├── sobre.html              # Sobre & Contato
├── briefing/               # Formulários de briefing (em adaptação)
└── assets/
    ├── css/
    ├── js/
    └── img/
```

## Desenvolvimento local

Como é puro HTML, basta abrir o `index.html` no navegador. Para servidor local:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Deploy

Push para a branch principal dispara deploy automático no Vercel.

## Identidade visual

Cores extraídas do Brand Manual oficial:
- Noite Profunda `#050032`
- Aurora Ouro `#EBBE78`
- Violeta Noturno `#5F3CBE`
- Luz de Bronze `#C38C3C`
- Véu `#F5F0DC`
- Pergaminho `#F2F2F2`

---

© 2026 AUGĒ Academy. Todos os direitos reservados.
