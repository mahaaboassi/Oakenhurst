import React from "react";
import { useTabs } from "../../lib/hooks/useTabs";
import { Link } from "react-router-dom";

import whyChooseUsThumb from "../../assets/img/home_6/why_chose_us_thumb.jpg";

export const WhyChooseTwo = () => {
  useTabs();

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-xl-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_pr_50">
              <img src={whyChooseUsThumb} alt="Why Choose Us" />
            </div>
          </div>
          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading td_style_1 td_mb_30">
              <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
                Why Choose Us
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Learning Quran is Obligatory on every Muslim Ummah.
              </h2>
            </div>
            <div className="td_tabs td_style_1 td_mb_40">
              <div className="td_mb_40">
                <ul className="td_tab_links td_style_4 td_mp_0 td_semibold td_accent_color">
                  <li className="active">
                    <a href="#td_tab_1">Work Process</a>
                  </li>
                  <li>
                    <a href="#td_tab_2">Speciality</a>
                  </li>
                  <li>
                    <a href="#td_tab_3">Self Develop</a>
                  </li>
                  <li>
                    <a href="#td_tab_4">Employment</a>
                  </li>
                </ul>
              </div>
              <div className="td_tab_body">
                <div className="td_tab active" id="td_tab_1">
                  <p className="td_fs_18 mb-0 td_heading_color">
                    Righteous indignation and dislike men who are so beguiled
                    and demoralized by the charms of pleasure of the moment, so
                    blinded by desire, that they cannot foresee the pain and
                    trouble. <br />
                    <br />
                    Equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through
                    shrinking from toil and pain. These cases are perfectly
                    simple and easy to distinguish.
                  </p>
                </div>
                <div className="td_tab" id="td_tab_2">
                  <p className="td_fs_18 mb-0 td_heading_color">
                    Equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through
                    shrinking from toil and pain. These cases are perfectly
                    simple and easy to distinguish. <br />
                    <br />
                    Righteous indignation and dislike men who are so beguiled
                    and demoralized by the charms of pleasure of the moment, so
                    blinded by desire, that they cannot foresee the pain and
                    trouble.
                  </p>
                </div>
                <div className="td_tab" id="td_tab_3">
                  <p className="td_fs_18 mb-0 td_heading_color">
                    Far far away, behind the word mountains, far from the
                    Consonantia, there live the blind texts. Separated they
                    marks grove right at the coast of the Semantics a large
                    language ocean. <br />
                    <br />
                    Equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through
                    shrinking from toil and pain. These cases are perfectly
                    simple and easy to distinguish.
                  </p>
                </div>
                <div className="td_tab" id="td_tab_4">
                  <p className="td_fs_18 mb-0 td_heading_color">
                    These cases are perfectly simple and easy to distinguish.
                    Righteous indignation and dislike men who are so beguiled
                    and demoralized by the charms of pleasure of the moment, so
                    blinded by desire, that they cannot foresee the pain and
                    trouble. <br />
                    <br />
                    Equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through
                    shrinking from toil and pain.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_medium td_with_shadow_2"
            >
              <span className="td_btn_in td_white_color td_accent_bg">
                <span>Start Learning</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
