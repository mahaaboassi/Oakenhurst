import React from "react";
import { SlickSlider } from "../slick_slider/SlickSlider";
import { useHobble } from "../../lib/hooks/useHobble";

import testimonialShape1 from "../../assets/img/home_2/testimonial_shape_1.svg";
import testimonialShape2 from "../../assets/img/home_2/testimonial_shape_2.svg";
import testimonialShape3 from "../../assets/img/home_2/testimonial_shape_3.svg";
import testimonialShape4 from "../../assets/img/home_2/testimonial_shape_4.svg";
import avatar1Home1 from "../../assets/img/home_1/avatar_1.png";
import avatar1Home2 from "../../assets/img/home_2/avatar_1.png";

export const TestimonialTwo = () => {
  useHobble();

  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    arrows: false,
    dots: true,
    appendDots: (dots) => (
      <>
        <div className="td_height_50 td_height_lg_40" />
        <div className="td_pagination td_style_1">
          <ul>{dots}</ul>
        </div>
      </>
    ),
    slidesToShow: 2,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="td_shape_section_7 td_hobble">
      <div className="td_shape_position_1 position-absolute td_hover_layer_3">
        <img src={testimonialShape1} alt="" />
      </div>
      <div className="td_shape_position_2 position-absolute td_hover_layer_5">
        <img src={testimonialShape2} alt="" />
      </div>
      <div className="td_shape_position_3 position-absolute td_hover_layer_3">
        <img src={testimonialShape3} alt="" />
      </div>
      <div className="td_shape_position_4 position-absolute td_hover_layer_5">
        <img src={testimonialShape4} alt="" />
      </div>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            <i></i>
            Testimonials
            <i></i>
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            What Our Students Say About <br />
            Our Online Services
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            Far far away, behind the word mountains, far from the Consonantia,
            there live <br />
            the blind texts. Separated they marks grove
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div
          className="td_slider td_style_1 td_slider_gap_24 td_remove_overflow wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="td_slider_container">
            <div className="td_slider_wrapper">
              <SlickSlider {...settings}>
                <div className="td_slide">
                  <div className="td_testimonial td_style_1 td_type_1 td_white_bg td_radius_5">
                    <span className="td_quote_icon td_accent_color">
                      <svg
                        width="65"
                        height="46"
                        viewBox="0 0 65 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                      >
                        <path
                          opacity="0.05"
                          d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="td_testimonial_meta td_mb_24">
                      <img src={avatar1Home1} alt="" />
                      <div className="td_testimonial_meta_right">
                        <h3 className="td_fs_24 td_semibold td_mb_2">
                          Marvin McKinney
                        </h3>
                        <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                          15th Batch Students
                        </p>
                      </div>
                    </div>
                    <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                      The pandemic has accelerated the shift to online and
                      hybrid learning models. Platforms like Coursera, edX, and
                      university-specific online programs offer flexibility and
                      accessibility to a wider audience.
                    </blockquote>
                    <div className="td_rating" data-rating="4.5">
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
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_testimonial td_style_1 td_type_1 td_white_bg td_radius_5">
                    <span className="td_quote_icon td_accent_color">
                      <svg
                        width="65"
                        height="46"
                        viewBox="0 0 65 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                      >
                        <path
                          opacity="0.05"
                          d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="td_testimonial_meta td_mb_24">
                      <img src={avatar1Home2} alt="" />
                      <div className="td_testimonial_meta_right">
                        <h3 className="td_fs_24 td_semibold td_mb_2">
                          Marvin McKinney
                        </h3>
                        <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                          10th Batch Students
                        </p>
                      </div>
                    </div>
                    <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                      Platforms like Coursera, edX, and university-specific
                      online programs offer flexibility and accessibility to a
                      wider audience. The pandemic has accelerated the shift to
                      online and hybrid learning models.
                    </blockquote>
                    <div className="td_rating" data-rating="4.5">
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
                  </div>
                </div>
                <div className="td_slide">
                  <div className="td_testimonial td_style_1 td_type_1 td_white_bg td_radius_5">
                    <span className="td_quote_icon td_accent_color">
                      <svg
                        width="65"
                        height="46"
                        viewBox="0 0 65 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="2"
                      >
                        <path
                          opacity="0.05"
                          d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="td_testimonial_meta td_mb_24">
                      <img src={avatar1Home1} alt="" />
                      <div className="td_testimonial_meta_right">
                        <h3 className="td_fs_24 td_semibold td_mb_2">
                          Marvin McKinney
                        </h3>
                        <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                          15th Batch Students
                        </p>
                      </div>
                    </div>
                    <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                      The pandemic has accelerated the shift to online and
                      hybrid learning models. Platforms like Coursera, edX, and
                      university-specific online programs offer flexibility and
                      accessibility to a wider audience.
                    </blockquote>
                    <div className="td_rating" data-rating="4.5">
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
                  </div>
                </div>
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
