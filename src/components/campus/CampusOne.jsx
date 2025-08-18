import React from "react";
import { Link } from "react-router-dom";

import campusLife1 from "../../assets/img/home_1/campur_life_1.jpg";
import campusLife2 from "../../assets/img/home_1/campur_life_2.jpg";
import campusLife3 from "../../assets/img/home_1/campur_life_3.jpg";
import campusLife4 from "../../assets/img/home_1/campur_life_4.jpg";

export const CampusOne = () => {
  return (
    <section className="td_accent_bg td_shape_section_1">
      <div className="td_shape_position_4 td_accent_color position-absolute">
        <svg
          width="37"
          height="40"
          viewBox="0 0 37 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <rect
              y="12.3906"
              width="23.6182"
              height="31.0709"
              rx="1"
              transform="rotate(-30.4551 0 12.3906)"
              fill="white"
            />
            <rect
              x="4"
              y="14.8125"
              width="18.5361"
              height="2.62207"
              rx="1.31104"
              transform="rotate(-30.4551 4 14.8125)"
              fill="currentColor"
            />
            <rect
              x="7"
              y="19.8125"
              width="18.5361"
              height="2.62207"
              rx="1.31104"
              transform="rotate(-30.4551 7 19.8125)"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_40">
          <div
            className="col-lg-5 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_height_57 td_height_lg_0" />
            <div className="td_section_heading td_style_1">
              <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
                Navigate
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0 td_white_color td_opacity_7">
                Far far away, behind the word mountains, far from the
                Consonantia, there live the blind texts. Separated they marks
                grove right at the coast of the Semantics
              </p>
            </div>
            <div className="td_btn_box">
              <svg
                width="299"
                height="315"
                viewBox="0 0 299 315"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.75" clipPath="url(#clip0_34_2222)">
                  <path
                    d="M242.757 275.771C242.505 275.771 242.253 275.75 242.005 275.707C32.3684 239.98 0.342741 8.13005 0.0437414 5.79468C-0.108609 4.51176 0.22739 3.21754 0.9787 2.19335C1.73001 1.16916 2.8359 0.497795 4.05598 0.32519C5.27606 0.152585 6.5117 0.492693 7.4943 1.27158C8.4769 2.05047 9.12704 3.20518 9.3034 4.48471C9.59772 6.7514 40.7872 231.477 243.5 266.022C244.658 266.22 245.702 266.868 246.426 267.838C247.15 268.808 247.5 270.028 247.406 271.256C247.312 272.484 246.782 273.63 245.921 274.467C245.06 275.303 243.93 275.769 242.757 275.771Z"
                    fill="white"
                  />
                  <path
                    d="M299.002 275.455C271.709 283.305 237.446 297.872 215.562 314.617L235.465 269.602L223.318 221.648C242.099 242.137 273.428 262.728 299.002 275.455Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_2222">
                    <rect
                      width="299"
                      height="314"
                      fill="white"
                      transform="translate(0 0.421875)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="td_btn_box_in">
                <Link
                  to="/courses-grid-view"
                  className="td_btn td_style_1 td_radius_10 td_medium td_fs_18"
                >
                  <span className="td_btn_in td_heading_color td_white_bg">
                    <span>View All Program</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="td_card td_style_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <Link to="/course-details" className="td_card_thumb d-block">
                    <img
                      src={campusLife1}
                      alt="Campus Life"
                      className="w-100"
                    />
                  </Link>
                  <div className="td_card_info">
                    <h2 className="td_card_title mb-0 td_fs_18 td_semibold td_white_color">
                      <Link to="/course-details">Campus Student Life</Link>
                    </h2>
                    <Link to="/course-details" className="td_card_btn">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="td_height_40 td_height_lg_30" />
                <div
                  className="td_card td_style_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <Link to="/course-details" className="td_card_thumb d-block">
                    <img
                      src={campusLife3}
                      alt="Recreations & Wellness"
                      className="w-100"
                    />
                  </Link>
                  <div className="td_card_info">
                    <h2 className="td_card_title mb-0 td_fs_18 td_semibold td_white_color">
                      <Link to="/course-details">Recreations & Wellness</Link>
                    </h2>
                    <Link to="/course-details" className="td_card_btn">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="td_height_50 td_height_lg_30" />
                <div
                  className="td_card td_style_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.25s"
                >
                  <Link to="/course-details" className="td_card_thumb d-block">
                    <img
                      src={campusLife2}
                      alt="Arts & Cultural Program"
                      className="w-100"
                    />
                  </Link>
                  <div className="td_card_info">
                    <h2 className="td_card_title mb-0 td_fs_18 td_semibold td_white_color">
                      <Link to="/course-details">Arts & Cultural Program</Link>
                    </h2>
                    <Link to="/course-details" className="td_card_btn">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="td_height_40 td_height_lg_30" />
                <div
                  className="td_card td_style_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <Link to="/course-details" className="td_card_thumb d-block">
                    <img
                      src={campusLife4}
                      alt="Sports & Fitness"
                      className="w-100"
                    />
                  </Link>
                  <div className="td_card_info">
                    <h2 className="td_card_title mb-0 td_fs_18 td_semibold td_white_color">
                      <Link to="/course-details">Sports & Fitness</Link>
                    </h2>
                    <Link to="/course-details" className="td_card_btn">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.564 4.70161L4.42188 18.8438"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5654 13.5341C18.5654 13.5341 19.7299 5.85989 18.5654 4.69528C17.4008 3.53067 9.72656 4.69531 9.72656 4.69531"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_112 td_height_lg_75" />
    </section>
  );
};
