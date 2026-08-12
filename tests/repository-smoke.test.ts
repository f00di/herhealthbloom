import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { primaryNavigation } from "@/config/site";

const root = process.cwd();
const routes = ["src/app/page.tsx", "src/app/articles/page.tsx", "src/app/about/page.tsx", "src/app/faq/page.tsx", "src/app/contact/page.tsx", "src/app/privacy/page.tsx", "src/app/not-found.tsx", "src/app/robots.ts", "src/app/sitemap.ts"];

describe("route smoke inventory", () => {
  it("has exactly six primary navigation destinations", () => {
    expect(primaryNavigation).toHaveLength(6);
    expect(primaryNavigation.map((item) => item.href)).toEqual(["/", "/articles", "/about", "/faq", "/contact", "/privacy"]);
  });
  it("contains every required route and metadata route", async () => {
    await expect(Promise.all(routes.map((route) => access(path.join(root, route))))).resolves.toBeDefined();
  });
  it("keeps the custom 404 and both article slugs discoverable", async () => {
    const notFound = await readFile(path.join(root, "src/app/not-found.tsx"), "utf8");
    expect(notFound).toContain("404 error");
    for (const slug of ["abdominal-pain-during-pregnancy", "healthy-eating-during-pregnancy"]) await expect(access(path.join(root, "content/articles", `${slug}.json`))).resolves.toBeUndefined();
  });
});
