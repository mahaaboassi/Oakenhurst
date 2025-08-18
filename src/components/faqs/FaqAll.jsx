import React from "react";
import { Link } from "react-router-dom";
import { useAccordion } from "../../lib/hooks/useAccordion";

import faqBg1 from "../../assets/img/others/faq_bg_1.jpg";
import faqBg2 from "../../assets/img/others/faq_bg_2.jpg";

export const FaqAll = () => {
  useAccordion();

  return (
    <>
      <div className="td_height_120 td_height_lg_80" />

      <div className="td_faq_1 td_style_1 td_type_1">
        <div className="td_faq_1_left">
          <div
            className="td_faq_1_img td_bg_filed"
            style={{ backgroundImage: `url(${faqBg1})` }}
          />
        </div>
        <div className="td_faq_1_right">
          <div className="td_section_heading td_style_1">
            <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
              Faqs 01
            </p>
          </div>
          <div className="td_accordians td_style_1 td_type_2 td_mb_40">
            <div className="td_accordian">
              <div className="td_accordian_head">
                <h2 className="td_accordian_title td_fs_24">
                  How this Educve works?
                </h2>
                <span className="td_accordian_toggle"></span>
              </div>
              <div className="td_accordian_body td_fs_18">
                <p>
                  We want every employee and trade partner to feel that they are
                  part of a common good and cohesive team. We help our teams
                  form stronger relationships with trade partners by emphasizing
                  people.
                </p>
              </div>
            </div>

            <div className="td_accordian active">
              <div className="td_accordian_head">
                <h2 className="td_accordian_title td_fs_24">
                  How can i make Cancel here?
                </h2>
                <span className="td_accordian_toggle"></span>
              </div>
              <div className="td_accordian_body td_fs_18">
                <p>
                  We want every employee and trade partner to feel that they are
                  part of a common good and cohesive team. We help our teams
                  form stronger relationships with trade partners by emphasizing
                  people.
                </p>
              </div>
            </div>

            <div className="td_accordian">
              <div className="td_accordian_head">
                <h2 className="td_accordian_title td_fs_24">
                  How to get an quote?
                </h2>
                <span className="td_accordian_toggle"></span>
              </div>
              <div className="td_accordian_body td_fs_18">
                <p>
                  We want every employee and trade partner to feel that they are
                  part of a common good and cohesive team. We help our teams
                  form stronger relationships with trade partners by emphasizing
                  people.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="td_btn td_style_2 td_type_2 td_heading_color td_medium"
          >
            Get In Touch
            <i>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.1575 4.34302L3.84375 15.6567" />
                <path d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314" />
              </svg>
            </i>
          </Link>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />

      <div className="td_faq_1 td_style_1">
        <div className="td_faq_1_right">
          <div className="td_section_heading td_style_1">
            <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
              Faqs 02
            </p>
          </div>
          <div className="td_accordians td_style_1 td_type_2 td_mb_40">
            <div className="td_accordian">
              <div className="td_accordian_head">
                <h2 className="td_accordian_title td_fs_24">
                  How this Educve works?
                </h2>
                <span className="td_accordian_toggle"></span>
              </div>
              <div className="td_accordian_body td_fs_18">
                <p>
                  We want every employee and trade partner to feel that they are
                  part of a common good and cohesive team. We help our teams
                  form stronger relationships with trade partners by emphasizing
                  people.
                </p>
              </div>
            </div>

            <div className="td_accordian active">
              <div className="td_accordian_head">
                <h2 className="td_accordian_title td_fs_24">
                  How can i make Cancel here?
                </h2>
                <span className="td_accordian_toggle"></span>
              </div>
              <div className="td_accordian_body td_fs_18">
                <p>
                  We want every employee and trade partner to feel that they are
                  part of a common good and cohesive team. We help our teams
                  form stronger relationships with trade partners by emphasizing
                  people.
                </p>
              </div>
            </div>

            <div className="td_accordian">
              <div className="td_accordian_head">
                <h2 className="td_accordian_title td_fs_24">
                  How to get an quote?
                </h2>
                <span className="td_accordian_toggle"></span>
              </div>
              <div className="td_accordian_body td_fs_18">
                <p>
                  We want every employee and trade partner to feel that they are
                  part of a common good and cohesive team. We help our teams
                  form stronger relationships with trade partners by emphasizing
                  people.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="td_btn td_style_2 td_type_2 td_heading_color td_medium"
          >
            Get In Touch
            <i>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.1575 4.34302L3.84375 15.6567" />
                <path d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314" />
              </svg>
            </i>
          </Link>
        </div>
        <div className="td_faq_1_left">
          <div
            className="td_faq_1_img td_bg_filed"
            style={{ backgroundImage: `url(${faqBg2})` }}
          />
        </div>
      </div>
    </>
  );
};
