import React from "react";
import { Link } from "react-router-dom";
import { useTabs } from "../../lib/hooks/useTabs";

import pricingIcon1 from "../../assets/img/home_3/pricing_icon_1.svg";
import pricingIcon2 from "../../assets/img/home_3/pricing_icon_2.svg";
import pricingIcon3 from "../../assets/img/home_3/pricing_icon_3.svg";

export const PricingOne = () => {
  useTabs();

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="td_tabs td_style_1">
          {/* top */}
          <div
            className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading_left">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_9">
                Pricing Plan
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Selected a Pricing Plan <br />
                that Suit For you
              </h2>
            </div>
            <div className="td_section_heading_right td_pricing_switch">
              <ul className="td_tab_links td_pricing_control td_fs_24 td_semibold td_center td_mp_0">
                <li className="active">
                  <a href="#td_monthly">Monthly</a>
                  <span className="td_switch"></span>
                </li>
                <li className="">
                  <a href="#td_yearly">Yearly</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_height_50 td_height_lg_50" />

          {/* tabs */}
          <div
            className="td_tab_body wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            {/* monthly */}
            <div className="td_tab active" id="td_monthly">
              <div className="row td_gap_y_30">
                {pricingList.map((el) => (
                  <Item
                    key={el.src}
                    title={el.title}
                    src={el.src}
                    price={el.priceMonthly}
                    isYearly={false}
                  />
                ))}
              </div>
            </div>

            {/* yearly */}
            <div className="td_tab" id="td_yearly">
              <div className="row td_gap_y_30">
                {pricingList.map((el) => (
                  <Item
                    key={el.src}
                    title={el.title}
                    src={el.src}
                    price={el.priceYearly}
                    isYearly={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const pricingList = [
  {
    src: pricingIcon1,
    title: "Basic Plan",
    priceMonthly: 109,
    priceYearly: 609,
  },
  {
    src: pricingIcon2,
    title: "Standard Plan",
    priceMonthly: 139,
    priceYearly: 639,
  },
  {
    src: pricingIcon3,
    title: "Premium Plan",
    priceMonthly: 139,
    priceYearly: 629,
  },
];

const Item = ({ title, src, price, isYearly }) => {
  return (
    <div className="col-lg-4">
      <div className="td_pricing td_style_1 td_radius_10">
        <h2 className="td_pricing_package_name td_fs_24 td_medium td_accent_bg td_white_color mb-0">
          {title}
        </h2>

        <div className="td_pricing_icon td_center">
          <img src={src} alt="Basic Plan Icon" />
        </div>

        <div className="td_pricing_in">
          <h2 className="td_fs_64 td_mb_20">
            ${price}
            <span className="td_fs_16 td_medium">
              /Per {isYearly ? "Yearly" : "Month"}
            </span>
          </h2>

          <h3 className="td_pricing_title td_fs_32 td_mb_20">
            {`What’s Included:`}
          </h3>

          <ul className="td_pricing_feature td_mp_0 td_medium td_heading_color">
            <li>
              <i className="fa-solid fa-check"></i>
              Access all Courses
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              Online e-learning platform
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              Create a Zoom id access
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              Monthly Reported Guardian
            </li>
          </ul>

          <div className="text-center">
            <Link
              to="/contact"
              className="td_btn td_style_1 td_radius_30 td_medium w-100"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Choose This Plan</span>
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
        </div>
      </div>
    </div>
  );
};
