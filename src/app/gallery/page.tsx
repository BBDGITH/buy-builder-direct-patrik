import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

// Metadata
export const metadata = {
  title: "Project Gallery | Buy Builder Direct",
  description: "View our portfolio of builder-direct investment properties across Australia.",
};

interface ProjectCategory {
  name: string;
  slug: string;
  coverImage: string;
}

export default function GalleryPage() {
  let categories: ProjectCategory[] = [];
  
  try {
    const projectsDir = path.join(process.cwd(), "public", "images", "projects");
    if (fs.existsSync(projectsDir)) {
      const dirs = fs.readdirSync(projectsDir, { withFileTypes: true });
      for (const dir of dirs) {
        if (dir.isDirectory()) {
          const dirPath = path.join(projectsDir, dir.name);
          const files = fs.readdirSync(dirPath);
          const images = files
            .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i))
            // Exclude Civic Homes / branding logo slides (tiny watermark files)
            .filter((file) => {
              const full = path.join(dirPath, file);
              try {
                return fs.statSync(full).size > 40_000;
              } catch {
                return true;
              }
            })
            .sort(); // Sorting to ensure we pick the first one consistently
            
          if (images.length > 0) {
            // Convert slug to Name (e.g. deer-park -> Deer Park)
            const name = dir.name
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
              
            categories.push({
              name,
              slug: dir.name,
              coverImage: `/images/projects/${dir.name}/${images[0]}`
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Error reading gallery directories", error);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 flex flex-col">
      <div className="container-site flex-grow">
        <div className="mb-12 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Project Gallery
          </h1>
          <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto">
            Browse our recent builds and discover the quality of direct-to-builder property investments.
          </p>
          <div
            className="mx-auto mt-6 h-1 w-24 rounded-full"
            style={{ background: "#DC2626" }}
          />
        </div>

        {categories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#A3A3A3]">No projects found. Check back soon.</p>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/gallery/${category.slug}`}>
              <div 
                className="group relative flex flex-col bg-[#1A1A1A] rounded-xl overflow-hidden cursor-pointer h-full border border-white/5 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.coverImage}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                {/* Title Container */}
                <div className="p-4 bg-[#4B4B4B] group-hover:bg-[#5C5C5C] transition-colors duration-300 flex-grow flex items-center">
                  <h2 className="text-sm md:text-base font-semibold text-white tracking-wide">
                    9x9 Rooming House - {category.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
