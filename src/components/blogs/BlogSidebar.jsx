import React from "react";
import { Link } from "react-router-dom";

import post1 from "../../assets/img/home_1/post_1.jpg";
import post2 from "../../assets/img/home_1/post_2.jpg";
import post3 from "../../assets/img/home_1/post_3.jpg";

export const BlogSidebar = () => {
  const popularKeywords = [
    { name: "Architecture", count: 12 },
    { name: "Design", count: 5 },
    { name: "Renovation", count: 25 },
    { name: "Construction", count: 7 },
    { name: "Soil", count: 19 },
    { name: "Rebuild", count: 2 },
    { name: "Interior", count: 18 },
  ];

  const recentPosts = [
    {
      id: 1,
      image: post1,
      date: "22 Jan, 2023",
      title: "Need to avoid redirect couple our design",
    },
    {
      id: 2,
      image: post2,
      date: "22 Jan, 2023",
      title: "Comprehensive student guide for new educations",
    },
    {
      id: 3,
      image: post3,
      date: "22 Jan, 2023",
      title: "Overview of the new education system for students",
    },
  ];

  return (
    <div className="td_left_sidebar">
      {/* search */}
      <div className="td_sidebar_widget">
        <h3 className="td_sidebar_widget_title td_fs_20 td_mb_30">
          Search Here
        </h3>
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

      {/* recents */}
      <div className="td_sidebar_widget">
        <h3 className="td_sidebar_widget_title td_fs_20 td_mb_30">
          Recent Post
        </h3>
        <ul className="td_recent_post_list td_mp_0">
          {recentPosts.map(({ id, image, date, title }) => (
            <li key={id}>
              <div className="td_recent_post">
                <Link to="/blog-details" className="td_recent_post_thumb">
                  <img src={image} alt="blog post" />
                </Link>
                <div className="td_recent_post_right">
                  <p className="td_recent_post_date mb-0 td_fs_14">
                    <i className="fa-regular fa-calendar"></i>
                    <span>{date}</span>
                  </p>
                  <h3 className="td_fs_16 td_semibold mb-0">
                    <Link to="/blog-details">{title}</Link>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* popular */}
      <div className="td_sidebar_widget">
        <h3 className="td_sidebar_widget_title td_fs_20 td_mb_30">
          Popular Keyword
        </h3>
        <ul className="td_sidebar_widget_list">
          {popularKeywords.map(({ name, count }) => (
            <li key={name} className="cat-item">
              <Link to="#">
                <span>{name}</span>
                <span>({String(count).padStart(2, "0")})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* tags */}
      <div className="td_sidebar_widget">
        <h3 className="td_sidebar_widget_title td_fs_20 td_mb_30">Tags</h3>
        <div className="tagcloud">
          {["Educations", "University", "School", "Agency", "Travel"].map(
            (tag) => (
              <Link key={tag} to="#" className="tag-cloud-link">
                {tag}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};
