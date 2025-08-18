import React from "react";
import { Link } from "react-router-dom";

import courseThumb1 from "../../assets/img/home_8/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_8/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_8/course_thumb_3.jpg";
import userIcon from "../../assets/img/icons/user_3.svg";
import cloudIcon from "../../assets/img/icons/cloud.svg";

export const CoursesEight = () => {
  const courses = [
    {
      id: 1,
      image: courseThumb1,
      label: "Jelly Meat Box",
      seats: "50",
      shift: "Night Shifts",
      title: "Complete a Positive way Thinking to passionate",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      ratings: {
        score: 5.0,
        count: 5,
      },
      delay: "0.25s",
    },
    {
      id: 2,
      image: courseThumb2,
      label: "Soda Food",
      seats: "50",
      shift: "Night Shifts",
      title: "Nutrition Coco Basic Class for Indian Food",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      ratings: {
        score: 5.0,
        count: 22,
      },
      delay: "0.3s",
    },
    {
      id: 3,
      image: courseThumb3,
      label: "Street Fuska",
      seats: "50",
      shift: "Night Shifts",
      title: "Cooking Bangla Fast-food Course For Four Class",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      ratings: {
        score: 5.0,
        count: 10,
      },
      delay: "0.35s",
    },
  ];

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Popular Courses
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            The Best Kitchen Coaching <br />
            Services Academy
          </h2>
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
              <div className="td_card td_style_3 td_type_3 d-block td_accent_bg">
                <Link to="/course-details" className="td_card_thumb">
                  <img src={course.image} alt="course thumbnail" />
                  <span className="td_card_lable td_accent_bg td_white_color td_fs_14 td_medium td_radius_10">
                    {course.label}
                  </span>
                </Link>
                <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color td_white_bg">
                  <li>
                    <img src={userIcon} alt="user icon" />
                    <span className="td_opacity_7">{course.seats} Seats</span>
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
                      <a
                        href="cart.html"
                        className="td_btn td_style_1 td_radius_10 td_medium"
                      >
                        <span className="td_btn_in td_accent_color td_white_bg">
                          <span>Enroll Now</span>
                        </span>
                      </a>
                      <div className="td_card_review td_fs_14">
                        <div className="td_rating" data-rating="5">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-regular fa-star"></i>
                          ))}
                          <div className="td_rating_percentage">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star fa-fw"></i>
                            ))}
                          </div>
                        </div>
                        <span className="td_white_color td_opacity_5">
                          ({course.ratings.score}/{course.ratings.count}{" "}
                          Ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="td_height_50 td_height_lg_50" />
        <div className="text-center">
          <a
            href="courses-grid-view.html"
            className="td_btn td_style_1 td_radius_10 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>See All Courses</span>
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
          </a>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
