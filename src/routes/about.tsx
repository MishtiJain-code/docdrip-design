import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Welten Brukke Enterprises" },
      { name: "description", content: "Bridging a 57-year family heritage in glass with modern sourcing. Meet the partners behind Welten Brukke Enterprises." },
      { property: "og:title", content: "About — Welten Brukke Enterprises" },
      { property: "og:description", content: "Heritage forged in glass since 1969. Meet our partners and our story." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "1969", title: "Panchsheel Glass Works", text: "Mr. Keshav Dev Agrawal founds a renowned glass bangle manufacturing house." },
  { year: "1989", title: "Rashmi Lamps", text: "Mr. Premchand Jain pioneers glass bulb shell and tube manufacturing." },
  { year: "1991", title: "M.C. Electricals", text: "Expansion into glass trading — dominating the bulb raw-material market across Northern India." },
  { year: "1996 / 2005", title: "Transition", text: "Both manufacturing firms transition to trading, deepening market and supply expertise." },
  { year: "2026", title: "Welten Brukke Enterprises", text: "A new venture bridges tradition and modern innovation in premium glass packaging." },
];

const partners = [
  {
    name: "Mr. Viplove Jain",
    role: "Co-founder & Partner",
    age: "Age 23 · Firozabad, UP",
    edu: "Post-graduate (PGDM)",
    bio: "Versatile experience in the lamp business markets of Firozabad and Kanpur. Rooted in the industrial legacy of Rashmi Lamps (1989) and M.C. Electricals (1991) — a visionary entrepreneur with a long-term, optimistic outlook.",
  },
  {
    name: "Mr. Deepak Agrawal",
    role: "Co-founder & Partner",
    age: "Age 23 · Firozabad, UP",
    edu: "Graduate (B.Com)",
    bio: "Inherits the legacy of Panchsheel Glass Works (1969). Following the firm's 1996 transition into glass trading, Deepak brings deep market experience into Welten Brukke's modern sourcing operations.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About the Firm"
        title="Bridging Heritage with Modern Glassware"
        subtitle="A premier sourcing partner managed by two dedicated founders. Based in Firozabad — the glass capital of India — we curate excellence backed by a 57-year family legacy."
      />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <img src={factory} alt="Glass manufacturing" loading="lazy" width={1400} height={900} className="w-full h-auto" />
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Who We Are</div>
          <h2 className="font-serif text-4xl leading-tight">A professional bridge between world-class production and your brand's needs.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We don't just supply products — we curate a portfolio of excellence for the Liquor, Perfume, and Food industries. By combining inherited industrial wisdom with a modern, ISO-certified approach to quality, we ensure your business receives the finest glassware with total transparency and professional integrity.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Premium Spirits — distinctive liquor bottles for brand impact","Luxury Fragrance — high-clarity perfume and cosmetic containers","Industrial Food Packaging — durable jars and specialized containers","Allied Glassware — sophisticated kitchenware and tableware"].map((i) => (
              <li key={i} className="flex gap-3"><span className="text-gold">◆</span><span>{i}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Legacy</div>
            <h2 className="font-serif text-4xl md:text-5xl">Five generations. One material. Endless craft.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="md:grid md:grid-cols-[8rem_1fr] gap-10 items-start">
                  <div className="font-serif text-3xl text-gold md:text-right">{t.year}</div>
                  <div className="relative md:pl-10">
                    <div className="hidden md:block absolute left-[-5px] top-3 w-3 h-3 rounded-full bg-gold" />
                    <h3 className="font-serif text-xl">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Meet the Partners</div>
          <h2 className="font-serif text-4xl md:text-5xl">Two founders. One shared vision.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((p) => (
            <article key={p.name} className="bg-cream border border-border p-10">
              <div className="w-20 h-20 rounded-full gradient-emerald flex items-center justify-center text-gold font-serif text-3xl mb-6">
                {p.name.split(" ")[1][0]}
              </div>
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{p.role}</div>
              <div className="text-sm text-muted-foreground mt-3">{p.age} · {p.edu}</div>
              <div className="gold-divider my-5 max-w-[60px]" />
              <p className="text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VISION QUOTE */}
      <section className="gradient-emerald text-[var(--cream)] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="text-gold font-serif text-6xl leading-none">"</div>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed italic">
            We don't just move products; we build bridges of trust. By combining our family's 57-year legacy with modern supply-chain innovation, we ensure our partners receive world-class glassware with the transparency and reliability they deserve.
          </p>
          <div className="gold-divider my-8 max-w-[80px] mx-auto" />
          <div className="text-xs uppercase tracking-[0.3em] text-gold">The Partners' Vision</div>
        </div>
      </section>
    </SiteLayout>
  );
}
