import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin, Phone, Sparkles, Scissors, Heart } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import formalImg from "@/assets/collection-formal.jpg";
import casualImg from "@/assets/collection-casual.jpg";
import bridalImg from "@/assets/collection-bridal.jpg";
import storeImg from "@/assets/store.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirha Styles — Embroidered Suits & Fabric Boutique in Mian Channu" },
      { name: "description", content: "Discover hand-picked embroidered suits, unstitched fabric and occasion wear at Mirha Styles, a 5.0-rated boutique in Mian Channu." },
      { property: "og:title", content: "Mirha Styles — Boutique in Mian Channu" },
      { property: "og:description", content: "Embroidered suits, unstitched fabric and occasion wear from a 5.0-rated boutique in Mian Channu." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const reviews = [
  { name: "Raj Rathore", text: "Get good stuffs.", when: "4 months ago" },
  { name: "Faiq Ahmad", text: "Recommended.", when: "a year ago" },
  { name: "Munazza Asad", text: "Really nice.", when: "a year ago" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <Sparkles className="h-3 w-3 text-accent" /> Eid & Wedding Edit · 2026
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-primary text-balance md:text-6xl">
              Quietly elegant clothing,<br />
              <span className="italic text-accent">stitched with care</span>.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              A small boutique in the heart of Mian Channu — bringing together
              embroidered suits, unstitched lawn, formal wear and bridal pieces
              for women who appreciate craft.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Browse collections <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Visit the boutique
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-accent">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="font-medium text-foreground">5.0</span>
              </div>
              <span className="h-4 w-px bg-border" />
              <span className="text-muted-foreground">Loved by customers across Khanewal district</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem]" style={{ background: "var(--gradient-warm)" }} />
            <img
              src={heroImg}
              alt="Model wearing soft pink embroidered shalwar kameez from Mirha Styles"
              width={1600}
              height={1920}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] md:block">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Signature piece</p>
              <p className="mt-1 font-display text-lg text-primary">Rose Zari Suit</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Collections</p>
            <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">Something for every occasion</h2>
          </div>
          <Link to="/collections" className="hidden text-sm text-foreground/70 hover:text-foreground md:inline">View all →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { img: formalImg, title: "Formal & Party Wear", desc: "Silk, organza and zari work for the evenings that matter." },
            { img: casualImg, title: "Everyday Lawn & Cotton", desc: "Light, embroidered three-piece suits for the warm months." },
            { img: bridalImg, title: "Bridal & Mehndi", desc: "Heritage red, gold thread and old-world craftsmanship." },
          ].map(c => (
            <article key={c.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-soft)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} width={1024} height={1280} loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-primary">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
          {[
            { icon: Scissors, title: "Hand-picked craft", text: "Every piece is chosen for its embroidery quality, fabric and finish — no fast-fashion shortcuts." },
            { icon: Heart, title: "Customer-first", text: "A 5.0-star reputation built over years of careful, personal service for every visitor." },
            { icon: Sparkles, title: "Updated regularly", text: "Fresh stock for Eid, weddings and the changing seasons — there's always something new on the shelves." },
          ].map(v => (
            <div key={v.title}>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORE */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-2xl">
          <img src={storeImg} alt="Inside the Mirha Styles boutique" width={1600} height={1100} loading="lazy"
            className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">The Boutique</p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">Visit us in Mian Channu</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Step inside our small, warm boutique on Shaheed Road — shelves of
            folded fabric, hangers of finished suits, and a cup of chai while
            you decide. We love helping you find the perfect piece.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Right corner of Street 3, Block 13, Shaheed Rd, Nawab Colony, Mian Channu 58000</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-accent" /> <a href="tel:+923346884688" className="hover:text-foreground">0334 6884688</a></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Mirha+Styles+Mian+Channu"
              target="_blank" rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >Get directions</a>
            <Link to="/visit" className="rounded-full border border-primary/20 bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
              Hours & info
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Loved by customers</p>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">5.0 on Google</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map(r => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-accent">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-3 font-display text-xl leading-snug text-primary">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="text-muted-foreground"> · {r.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
