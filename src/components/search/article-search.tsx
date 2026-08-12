"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { ArticleGrid } from "@/components/article/article-card";
import { SearchIcon } from "@/components/ui/icons";
import { healthTopics } from "@/config/topics";
import { filterArticles } from "@/lib/search";
import type { ArticleSummary } from "@/types/article";

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function readTopicFromLocation() {
  return new URLSearchParams(window.location.search).get("topic") ?? "";
}

export function ArticleSearch({ articles }: { articles: readonly ArticleSummary[] }) {
  const [query, setQuery] = useState("");
  const requestedTopic = useSyncExternalStore(subscribeToLocation, readTopicFromLocation, () => "");
  const urlTopic = healthTopics.some((item) => item.slug === requestedTopic) ? requestedTopic : "";
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const topic = selectedTopic ?? urlTopic;
  const results = useMemo(() => filterArticles(articles, query, topic || undefined), [articles, query, topic]);
  const clear = () => { setQuery(""); setSelectedTopic(""); };

  return <div className="article-search">
    <div className="search-panel">
      <label htmlFor="article-search">Search articles</label>
      <div className="search-input-wrap"><SearchIcon /><input id="article-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, topic, or keyword" autoComplete="off" /></div>
      <fieldset className="filter-group"><legend>Filter by health topic</legend><div className="filter-list">
        <button type="button" className={topic === "" ? "filter-active" : ""} aria-pressed={topic === ""} onClick={() => setSelectedTopic("")}>All topics</button>
        {healthTopics.map((item) => <button type="button" key={item.slug} className={topic === item.slug ? "filter-active" : ""} aria-pressed={topic === item.slug} onClick={() => setSelectedTopic(item.slug)}>{item.title}</button>)}
      </div></fieldset>
    </div>
    <p className="result-count" aria-live="polite">{results.length} {results.length === 1 ? "article" : "articles"} found</p>
    {results.length ? <ArticleGrid articles={results} /> : <div className="empty-state"><h2>No articles found</h2><p>Try a different word or remove the selected topic.</p><button type="button" className="button button-secondary" onClick={clear}>Clear search and filters</button></div>}
  </div>;
}
