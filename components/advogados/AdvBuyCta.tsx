"use client";
import type { ReactNode } from "react";

/** CTA de COMPRA da campanha — navega para o checkout (/advogados/finalizar) ou
 *  para um link de pagamento, disparando o evento certo no Meta Pixel.
 *  Use event="InitiateCheckout" nos botões de plano e event="AddPaymentInfo"
 *  nos botões de pagamento da página finalizar. */
export default function AdvBuyCta({
  href,
  event = "InitiateCheckout",
  external = false,
  children,
  className = "btn-gold px-8 py-4 text-sm uppercase tracking-widest",
}: {
  href: string;
  event?: "InitiateCheckout" | "AddPaymentInfo" | "Contact";
  external?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const track = () => {
    try {
      (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.(
        "track",
        event
      );
    } catch {}
  };
  return (
    <a
      href={href}
      onClick={track}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}
