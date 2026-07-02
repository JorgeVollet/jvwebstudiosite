import type { Metadata } from "next";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import AcessoRestrito from "@/components/AcessoRestrito";
import { ACESSO } from "@/lib/acesso";
import { CheckCircle2, Camera, Images, Send, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compra confirmada — Pacote de Fotos com IA | JV WEB STUDIO",
  description: "Seu pacote de fotos com IA foi confirmado. Veja como enviar suas fotos.",
  robots: { index: false, follow: false },
};

const PASSOS = [
  {
    icon: Camera,
    titulo: "Envie 3 fotos suas",
    desc: "1 foto de corpo inteiro + 2 selfies (boa iluminação, rosto bem visível, sem óculos escuros).",
  },
  {
    icon: Images,
    titulo: "Envie 5 referências",
    desc: "5 imagens do estilo que você quer (pose, cenário, roupa, clima). Pode tirar do Instagram/Pinterest.",
  },
  {
    icon: Send,
    titulo: "Eu gero e te entrego",
    desc: "Crio as 5 fotos profissionais com IA e te devolvo junto com o seu site, em até 48h úteis.",
  },
];

export default function ObrigadoFotosPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (searchParams.k !== ACESSO) return <AcessoRestrito />;
  const wa = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Comprei o Pacote de 5 Fotos com IA! Vou te enviar minhas 3 fotos (1 corpo inteiro + 2 selfies) e as 5 referências.")}`
    : "#";

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-4xl px-6 py-5 md:px-10">
          <Logo href="/obrigado-fotos" />
        </div>
      </header>

      <main className="section-dark relative min-h-screen overflow-hidden bg-dark pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 50% at 50% 0%, rgba(201,162,75,0.16), transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <CheckCircle2 className="mx-auto h-16 w-16 text-gold-100" />
            <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Compra confirmada! Agora é só{" "}
              <span className="text-gold-shine">enviar suas fotos.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-neutral-300">
              Seu <strong className="text-white">Pacote de 5 Fotos Profissionais com IA</strong> está
              garantido. Siga os 3 passos abaixo para eu começar a criar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 text-left sm:grid-cols-3">
            {PASSOS.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 110}>
                <div className="card-dark h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gold-100">
                    Passo {i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="btn-gold inline-flex items-center gap-2 px-9 py-4 text-sm uppercase tracking-widest"
            >
              <MessageCircle className="h-4 w-4" /> Enviar minhas fotos no WhatsApp
            </a>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              É só me mandar as fotos e as referências — eu cuido do resto
            </p>
          </Reveal>

          <Reveal delay={260} className="mt-10">
            <div className="mx-auto max-w-xl rounded-2xl border border-gold-3/30 bg-gold-3/5 p-6">
              <p className="text-sm text-neutral-300">
                <strong className="text-white">Falta só um passo:</strong> preencha o briefing do
                seu site pra eu começar a montar tudo.
              </p>
              <a
                href={`/briefing?k=${ACESSO}`}
                className="btn-outline-gold mt-4 inline-flex items-center gap-2 px-7 py-3 text-sm uppercase tracking-widest"
              >
                Preencher o briefing do meu site <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
