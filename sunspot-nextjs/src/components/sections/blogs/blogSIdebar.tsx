'use client';

import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Search</h3>
        </div>
        <div className="search-widget">
          <form action="#">
            <input type="text" placeholder="Search here" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Categories</h3>
        </div>
        <div className="news-widget-categories">
          <ul>
            <li>
              <Link href="/news">Solar Energy</Link> <span>(08)</span>
            </li>
            <li>
              <Link href="/news">Rooftop Solar</Link> <span>(05)</span>
            </li>
            <li>
              <Link href="/news">Renewable Power</Link> <span>(03)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;