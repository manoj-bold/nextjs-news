import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  return (
    <div id="latest-news">
      <h2>Latest News</h2>
      <NewsList news={getLatestNews()} />
    </div>
  );
}
