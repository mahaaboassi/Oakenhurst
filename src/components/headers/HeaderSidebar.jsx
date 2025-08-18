import React from "react";
import { Link } from "react-router-dom";

import logoBlack from "../../assets/img/logo_dark.svg";

export const HeaderSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`td_side_header ${showSidebar && "active"}`}>
      <button className="td_close" onClick={toggleSidebar} />

      <div className="td_side_header_overlay" onClick={toggleSidebar} />

      <div className="td_side_header_in">
        <div className="td_side_header_shape" />
        <Link className="td_site_branding" href="index.html">
          <img style={{width:"100px"}} src={logoBlack} alt="Logo" />
        </Link>

        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Contact Us</h3>
          <ul className="td_side_header_contact_info td_mp_0">
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>
                <a href="tel:+911944060999">+91 194 4060999</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <a href="mailto:info@oakenhurst.org">info@oakenhurst.org</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                9, Haza Commercial Complex
                <br />
                Residency Road, Srinagar
                <br />
                190001, Jammu & Kashmir
                <br/> India
              </span>
            </li>
          </ul>
        </div>

        {/* <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Follow Us</h3>
          <div className="td_social_btns td_style_1 td_heading_color">
            <a href="#" className="td_center">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
