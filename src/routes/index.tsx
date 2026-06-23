import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-glassware.jpg";
import factoryAsset from "@/assets/glass-factory.jpg.asset.json";
const factory = factoryAsset.url;
import catPerfume from "@/assets/cat-perfume.jpg";
import catLiquor from "@/assets/cat-liquor.jpg";
import catFood from "@/assets/cat-food.jpg";
import catLifestyle from "@/assets/cat-lifestyle.jpg";
import { ArrowRight, ShieldCheck, Factory, Globe2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welten Brukke Enterprises — Premium Glassware Sourcing" },
      { name: "description", content: "A bridge to premium glassware solutions for the liquor, perfume and food industries. Backed by a 57-year industry legacy. Based in Firozabad, India." },
      { property: "og:title", content: "Welten Brukke Enterprises — Premium Glassware Sourcing" },
      { property: "og:description", content: "Curated premium glassware for liquor, perfume and food packaging. ISO 9001:2015 certified." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  { img: catLiquor, title: "Beverage & Spirits", desc: "Distinctive liquor bottles built for brand impact and durability." },
  { img: catPerfume, title: "Perfume & Cosmetics", desc: "High-clarity bottles with precision necks and premium finishes." },
  { img: catFood, title: "Food Grade Packaging", desc: "Jars and containers meeting strict food-safety standards." },
  { img: catLifestyle, title: "Lifestyle & Hospitality", desc: "Tableware and kitchenware balancing elegance with utility." },
];

const stats = [
  { v: "57", l: "Years of Legacy" },
  { v: "1969", l: "First Family Venture" },
  { v: "4", l: "Industry Verticals" },
  { v: "ISO", l: "9001:2015 Certified" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative gradient-emerald text-[var(--cream)] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Est. 2026 · Firozabad, India</div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              A Bridge to <em className="text-gold not-italic">Premium</em> Glassware Solutions
            </h1>
            <p className="mt-7 text-[var(--cream)]/80 text-lg max-w-xl leading-relaxed">
              Bridging a 57-year family heritage with modern supply-chain innovation — sourcing world-class glass for the liquor, perfume, and food industries.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[var(--emerald-deep)] text-sm uppercase tracking-[0.2em] hover:bg-[var(--gold-soft)] transition-colors">
                Request a Quote <ArrowRight size={16}/>
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--cream)]/30 text-sm uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors">
                Explore Products
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
            <img src={hero} alt="Curated premium glass bottles" width={1600} height={1100} className="relative w-full h-auto object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-serif text-5xl text-[var(--emerald-deep)]">{s.v}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img src={factory} alt="Glass manufacturing furnace" loading="lazy" width={1400} height={900} className="w-full h-auto" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About the Firm</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Heritage forged in glass.<br/>Trust built across generations.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From <em>Rashmi Lamps</em> (1989) and <em>Panchsheel Glass Works</em> (1969) to <em>M.C. Electricals</em> (1991), our partners inherit decades of furnace-floor expertise. Welten Brukke Enterprises continues that lineage as a professional bridge between world-class glass production and the precise needs of modern brands.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.2em] text-[var(--emerald-deep)] border-b border-gold pb-1 hover:gap-3 transition-all">
            Our Story <ArrowRight size={14}/>
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Specialized Sourcing</div>
            <h2 className="font-serif text-4xl md:text-5xl">A curated portfolio for discerning brands.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link
                key={c.title}
                to="/products"
                className="group bg-background border border-border overflow-hidden block focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label={`View ${c.title} products`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl group-hover:text-[var(--emerald-deep)] transition-colors">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Philosophy</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">"We don't just move products — we build bridges of trust."</h2>
          <p className="mt-6 text-muted-foreground">— A message from our partners</p>
        </div>
        <div className="gold-divider my-16 max-w-xs mx-auto" />
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: ShieldCheck, title: "Quality at the Source", text: "Every piece passes rigorous aesthetic and structural standards before clearance." },
            { icon: Sparkles, title: "Specialized Expertise", text: "Deep industry-specific knowledge — no one-size-fits-all sourcing." },
            { icon: Globe2, title: "Bridges of Trust", text: "International quality standards aligned to your operational needs." },
          ].map((p) => (
            <div key={p.title} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full border border-gold flex items-center justify-center text-gold">
                <p.icon size={22}/>
              </div>
              <h3 className="font-serif text-xl mt-5">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-emerald text-[var(--cream)]">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center">
          <Factory size={32} className="text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Let's build your next great brand together.</h2>
          <p className="mt-5 text-[var(--cream)]/75 max-w-xl mx-auto">From premium perfume bottles to industrial food containers — we are your bridge to quality.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-gold text-[var(--emerald-deep)] text-sm uppercase tracking-[0.2em] hover:bg-[var(--gold-soft)] transition-colors">
            Start a Conversation <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
