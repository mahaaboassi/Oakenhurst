import React from "react";
import { Link } from "react-router-dom";

import calendarIcon from "../../assets/img/icons/calendar.svg";
import userIcon from "../../assets/img/icons/user.svg";
import post1 from "../../assets/img/home_7/post_1.jpg";
import post2 from "../../assets/img/home_7/post_2.jpg";
import post3 from "../../assets/img/home_7/post_3.jpg";

export const BlogSeven = () => {
  const blogPosts = [
    {
      id: 1,
      image: post1,
      date: "Jan 23 , 2024",
      author: "Jhon Doe",
      title: "International Motivate Test For Washington",
      description:
        "Far far away, behind the word Conson mountains, far from the Consona",
      delay: "0.3s",
    },
    {
      id: 2,
      image: post2,
      date: "Jan 20 , 2024",
      author: "Jhon Doe",
      title: "Speaker in Motivational Test For Inspect",
      description:
        "Far far away, behind the word Conson mountains, far from the Consona",
      delay: "0.4s",
    },
    {
      id: 3,
      image: post3,
      date: "Jan 18 , 2024",
      author: "Jhon Doe",
      title: "South Korea Course Seat on Available",
      description:
        "Far far away, behind the word Conson mountains, far from the Consona",
      delay: "0.5s",
    },
  ];

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 td_accent_color">
              News & Articles
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              Explore Our Latest News <br />& Articles
            </h2>
          </div>
          <div className="td_section_heading_right">
            <Link
              to="/blog"
              className="td_btn td_style_2 td_heading_color td_medium td_mb_10 td_fs_18"
            >
              See All Articles
              <i>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1575 4.34302L3.84375 15.6567"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1575 4.34302L3.84375 15.6567"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </Link>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={post.delay}
            >
              <div className="td_post td_style_1 td_type_5">
                <Link to="/blog-details" className="td_post_thumb d-block">
                  <img src={post.image} alt="" />
                  <i className="fa-solid fa-link"></i>
                </Link>
                <div className="td_post_info">
                  <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                    <span>
                      <img src={calendarIcon} alt="" />
                      {post.date}
                    </span>
                    <span>
                      <img src={userIcon} alt="" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="td_post_title td_fs_30 td_medium td_mb_16">
                    <Link to="/blog-details">{post.title}</Link>
                  </h2>
                  <p className="td_post_subtitle td_mb_20 td_heading_color td_opacity_7">
                    {post.description}
                  </p>
                  <Link
                    to="/blog-details"
                    className="td_btn td_style_3 td_heading_color td_fs_18"
                  >
                    <span>Read More</span>
                    <i>
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 6L1 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
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
