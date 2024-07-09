import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function InterceptedImagePage({ params: { slug } }) {
  const selectedNews = await getNewsItem(slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
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
