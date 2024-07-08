import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params: { slug } }) {
  const selectedNews = DUMMY_NEWS.find((news) => news.slug === slug);

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
