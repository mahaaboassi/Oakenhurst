import React from "react";

import certificateThumb from "../../assets/img/home_3/certificate_thumb.jpg";
import achievementIcon1 from "../../assets/img/home_3/achievement_icon_1.svg";
import achievementIcon2 from "../../assets/img/home_3/achievement_icon_2.svg";
import achievementIcon3 from "../../assets/img/home_3/achievement_icon_3.svg";
import achievementIcon4 from "../../assets/img/home_3/achievement_icon_4.svg";

const achievementData = [
  {
    icon: achievementIcon1,
    title: "Industry Experts",
    description: "Behind the word mountains, far from the Consonantia.",
  },
  {
    icon: achievementIcon2,
    title: "Experts Educations",
    description: "Behind the word mountains, far from the Consonantia.",
  },
  {
    icon: achievementIcon3,
    title: "Premium Recourse",
    description: "Behind the word mountains, far from the Consonantia.",
  },
  {
    icon: achievementIcon4,
    title: "Skill Based Learning",
    description: "Behind the word mountains, far from the Consonantia.",
  },
];

export const CertificateOne = () => {
  return (
    <section className="td_heading_bg td_shape_section_9">
      <div className="td_shape_position_3 position-absolute" />
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_white_color">
            Achievement Certificate
          </p>
          <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
            Build Skills with Professionals <br />
            Certificate
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-xl-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_pr_35">
              <img
                src={certificateThumb}
                alt="Certificate"
                className="td_radius_5 w-100"
              />
            </div>
          </div>

          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="row td_gap_y_30 td_row_gap_30">
              {achievementData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="td_iconbox td_style_4 td_radius_10">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src={item.icon} alt="Achievement Icon" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_24 td_mb_12 td_semibold td_white_color">
                      {item.title}
                    </h3>
                    <p className="td_iconbox_subtitle mb-0 td_fs_14 td_white_color td_opacity_7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
