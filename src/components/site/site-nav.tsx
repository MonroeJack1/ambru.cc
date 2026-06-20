import { Menu } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#coaching", label: "Coaching" },
  { href: "#market-research", label: "Market Research" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="AMBRU.CC home">
          <span className="grid size-10 place-items-center rounded-2xl border border-sky-300/20 bg-sky-300/10 font-mono text-sm font-bold text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.16)] transition group-hover:border-sky-300/50">
            AC
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.18em] text-white">AMBRU.CC</span>
            <span className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-slate-500">
              Cosmin Claudiu / AI • Marketing • Strategy
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Badge variant="success" className="hidden xl:inline-flex">
            Strategy studio
          </Badge>
          <a href="#contact" className={cn(buttonVariants({ size: "sm" }))}>
            Book a Strategy Call
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:bg-white/[0.08] [&::-webkit-details-marker]:hidden">
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(22rem,calc(100vw-2rem))] rounded-[1.5rem] border border-white/10 bg-[#0b1020]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className={cn(buttonVariants({ className: "mt-2 w-full" }))}>
                Book a Strategy Call
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
