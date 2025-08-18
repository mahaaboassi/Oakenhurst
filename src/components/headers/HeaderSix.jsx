import React from "react";
import { Link } from "react-router-dom";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import logoImage from "../../assets/img/logo_v4.svg";

export const HeaderSix = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_sticky_header td_medium td_heading_color">
      <div className="td_main_header">
        <div className="container-fluid">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link className="td_site_branding" to="/">
                <img src={logoImage} alt="Logo" />
              </Link>

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
              <div className="td_hero_toolbox_wrap">
                <Link
                  to="/signin"
                  className="td_btn td_style_1 td_medium td_with_shadow_2"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Registration Now</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
