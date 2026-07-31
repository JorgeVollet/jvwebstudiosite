# public/ads — criativos da campanha Mês do Advogado

**Por que os criativos moram aqui e não numa pasta qualquer:** para eu montar os anúncios pelo
Windsor, a imagem precisa estar num **endereço público na internet**. A API não aceita upload de
arquivo do seu computador — ela pede uma URL. Como o site já está na Vercel, qualquer arquivo
dentro de `public/ads/` vira automaticamente `https://jvwebstudio.agency/ads/<arquivo>`, de graça
e para sempre.

**A regra que não pode falhar:** depois de colocar os arquivos aqui, faça commit e espere o deploy
terminar. Se a URL ainda der 404 quando eu criar o anúncio, a Meta rejeita na hora.

---

## Especificação técnica

| Item | Valor |
|---|---|
| Formato | **JPG** (não PNG — pesa 3x mais sem ganho visível aqui) |
| Feed 4:5 | **1080 × 1350 px** |
| Stories 9:16 | **1080 × 1920 px** |
| Peso por arquivo | até 2 MB — acima disso, comprima |
| Nome do arquivo | **exatamente** como está na tabela, tudo minúsculo, sem espaço e sem acento |

Nome errado não é detalhe: eu monto os anúncios lendo esta lista, e um arquivo com nome diferente
vira anúncio sem imagem.

---

## Onde vai cada peça

### Raiz de `public/ads/` — imagem única

| Arquivo | Peça | Vira a URL |
|---|---|---|
| `c01-google.jpg` | C01 · "O cliente pesquisou seu nome no Google" | `/ads/c01-google.jpg` |
| `c03-oferta.jpg` | C03 · Oferta tudo incluso | `/ads/c03-oferta.jpg` |
| `c04-oab.jpg` | C04 · Autoridade OAB (tipográfico) | `/ads/c04-oab.jpg` |
| `c05-invisibilidade.jpg` | C05 · "Quanto custa o cliente que não te encontrou" | `/ads/c05-invisibilidade.jpg` |
| `c09-ultima-semana.jpg` | C09 · Last call (entra em 25/08) | `/ads/c09-ultima-semana.jpg` |
| `post-11-08.jpg` | Post do Dia do Advogado (orgânico) | `/ads/post-11-08.jpg` |

### `c02-carrossel/` — 8 slides

`01-capa.jpg` · `02-posicionamento.jpg` · `03-situacoes.jpg` · `04-credenciais.jpg` ·
`05-autoridade.jpg` · `06-atendimento.jpg` · `07-whatsapp.jpg` · `08-oferta.jpg`

### `c08-carrossel/` — 6 slides

`01-capa.jpg` · `02-ta-caro.jpg` · `03-nao-tenho-tempo.jpg` · `04-pode-ter-site.jpg` ·
`05-deixar-pra-depois.jpg` · `06-fechamento.jpg`

### `stories/` — 9:16, só depois que soubermos os vencedores

`s01.jpg` · `s02.jpg` — adaptações dos dois anúncios que melhor performarem na primeira semana.

---

## O que eu consigo montar sozinho e o que não

**Sozinho, via Windsor:** campanhas, conjuntos, segmentação, orçamentos, e os **anúncios de
imagem única** (C01, C03, C04, C05, C09) já apontando para o WhatsApp, com o texto primário e o
título de cada um. Tudo criado **pausado**, para você revisar antes de qualquer centavo sair.

**Carrossel (C02 e C08):** a API não monta carrossel de forma confiável. O caminho que funciona é
você publicar o carrossel **organicamente** no Instagram e eu impulsionar o post — o anúncio herda
a arte publicada, sem retrabalho. Como esses dois já são conteúdo bom para o feed, publicar antes
não é desperdício, é ganho.

**Vídeo (C10):** upload de vídeo não existe na API. Esse anúncio você monta no Gerenciador quando
gravar, e eu reviso.

---

## O que preciso de você além dos arquivos

1. Confirmar qual **Página do Facebook** está ligada à conta de anúncios — é ela que aparece como
   remetente do anúncio e é dela que sai a conversa
2. Confirmar que o **WhatsApp 47 99923-4449 está conectado a essa Página** (Configurações da
   Página → WhatsApp). Sem isso o anúncio Click-to-WhatsApp não sobe
3. Fazer o commit e o deploy depois de largar os arquivos aqui

Com isso na mão eu monto tudo pausado e te mando a lista para aprovar peça por peça.
