import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params: { slug } }) {
  const selectedNews = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img
            src={`/images/news/${selectedNews.image}`}
            alt={selectedNews.title}
          />
        </Link>
        <h1>{selectedNews.title}</h1>
        <time dateTime={selectedNews.date}>{selectedNews.date}</time>
      </header>
      <p>{selectedNews.content}</p>
    </article>
  );
}