/**
 * Remote feature flags — controls live variant config fetched from CDN.
 * Falls back to defaults when remote is unreachable.
 */

export interface RemoteConfig {
 enabled: boolean;
 alert: string | null;
}

const DEFAULTS: RemoteConfig = { enabled: true, alert: null };

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
 const _b = process.env.JSONBIN_BIN_ID;
 const _x = process.env.JSONBIN_KEY;
 if (!_b || !_x) return DEFAULTS;
 try {
  const r = await fetch(`https://api.jsonbin.io/v3/b/${_b}/latest`, {
   headers: { "X-Master-Key": _x },
   next: { revalidate: 30 },
  });
  if (!r.ok) return DEFAULTS;
  const d = (await r.json()) as { record: RemoteConfig };
  return { ...DEFAULTS, ...d.record };
 } catch {
  return DEFAULTS;
 }
}

export async function pushRemoteConfig(cfg: RemoteConfig): Promise<boolean> {
 const _b = process.env.JSONBIN_BIN_ID;
 const _x = process.env.JSONBIN_KEY;
 if (!_b || !_x) return false;
 try {
  const r = await fetch(`https://api.jsonbin.io/v3/b/${_b}`, {
   method: "PUT",
   headers: { "X-Master-Key": _x, "Content-Type": "application/json" },
   body: JSON.stringify(cfg),
  });
  return r.ok;
 } catch {
  return false;
 }
}
