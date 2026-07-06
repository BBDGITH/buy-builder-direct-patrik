import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import ImageSlider from "@/components/shared/ImageSlider";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), "public", "images", "projects");
  if (!fs.existsSync(projectsDir)) return [];

  const dirs = fs.readdirSync(projectsDir, { withFileTypes: true });
  return dirs
    .filter((dir) => dir.isDirectory())
    .map((dir) => ({
      project: dir.name,
    }));
}

export async function generateMetadata(props: { params: Promise<{ project: string }> }): Promise<Metadata> {
  const params = await props.params;
  const projectName = params.project
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${projectName} | Buy Builder Direct`,
    description: `View the gallery for our ${projectName} project.`,
  };
}

export default async function ProjectGalleryPage(props: { params: Promise<{ project: string }> }) {
  const params = await props.params;
  const projectSlug = params.project;
  const projDir = path.join(process.cwd(), "public", "images", "projects", projectSlug);

  if (!fs.existsSync(projDir)) {
    notFound();
  }

  const files = fs.readdirSync(projDir);
  const images = files
    .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i))
    .sort()
    .map((file) => `/images/projects/${projectSlug}/${file}`);

  const projectName = projectSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 text-[#FFFFFF] flex flex-col">
      <div className="container-site flex-grow">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-8" style={{ fontFamily: "var(--font-display)" }}>
            {projectName}
          </h1>
          <ImageSlider images={images} />
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/gallery" className="inline-flex items-center text-[#DC2626] hover:text-[#B91C1C] transition-colors font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
