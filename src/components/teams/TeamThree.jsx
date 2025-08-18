import React from "react";
import { Link } from "react-router-dom";

import teamMember5 from "../../assets/img/home_2/team_member_5.jpg";
import teamMember2 from "../../assets/img/home_2/team_member_2.jpg";
import teamMember6 from "../../assets/img/home_2/team_member_6.jpg";
import teamMember4 from "../../assets/img/home_2/team_member_4.jpg";
import teamShape from "../../assets/img/home_4/team_shape.png";

export const TeamThree = () => {
  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            WE CHANGE YOUR LIFE & WORLD
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            {`We’re Dedicated To Excellent`} <br />
            Service And Kids Care
          </h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        <div className="row td_gap_y_24">
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_team td_style_3 text-center position-relative">
              <div className="td_team_thumb_wrap td_mb_20">
                <div className="td_team_thumb">
                  <img
                    src={teamMember5}
                    alt="Team member"
                    className="w-100 td_radius_10"
                  />
                </div>
                <img
                  className="td_team_thumb_shape"
                  src={teamShape}
                  alt="Shape"
                />
              </div>
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_24 td_semibold mb-0">
                  Oshana Alexa
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_18 td_opacity_7 td_heading_color">
                  English teacher
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_team td_style_3 text-center position-relative">
              <div className="td_team_thumb_wrap td_mb_20">
                <div className="td_team_thumb">
                  <img
                    src={teamMember2}
                    alt="Team member"
                    className="w-100 td_radius_10"
                  />
                </div>
                <img
                  className="td_team_thumb_shape"
                  src={teamShape}
                  alt="Shape"
                />
              </div>
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_24 td_semibold mb-0">
                  Yohana Alexa
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_18 td_opacity_7 td_heading_color">
                  English teacher
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_3 text-center position-relative">
              <div className="td_team_thumb_wrap td_mb_20">
                <div className="td_team_thumb">
                  <img
                    src={teamMember6}
                    alt="Team member"
                    className="w-100 td_radius_10"
                  />
                </div>
                <img
                  className="td_team_thumb_shape"
                  src={teamShape}
                  alt="Shape"
                />
              </div>
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_24 td_semibold mb-0">
                  Mr. Lucas Johans
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_18 td_opacity_7 td_heading_color">
                  English teacher
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.45s"
          >
            <div className="td_team td_style_3 text-center position-relative">
              <div className="td_team_thumb_wrap td_mb_20">
                <div className="td_team_thumb">
                  <img
                    src={teamMember4}
                    alt="Team member"
                    className="w-100 td_radius_10"
                  />
                </div>
                <img
                  className="td_team_thumb_shape"
                  src={teamShape}
                  alt="Shape"
                />
              </div>
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_24 td_semibold mb-0">
                  Mary D Kuaesa
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_18 td_opacity_7 td_heading_color">
                  English teacher
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        <div className="td_team_3_footer text_center wow fadeInUp">
          <b className="td_fs_18 td_normal td_fs_18 td_heading_color">
            Our Valuable Expert Teachers Team
          </b>
          <Link
            to="/team-members"
            className="td_btn td_style_1 td_radius_30 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>See All Team</span>
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
                ></path>
                <path
                  d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                  stroke="currentColor"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
