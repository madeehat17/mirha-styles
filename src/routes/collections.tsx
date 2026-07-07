import { createFileRoute } from "@tanstack/react-router";
import formalImg from "@/assets/collection-formal.jpg";
import casualImg from "@/assets/collection-casual.jpg";
import bridalImg from "@/assets/collection-bridal.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Mirha Styles, Mian Channu" },
      { name: "description", content: "Browse formal, bridal, lawn and unstitched fabric collections at Mirha Styles boutique in Mian Channu." },
      { property: "og:title", content: "Collections — Mirha Styles" },
      { property: "og:description", content: "Formal, bridal, lawn and unstitched fabric at Mirha Styles." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: CollectionsPage,
});

const items = [
  { img: heroImg, name: "Rose Zari Three-Piece", category: "Formal", price: "Rs 14,500" },
  { img: formalImg, name: "Emerald Banarasi Dupatta", category: "Formal", price: "Rs 8,200" },
  { img: bridalImg, name: "Maroon Bridal Lehenga", category: "Bridal", price: "Rs 65,000" },
  { img: casualImg, name: "Peach Floral Lawn", category: "Lawn", price: "Rs 4,800" },
  { img: heroImg, name: "Blush Organza Suit", category: "Party Wear", price: "Rs 12,900" },
  { img: formalImg, name: "Pistachio Chiffon Set", category: "Formal", price: "Rs 11,200" },
  { img: casualImg, name: "Daily Embroidered Cotton", category: "Daily", price: "Rs 3,600" },
  { img: bridalImg, name: "Gold Tilla Mehndi Suit", category: "Bridal", price: "Rs 32,000" },
];

const cats = ["All", "Formal", "Bridal", "Lawn", "Party Wear", "Daily"] as const;

function CollectionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Our Collections</p>
      <h1 className="mt-2 font-display text-4xl text-primary md:text-5xl">A curated wardrobe</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        A glimpse of what's on our shelves right now. Pricing is approximate —
        visit the boutique to see the full range, feel the fabric and try pieces on.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map(c => (
          <button key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-wider text-foreground/70 transition hover:border-accent hover:text-accent">
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article key={i} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-soft)]">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={it.img} alt={it.name} loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{it.category}</p>
                <h3 className="mt-1 font-display text-lg leading-tight text-primary">{it.name}</h3>
              </div>
              <span className="shrink-0 text-sm font-medium text-accent">{it.price}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
        <h2 className="font-display text-2xl text-primary">Looking for something specific?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Call the boutique and we'll let you know what's in stock, or set
          aside pieces for you to view in person.
        </p>
        <a href="tel:+923346884688" className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          Call 0334 6884688
        </a>
      </div>
    </section>
  );
}
