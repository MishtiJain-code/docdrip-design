import { type ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="gradient-emerald text-[var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{eyebrow}</div>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-[var(--cream)]/75 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        <div className="gold-divider mt-10 max-w-[120px] mx-auto" />
      </div>
    </section>
  );
}
