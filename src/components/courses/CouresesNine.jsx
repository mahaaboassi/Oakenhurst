import React from "react";
import { Link } from "react-router-dom";

import courseThumb1 from "../../assets/img/home_1/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_1/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_1/course_thumb_3.jpg";
import userIcon from "../../assets/img/icons/user_3.svg";
import bookIcon from "../../assets/img/icons/book.svg";

export const CouresesNine = () => {
  const courses = [
    {
      id: 1,
      label: "New",
      image: courseThumb1,
      seats: 150,
      semesters: 12,
      category: "Data Analytics",
      title: "Starting Reputed Education & Build your Skills",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      rating: 4.5,
      totalRatings: 5,
    },
    {
      id: 2,
      label: "New",
      image: courseThumb2,
      seats: 100,
      semesters: 20,
      category: "Software Engeneer",
      title: "Master Technology & Elevate Your Career",
      description:
        "Unlock the power of technology to drive your career forward.",
      rating: 5,
      totalRatings: 10,
    },
    {
      id: 3,
      label: "New",
      image: courseThumb3,
      seats: 300,
      semesters: 8,
      category: "Bachelor Of Arts",
      title: "Boost Creativity & Expand Your Horizons",
      description:
        "Discover innovative techniques to enhance your creative thinking.",
      rating: 5,
      totalRatings: 12,
    },
  ];

  return (
    <section>
      <div className="td_height_60 td_height_lg_60" />
      <div className="container">
        <h2 className="td_fs_48 td_mb_50">Courses you May Like</h2>

        <div className="row td_gap_y_30 td_row_gap_30">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-4 col-md-6">
              <div className="td_card td_style_3 d-block td_radius_10">
                <span className="td_card_label td_accent_bg td_white_color">
                  {course.label}
                </span>
                <Link to="/course-details" className="td_card_thumb">
                  <img src={course.image} alt="Course thumbnail" />
                </Link>
                <div className="td_card_info td_white_bg">
                  <div className="td_card_info_in">
                    <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
                      <li>
                        <img src={userIcon} alt="User icon" />
                        <span className="td_opacity_7">
                          {course.seats} Seats
                        </span>
                      </li>
                      <li>
                        <img src={bookIcon} alt="Book icon" />
                        <span className="td_opacity_7">
                          {course.semesters} Semesters
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/courses-grid-with-sidebar"
                      className="td_card_category td_fs_14 td_bold td_heading_color td_mb_14"
                    >
                      <span>{course.category}</span>
                    </Link>
                    <h2 className="td_card_title td_fs_24 td_mb_16">
                      <Link to="/course-details">{course.title}</Link>
                    </h2>
                    <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
                      {course.description}
                    </p>
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
                      <span className="td_heading_color td_opacity_5 td_medium">
                        (5.0/{course.totalRatings} Ratings)
                      </span>
                    </div>
                    <div className="td_card_btn">
                      <Link
                        to="/cart"
                        className="td_btn td_style_1 td_radius_10 td_medium"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>Enroll Now</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
