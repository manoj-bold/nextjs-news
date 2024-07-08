import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params: { filter } }) {
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {getAvailableNewsYears().map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {filter?.[0] && <NewsList news={getNewsForYear(filter[0])} />}
    </>
  );
}
