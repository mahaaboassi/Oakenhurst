import React from "react";

export const BlogCommentForm = () => {
  return (
    <div className="td_comment_wrap">
      <h2 className="td_fs_24 td_semibold td_mb_10">Post a comment</h2>
      <p className="td_mb_16 td_heading_color">
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="#" className="row td_gap_y_20">
        <div className="col-lg-12">
          <textarea
            cols="30"
            rows="5"
            className="td_form_field"
            placeholder="Write Your Comment*"
          ></textarea>
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            className="td_form_field"
            placeholder="Full Name*"
          />
        </div>
        <div className="col-lg-4">
          <input type="text" className="td_form_field" placeholder="Email*" />
        </div>
        <div className="col-lg-4">
          <input type="text" className="td_form_field" placeholder="Website*" />
        </div>
        <div className="col-lg-12">
          <button className="td_btn td_style_1 td_radius_10 td_medium">
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Post Comment</span>
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
          </button>
        </div>
      </form>
    </div>
  );
};
