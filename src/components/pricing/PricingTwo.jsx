import React from "react";
import { Link } from "react-router-dom";

export const PricingTwo = () => {
  const pricingData = [
    {
      title: "Easy Spoken English",
      description: "Description all pricing plan for Spoken English Courses",
      price: "109",
      features: [
        "Access all Courses",
        "Online e-learning platform",
        "Create a Zoom id access",
        "Monthly Reported Guardian",
      ],
    },
    {
      title: "Easy Spanish Language",
      description: "Description all pricing plan for Spoken English Courses",
      price: "139",
      features: [
        "Ui Design Create",
        "Blockchain Development",
        "Full Website Design System",
        "One year Support included",
      ],
    },
    {
      title: "Easy South Korea Language",
      description: "Description all pricing plan for Spoken English Courses",
      price: "129",
      features: [
        "Ui Design Create",
        "Blockchain Development",
        "Full Website Design System",
        "One year Support included",
      ],
    },
  ];

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
            PRICING PLAN
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Selected A Pricing Plan That <br />
            Suit For you
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div
          className="row td_gap_y_30 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          {pricingData.map((plan, index) => (
            <div className="col-lg-4" key={index}>
              <div className="td_pricing td_style_1 td_type_1 td_radius_10">
                <h2 className="td_pricing_package_name td_fs_24">
                  {plan.title}
                </h2>
                <p className="td_heading_color td_opacity_8 td_mb_20">
                  {plan.description}
                </p>
                <div className="td_pricing_in">
                  <h2 className="td_fs_64 td_mb_20 td_accent_color">
                    ${plan.price}
                    <span className="td_fs_16 td_medium td_heading_color">
                      /Per Month
                    </span>
                  </h2>
                  <h3 className="td_pricing_title td_fs_32 td_mb_20">
                    What's Included:
                  </h3>
                  <ul className="td_pricing_feature td_mp_0 td_medium td_heading_color">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="td_btn td_style_1 td_radius_10 td_medium w-100"
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        <span>Choose This Plan</span>
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.1575 4.34302L3.84375 15.6567"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
