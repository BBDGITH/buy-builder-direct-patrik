/**
 * Rate limiting for contact API.
 * Uses Upstash Redis when UPSTASH_REDIS_REST_URL + TOKEN are set (works on Vercel).
 * Falls back to in-memory Map for local/dev (not durable across serverless instances).
 */

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

type MemoryEntry = { count: number; resetAt: number };
const memoryStore = new Map<string, MemoryEntry>();

function checkMemory(key: string): boolean {
  const now = Date.now();
  const entry = memoryStore.get(key);
  if (!entry || now > entry.resetAt) {
    memoryStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

async function checkUpstash(key: string): Promise<boolean | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const redisKey = `rl:${key}`;
  const windowSec = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);

  try {
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", redisKey],
        ["EXPIRE", redisKey, windowSec, "NX"],
      ]),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Upstash rate limit error:", res.status);
      return null;
    }

    const data = (await res.json()) as { result: number }[];
    const count = data?.[0]?.result ?? 0;
    return count <= RATE_LIMIT_MAX;
  } catch (err) {
    console.error("Upstash rate limit failed:", err);
    return null;
  }
}

/** Returns true if the request is allowed. */
export async function checkRateLimit(key: string): Promise<boolean> {
  const upstash = await checkUpstash(key);
  if (upstash !== null) return upstash;
  return checkMemory(key);
}
