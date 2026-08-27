import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/config/site";
import type { HealthTopic } from "@/config/topics";

const topicIcons: Record<HealthTopic["icon"], string> = {
  pregnancy: "/images/topics/image1.png",
  cycle: "/images/topics/image2.png",
  seedling: "/images/topics/image3.png",
  sun: "/images/topics/image7.png",
  heart: "/images/topics/image8.png",
  ribbon: "/images/topics/image9.png",
};

export function HealthTopicCard({ topic }: { topic: HealthTopic }) {
  return (
    <Link className="topic-card" href={`/articles?topic=${topic.slug}`}>
      <span className="topic-icon"><Image src={withBasePath(topicIcons[topic.icon])} alt="" width={76} height={76} /></span>
      <span><strong>{topic.title}</strong></span>
    </Link>
  );
}
