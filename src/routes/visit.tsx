import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Mirha Styles, Mian Channu" },
      { name: "description", content: "Address, hours and directions to Mirha Styles boutique on Shaheed Road, Mian Channu." },
      { property: "og:title", content: "Visit Mirha Styles" },
      { property: "og:description", content: "Address, hours and directions to the boutique." },
    ],
  }),
  component: VisitPage,
});

const hours = [
  ["Monday", "10:00 am – 9:00 pm"],
  ["Tuesday", "10:00 am – 9:00 pm"],
  ["Wednesday", "10:00 am – 9:00 pm"],
  ["Thursday", "10:00 am – 9:00 pm"],
  ["Friday", "10:00 am – 1:00 pm · 3:00 – 9:00 pm"],
  ["Saturday", "10:00 am – 9:00 pm"],
  ["Sunday", "Closed"],
];

function VisitPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Visit the Boutique</p>
      <h1 className="mt-2 font-display text-4xl text-primary md:text-5xl">Find us on Shaheed Road</h1>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h2 className="font-display text-xl text-primary">Address</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Right corner of Street 3, Block 13<br />
                  Shaheed Rd, Nawab Colony<br />
                  Mian Channu 58000, Punjab
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Mirha+Styles+Mian+Channu"
              target="_blank" rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h2 className="font-display text-xl text-primary">Call ahead</h2>
                <a href="tel:+923346884688" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                  0334 6884688
                </a>
                <p className="mt-2 text-xs text-muted-foreground">We can hold pieces or check stock before you visit.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-accent" />
              <div className="w-full">
                <h2 className="font-display text-xl text-primary">Opening hours</h2>
                <ul className="mt-3 divide-y divide-border text-sm">
                  {hours.map(([d, t]) => (
                    <li key={d} className="flex justify-between gap-4 py-2">
                      <span className="text-foreground">{d}</span>
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">Hours may vary during Eid and public holidays.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <iframe
            title="Mirha Styles location"
            src="https://www.google.com/maps?q=Mirha+Styles+Mian+Channu&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
