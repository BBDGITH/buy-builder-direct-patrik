import type { Metadata } from "next";
import LeadLink from "@/components/shared/LeadLink";

export const metadata: Metadata = {
  title: "Case Studies & Client Reviews | Buy Builder Direct",
  description:
    "Discover Australian property investor case studies and client testimonials. Learn how Buy Builder Direct helps investors build rooming houses and co-living properties.",
};

const stats = [
  { value: "$2.4M+", label: "Total Investor Savings" },
  { value: "180+", label: "Properties Delivered" },
  { value: "98%", label: "Investor Satisfaction" },
];

const caseStudies = [
  {
    name: "Sarah M.",
    location: "Melbourne, VIC",
    investmentType: "Co-Living",
    saved: "$30,000",
    situation:
      "Sarah was a first-time investor frustrated by the complexity of the standard property market. She wanted positive cash flow from her first investment, specifically targeting Melbourne's inner suburbs where the rental market for young professionals was exceptionally strong. Every agent she spoke to was selling packaged products at prices that didn't stack up.",
    solution:
      "BBD matched Sarah with a licensed co-living specialist builder in Footscray — a suburb where young professional demand for private rooms had dramatically outpaced supply. The builder designed a 6-room co-living property on a standard residential block. Sarah dealt directly with the builder from brief through to handover.",
    outcome:
      "Sarah's 6-room co-living property was handed over on time and fully tenanted within 3 weeks. The final build price came in $30,000 below the equivalent co-living product being sold through project marketers in the same area. With all rooms leased at market rate, the property was positively geared from the first full month of ownership.",
    quote:
      "The savings were real and the process was completely transparent. I knew exactly where every dollar was going — no surprises, no hidden markups.",
  },
  {
    name: "James T.",
    location: "Brisbane, QLD",
    investmentType: "Rooming Houses",
    saved: "$60,000+",
    situation:
      "James was an experienced investor with an existing portfolio and a clear goal: scale faster. He had been buying through buyers' agents and was frustrated by the pace and the margin he was giving up on each transaction. He wanted to do multiple builds in Brisbane's growth corridors without paying agent fees on every one.",
    solution:
      "BBD arranged three consecutive rooming house builds for James in Brisbane's south-west growth corridor — all with the same specialist builder who understood Queensland's boarding house licensing requirements inside and out. Because James was placing volume, there was genuine room to negotiate, and we helped him extract better terms on each successive build.",
    outcome:
      "Three rooming house properties, delivered over 18 months. Combined savings versus the agent-marketed equivalent: over $60,000. All three properties were positively geared from month one, with strong occupancy supported by the proximity to employment hubs and public transport. James has since introduced two colleagues to BBD.",
    quote:
      "Three builds, zero agent markups. BBD made scaling simple — and the direct builder relationship means I know exactly what I'm getting every time.",
  },
];

