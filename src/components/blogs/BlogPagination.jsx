import React from "react";

export const BlogPagination = () => {
  return (
    <ul className="td_page_pagination td_mp_0 td_fs_18 td_semibold">
      <li>
        <button className="td_page_pagination_item td_center" type="button">
          <i className="fa-solid fa-angles-left"></i>
        </button>
      </li>
      <li>
        <a className="td_page_pagination_item td_center active" href="#">
          1
        </a>
      </li>
      <li>
        <a className="td_page_pagination_item td_center" href="#">
          2
        </a>
      </li>
      <li>
        <a className="td_page_pagination_item td_center" href="#">
          3
        </a>
      </li>
      <li>
        <a className="td_page_pagination_item td_center" href="#">
          4
        </a>
      </li>
      <li>
        <button className="td_page_pagination_item td_center" type="button">
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </li>
    </ul>
  );
};
