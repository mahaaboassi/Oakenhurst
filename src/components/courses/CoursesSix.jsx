import React from "react";
import { Link } from "react-router-dom";

import courseThumb1 from "../../assets/img/home_6/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_6/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_6/course_thumb_3.jpg";
import userIcon from "../../assets/img/icons/user_3.svg";
import cloudIcon from "../../assets/img/icons/cloud.svg";

const coursesData = [
  {
    id: 1,
    image: courseThumb1,
    label: "Jelly Meat Box",
    seats: "50 Seats",
    shift: "Night Shifts",
    title: "Easy Learn Quran Ramadan Month Free For Adult",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    ratings: "5.0/5",
  },
  {
    id: 2,
    image: courseThumb2,
    label: "Soda Food",
    seats: "50 Seats",
    shift: "Night Shifts",
    title: "Kids Nazarana Quran Learning Free For Child.",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    ratings: "5.0/22",
  },
  {
    id: 3,
    image: courseThumb3,
    label: "Street Fuska",
    seats: "50 Seats",
    shift: "Night Shifts",
    title: "Quran with Tajwid Learning Free For Kids.",
    description:
      "Far far away, behind the word mountains, far from the Consonantia.",
    ratings: "5.0/10",
  },
];

export const CoursesSix = () => {
  return (
    <section className="td_gray_bg_8">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
            Popular Courses
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            We are the Best Quran Learning <br />
            Services Academy
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          {coursesData.map((course, index) => (
            <div
              key={course.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={`0.${index + 3}s`}
            >
              <div className="td_card td_style_3 td_type_3 d-block td_accent_bg">
                <Link to="/course-details" className="td_card_thumb">
                  <img src={course.image} alt="" />
                  <span className="td_card_lable td_accent_bg td_white_color td_fs_14 td_medium">
                    {course.label}
                  </span>
                </Link>
                <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color td_white_bg">
                  <li>
                    <img src={userIcon} alt="user icon" />
                    <span className="td_opacity_7">{course.seats}</span>
                  </li>
                  <li>
                    <img src={cloudIcon} alt="cloud icon" />
                    <span className="td_opacity_7">{course.shift}</span>
                  </li>
                </ul>
                <div className="td_card_info">
                  <div className="td_card_info_in">
                    <h2 className="td_card_title td_fs_24 td_white_color td_mb_16">
                      <Link to="/course-details">{course.title}</Link>
                    </h2>
                    <p className="td_card_subtitle td_white_color td_opacity_7 td_mb_25">
                      {course.description}
                    </p>
                    <div className="td_card_enroll">
                      <Link
                        to="/cart"
                        className="td_btn td_style_1 td_medium td_with_shadow_2"
                      >
                        <span className="td_btn_in td_accent_color td_white_bg">
                          <span>Enroll Now</span>
                        </span>
                      </Link>
                      <div className="td_card_review td_fs_14">
                        <div className="td_rating" data-rating="5">
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <div className="td_rating_percentage">
                            <i className="fa-solid fa-star fa-fw"></i>
                            <i className="fa-solid fa-star fa-fw"></i>
                            <i className="fa-solid fa-star fa-fw"></i>
                            <i className="fa-solid fa-star fa-fw"></i>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </div>
                        </div>
                        <span className="td_white_color td_opacity_5">
                          ({course.ratings} Ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="td_height_50 td_height_lg_40" />

        <div
          className="text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <Link
            to="/courses-grid-view"
            className="td_btn td_style_3 td_medium td_heading_color td_fs_18"
          >
            <span>See all Courses</span>
            <i>
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
                ></path>
                <path
                  d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </i>
          </Link>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