const clientTestimonials = [
  {
    name: "Sunitha",
    location: "Gold Coast, Australia",
    title: "A Stress-Free Rooming House Build in Victoria",
    paragraphs: [
      "The last nine months have been a journey to build a rooming house in Victoria as an interstate investor. In the past, I had never heard of a rooming house, so initially I was very sceptical. I attended many one-on-one meetings with different buyers' agents before choosing to build through Buy Builder Direct.",
      "I am very grateful to Patrick and his team for helping me achieve my dream build. Their work is exceptional. Patrick helped me find a property in a highly sought-after location in Victoria. As this was a knockdown rebuild and I had limited knowledge of the process, the drawing and planning team provided beautiful house plans that were approved by the council.",
      "Patrick obtained building quotes from different builders. He is very patient and has excellent communication skills. We can message him at any time of day, and he replies promptly.",
      "I was very impressed with the entire experience and found building a rooming house with Patrick and his team worthwhile and stress-free. He has a lovely team and connections for every type of work, making the whole process much easier. Thank you so much for your help!",
    ],
  },
  {
    name: "Anand Patel",
    location: "Custom Home Design",
    title: "Our Home, Delivered On Time",
    paragraphs: [
      "Thank you [Buy Builder Direct] for such an exceptional experience building our home and delivering the project on time. Special thanks to Patrick for his knowledge and expertise in guiding us throughout the build journey, couldn't have asked for anything better. Top notch service highly recommend others to use them for their next dream project :-)",
    ],
  },
  {
    name: "Sam Phan",
    location: "Custom Home Design",
    title: "Rooming Home Built in Seven Months",
    paragraphs: [
      "I've just completed an investment rooming home with [Buy Builder Direct], and the experience was smooth from start to finish. They guided me through each step, and construction was completed in seven months. A special thank you to Pat—your support was key to achieving such a high-quality result so quickly.",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section-hero"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
          borderBottom: "1px solid rgba(220,38,38,0.15)",
        }}
      >
        <div className="container-site text-center">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#DC2626" }}
          >
            Social Proof
          </p>

          <h1
            className="text-5xl font-bold md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "#FFFFFF",
            }}
          >
            Real Investors.{" "}
            <span style={{ color: "#DC2626" }}>Real Results.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
            style={{ color: "#A3A3A3" }}
          >
            The numbers are compelling. The stories behind them are even
            better.
          </p>
        </div>
      </section>

      {/* INVESTOR STATISTICS */}
      <section
        className="py-10"
        style={{
          background: "#141414",
          borderBottom: "1px solid rgba(220,38,38,0.15)",
        }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl font-bold md:text-5xl"
                  style={{
                    color: "#DC2626",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {stat.value}
                </p>

                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: "#A3A3A3" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" style={{ background: "#0A0A0A" }}>
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "#FFFFFF",
              }}
            >
              Investor Case Studies
            </h2>

            <p
              className="mx-auto mt-4 max-w-2xl leading-relaxed"
              style={{ color: "#A3A3A3" }}
            >
              Explore investor stories, project details, and reported savings.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <article
                key={cs.name}
                className="flex flex-col overflow-hidden rounded-xl"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(220,38,38,0.2)",
                }}
              >
                {/* CARD HEADER */}
                <div
                  className="flex items-center justify-between gap-4 px-8 py-6"
                  style={{
                    background: "#1C1C1C",
                    borderBottom: "1px solid rgba(220,38,38,0.15)",
                  }}
                >
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#FFFFFF",
                      }}
                    >
                      {cs.name}
                    </h3>

                    <p
                      className="mt-0.5 text-sm"
                      style={{ color: "#A3A3A3" }}
                    >
                      {cs.location}
                    </p>
                  </div>

                  <span
                    className="inline-block shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
                    style={{
                      background: "rgba(220,38,38,0.15)",
                      color: "#DC2626",
                    }}
                  >
                    {cs.investmentType}
                  </span>
                </div>

                {/* CASE STUDY DETAILS */}
                <div className="flex-1 space-y-5 p-8">
                  <div>
                    <p
                      className="mb-2 text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#DC2626" }}
                    >
                      The Situation
                    </p>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#A3A3A3" }}
                    >
                      {cs.situation}
                    </p>
                  </div>

                  <div>
                    <p
                      className="mb-2 text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#DC2626" }}
                    >
                      The Solution
                    </p>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#A3A3A3" }}
                    >
                      {cs.solution}
                    </p>
                  </div>

                  <div>
                    <p
                      className="mb-2 text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#DC2626" }}
                    >
                      The Outcome
                    </p>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#A3A3A3" }}
                    >
                      {cs.outcome}
                    </p>
                  </div>

                  <blockquote
                    className="rounded-lg px-6 py-5"
                    style={{
                      background: "rgba(220,38,38,0.06)",
                      border: "1px solid rgba(220,38,38,0.2)",
                      borderLeft: "3px solid #DC2626",
                    }}
                  >
                    <p
                      className="text-sm italic leading-relaxed"
                      style={{ color: "#FFFFFF" }}
                    >
                      &ldquo;{cs.quote}&rdquo;
                    </p>

                    <p
                      className="mt-3 text-xs font-semibold"
                      style={{ color: "#A3A3A3" }}
                    >
                      — {cs.name}, {cs.location}
                    </p>
                  </blockquote>
                </div>

                {/* SAVINGS CALLOUT */}
                <div
                  className="flex items-center justify-between gap-4 px-8 py-5"
                  style={{ background: "#DC2626" }}
                >
                  <p className="text-sm font-bold uppercase tracking-wide text-white">
                    Total Saving
                  </p>

                  <p
                    className="text-2xl font-bold text-white md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cs.saved} SAVED
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
          borderTop: "1px solid rgba(220,38,38,0.15)",
          borderBottom: "1px solid rgba(220,38,38,0.15)",
        }}
      >
        <div className="container-site">
          <div className="mb-12 text-center">
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#DC2626" }}
            >
              Client Experiences
            </p>

            <h2
              className="text-4xl font-bold md:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "#FFFFFF",
              }}
            >
              Hear More from Our Clients
            </h2>

            <p
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed"
              style={{ color: "#A3A3A3" }}
            >
              Real stories from clients who have experienced the Buy Builder
              Direct process.
            </p>

            <div
              className="mx-auto mt-6 h-1 w-20 rounded-full"
              style={{ background: "#DC2626" }}
            />
          </div>

          {/* Slider: the reviews are repeated 4 times and the track slides
              left by half its width, then loops seamlessly. */}
          <style>{`
            @keyframes reviews-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .reviews-track {
              animation: reviews-scroll 45s linear infinite;
            }
            .reviews-slider:hover .reviews-track,
            .reviews-slider:has(details[open]) .reviews-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .reviews-track { animation: none; }
            }
          `}</style>

          <div
            className="reviews-slider overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div className="reviews-track flex w-max">
            {[0, 1, 2, 3].flatMap((copy) =>
              clientTestimonials
              .filter((testimonial) => testimonial.name)
              .map((testimonial) => (
              <article
                key={`${copy}-${testimonial.name}`}
                aria-hidden={copy > 0 ? true : undefined}
                className="mr-6 flex w-[300px] shrink-0 flex-col rounded-xl p-6 md:w-[380px]"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(220,38,38,0.25)",
                  borderTop: "3px solid #DC2626",
                }}
              >
                <div
                  className="flex gap-1 text-lg"
                  style={{ color: "#DC2626" }}
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>

                <h3
                  className="mt-4 text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#FFFFFF",
                  }}
                >
                  {testimonial.title}
                </h3>

                <blockquote className="mt-3 flex-1 text-sm">
                  <p style={{ color: "#D4D4D4", lineHeight: 1.75 }}>
                    &ldquo;{testimonial.paragraphs[0]}
                    {testimonial.paragraphs.length === 1 && <>&rdquo;</>}
                  </p>

                  {testimonial.paragraphs.length > 1 && (
                    <details className="group mt-3">
                      <summary
                        className="cursor-pointer list-none text-sm font-semibold [&::-webkit-details-marker]:hidden"
                        style={{ color: "#DC2626" }}
                      >
                        <span className="group-open:hidden">Read full review →</span>
                        <span className="hidden group-open:inline">Show less ↑</span>
                      </summary>
                      {testimonial.paragraphs.slice(1).map((paragraph, index, rest) => (
                        <p
                          key={index}
                          className="mt-3"
                          style={{ color: "#D4D4D4", lineHeight: 1.75 }}
                        >
                          {paragraph}
                          {index === rest.length - 1 && <>&rdquo;</>}
                        </p>
                      ))}
                    </details>
                  )}
                </blockquote>

                <div
                  className="mt-6 flex items-center gap-3 border-t pt-5"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                    style={{
                      background: "rgba(220,38,38,0.15)",
                      color: "#FFFFFF",
                    }}
                    aria-hidden="true"
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>

                    <p className="text-sm" style={{ color: "#A3A3A3" }}>
                      {testimonial.location}
                    </p>

                    <p
                      className="mt-0.5 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#DC2626" }}
                    >
                      Buy Builder Direct Client
                    </p>
                  </div>
                </div>
              </article>
              ))
            )}
            </div>
          </div>
        </div>
      </section>

      {/* YOUR STORY NEXT CTA */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #1C1C1C 0%, #141414 100%)",
          borderTop: "1px solid rgba(220,38,38,0.15)",
        }}
      >
        <div className="container-site text-center">
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "#FFFFFF",
            }}
          >
            Your story could be next.
          </h2>

          <p
            className="mx-auto mb-8 max-w-xl text-lg"
            style={{ color: "#A3A3A3" }}
          >
            Explore your options for building direct with Australian builders.
            Your free savings assessment takes less than 5 minutes.
          </p>

          <LeadLink href="/contact" className="btn-primary">
            Get My Free Savings Assessment
          </LeadLink>
        </div>
      </section>
    </>
  );
}
