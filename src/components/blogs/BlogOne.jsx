import React from "react";
import { BlogOneItem } from "./BlogOneItem";

import post1 from "../../assets/img/home_1/post_1.jpg";
import post2 from "../../assets/img/home_1/post_2.jpg";
import post3 from "../../assets/img/home_1/post_3.jpg";

export const BlogOne = () => {
  const blogPosts = [
    {
      src: post1,
      date: "Jan 23, 2024",
      author: "Jhon Doe",
      title: "Comprehensive Student Guide for New Educations System",
      description:
        "Education is a dynamic and evolving field that plays a crucial.",
      delay: "0.2s",
    },
    {
      src: post2,
      date: "Jan 20, 2024",
      author: "Jhon Doe",
      title: "Overview of the New Education System for Students",
      description:
        "Education is a dynamic and evolving field that plays a crucial.",
      delay: "0.3s",
    },
    {
      src: post3,
      date: "Jan 18, 2024",
      author: "Jhon Doe",
      title: "Student Guide for the New Education System",
      description:
        "Education is a dynamic and evolving field that plays a crucial.",
      delay: "0.4s",
    },
  ];

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            BLOG & ARTICLES
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Take A Look At The Latest <br />
            Articles
          </h2>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={post.delay}
            >
              <BlogOneItem {...post} />
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
