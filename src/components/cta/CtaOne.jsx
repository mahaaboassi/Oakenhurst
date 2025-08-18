import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";
import { Link } from "react-router-dom";

import ctaImg from "../../assets/img/home_4/cta_img.png";
import ctaShape1 from "../../assets/img/home_4/cta_shape_1.svg";
import ctaShape2 from "../../assets/img/home_4/cta_shape_2.svg";
import ctaShape3 from "../../assets/img/home_4/cta_shape_3.svg";
import ctaShape4 from "../../assets/img/home_4/cta_shape_4.svg";
import ctaShape5 from "../../assets/img/home_4/cta_shape_5.svg";
import ctaShape6 from "../../assets/img/home_4/cta_shape_6.svg";
import ctaShape7 from "../../assets/img/home_4/cta_shape_7.svg";
import ctaShape8 from "../../assets/img/home_4/cta_shape_8.svg";

export const CtaOne = () => {
  useHobble();

  return (
    <section className="td_cta td_style_2 td_accent_bg td_hobble">
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_cta_in wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading td_style_1">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color">
              BEST KINDERGARDEN SCHOOL
            </p>
            <h2 className="td_section_title td_fs_48 td_mb_20 td_white_color">
              Commitment To Best Educations Services
            </h2>
            <p className="td_section_subtitle td_fs_18 td_mb_28 td_white_color td_opacity_9">
              Far far away, behind the word mountains, far from the Consonantia,
              there live the blind texts. Separated they marks grove right at
              the coast of the Semantics
            </p>
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_heading_color td_white_bg">
                <span>Get Started</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="td_cta_img wow fadeInRight"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
        src={ctaImg}
        alt="CTA illustration"
      />
      <div className="position-absolute td_cta_shape_1 td_hover_layer_3">
        <img src={ctaShape1} alt="Decorative shape 1" />
      </div>
      <div className="position-absolute td_cta_shape_2 td_hover_layer_5">
        <img src={ctaShape2} alt="Decorative shape 2" />
      </div>
      <div className="position-absolute td_cta_shape_3">
        <img src={ctaShape3} alt="Decorative shape 3" />
      </div>
      <div className="position-absolute td_cta_shape_4 td_hover_layer_5">
        <img src={ctaShape4} alt="Decorative shape 4" />
      </div>
      <div className="position-absolute td_cta_shape_5">
        <img src={ctaShape5} alt="Decorative shape 5" />
      </div>
      <div className="position-absolute td_cta_shape_6 td_hover_layer_3">
        <img src={ctaShape6} alt="Decorative shape 6" />
      </div>
      <div className="position-absolute td_cta_shape_7">
        <img src={ctaShape7} alt="Decorative shape 7" />
      </div>
      <div className="position-absolute td_cta_shape_8 td_hover_layer_5">
        <img src={ctaShape8} alt="Decorative shape 8" />
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
