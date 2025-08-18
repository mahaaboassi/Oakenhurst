import React from "react";
import { Link } from "react-router-dom";

import icon1 from "../../assets/img/home_3/category_icon_1.svg";
import icon2 from "../../assets/img/home_3/category_icon_2.svg";
import icon3 from "../../assets/img/home_3/category_icon_3.svg";
import icon4 from "../../assets/img/home_3/category_icon_4.svg";
import icon5 from "../../assets/img/home_3/category_icon_5.svg";
import icon6 from "../../assets/img/home_3/category_icon_6.svg";
import icon7 from "../../assets/img/home_3/category_icon_7.svg";
import icon8 from "../../assets/img/home_3/category_icon_8.svg";
import icon9 from "../../assets/img/home_3/category_icon_9.svg";
import icon10 from "../../assets/img/home_3/category_icon_10.svg";
import icon11 from "../../assets/img/home_3/category_icon_11.svg";
import icon12 from "../../assets/img/home_3/category_icon_12.svg";

export const CategoryTwo = () => {
  const categories = [
    {
      id: 1,
      title: "Business Management",
      icon: icon1,
    },
    {
      id: 2,
      title: "Art & Design System",
      icon: icon2,
    },
    {
      id: 3,
      title: "Art & Biography",
      icon: icon3,
    },
    {
      id: 4,
      title: "Design & Pattern",
      icon: icon4,
    },
    {
      id: 5,
      title: "Photography & Video",
      icon: icon5,
    },
    {
      id: 6,
      title: "Blockchain Develop",
      icon: icon6,
    },
    {
      id: 7,
      title: "Design System",
      icon: icon7,
    },
    {
      id: 8,
      title: "Online Educations",
      icon: icon8,
    },
    {
      id: 9,
      title: "Health & Philosophy",
      icon: icon9,
    },
    {
      id: 10,
      title: "Math & Technology",
      icon: icon10,
    },
    {
      id: 11,
      title: "Zym Center & Fitness",
      icon: icon11,
    },
    {
      id: 12,
      title: "Language Academy",
      icon: icon12,
    },
  ];

  return (
    <section className="td_gray_bg_5">
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Browse Categories
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Explore Top Category
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_24">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="col-xxl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={`0.${index + 2}s`}
            >
              <Link
                to="/courses-grid-with-sidebar"
                className="td_iconbox td_style_3 td_fs_18 td_semibold td_radius_10 td_white_bg td_heading_color"
              >
                <span className="td_iconbox_icon">
                  <img src={category.icon} alt="" />
                </span>
                <span className="td_iconbox_title">{category.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
