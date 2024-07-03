export default function NewsDetailPage({ params: { id } }) {
  return (
    <div id="news_detail">
      <h1>News</h1>
      <p>News ID: {id}</p>
    </div>
  );
}