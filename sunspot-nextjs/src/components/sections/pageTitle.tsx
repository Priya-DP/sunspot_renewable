'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAboutContent } from "@/lib/api";

interface PageTitleProps {
  pageName: string;
}

const PageTitle = ({ pageName }: PageTitleProps) => {
  const [title, setTitle] = useState("About Us");

  useEffect(() => {
    fetchAboutContent().then((data) => {
      if (data && data.sectionSubtitle) {
        setTitle(data.sectionSubtitle);
      }
    });
  }, []);

  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: 'url("/img/breadcrumb.jpg")' }}
    >
      <div className="border-shape">
        <img src="/img/element.png" alt="shape-img" />
      </div>
      <div className="line-shape">
        <img src="/img/line-element.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading text-center">
          <h1 className="wow fadeInUp" data-wow-delay=".3s">
            {pageName || title}
          </h1>
          <ul
            className="breadcrumb-items wow fadeInUp"
            data-wow-delay=".5s"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right" />
            </li>
            <li>{pageName || title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;