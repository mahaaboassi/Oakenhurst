import React from "react";
import { Link } from "react-router-dom";

import calendarIcon from "../../assets/img/icons/calendar.svg";
import userIcon from "../../assets/img/icons/user.svg";

export const BlogItem = ({
  image,
  date,
  author,
  title,
  excerpt,
  link = "/blog-details",
}) => {
  return (
    <div className="td_post td_style_1">
      <Link to={link} className="td_post_thumb d-block">
        <img src={image} alt={title} />
        <i className="fa-solid fa-link"></i>
      </Link>

      <div className="td_post_info">
        <div className="td_post_meta td_fs_14 td_medium td_mb_20">
          <span>
            <img src={calendarIcon} alt="calendar icon" />
            {date}
          </span>

          <span>
            <img src={userIcon} alt="user icon" />
            {author}
          </span>
        </div>

        <h2 className="td_post_title td_fs_24 td_medium td_mb_16">
          <Link to={link}>{title}</Link>
        </h2>

        <p className="td_post_subtitle td_mb_24 td_heading_color td_opacity_7">
          {excerpt}
        </p>

        <Link
          to={link}
          className="td_btn td_style_1 td_type_3 td_radius_30 td_medium"
        >
          <span className="td_btn_in td_accent_color">
            <span>Read More</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
