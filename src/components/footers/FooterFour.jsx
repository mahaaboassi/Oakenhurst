import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/footer_logo_v3.svg";

export const FooterFour = () => {
  return (
    <footer className="td_footer td_style_1 td_type_1 td_color_1">
      <div className="container">
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_text_widget td_fs_18">
                <img src={footerLogo} alt="Logo" />
                <p>
                  Far far away, behind the word mountains, far from the
                  Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="td_footer_social_btns td_fs_20">
                <a href="#" className="td_center">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="td_center">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Navigate
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact">Refund</Link>
                </li>
                <li>
                  <Link to="#">Help Center</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Courses
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/course-details">Business Coach</Link>
                </li>
                <li>
                  <Link to="/course-details">Development Coach</Link>
                </li>
                <li>
                  <Link to="/course-details">Testimonials</Link>
                </li>
                <li>
                  <Link to="/course-details">Seo Optimization</Link>
                </li>
                <li>
                  <Link to="/course-details">Web design</Link>
                </li>
                <li>
                  <Link to="/course-details">Life Coach</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Subscribe Now
              </h2>
              <ul className="td_footer_address_widget td_medium td_mp_0">
                <li>
                  <i className="fa-solid fa-phone-volume"></i>
                  <a href="cal:+23(000)68603">+23 (000) 68 603</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:help@educve.kinder.com">
                    help@educve.kinder.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>66 broklyn golden
                  street <br />
                  600 New york. USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              Copyright 2024 ©educve | All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
