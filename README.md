# JV WEB STUDIO — Site (Next.js + Supabase + Vercel)

Site institucional premium, tema **preto + dourado metálico**, com scrollytelling horizontal,
pop-up de captação de leads (20% OFF), seção Instagram, painel administrativo e gestão de SEO.

## Stack
- **Next.js 14** (App Router, Server Components, rotas de API)
- **Tailwind CSS** (tokens dourados em `tailwind.config.ts` + `app/globals.css`)
- **Supabase** (Postgres + Auth para o admin + RLS)
- **Vercel** (deploy)

---

## 1. Rodar localmente

```bash
cd site-next
npm install
cp .env.example .env.local   # preencha as variáveis (veja abaixo)
npm run dev                  # http://localhost:3000
```

> O site **funciona sem Supabase** para visualização: o pop-up e os formulários
> aceitam envio (sem gravar) e o `/admin` mostra instruções. Para o backend real,
> configure o Supabase abaixo.

---

## 2. Configurar o Supabase

1. Crie um projeto em https://app.supabase.com
2. **SQL Editor → New query** → cole todo o conteúdo de `supabase/schema.sql` → **Run**.
   (Cria tabelas `leads`, `seo_settings`, `projects` + RLS.)
3. **Project Settings → API** → copie:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ secreta — só no servidor)
4. **Authentication → Users → Add user** → crie seu login admin (email + senha).
   É com ele que você entra em `/admin`.

`.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_SITE_URL=https://jvwebstudio.com.br
NEXT_PUBLIC_WHATSAPP=5547999999999     # DDI+DDD+numero
INSTAGRAM_ACCESS_TOKEN=                # opcional (feed real)
INSTAGRAM_USER_ID=                     # opcional
```

---

## 3. Painel Admin (`/admin`)

- **Login:** `/admin/login` (usuário criado no Supabase Auth).
- **Dashboard:** total de leads, novos, fechados, hoje. Tabela com filtro, busca,
  mudança de status (novo → contatado → proposta → fechado/perdido) e **exportar CSV**.
- **Gestão SEO:** `/admin/seo` — title, description, keywords, OG image, canonical,
  robots, Google Analytics e Search Console (salvos na tabela `seo_settings`).
- O `/admin` é protegido pelo `middleware.ts` (redireciona para login sem sessão).

### Tornar o SEO do admin "ao vivo" (opcional)
Para as meta tags refletirem o que você salva no painel, troque o `metadata` estático
em `app/layout.tsx` por um `generateMetadata()` que lê de `seo_settings`:

```ts
export async function generateMetadata(): Promise<Metadata> {
  const supabase = createClient(); // lib/supabase/server
  const { data } = await supabase.from("seo_settings").select("*").eq("id",1).single();
  return { title: data?.site_title, description: data?.description, /* ... */ };
}
```

---

## 4. Instagram (feed real — opcional)
A seção já funciona com placeholders no design + botão **Seguir** para `@jvwebstudio`.
Para puxar suas fotos reais:
1. https://developers.facebook.com → Create App → tipo "Consumer".
2. Adicione **Instagram Basic Display**, gere um **token de longa duração**.
3. Coloque em `INSTAGRAM_ACCESS_TOKEN`. A rota `/api/instagram` passa a retornar as fotos
   e o grid se preenche automaticamente.

---

## 5. Deploy na Vercel
1. Suba a pasta `site-next` para um repositório Git.
2. https://vercel.com → New Project → importe o repo (**Root Directory = `site-next`**).
3. Em **Settings → Environment Variables**, adicione as mesmas variáveis do `.env.local`.
4. Deploy. (Build padrão `next build` — sem configuração extra.)
5. No Supabase → **Authentication → URL Configuration**, adicione a URL da Vercel
   em *Site URL* e *Redirect URLs*.

---

## Estrutura
```
site-next/
├─ app/
│  ├─ layout.tsx          # SEO global, fontes, JSON-LD
│  ├─ page.tsx            # monta todas as seções
│  ├─ globals.css         # tokens dourados, botões, scrollytelling
│  ├─ sitemap.ts / robots.ts
│  ├─ api/leads/route.ts        # grava leads
│  ├─ api/instagram/route.ts    # feed IG (Basic Display API)
│  └─ admin/             # login, dashboard de leads, gestão SEO
├─ components/
│  ├─ backgrounds/       # UnicornStudio, Spline orb, Waves canvas (todos pretos)
│  ├─ sections/          # Hero, About, Services, Differentials,
│  │                     # HorizontalProcess (scrollytelling), PortfolioGallery,
│  │                     # Marquee, Coverage, Testimonials, Instagram, Contact
│  ├─ Header / Footer / Reveal / LeadForm / WelcomePopup
├─ lib/
│  ├─ site.ts            # toda a copy do site (do PDF)
│  └─ supabase/          # clients browser/server/admin
├─ supabase/schema.sql   # rode no Supabase
├─ public/               # logo-jv-gold.svg, jv-mark.svg
└─ ...
```

## Onde editar
- **Textos:** `lib/site.ts` (serviços, diferenciais, processo, portfólio, depoimentos, contato).
- **Cores:** `tailwind.config.ts` (paleta `gold`) e `app/globals.css` (efeitos).
- **WhatsApp/Instagram/URL:** `.env.local`.
- **Backgrounds:** IDs do UnicornStudio/Spline em `components/sections/Hero.tsx` e `About.tsx`.
```
