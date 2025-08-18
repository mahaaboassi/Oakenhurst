import React, { useState } from "react";

import WorldIcon from "../../assets/img/icons/world.svg";

export const HeaderLanguage = () => {
  const [showLang, setShowLang] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowLang((v) => !v)}
        className={`td_header_dropdown_btn td_medium td_heading_color ${
          showLang && "active"
        }`}
      >
        <span>English</span>
        <img src={WorldIcon} alt="" className="td_header_dropdown_btn_icon" />
      </button>
      <ul className="td_header_dropdown_list td_mp_0">
        <li>
          <a href="#">English</a>
        </li>
        <li>
          <a href="#">Spanish</a>
        </li>
        <li>
          <a href="#">Russian</a>
        </li>
      </ul>
    </>
  );
};
