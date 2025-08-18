import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import pageHeadingBg from "../../assets/img/others/page_heading_bg.jpg";
import shape3 from "../../assets/img/others/page_heading_shape_3.svg";
import shape4 from "../../assets/img/others/page_heading_shape_4.svg";
import shape5 from "../../assets/img/others/page_heading_shape_5.svg";

export const Breadcrumb = ({ title, subtitle }) => {
  useHobble();

  return (
    <section
      className="td_page_heading td_center td_bg_filed td_heading_bg text-center td_hobble"
      style={{ backgroundImage: `url(${pageHeadingBg})` }}
    >
      <div className="container">
        <div className="td_page_heading_in">
          <h1 className="td_white_color td_fs_48 td_mb_10">{title}</h1>

          <ol className="breadcrumb m-0 td_fs_20 td_opacity_8 td_semibold td_white_color">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{subtitle}</li>
          </ol>
        </div>
      </div>

      <div className="td_page_heading_shape_1 position-absolute td_hover_layer_3" />
      <div className="td_page_heading_shape_2 position-absolute td_hover_layer_5" />

      <div className="td_page_heading_shape_3 position-absolute">
        <img src={shape3} alt="Decorative shape 3" />
      </div>
      <div className="td_page_heading_shape_4 position-absolute">
        <img src={shape4} alt="Decorative shape 4" />
      </div>
      <div className="td_page_heading_shape_5 position-absolute">
        <img src={shape5} alt="Decorative shape 5" />
      </div>
      <div className="td_page_heading_shape_6 position-absolute td_hover_layer_3" />
    </section>
  );
};
