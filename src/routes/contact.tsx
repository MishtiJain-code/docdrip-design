import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Welten Brukke Enterprises" },
      { name: "description", content: "Get in touch with Welten Brukke Enterprises in Firozabad. Request quotes, samples or partnership opportunities across our premium glassware portfolio." },
      { property: "og:title", content: "Contact — Welten Brukke Enterprises" },
      { property: "og:description", content: "Reach our sourcing team for premium glassware solutions." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim() || null,
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim() || null,
      industry: String(data.get("industry") || "").trim() || null,
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    if (payload.name.length > 200 || payload.email.length > 320 || payload.message.length > 5000) {
      toast.error("One of the fields exceeds the allowed length.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setLoading(false);

    if (error) {
      console.error(error);
      toast.error("Could not send your inquiry. Please try again or email us directly.");
      return;
    }

    toast.success("Thank you! Your inquiry has been received. We'll be in touch shortly.");
    form.reset();
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Let's Work Together"
        title="Your bridge to quality glassware."
        subtitle="Whether you need premium perfume bottles or industrial-grade food containers, our team is ready to help."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-[1fr_1.4fr] gap-16">
        {/* INFO */}
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Reach Us</div>
          <h2 className="font-serif text-3xl mb-8">Talk to our sourcing team.</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-gold mt-1" size={20}/>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Office</div>
                <div className="mt-1">Firozabad, Uttar Pradesh, India</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-gold mt-1" size={20}/>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
                <a href="tel:+918273135658" className="block mt-1 hover:text-gold">+91 82731 35658</a>
                <a href="tel:+917417558555" className="block hover:text-gold">+91 74175 58555</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-gold mt-1" size={20}/>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                <a href="mailto:weltenbrukkeenterprises@gmail.com" className="block mt-1 hover:text-gold break-all">weltenbrukkeenterprises@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="gold-divider my-10" />
          <div className="bg-cream border border-border p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-gold">ISO 9001:2015 Certified</div>
            <p className="mt-2 text-sm text-muted-foreground">A consistent Quality Management System meeting global benchmarks for professional reliability.</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className="bg-cream border border-border p-8 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Industry</label>
            <select name="industry" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold">
              <option>Beverage & Spirits</option>
              <option>Perfume & Cosmetics</option>
              <option>Food Packaging</option>
              <option>Hospitality & Tableware</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
            <textarea name="message" rows={5} required maxLength={5000} placeholder="Tell us about your requirement — quantities, formats, timelines…" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
          </div>
          <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] hover:bg-[var(--emerald-deep)] transition-colors disabled:opacity-60">
            {loading ? <><Loader2 size={16} className="animate-spin"/> Sending…</> : <><Send size={16}/> Send Inquiry</>}
          </button>
          <p className="text-xs text-muted-foreground">Your inquiry is securely stored and our team is notified. We typically respond within 1 business day.</p>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}{required && <span className="text-gold">*</span>}</label>
      <input name={name} type={type} required={required} maxLength={320} className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
    </div>
  );
}
