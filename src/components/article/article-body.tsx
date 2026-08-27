import Image from "next/image";
import type { ContentBlock } from "@/types/article";
import { EmergencyWarning, MedicalCallout } from "@/components/article/medical-callout";
import { withBasePath } from "@/config/site";

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "heading") return block.level === 2 ? <h2 id={block.id}>{block.text}</h2> : <h3 id={block.id}>{block.text}</h3>;
  if (block.type === "paragraph") return <p>{block.text}</p>;
  if (block.type === "list") {
    const List = block.style === "ordered" ? "ol" : "ul";
    return <List>{block.items.map((item) => <li key={item}>{item}</li>)}</List>;
  }
  if (block.type === "image") return <figure className="article-inline-image"><Image src={withBasePath(block.src)} alt={block.alt} width={block.width} height={block.height} sizes="(max-width: 900px) 100vw, 760px" /></figure>;
  if (block.type === "table") return <div className="table-scroll" role="region" aria-label={block.caption ?? "Article information table"} tabIndex={0}><table>{block.caption ? <caption>{block.caption}</caption> : null}<thead><tr>{block.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{block.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
  if (block.type === "medical-callout") return <MedicalCallout title={block.title} text={block.text} tone={block.tone} />;
  return <EmergencyWarning title={block.title} text={block.text} />;
}

export function ArticleBody({ blocks }: { blocks: readonly ContentBlock[] }) {
  return <div className="article-prose">{blocks.map((block, index) => <Block block={block} key={block.type === "heading" ? block.id : `${block.type}-${index}`} />)}</div>;
}
