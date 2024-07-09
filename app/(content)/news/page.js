"use client";

import { useEffect, useState } from "react";
import NewsList from "@/components/news-list";

export default function AllNewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="news">
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
