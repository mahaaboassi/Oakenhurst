import React from "react";
import { Link } from "react-router-dom";

import userIcon from "../../assets/img/icons/user_3.svg";
import bookIcon from "../../assets/img/icons/book.svg";

export const CoursesOneItem = ({
  src,
  seats,
  semesters,
  subtitle,
  title,
  description,
  totalRatings,
}) => {
  return (
    <div className="td_card td_style_3 d-block td_radius_10">
      <Link to="/course-details" className="td_card_thumb">
        <img src={src} alt="Course thumbnail" />
      </Link>
      <div className="td_card_info td_white_bg">
        <div className="td_card_info_in">
          <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
            <li>
              <img src={userIcon} alt="User icon" />
              <span className="td_opacity_7">{seats} Seats</span>
            </li>
            <li>
              <img src={bookIcon} alt="Book icon" />
              <span className="td_opacity_7">{semesters} Semesters</span>
            </li>
          </ul>

          <Link
            to="/courses-grid-with-sidebar"
            className="td_card_category td_fs_14 td_bold td_heading_color td_mb_14"
          >
            <span>{subtitle}</span>
          </Link>

          <h2 className="td_card_title td_fs_24 td_mb_16">
            <Link to="/course-details">{title}</Link>
          </h2>

          <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
            {description}
          </p>

          <div className="td_card_review">
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

            <span className="td_heading_color td_opacity_5 td_medium">
              (5.0/{totalRatings} Ratings)
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
  );
};
