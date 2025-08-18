import React from "react";
import { Link } from "react-router-dom";

export const CategoryFive = () => {
  const features = [
    {
      title: "Meal\nPlanning",
      delay: "0.2s",
    },
    {
      title: "Reduce Food Waste",
      delay: "0.3s",
    },
    {
      title: "Knife On\nSkills",
      delay: "0.4s",
    },
    {
      title: "Party Food Planning",
      delay: "0.5s",
    },
  ];

  return (
    <section>
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Welcome to educve
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Our Best Features</h2>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="col-xl-3 col-md-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={feature.delay}
            >
              <div className="td_iconbox td_style_8 td_radius_10">
                <div className="td_iconbox_in">
                  <h2 className="td_iconbox_title td_fs_32 td_semibold td_mb_30">
                    {feature.title}
                  </h2>
                  <Link
                    to="/courses-grid-view"
                    className="td_btn td_style_3 td_heading_color td_medium td_fs_18"
                  >
                    <span>Read More</span>
                    <i>
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          d="M17 6L1 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
                  </Link>
                </div>
                <div className="td_icon_shape td_accent_color">
                  <svg
                    width="175"
                    height="171"
                    viewBox="0 0 175 171"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M169.595 85.5029C170.937 131.354 135.064 168.504 89.495 168.504C43.926 168.504 5.87674 131.354 4.53404 85.5029C3.19134 39.6513 39.0648 2.50177 84.6338 2.50177C130.203 2.50177 168.252 39.6513 169.595 85.5029Z"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      d="M161.102 86.4702C162.273 126.454 130.991 158.846 91.2576 158.846C51.5242 158.846 18.3449 126.454 17.1741 86.4702C16.0032 46.4868 47.2853 14.0942 87.0187 14.0942C126.752 14.0942 159.931 46.4868 161.102 86.4702Z"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      d="M150.461 85.3517C151.46 119.467 124.77 147.103 90.8717 147.103C56.9739 147.103 28.6647 119.467 27.6657 85.3517C26.6666 51.2363 53.3573 23.6007 87.2551 23.6007C121.153 23.6007 149.462 51.2363 150.461 85.3517Z"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      d="M139.821 84.2332C140.648 112.481 118.549 135.359 90.4869 135.359C62.4247 135.359 38.9854 112.481 38.1582 84.2332C37.3311 55.9859 59.4303 33.1072 87.4925 33.1072C115.555 33.1072 138.994 55.9859 139.821 84.2332Z"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
