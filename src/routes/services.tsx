import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import warehouse from "@/assets/warehouse.jpg";
import { Truck, Layers, ClipboardCheck, Boxes, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Welten Brukke Enterprises" },
      { name: "description", content: "End-to-end glassware supply solutions: integrated supply chain, industry-specific sourcing, bulk inventory coordination and quality assurance at origin." },
      { property: "og:title", content: "Services — Welten Brukke Enterprises" },
      { property: "og:description", content: "Streamlined glassware procurement across liquor, perfume and food sectors." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Truck, title: "Integrated Supply Chain Management", text: "We manage sourcing and logistics complexities to ensure timely delivery of your glassware — across regions and freight modes." },
  { icon: Layers, title: "Industry-Specific Solutions", text: "Tailored support for liquor, food, and beverage industries with containers that meet precise sector specifications." },
  { icon: Boxes, title: "Bulk Inventory Coordination", text: "Expertise in large-scale requirements for packing containers and commercial glass assets — pallets to containers." },
  { icon: ClipboardCheck, title: "Quality Assurance at Origin", text: "Comprehensive inspections at the source so every product meets strict standards for clarity and durability before handover." },
];

const process = [
  { n: "01", t: "Discovery", d: "We understand your brand, volumes, and packaging specifications in depth." },
  { n: "02", t: "Curation", d: "Drawing on our manufacturer network, we curate samples aligned to your aesthetic and function." },
  { n: "03", t: "Inspection", d: "Each batch is QA-checked at origin against ISO 9001:2015 quality benchmarks." },
  { n: "04", t: "Delivery", d: "Coordinated logistics — pallet, container or LCL — delivered on schedule." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="End-to-end supply, without the burden of multiple vendors."
        subtitle="A single sourcing partner across liquor, perfume, food, and lifestyle glassware — backed by ISO 9001:2015 quality management."
      />

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.title} className="bg-cream border border-border p-10 hover:border-gold transition-colors">
              <s.icon size={28} className="text-gold mb-6" />
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">How We Work</div>
            <h2 className="font-serif text-4xl md:text-5xl">A simple, transparent process.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.n} className="border-t border-gold pt-6">
                <div className="font-serif text-4xl text-[var(--emerald-deep)]">{p.n}</div>
                <h3 className="font-serif text-xl mt-3">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <img src={warehouse} alt="Welten Brukke warehouse" loading="lazy" width={1400} height={900} className="w-full h-auto" />
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Infrastructure</div>
          <h2 className="font-serif text-4xl leading-tight">Capacity to handle commercial-scale glass programs.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From dedicated warehousing in Firozabad to a vetted manufacturer network across Northern India, our infrastructure is built for reliable, repeatable supply at any volume.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-[var(--emerald-deep)] transition-colors">
            Discuss Your Program <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="gradient-emerald text-[var(--cream)] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Certification</div>
          <h2 className="font-serif text-4xl md:text-5xl">ISO 9001:2015 Certified</h2>
          <p className="mt-5 text-[var(--cream)]/75 max-w-2xl mx-auto">
            Our commitment to operational excellence and quality management is backed by formal international certification — a consistent Quality Management System meeting global benchmarks for professional reliability.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              { t: "Quality Assurance", d: "Internal sourcing and verification processes meet global benchmarks." },
              { t: "Client Trust", d: "Continuous workflow improvement to enhance customer satisfaction." },
              { t: "Industrial Compliance", d: "Confidence for partners in liquor, food and perfume industries." },
            ].map((c) => (
              <div key={c.t} className="border border-[var(--cream)]/15 p-8 text-left">
                <h3 className="font-serif text-xl text-gold">{c.t}</h3>
                <p className="mt-2 text-sm text-[var(--cream)]/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
