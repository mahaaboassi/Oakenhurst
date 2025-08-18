import React from "react";
import { Link } from "react-router-dom";

import shape from "../../assets/img/home_4/team_shape.png";
import teamMember1 from "../../assets/img/home_2/team_member_1.jpg";
import teamMember2 from "../../assets/img/home_2/team_member_2.jpg";
import teamMember3 from "../../assets/img/home_2/team_member_3.jpg";
import teamMember4 from "../../assets/img/home_2/team_member_4.jpg";
import teamMember5 from "../../assets/img/home_2/team_member_5.jpg";
import teamMember6 from "../../assets/img/home_2/team_member_6.jpg";
import teamMember3_2 from "../../assets/img/home_3/team_member_2.jpg";
import teamMember3_3 from "../../assets/img/home_3/team_member_3.jpg";
import teamMember3_4 from "../../assets/img/home_3/team_member_4.jpg";

const teamData = [
  {
    src: teamMember5,
    title: "Oshana Alexa",
    designation: "English Teacher",
  },
  {
    src: teamMember2,
    title: "Yohana Alexa",
    designation: "Math Teacher",
  },
  {
    src: teamMember6,
    title: "Mr. Lucas Johans",
    designation: "Physics Teacher",
  },
  {
    src: teamMember4,
    title: "Mary D Kuaesa",
    designation: "Biology Teacher",
  },
  {
    src: teamMember3,
    title: "Oshana Alexa",
    designation: "Chemistry Teacher",
  },
  {
    src: teamMember1,
    title: "Yohana Alexa",
    designation: "English Teacher",
  },
  {
    src: teamMember3_4,
    title: "Mr. Lucas Johans",
    designation: "Math Teacher",
  },
  {
    src: teamMember3_3,
    title: "Mary D Kuaesa",
    designation: "Language Teacher",
  },
  {
    src: teamMember3_2,
    title: "Oshana Alexa",
    designation: "Biology Teacher",
  },
  {
    src: teamMember2,
    title: "Yohana Alexa",
    designation: "Math Teacher",
  },
  {
    src: teamMember1,
    title: "Yohana Alexa",
    designation: "English Teacher",
  },
  {
    src: teamMember4,
    title: "Mary D Kuaesa",
    designation: "Biology Teacher",
  },
];

export const TeamAll = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_30">
          {teamData.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <Item
                src={member.src}
                title={member.title}
                designation={member.designation}
              />
            </div>
          ))}
        </div>

        <div className="td_height_60 td_height_lg_40" />

        {/* pagination */}
        <ul className="td_page_pagination td_mp_0 td_fs_18 td_semibold">
          <li>
            <button className="td_page_pagination_item td_center" type="button">
              <i className="fa-solid fa-angles-left"></i>
            </button>
          </li>
          <li>
            <Link className="td_page_pagination_item td_center active" to="#">
              1
            </Link>
          </li>
          <li>
            <Link className="td_page_pagination_item td_center" to="#">
              2
            </Link>
          </li>
          <li>
            <Link className="td_page_pagination_item td_center" to="#">
              3
            </Link>
          </li>
          <li>
            <Link className="td_page_pagination_item td_center" to="#">
              4
            </Link>
          </li>
          <li>
            <button className="td_page_pagination_item td_center" type="button">
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const Item = ({ src, title, designation }) => {
  return (
    <div className="td_team td_style_3 text-center position-relative">
      <div className="td_team_thumb_wrap td_mb_20">
        <div className="td_team_thumb">
          <img src={src} alt="" className="w-100 td_radius_10" />
        </div>
        <img src={shape} className="td_team_thumb_shape" alt="" />
      </div>

      <div className="td_team_info td_white_bg">
        <h3 className="td_team_member_title td_fs_24 td_semibold mb-0">
          {title}
        </h3>
        <p className="td_team_member_designation mb-0 td_fs_18 td_opacity_7 td_heading_color">
          {designation}
        </p>
      </div>
    </div>
  );
};
