import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params: { year } }) {
  return (
    <div id="archive-year">
      <NewsList news={getNewsForYear(year)} />
    </div>
  );
}
