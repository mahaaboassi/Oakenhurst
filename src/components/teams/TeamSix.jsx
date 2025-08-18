import React from "react";
import { Link } from "react-router-dom";
import teamMember1 from "../../assets/img/home_7/team_member_1.jpg";
import teamMember2 from "../../assets/img/home_7/team_member_2.jpg";
import teamMember3 from "../../assets/img/home_7/team_member_3.jpg";
import teamMember4 from "../../assets/img/home_7/team_member_4.jpg";

export const TeamSix = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hafiz Din Mohammed Islam",
      designation: "Teacher",
      image: teamMember1,
      delay: "0.3s",
    },
    {
      id: 2,
      name: "Hafiza Dina Asmaul Islam",
      designation: "Teacher",
      image: teamMember2,
      delay: "0.35s",
    },
    {
      id: 3,
      name: "Alfaqul Mamunur Islam",
      designation: "Teacher",
      image: teamMember3,
      delay: "0.4s",
    },
    {
      id: 4,
      name: "Hafiza Rehnuma Annesa",
      designation: "Teacher",
      image: teamMember4,
      delay: "0.45s",
    },
  ];

  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
            Expert Instructor
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Meet our International Quran <br />
            Hafez Instructor
          </h2>
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
              <div className="td_team td_style_5 td_type_1 text-center">
                <div className="td_team_thumb d-block td_mb_16">
                  <img src={member.image} alt={member.name} className="w-100" />
                  <div className="td_team_social_list td_fs_14 td_white_color">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
                <div className="td_team_info">
                  <div className="td_team_info_in">
                    <h3 className="td_team_member_title td_fs_20 mb-0">
                      <Link to="/team-member-details">{member.name}</Link>
                    </h3>
                    <p className="td_team_member_designation mb-0 td_fs_16 td_opacity_6 td_heading_color">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="td_height_60 td_height_lg_40" />
        <div className="text-center wow fadeInUp">
          <Link
            to="/team-members"
            className="td_btn td_style_1 td_type_2 td_radius_30 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>View All</span>
              <span className="td_btn_icon td_center td_accent_bg td_white_color">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                    stroke="white"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
