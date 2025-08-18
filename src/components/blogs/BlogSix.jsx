import React from "react";
import { Link } from "react-router-dom";
import post1 from "../../assets/img/home_6/post_1.jpg";
import post2 from "../../assets/img/home_6/post_2.jpg";
import post3 from "../../assets/img/home_6/post_3.jpg";
import calendarIcon from "../../assets/img/icons/calendar.svg";
import userIcon from "../../assets/img/icons/user.svg";

export const BlogSix = () => {
  const blogPosts = [
    {
      id: 1,
      image: post1,
      date: "Jan 23 , 2024",
      author: "Jhon Doe",
      title: "The Quran and Science Unveiling the Harmony Between Faith",
      delay: "0.3s",
    },
    {
      id: 2,
      image: post2,
      date: "Jan 20 , 2024",
      author: "Jhon Doe",
      title: "The Timeless Wisdom of the Quran Lessons for Modern Life",
      delay: "0.35s",
    },
    {
      id: 3,
      image: post3,
      date: "Jan 15 , 2024",
      author: "Jhon Doe",
      title: "Practical for Memorizing and Reflecting on Quranic Verses",
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
          <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
            Why Choose Us
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Latest Article & News <br />
            With Educve
          </h2>
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
              <div className="td_post td_style_1 td_type_4">
                <Link to="/blog-details" className="td_post_thumb d-block">
                  <img src={post.image} alt="" />
                  <i className="fa-solid fa-link"></i>
                </Link>
                <div className="td_post_info">
                  <span className="td_post_label td_accent_bg td_white_color td_fs_14">
                    Quran Tamjid
                  </span>
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
                  <h2 className="td_post_title td_fs_24 td_medium td_mb_20">
                    <Link to="/blog-details">{post.title}</Link>
                  </h2>
                  <Link
                    to="/blog-details"
                    className="td_btn td_style_3 td_semibold td_accent_color text-uppercase"
                  >
                    <span>Read More</span>
                    <i>
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
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
