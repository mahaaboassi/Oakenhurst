import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";

import heroImg1 from "../../assets/img/home_5/hero_img_1.png";
import heroImg2 from "../../assets/img/home_5/hero_img_2.png";
import heroImg3 from "../../assets/img/home_5/hero_img_3.png";
import heroImg4 from "../../assets/img/home_5/hero_img_4.png";
import avatar1 from "../../assets/img/avatar_1.png";
import avatar2 from "../../assets/img/avatar_2.png";
import avatar3 from "../../assets/img/avatar_3.png";
import userIcon from "../../assets/img/icons/user_2.svg";
import heroShape5 from "../../assets/img/home_5/hero_shape_5.svg";

export const HeroFive = () => {
  useHobble();

  return (
    <section className="td_hero td_style_5 td_center td_hobble">
      <div className="container">
        <div
          className="td_hero_text wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.4s"
        >
          <p className="td_hero_subtitle_up td_fs_18 text-uppercase td_spacing_1 td_medium td_mb_20">
            Knowledge is power
          </p>
          <h1 className="td_hero_title td_fs_52 td_mb_30">
            {`Start Learning From The World’s Best Language Academy`}
          </h1>
          <p className="td_hero_subtitle td_fs_18 td_heading_color td_opacity_8 td_mb_40">
            Far far away, behind the word mountains, far from the Consonantia,
            there live the blind texts. Separated they marks grove
          </p>
          <div className="td_newsletter td_style_1">
            <form action="#" className="td_newsletter_form">
              <input
                type="email"
                className="td_newsletter_input"
                placeholder="What do you Want to learn Today?"
              />
              <button
                type="submit"
                className="td_btn td_style_1 td_radius_10 td_medium td_fs_18"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_34_3978)">
                      <path
                        d="M19.8102 18.9119L14.6466 13.8308C15.9988 12.3616 16.8296 10.4187 16.8296 8.28068C16.8289 3.7071 13.0618 0 8.41447 0C3.76713 0 0 3.7071 0 8.28068C0 12.8543 3.76713 16.5614 8.41447 16.5614C10.4224 16.5614 12.2641 15.8668 13.7107 14.7122L18.8944 19.8134C19.147 20.0622 19.5571 20.0622 19.8096 19.8134C20.0628 19.5646 20.0628 19.1607 19.8102 18.9119ZM8.41447 15.2873C4.48231 15.2873 1.29468 12.1504 1.29468 8.28068C1.29468 4.41101 4.48231 1.27403 8.41447 1.27403C12.3467 1.27403 15.5343 4.41101 15.5343 8.28068C15.5343 12.1504 12.3467 15.2873 8.41447 15.2873Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_3978">
                        <rect width="20" height="20" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Search Now</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="td_hero_img_wrap wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <div className="td_hero_img">
          <img src={heroImg1} alt="Hero" />
        </div>
        <div className="td_hero_img_1 position-absolute td_hover_layer_3">
          <img src={heroImg2} alt="Hero" />
        </div>
        <div className="td_hero_img_2 position-absolute td_hover_layer_3">
          <img src={heroImg3} alt="Hero" />
        </div>
        <div className="td_hero_img_3 position-absolute td_hover_layer_5">
          <img src={heroImg4} alt="Hero" />
        </div>
        <div className="td_avatars_wrap td_type_1 td_hover_layer_5">
          <div className="td_avatars">
            <div>
              <img src={avatar1} alt="Avatar" />
            </div>
            <div>
              <img src={avatar2} alt="Avatar" />
            </div>
            <div>
              <img src={avatar3} alt="Avatar" />
            </div>
            <div>
              <img src={avatar3} alt="Avatar" />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div>
            <p className="mb-0 td_fs_14 td_semibold td_heading_color">
              2k Students
            </p>
            <p className="mb-0 td_fs_12 td_opacity_6">Join Our Online Class</p>
          </div>
        </div>
        <div className="td_hero_funfact td_hover_layer_5">
          <img src={userIcon} alt="User icon" />
          <div>
            <p className="td_fs_40 td_bold td_heading_color">8750</p>
            <p className="td_mb_5 td_heading_color td_opacity_5 td_fs_12">
              Active Students
            </p>
          </div>
        </div>
        <div className="td_hero_shape_1 td_accent_color position-absolute">
          <svg
            width="602"
            height="602"
            viewBox="0 0 602 602"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M161.753 36.4035C207.321 12.4228 258.31 0.61671 309.781 2.12897C361.252 3.64123 411.46 18.4206 455.542 45.0353C499.623 71.6501 536.084 109.198 561.393 154.042C586.702 198.887 600 249.507 600 301"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="20 20"
            />
            <path
              d="M67.4657 487.715C42.427 456.397 23.9433 420.362 13.1142 381.755C2.2851 343.148 -0.66817 302.758 4.43008 262.986C9.52834 223.215 22.574 184.875 42.7908 150.248C63.0077 115.62 89.9828 85.4132 122.111 61.4231"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="20 20"
            />
            <path
              d="M599.556 317.316C596.535 372.583 578.232 425.927 546.686 471.407C515.14 516.888 471.588 552.719 420.882 574.911C370.175 597.102 314.304 604.784 259.49 597.099C204.676 589.415 153.071 566.666 110.422 531.386"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="20 20"
            />
          </svg>
        </div>
      </div>
      <div className="td_hero_shape_2 position-absolute td_hover_layer_3" />
      <div className="td_hero_shape_3 position-absolute td_hover_layer_5" />
      <div className="td_hero_shape_4 position-absolute td_hover_layer_3" />
      <div className="td_hero_shape_5 position-absolute td_hover_layer_5">
        <img src={heroShape5} alt="Hero shape" />
      </div>
    </section>
  );
};
