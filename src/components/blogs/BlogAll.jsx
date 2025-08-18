import React from "react";
import { BlogPagination } from "./BlogPagination";
import { BlogItem } from "./BlogItem";

import post1 from "../../assets/img/home_1/post_1.jpg";
import post2 from "../../assets/img/home_1/post_2.jpg";
import post3 from "../../assets/img/home_1/post_3.jpg";
import post4 from "../../assets/img/home_1/post_4.jpg";
import post5 from "../../assets/img/home_1/post_5.jpg";
import post6 from "../../assets/img/home_1/post_6.jpg";
import post7 from "../../assets/img/home_1/post_7.jpg";
import post8 from "../../assets/img/home_1/post_8.jpg";
import post9 from "../../assets/img/home_1/post_9.jpg";

export const BlogAll = () => {
  const blogPosts = [
    {
      image: post1,
      date: "Jan 23, 2024",
      author: "Jhon Doe",
      title: "Comprehensive Student Guide for New Educations System",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post2,
      date: "Jan 17, 2024",
      author: "Jhon Doe",
      title: "Overview of the New Education System for Students",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post3,
      date: "Jan 13, 2024",
      author: "Jhon Doe",
      title: "Student Guide for the New Education System",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post4,
      date: "Jan 09, 2024",
      author: "Jhon Doe",
      title: "Comprehensive Student Guide for New Educations System",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post5,
      date: "Jan 07, 2024",
      author: "Jhon Doe",
      title: "Overview of the New Education System for Students",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post6,
      date: "Jan 05, 2024",
      author: "Jhon Doe",
      title: "Student Guide for the New Education System",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post7,
      date: "Jan 04, 2024",
      author: "Jhon Doe",
      title: "Comprehensive Student Guide for New Educations System",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post8,
      date: "Jan 03, 2024",
      author: "Jhon Doe",
      title: "Overview of the New Education System for Students",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      image: post9,
      date: "Jan 01, 2024",
      author: "Jhon Doe",
      title: "Student Guide for the New Education System",
      excerpt:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
  ];

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_30">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4" key={index}>
              <BlogItem {...post} />
            </div>
          ))}
        </div>

        <div className="td_height_60 td_height_lg_40" />

        {/* pagination */}
        <BlogPagination />
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
