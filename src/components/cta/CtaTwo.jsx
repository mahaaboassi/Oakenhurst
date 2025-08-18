import React from "react";
import { Link } from "react-router-dom";

import ctaImg from "../../assets/img/home_5/cta_img.png";

export const CtaTwo = () => {
  return (
    <section className="td_cta td_style_3 td_accent_bg">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_cta_img">
              <img src={ctaImg} alt="CTA" />
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_cta_in">
              <h2 className="td_fs_48 td_white_color td_mb_25">
                Easy to Learn Spoken, Reading & Get Access All Free File
              </h2>
              <p className="td_mb_30 td_white_color td_opacity_7 td_fs_18">
                Far far away, behind the word mountains, far from the Conson
                antia, there live the blind texts. Separated they marks
              </p>
              <Link
                to="/courses-grid-view"
                className="td_btn td_style_1 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_accent_color td_white_bg">
                  <span>Download Free File</span>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
