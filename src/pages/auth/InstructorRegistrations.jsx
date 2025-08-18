import React from "react";
import { Layout } from "../../layouts/Layout";

export const InstructorRegistrations = () => {
  return (
    <Layout
      breadcrumbTitle={"Instructor Registrations"}
      breadcrumbSubtitle={"Instructor Registrations"}
    >
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20 text-uppercase td_mb_16">
                    INSTRUCTOR REGISTRATIONS
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
                  <label className="td_medium td_heading_color td_mb_10">
                    Email*
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_24 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_10">
                    Password Minimum(<span>5 Character</span>)
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_24 td_medium td_white_bg"
                  />
                  <label className="td_medium td_heading_color td_mb_10">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_24 td_medium td_white_bg"
                  />
                  <div className="td_height_50 td_height_lg_40" />
                  <h3 className="td_fs_32 td_medium td_mb_30">
                    Profile Information
                  </h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="td_medium td_heading_color td_mb_10">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="td_medium td_heading_color td_mb_10">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="td_medium td_heading_color td_mb_10">
                        Gender*
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="0">Select an Options</option>
                        <option value="1">Mail</option>
                        <option value="2">Femail</option>
                        <option value="3">Others</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <label className="td_medium td_heading_color td_mb_10">
                        Date of Birth*
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Nationality *
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="0">Select One</option>
                        <option value="1">Bangladesh</option>
                        <option value="2">Indea</option>
                        <option value="3">USA</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Country *
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="1">Bangladesh</option>
                        <option value="2">Indea</option>
                        <option value="3">USA</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Post Code*
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Postcode/ Zip(Optional) *
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Phone *
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Begin Studies *
                      </label>
                      <input
                        type="text"
                        className="td_form_field td_mb_24 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Highest Degree *
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="0">Select an Options</option>
                        <option value="1">BSC</option>
                        <option value="2">MSc</option>
                        <option value="3">PHD</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        MBA Level *
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="0">Select an Options</option>
                        <option value="1">BSC</option>
                        <option value="2">MSc</option>
                        <option value="3">PHD</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        BBA Level *
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="0">Select an Options</option>
                        <option value="1">BSC</option>
                        <option value="2">MSc</option>
                        <option value="3">PHD</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label className="td_medium td_heading_color td_mb_10">
                        Intermediate Level *
                      </label>
                      <select className="td_form_field td_mb_24 td_medium td_white_bg">
                        <option value="0">Select an Options</option>
                        <option value="1">BSC</option>
                        <option value="2">MSc</option>
                        <option value="3">PHD</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="file"
                        className="td_form_field td_mb_40 td_medium td_white_bg"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label className="td_fs_18 td_heading_color td_mb_16 td_semibold">
                        Agreements
                      </label>
                      <div className="td_custom_checkbox td_mb_40">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                          A condition that must be fulfilled before a party’s
                          promise becomes enforceable. For example, a buyer
                          might agree to purchase a house only if they secure
                          Conditional agreements are contracts or arrangements
                          that depend on certain conditions or events happening
                          before they become effective or enforceable. Here are
                          some key points about conditional agreements:
                        </label>
                      </div>
                    </div>
                    <div className="td_form_card_btn_group_1">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium td_fs_18"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>Submit Now</span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="td_btn td_style_1 td_radius_10 td_medium td_fs_18"
                      >
                        <span className="td_btn_in td_heading_color td_white_bg">
                          <span>Cancel</span>
                        </span>
                      </button>
                    </div>
                  </div>
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
