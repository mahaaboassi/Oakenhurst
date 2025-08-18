import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

import eventThumb1 from "../../assets/img/home_1/event_thumb_1.jpg";
import eventThumb5 from "../../assets/img/home_1/event_thumb_5.jpg";

export const EventDetailsContent = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_50">
          <div className="col-lg-8">
            <div className="td_card td_style_1 td_type_3">
              <img
                src={eventThumb1}
                alt="Event thumbnail"
                className="w-100 td_radius_10 td_mb_30"
              />
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
                            d="M17.3308 11.7869H19.0049C19.3833 11.7869 19.6913 11.479 19.6913 11.1005V9.42642C19.6913 9.04795 19.3833 8.74003 19.0049 8.74003H17.3308C16.9523 8.74003 16.6444 9.04795 16.6444 9.42642V11.1005C16.6444 11.479 16.9523 11.7869 17.3308 11.7869ZM17.3475 9.44316H18.9881V11.0838H17.3475V9.44316ZM17.3308 16.24H19.0049C19.3833 16.24 19.6913 15.9321 19.6913 15.5536V13.8795C19.6913 13.5011 19.3833 13.1932 19.0049 13.1932H17.3308C16.9523 13.1932 16.6444 13.5011 16.6444 13.8795V15.5536C16.6444 15.9321 16.9523 16.24 17.3308 16.24ZM17.3475 13.8963H18.9881V15.5369H17.3475V13.8963ZM12.5535 11.7869H14.2276C14.606 11.7869 14.914 11.479 14.914 11.1005V9.42642C14.914 9.04795 14.606 8.74003 14.2276 8.74003H12.5535C12.175 8.74003 11.8671 9.04795 11.8671 9.42642V11.1005C11.8671 11.479 12.175 11.7869 12.5535 11.7869ZM12.5702 9.44316H14.2108V11.0838H12.5702V9.44316ZM4.67294 17.4375H2.99884C2.62037 17.4375 2.31245 17.7454 2.31245 18.1239V19.798C2.31245 20.1765 2.62037 20.4844 2.99884 20.4844H4.67294C5.05141 20.4844 5.35933 20.1765 5.35933 19.798V18.1239C5.35933 17.7454 5.05141 17.4375 4.67294 17.4375ZM4.6562 19.7812H3.01558V18.1406H4.6562V19.7812ZM4.67294 8.74003H2.99884C2.62037 8.74003 2.31245 9.04795 2.31245 9.42642V11.1005C2.31245 11.479 2.62037 11.7869 2.99884 11.7869H4.67294C5.05141 11.7869 5.35933 11.479 5.35933 11.1005V9.42642C5.35933 9.04791 5.05141 8.74003 4.67294 8.74003ZM4.6562 11.0838H3.01558V9.44316H4.6562V11.0838ZM12.5535 16.1356H14.2276C14.606 16.1356 14.914 15.8277 14.914 15.4493V13.7752C14.914 13.3967 14.606 13.0888 14.2276 13.0888H12.5535C12.175 13.0888 11.8671 13.3967 11.8671 13.7752V15.4493C11.8671 15.8277 12.175 16.1356 12.5535 16.1356ZM12.5702 13.7919H14.2108V15.4325H12.5702V13.7919ZM20.0404 1.60659H18.5373V1.06908C18.5373 0.479578 18.0578 0 17.4683 0H17.3068C16.7174 0 16.2378 0.479578 16.2378 1.06908V1.60659H5.76592V1.06908C5.76592 0.479578 5.28634 0 4.69684 0H4.53541C3.94591 0 3.46633 0.479578 3.46633 1.06908V1.60659H1.96328C0.992734 1.60659 0.203125 2.3962 0.203125 3.36675V22.2422C0.203125 23.2115 0.991656 24 1.96094 24H20.0429C21.0122 24 21.8007 23.2115 21.8007 22.2422V3.36675C21.8006 2.3962 21.011 1.60659 20.0404 1.60659ZM16.9409 1.06908C16.9409 0.867281 17.1051 0.703125 17.3069 0.703125H17.4683C17.6701 0.703125 17.8343 0.867281 17.8343 1.06908V1.60659H16.9409V1.06908ZM4.1695 1.06908C4.1695 0.867281 4.33366 0.703125 4.53545 0.703125H4.69689C4.89869 0.703125 5.06284 0.867281 5.06284 1.06908V1.60659H4.16955V1.06908H4.1695ZM21.0975 22.2422C21.0975 22.8238 20.6244 23.2969 20.0428 23.2969H1.96089C1.37931 23.2969 0.906203 22.8238 0.906203 22.2422V22.24C1.20077 22.4619 1.56691 22.5938 1.96328 22.5938H16.2172C16.6873 22.5938 17.1294 22.4107 17.4618 22.0782L21.0975 18.4425V22.2422ZM17.1031 21.4425C17.1306 21.3288 17.1456 21.2101 17.1456 21.088V18.7413C17.1456 18.2988 17.5057 17.9387 17.9482 17.9387H20.2949C20.417 17.9387 20.5357 17.9237 20.6494 17.8962L17.1031 21.4425ZM21.0975 6.63066H6.11748C5.92333 6.63066 5.76592 6.78806 5.76592 6.98222C5.76592 7.17637 5.92333 7.33378 6.11748 7.33378H21.0975V16.4331C21.0975 16.8756 20.7375 17.2357 20.2949 17.2357H17.9482C17.118 17.2357 16.4425 17.9111 16.4425 18.7413V21.0881C16.4425 21.5306 16.0825 21.8907 15.64 21.8907H1.96328C1.38044 21.8907 0.90625 21.4165 0.90625 20.8336V7.33378H4.71123C4.90539 7.33378 5.0628 7.17637 5.0628 6.98222C5.0628 6.78806 4.90539 6.63066 4.71123 6.63066H0.906203V3.36675C0.906203 2.78391 1.38039 2.30972 1.96323 2.30972H3.46633V3.34341C3.46633 3.93291 3.94591 4.41248 4.53541 4.41248C4.72956 4.41248 4.88697 4.25508 4.88697 4.06092C4.88697 3.86677 4.72956 3.70936 4.53541 3.70936C4.33361 3.70936 4.16945 3.5452 4.16945 3.34341V2.30972H16.2378V3.34341C16.2378 3.93291 16.7174 4.41248 17.3069 4.41248C17.501 4.41248 17.6584 4.25508 17.6584 4.06092C17.6584 3.86677 17.501 3.70936 17.3069 3.70936C17.1051 3.70936 16.9409 3.5452 16.9409 3.34341V2.30972H20.0405C20.6233 2.30972 21.0975 2.78391 21.0975 3.36675V6.63066ZM4.67294 13.0888H2.99884C2.62037 13.0888 2.31245 13.3967 2.31245 13.7752V15.4493C2.31245 15.8277 2.62037 16.1356 2.99884 16.1356H4.67294C5.05141 16.1356 5.35933 15.8277 5.35933 15.4493V13.7752C5.35933 13.3966 5.05141 13.0888 4.67294 13.0888ZM4.6562 15.4325H3.01558V13.7919H4.6562V15.4325ZM7.77616 11.7869H9.45025C9.82872 11.7869 10.1366 11.479 10.1366 11.1005V9.42642C10.1366 9.04795 9.82872 8.74003 9.45025 8.74003H7.77616C7.39769 8.74003 7.08977 9.04795 7.08977 9.42642V11.1005C7.08977 11.479 7.39769 11.7869 7.77616 11.7869ZM7.79289 9.44316H9.43352V11.0838H7.79289V9.44316ZM12.5698 19.7812C12.5611 19.5948 12.4072 19.4464 12.2186 19.4464C12.0244 19.4464 11.867 19.6038 11.867 19.798C11.867 20.1765 12.175 20.4844 12.5534 20.4844H14.2275C14.606 20.4844 14.9139 20.1765 14.9139 19.798V18.1239C14.9139 17.7454 14.606 17.4375 14.2275 17.4375H12.5534C12.175 17.4375 11.867 17.7454 11.867 18.1239V18.6067C11.867 18.8009 12.0244 18.9583 12.2186 18.9583C12.4127 18.9583 12.5702 18.8009 12.5702 18.6067V18.1406H14.2108V19.7812H12.5698ZM7.77616 16.1356H9.45025C9.82872 16.1356 10.1366 15.8277 10.1366 15.4493V13.7752C10.1366 13.3967 9.82872 13.0888 9.45025 13.0888H7.77616C7.39769 13.0888 7.08977 13.3967 7.08977 13.7752V15.4493C7.08977 15.8277 7.39769 16.1356 7.77616 16.1356ZM7.79289 13.7919H9.43352V15.4325H7.79289V13.7919ZM7.77616 20.4844H9.45025C9.82872 20.4844 10.1366 20.1765 10.1366 19.798V18.1239C10.1366 17.7454 9.82872 17.4375 9.45025 17.4375H7.77616C7.39769 17.4375 7.08977 17.7454 7.08977 18.1239V19.798C7.08977 20.1765 7.39769 20.4844 7.77616 20.4844ZM7.79289 18.1406H9.43352V19.7812H7.79289V18.1406Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Jan 23 , 2024</span>
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
                          <defs>
                            <clipPath id="clip0">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>10.00 am - 11.30 am</span>
                      </li>
                    </ul>
                  </div>
                  <h2 className="td_card_title td_fs_38 td_mb_50">
                    {`Education, Research & Innovate (ICERI 2024)`}
                  </h2>
                  <h3 className="td_fs_32 td_mb_20">About The Event</h3>
                  <p className="td_mb_30 td_fs_18">
                    Eed a little help from our friends from time to time.
                    Although we offer the one-stop convenience of annery
                    integrated range of legal, financial services under one
                    roof, there are occasions when our clients areaneed specia.
                  </p>
                  <p className="td_mb_30 td_fs_18">
                    Eed a little help from our friends from time to time.
                    Although we offer the one-stop convenience of annery
                    integrated range of legal, financial services under one
                    roof, there are occasions.
                  </p>
                  <div className="td_mb_40">
                    <ul className="td_list td_style_2 td_type_2 td_fs_18 td_medium td_heading_color td_mp_0">
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        100% Better results
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
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Building a Bright Future Together
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
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Budget Friendly Education Theme
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
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Empowering Children Through Education
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
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Unlocking Potential Educations
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
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="currentColor"
                          ></circle>
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        Growing Genius Elementary School
                      </li>
                    </ul>
                  </div>
                  <h3 className="td_fs_32 td_mb_20">Event Locations</h3>
                  <div className="td_mb_40">
                    <ul className="td_card_meta td_type_2 td_mp_0 td_heading_color">
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5 1C8.98046 1 6.56411 1.96928 4.78252 3.69461C3.00094 5.41994 2.00005 7.75999 2.00005 10.2C1.99223 12.4895 2.87394 14.698 4.47004 16.387L11.0488 23.7987C11.1045 23.8618 11.1737 23.9125 11.2516 23.9473C11.3295 23.982 11.4142 24 11.5 24C11.5858 24 11.6705 23.982 11.7484 23.9473C11.8263 23.9125 11.8955 23.8618 11.9512 23.7987L18.53 16.387C20.1261 14.698 21.0078 12.4895 20.9999 10.2C20.9999 7.75999 19.9991 5.41994 18.2175 3.69461C16.4359 1.96928 14.0195 1 11.5 1ZM17.6275 15.6395L11.5 22.5452L5.37253 15.6452C4.28236 14.4935 3.56181 13.0595 3.29877 11.518C3.03574 9.97658 3.24157 8.3943 3.89118 6.96418C4.54079 5.53406 5.6061 4.31791 6.95717 3.46406C8.30824 2.61022 9.88669 2.15557 11.5 2.15557C13.1133 2.15557 14.6918 2.61022 16.0428 3.46406C17.3939 4.31791 18.4592 5.53406 19.1088 6.96418C19.7584 8.3943 19.9643 9.97658 19.7012 11.518C19.4382 13.0595 18.7176 14.4935 17.6275 15.6452V15.6395Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.5 6.17499C10.678 6.17499 9.87441 6.41105 9.19092 6.85332C8.50743 7.2956 7.97472 7.92421 7.66014 8.65968C7.34557 9.39516 7.26326 10.2044 7.42363 10.9852C7.584 11.766 7.97984 12.4832 8.5611 13.0461C9.14236 13.609 9.88293 13.9923 10.6892 14.1476C11.4954 14.3029 12.3311 14.2232 13.0905 13.9186C13.85 13.6139 14.4991 13.0981 14.9558 12.4361C15.4125 11.7742 15.6562 10.9961 15.6562 10.2C15.6562 9.13249 15.2183 8.10872 14.4389 7.35388C13.6595 6.59905 12.6023 6.17499 11.5 6.17499ZM11.5 13.075C10.9128 13.075 10.3389 12.9064 9.85066 12.5905C9.36245 12.2745 8.98194 11.8255 8.75725 11.3002C8.53255 10.7749 8.47376 10.1968 8.58831 9.6391C8.70286 9.0814 8.9856 8.56913 9.40079 8.16705C9.81597 7.76498 10.3449 7.49116 10.9208 7.38023C11.4967 7.2693 12.0936 7.32623 12.6361 7.54383C13.1785 7.76144 13.6422 8.12993 13.9684 8.60272C14.2946 9.07551 14.4687 9.63136 14.4687 10.2C14.4687 10.9625 14.156 11.6937 13.5992 12.2329C13.0425 12.7721 12.2874 13.075 11.5 13.075Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="td_opacity_7">
                          256, Mark Street, Newyork City
                        </span>
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
                          <defs>
                            <clipPath id="clip0">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="td_opacity_7">
                          10.00 am - 11.30 am
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="td_map">
                    <iframe
                      id="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="td_card td_style_6 td_white_bg td_radius_10">
              <img
                src={eventThumb5}
                alt="Event thumbnail"
                className="td_radius_10 td_mb_20 w-100"
              />
              <h3 className="td_fs_20 td_semibold td_mb_10">Event Info</h3>
              <p className="td_mb_10 td_fs_18 td_mb_20">
                Eed a little help from our friends from time to time. Although
                we offer the one-stop
              </p>
              <div className="td_mb_30">
                <ul className="td_card_list td_mp_0 td_fs_18 td_semibold">
                  <li>
                    <span className="td_heading_color">Cost:</span>
                    <span className="td_accent_color">$260.00</span>
                  </li>
                  <li>
                    <span className="td_heading_color">Total Slots:</span>
                    <span className="td_accent_color">250</span>
                  </li>
                  <li>
                    <span className="td_heading_color">Booked Slots:</span>
                    <span className="td_accent_color">2</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/courses-grid-view"
                className="td_btn td_style_1 td_radius_10 td_medium w-100 td_mb_20"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Buy Now</span>
                </span>
              </Link>
              <p className="text-center td_fs_18 td_heading_color td_opacity_7 td_mb_15">
                Remaining Time For Event
              </p>

              <div className="td_countdown td_style_1">
                <Countdown
                  date={new Date("2024-12-31T23:59:59")}
                  renderer={({ days, hours, minutes, seconds, completed }) => (
                    <>
                      <div className="td_countdown_box" title="Days">
                        <span className="td_count_days">{days}</span>Days
                      </div>
                      <div className="td_countdown_box" title="Hour">
                        <span className="td_count_hours">{hours}</span>Hours
                      </div>
                      <div className="td_countdown_box" title="Minute">
                        <span className="td_count_minutes">{minutes}</span>Min
                      </div>
                      <div className="td_countdown_box" title="Second">
                        <span className="td_count_seconds">{seconds}</span>Sec
                      </div>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
