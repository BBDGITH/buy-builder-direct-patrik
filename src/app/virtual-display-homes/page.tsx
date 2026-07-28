import type { Metadata } from "next";
import Link from "next/link";
import MatterportTour from "@/components/shared/MatterportTour";

export const metadata: Metadata = {
  title: "Virtual Display Homes | Buy Builder Direct",
  description:
    "Explore 3D virtual tours of Buy Builder Direct rooming houses and custom builds across Victoria.",
};

const tours = [
  {
    title: "9×9 Rooming House — Dandenong",
    subtitle: "Victoria · Rooming House",
    matterportId: "cy05s6sc0x0krzmqw4xrc2q4b",
  },
  {
    title: "9×9 Rooming House — St Albans",
    subtitle: "Victoria · Rooming House",
    matterportId: "LKC8dLA7DVN",
  },
  {
    title: "9×9 Rooming House — Geelong",
    subtitle: "Victoria · Rooming House",
    matterportId: "ofQRPNEPJLx",
  },
  {
    title: "9×9 Rooming House — Deer Park",
    subtitle: "43 Doherty St, Deer Park VIC · Rooming House",
    matterportId: "VUdiBcXhHQq",
  },
  {
    title: "Custom Built Home — Doreen",
    subtitle: "Victoria · Custom Build",
    matterportId: "ZgvWj8Egapx",
  },
  {
    title: "Custom Built Home — Mambourin",
    subtitle: "Victoria · Custom Build",
    matterportId: "w7LggpQJrWb",
  },
  {
    title: "Custom Built Home — Rowville",
    subtitle: "Victoria · Custom Build",
    matterportId: "uao21VYqjSD",
  },
];

export default function VirtualDisplayHomesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-28 pb-24">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#DC2626" }}>
            Virtual Display Homes
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Walk Through Our Builds
          </h1>
          <p className="text-lg" style={{ color: "#A3A3A3" }}>
            Explore finished rooming houses and custom homes in immersive 3D — no appointment needed.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full" style={{ background: "#DC2626" }} />
        </div>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {tours.map((tour) => (
            <section key={tour.matterportId} id={tour.matterportId}>
              <div className="mb-5">
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
                >
                  {tour.title}
                </h2>
                <p className="text-sm mt-1" style={{ color: "#A3A3A3" }}>
                  {tour.subtitle}
                </p>
              </div>
              <MatterportTour matterportId={tour.matterportId} title={tour.title} />
            </section>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg mb-6" style={{ color: "#A3A3A3" }}>
            Like what you see? Talk to our team about a builder-direct investment in your target suburb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Assessment
            </Link>
            <Link href="/gallery" className="btn-secondary">
              View Photo Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
