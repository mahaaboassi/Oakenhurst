import React from "react";
import { BlogItem } from "./BlogItem";

import post1 from "../../assets/img/home_1/post_1.jpg";
import post2 from "../../assets/img/home_1/post_2.jpg";
import post3 from "../../assets/img/home_1/post_3.jpg";
import post4 from "../../assets/img/home_1/post_4.jpg";
import post5 from "../../assets/img/home_1/post_5.jpg";
import post6 from "../../assets/img/home_1/post_6.jpg";

const blogPosts = [
  {
    image: post1,
    date: "Jan 23, 2024",
    author: "Jhon Doe",
    title: "Comprehensive Student Guide for New Educations System",
    excerpt: "Education is a dynamic and evolving field that plays a crucial.",
  },
  {
    image: post2,
    date: "Jan 17, 2024",
    author: "Jhon Doe",
    title: "Overview of the New Education System for Students",
    excerpt: "Education is a dynamic and evolving field that plays a crucial.",
  },
  {
    image: post3,
    date: "Jan 13, 2024",
    author: "Jhon Doe",
    title: "Student Guide for the New Education System",
    excerpt: "Education is a dynamic and evolving field that plays a crucial.",
  },
  {
    image: post4,
    date: "Jan 09, 2024",
    author: "Jhon Doe",
    title: "Comprehensive Student Guide for New Educations System",
    excerpt: "Education is a dynamic and evolving field that plays a crucial.",
  },
  {
    image: post5,
    date: "Jan 07, 2024",
    author: "Jhon Doe",
    title: "Overview of the New Education System for Students",
    excerpt: "Education is a dynamic and evolving field that plays a crucial.",
  },
  {
    image: post6,
    date: "Jan 05, 2024",
    author: "Jhon Doe",
    title: "Student Guide for the New Education System",
    excerpt: "Education is a dynamic and evolving field that plays a crucial.",
  },
];

export const BlogAllSidebar = () => {
  return (
    <div className="row td_gap_y_30">
      {blogPosts.map((post, index) => (
        <div className="col-lg-6" key={index}>
          <BlogItem {...post} />
        </div>
      ))}
    </div>
  );
};
