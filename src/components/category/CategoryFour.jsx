import React from "react";
import { Link } from "react-router-dom";
import trialIcon from "../../assets/img/icons/trial.svg";

export const CategoryFour = () => {
  const categories = [
    {
      title: "Free Trial Classes",
      delay: "0.25s",
      icon: trialIcon,
    },
    {
      title: "Male & Female Tutor",
      delay: "0.3s",
      icon: trialIcon,
    },
    {
      title: "Online & Offline",
      delay: "0.35s",
      icon: trialIcon,
    },
    {
      title: "Affordable Pricing",
      delay: "0.4s",
      icon: trialIcon,
    },
  ];

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
            Top Categories
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Learning Holy Quran With <br />
            International Hafez
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_24">
          {categories.map((category) => (
            <div
              key={category.title}
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={category.delay}
            >
              <div className="td_iconbox td_style_7 td_radius_10 text-center">
                <div className="td_iconbox_icon td_accent_bg td_mb_10 td_center">
                  <img src={category.icon} alt="" />
                </div>
                <div className="td_iconbox_right">
                  <h3 className="td_iconbox_title td_fs_20 td_semibold td_mb_5">
                    {category.title}
                  </h3>
                  <p className="td_iconbox_subtitle td_fs_14 td_heading_color td_opacity_7 mb-0">
                    We are Provided Online Offline Quran Learning Courses
                  </p>
                </div>
                <Link
                  to="/courses-grid-with-sidebar"
                  className="td_iconbox_btn td_center"
                >
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 6L1 6" stroke="currentColor" />
                    <path
                      d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                      stroke="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
