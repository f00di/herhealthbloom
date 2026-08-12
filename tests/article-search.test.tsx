import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ArticleSearch } from "@/components/search/article-search";
import type { ArticleSummary } from "@/types/article";

const articles: ArticleSummary[] = [
  { slug: "abdominal-pain", title: "Abdominal Pain During Pregnancy", excerpt: "Source pending", category: "pregnancy", keywords: ["pain"], contentStatus: "source-missing" },
  { slug: "menstrual-guide", title: "A Menstrual Guide", excerpt: "Cycle education", category: "menstrual-health", keywords: ["cycle"], contentStatus: "complete" },
];

describe("ArticleSearch", () => {
  it("searches, filters, announces empty state, and clears", async () => {
    const user = userEvent.setup();
    render(<ArticleSearch articles={articles} />);
    expect(screen.getByText("2 articles found")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Search articles"), "menstrual");
    expect(screen.getByText("1 article found")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "A Menstrual Guide" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Pregnancy" }));
    expect(screen.getByRole("heading", { name: "No articles found" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Clear search and filters" }));
    expect(screen.getByText("2 articles found")).toBeInTheDocument();
  });
  it("supports a valid initial topic", () => {
    render(<ArticleSearch articles={articles} initialTopic="pregnancy" />);
    expect(screen.getByText("1 article found")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Pregnancy" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.change(screen.getByLabelText("Search articles"), { target: { value: "pain" } });
    expect(screen.getByRole("link", { name: "Abdominal Pain During Pregnancy" })).toBeInTheDocument();
  });
});
