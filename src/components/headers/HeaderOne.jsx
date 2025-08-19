import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import Logo from "../../assets/img/edu_logo.svg";
import text_logo from "../../assets/img/text-logo.svg";

export const HeaderOne = () => {
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" to="/">
                  <img style={{width:"50px"}} src={Logo} alt="Logo" />
                 
                </Link>
                 <img style={{width:"150px"}} src={text_logo} alt="Logo" />
              </div>
              {/* right */}
              <div className="td_main_header_right">
                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
