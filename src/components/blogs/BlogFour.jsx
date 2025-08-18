import React from "react";
import { Link } from "react-router-dom";

import calendarIcon from "../../assets/img/icons/calendar.svg";
import userIcon from "../../assets/img/icons/user.svg";
import post1Img from "../../assets/img/home_4/post_1.png";
import post2Img from "../../assets/img/home_4/post_2.png";
import post3Img from "../../assets/img/home_4/post_3.png";

export const BlogFour = () => {
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
        <div className="row td_gap_y_24">
          <div
            className="col-xl-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_post td_style_1 td_type_2">
              <Link to="/blog-details" className="td_post_thumb d-block">
                <img src={post1Img} alt="blog post" />
                <span className="td_post_label">Learning</span>
              </Link>
              <div className="td_post_info">
                <div className="td_post_meta td_fs_14 td_medium td_mb_16">
                  <span>
                    <img src={calendarIcon} alt="calendar" />
                    Jan 23 , 2024
                  </span>
                  <span>
                    <img src={userIcon} alt="user" />
                    Jhon Doe
                  </span>
                </div>
                <h2 className="td_post_title td_fs_24 td_medium td_mb_16">
                  <Link to="/blog-details">
                    Tips for Students and Recent Graduates
                  </Link>
                </h2>
                <p className="td_post_subtitle td_mb_20 td_heading_color td_opacity_7">
                  Far far away, behind the word moun tains, far from the Conso
                  nantia.
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
                      />
                      <path
                        d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_post td_style_1 td_type_2">
              <Link to="/blog-details" className="td_post_thumb d-block">
                <img src={post2Img} alt="blog post" />
                <span className="td_post_label">Remote</span>
              </Link>
              <div className="td_post_info">
                <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                  <span>
                    <img src={calendarIcon} alt="calendar" />
                    Jan 20 , 2024
                  </span>
                  <span>
                    <img src={userIcon} alt="user" />
                    Jhon Doe
                  </span>
                </div>
                <h2 className="td_post_title td_fs_24 td_medium td_mb_16">
                  <Link to="/blog-details">
                    Leverage Internships for Career Success
                  </Link>
                </h2>
                <p className="td_post_subtitle td_mb_24 td_heading_color td_opacity_7">
                  Education is a dynamic and evolving field that plays a
                  crucial.
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
                      />
                      <path
                        d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_post td_style_1 td_type_2">
              <Link to="/blog-details" className="td_post_thumb d-block">
                <img src={post3Img} alt="blog post" />
                <span className="td_post_label">Reading</span>
              </Link>
              <div className="td_post_info">
                <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                  <span>
                    <img src={calendarIcon} alt="calendar" />
                    Jan 18 , 2024
                  </span>
                  <span>
                    <img src={userIcon} alt="user" />
                    Jhon Doe
                  </span>
                </div>
                <h2 className="td_post_title td_fs_24 td_medium td_mb_16">
                  <Link to="/blog-details">
                    How to Inspire Your Students for life
                  </Link>
                </h2>
                <p className="td_post_subtitle td_mb_24 td_heading_color td_opacity_7">
                  Education is a dynamic and evolving field that plays a
                  crucial.
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
                      />
                      <path
                        d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.45s"
          >
            <div className="td_post td_style_1 td_type_2">
              <Link to="/blog-details" className="td_post_thumb d-block">
                <img src={post3Img} alt="blog post" />
                <span className="td_post_label">Learning</span>
              </Link>
              <div className="td_post_info">
                <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                  <span>
                    <img src={calendarIcon} alt="calendar" />
                    Jan 18 , 2024
                  </span>
                  <span>
                    <img src={userIcon} alt="user" />
                    Jhon Doe
                  </span>
                </div>
                <h2 className="td_post_title td_fs_24 td_medium td_mb_16">
                  <Link to="/blog-details">
                    Role of Intelligence in Academic Success
                  </Link>
                </h2>
                <p className="td_post_subtitle td_mb_24 td_heading_color td_opacity_7">
                  Education is a dynamic and evolving field that plays a
                  crucial.
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
                      />
                      <path
                        d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
