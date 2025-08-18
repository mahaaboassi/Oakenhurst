import React from "react";
import { Link } from "react-router-dom";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import logo from "../../assets/img/logo_v6.svg";
import menuSquare from "../../assets/img/icons/menu-square.svg";
import searchIcon2 from "../../assets/img/icons/search_2.svg";
import { HeaderSearch } from "./HeaderSearch";

export const HeaderEight = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_5 td_sticky_header td_medium td_heading_color">
      <div className="td_main_header">
        <div className="container-fluid">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link to="/" className="td_site_branding">
                <img src={logo} alt="Logo" />
              </Link>
              <div className="position-relative td_header_category_wrap">
                <button className="td_header_dropdown_btn td_medium td_heading_color">
                  <img
                    src={menuSquare}
                    alt=""
                    className="td_header_dropdown_btn_icon"
                  />
                  <span>All Category</span>
                  <span className="td_header_dropdown_btn_tobble_icon td_center">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M9 4.99997C9 4.99997 6.05404 1.00001 4.99997 1C3.94589 0.999991 1 5 1 5"
                        stroke="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                <ul className="td_header_dropdown_list td_mp_0">
                  <li>
                    <Link to="/courses-grid-view">Data Science</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-view">Design</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Development</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-view">Architecture</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Life Style</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Marketing</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Photography</Link>
                  </li>
                  <li>
                    <Link to="/courses-grid-with-sidebar">Motivation</Link>
                  </li>
                </ul>
              </div>
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
                      <li className="menu-item-has-children">
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">University</Link>
                          </li>
                          <li>
                            <Link to="/home-v2">Online Educations</Link>
                          </li>
                          <li>
                            <Link to="/home-v3">Education</Link>
                          </li>
                          <li>
                            <Link to="/home-v4">Kindergarten</Link>
                          </li>
                          <li>
                            <Link to="/home-v5">Modern Language</Link>
                          </li>
                          <li>
                            <Link to="/home-v6">Al-Quran Learning</Link>
                          </li>
                          <li>
                            <Link to="/home-v7">Motivation Speaker</Link>
                          </li>
                          <li>
                            <Link to="/home-v8">Kitchen Coach</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/products">Courses</Link>
                        <ul>
                          <li>
                            <Link to="/courses-grid-view">
                              Courses Grid View
                            </Link>
                          </li>
                          <li>
                            <Link to="/courses-list-view">
                              Courses List View
                            </Link>
                          </li>
                          <li>
                            <Link to="/courses-grid-with-sidebar">
                              Courses Grid With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li className="menu-item-has-children td_mega_menu">
                        <Link to="#">Pages</Link>
                        <ul className="td_mega_wrapper">
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link to="/event">Upcoming Event</Link>
                              </li>
                              <li>
                                <Link to="/event-details">Event Details</Link>
                              </li>
                              <li>
                                <Link to="/team-members">Team Members</Link>
                              </li>
                              <li>
                                <Link to="/team-member-details">
                                  Team Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link to="/students-registrations">
                                  Students Registrations
                                </Link>
                              </li>
                              <li>
                                <Link to="/instructor-registrations">
                                  Instructor Registrations
                                </Link>
                              </li>
                              <li>
                                <Link to="/signup">Signup</Link>
                              </li>
                              <li>
                                <Link to="/signin">Signin</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Shop Pages</h4>
                            <ul>
                              <li>
                                <Link to="/faqs">Faqs</Link>
                              </li>
                              <li>
                                <Link to="/cart">Cart</Link>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link to="/error">Error</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Blogs</Link>
                        <ul>
                          <li>
                            <Link to="/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link to="/blog-with-sidebar">
                              Blog With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="td_main_header_right">
              <form action="#" className="td_header_search td_mobile_hide_xxl">
                <input
                  type="text"
                  className="td_header_search_input"
                  placeholder="Search For Anything"
                />
                <button className="td_header_search_btn td_center">
                  <img src={searchIcon2} alt="" />
                </button>
              </form>
              <div className="position-relative td_mobile_show_xxl">
                <HeaderSearch />
              </div>

              <div className="td_hero_toolbox_wrap">
                <Link
                  to="/signup"
                  className="td_btn td_style_1 td_radius_10 td_medium"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Try For Free</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
