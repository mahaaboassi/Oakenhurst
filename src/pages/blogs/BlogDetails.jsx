import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogContainer } from "../../components/blogs/BlogContainer";
import { Link } from "react-router-dom";
import { VideoPlayer } from "../../components/videos/VideoPlayer";
import { BlogComments } from "../../components/blogs/BlogComments";
import { BlogCommentForm } from "../../components/blogs/BlogCommentForm";

import videobg from "../../assets/img/home_1/video_bg.jpg";
import blogDetails1 from "../../assets/img/others/blog_details_1.jpg";
import avatar1 from "../../assets/img/home_1/avatar_1.png";
import author1 from "../../assets/img/others/author_1.jpg";

export const BlogDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Blog Details"}
      breadcrumbSubtitle={"Blog Details"}
    >
      <BlogContainer>
        <div className="td_blog_details_head td_mb_40">
          <img src={blogDetails1} alt="Blog Details" />

          <div className="td_blog_details_head_meta">
            <div className="td_blog_details_avatar">
              <img src={avatar1} alt="Avatar" />
              <p className="mb-0 td_heading_color td_bold">
                <span className="td_normal td_opacity_5">By</span> Alexis Dowson
              </p>
            </div>

            <ul className="td_blog_details_head_meta_list td_mp_0 td_heading_color">
              <li>
                <div className="td_icon_btns">
                  <span className="td_icon_btn td_center td_heading_color">
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.4375 0.75C3.65625 0.75 3.875 0.96875 3.875 1.1875V2.5H9.125V1.1875C9.125 0.96875 9.31641 0.75 9.5625 0.75C9.78125 0.75 10 0.96875 10 1.1875V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3V1.1875C3 0.96875 3.19141 0.75 3.4375 0.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
                January 21, 2023
              </li>
              <li>
                <div className="td_icon_btns">
                  <button
                    type="button"
                    className="td_icon_btn td_center td_heading_color"
                  >
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.17021 7.40625V1.71875C4.17021 1.11719 3.67803 0.625 3.07646 0.625H1.76396C1.13506 0.625 0.670213 1.11719 0.670213 1.71875V7.40625C0.670213 8.03516 1.13506 8.5 1.76396 8.5H3.07646C3.67803 8.5 4.17021 8.03516 4.17021 7.40625ZM3.29521 7.40625C3.29521 7.54297 3.18584 7.625 3.07646 7.625H1.76396C1.62724 7.625 1.54521 7.54297 1.54521 7.40625V1.71875C1.54521 1.60938 1.62724 1.5 1.76396 1.5H3.07646C3.18584 1.5 3.29521 1.60938 3.29521 1.71875V7.40625ZM13.7132 6.20312C13.7952 6.03906 13.8226 5.82031 13.8226 5.62891C13.8226 5 13.4671 4.45312 12.9476 4.15234C12.9749 4.04297 13.0022 3.90625 13.0022 3.76953C13.0022 3.16797 12.6741 2.62109 12.1546 2.32031C12.1819 1.39062 11.4163 0.625 10.4866 0.625H8.95537C6.8499 0.625 5.04521 2.375 5.04521 2.83984C5.04521 3.05859 5.23662 3.27734 5.48271 3.27734C6.00224 3.25 6.74053 1.5 8.95537 1.5H10.4866C10.9241 1.5 11.3069 1.88281 11.3069 2.32031C11.3069 2.45703 11.2522 2.48438 11.2522 2.59375C11.2522 3.16797 12.1272 2.92188 12.1272 3.76953C12.1272 4.125 11.9358 4.17969 11.9358 4.42578C11.9358 4.67188 12.1272 4.80859 12.2913 4.83594C12.6741 4.91797 12.9476 5.24609 12.9476 5.62891C12.9476 6.12109 12.6194 6.14844 12.6194 6.47656C12.6194 6.69531 12.8108 6.88672 13.0296 6.91406C13.4397 6.94141 13.7952 7.29688 13.7952 7.70703C13.7952 8.14453 13.4124 8.5 12.9749 8.5H9.4749C9.22881 8.5 9.06474 8.69141 9.06474 8.96484C9.06474 9.01953 9.06474 9.10156 9.11943 9.15625C9.58428 10.0312 9.83037 10.9609 9.83037 11.2344C9.80303 11.5625 9.55693 12 8.98271 12C8.54521 12 8.46318 11.8906 8.21709 11.125C7.61553 9.29297 7.20537 9.21094 5.78349 7.76172C5.70146 7.67969 5.59209 7.625 5.48271 7.625C5.23662 7.625 5.04521 7.81641 5.04521 8.0625C5.04521 8.69141 6.60381 9.04688 7.36943 11.3711C7.61553 12.082 7.86162 12.875 8.98271 12.875C10.0491 12.875 10.678 12.0547 10.678 11.2344C10.678 10.8516 10.514 10.1406 10.1858 9.375H12.9749C13.9046 9.375 14.6702 8.63672 14.6702 7.70703C14.6702 7.05078 14.2874 6.47656 13.7132 6.20312Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="td_icon_btn td_center td_heading_color"
                  >
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.17021 7.40625V1.71875C4.17021 1.11719 3.67803 0.625 3.07646 0.625H1.76396C1.13506 0.625 0.670213 1.11719 0.670213 1.71875V7.40625C0.670213 8.03516 1.13506 8.5 1.76396 8.5H3.07646C3.67803 8.5 4.17021 8.03516 4.17021 7.40625ZM3.29521 7.40625C3.29521 7.54297 3.18584 7.625 3.07646 7.625H1.76396C1.62724 7.625 1.54521 7.54297 1.54521 7.40625V1.71875C1.54521 1.60938 1.62724 1.5 1.76396 1.5H3.07646C3.18584 1.5 3.29521 1.60938 3.29521 1.71875V7.40625ZM13.7132 6.20312C13.7952 6.03906 13.8226 5.82031 13.8226 5.62891C13.8226 5 13.4671 4.45312 12.9476 4.15234C12.9749 4.04297 13.0022 3.90625 13.0022 3.76953C13.0022 3.16797 12.6741 2.62109 12.1546 2.32031C12.1819 1.39062 11.4163 0.625 10.4866 0.625H8.95537C6.8499 0.625 5.04521 2.375 5.04521 2.83984C5.04521 3.05859 5.23662 3.27734 5.48271 3.27734C6.00224 3.25 6.74053 1.5 8.95537 1.5H10.4866C10.9241 1.5 11.3069 1.88281 11.3069 2.32031C11.3069 2.45703 11.2522 2.48438 11.2522 2.59375C11.2522 3.16797 12.1272 2.92188 12.1272 3.76953C12.1272 4.125 11.9358 4.17969 11.9358 4.42578C11.9358 4.67188 12.1272 4.80859 12.2913 4.83594C12.6741 4.91797 12.9476 5.24609 12.9476 5.62891C12.9476 6.12109 12.6194 6.14844 12.6194 6.47656C12.6194 6.69531 12.8108 6.88672 13.0296 6.91406C13.4397 6.94141 13.7952 7.29688 13.7952 7.70703C13.7952 8.14453 13.4124 8.5 12.9749 8.5H9.4749C9.22881 8.5 9.06474 8.69141 9.06474 8.96484C9.06474 9.01953 9.06474 9.10156 9.11943 9.15625C9.58428 10.0312 9.83037 10.9609 9.83037 11.2344C9.80303 11.5625 9.55693 12 8.98271 12C8.54521 12 8.46318 11.8906 8.21709 11.125C7.61553 9.29297 7.20537 9.21094 5.78349 7.76172C5.70146 7.67969 5.59209 7.625 5.48271 7.625C5.23662 7.625 5.04521 7.81641 5.04521 8.0625C5.04521 8.69141 6.60381 9.04688 7.36943 11.3711C7.61553 12.082 7.86162 12.875 8.98271 12.875C10.0491 12.875 10.678 12.0547 10.678 11.2344C10.678 10.8516 10.514 10.1406 10.1858 9.375H12.9749C13.9046 9.375 14.6702 8.63672 14.6702 7.70703C14.6702 7.05078 14.2874 6.47656 13.7132 6.20312Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                22 Likes
              </li>
              <li>
                <div className="td_icon_btns">
                  <Link
                    to="#"
                    className="td_icon_btn td_center td_heading_color"
                  >
                    <svg
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.48271 4.875H13.0022L8.68193 1.29297C8.49053 1.12891 8.49053 0.855469 8.62724 0.664062C8.79131 0.472656 9.06474 0.472656 9.25615 0.609375L14.5062 4.95703C14.5882 5.06641 14.6702 5.20312 14.6702 5.3125C14.6702 5.42188 14.5882 5.55859 14.5062 5.64062L9.25615 9.98828C9.17412 10.043 9.06474 10.0977 8.98271 10.0977C8.84599 10.0977 8.70928 10.043 8.62724 9.93359C8.49053 9.74219 8.49053 9.46875 8.68193 9.30469L13.0022 5.72266H5.48271C3.29521 5.72266 1.54521 7.47266 1.54521 9.63281V10.4805C1.54521 10.8086 1.32646 11 1.10771 11C0.861619 11 0.670213 10.8086 0.670213 10.5625V9.71484C0.670213 7.03516 2.80303 4.875 5.48271 4.875Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
                8 Share
              </li>
            </ul>
          </div>
        </div>

        <div className="td_blog_details">
          <h2>University Campus Student Teachers Playing Enjoy this Time</h2>
          <p>
            When an unknown printer took ar galley offer type year anddey
            scrambled make type aewer specimen book bethas survived not only
            five when annery unknown printer.eed a little help from our friends
            from time to time. Although we offer the one-stop convenience.{" "}
            <br />
            <br />
            When an unknown printer took ar galley offer type year anddey
            scrambled make type aewer specimen book bethas survived not only
            five when annery unknown printer.eed a little help from our friends
            from time to time.
          </p>
          <blockquote>
            "Urabitur varius eros rutrum consequat Mauris aewa sollicitudin enim
            condimentum luctus enim justo non molestie nisl"
            <svg
              width="52"
              height="42"
              viewBox="0 0 52 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.42"
                d="M47.5884 35.9835C43.9418 39.9761 38.4237 42 31.1902 42L28.591 42L28.591 34.6001L30.6808 34.1775C34.2416 33.4582 36.7187 32.0434 38.0442 29.967C38.7359 28.8484 39.1282 27.5676 39.1827 26.25L31.1902 26.25C30.5009 26.25 29.8397 25.9734 29.3523 25.4812C28.8649 24.9889 28.591 24.3212 28.591 23.625L28.591 5.25C28.591 2.35463 30.9225 1.97204e-06 33.7894 2.22267e-06L49.3845 3.58604e-06C50.0738 3.64631e-06 50.7349 0.276562 51.2224 0.768845C51.7098 1.26113 51.9837 1.92881 51.9837 2.625L51.9837 15.75L51.9759 23.4124C51.9993 23.7038 52.4931 30.6075 47.5884 35.9835Z"
                fill="currentColor"
              />
            </svg>
          </blockquote>
          <h3>Speed Optimized</h3>
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen bookhas a not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchan
            galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="row">
            <div className="col-xxl-5">
              <div
                className="td_video_block td_style_1 td_accent_bg td_bg_filed td_center text-center"
                style={{ backgroundImage: `url(${videobg})` }}
              >
                <VideoPlayer
                  trigger={
                    <a
                      href="#vid001"
                      className="td_player_btn_wrap_2 td_video_open"
                    >
                      <span className="td_player_btn td_center">
                        <span></span>
                      </span>
                    </a>
                  }
                />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="td_blog_details_inside_box">
                <h3>We are Always Provide a Good Friendly Weather</h3>
                <p>
                  When an unknown printer took a galley type remaining
                  essentially unchan galley of type and scrambled it to make a
                  type specimen book.
                </p>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  <li>
                    <svg
                      className="td_accent_color"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="currentColor" />
                      <path
                        d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Online Educations Platform
                  </li>
                  <li>
                    <svg
                      className="td_accent_color"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="currentColor" />
                      <path
                        d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Daily News Update
                  </li>
                  <li>
                    <svg
                      className="td_accent_color"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="currentColor" />
                      <path
                        d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Budget Friendly Theme
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen bookhas a not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchan
            galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="td_height_50 td_height_lg_40" />
        <div className="td_post_share">
          <div className="td_categories">
            <h4 className="mb-0 td_fs_18">Tags:</h4>
            <Link to="#" className="td_category">
              Motion
            </Link>
            <Link to="#" className="td_category">
              Graphic
            </Link>
            <Link to="#" className="td_category">
              Video
            </Link>
          </div>
          <div className="td_footer_social_btns td_fs_18 td_accent_color">
            <a href="#" className="td_center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        <div className="td_height_40 td_height_lg_40" />
        <div className="td_author_card">
          <div className="td_author_card_in">
            <img src={author1} alt="Author" className="td_author_card_thumb" />
            <div className="td_author_card_right">
              <p className="td_medium td_accent_color td_mb_10">Author</p>
              <h3 className="td_fs_20 td_semibold td_mb_10">Parker Willy</h3>
              <p className="mb-0">
                Finanappreciate your trust greatly Our clients choose dentace
                ducts because kn ow we are the best area Awaitingare really.
              </p>
            </div>
          </div>
        </div>
        <div className="td_height_40 td_height_lg_40" />

        {/* comments */}
        <BlogComments />

        <div className="td_height_60 td_height_lg_40" />

        {/* comment form */}
        <BlogCommentForm />
      </BlogContainer>
    </Layout>
  );
};
