import { createFileRoute } from "@tanstack/react-router";
import storeImg from "@/assets/store.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mirha Styles, Mian Channu" },
      { name: "description", content: "The story behind Mirha Styles — a family-run clothing boutique in Mian Channu, Khanewal." },
      { property: "og:title", content: "About Mirha Styles" },
      { property: "og:description", content: "A family-run clothing boutique in Mian Channu, Khanewal." },
      { property: "og:image", content: storeImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Our Story</p>
        <h1 className="mt-3 font-display text-4xl text-primary md:text-5xl text-balance">
          A small boutique, a careful eye, and one quiet promise.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Mirha Styles began as a single shelf of fabric in a corner shop on
          Shaheed Road. Over the years it grew — slowly, by word of mouth —
          into the boutique that now serves women across Mian Channu and the
          surrounding villages of Khanewal district.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <img src={storeImg} alt="Inside Mirha Styles" loading="lazy"
          className="aspect-[16/9] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-primary">What we believe</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A good suit doesn't have to be expensive — but it should be made
            well, sit well, and hold its embroidery after the first wash. Every
            piece on our shelves is chosen with that simple test in mind.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary">Who we serve</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Brides on a budget. Students on Eid. Mothers picking out wedding
            wear. Aunties looking for everyday lawn. Whoever walks through the
            door — we make the time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="grid gap-6 rounded-2xl border border-border bg-secondary/40 p-8 md:grid-cols-3">
          {[
            { k: "5.0", v: "Google rating" },
            { k: "1000+", v: "Happy customers" },
            { k: "8 yrs", v: "Serving Mian Channu" },
          ].map(s => (
            <div key={s.v} className="text-center">
              <p className="font-display text-4xl text-accent">{s.k}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
