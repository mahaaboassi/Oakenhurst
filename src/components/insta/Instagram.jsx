import React from "react";
import { Link } from "react-router-dom";

import instagram1 from "../../assets/img/home_8/instagram_1.jpg";
import instagram2 from "../../assets/img/home_8/instagram_2.jpg";
import instagram3 from "../../assets/img/home_8/instagram_3.jpg";
import instagram4 from "../../assets/img/home_8/instagram_4.jpg";
import instagram5 from "../../assets/img/home_8/instagram_5.jpg";
import instagram6 from "../../assets/img/home_8/instagram_6.jpg";

export const Instagram = () => {
  return (
    <>
      <div className="container">
        <div className="td_height_112 td_height_lg_75" />
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            RECIPES
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Follow Me On Instagram
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />
      </div>
      <ul
        className="td_instagram_list td_style_1 td_mp_0 wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        {[
          instagram1,
          instagram2,
          instagram3,
          instagram4,
          instagram5,
          instagram6,
        ].map((img, index) => (
          <li key={index}>
            <Link to="#">
              <img src={img} alt={`Instagram post ${index + 1}`} />
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
        ))}
      </ul>
      <div className="td_height_30 td_height_lg_30" />
    </>
  );
};
