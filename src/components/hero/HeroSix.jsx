import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";
import { VideoPlayer } from "../videos/VideoPlayer";

// Import all images
import heroImg from "../../assets/img/home_6/hero_img.jpg";
import heroImg2 from "../../assets/img/home_6/hero_img_2.jpg";
import avatar1 from "../../assets/img/avatar_1.png";
import avatar2 from "../../assets/img/avatar_2.png";
import avatar3 from "../../assets/img/avatar_3.png";
import heroShape1 from "../../assets/img/home_6/hero_shape_1.svg";
import heroShape2 from "../../assets/img/home_6/hero_shape_2.svg";
import heroShape3 from "../../assets/img/home_6/hero_shape_3.svg";
import heroShape4 from "../../assets/img/home_6/hero_shape_4.svg";
import heroShape5 from "../../assets/img/home_6/hero_shape_5.svg";
import heroShape6 from "../../assets/img/home_6/hero_shape_6.svg";
import heroShape7 from "../../assets/img/home_6/hero_shape_7.svg";
import heroShape8 from "../../assets/img/home_6/hero_shape_8.svg";

export const HeroSix = () => {
  useHobble();

  return (
    <section className="td_hero td_style_6 td_hobble">
      <div className="container">
        <div className="row td_gap_y_50">
          <div
            className="col-lg-6 td_center wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_hero_text">
              <p className="td_hero_subtitle_up td_fs_18 td_accent_color td_spacing_1 td_medium td_mb_20">
                {`Quran's is Peach of Muslim`}
              </p>
              <h1 className="td_hero_title td_fs_64 td_mb_24">
                Quran Learning is Most important of Muslim ummah
              </h1>
              <p className="td_hero_subtitle td_fs_18 td_heading_color td_opacity_8 td_mb_30">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove
              </p>
              <Link
                to="/signup"
                className="td_btn td_style_1 td_medium td_with_shadow_2"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Trial For Free</span>
                </span>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_hero_img">
              <img src={heroImg} alt="Hero" />
              <div className="td_hero_video_block">
                <img src={heroImg2} alt="Hero 2" />

                <VideoPlayer
                  trigger={
                    <a
                      href="#vid01"
                      className="td_video_open td_medium td_heading_color"
                    >
                      <span className="td_player_btn td_center">
                        <span></span>
                      </span>
                    </a>
                  }
                />
              </div>
              <div className="td_avatars_wrap td_type_1 td_hover_layer_3">
                <div className="td_avatars">
                  <div>
                    <img src={avatar1} alt="Avatar 1" />
                  </div>
                  <div>
                    <img src={avatar2} alt="Avatar 2" />
                  </div>
                  <div>
                    <img src={avatar3} alt="Avatar 3" />
                  </div>
                  <div>
                    <img src={avatar3} alt="Avatar 3" />
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div>
                  <p className="mb-0 td_fs_14 td_semibold">2k Students</p>
                  <p className="mb-0 td_fs_12 td_opacity_6">
                    Join Our Online Class
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_hero_shape_1 position-absolute td_hover_layer_3">
        <img src={heroShape1} alt="Hero shape 1" />
      </div>
      <div className="td_hero_shape_2 position-absolute td_hover_layer_5">
        <img src={heroShape2} alt="Hero shape 2" />
      </div>
      <div className="td_hero_shape_3 position-absolute td_hover_layer_3">
        <img src={heroShape3} alt="Hero shape 3" />
      </div>
      <div className="td_hero_shape_4 position-absolute td_hover_layer_5">
        <img src={heroShape4} alt="Hero shape 4" />
      </div>
      <div className="td_hero_shape_5 position-absolute td_hover_layer_3">
        <img src={heroShape5} alt="Hero shape 5" />
      </div>
      <div className="td_hero_shape_6 position-absolute">
        <img src={heroShape6} alt="Hero shape 6" />
      </div>
      <div className="td_hero_shape_7 position-absolute td_hover_layer_5">
        <img src={heroShape7} alt="Hero shape 7" />
      </div>
      <div className="td_hero_shape_8 position-absolute">
        <img src={heroShape8} alt="Hero shape 8" />
      </div>
    </section>
  );
};
