'use client';

import Link from "next/link";

const comments = [
    {
        author: "Albert Flores",
        date: "March 20, 2024 at 2:37 pm",
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        image: "/img/news/comment.png"
    },
    {
        author: "Alexon D. Silva",
        date: "March 20, 2024 at 2:37 pm",
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        image: "/img/news/comment-2.png",
        reply: true
    }
];

const BlogComments = () => {
    return (
        <div className="comments-area">
            <div className="comments-heading">
                <h3>02 Comments</h3>
            </div>
            {comments.map((comment, index) => (
                <div key={index} className={`blog-single-comment d-flex gap-4 pt-30 pb-30 ${comment.reply ? 'reply' : ''}`}>
                    <div className="image text-shrink-0">
                        <img src={comment.image} alt="image" />
                    </div>
                    <div className="content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div className="con">
                                <h5><Link href="/news">{comment.author}</Link></h5>
                                <span>{comment.date}</span>
                            </div>
                            <div className="star">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                        </div>
                        <p className="mt-30">{comment.text}</p>
                        <div className="reply">
                            <Link href="/news">Reply <i className="fa-solid fa-arrow-right-long" /></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogComments;