"use client";

import { useState } from "react";

type MatterportTourProps = {
  matterportId: string;
  title: string;
};

export default function MatterportTour({ matterportId, title }: MatterportTourProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{
        aspectRatio: "16 / 9",
        border: "1px solid rgba(220,38,38,0.25)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
        background: "#111111",
      }}
    >
      {active ? (
        <iframe
          src={`https://my.matterport.com/show/?m=${matterportId}&play=1`}
          title={`3D virtual tour — ${title}`}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen; xr-spatial-tracking"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 w-full h-full cursor-pointer transition-colors"
          style={{ background: "linear-gradient(160deg, #1a1a1a 0%, #0A0A0A 100%)" }}
          aria-label={`Play 3D tour — ${title}`}
        >
          <span
            className="flex items-center justify-center w-20 h-20 rounded-full transition-transform group-hover:scale-110"
            style={{
              background: "#DC2626",
              boxShadow: "0 8px 32px rgba(220,38,38,0.45)",
            }}
          >
            <svg
              className="w-9 h-9 ml-1"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#A3A3A3" }}>
            Click to load 3D tour
          </span>
        </button>
      )}
    </div>
  );
}
