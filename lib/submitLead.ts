// Envio centralizado de leads para /api/leads.
// Usado por LeadForm, Briefing, BriefingCompleto e o modal de PlanosAssinatura.
export async function submitLead(
  payload: Record<string, unknown>
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.ok) return { ok: false, error: data.error || "Erro ao enviar." };
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message || "Falha de conexão." };
  }
}
