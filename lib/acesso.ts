// Código simples de acesso às páginas pós-compra (upsell, obrigado, briefing).
// Vem no redirect da Kiwify (?k=...) — só quem paga recebe o link com o código.
// NÃO é segurança forte (é só pra barrar acesso casual/direto). Para segurança
// real, o caminho é validar o pagamento via webhook da Kiwify + Supabase.
export const ACESSO = "jv9x2k7p";
