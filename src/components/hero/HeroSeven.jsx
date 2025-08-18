import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/img/home_7/hero_img.jpg";
import heroShape3 from "../../assets/img/home_7/hero_shape_3.svg";
import heroShape7 from "../../assets/img/home_7/hero_shape_7.svg";
import { useHobble } from "../../lib/hooks/useHobble";
import { VideoPlayer } from "../videos/VideoPlayer";

export const HeroSeven = () => {
  useHobble();

  return (
    <section className="td_hero td_style_7 td_center td_hobble">
      <div className="td_hero_img td_bg_filed" data-src={heroImg} />
      <div className="container">
        <div
          className="td_hero_text wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          <p className="td_hero_subtitle_up td_fs_18 td_white_color td_spacing_1 td_semibold td_opacity_7 td_mb_10">
            I am john s alex
          </p>
          <h1 className="td_hero_title td_white_color td_fs_60 td_mb_24">
            Motivation Gain the Skills to Captivate Any Audience
          </h1>
          <p className="td_hero_subtitle td_fs_18 td_white_color td_opacity_7 td_mb_30">
            Far far away, behind the word mountains, far from the Consonantia,
            there live the blind texts. Separated they marks grove
          </p>
          <div className="td_btns_group">
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_type_2 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_heading_color td_white_bg">
                <span>Explore All Courses</span>
                <span className="td_btn_icon td_center td_accent_bg td_white_color">
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </Link>

            <VideoPlayer
              trigger={
                <a
                  href="#vid001"
                  className="td_player_btn_wrap td_color_1 td_video_open td_medium td_white_color"
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

      <div className="td_hero_bg td_accent_bg" />
      <div className="td_hero_shape_1 position-absolute td_hover_layer_3" />
      <div className="td_hero_shape_2 position-absolute td_hover_layer_5" />
      <div className="td_hero_shape_3 position-absolute">
        <img src={heroShape3} alt="Hero shape 3" />
      </div>
      <div className="td_hero_shape_4 position-absolute td_hover_layer_5" />
      <div className="td_hero_shape_5 position-absolute" />
      <div className="td_hero_shape_6 position-absolute td_hover_layer_3" />
      <div className="td_hero_shape_7 position-absolute">
        <img src={heroShape7} alt="Hero shape 7" />
      </div>
    </section>
  );
};
