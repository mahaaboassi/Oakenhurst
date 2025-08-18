import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";

export const NewsletterTwo = () => {
  useHobble();

  return (
    <div className="td_newsletter td_style_1 td_type_2 position-relative td_hobble">
      <div className="td_height_116 td_height_lg_75" />
      <div
        className="container wow fadeInUp"
        data-wow-duration="1.1s"
        data-wow-delay="0.2s"
      >
        <p className="text-center td_fs_20 td_white_color td_mb_10 td_opacity_7">
          Join Our Community!
        </p>
        <h2 className="td_fs_36 td_mb_40 text-center td_white_color">
          Sign up with your email address for on all our <br />
          new courses and events!
        </h2>
        <form action="#" className="td_newsletter_form">
          <input
            type="email"
            className="td_newsletter_input"
            placeholder="Email address"
          />
          <button
            type="submit"
            className="td_btn td_style_1 td_fs_20 td_semibold"
          >
            <span className="td_btn_in td_white_color td_heading_bg">
              <span>Subscribe Now</span>
            </span>
          </button>
        </form>
      </div>
      <div className="td_newsletter_shape_1 position-absolute td_hover_layer_3" />
      <div className="td_newsletter_shape_2 position-absolute td_hover_layer_5" />
      <div className="td_newsletter_shape_3 position-absolute td_hover_layer_3" />
      <div className="td_newsletter_shape_4 position-absolute td_hover_layer_5">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Newsletter icon"
        >
          <circle cx="50" cy="50" r="49.5" fill="white" stroke="white" />
          <path
            d="M40 50.5V33H50.5V42.8438H61L53 68H46.5625L47.875 50.5H40Z"
            fill="#006766"
            stroke="#006766"
          />
        </svg>
      </div>
      <div className="td_height_116 td_height_lg_75" />
    </div>
  );
};
