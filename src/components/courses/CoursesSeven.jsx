import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

// Import images
import courseThumb1 from "../../assets/img/home_7/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_7/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_7/course_thumb_3.jpg";
import userIcon from "../../assets/img/icons/user_3.svg";
import bookIcon from "../../assets/img/icons/book.svg";

export const CoursesSeven = () => {
  useHobble();

  const courses = [
    {
      id: 1,
      image: courseThumb1,
      seats: 150,
      semesters: 12,
      title: "Complete a Positive way Thinking to passionate",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      delay: "0.3s",
    },
    {
      id: 2,
      image: courseThumb2,
      seats: 150,
      semesters: 12,
      title: "Complete a Positive way Thinking to passionate",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      delay: "0.4s",
    },
    {
      id: 3,
      image: courseThumb3,
      seats: 150,
      semesters: 12,
      title: "Complete a Positive way Thinking to passionate",
      description:
        "Far far away, behind the word mountains, far from the Consonantia.",
      delay: "0.5s",
    },
  ];

  return (
    <section className="td_shape_section_10 td_hobble">
      <div className="td_shape_position_4 position-absolute td_accent_color td_hover_layer_3">
        <svg
          width="42"
          height="52"
          viewBox="0 0 42 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.17"
            d="M41.9991 17.3773C41.9991 27.5945 24.7173 51.3773 14.5 51.3773C4.28273 51.3773 0 12.0994 0 1.88216C0 -8.33511 12.2827 26.375 22.5 26.375C32.7173 26.375 41.9991 7.16 41.9991 17.3773Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="td_shape_position_5 position-absolute td_hover_layer_5">
        <svg
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4795 0H0V24.6667H10.5195V37.0026H31.999V12.3359H21.4795V0ZM21.4795 12.3359H10.5195V24.6667H21.4795V12.3359Z"
            fill="#EBECED"
          />
        </svg>
      </div>
      <div className="td_shape_position_6 position-absolute td_accent_color td_hover_layer_3">
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.17"
            cx="18.5"
            cy="18.5"
            r="18.5"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="td_shape_position_7 position-absolute td_accent_color td_hover_layer_5">
        <svg
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <mask id="path-1-inside-1_34_7474" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4795 0H0V24.6667H10.5195V37.0026H31.999V12.3359H21.4795V0ZM21.4795 12.3359H10.5195V24.6667H21.4795V12.3359Z"
              />
            </mask>
            <path
              d="M0 0V-1H-1V0H0ZM21.4795 0H22.4795V-1H21.4795V0ZM0 24.6667H-1V25.6667H0V24.6667ZM10.5195 37.0026H9.51953V38.0026H10.5195V37.0026ZM31.999 37.0026V38.0026H32.999V37.0026H31.999ZM31.999 12.3359H32.999V11.3359H31.999V12.3359ZM10.5195 12.3359V11.3359H9.51953V12.3359H10.5195ZM21.4795 24.6667V25.6667H22.4795V24.6667H21.4795ZM0 1H21.4795V-1H0V1ZM1 24.6667V0H-1V24.6667H1ZM10.5195 23.6667H0V25.6667H10.5195V23.6667ZM11.5195 37.0026V24.6667H9.51953V37.0026H11.5195ZM31.999 36.0026H10.5195V38.0026H31.999V36.0026ZM30.999 12.3359V37.0026H32.999V12.3359H30.999ZM21.4795 13.3359H31.999V11.3359H21.4795V13.3359ZM20.4795 0V12.3359H22.4795V0H20.4795ZM10.5195 13.3359H21.4795V11.3359H10.5195V13.3359ZM11.5195 24.6667V12.3359H9.51953V24.6667H11.5195ZM21.4795 23.6667H10.5195V25.6667H21.4795V23.6667ZM20.4795 12.3359V24.6667H22.4795V12.3359H20.4795Z"
              fill="#00001B"
              mask="url(#path-1-inside-1_34_7474)"
            />
          </g>
        </svg>
      </div>

      <div className="td_height_120 td_height_lg_80" />

      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 td_accent_color">
              Popular Courses
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              Pick a Courses & Get Started <br />
              your Journey
            </h2>
          </div>
          <div className="td_section_heading_right">
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_2 td_heading_color td_medium td_mb_10 td_fs_18"
            >
              See all Courses
              <i>
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
              </i>
            </Link>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          {courses.map((course) => (
            <div
              key={course.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={course.delay}
            >
              <div className="td_card td_style_3 td_type_2 d-block">
                <Link to="/course-details" className="td_card_thumb">
                  <img src={course.image} alt="Course thumbnail" />
                </Link>
                <div className="td_card_info td_white_bg">
                  <div className="td_card_info_in">
                    <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
                      <li>
                        <img src={userIcon} alt="User icon" />
                        <span className="td_opacity_7">
                          {course.seats} Seats
                        </span>
                      </li>
                      <li>
                        <img src={bookIcon} alt="Book icon" />
                        <span className="td_opacity_7">
                          {course.semesters} Semesters
                        </span>
                      </li>
                    </ul>
                    <h2 className="td_card_title td_fs_24 td_mb_16">
                      <Link to="/course-details">{course.title}</Link>
                    </h2>
                    <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_25">
                      {course.description}
                    </p>
                    <Link
                      to="/cart"
                      className="td_btn td_style_1 td_type_2 td_radius_30 td_medium"
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        <span>Find Courses</span>
                        <span className="td_btn_icon td_center td_accent_bg td_white_color">
                          <svg
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
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
