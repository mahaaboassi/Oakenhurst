import React from "react";
import { VideoPlayer } from "../videos/VideoPlayer";

import videoBg from "../../assets/img/home_3/video_bg.jpg";
import featureIcon1 from "../../assets/img/home_3/feature_icon_1.svg";
import featureIcon2 from "../../assets/img/home_3/feature_icon_2.svg";
import featureIcon3 from "../../assets/img/home_3/feature_icon_3.svg";
import featureIcon4 from "../../assets/img/home_3/feature_icon_4.svg";

export const FeatureTwo = () => {
  return (
    <section className="td_features_2_wrap">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="td_features td_style_2">
          <div
            className="td_features_thumb td_radius_10 td_center td_bg_filed"
            style={{ backgroundImage: `url(${videoBg})` }}
          >
            <VideoPlayer
              trigger={
                <a
                  href="#vid002"
                  className="td_player_btn_wrap td_video_open td_medium td_heading_color wow zoomIn"
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

          <div className="td_features_content_wrap">
            <div
              className="td_features_content td_white_bg td_radius_10 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_section_heading td_style_1">
                <h2 className="td_section_title td_fs_48 mb-0">
                  Our Facilities
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                  Far far away, behind the word mountains, far from the Conson
                  antia, there live the blind texts. Separated they marks
                </p>
              </div>
              <div className="td_height_40 td_height_lg_40" />
              <ul className="td_feature_list td_mp_0">
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon1} alt="Brand Integration Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                      Brand Integrations
                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                      Far from the Conson antia, there live the blind texts.
                      Separated they marks
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon2} alt="Accreditation Support Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                      Accreditation Support
                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                      Far from the Conson antia, there live the blind texts.
                      Separated they marks
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon3} alt="Brand Integration Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                      Brand Integrations
                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                      Far from the Conson antia, there live the blind texts.
                      Separated they marks
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon4} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                      Expert Instructor Study
                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                      Far from the Conson antia, there live the blind texts.
                      Separated they marks
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
