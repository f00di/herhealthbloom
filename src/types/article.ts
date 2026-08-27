import type { TopicSlug } from "@/config/topics";

export type ArticleStatus = "complete" | "source-missing" | "medical-review-required";

export type FeaturedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style: "ordered" | "unordered"; items: string[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "medical-callout"; title: string; text: string; tone?: "note" | "important" }
  | { type: "emergency-warning"; title: string; text: string };

export type FAQItem = { question: string; answer: string; items?: string[]; closing?: string };
export type Reference = { label: string; url?: string; note?: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  authorCredentials: string;
  category: TopicSlug;
  keywords: string[];
  featuredImage?: FeaturedImage;
  publishedAt?: string;
  updatedAt?: string;
  contentStatus: ArticleStatus;
  body: ContentBlock[];
  faq: FAQItem[];
  references: Reference[];
  relatedArticles: string[];
};

export type ArticleSummary = Pick<
  Article,
  | "slug"
  | "title"
  | "excerpt"
  | "category"
  | "keywords"
  | "featuredImage"
  | "publishedAt"
  | "updatedAt"
  | "contentStatus"
>;
