import React from "react";
import { Link } from "react-router-dom";

import post1 from "../../assets/img/home_2/post_1.jpg";
import post2 from "../../assets/img/home_2/post_2.jpg";
import post3 from "../../assets/img/home_2/post_3.jpg";
import calendarIcon from "../../assets/img/icons/calendar.svg";
import userIcon from "../../assets/img/icons/user.svg";

export const BlogNine = () => {
  const blogPosts = [
    {
      id: 1,
      image: post1,
      label: "Learning",
      date: "Jan 23 , 2024",
      author: "Jhon Doe",
      title: "Tips for Students and Recent Graduates",
      description:
        "Far far away, behind the word moun tains, far from the Conso nantia.",
    },
    {
      id: 2,
      image: post2,
      label: "Remote",
      date: "Jan 20 , 2024",
      author: "Jhon Doe",
      title: "Leverage Internships for Career Success",
      description:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      id: 3,
      image: post3,
      label: "Reading",
      date: "Jan 18 , 2024",
      author: "Jhon Doe",
      title: "How to Inspire Your Students for life",
      description:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
    {
      id: 4,
      image: post3,
      label: "Learning",
      date: "Jan 18 , 2024",
      author: "Jhon Doe",
      title: "Role of Intelligence in Academic Success",
      description:
        "Education is a dynamic and evolving field that plays a crucial.",
    },
  ];

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="td_section_heading td_style_1">
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            BLOG & ARTICLES
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Take A Look At The Latest <br />
            Articles
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_24">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-xl-6">
              <div className="td_post td_style_1 td_type_1">
                <Link to="/blog-details" className="td_post_thumb d-block">
                  <img src={post.image} alt={post.title} />
                  <span className="td_post_label">{post.label}</span>
                </Link>
                <div className="td_post_info">
                  <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                    <span>
                      <img src={calendarIcon} alt="Calendar" />
                      {post.date}
                    </span>
                    <span>
                      <img src={userIcon} alt="User" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="td_post_title td_fs_24 td_medium td_mb_16">
                    <Link to="/blog-details">{post.title}</Link>
                  </h2>
                  <p className="td_post_subtitle td_mb_24 td_heading_color td_opacity_7">
                    {post.description}
                  </p>
                  <Link
                    to="/blog-details"
                    className="td_btn td_style_1 td_type_3 td_radius_30 td_medium"
                  >
                    <span className="td_btn_in td_accent_color">
                      <span>Read More</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
