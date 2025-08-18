import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";
import { VideoPlayer } from "../videos/VideoPlayer";

import heroImg1 from "../../assets/img/home_3/hero_img_1.png";
import heroShape1 from "../../assets/img/home_3/hero_shape_1.svg";
import heroShape2 from "../../assets/img/home_3/hero_shape_2.svg";
import heroShape3 from "../../assets/img/home_3/hero_shape_3.svg";
import heroShape4 from "../../assets/img/home_3/hero_shape_4.svg";

export const HeroThree = () => {
  useHobble();

  return (
    <section className="td_hero td_style_3 td_center td_hobble">
      <div className="container">
        <div
          className="td_hero_text wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <p className="td_hero_subtitle_up td_fs_18 td_accent_color td_spacing_1 td_semibold text-uppercase td_mb_14">
            100 % Quality Qurantee
          </p>
          <h1 className="td_hero_title td_fs_64 td_mb_20">
            Build The Skills You Need To Be Successful
          </h1>
          <p className="td_hero_subtitle td_fs_18 td_heading_color td_opacity_7 td_mb_30">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="td_btns_group">
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Explore All Courses</span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
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

            <VideoPlayer
              trigger={
                <a
                  href="#vid0001"
                  className="td_player_btn_wrap td_video_open td_medium td_heading_color"
                >
                  <span className="td_player_btn td_center">
                    <span></span>
                  </span>
                  <span className="td_play_btn_text">Watch Demo Video</span>
                </a>
              }
            />
          </div>
        </div>
      </div>

      <div className="td_hero_img_box">
        <img
          src={heroImg1}
          alt="Hero"
          className="td_hero_img_1 wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        />

        <div
          className="td_hero_shape_1 td_hover_layer_3 wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.8s"
        />

        <div className="td_hero_shape_2">
          <img src={heroShape1} alt="Hero shape" className="td_hover_layer_5" />
        </div>
      </div>

      <div className="td_hero_shape_3 td_hover_layer_3" />

      <div className="td_hero_shape_4">
        <img src={heroShape2} alt="Hero shape" />
      </div>

      <div className="td_hero_shape_5">
        <img src={heroShape3} alt="Hero shape" />
      </div>

      <div className="td_hero_shape_6 td_hover_layer_3">
        <img src={heroShape4} alt="Hero shape" />
      </div>

      <div className="td_hero_shape_7 td_hover_layer_5" />
    </section>
  );
};
