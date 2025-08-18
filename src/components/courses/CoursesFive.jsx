import React from "react";
import { Link } from "react-router-dom";

import courseShape1 from "../../assets/img/home_5/course_shape_1.svg";
import courseShape2 from "../../assets/img/home_5/course_shape_2.svg";
import userIcon from "../../assets/img/icons/user_3.svg";
import bookIcon from "../../assets/img/icons/book.svg";
import calendarIcon from "../../assets/img/icons/calendar_2.svg";
import courseThumb1 from "../../assets/img/home_5/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_5/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_5/course_thumb_3.jpg";
import courseThumb4 from "../../assets/img/home_5/course_thumb_4.jpg";
import categoryImg1 from "../../assets/img/home_5/category_img_1.png";
import categoryImg2 from "../../assets/img/home_5/category_img_2.png";
import categoryImg3 from "../../assets/img/home_5/category_img_3.png";
import categoryImg4 from "../../assets/img/home_5/category_img_4.png";

export const CoursesFive = () => {
  const courses = [
    {
      id: 1,
      thumb: courseThumb1,
      categoryImg: categoryImg1,
      seats: 150,
      semesters: 12,
      title: "Starting Matheis Courses & Build your Skills",
      rating: 4.5,
      totalRatings: 6,
      duration: "10 Weeks",
      instructor: "Robert Anderson",
      delay: "0.3s",
    },
    {
      id: 2,
      thumb: courseThumb2,
      categoryImg: categoryImg2,
      seats: 120,
      semesters: 15,
      title: "Master Technology & Elevate Your Career",
      rating: 5,
      totalRatings: 10,
      duration: "08 Weeks",
      instructor: "Robert Anderson",
      delay: "0.35s",
    },
    {
      id: 3,
      thumb: courseThumb3,
      categoryImg: categoryImg3,
      seats: 200,
      semesters: 20,
      title: "Boost Creativity & Expand Your Horizons",
      rating: 5,
      totalRatings: 30,
      duration: "12 Weeks",
      instructor: "Jhon Doe",
      delay: "0.4s",
    },
    {
      id: 4,
      thumb: courseThumb4,
      categoryImg: categoryImg4,
      seats: 170,
      semesters: 19,
      title: "Hone Leadership & Achieve Success",
      rating: 5,
      totalRatings: 50,
      duration: "20 Weeks",
      instructor: "Mary Krisey",
      delay: "0.45s",
    },
  ];

  return (
    <section className="td_gray_bg_5 td_shape_section_10">
      <div className="td_shape_position_1 position-absolute">
        <img src={courseShape1} alt="Course shape 1" />
      </div>
      <div className="td_shape_position_2 position-absolute">
        <img src={courseShape2} alt="Course shape 2" />
      </div>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
            OUR LATEST COURSES
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Pick Our Latest Courses Get <br />
            Achieved Top Score
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            Far far away, behind the word mountains, far from the Conson antia,
            <br />
            there live the blind texts. Separated they marks
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30 td_row_gap_30">
          {courses.map((course) => (
            <div
              key={course.id}
              className="col-xl-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={course.delay}
            >
              <div className="td_card td_style_5 td_type_2">
                <Link to="/course-details" className="td_card_thumb">
                  <span className="td_card_thumb_in td_radius_10">
                    <img src={course.thumb} alt={course.title} />
                  </span>
                  <img
                    src={course.categoryImg}
                    alt=""
                    className="td_card_flag"
                  />
                </Link>
                <div className="td_card_content">
                  <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                    <li>
                      <img src={userIcon} alt="User icon" />
                      <span className="td_opacity_7">{course.seats} Seats</span>
                    </li>
                    <li>
                      <img src={bookIcon} alt="Book icon" />
                      <span className="td_opacity_7">
                        {course.semesters} Semesters
                      </span>
                    </li>
                  </ul>
                  <h2 className="td_card_title td_fs_24 td_semibold td_mb_20">
                    <Link to="/course-details">{course.title}</Link>
                  </h2>
                  <div className="td_card_price_wrap td_mb_20">
                    <div className="td_card_review">
                      <div className="td_rating" data-rating={course.rating}>
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
                      <span className="td_heading_color td_opacity_5 td_fs_14">
                        (5.0/{course.totalRatings} Ratings)
                      </span>
                    </div>
                  </div>
                  <div className="td_card_btns_wrap">
                    <Link
                      to="/course-details"
                      className="td_card_label td_fs_14 td_white_color td_accent_bg"
                    >
                      <img src={calendarIcon} alt="Calendar icon" />
                      {course.duration}
                    </Link>
                    <span className="td_fs_18 td_medium td_heading_color">
                      {course.instructor}
                    </span>
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
          data-wow-delay="0.4s"
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
