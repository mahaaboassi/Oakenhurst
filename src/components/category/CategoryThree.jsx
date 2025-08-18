import React from "react";
import { Link } from "react-router-dom";

import categoryImg1 from "../../assets/img/home_5/category_img_1.png";
import categoryImg2 from "../../assets/img/home_5/category_img_2.png";
import categoryImg3 from "../../assets/img/home_5/category_img_3.png";
import categoryImg4 from "../../assets/img/home_5/category_img_4.png";
import categoryImg5 from "../../assets/img/home_5/category_img_5.png";
import categoryImg6 from "../../assets/img/home_5/category_img_6.png";
import categoryImg7 from "../../assets/img/home_5/category_img_7.png";
import categoryImg8 from "../../assets/img/home_5/category_img_8.png";

export const CategoryThree = () => {
  const categories = [
    { img: categoryImg1, name: "Russia", courses: "30+" },
    { img: categoryImg2, name: "German", courses: "60+" },
    { img: categoryImg3, name: "India", courses: "56+" },
    { img: categoryImg4, name: "South Korea", courses: "50+" },
    { img: categoryImg5, name: "America", courses: "80+" },
    { img: categoryImg6, name: "Canada", courses: "30+" },
    { img: categoryImg7, name: "Australia", courses: "39+" },
    { img: categoryImg8, name: "Japanese", courses: "48+" },
  ];

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
            Top categories
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Explore Most Spoken Language <br />
            in The World
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        <div
          className="row td_gap_y_24 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          {categories.map((category, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="td_iconbox td_style_6 td_radius_10">
                <div className="td_iconbox_icon">
                  <img
                    src={category.img}
                    alt={`${category.name} language category`}
                  />
                </div>
                <div className="td_iconbox_right">
                  <h3 className="td_iconbox_title td_fs_20 td_semibold td_mb_4">
                    {category.name}
                  </h3>
                  <p className="td_iconbox_subtitle td_heading_color td_opacity_7 mb-0">
                    {category.courses} Courses
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
                  >
                    <path
                      d="M17 6L1 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
