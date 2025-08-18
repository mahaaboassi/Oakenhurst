import React from "react";
import { Link } from "react-router-dom";

import courseShape1 from "../../assets/img/home_4/course_shape_1.svg";
import courseShape2 from "../../assets/img/home_4/course_shape_2.svg";
import courseShape3 from "../../assets/img/home_4/course_shape_3.svg";
import courseThumb1 from "../../assets/img/home_4/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_4/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_4/course_thumb_3.jpg";
import userIcon from "../../assets/img/icons/user_3.svg";
import bookIcon from "../../assets/img/icons/book.svg";

export const CoursesFour = () => {
  const courses = [
    {
      id: 1,
      thumb: courseThumb1,
      category: "Pre-School",
      title: "Starting Reputed Education & Build your Skills",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      seats: 150,
      semesters: 12,
      delay: "0.25s",
    },
    {
      id: 2,
      thumb: courseThumb2,
      category: "DayCare",
      title: "Master Technology & Elevate Your Career lavelup",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      seats: 90,
      semesters: 8,
      delay: "0.3s",
    },
    {
      id: 3,
      thumb: courseThumb3,
      category: "Junior Nursery",
      title: "Boost Creativity & Expand Your Horizons your Skills",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      seats: 200,
      semesters: 12,
      delay: "0.35s",
    },
  ];

  return (
    <section className="td_gray_bg_7 td_shape_section_3">
      <div className="td_shape td_shape_position_1">
        <img src={courseShape1} alt="" />
      </div>
      <div className="td_shape td_shape_position_2">
        <img src={courseShape2} alt="" />
      </div>
      <div className="td_shape td_shape_position_3">
        <img src={courseShape3} alt="" />
      </div>

      <div className="td_shape td_shape_position_4" />
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Popular Courses
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Academic Courses</h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          {courses.map((course) => (
            <div
              key={course.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={course.delay}
            >
              <div className="td_card td_style_3 td_type_1 d-block td_radius_10">
                <Link to="/course-details" className="td_card_thumb">
                  <img src={course.thumb} alt="" />
                </Link>
                <div className="td_card_info">
                  <div className="td_card_info_in">
                    <Link
                      to="/courses-grid-with-sidebar"
                      className="td_card_category td_fs_14 td_semibold td_heading_color td_mb_14"
                    >
                      <span>{course.category}</span>
                    </Link>
                    <h2 className="td_card_title td_fs_24 td_mb_16">
                      <Link to="/course-details">{course.title}</Link>
                    </h2>
                    <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
                      {course.description}
                    </p>
                    <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
                      <li>
                        <img src={userIcon} alt="" />
                        <span className="td_opacity_7">
                          {course.seats} Seats
                        </span>
                      </li>
                      <li>
                        <img src={bookIcon} alt="" />
                        <span className="td_opacity_7">
                          {course.semesters} Semesters
                        </span>
                      </li>
                    </ul>
                    <div className="td_card_btn">
                      <Link
                        to="/cart"
                        className="td_btn td_style_1 td_radius_30 td_medium"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>Enroll Now</span>
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
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
                      </Link>
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
          data-wow-delay="0.3s"
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
