import React from "react";
import { useTabs } from "../../lib/hooks/useTabs";
import { CoursesThreeItem } from "./CoursesThreeItem";

// Import course images
import courseThumb1 from "../../assets/img/home_3/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_3/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_3/course_thumb_3.jpg";
import courseThumb4 from "../../assets/img/home_3/course_thumb_4.jpg";

export const CoursesThree = () => {
  useTabs();

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              Our Latest courses
            </p>
            <h2 className="td_section_title td_fs_48 mb-0">
              Pick Our Latest Courses <br />
              and Build your Skills
            </h2>
          </div>
          <div className="td_section_heading_right">
            <p className="td_section_subtitle td_fs_18 td_mb_16 td_heading_color td_opacity_9">
              Far far away, behind the word mountains, far from the Conson
              antia, there live the blind texts. Separated they marks
            </p>
            <a
              href="courses-grid-with-sidebar.html"
              className="td_btn td_style_2 td_heading_color td_medium td_mb_10"
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
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
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
                  ></path>
                  <path
                    d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </a>
          </div>
        </div>
        <div className="td_height_40 td_height_lg_40" />
        <div className="td_tabs td_style_1">
          <ul
            className="td_tab_links td_style_2 td_type_1 td_mp_0 td_medium td_fs_20 td_heading_color wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <li className="active">
              <a href="#td_tab_1">Academic</a>
            </li>
            <li>
              <a href="#td_tab_2">Design</a>
            </li>
            <li>
              <a href="#td_tab_3">Development</a>
            </li>
            <li>
              <a href="#td_tab_4">E-learning</a>
            </li>
            <li>
              <a href="#td_tab_5">Blockchain</a>
            </li>
            <li>
              <a href="#td_tab_6">Professional</a>
            </li>
            <li>
              <a href="#td_tab_7">Technology</a>
            </li>
          </ul>
          <div className="td_height_40 td_height_lg_40" />

          <div className="td_tab_body">
            {/* academic */}
            <div className="td_tab active" id="td_tab_1">
              <div className="row td_gap_y_30 td_row_gap_30">
                {academicCourses.map((course, index) => (
                  <div
                    key={index}
                    className="col-xl-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={course.delay}
                  >
                    <CoursesThreeItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* design */}
            <div className="td_tab" id="td_tab_2">
              <div className="row td_gap_y_30 td_row_gap_30">
                {designCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesThreeItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* development */}
            <div className="td_tab" id="td_tab_3">
              <div className="row td_gap_y_30 td_row_gap_30">
                {developmentCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesThreeItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* e-learning */}
            <div className="td_tab" id="td_tab_4">
              <div className="row td_gap_y_30 td_row_gap_30">
                {eLearningCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesThreeItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* block chain */}
            <div className="td_tab" id="td_tab_5">
              <div className="row td_gap_y_30 td_row_gap_30">
                {blockchainCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesThreeItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* professional */}
            <div className="td_tab" id="td_tab_6">
              <div className="row td_gap_y_30 td_row_gap_30">
                {professionalCourses.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesThreeItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* technology */}
            <div className="td_tab" id="td_tab_7">
              <div className="td_tab_comming_soon td_center td_fs_24 td_semibold td_heading_color">
                Comming Soon...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

// Course data
const academicCourses = [
  {
    src: courseThumb1,
    weeks: 10,
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    price: 39,
    author: "Robert Anderson",
    delay: "0.3s",
  },
  {
    src: courseThumb2,
    weeks: 8,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    price: 89,
    author: "Robert Anderson",
    delay: "0.35s",
  },
  {
    src: courseThumb3,
    weeks: 12,
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    price: 19,
    author: "Jhon Doe",
    delay: "0.4s",
  },
  {
    src: courseThumb4,
    weeks: 20,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    price: 89,
    author: "Mary Krisey",
    delay: "0.45s",
  },
];

const designCourses = [
  {
    src: courseThumb3,
    weeks: 12,
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    price: 19,
    author: "Jhon Doe",
    delay: "0.3s",
  },
  {
    src: courseThumb4,
    weeks: 20,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    price: 89,
    author: "Mary Krisey",
    delay: "0.35s",
  },
  {
    src: courseThumb1,
    weeks: 10,
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    price: 39,
    author: "Robert Anderson",
    delay: "0.4s",
  },
  {
    src: courseThumb2,
    weeks: 8,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    price: 89,
    author: "Robert Anderson",
    delay: "0.45s",
  },
];

const developmentCourses = [
  {
    src: courseThumb1,
    weeks: 10,
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    price: 39,
    author: "Robert Anderson",
    delay: "0.3s",
  },
  {
    src: courseThumb4,
    weeks: 20,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    price: 89,
    author: "Mary Krisey",
    delay: "0.35s",
  },
  {
    src: courseThumb2,
    weeks: 8,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    price: 89,
    author: "Robert Anderson",
    delay: "0.4s",
  },
  {
    src: courseThumb3,
    weeks: 12,
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    price: 19,
    author: "Jhon Doe",
    delay: "0.45s",
  },
];

const eLearningCourses = [
  {
    src: courseThumb2,
    weeks: 8,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    price: 89,
    author: "Robert Anderson",
    delay: "0.3s",
  },
  {
    src: courseThumb3,
    weeks: 12,
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    price: 19,
    author: "Jhon Doe",
    delay: "0.35s",
  },
  {
    src: courseThumb1,
    weeks: 10,
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    price: 39,
    author: "Robert Anderson",
    delay: "0.4s",
  },
  {
    src: courseThumb4,
    weeks: 20,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    price: 89,
    author: "Mary Krisey",
    delay: "0.45s",
  },
];

const blockchainCourses = [
  {
    src: courseThumb2,
    weeks: 8,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    price: 89,
    author: "Robert Anderson",
    delay: "0.3s",
  },
  {
    src: courseThumb3,
    weeks: 12,
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    price: 19,
    author: "Jhon Doe",
    delay: "0.35s",
  },
  {
    src: courseThumb4,
    weeks: 20,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    price: 89,
    author: "Mary Krisey",
    delay: "0.4s",
  },
];

const professionalCourses = [
  {
    src: courseThumb4,
    weeks: 20,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    price: 89,
    author: "Mary Krisey",
    delay: "0.3s",
  },
  {
    src: courseThumb3,
    weeks: 12,
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    price: 19,
    author: "Jhon Doe",
    delay: "0.35s",
  },
];
