import React from "react";
import { Link } from "react-router-dom";

import event1 from "../../assets/img/home_1/event_thumb_1.jpg";
import event5 from "../../assets/img/home_1/event_thumb_5.jpg";
import event8 from "../../assets/img/home_1/event_thumb_8.jpg";

const eventsList = [
  {
    src: event1,
    location: "Tsc Center, Northern Asia",
    date: "Jan 23, 2024",
    time: "10.00 am - 11.30 am",
    title: "Innovate 2024: BBA Admission Conference",
    description:
      "Education is a dynamic and evolving field that plays a crucial role in shaping individuals and societies. While there are significant challenges,",
  },
  {
    src: event5,
    location: "Tsc Center, Northern Asia",
    date: "Jan 15, 2024",
    time: "10.00 am - 11.30 am",
    title: "Innovate 2024: BBA Admission Conference",
    description:
      "Education is a dynamic and evolving field that plays a crucial role in shaping individuals and societies. While there are significant challenges,",
  },
  {
    src: event8,
    location: "Tsc Center, Northern Asia",
    date: "Jan 10, 2024",
    time: "10.00 am - 11.30 am",
    title: "Education, Research and Innovation (ICERI 2024)",
    description:
      "Education is a dynamic and evolving field that plays a crucial role in shaping individuals and societies. While there are significant challenges,",
  },
  {
    src: event1,
    location: "Tsc Center, Northern Asia",
    date: "Jan 05, 2024",
    time: "10.00 am - 11.30 am",
    title: "Innovate 2024: BBA Admission Conference",
    description:
      "Education is a dynamic and evolving field that plays a crucial role in shaping individuals and societies. While there are significant challenges,",
  },
  {
    src: event5,
    location: "Tsc Center, Northern Asia",
    date: "Jan 01, 2024",
    time: "10.00 am - 11.30 am",
    title: "Innovate 2024: BBA Admission Conference",
    description:
      "Education is a dynamic and evolving field that plays a crucial role in shaping individuals and societies. While there are significant challenges,",
  },
  {
    src: event8,
    location: "Tsc Center, Northern Asia",
    date: "Dec 28, 2023",
    time: "10.00 am - 11.30 am",
    title: "Innovate 2024: BBA Admission Conference",
    description:
      "Education is a dynamic and evolving field that plays a crucial role in shaping individuals and societies. While there are significant challenges,",
  },
];

export const EventAll = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_30">
          {eventsList.map((event, index) => (
            <div key={index} className="col-lg-6">
              <Item {...event} />
            </div>
          ))}
        </div>

        <div className="td_height_60 td_height_lg_40" />
        <div className="text-center">
          <Link
            to="/event-details"
            className="td_btn td_style_1 td_radius_10 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Load More</span>
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
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const Item = ({ src, location, date, time, title, description }) => {
  return (
    <div className="td_card td_style_1 td_radius_5">
      <Link to="/event-details" className="td_card_thumb td_mb_30 d-block">
        <img src={src} alt={title} />
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span className="td_card_location td_medium td_white_color td_fs_18">
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0004 0.5C3.86669 0.5 0.554996 3.86526 0.500458 7.98242C0.48345 9.42271 0.942105 10.7046 1.56397 11.8232C2.76977 13.9928 4.04435 16.8182 5.32856 19.4639C5.9286 20.7002 6.89863 21.5052 8.0004 21.5C9.10217 21.4948 10.0665 20.6836 10.6575 19.4404C11.9197 16.7856 13.1685 13.9496 14.4223 11.835C15.1136 10.6691 15.4653 9.3606 15.4974 8.01758C15.5966 3.86772 12.1342 0.5 8.0004 0.5ZM8.0004 2.00586C11.3235 2.00586 14.0821 4.6775 14.0033 7.97363C13.9749 9.08002 13.6796 10.1416 13.1273 11.0732C11.7992 13.3133 10.5449 16.1706 9.2954 18.7988C8.85773 19.7191 8.35538 19.9924 7.98864 19.9941C7.62183 19.9959 7.12572 19.7246 6.68204 18.8105C5.41121 16.1923 4.12648 13.3534 2.87056 11.0938C2.32971 10.121 1.9798 9.11653 1.9946 8.00586C2.03995 4.67555 4.67723 2.00586 8.0004 2.00586ZM8.0004 4.25C5.94024 4.25 4.25034 5.94266 4.25034 8.00586C4.25034 10.0691 5.94024 11.75 8.0004 11.75C10.0605 11.75 11.7503 10.0691 11.7503 8.00586C11.7503 5.94266 10.0605 4.25 8.0004 4.25ZM8.0004 5.74414C9.25065 5.74414 10.2446 6.75372 10.2446 8.00586C10.2446 9.258 9.25065 10.2559 8.0004 10.2559C6.7501 10.2559 5.75331 9.258 5.75331 8.00586C5.75331 6.75372 6.7501 5.74414 8.0004 5.74414Z"
              fill="currentColor"
            />
          </svg>
          {location}
        </span>
      </Link>

      <div className="td_card_info">
        <div className="td_card_info_in">
          <div className="td_mb_30">
            <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
              <li>
                <svg
                  className="td_accent_color"
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3308 11.7869H19.0049C19.3833 11.7869 19.6913 11.479 19.6913 11.1005V9.42642C19.6913 9.04795 19.3833 8.74003 19.0049 8.74003H17.3308C16.9523 8.74003 16.6444 9.04795 16.6444 9.42642V11.1005C16.6444 11.479 16.9523 11.7869 17.3308 11.7869ZM17.3475 9.44316H18.9881V11.0838H17.3475V9.44316Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{date}</span>
              </li>
              <li>
                <svg
                  className="td_accent_color"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M12 24C18.616 24 24 18.616 24 12C24 5.38401 18.6161 0 12 0C5.38394 0 0 5.38401 0 12C0 18.616 5.38401 24 12 24ZM12 1.59997C17.736 1.59997 22.4 6.26396 22.4 12C22.4 17.736 17.736 22.4 12 22.4C6.26396 22.4 1.59997 17.736 1.59997 12C1.59997 6.26396 6.26402 1.59997 12 1.59997Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4992 15.8209C15.6472 15.9408 15.8232 15.9969 15.9992 15.9969C16.2352 15.9969 16.4672 15.8929 16.6232 15.6969C16.8992 15.3529 16.8431 14.8489 16.4992 14.5729L12.7992 11.6129V5.59686C12.7992 5.15686 12.4392 4.79688 11.9992 4.79688C11.5592 4.79688 11.1992 5.15686 11.1992 5.59686V11.9969C11.1992 12.2409 11.3112 12.4689 11.4992 12.6209L15.4992 15.8209Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                <span>{time}</span>
              </li>
            </ul>
          </div>

          <h2 className="td_card_title td_fs_32 td_semibold td_mb_20">
            <Link to="/event-details">{title}</Link>
          </h2>

          <p className="td_mb_30 td_fs_18">{description}</p>

          <Link
            to="/event-details"
            className="td_btn td_style_1 td_radius_10 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Learn More</span>
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
  );
};
