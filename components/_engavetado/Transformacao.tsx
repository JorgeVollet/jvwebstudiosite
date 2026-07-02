import Reveal from "@/components/Reveal";
import BeforeAfter from "./BeforeAfter";

export default function Transformacao() {
  return (
    <section className="relative border-t border-black/10 bg-base py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <div className="section-label">[ ANTES & DEPOIS ]</div>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            A diferença entre <span className="text-gold-metal">existir online</span> e{" "}
            <span className="text-gold-shine">vender online.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
            Arraste para comparar. À esquerda, a cara de um site genérico e datado.
            À direita, um projeto real entregue pela JV WEB STUDIO.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <BeforeAfter
            antes="/antes-depois/integra-antes.webp"
            depois="/antes-depois/integra-depois.webp"
            alt="Íntegra Representações"
          />
        </Reveal>

        <Reveal delay={100} className="mt-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            Projeto real: Íntegra Representações · O lado “antes” é uma ilustração comparativa
          </p>
        </Reveal>
      </div>
    </section>
  );
}
