import React from "react";
import { Link } from "react-router-dom";

import whyChooseShape from "../../assets/img/home_2/why_choose_us_shape_1.svg";
import whyChooseImg from "../../assets/img/home_2/why_chose_us_img.jpg";
import avatar1 from "../../assets/img/home_2/avatar_1.png";
import avatar2 from "../../assets/img/home_2/avatar_2.png";
import avatar3 from "../../assets/img/home_2/avatar_3.png";
import avatar4 from "../../assets/img/home_2/avatar_4.png";
import { VideoPlayer } from "../videos/VideoPlayer";

export const WhyChooseOne = () => {
  return (
    <section className="td_gray_bg_4 td_shape_section_1">
      <div className="td_shape td_shape_position_1">
        <img src={whyChooseShape} alt="shape" />
      </div>
      <div className="td_shape td_shape_position_2" />
      <div className="td_shape td_shape_position_3" />
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div className="col-xl-6">
            <div className="td_image_box td_style_1">
              <img
                src={whyChooseImg}
                alt="why choose us"
                className="td_image_box_thumb wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              />
              <div className="td_avatars_wrap td_type_2 wow fadeInLeft">
                <h3 className="mb-0 td_fs_24 td_semibold">
                  10k+ Active Students
                </h3>
                <div className="td_avatars">
                  <div>
                    <img src={avatar1} alt="avatar" />
                  </div>
                  <div>
                    <img src={avatar2} alt="avatar" />
                  </div>
                  <div>
                    <img src={avatar3} alt="avatar" />
                  </div>
                  <div>
                    <img src={avatar4} alt="avatar" />
                  </div>
                  <div className="td_avatar_end td_fs_18 td_medium td_center">
                    10k+
                  </div>
                </div>
              </div>

              <VideoPlayer
                trigger={
                  <a
                    href="#vid2"
                    className="td_player_btn_wrap_3 td_video_open td_center wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <span className="td_player_btn td_center">
                      <span></span>
                    </span>
                  </a>
                }
              />
            </div>
          </div>

          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                <i></i>
                Why Choose us
                <i></i>
              </p>
              <h2 className="td_section_title td_fs_36 mb-0">
                Our expert team is ready to assist you anywhere in the world
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove right
              </p>
            </div>
            <div className="td_height_40 td_height_lg_40" />
            <ul className="td_list td_style_1 td_mp_0 td_semibold td_heading_color">
              <li>
                <i className="td_list_icon td_center">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7803 0.21187C14.4875 -0.0810401 14.0126 -0.0810401 13.7197 0.21187L4.73421 9.19743L1.28035 5.74356C0.987466 5.45065 0.512622 5.45068 0.219683 5.74356C-0.0732275 6.03644 -0.0732275 6.51128 0.219683 6.80419L4.20388 10.7883C4.49667 11.0812 4.97187 11.081 5.26455 10.7883L14.7803 1.27253C15.0733 0.979653 15.0732 0.50478 14.7803 0.21187Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                World Class Trainers
              </li>
              <li>
                <i className="td_list_icon td_center">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7803 0.21187C14.4875 -0.0810401 14.0126 -0.0810401 13.7197 0.21187L4.73421 9.19743L1.28035 5.74356C0.987466 5.45065 0.512622 5.45068 0.219683 5.74356C-0.0732275 6.03644 -0.0732275 6.51128 0.219683 6.80419L4.20388 10.7883C4.49667 11.0812 4.97187 11.081 5.26455 10.7883L14.7803 1.27253C15.0733 0.979653 15.0732 0.50478 14.7803 0.21187Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                Experts Instructors
              </li>
              <li>
                <i className="td_list_icon td_center">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7803 0.21187C14.4875 -0.0810401 14.0126 -0.0810401 13.7197 0.21187L4.73421 9.19743L1.28035 5.74356C0.987466 5.45065 0.512622 5.45068 0.219683 5.74356C-0.0732275 6.03644 -0.0732275 6.51128 0.219683 6.80419L4.20388 10.7883C4.49667 11.0812 4.97187 11.081 5.26455 10.7883L14.7803 1.27253C15.0733 0.979653 15.0732 0.50478 14.7803 0.21187Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                Easy Learning Introduce
              </li>
              <li>
                <i className="td_list_icon td_center">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7803 0.21187C14.4875 -0.0810401 14.0126 -0.0810401 13.7197 0.21187L4.73421 9.19743L1.28035 5.74356C0.987466 5.45065 0.512622 5.45068 0.219683 5.74356C-0.0732275 6.03644 -0.0732275 6.51128 0.219683 6.80419L4.20388 10.7883C4.49667 11.0812 4.97187 11.081 5.26455 10.7883L14.7803 1.27253C15.0733 0.979653 15.0732 0.50478 14.7803 0.21187Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                Experts Instructors
              </li>
              <li>
                <i className="td_list_icon td_center">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7803 0.21187C14.4875 -0.0810401 14.0126 -0.0810401 13.7197 0.21187L4.73421 9.19743L1.28035 5.74356C0.987466 5.45065 0.512622 5.45068 0.219683 5.74356C-0.0732275 6.03644 -0.0732275 6.51128 0.219683 6.80419L4.20388 10.7883C4.49667 11.0812 4.97187 11.081 5.26455 10.7883L14.7803 1.27253C15.0733 0.979653 15.0732 0.50478 14.7803 0.21187Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                Flexible Time Introduce
              </li>
              <li>
                <i className="td_list_icon td_center">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7803 0.21187C14.4875 -0.0810401 14.0126 -0.0810401 13.7197 0.21187L4.73421 9.19743L1.28035 5.74356C0.987466 5.45065 0.512622 5.45068 0.219683 5.74356C-0.0732275 6.03644 -0.0732275 6.51128 0.219683 6.80419L4.20388 10.7883C4.49667 11.0812 4.97187 11.081 5.26455 10.7883L14.7803 1.27253C15.0733 0.979653 15.0732 0.50478 14.7803 0.21187Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                Support Community
              </li>
            </ul>

            <div className="td_height_40 td_height_lg_40" />

            <Link
              to="/contact"
              className="td_btn td_style_1 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Get Started</span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="td_height_112 td_height_lg_75" />
    </section>
  );
};
