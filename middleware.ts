import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({ request: req });

  // Sem Supabase configurado, não bloqueia (deixa o /admin mostrar instrução).
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return res;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) => {
          cookies.forEach(({ name, value }) => req.cookies.set(name, value));
          res = NextResponse.next({ request: req });
          cookies.forEach(({ name, value, options }) => res.cookies.set(name, value, options));
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const path = req.nextUrl.pathname;

  // Protege /admin (exceto a própria tela de login)
  if (path.startsWith("/admin") && path !== "/admin/login" && !user) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return res;
}

export const config = { matcher: ["/admin/:path*"] };
