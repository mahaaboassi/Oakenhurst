import React from "react";
import { Link } from "react-router-dom";

import aboutShape2 from "../../assets/img/home_4/about_shape_2.svg";
import aboutShape3 from "../../assets/img/home_4/about_shape_3.svg";
import aboutShape4 from "../../assets/img/home_4/about_shape_4.svg";
import aboutImg1 from "../../assets/img/home_4/about_img_1.png";
import aboutImg2 from "../../assets/img/home_4/about_img_2.png";
import aboutCircleIcon from "../../assets/img/home_4/about_img_circle_text_icon.svg";
import aboutCircleText from "../../assets/img/home_4/about_img_circle_text.svg";
import aboutIcon1 from "../../assets/img/home_4/about_icon_1.svg";
import aboutIcon2 from "../../assets/img/home_4/about_icon_2.svg";
import aboutIcon3 from "../../assets/img/home_4/about_icon_3.svg";

export const AboutFour = () => {
  return (
    <section className="td_shape_section_2">
      <div className="td_shape td_shape_position_1 td_accent_color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="37"
          viewBox="0 0 51 37"
          fill="none"
        >
          <path
            opacity="0.51"
            d="M1.76764 36.4103L25.5 1.81671L49.2324 36.4103H1.76764Z"
            stroke="currentColor"
          />
        </svg>
      </div>
      <div className="td_shape td_shape_position_2">
        <img src={aboutShape2} alt="" />
      </div>
      <div className="td_shape td_shape_position_3">
        <img src={aboutShape3} alt="" />
      </div>
      <div className="td_shape td_shape_position_4">
        <img src={aboutShape4} alt="" />
      </div>
      <div className="td_shape td_shape_position_5" />
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div className="col-xl-6">
            <div className="td_image_box td_style_5">
              <div
                className="td_image_box_img_1 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <img src={aboutImg1} alt="" />
              </div>
              <div
                className="td_image_box_img_2 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <img src={aboutImg2} alt="" />
              </div>
              <div
                className="td_image_box_circle wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="td_image_box_circle_in td_center">
                  <img
                    src={aboutCircleIcon}
                    alt=""
                    className="td_image_box_circle_icon"
                  />
                  <img
                    src={aboutCircleText}
                    alt=""
                    className="td_image_box_circle_text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_section_heading td_style_1 td_mb_30">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                About us
              </p>
              <h2 className="td_section_title td_fs_48 td_mb_30">
                We are Always Best Course For your Learning
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove right at the coast of the Semantics a large language ocean
              </p>
            </div>
            <div className="td_mb_40">
              <ul className="td_list td_style_4 td_mp_0">
                <li>
                  <div className="td_list_icon td_center">
                    <div className="td_list_icon_icon_in td_center">
                      <img src={aboutIcon1} alt="" />
                    </div>
                  </div>
                  <div className="td_list_right">
                    <h3 className="td_fs_20 td_semibold td_mb_2">
                      Kids Care Room
                    </h3>
                    <p className="mb-0 td_fs_14 td_heading_color">
                      Dislike men who are so and demoralized
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_list_icon td_center">
                    <div className="td_list_icon_icon_in td_center">
                      <img src={aboutIcon2} alt="" />
                    </div>
                  </div>
                  <div className="td_list_right">
                    <h3 className="td_fs_20 td_semibold td_mb_2">
                      Outdoor Games
                    </h3>
                    <p className="mb-0 td_fs_14 td_heading_color">
                      Dislike men who are so and demoralized
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_list_icon td_center">
                    <div className="td_list_icon_icon_in td_center">
                      <img src={aboutIcon3} alt="" />
                    </div>
                  </div>
                  <div className="td_list_right">
                    <h3 className="td_fs_20 td_semibold td_mb_2">
                      Best Mentors
                    </h3>
                    <p className="mb-0 td_fs_14 td_heading_color">
                      Dislike men who are so and demoralized
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_list_icon td_center">
                    <div className="td_list_icon_icon_in td_center">
                      <img src={aboutIcon1} alt="" />
                    </div>
                  </div>
                  <div className="td_list_right">
                    <h3 className="td_fs_20 td_semibold td_mb_2">
                      Transportations
                    </h3>
                    <p className="mb-0 td_fs_14 td_heading_color">
                      Dislike men who are so and demoralized
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <Link
              to="/about"
              className="td_btn td_style_1 td_radius_10 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>More About </span>
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
                  />
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
