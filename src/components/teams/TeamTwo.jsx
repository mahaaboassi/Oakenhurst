import React from "react";
import { Link } from "react-router-dom";

import teamMember1 from "../../assets/img/home_3/team_member_1.jpg";
import teamMember2 from "../../assets/img/home_3/team_member_2.jpg";
import teamMember3 from "../../assets/img/home_3/team_member_3.jpg";
import teamMember4 from "../../assets/img/home_3/team_member_4.jpg";
import userIcon from "../../assets/img/icons/user_4.svg";
import computerIcon from "../../assets/img/icons/computer.svg";

export const TeamTwo = () => {
  const teamMembers = [
    {
      image: teamMember1,
      name: "Richard Devid",
      designation: "Seo Specialist",
      students: 20,
      courses: 2,
    },
    {
      image: teamMember2,
      name: "Yohana Alexa",
      designation: "Analysis Expert",
      students: 20,
      courses: 2,
    },
    {
      image: teamMember3,
      name: "Oshana Alexa",
      designation: "Asst. Professor",
      students: 20,
      courses: 2,
    },
    {
      image: teamMember4,
      name: "Alexandra Alex",
      designation: "Math Professor",
      students: 20,
      courses: 2,
    },
  ];

  return (
    <section className="td_gray_bg_4">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_pr_50">
              <div className="td_section_heading td_style_1">
                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                  Our Expert Instructor
                </p>
                <h2 className="td_section_title td_fs_48 td_mb_20">
                  We are Always Best Course For your Learning
                </h2>
                <p className="td_section_subtitle td_fs_18 td_mb_43">
                  Far far away, behind the word mountains, far from the
                  Consonantia, there live the blind texts. Separated they marks
                  grove right at the coast of the language ocean
                  <br />
                  <br />
                  There live the blind texts. Separated they marks. Far far
                  away, behind the word mountains, far from the Consonantia,
                </p>
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
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="row td_gap_y_24 td_row_gap_30">
              {teamMembers.map((member, index) => (
                <div className="col-md-6" key={index}>
                  <div className="td_team td_style_2 text-center position-relative td_radius_10">
                    <div className="td_team_in">
                      <img
                        src={member.image}
                        alt="Team member"
                        className="w-100 td_radius_10"
                      />
                      <div className="td_team_info">
                        <div className="td_team_info_in">
                          <h3 className="td_team_member_title td_fs_16 td_semibold td_white_color mb-0">
                            {member.name}
                          </h3>
                          <p className="td_team_member_designation mb-0 td_fs_14 td_white_color td_opacity_9">
                            {member.designation}
                          </p>
                          <ul className="td_team_member_meta_list td_mp_0">
                            <li>
                              <img src={userIcon} alt="" />
                              <span className="td_white_color td_opacity_7 td_fs_14">
                                {member.students} Students
                              </span>
                            </li>
                            <li>
                              <img src={computerIcon} alt="" />
                              <span className="td_white_color td_opacity_7 td_fs_14">
                                {member.courses} Courses
                              </span>
                            </li>
                          </ul>
                        </div>
                        <svg
                          width="260"
                          height="107"
                          viewBox="0 0 260 107"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="your-class-name"
                        >
                          <path
                            d="M0 35.3851C0 30.6836 3.27505 26.617 7.8685 25.6149L123.221 0.449038C124.579 0.152929 125.983 0.142865 127.344 0.419486L251.991 25.7468C256.651 26.6937 260 30.7913 260 35.5465V97C260 102.523 255.523 107 250 107H10C4.47716 107 0 102.523 0 97V35.3851Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="td_team_shape_1" />
                    <div className="td_team_shape_2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
