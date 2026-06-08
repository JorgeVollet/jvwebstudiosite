import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, telefone, email, empresa, busca, instagram, origem, cupom } = body;

    if (!nome || !telefone || !email) {
      return NextResponse.json(
        { ok: false, error: "Nome, telefone e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    // Se o Supabase ainda não foi configurado, não quebra o site.
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.warn("[leads] Supabase não configurado — lead recebido:", { nome, email });
      return NextResponse.json({
        ok: true,
        stored: false,
        message: "Recebido (Supabase não configurado ainda).",
      });
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("leads").insert({
      nome, telefone, email,
      empresa: empresa || null,
      busca: busca || null,
      instagram: instagram || null,
      origem: origem || "popup",
      cupom: cupom || null,
      ip: req.headers.get("x-forwarded-for") || null,
      user_agent: req.headers.get("user-agent") || null,
    });

    if (error) {
      console.error("[leads] insert error:", error.message);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, stored: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
