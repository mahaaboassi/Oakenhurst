import React from "react";

import featureIcon1 from "../../assets/img/home_7/feature_icon_1.svg";
import featureIcon2 from "../../assets/img/home_7/feature_icon_2.svg";
import featureIcon3 from "../../assets/img/home_7/feature_icon_3.svg";
import featureIcon4 from "../../assets/img/home_7/feature_icon_4.svg";

export const FeatureThree = () => {
  const features = [
    {
      icon: featureIcon1,
      title: "Commitment",
      delay: "0.2s",
    },
    {
      icon: featureIcon2,
      title: "Professional",
      delay: "0.25s",
    },
    {
      icon: featureIcon3,
      title: "Experiences",
      delay: "0.3s",
    },
    {
      icon: featureIcon4,
      title: "Personal Motivate",
      delay: "0.35s",
    },
  ];

  return (
    <div className="td_heading_bg">
      <div className="td_height_80 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_30">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-md-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={feature.delay}
            >
              <div className="td_iconbox td_style_9">
                <div className="td_iconbox_icon td_center td_accent_bg td_radius_10">
                  <img src={feature.icon} alt={`Feature icon ${index + 1}`} />
                </div>
                <div className="td_iconbox_right">
                  <h3 className="td_iconbox_title td_white_color td_fs_20 td_mb_8">
                    {feature.title}
                  </h3>
                  <p className="td_iconbox_subtitle mb-0 td_fs_14 td_white_color td_opacity_7">
                    Far far away, behind the word mountains, far from the
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="td_height_80 td_height_lg_80" />
    </div>
  );
};
