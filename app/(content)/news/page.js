import NewsList from "@/components/news-list";

export default async function AllNewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    return <div>Failed to load news.</div>;
  }

  const news = await response.json();

  if (!news || news.length === 0) {
    return <div>No news found.</div>;
  }

  return (
    <div id="news">
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
