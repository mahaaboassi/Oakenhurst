import React from "react";
import { Link } from "react-router-dom";

import testimonialImg from "../../assets/img/home_7/testimonial_img_1.png";
import avatar1 from "../../assets/img/avatar_1.png";
import avatar2 from "../../assets/img/avatar_2.png";
import avatar3 from "../../assets/img/avatar_3.png";

export const TestimonialSix = () => {
  return (
    <section className="td_heading_bg">
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 td_white_color">
              Testimonials
            </p>
            <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
              What Student Says Our <br />
              Learning Services
            </h2>
          </div>
          <div className="td_section_heading_right">
            <p className="td_section_subtitle td_fs_18 mb-0 td_white_color td_opacity_9">
              Platforms like Coursera, edX, and university-specific online
              programs offer flexibility
            </p>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        <div
          className="row align-items-center td_gap_y_40 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="col-xl-5 col-lg-6">
            <div className="td_image_box td_style_11 position-relative">
              <img src={testimonialImg} alt="Testimonial" />
              <div className="td_image_box_text td_heading_bg text-center">
                <h3 className="td_fs_20 td_white_color mb-0">
                  {`Marvin Celina's`}
                </h3>
                <p className="mb-0 td_white_color td_opacity_7 td_fs_14">
                  Businesswoman
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="td_testimonial td_style_2">
              <div className="td_mb_40">
                <svg
                  width="65"
                  height="46"
                  viewBox="0 0 65 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="td_white_color td_fs_24 td_semibold td_mb_30 fst-italic">
                {`I’m Satisfied with your Motivational Speaker !`}
              </h3>
              <blockquote className="td_testimonial_text td_fs_20 td_medium td_opacity_6 td_mb_40 td_white_color">
                The pandemic has accelerated the shift to online and hybrid
                learning models. Platforms like Coursera, edX, and
                university-specific online programs offer flexibility and
                accessibility to a wider audience.
              </blockquote>
              <div className="td_btns_group">
                <Link
                  to="/signup"
                  className="td_btn td_style_1 td_radius_30 td_medium"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Get Feedback</span>
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
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <div className="td_avatars_wrap">
                  <div className="td_avatars">
                    <div>
                      <img src={avatar1} alt="Avatar 1" />
                    </div>
                    <div>
                      <img src={avatar2} alt="Avatar 2" />
                    </div>
                    <div>
                      <img src={avatar1} alt="Avatar 3" />
                    </div>
                    <div>
                      <img src={avatar2} alt="Avatar 4" />
                    </div>
                    <div>
                      <img src={avatar3} alt="Avatar 5" />
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-0 td_fs_16 td_medium td_white_color">
                      6k Satisfied <br />
                      Clients
                    </h3>
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
