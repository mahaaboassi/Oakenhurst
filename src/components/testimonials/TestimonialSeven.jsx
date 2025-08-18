import React from "react";
import { SlickSlider } from "../slick_slider/SlickSlider";
import { useHobble } from "../../lib/hooks/useHobble";

import testimonialShape1 from "../../assets/img/home_8/testimonial_shape_1.svg";
import testimonialShape2 from "../../assets/img/home_8/testimonial_shape_2.svg";
import testimonialShape3 from "../../assets/img/home_8/testimonial_shape_3.svg";
import testimonialShape4 from "../../assets/img/home_8/testimonial_shape_4.svg";
import testimonialImg1 from "../../assets/img/home_4/testimonial_img_1.png";
import testimonialImg2 from "../../assets/img/home_4/testimonial_img_2.png";
import testimonialImg3 from "../../assets/img/home_4/testimonial_img_3.png";
import avatar1 from "../../assets/img/home_4/avatar_1.png";
import avatar2 from "../../assets/img/home_1/avatar_1.png";

export const TestimonialSeven = () => {
  useHobble();

  const testimonials = [
    {
      rating: 5,
      text: "The pandemic has accelerated the shift to online and hybrid learning models. Platforms like Coursera, edX, and university-specific online programs, accelerated the shift to online and hybrid.",
      avatar: avatar1,
      name: "Marvin McKinney",
      role: "15th Batch Students",
    },
    {
      rating: 5,
      text: "The pandemic has accelerated the shift to online and hybrid learning models. Platforms like Coursera, edX, and university-specific online programs, accelerated the shift to online and hybrid.",
      avatar: avatar2,
      name: "Marvin McKinney",
      role: "15th Batch Students",
    },
  ];

  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <section className="td_accent_bg td_shape_section_5 td_hobble">
      <div className="td_shape_position_1 position-absolute td_hover_layer_3" />
      <div className="td_shape_position_2 position-absolute td_hover_layer_5">
        <img src={testimonialShape1} alt="Testimonial shape" />
      </div>
      <div className="td_shape_position_3 position-absolute td_hover_layer_3" />
      <div className="td_shape_position_4 position-absolute td_hover_layer_5" />
      <div className="td_shape_position_5 position-absolute td_hover_layer_3">
        <img src={testimonialShape3} alt="Testimonial shape" />
      </div>
      <div className="td_shape_position_6 position-absolute">
        <img src={testimonialShape4} alt="Testimonial shape" />
      </div>

      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_40">
          <div
            className="col-lg-7 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_image_box td_style_8 td_type_1">
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
                <img src={testimonialShape2} alt="Testimonial shape" />
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_white_color">
                Testimonials
              </p>
              <h2 className="td_section_title td_white_color td_fs_48 mb-0">
                Our Expert Instructor
              </h2>
            </div>
            <div className="td_height_50 td_height_lg_50" />
            <div className="td_slider td_style_1">
              <div className="td_slider_container">
                <div className="td_slider_wrapper">
                  <SlickSlider {...settings}>
                    {testimonials.map((testimonial, index) => (
                      <div className="td_slide" key={index}>
                        <div className="td_testimonial td_style_1 td_type_3">
                          <div
                            className="td_rating td_mb_35"
                            data-rating={testimonial.rating}
                          >
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-regular fa-star"></i>
                            ))}
                            <div className="td_rating_percentage">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <i
                                  key={i}
                                  className="fa-solid fa-star fa-fw"
                                ></i>
                              ))}
                            </div>
                          </div>
                          <blockquote className="td_testimonial_text td_fs_24 td_medium td_white_color td_mb_35 td_opacity_9">
                            {testimonial.text}
                          </blockquote>
                          <div className="td_testimonial_meta">
                            <img src={testimonial.avatar} alt="Avatar" />
                            <div className="td_testimonial_meta_right">
                              <h3 className="td_fs_24 td_semibold td_mb_2 td_white_color">
                                {testimonial.name}
                              </h3>
                              <p className="td_fs_14 mb-0 td_white_color td_opacity_7">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </SlickSlider>
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
