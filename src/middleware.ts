import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Maintenance-mode JSONBin check removed — was calling JSONBin on every request
// and exhausting the free quota via crawler traffic. Re-add when needed.
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}
