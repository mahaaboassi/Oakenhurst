import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

// Image imports
import avatar1 from "../../assets/img/avatar_1.png";
import avatar2 from "../../assets/img/avatar_2.png";
import avatar3 from "../../assets/img/avatar_3.png";
import heroImg1 from "../../assets/img/home_4/hero_img_1.png";
import heroImg2 from "../../assets/img/home_4/hero_img_2.png";
import heroImg3 from "../../assets/img/home_4/hero_img_3.png";
import heroImg4 from "../../assets/img/home_4/hero_img_4.png";
import heroShape1 from "../../assets/img/home_4/hero_shape_1.svg";
import heroShape2 from "../../assets/img/home_4/hero_shape_2.svg";
import heroShape3 from "../../assets/img/home_4/hero_shape_3.svg";
import heroShape4 from "../../assets/img/home_4/hero_shape_4.svg";
import heroShape5 from "../../assets/img/home_4/hero_shape_5.svg";
import heroShape6 from "../../assets/img/home_4/hero_shape_6.svg";
import heroShape7 from "../../assets/img/home_4/hero_shape_7.svg";
import heroShape8 from "../../assets/img/home_4/hero_shape_8.svg";
import heroShape9 from "../../assets/img/home_4/hero_shape_9.svg";
import heroShape10 from "../../assets/img/home_4/hero_shape_10.svg";

export const HeroFour = () => {
  useHobble();

  return (
    <section className="td_hero td_style_4 td_center text-center td_hobble">
      <div className="container">
        <div
          className="td_hero_text wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <p className="td_hero_subtitle_up td_accent_color text-uppercase td_semibold td_fs_18 td_mb_10 td_opacity_9 td_spacing_1">
            KINDERGARDEN & BABY CARE
          </p>
          <h1 className="td_hero_title td_fs_64 td_mb_20">
            We Prepare Your Child For Lifetime
          </h1>
          <p className="td_hero_subtitle td_fs_18 td_heading_color text-capitalize td_mb_40">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized
          </p>
          <div className="td_btns_group">
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Find Courses</span>
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
                  />
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                  />
                </svg>
              </span>
            </Link>
            <div className="td_avatars_wrap">
              <div className="td_avatars">
                <div>
                  <img src={avatar1} alt="Student Avatar" />
                </div>
                <div>
                  <img src={avatar2} alt="Student Avatar" />
                </div>
                <div>
                  <img src={avatar3} alt="Student Avatar" />
                </div>
                <div>
                  <img src={avatar3} alt="Student Avatar" />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div>
                <h3 className="mb-0 td_fs_20 td_semibold">2k Students</h3>
                <p className="mb-0 td_fs_18 td_opacity_6">
                  Join Our Online Class
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_hero_img_box_left">
        <div
          className="td_hero_img_1 position-absolute wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          <div className="td_hero_img_in">
            <img src={heroImg1} alt="Hero Image" />
          </div>
        </div>
        <div
          className="td_hero_img_2 position-absolute wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          <div className="td_hero_img_in">
            <img src={heroImg2} alt="Hero Image" />
          </div>
        </div>
        <div className="td_hero_shape_1 position-absolute td_hover_layer_5">
          <img src={heroShape1} alt="Shape" />
        </div>
        <div className="td_hero_shape_2 position-absolute td_hover_layer_3">
          <img src={heroShape2} alt="Shape" />
        </div>
        <div className="td_hero_shape_5 position-absolute">
          <img src={heroShape5} alt="Shape" />
        </div>
      </div>
      <div className="td_hero_img_box_right">
        <div
          className="td_hero_img_3 position-absolute wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          <div className="td_hero_img_in">
            <img src={heroImg3} alt="Hero Image" />
          </div>
        </div>
        <div
          className="td_hero_img_4 position-absolute wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          <div className="td_hero_img_in">
            <img src={heroImg4} alt="Hero Image" />
          </div>
        </div>
        <div className="td_hero_shape_3 position-absolute td_hover_layer_5">
          <img src={heroShape3} alt="Shape" />
        </div>
        <div className="td_hero_shape_4 position-absolute td_hover_layer_3">
          <img src={heroShape4} alt="Shape" />
        </div>
      </div>
      <div className="td_hero_shape_6 position-absolute td_hover_layer_3">
        <img src={heroShape6} alt="Shape" />
      </div>
      <div className="td_hero_shape_7 position-absolute">
        <img src={heroShape7} alt="Shape" />
      </div>
      <div className="td_hero_shape_8 position-absolute td_hover_layer_3">
        <img src={heroShape8} alt="Shape" />
      </div>
      <div className="td_hero_shape_9 position-absolute">
        <img src={heroShape9} alt="Shape" />
      </div>
      <div className="td_hero_shape_10 position-absolute td_hover_layer_5">
        <img src={heroShape10} alt="Shape" />
      </div>
    </section>
  );
};
