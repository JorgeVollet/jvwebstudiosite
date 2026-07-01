import type { Metadata } from "next";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { Camera, Check, Sparkles, ArrowRight } from "lucide-react";
import PersistPlano from "@/components/PersistPlano";

export const metadata: Metadata = {
  title: "Pacote de Fotos Profissionais com IA — JV WEB STUDIO",
  description:
    "5 fotos profissionais suas geradas com IA, prontas para o seu site. Oferta especial de R$47.",
  robots: { index: false, follow: false },
};

// Cole aqui o LINK DE CHECKOUT do produto "Fotos com IA" da Kiwify quando criar:
const CHECKOUT_UPSELL: string = "https://pay.kiwify.com.br/tpjdBT5"; // ex: https://pay.kiwify.com.br/xxxxx

const INCLUI = [
  "5 fotos profissionais suas, geradas com IA",
  "Retrato / headshot em acabamento premium",
  "Prontas para o site e redes sociais",
  "Entrega junto com o seu site (até 48h)",
];

export default function UpsellFotosPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const plano = typeof searchParams.plano === "string" ? searchParams.plano : "";
  const briefingHref = plano ? `/briefing?plano=${encodeURIComponent(plano)}` : "/briefing";
  const wa = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Quero adicionar o pacote de 5 Fotos Profissionais com IA (R$47).")}`
    : "#";
  const cta = CHECKOUT_UPSELL && CHECKOUT_UPSELL.trim() ? CHECKOUT_UPSELL : wa;

  return (
    <>
      <PersistPlano plano={plano} />
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-4xl px-6 py-5 md:px-10">
          <Logo href="/upsell-fotos" />
        </div>
      </header>

      <main className="section-dark relative min-h-screen overflow-hidden bg-dark pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 55% at 50% 0%, rgba(201,162,75,0.16), transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/50 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-100 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" /> Oferta única — só agora
            </span>
            <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Antes de ir… deixe seu site com{" "}
              <span className="text-gold-shine">cara de marca de verdade.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-neutral-300">
              Adicione <strong className="text-white">5 fotos profissionais suas, geradas com IA</strong>,
              no acabamento premium — prontas para o seu novo site. Só nesta página, por um valor especial.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <div className="card-dark gold-border mx-auto max-w-md p-8 text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-metal text-black">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white">Pacote 5 Fotos IA</h2>
                  <p className="text-xs text-neutral-400">pagamento único</p>
                </div>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-2xl font-bold text-gold-100">R$</span>
                <span className="font-display text-5xl font-bold text-gold-metal">47</span>
                <span className="mb-1 text-sm text-neutral-400">uma vez</span>
              </div>

              <ul className="mt-6 space-y-3">
                {INCLUI.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-100" /> {i}
                  </li>
                ))}
              </ul>

              <a
                href={cta}
                target="_blank"
                rel="noopener"
                className="btn-gold mt-8 inline-flex w-full items-center justify-center gap-2 px-6 py-4 text-sm uppercase tracking-widest"
              >
                Adicionar por R$47 <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-[11px] text-neutral-500">
                Oferta disponível só nesta página.
              </p>
            </div>
          </Reveal>

          {/* Como funciona o envio */}
          <Reveal delay={180} className="mt-12">
            <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold-100">
                Como funciona
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Depois de confirmar, você me envia <strong className="text-white">3 fotos suas</strong> (1
                de corpo inteiro e 2 selfies) e <strong className="text-white">5 imagens de referência</strong>{" "}
                do estilo que deseja. Eu gero as 5 fotos profissionais e entrego junto com o seu site.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240} className="mt-8">
            <a href={briefingHref} className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 underline-offset-4 hover:text-gold-100 hover:underline">
              Não, obrigado — seguir sem as fotos
            </a>
          </Reveal>
        </div>
      </main>
    </>
  );
}
