import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import catPerfume from "@/assets/cat-perfume.jpg";
import catLiquor from "@/assets/cat-liquor.jpg";
import catFood from "@/assets/cat-food.jpg";
import catLifestyle from "@/assets/cat-lifestyle.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Welten Brukke Enterprises" },
      { name: "description", content: "Premium glass bottles, perfume containers, food-grade jars, and tableware. Curated sourcing across beverage, fragrance, food and hospitality sectors." },
      { property: "og:title", content: "Products — Welten Brukke Enterprises" },
      { property: "og:description", content: "Curated premium glassware portfolio across four core verticals." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const items = [
  {
    img: catLiquor,
    title: "Beverage & Spirits",
    tag: "Liquor Bottles",
    desc: "Premium bottles with the durability and aesthetic required for the spirits industry — flint, amber and antique green, with embossing and custom molds available.",
    bullets: ["Custom mold development", "Flint, amber & antique green", "200ml — 1L formats", "Embossing & decoration support"],
  },
  {
    img: catPerfume,
    title: "Perfume & Cosmetics",
    tag: "Fragrance Containers",
    desc: "High-grade, crystal-clear bottles with precision necks and premium finishes — built for luxury fragrance houses and cosmetic brands.",
    bullets: ["High-clarity flint glass", "FEA15 / Crimp neck options", "10ml — 200ml", "Coating & metallization support"],
  },
  {
    img: catFood,
    title: "Food-Grade Packaging",
    tag: "Jars & Containers",
    desc: "Jars and containers meeting strict safety standards for food and beverage preservation — for honey, pickles, sauces, spices, dairy and more.",
    bullets: ["Food-safe certified", "Twist-off & Lug cap compatible", "100ml — 1L jars", "Bulk pallet quantities"],
  },
  {
    img: catLifestyle,
    title: "Lifestyle & Hospitality",
    tag: "Kitchen & Tableware",
    desc: "Kitchenware and tableware balancing elegance with commercial utility — wine glasses, tumblers, decanters, serving ware and more.",
    bullets: ["Restaurant & hotel grade", "Stemware, tumblers, decanters", "Lead-free crystal options", "OEM & branded supply"],
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Specialized Sourcing"
        title="A curated portfolio of glass items aligned with your brand."
        subtitle="We don't just find products — we bridge global manufacturing with your specific business needs."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 space-y-24">
        {items.map((it, i) => (
          <article key={it.title} className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div>
              <img src={it.img} alt={it.title} loading="lazy" width={800} height={1000} className="w-full h-auto aspect-[4/5] object-cover" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{it.tag}</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">{it.title}</h2>
              <div className="gold-divider my-6 max-w-[60px]" />
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              <ul className="mt-7 grid grid-cols-2 gap-3 text-sm">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-gold">◆</span>{b}</li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.2em] text-[var(--emerald-deep)] border-b border-gold pb-1 hover:gap-3 transition-all">
                Request Sample <ArrowRight size={14}/>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="gradient-emerald text-[var(--cream)] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Looking for something specific?</h2>
          <p className="mt-4 text-[var(--cream)]/75">Share your specifications — we'll curate options from our manufacturer network.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gold text-[var(--emerald-deep)] text-sm uppercase tracking-[0.2em] hover:bg-[var(--gold-soft)] transition-colors">
            Contact Sourcing Team <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
