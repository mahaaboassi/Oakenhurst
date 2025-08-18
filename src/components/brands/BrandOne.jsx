import React from "react";
import { Link } from "react-router-dom";
import { SlickSlider } from "../slick_slider/SlickSlider";

import cardImg1 from "../../assets/img/home_2/card_img_1.png";
import cardImg2 from "../../assets/img/home_2/card_img_2.png";
import cardShape1 from "../../assets/img/home_2/card_shape_1.svg";
import cardShape2 from "../../assets/img/home_2/card_shape_2.svg";
import brand1 from "../../assets/img/home_2/brand_1.svg";
import brand2 from "../../assets/img/home_2/brand_2.svg";
import brand3 from "../../assets/img/home_2/brand_3.svg";
import brand4 from "../../assets/img/home_2/brand_4.svg";
import brand5 from "../../assets/img/home_2/brand_5.svg";
import brand6 from "../../assets/img/home_2/brand_6.svg";

export const BrandOne = () => {
  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    arrows: false,
    slidesToShow: 6,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="td_heading_bg td_shape_section_6">
      <div className="td_shape_position_1 position-absolute" />
      <div className="td_shape_position_2 position-absolute" />
      <div className="td_shape_position_3 position-absolute" />

      <div className="td_half_white_bg">
        <div className="container">
          <div className="row td_gap_y_30">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="td_card td_style_4 td_accent_bg">
                <div className="td_card_left">
                  <h3 className="td_fs_32 td_mb_16 td_white_color">
                    Expert <span>Instructor</span> Live Classes Here
                  </h3>
                  <p className="td_fs_18 td_white_color td_opacity_9 td_mb_30">
                    They marks grove right at the coast of the Semantics
                  </p>

                  <Link
                    to="/signup"
                    className="td_btn td_style_1 td_type_3 td_radius_30 td_medium td_with_shadow"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Become A Teachers</span>
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

                <div className="td_card_thumb">
                  <img src={cardImg1} alt="Card thumbnail" />
                </div>
                <div className="td_card_1">
                  <img src={cardShape1} alt="Card shape" />
                </div>
                <div className="td_card_2">
                  <img src={cardShape2} alt="Card shape" />
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_card td_style_4 td_accent_bg">
                <div className="td_card_left">
                  <h3 className="td_fs_32 td_mb_16 td_white_color">
                    To be Achieved <span>Students</span> Join Classes Here
                  </h3>

                  <p className="td_fs_18 td_white_color td_opacity_9 td_mb_30">
                    They marks grove right at the coast of the Semantics
                  </p>

                  <Link
                    to="/signup"
                    className="td_btn td_style_1 td_type_3 td_radius_30 td_medium td_with_shadow"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Become A Teachers</span>
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

                <div className="td_card_thumb">
                  <img src={cardImg2} alt="Card thumbnail" />
                </div>

                <div className="td_card_1">
                  <img src={cardShape1} alt="Card shape" />
                </div>

                <div className="td_card_2">
                  <img src={cardShape2} alt="Card shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="td_height_80 td_height_lg_80" />
        <h2
          className="td_fs_32 td_semibold td_opacity_9 td_mb_50 text-center td_white_color wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          {`Trusted by World’s 13k Plus Students &`} <br />
          Teams it Recommended
        </h2>

        <div
          className="td_slider td_style_1 td_slider_gap_24 td_remove_overflow wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="td_slider_container">
            <div className="td_slider_wrapper">
              <SlickSlider {...settings}>
                <div className="td_slide">
                  <div className="td_brand td_style_1">
                    <img src={brand1} alt="Brand logo" />
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_brand td_style_1">
                    <img src={brand2} alt="Brand logo" />
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_brand td_style_1">
                    <img src={brand3} alt="Brand logo" />
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_brand td_style_1">
                    <img src={brand4} alt="Brand logo" />
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_brand td_style_1">
                    <img src={brand5} alt="Brand logo" />
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_brand td_style_1">
                    <img src={brand6} alt="Brand logo" />
                  </div>
                </div>
              </SlickSlider>
            </div>
          </div>

          {/*  <div className="td_height_50 td_height_lg_40" />
               <div className="td_pagination td_style_1" /> */}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
