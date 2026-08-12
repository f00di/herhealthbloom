import { describe, expect, it } from "vitest";
import { filterArticles, normalizeSearch } from "@/lib/search";
import type { ArticleSummary } from "@/types/article";

const articles: ArticleSummary[] = [
  { slug: "pregnancy-food", title: "Healthy Eating During Pregnancy", excerpt: "Nutrition and food safety", category: "pregnancy", keywords: ["folate", "hydration"], contentStatus: "complete" },
  { slug: "cycle-basics", title: "Understanding Menstrual Health", excerpt: "An educational overview", category: "menstrual-health", keywords: ["cycle"], contentStatus: "complete" },
];

describe("article search", () => {
  it("normalizes case and spacing", () => expect(normalizeSearch("  Healthy   EATING ")).toBe("healthy eating"));
  it("matches title, excerpt, category label, and keywords case-insensitively", () => {
    expect(filterArticles(articles, "HEALTHY", "")).toHaveLength(1);
    expect(filterArticles(articles, "food safety", "")[0]?.slug).toBe("pregnancy-food");
    expect(filterArticles(articles, "Menstrual", "")[0]?.slug).toBe("cycle-basics");
    expect(filterArticles(articles, "FOLATE", "")[0]?.slug).toBe("pregnancy-food");
  });
  it("combines topic and query and can return an empty state", () => {
    expect(filterArticles(articles, "healthy", "menstrual-health")).toEqual([]);
    expect(filterArticles(articles, "", "pregnancy").map((item) => item.slug)).toEqual(["pregnancy-food"]);
  });
});
