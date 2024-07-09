import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const news = await getLatestNews();
  return (
    <div id="latest-news">
      <h2>Latest News</h2>
      <NewsList news={news} />
    </div>
  );
}
