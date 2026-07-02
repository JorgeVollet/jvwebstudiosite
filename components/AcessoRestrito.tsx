import Logo from "@/components/Logo";
import { SITE } from "@/lib/site";
import { Lock } from "lucide-react";

/* Tela mostrada quando a página pós-compra é acessada sem o código (?k=).
   Barra acesso casual/direto — o link válido vem no redirect da Kiwify. */
export default function AcessoRestrito() {
  const wa = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "#";
  return (
    <main className="section-dark relative flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
      <Logo href="/planos" />
      <Lock className="mt-10 h-12 w-12 text-gold-100" />
      <h1 className="mt-6 font-display text-3xl font-bold text-white">Página restrita</h1>
      <p className="mt-3 max-w-md text-neutral-400">
        Esta página é liberada só após a confirmação da compra. Acesse pelo link que você
        recebeu depois do pagamento. Qualquer dúvida, fale com a gente.
      </p>
      {SITE.whatsapp && (
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          className="btn-gold mt-8 px-7 py-3 text-sm uppercase tracking-widest"
        >
          Falar no WhatsApp
        </a>
      )}
    </main>
  );
}
