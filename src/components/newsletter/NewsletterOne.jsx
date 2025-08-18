import React from "react";

import newsletterImg1 from "../../assets/img/home_4/newsletter_img_1.png";
import newsletterImg2 from "../../assets/img/home_4/newsletter_img_2.png";

export const NewsletterOne = () => {
  return (
    <div className="td_newsletter td_style_1 td_type_1 td_center">
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <h2 className="td_fs_36 td_mb_20 text-center td_semibold">
          Quickly Get Update News & Offer <br />
          With Admission News
        </h2>
        <form action="#" className="td_newsletter_form">
          <input
            type="email"
            className="td_newsletter_input"
            placeholder="Email address"
          />
          <button
            type="submit"
            className="td_btn td_style_1 td_radius_30 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Subscribe Now</span>
            </span>
          </button>
        </form>
      </div>
      <div
        className="td_newsletter_img_1 position-absolute wow fadeInLeft"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <img src={newsletterImg1} alt="Newsletter decoration 1" />
      </div>
      <div
        className="td_newsletter_img_2 position-absolute wow fadeInRight"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <img src={newsletterImg2} alt="Newsletter decoration 2" />
      </div>
    </div>
  );
};
