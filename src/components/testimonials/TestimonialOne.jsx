import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";
import { SlickSlider } from "../slick_slider/SlickSlider";

import testimonialImg from "../../assets/img/home_1/testimonial_img.png";
import avatar1 from "../../assets/img/home_1/avatar_1.png";
import avatar2 from "../../assets/img/home_2/avatar_2.png";

export const TestimonialOne = () => {
  useHobble();

  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    centerMode: false,
    variableWidth: false,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <section className="td_heading_bg td_hobble">
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
            Start your journey With Us
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0 td_white_color td_opacity_7">
            Education is a dynamic and evolving field that plays a crucial
            <br />
            role in shaping individuals and societies. While significant
            <br />
            challenges,
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_testimonial_img_wrap">
              <img
                src={testimonialImg}
                alt="Testimonial"
                className="td_testimonial_img"
              />
              <span className="td_testimonial_img_shape_1">
                <span></span>
              </span>
              <span className="td_testimonial_img_shape_2 td_accent_color td_hover_layer_3">
                <svg
                  width="145"
                  height="165"
                  viewBox="0 0 145 165"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M145.003 25.9077L139.516 27.7024L143.814 31.5573L145.003 25.9077ZM69.5244 11.4999L69.2176 11.1051L69.5244 11.4999ZM69.5244 53.0379L69.3973 53.5215L69.5244 53.0379ZM141.65 28.8989C135.031 35.2997 125.943 38.4375 116.315 39.2654C106.688 40.0931 96.561 38.607 87.9207 35.8021C79.2649 32.9923 72.1739 28.8832 68.5572 24.5234C66.753 22.3484 65.8508 20.1579 65.9824 18.0635C66.1133 15.9807 67.2739 13.8818 69.8312 11.8948L69.2176 11.1051C66.5057 13.2123 65.1383 15.552 64.9844 18.0007C64.8313 20.4378 65.8877 22.8715 67.7876 25.1618C71.5792 29.7325 78.8783 33.9182 87.6119 36.7533C96.361 39.5934 106.622 41.1025 116.4 40.2617C126.177 39.4211 135.511 36.2268 142.346 29.6178L141.65 28.8989ZM69.8312 11.8948C76.1217 7.00714 81.1226 4.09865 85.0169 2.71442C88.9178 1.32781 91.6197 1.49918 93.4091 2.61867C95.1994 3.73872 96.231 5.90455 96.5629 8.8701C96.894 11.8276 96.5159 15.4895 95.5803 19.4474C93.7094 27.3612 89.6393 36.3356 84.7843 42.9886C82.3565 46.3156 79.7503 49.0371 77.1481 50.7594C74.545 52.4823 72.001 53.1717 69.6515 52.5543L69.3973 53.5215C72.1238 54.238 74.964 53.4042 77.7 51.5933C80.437 49.7818 83.1248 46.9592 85.5921 43.578C90.5275 36.8148 94.6527 27.7176 96.5534 19.6775C97.5035 15.6584 97.9053 11.8728 97.5567 8.75886C97.2091 5.65298 96.1014 3.12347 93.9395 1.77091C91.7766 0.417783 88.7131 0.33927 84.6819 1.77217C80.6441 3.20744 75.5463 6.18784 69.2176 11.1051L69.8312 11.8948ZM69.6515 52.5543C56.6241 49.1307 47.457 52.0938 41.14 58.6639C34.8623 65.1932 31.4678 75.2154 29.7777 85.7878C28.0854 96.3743 28.0905 107.589 28.673 116.58C28.9644 121.078 29.4007 125.024 29.843 128.065C30.2827 131.086 30.7341 133.255 31.0666 134.168L32.0062 133.825C31.7138 133.023 31.2736 130.952 30.8326 127.921C30.3942 124.908 29.9607 120.988 29.6709 116.516C29.0912 107.568 29.0886 96.4337 30.7652 85.9456C32.444 75.4434 35.7949 65.6661 41.8608 59.357C47.8875 53.0888 56.6625 50.1748 69.3973 53.5215L69.6515 52.5543Z"
                    fill="white"
                  />
                  <circle cx="34" cy="150" r="15" fill="currentColor" />
                  <circle cx="15" cy="137" r="15" fill="currentColor" />
                  <circle cx="24" cy="144" r="15" fill="white" />
                </svg>
              </span>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInRight">
            <div className="td_slider td_style_1">
              <div className="td_slider_container">
                <div className="td_slider_wrapper">
                  <SlickSlider {...settings}>
                    <div className="td_slide">
                      <div className="td_testimonial td_style_1 td_white_bg td_radius_5">
                        <span className="td_quote_icon td_accent_color">
                          <svg
                            width="65"
                            height="46"
                            viewBox="0 0 65 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.05"
                              d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <div className="td_testimonial_meta td_mb_24">
                          <img src={avatar1} alt="Marvin McKinney" />
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
                          hybrid learning models. Platforms like Coursera, edX,
                          and university-specific online programs offer
                          flexibility and accessibility to a wider audience.
                        </blockquote>
                        <div className="td_rating" data-rating="5">
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
                      <div className="td_testimonial td_style_1 td_white_bg td_radius_5">
                        <span className="td_quote_icon td_accent_color">
                          <svg
                            width="65"
                            height="46"
                            viewBox="0 0 65 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.05"
                              d="M13.9286 26.6H1V1H26.8571V27.362L17.956 45H6.26764L14.8213 28.0505L15.5534 26.6H13.9286ZM51.0714 26.6H38.1429V1H64V27.362L55.0988 45H43.4105L51.9642 28.0505L52.6962 26.6H51.0714Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <div className="td_testimonial_meta td_mb_24">
                          <img src={avatar2} alt="Marry Kristano" />
                          <div className="td_testimonial_meta_right">
                            <h3 className="td_fs_24 td_semibold td_mb_2">
                              Marry Kristano
                            </h3>
                            <p className="td_fs_14 mb-0 td_heading_color td_opacity_7">
                              13th Batch Students
                            </p>
                          </div>
                        </div>
                        <blockquote className="td_testimonial_text td_fs_20 td_medium td_heading_color td_mb_24 td_opacity_9">
                          The pandemic has accelerated the shift to online and
                          hybrid learning models. Platforms like Coursera, edX,
                          and university-specific online programs offer
                          flexibility and accessibility to a wider audience.
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
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
