export const topicSlugs = [
  "pregnancy",
  "menstrual-health",
  "fertility",
  "menopause",
  "general-womens-health",
  "breast-health",
] as const;

export type TopicSlug = (typeof topicSlugs)[number];

export type HealthTopic = {
  slug: TopicSlug;
  title: string;
  description: string;
  icon: "pregnancy" | "cycle" | "seedling" | "sun" | "heart" | "ribbon";
};

export const healthTopics: readonly HealthTopic[] = [
  { slug: "pregnancy", title: "Pregnancy", description: "Educational information for pregnancy and maternal health.", icon: "pregnancy" },
  { slug: "menstrual-health", title: "Menstrual Health", description: "Clear information about menstrual health and common concerns.", icon: "cycle" },
  { slug: "fertility", title: "Fertility", description: "Evidence-aware education about fertility and reproductive health.", icon: "seedling" },
  { slug: "menopause", title: "Menopause", description: "Patient-friendly information for the menopause transition.", icon: "sun" },
  { slug: "general-womens-health", title: "General Women's Health", description: "Preventive and general gynecological health education.", icon: "heart" },
  { slug: "breast-health", title: "Breast Health", description: "Understandable information supporting breast health awareness.", icon: "ribbon" },
] as const;

export function getTopic(slug: string) {
  return healthTopics.find((topic) => topic.slug === slug);
}
