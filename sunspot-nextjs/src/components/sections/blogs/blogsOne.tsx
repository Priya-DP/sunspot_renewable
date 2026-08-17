'use client';

import Link from "next/link";
import SectionTitle from "@/components/ui/sectionTitle";
import { blogPostsOneData } from "@/db/blogPostsOneData";

const BlogsOne = () => {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <SectionTitle>
            <SectionTitle.SubTitle>Latest News & Blog</SectionTitle.SubTitle>
            <SectionTitle.Title>Read Our Latest Articles</SectionTitle.Title>
          </SectionTitle>
        </div>
        <div className="row">
          {blogPostsOneData.map((post) => (
            <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-news-items">
                <div className="news-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-date">
                    <h3>{post.date.day}</h3>
                    <p>{post.date.month}</p>
                  </div>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
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

export default BlogsOne;
