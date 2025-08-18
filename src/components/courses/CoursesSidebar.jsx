import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const categories = [
  { name: "Data Analysis", count: 29 },
  { name: "Software Engineer", count: 45 },
  { name: "Fine Arts", count: 16 },
  { name: "Business Analysis", count: 45 },
  { name: "Software Develop", count: 42 },
  { name: "Software Engineer", count: 44 },
];

const languages = [
  "Spanish Language",
  "Arabic Language",
  "United State(UK)",
  "United Kingdom(US)",
];

const skillLevels = [
  { name: "All Level", count: 59 },
  { name: "Beginners Level", count: 50 },
  { name: "Intermediate Level", count: 42 },
  { name: "Expert Level", count: 30 },
];

const durations = [
  { hours: "0-1", count: 120 },
  { hours: "0-3", count: 130 },
  { hours: "0-4", count: 89 },
  { hours: "0-5", count: 96 },
];

const ratings = [5, 4, 3, 2, 1];

export const CoursesSidebar = () => {
  useEffect(() => {
    $("#slider-range").slider({
      range: true,
      min: 10,
      max: 400,
      values: [60, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }, []);

  return (
    <div className="td_sidebar_filter">
      {/* search */}
      <div className="td_filter_widget">
        <form action="#" className="td_sidebar_search">
          <input
            type="text"
            placeholder="Keywords"
            className="td_sidebar_search_input"
          />
          <button type="submit" className="td_sidebar_search_btn td_center">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      {/* price range */}
      <div className="td_filter_widget">
        <h3 className="td_filter_widget_title td_fs_20 td_mb_16">
          Price Filter
        </h3>
        <div className="st-range-slider-wrap">
          <div id="slider-range" />
          <div className="td_amount_wrap">
            <input type="text" id="amount" readOnly />
          </div>
        </div>
      </div>

      {/* categories */}
      <div className="td_filter_widget">
        <h3 className="td_filter_widget_title td_fs_20 td_mb_16">Categories</h3>
        <div className="td_filter_category td_fs_18 td_semibold">
          {categories.map((category, index) => (
            <Link key={index} to="/courses-grid-view">
              <span>{`${category.name} (${category.count})`}</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          ))}
        </div>
      </div>

      {/* language */}
      <div className="td_filter_widget">
        <h3 className="td_filter_widget_title td_fs_20 td_mb_16">
          Language Skills
        </h3>
        <ul className="td_filter_widget_list td_mp_0">
          {languages.map((language, index) => (
            <li key={index}>
              <div className="td_custom_checkbox_2">
                <input type="checkbox" />
                <span>{language}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="td_filter_widget">
        {/* skills */}
        <h3 className="td_filter_widget_title td_fs_20 td_mb_16">
          Skills Level
        </h3>
        <ul className="td_filter_widget_list td_mp_0">
          {skillLevels.map((skill, index) => (
            <li key={index}>
              <div className="td_custom_checkbox_2">
                <input type="checkbox" />
                <span>{`${skill.name} (${skill.count})`}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="td_height_30 td_height_lg_30" />

        <hr />

        <div className="td_height_30 td_height_lg_30" />

        {/* duration */}
        <h3 className="td_filter_widget_title td_fs_20 td_mb_16">
          Video Durations
        </h3>

        <ul className="td_filter_widget_list td_mp_0 td_semibold">
          {durations.map((duration, index) => (
            <li key={index}>
              <div className="td_custom_checkbox_2">
                <input type="checkbox" />
                <span>{`${duration.hours} Hours (${duration.count})`}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* rating */}
      <div className="td_filter_widget">
        <h3 className="td_filter_widget_title td_fs_20 td_mb_16">Rated By</h3>
        <ul className="td_filter_widget_list td_mp_0">
          {ratings.map((rating) => (
            <li key={rating}>
              <div className="td_custom_checkbox_2">
                <input type="checkbox" />
                <span>
                  <span className="td_rating">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fa-regular fa-star"></i>
                    ))}
                    <span
                      className="td_rating_percentage"
                      style={{ width: rating * 20 + "%" }}
                    >
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className="fa-solid fa-star fa-fw"></i>
                      ))}
                    </span>
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
