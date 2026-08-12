import { topicSlugs } from "@/config/topics";
import type { Article, ContentBlock, Reference } from "@/types/article";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredString(record: Record<string, unknown>, key: string, file: string): string {
  const value = record[key];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${file}: ${key} must be a non-empty string`);
  }
  return value.trim();
}

function stringArray(value: unknown, key: string, file: string): string[] {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string" && item.trim())) {
    throw new Error(`${file}: ${key} must be an array of non-empty strings`);
  }
  return value.map((item) => item.trim());
}

function validateUrl(url: string, file: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`${file}: reference URL is invalid`);
  }
  if (parsed.protocol !== "https:") throw new Error(`${file}: reference URLs must use HTTPS`);
}

function parseBlock(value: unknown, file: string, index: number): ContentBlock {
  if (!isRecord(value)) throw new Error(`${file}: body[${index}] must be an object`);
  const type = requiredString(value, "type", file);
  if (type === "heading") {
    const level = value.level;
    const id = requiredString(value, "id", file);
    if ((level !== 2 && level !== 3) || !slugPattern.test(id)) throw new Error(`${file}: invalid heading at body[${index}]`);
    return { type, level, id, text: requiredString(value, "text", file) };
  }
  if (type === "paragraph") return { type, text: requiredString(value, "text", file) };
  if (type === "list") {
    const style = value.style;
    if (style !== "ordered" && style !== "unordered") throw new Error(`${file}: invalid list style`);
    return { type, style, items: stringArray(value.items, "items", file) };
  }
  if (type === "table") {
    const headers = stringArray(value.headers, "headers", file);
    if (!Array.isArray(value.rows) || !value.rows.every((row) => Array.isArray(row) && row.length === headers.length && row.every((cell) => typeof cell === "string"))) {
      throw new Error(`${file}: invalid table rows`);
    }
    return { type, headers, rows: value.rows as string[][], ...(typeof value.caption === "string" ? { caption: value.caption } : {}) };
  }
  if (type === "medical-callout") {
    const tone = value.tone;
    if (tone !== undefined && tone !== "note" && tone !== "important") throw new Error(`${file}: invalid callout tone`);
    return { type, title: requiredString(value, "title", file), text: requiredString(value, "text", file), ...(tone ? { tone } : {}) };
  }
  if (type === "emergency-warning") return { type, title: requiredString(value, "title", file), text: requiredString(value, "text", file) };
  throw new Error(`${file}: unknown body block type “${type}”`);
}

export function validateArticle(value: unknown, file: string): Article {
  if (!isRecord(value)) throw new Error(`${file}: article must be an object`);
  const slug = requiredString(value, "slug", file);
  if (!slugPattern.test(slug)) throw new Error(`${file}: invalid slug`);
  const category = requiredString(value, "category", file);
  if (!topicSlugs.includes(category as (typeof topicSlugs)[number])) throw new Error(`${file}: unknown category`);
  const contentStatus = requiredString(value, "contentStatus", file);
  if (!["complete", "source-missing", "medical-review-required"].includes(contentStatus)) throw new Error(`${file}: invalid contentStatus`);
  for (const key of ["publishedAt", "updatedAt"] as const) {
    if (value[key] !== undefined && (typeof value[key] !== "string" || !datePattern.test(value[key]))) throw new Error(`${file}: ${key} must be YYYY-MM-DD`);
  }
  if (!Array.isArray(value.body)) throw new Error(`${file}: body must be an array`);
  const body = value.body.map((block, index) => parseBlock(block, file, index));
  const headingIds = body.filter((block) => block.type === "heading").map((block) => block.id);
  if (new Set(headingIds).size !== headingIds.length) throw new Error(`${file}: heading IDs must be unique`);
  if (!Array.isArray(value.faq) || !value.faq.every(isRecord)) throw new Error(`${file}: faq must be an array`);
  const faq = value.faq.map((item) => ({
    question: requiredString(item, "question", file),
    answer: requiredString(item, "answer", file),
    ...(item.items !== undefined ? { items: stringArray(item.items, "faq.items", file) } : {}),
    ...(typeof item.closing === "string" && item.closing.trim() ? { closing: item.closing.trim() } : {}),
  }));
  if (!Array.isArray(value.references) || !value.references.every(isRecord)) throw new Error(`${file}: references must be an array`);
  const references: Reference[] = value.references.map((item) => {
    const reference: Reference = { label: requiredString(item, "label", file) };
    if (typeof item.url === "string") { validateUrl(item.url, file); reference.url = item.url; }
    if (typeof item.note === "string" && item.note.trim()) reference.note = item.note.trim();
    return reference;
  });
  let featuredImage: Article["featuredImage"];
  if (value.featuredImage !== undefined) {
    if (!isRecord(value.featuredImage)) throw new Error(`${file}: featuredImage must be an object`);
    const src = requiredString(value.featuredImage, "src", file);
    if (!src.startsWith("/images/")) throw new Error(`${file}: featured images must be local /images paths`);
    const width = value.featuredImage.width;
    const height = value.featuredImage.height;
    if (typeof width !== "number" || width <= 0 || typeof height !== "number" || height <= 0) throw new Error(`${file}: image dimensions must be positive numbers`);
    featuredImage = { src, alt: requiredString(value.featuredImage, "alt", file), width, height };
  }
  return {
    slug,
    title: requiredString(value, "title", file),
    metaTitle: requiredString(value, "metaTitle", file),
    metaDescription: requiredString(value, "metaDescription", file),
    excerpt: requiredString(value, "excerpt", file),
    author: requiredString(value, "author", file),
    authorCredentials: requiredString(value, "authorCredentials", file),
    category: category as Article["category"],
    keywords: stringArray(value.keywords, "keywords", file),
    ...(featuredImage ? { featuredImage } : {}),
    ...(typeof value.publishedAt === "string" ? { publishedAt: value.publishedAt } : {}),
    ...(typeof value.updatedAt === "string" ? { updatedAt: value.updatedAt } : {}),
    contentStatus: contentStatus as Article["contentStatus"],
    body,
    faq,
    references,
    relatedArticles: stringArray(value.relatedArticles, "relatedArticles", file),
  };
}
