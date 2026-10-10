// "Hear More from Our Clients" reviews section for /case-studies.
// Place it between the case-study cards section and the "Your story could be next." section.
//
// To add or change reviews, edit the `reviews` list below.
// Only publish genuine reviews from real clients (ACCC rules on fake testimonials).

import Link from "next/link";

type Review = {
  name: string;     // e.g. "Sarah M."
  location: string; // e.g. "Melbourne, VIC"
  rating: number;   // 1–5
  text: string;
};

// TODO: replace these placeholders with real client reviews before going live.
const reviews: Review[] = [
  {
    name: "Client review placeholder",
    location: "Melbourne, VIC",
    rating: 5,
    text: "The process was clear from the first conversation, and I always knew what the next step was.",
  },
  {
    name: "Client review placeholder",
    location: "Brisbane, QLD",
    rating: 5,
    text: "Having direct access to the builder helped us understand the costs and make informed decisions.",
  },
  {
    name: "Client review placeholder",
    location: "Queensland, Australia",
    rating: 5,
    text: "The team kept communication straightforward throughout the project and handover.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${i <= rating ? "fill-[#DC2626]" : "fill-white/15"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="mt-1 h-6 w-7 shrink-0 fill-[#DC2626]" aria-hidden="true">
      <path d="M0 24V14.4C0 6.4 4.3 1.6 12 0l1.4 3.4C9.2 4.8 7.1 7.4 6.9 11H13v13H0zm19 0V14.4C19 6.4 23.3 1.6 31 0l1 3.4c-4.2 1.4-6.3 4-6.5 7.6H32v13H19z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-white/80" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function ClientReviews() {
  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-bold md:text-6xl">Hear More from Our Clients</h2>
          <div className="mx-auto mt-6 h-[3px] w-20 bg-[#DC2626]" />
          <p className="mt-6 text-lg text-white/85">
            Real experiences from investors who chose to deal direct.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-lg border border-white/10 bg-[#1A1A1A] p-8"
            >
              <Stars rating={review.rating} />
              <div className="mt-6 flex flex-1 gap-4">
                <QuoteMark />
                <blockquote className="text-lg leading-relaxed text-white/90">
                  “{review.text}”
                </blockquote>
              </div>
              <figcaption className="mt-6">
                <div className="h-[3px] w-11 bg-[#DC2626]" />
                <p className="mt-6 text-lg text-white">{review.name}</p>
                <p className="mt-2 flex items-center gap-3 text-[#A3A3A3]">
                  <PinIcon />
                  {review.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
