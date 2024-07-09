import Link from "next/link";
import { Suspense } from "react";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news";

async function FilterHeader({ year, month }) {
  let links;

  if (!year) {
    const years = await getAvailableNewsYears();
    links = years.map((year) => (
      <li key={year}>
        <Link href={`/archive/${year}`}>{year}</Link>
      </li>
    ));
  } else {
    const availableYears = await getAvailableNewsYears();
    const availableMonths = await getAvailableNewsMonths(year);

    if (
      (year && !availableYears.includes(year)) ||
      (month && !availableMonths.includes(month))
    ) {
      throw new Error("Invalid filter.");
    }

    links = availableMonths.map((month) => (
      <li key={month}>
        <Link href={`/archive/${year}/${month}`}>{month}</Link>
      </li>
    ));
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>{links}</ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  if (!year) {
    return <p>No year selected</p>;
  }

  const news = month
    ? await getNewsForYearAndMonth(year, month)
    : await getNewsForYear(year);

  return <NewsList news={news} />;
}

export default async function FilteredNewsPage({ params: { filter } }) {
  const year = filter?.[0];
  const month = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={year} month={month} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </>
  );
}
