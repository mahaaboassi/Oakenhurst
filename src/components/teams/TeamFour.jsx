import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SlickSlider } from "../slick_slider/SlickSlider";

import teamMember1 from "../../assets/img/home_5/team_member_1.jpg";
import teamMember2 from "../../assets/img/home_5/team_member_2.jpg";
import teamMember3 from "../../assets/img/home_5/team_member_3.jpg";
import teamMember4 from "../../assets/img/home_5/team_member_4.jpg";

export const TeamFour = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Chen",
      designation: "English Instructor",
      image: teamMember1,
    },
    {
      id: 2,
      name: "Arlene McCoy",
      designation: "Language Instructor",
      image: teamMember2,
    },
    {
      id: 3,
      name: "Theresa Webb",
      designation: "Senior Korine Instructor",
      image: teamMember3,
    },
    {
      id: 4,
      name: "Floyd Miles",
      designation: "Spanish Instructor",
      image: teamMember4,
    },
    {
      id: 5,
      name: "Arlene McCoy",
      designation: "Language Instructor",
      image: teamMember2,
    },
  ];

  let sliderRef = useRef(null);
  const next = () => sliderRef.slickNext();
  const previous = () => sliderRef.slickPrev();

  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="td_slider td_style_1 td_slider_gap_24">
          <div
            className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading_left">
              <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                Advisor
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Meet our expert <br />
                Instructors Team Members
              </h2>
            </div>

            <div className="td_section_heading_right">
              <div className="td_slider_arrows td_style_1 td_type_1">
                <div
                  className="td_left_arrow td_accent_bg td_radius_10 td_center td_white_color"
                  role="button"
                  onClick={previous}
                >
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.00194 6.00024L17.002 6.00024"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.00191 1C6.00191 1 1.00196 4.68244 1.00195 6.00004C1.00194 7.31763 6.00195 11 6.00195 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div
                  className="td_right_arrow td_accent_bg td_radius_10 td_center td_white_color"
                  role="button"
                  onClick={next}
                >
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.002 5.99976L1.00195 5.99976"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.002 11C12.002 11 17.0019 7.31756 17.002 5.99996C17.002 4.68237 12.002 1 12.002 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="td_height_50 td_height_lg_50" />

          <div
            className="td_slider_container wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_slider_wrapper">
              <SlickSlider ref={(slider) => (sliderRef = slider)} {...settings}>
                {teamMembers.map((member) => (
                  <div className="td_slide" key={member.id}>
                    <div className="td_team td_style_4">
                      <Link
                        to="/team-member-details"
                        className="td_team_thumb d-block td_radius_10 td_mb_16 overflow-hidden"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-100"
                        />
                      </Link>

                      <div className="td_team_info">
                        <div className="td_team_info_in">
                          <h3 className="td_team_member_title td_fs_20 td_semibold mb-0">
                            <Link to="/team-member-details">{member.name}</Link>
                          </h3>

                          <p className="td_team_member_designation mb-0 td_fs_14 td_opacity_6 td_heading_color">
                            {member.designation}
                          </p>
                        </div>

                        <div className="td_team_social_list td_fs_14 td_accent_color">
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
                    </div>
                  </div>
                ))}
              </SlickSlider>
            </div>
          </div>

          {/* <!-- <div className="td_pagination td_style_1" /> --> */}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
