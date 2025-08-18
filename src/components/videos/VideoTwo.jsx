import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import { Link } from "react-router-dom";

import contactShape1 from "../../assets/img/home_5/contact_shape_1.svg";
import contactShape2 from "../../assets/img/home_5/contact_shape_2.svg";
import contactShape3 from "../../assets/img/home_5/contact_shape_3.svg";
import contactShape4 from "../../assets/img/home_5/contact_shape_4.svg";
import videoBlock from "../../assets/img/home_5/video_block.jpg";
import { useHobble } from "../../lib/hooks/useHobble";

export const VideoTwo = () => {
  return (
    <>
      <div
        className="td_video_block td_style_2 td_center td_bg_filed"
        style={{ backgroundImage: `url(${videoBlock})` }}
      >
        <VideoPlayer
          trigger={
            <a
              href="#vid002"
              className="td_video_open wow zoomIn"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <span className="td_player_btn td_center">
                <span></span>
              </span>
            </a>
          }
        />
      </div>

      {/* contact */}
      <Contact />
    </>
  );
};

const Contact = () => {
  useHobble();

  return (
    <div className="td_contact td_style_1">
      <div className="container">
        <div className="td_contact_in td_white_bg td_radius_10 td_hobble">
          <div className="td_height_100 td_height_lg_50" />
          <div className="row align-items-center td_gap_y_30">
            <div
              className="col-lg-7 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_section_heading td_style_1">
                <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                  Contact Us
                </p>
                <h2 className="td_section_title td_fs_48 td_mb_20">
                  Fill Free Admission Learning English For Beginner
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                  Far far away, behind the word mountains, far from the Conson
                  antia, separated live the blind texts. Separated they marks.
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_contact_box td_style_2 td_accent_bg td_radius_10">
                <h3 className="td_white_color td_fs_20 td_semibold td_mb_35">
                  Create Your Demo Account Now Immediately Get Access All Online
                  Courses
                </h3>
                <form action="#">
                  <div className="td_form_field_3 td_mb_30">
                    <input
                      type="text"
                      className="td_white_color"
                      placeholder="Robert Sonica"
                      required
                    />
                    <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                      Full Name
                    </label>
                  </div>
                  <div className="td_form_field_3 td_mb_30">
                    <input
                      type="text"
                      className="td_white_color"
                      placeholder="Robert Sonica"
                      required
                    />
                    <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                      Email
                    </label>
                  </div>
                  <div className="td_form_field_3 td_mb_30">
                    <input
                      type="text"
                      className="td_white_color"
                      placeholder="Robert Sonica"
                      required
                    />
                    <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                      Phone
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_10 td_medium w-100"
                  >
                    <span className="td_btn_in td_accent_color td_white_bg">
                      <span>Get it Now</span>
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
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="td_height_100 td_height_lg_50" />
          <div className="td_contact_shape_1 position-absolute td_hover_layer_3">
            <img src={contactShape1} alt="Contact shape 1" />
          </div>
          <div className="td_contact_shape_2 position-absolute td_hover_layer_5">
            <img src={contactShape2} alt="Contact shape 2" />
          </div>
          <div className="td_contact_shape_3 position-absolute td_hover_layer_3">
            <img src={contactShape3} alt="Contact shape 3" />
          </div>
          <div className="td_contact_shape_4 position-absolute td_hover_layer_5">
            <img src={contactShape4} alt="Contact shape 4" />
          </div>
        </div>
      </div>
    </div>
  );
};
