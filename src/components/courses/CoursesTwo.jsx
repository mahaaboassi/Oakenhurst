import React from "react";
import { useTabs } from "../../lib/hooks/useTabs";
import { CoursesTwoItem } from "./CoursesTwoItem";

import courseThumb1 from "../../assets/img/home_3/course_thumb_1.jpg";
import courseThumb2 from "../../assets/img/home_3/course_thumb_2.jpg";
import courseThumb3 from "../../assets/img/home_3/course_thumb_3.jpg";
import courseThumb4 from "../../assets/img/home_3/course_thumb_4.jpg";
import courseThumb5 from "../../assets/img/home_3/course_thumb_5.jpg";
import courseThumb6 from "../../assets/img/home_3/course_thumb_6.jpg";

export const CoursesTwo = () => {
  useTabs();

  return (
    <section className="td_gray_bg_4">
      <div className="td_height_112 td_height_lg_75" />

      <div className="container">
        <div className="td_tabs td_style_1">
          <div
            className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading_left">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                <i></i>
                Latest courses
                <i></i>
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Pick Our Latest Courses <br />
                and Build your Skills
              </h2>
            </div>

            <div className="td_section_heading_right">
              <ul className="td_tab_links td_style_2 td_mp_0 td_medium td_fs_20 td_heading_color">
                <li className="active">
                  <a href="#td_tab_1">Design</a>
                </li>
                <li>
                  <a href="#td_tab_2">Development</a>
                </li>
                <li>
                  <a href="#td_tab_3">Academic</a>
                </li>
                <li>
                  <a href="#td_tab_4">E-learning</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_height_50 td_height_lg_50" />

          <div className="td_tab_body">
            {/* design */}
            <div className="td_tab active" id="td_tab_1">
              <div className="row td_gap_y_30 td_row_gap_30">
                {coursesDesign.map((course, index) => (
                  <div
                    key={index}
                    className="col-xl-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={course.delay}
                  >
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* development */}
            <div className="td_tab" id="td_tab_2">
              <div className="row td_gap_y_30 td_row_gap_30">
                {coursesDevelopment.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* academic */}
            <div className="td_tab" id="td_tab_3">
              <div className="row td_gap_y_30 td_row_gap_30">
                {coursesAcademic.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            {/* e-learning */}
            <div className="td_tab" id="td_tab_4">
              <div className="row td_gap_y_30 td_row_gap_30">
                {coursesElearning.map((course, index) => (
                  <div key={index} className="col-xl-6">
                    <CoursesTwoItem {...course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const coursesDesign = [
  {
    src: courseThumb1,
    tag: "New",
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    author: "Robert Anderson",
    price: 39,
    delay: "0.3s",
  },
  {
    src: courseThumb2,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    author: "Robert Anderson",
    price: 89,
    delay: "0.35s",
  },
  {
    src: courseThumb3,
    tag: "Best Seller",
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    author: "Jhon Doe",
    price: 19,
    delay: "0.3s",
  },
  {
    src: courseThumb4,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    author: "Mary Krisey",
    price: 89,
    delay: "0.35s",
  },
];

const coursesDevelopment = [
  {
    src: courseThumb2,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    author: "Robert Anderson",
    price: 89,
    delay: "0.3s",
  },
  {
    src: courseThumb3,
    tag: "Best Seller",
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    author: "Jhon Doe",
    price: 19,
    delay: "0.35s",
  },
  {
    src: courseThumb1,
    tag: "New",
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    author: "Robert Anderson",
    price: 39,
    delay: "0.3s",
  },
  {
    src: courseThumb4,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    author: "Mary Krisey",
    price: 89,
    delay: "0.35s",
  },
];

const coursesAcademic = [
  {
    src: courseThumb3,
    tag: "Best Seller",
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    author: "Jhon Doe",
    price: 19,
  },
  {
    src: courseThumb4,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    author: "Mary Krisey",
    price: 89,
  },
  {
    src: courseThumb1,
    tag: "New",
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    author: "Robert Anderson",
    price: 39,
  },
  {
    src: courseThumb2,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    author: "Robert Anderson",
    price: 89,
  },
];

const coursesElearning = [
  {
    src: courseThumb3,
    tag: "Best Seller",
    seats: 200,
    semesters: 20,
    title: "Boost Creativity & Expand Your Horizons",
    totalRatings: 30,
    author: "Jhon Doe",
    price: 19,
  },
  {
    src: courseThumb1,
    tag: "New",
    seats: 150,
    semesters: 12,
    title: "Starting Matheis Courses & Build your Skills",
    totalRatings: 6,
    author: "Robert Anderson",
    price: 39,
  },
  {
    src: courseThumb2,
    seats: 120,
    semesters: 15,
    title: "Master Technology & Elevate Your Career",
    totalRatings: 10,
    author: "Robert Anderson",
    price: 89,
  },
  {
    src: courseThumb4,
    seats: 170,
    semesters: 19,
    title: "Hone Leadership & Achieve Success",
    totalRatings: 50,
    author: "Mary Krisey",
    price: 89,
  },
];
