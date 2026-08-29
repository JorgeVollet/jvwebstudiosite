import Script from "next/script";
import { GA_ID } from "@/lib/site";

/**
 * Google Analytics 4.
 *
 * Só entra no ar quando as duas condições valem:
 *  1. GA_ID está preenchido em lib/site.ts
 *  2. o site está rodando em produção
 *
 * A segunda condição existe para o seu `npm run dev` não sujar o relatório —
 * sem ela, cada vez que você abre localhost vira uma "visita" no gráfico.
 */
export default function Analytics() {
  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
