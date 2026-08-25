"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

export default function LeadLink({ onClick, ...props }: ComponentProps<typeof Link>) {
 return <Link {...props} onClick={onClick} />;
}
