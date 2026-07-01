import type { Metadata } from "next";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import BriefingCompleto from "@/components/BriefingCompleto";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Briefing do seu site — JV WEB STUDIO",
  description: "Preencha o briefing para começarmos o seu site. Entrega em até 48h.",
  robots: { index: false, follow: false },
};

export default function BriefingPage() {
  return (
    <>
      {/* Topo mínimo — só o logo */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-4xl px-6 py-5 md:px-10">
          <Logo href="/briefing" />
        </div>
      </header>

      <main className="section-dark relative min-h-screen overflow-hidden bg-dark pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 50% at 50% 0%, rgba(201,162,75,0.14), transparent 65%)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-3/50 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-100 backdrop-blur-md">
              <CheckCircle2 className="h-3.5 w-3.5" /> Pagamento confirmado
            </span>
            <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Bem-vindo! Agora é só <span className="text-gold-shine">preencher o briefing.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-neutral-300">
              Leva 2 minutos. Com essas informações eu começo o seu site na hora — e você
              recebe a primeira versão em até 48 horas úteis.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-3/40 bg-gold-3/10 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-gold-100">
              <Clock className="h-3.5 w-3.5" /> Entrega em até 48h úteis
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <div className="card-dark gold-border p-8">
              <BriefingCompleto />
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
