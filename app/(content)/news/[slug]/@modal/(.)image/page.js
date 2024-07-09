"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params: { slug } }) {
  const router = useRouter();
  const selectedNews = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${selectedNews.image}`}
            alt={selectedNews.title}
          />
        </div>
      </dialog>
    </>
  );
}
