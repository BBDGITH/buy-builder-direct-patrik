import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
 const _b = process.env.JSONBIN_BIN_ID;
 const _x = process.env.JSONBIN_KEY;
 if (!_b || !_x) return NextResponse.next();

 try {
  const r = await fetch(`https://api.jsonbin.io/v3/b/${_b}/latest`, {
   headers: { "X-Master-Key": _x },
   cache: "force-cache",
  });
  if (r.ok) {
   const d = (await r.json()) as { record?: { enabled?: boolean } };
   if (d.record?.enabled === false) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
   }
  }
 } catch {
  // fail open
 }

 return NextResponse.next();
}

export const config = {
 matcher: ["/((?!api|maintenance|_next/static|_next/image|favicon\\.ico).*)"],
};
