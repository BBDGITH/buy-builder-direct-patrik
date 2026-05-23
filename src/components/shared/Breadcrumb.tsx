import Link from "next/link";

export interface BreadcrumbItem {
 label: string;
 href?: string;
}

interface BreadcrumbProps {
 items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
 return (
 <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
 {items.map((item, index) => {
 const isLast = index === items.length - 1;
 return (
 <span key={index} className="flex items-center gap-2">
 {index > 0 && (
 <span style={{ color: "#666666" }} aria-hidden="true">
 /
 </span>
 )}
 {item.href && !isLast ? (
 <Link
 href={item.href}
 className="transition-colors hover:text-white"
 style={{ color: "#A3A3A3" }}
 >
 {item.label}
 </Link>
 ) : (
 <span
 style={{ color: isLast ? "#DC2626" : "#A3A3A3" }}
 aria-current={isLast ? "page" : undefined}
 >
 {item.label}
 </span>
 )}
 </span>
 );
 })}
 </nav>
 );
}
