import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/footer_logo.svg";

export const FooterOne = () => {
  return (
    <footer className="td_footer td_style_1">
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              © OAKENHURST 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
