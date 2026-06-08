import { NextResponse } from "next/server";

/**
 * Feed do Instagram via Basic Display API.
 * Quando você gerar INSTAGRAM_ACCESS_TOKEN, este endpoint retorna as fotos reais.
 * Sem token, retorna lista vazia e o componente mostra placeholders no design.
 *
 * Como obter o token:
 *  1. developers.facebook.com -> Create App -> "Consumer"
 *  2. Adicione o produto "Instagram Basic Display"
 *  3. Gere um User Token de longa duração (60 dias) e coloque em .env
 */
export const revalidate = 3600; // cache 1h

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: true, configured: false, data: [] });
  }
  try {
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=9`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const json = await res.json();
    if (json.error) throw new Error(json.error.message);
    return NextResponse.json({ ok: true, configured: true, data: json.data || [] });
  } catch (e: any) {
    return NextResponse.json({ ok: false, configured: true, error: e.message, data: [] });
  }
}
