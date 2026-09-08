import type { Testimonial } from "@/lib/types";
import { StarRating } from "@/components/ui/StarRating";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="border-b border-border py-14">
      <div className="container-page">
        <h2 className="mb-10 font-display text-xl font-semibold sm:text-2xl">
          Müştərilərimiz nə deyir?
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5"
            >
              <StarRating rating={item.rating} />
              <blockquote className="text-sm leading-relaxed text-text">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto text-xs text-text-muted">
                <span className="font-medium text-text">{item.name}</span> ·{" "}
                {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
