import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/img/icons/user_3.svg";
import book from "../../assets/img/icons/book.svg";
import courseThumb1 from "../../assets/img/home_3/course_thumb_1.jpg";
import courseThumb5 from "../../assets/img/home_3/course_thumb_5.jpg";
import courseThumb6 from "../../assets/img/home_3/course_thumb_6.jpg";
import courseThumb7 from "../../assets/img/home_3/course_thumb_7.jpg";
import courseThumb8 from "../../assets/img/home_3/course_thumb_8.jpg";
import courseThumb9 from "../../assets/img/home_3/course_thumb_9.jpg";
import courseThumb10 from "../../assets/img/home_3/course_thumb_10.jpg";
import courseThumb11 from "../../assets/img/home_3/course_thumb_11.jpg";
import courseThumb12 from "../../assets/img/home_3/course_thumb_12.jpg";
import courseThumb13 from "../../assets/img/home_3/course_thumb_13.jpg";
import courseThumb14 from "../../assets/img/home_3/course_thumb_14.jpg";
import courseThumb15 from "../../assets/img/home_3/course_thumb_15.jpg";

export const CoursesAllList = () => {
  const courses = [
    {
      id: 1,
      thumb: courseThumb1,
      label: "New",
      seats: 150,
      semesters: 12,
      title: "Starting Matheis Courses & Build your Skills",
      rating: 4.5,
      totalRatings: 6,
      price: 39,
      instructor: "Robert Anderson",
    },
    {
      id: 2,
      thumb: courseThumb5,
      label: "New",
      seats: 120,
      semesters: 15,
      title: "Master Technology & Elevate Your Career",
      rating: 5,
      totalRatings: 10,
      price: 89,
      instructor: "Robert Anderson",
    },
    {
      id: 3,
      thumb: courseThumb6,
      label: "Best Seller",
      seats: 200,
      semesters: 20,
      title: "Boost Creativity & Expand Your Horizons",
      rating: 5,
      totalRatings: 30,
      price: 19,
      instructor: "Jhon Doe",
    },
    {
      id: 4,
      thumb: courseThumb7,
      label: "New",
      seats: 170,
      semesters: 19,
      title: "Hone Leadership & Achieve Success",
      rating: 5,
      totalRatings: 50,
      price: 89,
      instructor: "Mary Krisey",
    },
    {
      id: 5,
      thumb: courseThumb8,
      label: "Best Seller",
      seats: 150,
      semesters: 12,
      title: "Starting Matheis Courses & Build your Skills",
      rating: 4.5,
      totalRatings: 6,
      price: 39,
      instructor: "Robert Anderson",
    },
    {
      id: 6,
      thumb: courseThumb9,
      label: "Best Seller",
      seats: 120,
      semesters: 15,
      title: "Master Technology & Elevate Your Career",
      rating: 5,
      totalRatings: 10,
      price: 89,
      instructor: "Robert Anderson",
    },
    {
      id: 7,
      thumb: courseThumb10,
      label: "New",
      seats: 200,
      semesters: 20,
      title: "Boost Creativity & Expand Your Horizons",
      rating: 5,
      totalRatings: 30,
      price: 19,
      instructor: "Jhon Doe",
    },
    {
      id: 8,
      thumb: courseThumb11,
      label: "Best Seller",
      seats: 170,
      semesters: 19,
      title: "Hone Leadership & Achieve Success",
      rating: 5,
      totalRatings: 50,
      price: 89,
      instructor: "Mary Krisey",
    },
    {
      id: 9,
      thumb: courseThumb12,
      label: "Updated",
      seats: 150,
      semesters: 12,
      title: "Starting Matheis Courses & Build your Skills",
      rating: 4.5,
      totalRatings: 6,
      price: 39,
      instructor: "Robert Anderson",
    },
    {
      id: 10,
      thumb: courseThumb13,
      label: "Best Seller",
      seats: 120,
      semesters: 15,
      title: "Master Technology & Elevate Your Career",
      rating: 5,
      totalRatings: 10,
      price: 89,
      instructor: "Robert Anderson",
    },
    {
      id: 11,
      thumb: courseThumb14,
      label: "New",
      seats: 200,
      semesters: 20,
      title: "Boost Creativity & Expand Your Horizons",
      rating: 5,
      totalRatings: 30,
      price: 19,
      instructor: "Jhon Doe",
    },
    {
      id: 12,
      thumb: courseThumb15,
      label: "New",
      seats: 170,
      semesters: 19,
      title: "Hone Leadership & Achieve Success",
      rating: 5,
      totalRatings: 50,
      price: 89,
      instructor: "Mary Krisey",
    },
  ];

  return (
    <div className="row td_gap_y_30 td_row_gap_30">
      {courses.map((course) => (
        <div key={course.id} className="col-xl-6">
          <div className="td_card td_style_5 td_type_3">
            <Link to="/course-details" className="td_card_thumb">
              <span className="td_card_thumb_in td_radius_10">
                <img src={course.thumb} alt={course.title} />
                <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
                  {course.label}
                </span>
              </span>
            </Link>
            <div className="td_card_content">
              <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                <li>
                  <img src={user} alt="User icon" />
                  <span className="td_opacity_7">{course.seats} Seats</span>
                </li>
                <li>
                  <img src={book} alt="Book icon" />
                  <span className="td_opacity_7">
                    {course.semesters} Semesters
                  </span>
                </li>
              </ul>
              <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                <Link to="/course-details">{course.title}</Link>
              </h2>
              <div className="td_card_price_wrap td_mb_12">
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
                <span className="td_card_price td_accent_color td_fs_18 td_medium">
                  ${course.price}
                </span>
              </div>
              <div className="td_card_btns_wrap">
                <Link
                  to="/blog-details"
                  className="td_btn td_style_1 td_type_3 td_radius_10 td_medium td_fs_14"
                >
                  <span className="td_btn_in td_accent_color">
                    <span>Enroll Now</span>
                  </span>
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
  );
};
