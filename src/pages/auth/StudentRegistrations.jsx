import React from "react";
import { Layout } from "../../layouts/Layout";

export const StudentRegistrations = () => {
  return (
    <Layout
      breadcrumbTitle={"Students Registrations"}
      breadcrumbSubtitle={"Students Registrations"}
    >
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20 text-uppercase td_mb_16">
                    Students Registrations
                  </h2>
                  <h3 className="td_fs_24 td_medium td_opacity_9 td_mb_32">
                    Fields with are required
                  </h3>
                  <p className="td_fs_18 td_heading_color td_opacity_7 td_mb_40">
                    Far far away, behind the word mountains, far from the
                    Consonantia, there live the blind texts. Separated they
                    marks grove right at the coast of the Semantics a large
                    language ocean
                  </p>
                  <h3 className="td_fs_32 td_medium td_mb_30">Credentials</h3>
                  <label className="td_medium td_heading_color td_mb_12">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_12">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_12">
                    User Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_12">
                    Courses Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_12">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_12">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_12">
                    Confirmations Password *
                  </label>
                  <input
                    type="password"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_10 td_medium w-100 td_fs_20"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Create Account</span>
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          d="M15.1575 4.34302L3.84375 15.6567"
                          stroke="currentColor"
                        />
                        <path
                          d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                          stroke="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
};
