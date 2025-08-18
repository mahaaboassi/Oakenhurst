import React, { useState } from "react";

import SearchIcon from "../../assets/img/icons/search_2.svg";

export const HeaderSearch = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <button
        className="td_circle_btn td_center td_search_tobble_btn"
        type="button"
        onClick={() => setShowSearch((v) => !v)}
      >
        <img src={SearchIcon} alt="" />
      </button>

      <div className={`td_header_search_wrap ${showSearch && "active"}`}>
        <form action="#" className="td_header_search">
          <input
            type="text"
            className="td_header_search_input"
            placeholder="Search For Anything"
          />
          <button className="td_header_search_btn td_center">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
    </>
  );
};
