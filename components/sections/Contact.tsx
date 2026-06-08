import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
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
    <section id="contato" className="relative border-t border-white/5 bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="section-label">[ VAMOS CONVERSAR ]</div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Pronto para começar <span className="text-gold-shine">o seu próximo projeto?</span>
            </h2>
            <p className="mt-5 max-w-md text-neutral-300">
              Fale com a JV WEB STUDIO. Respondemos em até 24 horas úteis.
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
              <h3 className="font-display text-2xl font-bold">Conte sobre o seu projeto</h3>
              <p className="mt-2 mb-6 text-sm text-neutral-400">
                Preencha e entramos em contato com uma proposta sob medida.
              </p>
              <LeadForm origem="contato" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
