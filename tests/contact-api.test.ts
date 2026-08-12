import { beforeEach, describe, expect, it } from "vitest";
import { POST } from "@/app/api/contact/route";
import { resetContactRateLimitForTests } from "@/lib/contact-rate-limit";

function request(body: string, headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body,
  });
}

describe("contact API", () => {
  beforeEach(resetContactRateLimitForTests);

  it("rejects malformed and oversized JSON on the server", async () => {
    expect((await POST(request("not-json"))).status).toBe(400);
    expect((await POST(request(JSON.stringify({ extra: "x".repeat(8_100) })))).status).toBe(413);
  });

  it("returns an honest unavailable state when delivery is not configured", async () => {
    const response = await POST(request(JSON.stringify({
      name: "QA Reader",
      email: "reader@example.com",
      message: "A general website question.",
      website: "",
      startedAt: Date.now() - 5_000,
    })));
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({ message: expect.stringContaining("not configured") });
  });
});
