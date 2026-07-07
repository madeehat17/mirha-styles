import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-primary">Mirha</span>
            <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Styles</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A family-run clothing boutique in Mian Channu — curating embroidered
            suits, unstitched fabric and occasion wear for the women of southern Punjab.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <div className="flex gap-0.5 text-accent">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">5.0 · Google Reviews</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/collections" className="hover:text-foreground">Collections</Link></li>
            <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
            <li><Link to="/visit" className="hover:text-foreground">Visit the Store</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground">Find us</h4>
          <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> Right corner of Street 3, Block 13, Shaheed Rd, Nawab Colony, Mian Channu 58000</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <a href="tel:+923346884688" className="hover:text-foreground">0334 6884688</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> Mon – Sat · 10:00 am – 9:00 pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Mirha Styles. All rights reserved.</span>
          <span>Mian Channu, Khanewal — Punjab, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
