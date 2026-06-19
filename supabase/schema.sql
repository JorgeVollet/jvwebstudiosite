-- ============================================================
--  JV WEB STUDIO — Schema Supabase
--  Cole isto em: Supabase -> SQL Editor -> New query -> Run
-- ============================================================

-- 1) Extensões
create extension if not exists "pgcrypto";

-- ============================================================
-- 2) LEADS (captação do pop-up 20% OFF e formulário de contato)
-- ============================================================
create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  nome         text not null,
  telefone     text not null,
  email        text not null,
  empresa      text,            -- empresa / nicho
  busca        text,            -- o que busca
  instagram    text,
  origem       text default 'popup',   -- 'popup' | 'contato'
  cupom        text,            -- ex: BEMVINDO20
  status       text default 'novo',    -- novo | contatado | proposta | fechado | perdido
  notas        text,
  ip           text,
  user_agent   text
);

create index if not exists leads_created_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- ============================================================
-- 3) SEO_SETTINGS (gestão de SEO pelo painel admin)
-- ============================================================
create table if not exists public.seo_settings (
  id            int primary key default 1,
  site_title    text default 'JV WEB STUDIO — Sites, Sistemas Web e Automações N8N',
  description   text default 'Estúdio digital de alta performance. Sites profissionais, sistemas web sob medida e automações N8N.',
  keywords      text default 'criação de sites, sistemas web, automação N8N, landing page, e-commerce',
  og_image      text default '/og.png',
  canonical     text default 'https://jvwebstudio.com.br',
  robots        text default 'index, follow',
  ga_id         text,                 -- Google Analytics
  gsc_token     text,                 -- Search Console verification
  updated_at    timestamptz default now(),
  single_row    boolean default true,
  constraint single_row_unique unique (single_row)
);
insert into public.seo_settings (id) values (1) on conflict do nothing;

-- ============================================================
-- 4) PROJECTS (portfólio editável pelo admin) — opcional
-- ============================================================
create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz default now(),
  titulo      text not null,
  tag         text,
  descricao   text,
  imagem_url  text,
  link        text,
  destaque    boolean default false,
  ordem       int default 0
);

-- ============================================================
-- 5) ROW LEVEL SECURITY
-- ============================================================
alter table public.leads enable row level security;
alter table public.seo_settings enable row level security;
alter table public.projects enable row level security;

-- Qualquer visitante pode INSERIR um lead (envio de formulário)...
drop policy if exists "leads_insert_public" on public.leads;
create policy "leads_insert_public" on public.leads
  for insert to anon, authenticated with check (true);

-- ...mas só usuários autenticados (admin) podem LER/EDITAR leads.
drop policy if exists "leads_admin_select" on public.leads;
create policy "leads_admin_select" on public.leads
  for select to authenticated using (true);
drop policy if exists "leads_admin_update" on public.leads;
create policy "leads_admin_update" on public.leads
  for update to authenticated using (true);
drop policy if exists "leads_admin_delete" on public.leads;
create policy "leads_admin_delete" on public.leads
  for delete to authenticated using (true);

-- SEO: leitura pública (o site lê), escrita só admin
drop policy if exists "seo_select_public" on public.seo_settings;
create policy "seo_select_public" on public.seo_settings
  for select to anon, authenticated using (true);
drop policy if exists "seo_admin_update" on public.seo_settings;
create policy "seo_admin_update" on public.seo_settings
  for update to authenticated using (true);

-- Projects: leitura pública, escrita só admin
drop policy if exists "projects_select_public" on public.projects;
create policy "projects_select_public" on public.projects
  for select to anon, authenticated using (true);
drop policy if exists "projects_admin_all" on public.projects;
create policy "projects_admin_all" on public.projects
  for all to authenticated using (true) with check (true);

-- ============================================================
-- 6) ADMIN
-- Crie seu usuário admin em: Authentication -> Users -> Add user
-- (email + senha). Esse login dará acesso ao /admin.
-- ============================================================
