import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import teamShape1 from "../../assets/img/home_2/team_shape_1.svg";
import teamShape2 from "../../assets/img/home_2/team_shape_2.svg";
import teamMember1 from "../../assets/img/home_2/team_member_1.jpg";
import teamMember2 from "../../assets/img/home_2/team_member_2.jpg";
import teamMember3 from "../../assets/img/home_2/team_member_3.jpg";
import teamMember4 from "../../assets/img/home_2/team_member_4.jpg";

export const TeamOne = () => {
  useHobble();

  return (
    <section className="td_shape_section_8 td_hobble">
      <div className="td_shape_position_1 position-absolute td_hover_layer_3">
        <img src={teamShape1} alt="Team shape 1" />
      </div>
      <div className="td_shape_position_2 position-absolute td_hover_layer_3">
        <img src={teamShape2} alt="Team shape 2" />
      </div>

      <div className="td_height_112 td_height_lg_75" />

      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            <i></i>
            team members
            <i></i>
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Our Expert Instructor
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0">
            Far far away, behind the word mountains, far from the Consonantia,
            there <br />
            live the blind texts. Separated they marks grove right
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={teamMember1}
                alt="Lucas Johans"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Mr. Lucas Johans
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  Head of Marketing
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={teamMember2}
                alt="Leslie Alexander"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Leslie Alexander
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  Online Executive
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={teamMember3}
                alt="Darrell Steward"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Darrell Steward
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  Seo Expert
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_team td_style_1 text-center position-relative">
              <img
                src={teamMember4}
                alt="Leslie Alexander"
                className="w-100 td_radius_10"
              />
              <div className="td_team_info td_white_bg">
                <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                  Leslie Alexander
                </h3>
                <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                  Online Executive
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_60 td_height_lg_40" />

        <div
          className="text-center wow zoomIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <Link
            to="/team-members"
            className="td_btn td_style_1 td_radius_30 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>See All Instructors</span>
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

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
