import React from "react";
import { Link } from "react-router-dom";
import { useTabs } from "../../lib/hooks/useTabs";
import { VideoPlayer } from "../videos/VideoPlayer";

import aboutImg1 from "../../assets/img/home_5/about_img_1.jpg";
import aboutImg2 from "../../assets/img/home_5/about_img_2.jpg";
import aboutShape2 from "../../assets/img/home_5/about_shape_2.svg";

export const AboutFive = () => {
  useTabs();

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_image_box td_style_6">
              <div className="td_image_box_img_1">
                <img src={aboutImg1} alt="About" />
              </div>
              <div className="td_image_box_img_2">
                <div className="td_image_box_img_2_in">
                  <img src={aboutImg2} alt="About" />

                  <VideoPlayer
                    trigger={
                      <a href="#vid0001" className="td_video_open">
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
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading td_style_1 td_mb_30">
              <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                About US
              </p>
              <h2 className="td_section_title td_fs_48 td_mb_20">
                We are the Best Language Academy in The World
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove right at the coast of the Semantics a large language ocean
              </p>
            </div>
            <div className="td_tabs td_style_1">
              <ul className="td_tab_links td_style_3 td_mp_0 td_medium td_fs_24 td_heading_color">
                <li className="active">
                  <a href="#td_tab_1">About Educve</a>
                </li>
                <li>
                  <a href="#td_tab_2">Our Mission</a>
                </li>
                <li>
                  <a href="#td_tab_3">Our Vision</a>
                </li>
              </ul>
              <div className="td_height_40 td_height_lg_30" />
              <div className="td_tab_body">
                <div className="td_tab active" id="td_tab_1">
                  <ul className="td_list td_style_5 td_mp_0">
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                        290+ Students IELTS Score 8.5
                      </h3>
                      <p className="td_fs_18 mb-0">
                        Browse the IELTS Program Admissions
                      </p>
                    </li>
                    <li>
                      <h3 className="td_fs_24 td_mb_8">
                        190+ Students PTO Top Score
                      </h3>
                      <p className="td_fs_18 mb-0">
                        Browse the PTO Program Admissions
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="td_tab" id="td_tab_2">
                  <p className="td_fs_18 mb-0">
                    Far far away, behind the word mountains, far from the
                    Consonantia, there live the blind texts. Separated they
                    marks grove right at the coast of the Semantics a large
                    language ocean <br />
                    <br />
                    Far far away, behind the word mountains, far from the
                    Consonantia, there live the blind texts. Separated they
                    marks grove.
                  </p>
                </div>
                <div className="td_tab" id="td_tab_3">
                  <p className="td_fs_18 mb-0">
                    Separated they marks grove right at the coast of the
                    Semantics a large language ocean. Far far away, behind the
                    word mountains, far from the Consonantia, there live the
                    blind texts. <br />
                    <br />
                    Far far away, behind the word mountains, far from the
                    Consonantia, there live the blind texts. Separated they
                    marks grove.
                  </p>
                </div>
              </div>
            </div>
            <div className="td_height_40 td_height_lg_40" />
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_radius_10 td_medium"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>More About</span>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                >
                  <path d="M15.1575 4.34302L3.84375 15.6567" />
                  <path d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314" />
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
