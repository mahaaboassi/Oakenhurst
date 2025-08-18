import React from "react";
import { Link } from "react-router-dom";

import aboutShape1 from "../../assets/img/home_3/about_shape_1.svg";
import aboutShape2 from "../../assets/img/home_3/about_shape_2.svg";
import aboutImg1 from "../../assets/img/home_3/about_img_1.jpg";
import aboutImg2 from "../../assets/img/home_3/about_img_2.jpg";
import reviewImg from "../../assets/img/home_3/review_img.png";
import signImg from "../../assets/img/home_3/sign.svg";
import awardIcon from "../../assets/img/home_2/cs_award_box_icon.svg";
import aboutIcon1 from "../../assets/img/home_3/about_icon_1.svg";
import aboutIcon2 from "../../assets/img/home_3/about_icon_2.svg";

export const AboutThree = () => {
  return (
    <section className="td_shape_section_9">
      <div className="td_shape_position_1 position-absolute">
        <img src={aboutShape1} alt="" />
      </div>
      <div className="td_shape_position_2 position-absolute">
        <img src={aboutShape2} alt="" />
      </div>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="row td_gap_y_40 align-items-center">
          <div className="col-lg-6">
            <div className="td_image_box td_style_3">
              <div
                className="td_image_box_img_1 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.25s"
              >
                <img src={aboutImg1} alt="" className="td_radius_10" />
              </div>
              <div
                className="td_image_box_img_2 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <img src={aboutImg2} alt="" className="td_radius_10" />
              </div>
              <div
                className="td_review_box td_heading_bg text-center td_center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.35s"
              >
                <div className="td_review_box_in">
                  <img src={reviewImg} alt="" />
                  <h3 className="td_fs_32 td_medium td_white_color">30k+</h3>
                  <p className="mb-0 td_light td_opacity_7 td_white_color">
                    Positive Reviews
                  </p>
                </div>
              </div>
              <div
                className="td_sign_box wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="td_sign_box_in">
                  <img src={signImg} alt="" />
                  <h3 className="td_fs_20 td_semibold mb-0">
                    Jesika Rehman Roy
                  </h3>
                  <p className="mb-0 td_heading_color td_opacity_6">
                    Marketing Instructor
                  </p>
                </div>
                <svg
                  width="220"
                  height="209"
                  viewBox="0 0 220 209"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M90.7847 61.3658C91.6024 51.6359 99.3778 44.2904 108.872 44.2904H109.432L110.576 44.3708L199.107 52.276L108.927 0.757812L0 62.9865L108.927 125.219L174.727 87.6264L107.349 81.6096C97.3438 80.7169 89.9157 71.6346 90.7847 61.3658Z"
                    fill="#00001B"
                  />
                  <path
                    d="M219.905 71.3829C219.427 68.7423 217.086 66.3805 214.452 66.154L109.454 56.7779C106.028 56.4523 103.168 59.0162 102.88 62.4429C102.535 65.8041 104.996 68.8134 108.399 69.1914L207.853 78.0735V121.651C207.766 123.846 208.902 125.914 210.817 127.039C212.731 128.162 215.116 128.162 217.032 127.039C218.947 125.914 220.083 123.846 219.994 121.651V72.3617C219.994 72.0323 219.964 71.7048 219.905 71.3829Z"
                    fill="#00001B"
                  />
                  <path
                    d="M111.88 137.797C110.057 138.85 107.799 138.85 105.976 137.797L52.0037 106.964L14.5195 155.632C64.6571 160.466 97.5725 194.278 109.222 208.324C121.927 194.628 157.626 160.743 203.851 155.686L167.923 105.781L111.88 137.797Z"
                    fill="#00001B"
                  />
                </svg>
                <div className="td_award_box_icon td_center">
                  <img src={awardIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_section_heading td_style_1 td_mb_40">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                About us
              </p>
              <h2 className="td_section_title td_fs_48 td_mb_20">
                We are Always Best Course For your Learning
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove right at the coast of the Semantics a large language ocean
              </p>
            </div>
            <div className="td_mb_40 position-relative">
              <div className="td_iconbox td_style_5">
                <div className="td_iconbox_icon">
                  <div className="td_iconbox_icon_in td_center">
                    <img src={aboutIcon1} alt="" />
                  </div>
                </div>
                <div className="td_iconbox_right">
                  <h3 className="td_iconbox_title td_fs_32 td_mb_4">
                    Sharing a Screen
                  </h3>
                  <p className="td_iconbox_subtitle mb-0 td_heading_color td_fs_18 td_opacity_7">
                    There live the blind texts. Separated they live in Book
                    marks grove.
                  </p>
                </div>
              </div>
              <div className="td_height_30 td_height_lg_30" />
              <div className="td_iconbox td_style_5">
                <div className="td_iconbox_icon">
                  <div className="td_iconbox_icon_in td_center">
                    <img src={aboutIcon2} alt="" />
                  </div>
                </div>
                <div className="td_iconbox_right">
                  <h3 className="td_iconbox_title td_fs_32 td_mb_4">
                    Best Mentors
                  </h3>
                  <p className="td_iconbox_subtitle mb-0 td_heading_color td_fs_18 td_opacity_7">
                    There live the blind texts. Separated they live in Book
                    marks grove.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Explore More About </span>
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
