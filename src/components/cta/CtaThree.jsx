import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import ctaShape1 from "../../assets/img/home_8/cta_shape_1.svg";
import ctaShape2 from "../../assets/img/home_8/cta_shape_2.svg";
import ctaShape3 from "../../assets/img/home_8/cta_shape_3.svg";
import ctaShape4 from "../../assets/img/home_8/cta_shape_4.svg";

export const CtaThree = () => {
  useHobble();

  return (
    <section className="td_cta td_style_4 text-center position-relative td_hobble">
      <div className="td_height_120 td_height_lg_70" />
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <h2 className="td_fs_48 td_mb_30">
          Easy to Learn Spoken, Reading & Get <br />
          Access All Free File
        </h2>
        <p className="td_fs_18 td_heading_color td_opacity_7 td_mb_40">
          Far far away, behind the word mountains, far from the Conson antia,
          there <br />
          live the blind texts. Separated they marks
        </p>
        <Link
          to="/courses-grid-view"
          className="td_btn td_style_1 td_radius_10 td_medium"
        >
          <span className="td_btn_in td_white_color td_accent_bg">
            <span>View Our Program</span>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M15.1575 4.34302L3.84375 15.6567"
                stroke="currentColor"
              ></path>
              <path
                d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                stroke="currentColor"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
      <div className="td_cta_shape_1 position-absolute td_hover_layer_3">
        <img src={ctaShape1} alt="CTA Shape 1" />
      </div>
      <div className="td_cta_shape_2 position-absolute td_hover_layer_5">
        <img src={ctaShape2} alt="CTA Shape 2" />
      </div>
      <div className="td_cta_shape_3 position-absolute td_hover_layer_3">
        <img src={ctaShape3} alt="CTA Shape 3" />
      </div>
      <div className="td_cta_shape_4 position-absolute">
        <img src={ctaShape4} alt="CTA Shape 4" />
      </div>
      <div className="td_cta_shape_5 position-absolute td_hover_layer_3" />
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
