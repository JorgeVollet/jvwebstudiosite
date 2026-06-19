import Reveal from "@/components/Reveal";
import Briefing from "@/components/Briefing";
import { SITE } from "@/lib/site";
import { Mail, MessageCircle, Instagram } from "lucide-react";

export default function Contact() {
  const wa = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "#";
  const cards = [
    { icon: Mail, label: "E-MAIL", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MessageCircle, label: "WHATSAPP", value: SITE.whatsapp ? "Falar agora" : "Em breve", href: wa },
    { icon: Instagram, label: "INSTAGRAM", value: `@${SITE.instagram}`, href: `https://instagram.com/${SITE.instagram}` },
  ];

  return (
    <section id="contato" className="relative border-t border-black/10 bg-surface py-32">
      <div id="briefing" className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="section-label">[ BRIEFING RÁPIDO · 1 MINUTO ]</div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Responda 5 perguntas e <span className="text-gold-shine">receba sua demonstração grátis.</span>
            </h2>
            <p className="mt-5 max-w-md text-neutral-700">
              Sem reunião pra marcar, sem compromisso. Em 1 minuto eu entendo o seu
              projeto e preparo uma demonstração real — você só paga se aprovar.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {cards.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener"
                   className="card-dark flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-metal text-black">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-gold-100">{c.label}</div>
                    <div className="truncate text-sm font-medium text-white">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card-dark gold-border p-8">
              <Briefing />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}