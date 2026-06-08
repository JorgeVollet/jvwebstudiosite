import { SITE } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <Logo href="#top" />
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            {SITE.tagline}
          </p>
        </div>

        {/* Watermark gigante */}
        <div className="pointer-events-none mt-12 select-none text-center">
          <span className="font-display text-[15vw] font-bold leading-none tracking-tighter text-white/[0.03]">
            JV WEB STUDIO
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-neutral-500 md:flex-row">
          <p>{SITE.founder} · Sites · Sistemas · Automações N8N</p>
          <p>© {new Date().getFullYear()} JV WEB STUDIO — Todos os direitos reservados</p>
          <a href="/admin" className="text-neutral-600 transition hover:text-gold-100">Admin</a>
        </div>
      </div>
    </footer>
  );
}
