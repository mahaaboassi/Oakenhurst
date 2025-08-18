import React from "react";
import { Link } from "react-router-dom";

import aboutImg1 from "../../assets/img/home_7/about_img_1.jpg";
import aboutImg2 from "../../assets/img/home_7/about_img_2.jpg";
import aboutShape2 from "../../assets/img/home_5/about_shape_2.svg";
import aboutShape3 from "../../assets/img/home_7/about_shape_3.svg";
import { VideoPlayer } from "../videos/VideoPlayer";

export const AboutSeven = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div className="col-lg-6">
            <div className="td_image_box td_style_6 td_type_1">
              <div
                className="td_image_box_img_1 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <img src={aboutImg1} alt="About" />
              </div>
              <div
                className="td_image_box_img_2 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="td_image_box_img_2_in">
                  <img src={aboutImg2} alt="About" />

                  <VideoPlayer
                    trigger={
                      <a href="#vid002" className="td_video_open">
                        <span className="td_player_btn td_center">
                          <span></span>
                        </span>
                      </a>
                    }
                  />
                </div>
              </div>
              <div className="td_image_box_shape_1 position-absolute" />
              <div className="td_image_box_shape_2 position-absolute">
                <img src={aboutShape2} alt="Shape" />
              </div>
              <div className="td_image_box_shape_3 position-absolute td_accent_color">
                <img src={aboutShape3} alt="Shape" />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_section_heading td_style_1 td_mb_30">
              <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
                About us
              </p>
              <h2 className="td_section_title td_fs_48 td_mb_30">
                Providing you with the best motivational courses
              </h2>
              <h3 className="td_fs_24 td_medium td_mb_30 fst-italic">
                {`“We’ve 20 years Advance it Motivational Services Academy Courses
                Experience.”`}
              </h3>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove right at the coast of the Semantics a large language ocean
              </p>
            </div>
            <div className="td_mb_40">
              <ul className="td_list td_style_2 td_type_1 td_fs_24 td_medium td_heading_color td_mp_0">
                <li>
                  <svg
                    className="td_heading_color"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.668 3.44522C19.7068 2.31076 17.4299 1.66146 15.0013 1.66146C7.6375 1.66146 1.66797 7.631 1.66797 14.9948C1.66797 22.3586 7.6375 28.3281 15.0013 28.3281C22.3651 28.3281 28.3346 22.3586 28.3346 14.9948C28.3346 14.0816 28.2428 13.1898 28.0679 12.3281"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.66797 15.6641C9.66797 15.6641 11.668 15.6641 14.3346 20.3307C14.3346 20.3307 21.7464 8.10851 28.3346 5.66406"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Motivate is your Mind Our Motivational Courses
                </li>
                <li>
                  <svg
                    className="td_heading_color"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.668 3.44522C19.7068 2.31076 17.4299 1.66146 15.0013 1.66146C7.6375 1.66146 1.66797 7.631 1.66797 14.9948C1.66797 22.3586 7.6375 28.3281 15.0013 28.3281C22.3651 28.3281 28.3346 22.3586 28.3346 14.9948C28.3346 14.0816 28.2428 13.1898 28.0679 12.3281"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.66797 15.6641C9.66797 15.6641 11.668 15.6641 14.3346 20.3307C14.3346 20.3307 21.7464 8.10851 28.3346 5.66406"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Embrace & Enhance Customer Care Services
                </li>
              </ul>
            </div>
            <div className="td_btns_group">
              <Link
                to="/courses-grid-with-sidebar"
                className="td_btn td_style_1 td_type_2 td_radius_30 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Find Courses</span>
                  <span className="td_btn_icon td_center td_accent_bg td_white_color">
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </span>
              </Link>

              <VideoPlayer
                trigger={
                  <a
                    href="#vid003"
                    className="td_player_btn_wrap td_type_1 td_video_open td_medium td_heading_color"
                  >
                    <span className="td_player_btn td_center">
                      <span></span>
                    </span>
                    <span className="td_play_btn_text">Watch Intro</span>
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
