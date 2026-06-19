"use client";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site da JV WEB STUDIO e quero um orçamento.")}`
    : "#contato";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Logo href="#top" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}
               className="text-sm font-medium text-neutral-300 transition-colors hover:text-gold-100">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={wa} target="_blank" rel="noopener"
             className="btn-gold hidden px-6 py-2.5 text-xs uppercase tracking-widest md:inline-flex">
            Orçamento
          </a>
          <button onClick={() => setOpen(!open)} className="text-gold-100 md:hidden" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-black/95 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                 className="text-base text-neutral-200 hover:text-gold-100">
                {n.label}
              </a>
            ))}
            <a href={wa} className="btn-gold mt-2 px-6 py-3 text-center text-xs uppercase tracking-widest">
              Pedir orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
