import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="gradient-emerald text-[var(--cream)] mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl mb-3">Welten Brukke Enterprises</div>
          <p className="text-sm text-[var(--cream)]/70 max-w-md leading-relaxed">
            A bridge to premium glassware solutions. Backed by a 57-year industry legacy, sourcing world-class glass for the liquor, perfume and food sectors.
          </p>
          <div className="gold-divider my-6 max-w-xs" />
          <div className="text-xs uppercase tracking-[0.2em] text-gold">ISO 9001:2015 Certified</div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-[var(--cream)]/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[var(--cream)]/80">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold"/> Firozabad, Uttar Pradesh, India</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> +91 8273135658</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> +91 7417558555</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold"/> <a href="mailto:weltenbrukkeenterprises@gmail.com" className="hover:text-gold break-all">weltenbrukkeenterprises@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[var(--cream)]/50">
          <div>© {new Date().getFullYear()} Welten Brukke Enterprises. All rights reserved.</div>
          <div>Est. 2026 — A 57-year legacy</div>
        </div>
      </div>
    </footer>
  );
}
