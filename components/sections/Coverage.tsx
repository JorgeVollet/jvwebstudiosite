import Reveal from "@/components/Reveal";
import WavesBackground from "@/components/backgrounds/WavesBackground";
import { Globe, Clock, MessageSquare, Zap } from "lucide-react";

const POINTS = [
  { icon: Globe, title: "Brasil inteiro", desc: "Atendimento 100% remoto, de Norte a Sul. Onde você estiver, entregamos." },
  { icon: Clock, title: "Resposta em 24h", desc: "Você fala direto com quem desenvolve. Sem fila, sem intermediário." },
  { icon: MessageSquare, title: "Reuniões online", desc: "Briefing, demos e validações por vídeo. Sprints semanais transparentes." },
  { icon: Zap, title: "Deploy global", desc: "Infra na Vercel + Supabase: rápido em qualquer lugar do mundo." },
];

export default function Coverage() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-32">
      {/* Waves dourado sobre preto */}
      <WavesBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="section-label">[ ONDE ATENDEMOS ]</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Baseados no <span className="text-gold-metal">Brasil.</span> Entregando para o mundo.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            A JV WEB STUDIO opera de forma 100% digital — sem fronteiras geográficas entre você e o
            seu próximo projeto.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card-dark h-full p-7">
                <p.icon className="h-8 w-8 text-gold-100" />
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
