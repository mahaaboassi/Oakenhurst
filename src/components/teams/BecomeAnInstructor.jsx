import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import instructureShape1 from "../../assets/img/home_3/instructure_shape_1.png";
import instructureShape2 from "../../assets/img/home_3/instructure_shape_2.png";
import instructureShape3 from "../../assets/img/home_3/instructure_shape_3.png";
import instructureShape4 from "../../assets/img/home_3/instructure_shape_4.png";
import instructorImg1 from "../../assets/img/home_3/instructor_img_1.png";
import imgBoxShape2 from "../../assets/img/home_3/img_box_shape_2.svg";
import featureIcon5 from "../../assets/img/home_3/feature_icon_5.svg";
import featureIcon6 from "../../assets/img/home_3/feature_icon_6.svg";
import featureIcon7 from "../../assets/img/home_3/feature_icon_7.svg";

export const BecomeAnInstructor = () => {
  useHobble();

  return (
    <section className="td_shape_section_9 td_hobble">
      <div className="td_shape_position_6 position-absolute td_hover_layer_3">
        <img src={instructureShape1} alt="" />
      </div>
      <div className="td_shape_position_7 position-absolute td_hover_layer_5">
        <img src={instructureShape2} alt="" />
      </div>
      <div className="td_shape_position_8 position-absolute td_hover_layer_3">
        <img src={instructureShape3} alt="" />
      </div>
      <div className="td_shape_position_9 position-absolute td_hover_layer_5">
        <img src={instructureShape4} alt="" />
      </div>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="row td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_image_box td_style_4">
              <div className="td_image_box_img_1">
                <img src={instructorImg1} alt="" className="td_radius_10" />
              </div>
              <div className="td_image_box_shape_1 td_accent_color">
                <svg
                  width="540"
                  height="314"
                  viewBox="0 0 540 314"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M0.642023 204.034C0.642023 199.857 3.23902 196.119 7.15436 194.662L525.953 1.59735C532.515 -0.844766 539.491 4.03967 539.44 11.0415L537.989 212.199C537.954 217.026 534.477 221.139 529.723 221.976L12.376 313.066C6.25379 314.144 0.642023 309.434 0.642023 303.218L0.642023 204.034Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="td_image_box_shape_2">
                <img src={imgBoxShape2} alt="" />
              </div>
              <div className="td_image_box_shape_3 td_accent_color">
                <svg
                  width="584"
                  height="396"
                  viewBox="0 0 584 396"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g opacity="0.5">
                    <path
                      d="M523.324 75.9476C523.513 76.3363 523.451 76.9078 523.01 77.7125C522.574 78.5076 521.8 79.4702 520.69 80.5932C518.473 82.8366 514.958 85.6754 510.268 89.0357C500.892 95.754 486.855 104.531 469.2 114.761C433.891 135.22 384.13 161.481 328.287 188.692C272.444 215.903 221.097 238.91 183.223 254.111C164.286 261.712 148.722 267.358 137.652 270.603C132.115 272.226 127.713 273.245 124.579 273.609C123.011 273.791 121.775 273.808 120.88 273.661C119.974 273.513 119.485 273.21 119.296 272.821C119.106 272.432 119.169 271.861 119.61 271.056C120.046 270.261 120.82 269.298 121.93 268.175C124.147 265.932 127.662 263.093 132.351 259.733C141.727 253.015 155.764 244.238 173.42 234.008C208.729 213.548 258.49 187.288 314.333 160.077C370.176 132.866 421.523 109.859 459.396 94.6578C478.334 87.057 493.897 81.4103 504.967 78.1656C510.504 76.5427 514.906 75.524 518.04 75.1597C519.609 74.9774 520.844 74.9611 521.739 75.1077C522.645 75.256 523.134 75.5588 523.324 75.9476Z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                    {/* ... other SVG paths ... */}
                  </g>
                </svg>
              </div>
              <div className="td_image_box_shape_4 td_accent_color">
                <svg
                  width="321"
                  height="179"
                  viewBox="0 0 321 179"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    opacity="0.5"
                    d="M318.075 59.6884C322.237 81.8165 309.033 105.527 283.232 125.998C257.511 146.404 219.696 163.205 175.873 171.441C132.05 179.678 90.712 177.755 59.3334 168.081C27.8555 158.376 6.93756 141.08 2.7751 118.951C-1.38736 96.8233 11.8169 73.1129 37.6185 52.6421C63.3389 32.2358 101.155 15.4353 144.977 7.19844C188.8 -1.03841 230.138 0.884654 261.517 10.5587C292.995 20.2633 313.913 37.5602 318.075 59.6884Z"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                Inspired instructor
              </p>
              <h2 className="td_section_title td_fs_48 td_mb_20">
                Become an Instructor
              </h2>
              <p className="td_section_subtitle td_fs_18 td_mb_36">
                Far far away, behind the word mountains, far from the Conson
                antia, there live the blind texts. Separated they marks
              </p>
              <div className="td_mb_40 td_list_3_wrap">
                <ul className="td_list td_style_3 td_mp_0">
                  <li>
                    <div className="td_list_icon td_center">
                      <img src={featureIcon5} alt="" />
                    </div>
                    <div className="td_list_right">
                      <h3 className="td_fs_24 td_semibold td_mb_6">
                        Earn Money
                      </h3>
                      <p className="mb-0 td_heading_color td_opacity_7">
                        Far from the Conson antia
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="td_list_icon td_center">
                      <img src={featureIcon6} alt="" />
                    </div>
                    <div className="td_list_right">
                      <h3 className="td_fs_24 td_semibold td_mb_6">
                        Inspired Students
                      </h3>
                      <p className="mb-0 td_heading_color td_opacity_7">
                        Behind the word mountains, far from Conson
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="td_list_icon td_center">
                      <img src={featureIcon7} alt="" />
                    </div>
                    <div className="td_list_right">
                      <h3 className="td_fs_24 td_semibold td_mb_6">
                        Join Our Community
                      </h3>
                      <p className="mb-0 td_heading_color td_opacity_7">
                        Behind the word mountains, far from Conson
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="td_list_3_box td_accent_bg text-center">
                  <h2 className="td_fs_64 td_white_color mb-0">4k</h2>
                  <p className="mb-0 td_fs_14 td_white_color td_opacity_8">
                    Worldwide Satisfied Students
                  </p>
                </div>
              </div>
              <Link
                to="/team-members"
                className="td_btn td_style_1 td_radius_30 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>See All Instructors</span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
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
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
