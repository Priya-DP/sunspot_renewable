'use client';

import Link from "next/link";
import SectionTitle from "@/components/ui/sectionTitle";
import { blogPostsTwoData } from "@/db/blogPostsTwoData";

const BlogsTwo = () => {
  return (
    <section className="news-section-2 fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <SectionTitle>
            <SectionTitle.SubTitle>News & Articles</SectionTitle.SubTitle>
            <SectionTitle.Title>Latest From Our Blog</SectionTitle.Title>
          </SectionTitle>
        </div>
        <div className="row">
          {blogPostsTwoData.map((post) => (
            <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-news-items style-2">
                <div className="news-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="news-content">
                  <h3>
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                  <Link href={post.link} className="theme-btn-2 mt-3">
                    <span>
                      Read More <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsTwo;