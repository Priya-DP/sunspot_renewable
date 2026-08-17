'use client';

import Link from "next/link";

interface BlogPostsDataType {
  id?: number;
  image: string;
  title: string;
  author: string;
  commentsCount?: number | string;
  link: string;
  date: {
    day: string;
    month: string;
  };
  className?: string;
}

interface BlogCardProps {
  news: BlogPostsDataType;
  className?: string;
}

const BlogCard = ({ news, className }: BlogCardProps) => {
  return (
    <div className={`single-news-items ${className || ''}`}>
      <div className="news-image">
        <img src={news.image} alt="news-img" />
        <div className="post-date">
          <h3>{news.date.day}</h3>
          <p>{news.date.month}</p>
        </div>
      </div>
      <div className="news-content">
        <ul>
          <li>
            <i className="fa-solid fa-user" /> By {news.author}
          </li>
          <li>
            <i className="fa-solid fa-comments" /> {news.commentsCount || '02'} Comments
          </li>
        </ul>
        <h3>
          <Link href={news.link}>{news.title}</Link>
        </h3>
        <Link href={news.link} className="theme-btn-2 mt-3">
          <span>
            Read More <i className="fa-solid fa-arrow-right-long" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;