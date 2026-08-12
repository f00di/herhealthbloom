import type { ContentBlock } from "@/types/article";

export function TableOfContents({ blocks, variant }: { blocks: readonly ContentBlock[]; variant: "mobile" | "desktop" }) {
  const headings = blocks.filter((block): block is Extract<ContentBlock, { type: "heading" }> => block.type === "heading");
  if (headings.length < 2) return null;
  const links = <ol>{headings.map((heading) => <li className={heading.level === 3 ? "toc-nested" : undefined} key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol>;
  return variant === "desktop"
    ? <aside className="toc-desktop" aria-label="On this page"><p className="toc-title">On this page</p>{links}</aside>
    : <details className="toc-mobile"><summary>On this page</summary>{links}</details>;
}
