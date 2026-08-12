import { beforeEach, describe, expect, it } from "vitest";
import { checkContactRateLimit, resetContactRateLimitForTests } from "@/lib/contact-rate-limit";

describe("contact rate limiting", () => {
  beforeEach(resetContactRateLimitForTests);
  it("allows five attempts and rejects the sixth in a window", () => {
    for (let index = 0; index < 5; index += 1) expect(checkContactRateLimit("test", 1_000).allowed).toBe(true);
    expect(checkContactRateLimit("test", 1_000)).toMatchObject({ allowed: false });
  });
  it("resets after the window", () => {
    for (let index = 0; index < 6; index += 1) checkContactRateLimit("test", 1_000);
    expect(checkContactRateLimit("test", 16 * 60 * 1_000).allowed).toBe(true);
  });
});
