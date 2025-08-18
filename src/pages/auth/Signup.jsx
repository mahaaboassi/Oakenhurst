import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";

import loginImg from "../../assets/img/others/login.jpg";

export const Signup = () => {
  return (
    <Layout breadcrumbTitle={"Signup"} breadcrumbSubtitle={"Signup"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20">SIGN UP</h2>
                  <hr />
                  <div className="td_height_30 td_height_lg_30" />
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Full Name *"
                  />
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Phone *"
                  />
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Email *"
                  />
                  <input
                    type="password"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Password *"
                  />
                  <div className="td_form_card_bottom td_mb_25">
                    <button
                      type="submit"
                      className="td_btn td_style_1 td_radius_10 td_medium"
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        <span>Sign Up</span>
                      </span>
                    </button>
                    <p className="td_fs_20 mb-0 td_medium td_heading_color">
                      or sign up with
                    </p>
                    <div className="td_form_social td_fs_20">
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-apple"></i>
                      </a>
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-google"></i>
                      </a>
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                  <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0">
                    Already Have an Account? <Link to="/signin">Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="td_sign_thumb">
                <img
                  src={loginImg}
                  alt="Login"
                  className="w-100 td_radius_10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
};
