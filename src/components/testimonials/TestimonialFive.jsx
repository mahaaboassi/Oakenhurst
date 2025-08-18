import React, { useRef } from "react";
import { SlickSlider } from "../slick_slider/SlickSlider";

import shape1 from "../../assets/img/home_5/testimonial_shape_1.svg";
import avatar1 from "../../assets/img/home_1/avatar_1.png";
import avatar2 from "../../assets/img/home_2/avatar_2.png";
import avatar3 from "../../assets/img/home_2/avatar_3.png";
import avatar4 from "../../assets/img/home_2/avatar_4.png";

const testimonialData = [
  {
    id: 1,
    rating: 5,
    text: "Far far away, behind the mountains, far from the Conson antia, there live the blind texts. Separated they marks word for a live new.",
    avatar: avatar1,
    name: "Antoni Alex",
    designation: "10th Batch Students",
  },
  {
    id: 2,
    rating: 5,
    text: "Far far away, behind the mountains, far from the Conson antia, there live the blind texts. Separated they marks word for a live new.",
    avatar: avatar2,
    name: "Revert Alexan",
    designation: "15th Batch Students",
  },
  {
    id: 3,
    rating: 4.5,
    text: "Far far away, behind the mountains, far from the Conson antia, there live the blind texts. Separated they marks word for a live new.",
    avatar: avatar3,
    name: "Anthonia Alex",
    designation: "12th Batch Students",
  },
  {
    id: 4,
    rating: 5,
    text: "Far far away, behind the mountains, far from the Conson antia, there live the blind texts. Separated they marks word for a live new.",
    avatar: avatar4,
    name: "Arke Marey",
    designation: "09th Batch Students",
  },
];

export const TestimonialFive = () => {
  let sliderRef = useRef(null);
  const next = () => sliderRef.slickNext();
  const previous = () => sliderRef.slickPrev();

  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="td_gray_bg_9 td_shape_section_10">
      <div className="td_shape_position_3 position-absolute">
        <img src={shape1} alt="" />
      </div>

      <div className="td_height_120 td_height_lg_80" />

      <div className="container">
        <div className="row td_gap_y_40">
          <div
            className="col-lg-5 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                TESTIMONIAL
              </p>
              <h2 className="td_section_title td_fs_48 td_mb_20">
                Learners Say About Educve
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0">
                Far far away, behind the word mountains, far from <br />
                the Conson antia, there live the blind texts. <br />
                Separated they marks
              </p>
            </div>
          </div>

          <div
            className="col-lg-7 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_full_width">
              <div className="td_slider td_style_1 td_slider_gap_24 td_remove_overflow">
                <div className="td_slider_container">
                  <div className="td_slider_wrapper">
                    <SlickSlider
                      ref={(slider) => (sliderRef = slider)}
                      {...settings}
                    >
                      {testimonialData.map((testimonial) => (
                        <div className="td_slide" key={testimonial.id}>
                          <div className="td_testimonial td_style_1 td_type_2 td_white_bg td_radius_5">
                            <div
                              className="td_rating td_mb_20"
                              data-rating={testimonial.rating}
                            >
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
                            <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_30 td_opacity_9">
                              {testimonial.text}
                            </blockquote>
                            <div className="td_testimonial_meta td_mb_24">
                              <img src={testimonial.avatar} alt="" />
                              <div className="td_testimonial_meta_right">
                                <h3 className="td_fs_20 td_semibold td_mb_2">
                                  {testimonial.name}
                                </h3>
                                <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                                  {testimonial.designation}
                                </p>
                              </div>
                            </div>
                            <span className="td_quote_icon td_accent_color">
                              <svg
                                width="66"
                                height="49"
                                viewBox="0 0 66 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.7"
                                  d="M59.3083 24.7533L59.5477 23.7101L58.594 24.196C56.8371 25.0911 54.9022 25.6333 52.8104 25.6333C45.7993 25.6333 40.1208 20.0011 40.1208 13.0667C40.1208 6.13225 45.7993 0.5 52.8104 0.5C59.8215 0.5 65.5 6.13225 65.5 13.0667V19.5743C65.5 35.5242 52.4088 48.5 36.2974 48.5C34.7517 48.5 33.5 47.2533 33.5 45.7333C33.5 44.2134 34.7517 42.9667 36.2974 42.9667C47.5163 42.9667 56.9202 35.1632 59.3083 24.7533Z"
                                  stroke="currentColor"
                                />
                                <path
                                  opacity="0.7"
                                  d="M26.3083 24.7533L26.5477 23.7101L25.594 24.196C23.8371 25.0911 21.9022 25.6333 19.8104 25.6333C12.7993 25.6333 7.12077 20.0011 7.12077 13.0667C7.12077 6.13226 12.7993 0.5 19.8104 0.5C26.8215 0.5 32.5 6.13226 32.5 13.0667V19.5743C32.5 35.5242 19.4088 48.5 3.2974 48.5C1.75166 48.5 0.5 47.2533 0.5 45.7333C0.5 44.2134 1.75166 42.9667 3.2974 42.9667C14.5163 42.9667 23.9202 35.1632 26.3083 24.7533Z"
                                  stroke="currentColor"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      ))}
                    </SlickSlider>
                  </div>
                </div>

                <div className="td_height_40 td_height_lg_30" />

                <div className="td_slider_arrows td_style_1 td_type_2">
                  <div
                    role="button"
                    onClick={previous}
                    className="td_left_arrow td_accent_bg td_radius_10 td_center td_white_color"
                  >
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00194 6.00024L17.002 6.00024"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.00191 1C6.00191 1 1.00196 4.68244 1.00195 6.00004C1.00194 7.31763 6.00195 11 6.00195 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    role="button"
                    onClick={next}
                    className="td_right_arrow td_accent_bg td_radius_10 td_center td_white_color"
                  >
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.002 5.99976L1.00195 5.99976"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.002 11C12.002 11 17.0019 7.31756 17.002 5.99996C17.002 4.68237 12.002 1 12.002 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
