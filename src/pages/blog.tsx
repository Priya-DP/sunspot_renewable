
import PageTitle from "@/components/sections/pageTitle";
import Pagination from "@/components/ui/pagination";

const Blog = () => {
  return (
    <>
      <PageTitle currentPage="Blog Grid" title="Blog Grid" />
      <section className="news-section-4 fix section-padding">
        <div className="container">
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Blog;
