import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { validateArticle } from "@/lib/article-validation";

describe("article content", () => {
  it("discovers and validates both requested article records", async () => {
    const directory = path.join(process.cwd(), "content", "articles");
    const files = (await readdir(directory)).filter((file) => file.endsWith(".json"));
    const records = await Promise.all(files.map(async (file) => validateArticle(JSON.parse(await readFile(path.join(directory, file), "utf8")) as unknown, file)));
    expect(records.map((item) => item.slug).sort()).toEqual(["abdominal-pain-during-pregnancy", "healthy-eating-during-pregnancy"]);
    expect(records.every((item) => item.contentStatus === "complete")).toBe(true);

    const abdominalPain = records.find((item) => item.slug === "abdominal-pain-during-pregnancy");
    const healthyEating = records.find((item) => item.slug === "healthy-eating-during-pregnancy");
    expect(abdominalPain?.faq).toHaveLength(7);
    expect(abdominalPain?.references).toHaveLength(13);
    expect(abdominalPain?.body.filter((block) => block.type === "image")).toHaveLength(8);
    expect(healthyEating?.faq).toHaveLength(6);
    expect(healthyEating?.references).toHaveLength(8);
    expect(healthyEating?.body.filter((block) => block.type === "image")).toHaveLength(25);
    expect(healthyEating?.body.some((block) => block.type === "heading" && block.id === "foods-to-limit-or-avoid")).toBe(true);
  });
  it("rejects an unknown category", () => {
    expect(() => validateArticle({ slug: "bad", category: "unknown" }, "bad.json")).toThrow();
  });
});
