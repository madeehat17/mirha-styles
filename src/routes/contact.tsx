import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mirha Styles" },
      { name: "description", content: "Get in touch with Mirha Styles boutique — call, WhatsApp or send a message." },
      { property: "og:title", content: "Contact Mirha Styles" },
      { property: "og:description", content: "Call, WhatsApp or send a message to the boutique." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-accent">Contact</p>
      <h1 className="mt-2 font-display text-4xl text-primary md:text-5xl">We'd love to hear from you</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Questions about a piece, custom orders, or just want to check what's in
        stock — drop us a line and we'll respond quickly.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <a href="tel:+923346884688" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-accent">
            <Phone className="h-5 w-5 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Call</p>
              <p className="font-medium text-foreground">0334 6884688</p>
            </div>
          </a>
          <a href="https://wa.me/923346884688" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-accent">
            <MessageCircle className="h-5 w-5 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">WhatsApp</p>
              <p className="font-medium text-foreground">Chat with the boutique</p>
            </div>
          </a>
          <a href="mailto:hello@mirhastyles.pk" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-accent">
            <Mail className="h-5 w-5 text-accent" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">hello@mirhastyles.pk</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          {sent ? (
            <div className="py-10 text-center">
              <h2 className="font-display text-2xl text-primary">Thank you ✿</h2>
              <p className="mt-2 text-sm text-muted-foreground">We've received your message and will be in touch soon.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input required className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone or Email</label>
                <input required className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
              </div>
              <div className="grid gap-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea required rows={5} className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                Send message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
