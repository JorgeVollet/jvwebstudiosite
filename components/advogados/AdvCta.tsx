"use client";
import type { ReactNode } from "react";
import { ADV_WHATS } from "@/lib/advogados";

/** CTA da campanha — abre o WhatsApp com mensagem pré-preenchida e dispara o
 *  evento Contact no Meta Pixel (quando instalado). Use em TODOS os botões. */
export default function AdvCta({
  text,
  children,
  className = "btn-gold px-8 py-4 text-sm uppercase tracking-widest",
}: {
  /** Mensagem pré-preenchida que identifica a origem/plano na conversa. */
  text: string;
  children: ReactNode;
  className?: string;
}) {
  const href = `https://wa.me/${ADV_WHATS}?text=${encodeURIComponent(text)}`;
  const track = () => {
    try {
      (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.(
        "track",
        "Contact"
      );
    } catch {}
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className={className}
    >
      {children}
    </a>
  );
}
