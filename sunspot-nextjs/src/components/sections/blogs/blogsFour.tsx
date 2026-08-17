'use client';

import Link from "next/link";
import { blogPostsFourData } from "@/db/blogPostsFourData";

const BlogsFour = () => {
  return (
    <section className="news-section-4 fix section-padding">
      <div className="container">
        <div className="row">
          {blogPostsFourData.map((post) => (
            <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-news-items style-4">
                <div className="news-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="news-content">
                  <h3>
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsFour;