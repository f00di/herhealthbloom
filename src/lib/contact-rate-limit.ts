type Entry = { count: number; resetAt: number };
const requests = new Map<string, Entry>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

export function checkContactRateLimit(key: string, now = Date.now()): { allowed: boolean; retryAfter: number } {
  const existing = requests.get(key);
  if (!existing || now >= existing.resetAt) {
    requests.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (existing.count >= MAX_REQUESTS) return { allowed: false, retryAfter: Math.ceil((existing.resetAt - now) / 1000) };
  existing.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export function resetContactRateLimitForTests(): void { requests.clear(); }
