import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params: { slug } }) {
  const selectedNews = await getNewsItem(slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <div id="image">
      <img
        src={`/images/news/${selectedNews.image}`}
        alt={selectedNews.title}
      />
    </div>
  );
}
