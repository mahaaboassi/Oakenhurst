import React from "react";
import { Link } from "react-router-dom";

import teamMember1 from "../../assets/img/home_8/team_member_1.jpg";
import teamMember2 from "../../assets/img/home_8/team_member_2.jpg";
import teamMember3 from "../../assets/img/home_8/team_member_3.jpg";
import teamMember4 from "../../assets/img/home_8/team_member_4.jpg";

export const TeamSeven = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Lucas Johans",
      role: "Chef of Nagad",
      image: teamMember1,
      delay: "0.25s",
    },
    {
      id: 2,
      name: "Leslie Alexander",
      role: "Chef of United",
      image: teamMember2,
      delay: "0.3s",
    },
    {
      id: 3,
      name: "Darrell Steward",
      role: "Chief Chef of Biman",
      image: teamMember3,
      delay: "0.35s",
    },
    {
      id: 4,
      name: "Leslie Alexander",
      role: "Asst. Chef of Avac",
      image: teamMember4,
      delay: "0.4s",
    },
  ];

  return (
    <section className="">
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            team members
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
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-xl-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={member.delay}
            >
              <div className="td_team td_style_1 td_type_1 text-center position-relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-100 td_radius_10"
                />
                <div className="td_team_info td_white_bg">
                  <h3 className="td_team_member_title td_fs_18 td_semibold mb-0">
                    {member.name}
                  </h3>
                  <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_7 td_heading_color">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="td_height_60 td_height_lg_40" />
        <div
          className="text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <Link
            to="/team-members"
            className="td_btn td_style_1 td_radius_10 td_medium"
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
