import type { Article } from "@/types";
import { NewsCard } from "@/components/cards/NewsCard";

export function BlogCard({ item }: { item: Article }) {
  return <NewsCard item={item} hrefBase="/blog" />;
}
