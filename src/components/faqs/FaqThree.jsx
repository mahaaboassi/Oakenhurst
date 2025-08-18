import React from "react";
import { Link } from "react-router-dom";
import { useAccordion } from "../../lib/hooks/useAccordion";

export const FaqThree = () => {
  useAccordion();

  return (
    <section className="td_gray_bg_5">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
            Faqs
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            You ask Question , We give Answer
          </h2>
          <p className="td_section_subtitle mb-0">
            Here are Response to some frequently-asked questions
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        <div
          className="td_accordians td_style_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="td_accordian active">
            <div className="td_accordian_head">
              <h2 className="td_accordian_title td_fs_36 td_normal">
                Do the classes fit my Schedule?
              </h2>
              <span className="td_accordian_toggle">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                    stroke="#00001B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="td_accordian_body td_fs_18">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesent voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaeci cupiditate non
                provident, similique sunt in culpa qui. At vero eos et accusamus
                et iusto odio dignissimos ducimus qui blanditiis praesent
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>

          <div className="td_accordian">
            <div className="td_accordian_head">
              <h2 className="td_accordian_title td_fs_36 td_normal">
                Are there pre-recorded lessons?
              </h2>
              <span className="td_accordian_toggle">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                    stroke="#00001B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="td_accordian_body td_fs_18">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesent voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaeci cupiditate non
                provident, similique sunt in culpa qui. At vero eos et accusamus
                et iusto odio dignissimos ducimus qui blanditiis praesent
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>

          <div className="td_accordian">
            <div className="td_accordian_head">
              <h2 className="td_accordian_title td_fs_36 td_normal">
                Where is your Academy Located?
              </h2>
              <span className="td_accordian_toggle">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                    stroke="#00001B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="td_accordian_body td_fs_18">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesent voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaeci cupiditate non
                provident, similique sunt in culpa qui. At vero eos et accusamus
                et iusto odio dignissimos ducimus qui blanditiis praesent
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>

          <div className="td_accordian">
            <div className="td_accordian_head">
              <h2 className="td_accordian_title td_fs_36 td_normal">
                How can Do I start?
              </h2>
              <span className="td_accordian_toggle">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                    stroke="#00001B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="td_accordian_body td_fs_18">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesent voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaeci cupiditate non
                provident, similique sunt in culpa qui. At vero eos et accusamus
                et iusto odio dignissimos ducimus qui blanditiis praesent
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="td_height_50 td_height_lg_40" />
        <div
          className="text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.35s"
        >
          <Link
            to="/contact"
            className="td_btn td_style_1 td_medium td_with_shadow_2"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>Book Free Evaluations</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
