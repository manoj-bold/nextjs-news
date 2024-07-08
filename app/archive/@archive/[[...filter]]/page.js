import NewsList from "@/components/news-list";
import Link from "next/link";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news";

export default function FilteredNewsPage({ params: { filter } }) {
  const year = filter?.[0];
  const month = filter?.[1];

  let links, news;

  if (!year) {
    const years = getAvailableNewsYears();
    links = years.map((year) => (
      <li key={year}>
        <Link href={`/archive/${year}`}>{year}</Link>
      </li>
    ));
  } else {
    const months = getAvailableNewsMonths(year);
    links = months.map((month) => (
      <li key={month}>
        <Link href={`/archive/${year}/${month}`}>{month}</Link>
      </li>
    ));

    if (month) {
      news = getNewsForYearAndMonth(year, month);
    } else {
      news = getNewsForYear(year);
    }
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>{links}</ul>
        </nav>
      </header>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <>No news found for the selected year.</>
      )}
    </>
  );
}
