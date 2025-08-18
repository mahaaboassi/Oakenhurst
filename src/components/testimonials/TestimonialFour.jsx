import React, { useRef } from "react";
import { SlickSlider } from "../slick_slider/SlickSlider";
import { useHobble } from "../../lib/hooks/useHobble";

import testimonialBg from "../../assets/img/home_4/testimonial_bg.png";
import testimonialImg1 from "../../assets/img/home_4/testimonial_img_1.png";
import testimonialImg2 from "../../assets/img/home_4/testimonial_img_2.png";
import testimonialImg3 from "../../assets/img/home_4/testimonial_img_3.png";
import testimonialShape2 from "../../assets/img/home_4/testimonial_shape_2.svg";
import avatar1Home4 from "../../assets/img/home_4/avatar_1.png";
import avatar1Home1 from "../../assets/img/home_1/avatar_1.png";

export const TestimonialFour = () => {
  useHobble();

  let sliderRef = useRef(null);
  const next = () => sliderRef.slickNext();
  const previous = () => sliderRef.slickPrev();

  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    slidesToShow: 1,
  };

  return (
    <section>
      <div className="td_height_120 td_height_lg_0" />
      <div className="td_testimonial_with_shape_wrap">
        <div
          className="td_testimonial_with_shape td_hobble"
          style={{ backgroundImage: `url(${testimonialBg})` }}
        >
          <div className="td_testimonial_shape_1 td_accent_color position-absolute td_hover_layer_3">
            <svg
              width="46"
              height="240"
              viewBox="0 0 46 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.61 1.48954C43.4975 0.625824 41.8935 0.827182 41.0441 1.95066C15.4219 35.8376 1.2421 77.0249 0.598928 119.547C-0.0442428 162.07 12.8834 203.667 37.469 238.314C38.2841 239.462 39.8812 239.712 41.0193 238.882C42.1575 238.053 42.4057 236.458 41.591 235.309C17.6568 201.557 5.0724 161.041 5.69884 119.625C6.32528 78.2082 20.1293 38.0916 45.0733 5.07867C45.9224 3.95492 45.7226 2.35325 44.61 1.48954Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="td_testimonial_shape_3 td_accent_color position-absolute td_hover_layer_3">
            <svg
              width="37"
              height="28"
              viewBox="0 0 37 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.55"
                d="M18.8333 0L23.0617 10.3647H36.7449L25.6749 16.7705L29.9033 27.1353L18.8333 20.7295L7.76338 27.1353L11.9917 16.7705L0.921768 10.3647H14.605L18.8333 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="td_testimonial_shape_4 td_accent_color position-absolute td_hover_layer_5">
            <svg
              width="40"
              height="344"
              viewBox="0 0 40 344"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.0243 1C38.0243 1 -2.76813 40.5632 1.28292 70.4758C4.53272 94.4719 32.5988 98.8059 38.0243 122.471C46.2303 158.263 -0.0606009 173.325 1.28292 209.875C2.51911 243.506 43.8038 255.981 38.0243 289.212C33.7698 313.675 1.28292 343 1.28292 343"
                stroke="currentColor"
              />
            </svg>
          </div>

          <div className="td_height_120 td_height_lg_80" />

          <div className="td_slider td_style_1">
            <div className="container">
              <div className="row align-items-center td_gap_y_40">
                <div
                  className="col-lg-7 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="td_image_box td_style_8">
                    <img
                      src={testimonialImg1}
                      alt="Testimonial"
                      className="td_image_box_img_1"
                    />
                    <img
                      src={testimonialImg2}
                      alt="Testimonial"
                      className="td_image_box_img_2 position-absolute"
                    />
                    <img
                      src={testimonialImg3}
                      alt="Testimonial"
                      className="td_image_box_img_3 position-absolute"
                    />
                    <div className="td_image_box_shape_1 td_accent_color position-absolute">
                      <img src={testimonialShape2} alt="Shape" />
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-5 wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div className="td_section_heading td_style_1">
                    <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                      Testimonials
                    </p>
                    <h2 className="td_section_title td_fs_48 mb-0">
                      Parents Speech With Us
                    </h2>
                  </div>

                  <div className="td_height_50 td_height_lg_50" />

                  <div className="td_slider_container">
                    <div className="td_slider_wrapper">
                      <SlickSlider
                        ref={(slider) => (sliderRef = slider)}
                        {...settings}
                      >
                        <div className="td_slide">
                          <div className="td_testimonial td_style_1 td_type_3">
                            <div className="td_rating td_mb_35" data-rating="5">
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <div className="td_rating_percentage">
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                              </div>
                            </div>
                            <blockquote className="td_testimonial_text td_fs_24 td_medium td_heading_color td_mb_35 td_opacity_9">
                              The pandemic has accelerated the shift to online
                              and hybrid learning models. Platforms like
                              Coursera, edX, and university-specific online
                              programs, accelerated the shift to online and
                              hybrid.
                            </blockquote>
                            <div className="td_testimonial_meta">
                              <img src={avatar1Home4} alt="Avatar" />
                              <div className="td_testimonial_meta_right">
                                <h3 className="td_fs_24 td_semibold td_mb_2">
                                  Marvin McKinney
                                </h3>
                                <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                                  15th Batch Students
                                </p>
                              </div>
                            </div>
                            <span className="td_quote_icon td_accent_color">
                              <svg
                                width="65"
                                height="46"
                                viewBox="0 0 65 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.64286 46H18.5714L27.8571 27.6V0H0V27.6H13.9286L4.64286 46ZM41.7857 46H55.7143L65 27.6V0H37.1429V27.6H51.0714L41.7857 46Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="td_slide">
                          <div className="td_testimonial td_style_1 td_type_3">
                            <div className="td_rating td_mb_35" data-rating="5">
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <div className="td_rating_percentage">
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                                <i className="fa-solid fa-star fa-fw"></i>
                              </div>
                            </div>
                            <blockquote className="td_testimonial_text td_fs_24 td_medium td_heading_color td_mb_35 td_opacity_9">
                              The pandemic has accelerated the shift to online
                              and hybrid learning models. Platforms like
                              Coursera, edX, and university-specific online
                              programs, accelerated the shift to online and
                              hybrid.
                            </blockquote>
                            <div className="td_testimonial_meta">
                              <img src={avatar1Home1} alt="Avatar" />
                              <div className="td_testimonial_meta_right">
                                <h3 className="td_fs_24 td_semibold td_mb_2">
                                  Marvin McKinney
                                </h3>
                                <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                                  15th Batch Students
                                </p>
                              </div>
                            </div>
                            <span className="td_quote_icon td_accent_color">
                              <svg
                                width="65"
                                height="46"
                                viewBox="0 0 65 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.64286 46H18.5714L27.8571 27.6V0H0V27.6H13.9286L4.64286 46ZM41.7857 46H55.7143L65 27.6V0H37.1429V27.6H51.0714L41.7857 46Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </SlickSlider>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td_slider_arrows td_style_2">
              <div
                role="button"
                onClick={previous}
                className="td_left_arrow rounded-circle td_center td_white_color"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99995 1C6.99995 1 1.00001 5.41893 1 7.00005C0.999987 8.58116 7 13 7 13"
                    stroke="#0F121C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                role="button"
                onClick={next}
                className="td_right_arrow rounded-circle td_center td_white_color"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00005 1C1.00005 1 6.99999 5.41893 7 7.00005C7.00001 8.58116 1 13 1 13"
                    stroke="#0F121C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="td_height_120 td_height_lg_80" />
        </div>
      </div>
    </section>
  );
};
