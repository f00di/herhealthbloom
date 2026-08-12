import Link from "next/link";
import { TopicIcon } from "@/components/ui/icons";
import type { HealthTopic } from "@/config/topics";

export function HealthTopicCard({ topic }: { topic: HealthTopic }) {
  return (
    <Link className="topic-card" href={`/articles?topic=${topic.slug}`}>
      <span className="topic-icon"><TopicIcon name={topic.icon} /></span>
      <span><strong>{topic.title}</strong><small>{topic.description}</small></span>
    </Link>
  );
}
