import React from "react";
import { Link } from "react-router-dom";
import { useHobble } from "../../lib/hooks/useHobble";

import ctaImg from "../../assets/img/home_3/cta_img.png";

export const AppOne = () => {
  useHobble();

  return (
    <section className="td_heading_bg td_center td_cta td_style_1 td_hobble">
      <div className="container">
        <div
          className="td_cta_text wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.4s"
        >
          <div className="td_section_heading td_style_1 td_mb_40">
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_white_color td_opacity_7">
              AVAILABLE ON ANDROID & APPS STORE
            </p>
            <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
              {`Let’s Find`} <br />
              The Right Courses For you
            </h2>
          </div>
          <div className="td_btns_group">
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_type_3 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_white_color">
                <svg
                  width="23"
                  height="25"
                  viewBox="0 0 23 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.27919 1.60156C0.99445 1.97711 0.835938 2.43909 0.835938 2.93347V22.5016C0.835938 22.9608 0.973168 23.3922 1.22103 23.7526L11.8891 12.6469L1.27919 1.60156Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.8722 11.6309L16.3331 8.02815L4.16781 1.01832C3.6398 0.714004 3.034 0.64186 2.46875 0.800429L12.8722 11.6309Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.868 13.6641L2.35938 24.6039C2.58595 24.6799 2.82042 24.7181 3.05507 24.7181C3.43576 24.7181 3.81663 24.6182 4.16356 24.4182L16.4164 17.3579L12.868 13.6641Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.1419 10.7995L17.5853 8.75L13.8438 12.6448L17.6726 16.631L21.1419 14.6319C21.8362 14.232 22.2506 13.5155 22.2506 12.7157C22.2506 11.9157 21.8362 11.1994 21.1419 10.7995Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Google play</span>
              </span>
            </Link>
            <Link
              to="/courses-grid-view"
              className="td_btn td_style_1 td_type_3 td_radius_30 td_medium"
            >
              <span className="td_btn_in td_white_color">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6212 0.71875C14.677 0.71875 14.7329 0.71875 14.7919 0.71875C14.9289 2.41128 14.2829 3.67594 13.4977 4.59176C12.7273 5.50126 11.6724 6.38335 9.96617 6.24951C9.85235 4.58122 10.4994 3.41036 11.2835 2.49664C12.0107 1.64511 13.3439 0.887371 14.6212 0.71875Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.7851 18.3371C19.7851 18.3539 19.7851 18.3687 19.7851 18.3845C19.3056 19.8368 18.6216 21.0814 17.7869 22.2364C17.025 23.2851 16.0912 24.6962 14.424 24.6962C12.9833 24.6962 12.0264 23.7698 10.5499 23.7445C8.98808 23.7193 8.12917 24.5191 6.70116 24.7204C6.53781 24.7204 6.37446 24.7204 6.21427 24.7204C5.16566 24.5687 4.3194 23.7382 3.70288 22.99C1.88493 20.7789 0.480112 17.9229 0.21875 14.2681C0.21875 13.9097 0.21875 13.5525 0.21875 13.1942C0.329407 10.5784 1.60039 8.4517 3.28976 7.421C4.18134 6.87298 5.407 6.40612 6.77177 6.61478C7.35668 6.70542 7.95423 6.90565 8.478 7.10378C8.97438 7.29454 9.59512 7.63283 10.1832 7.61492C10.5815 7.60332 10.9778 7.39571 11.3793 7.24922C12.5555 6.82451 13.7084 6.33761 15.2281 6.56631C17.0545 6.84242 18.3507 7.65391 19.1517 8.90592C17.6067 9.88919 16.3853 11.3709 16.5939 13.9013C16.7794 16.1998 18.1157 17.5446 19.7851 18.3371Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Apple Store</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="td_cta_thumb wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        <img src={ctaImg} alt="CTA" />
        <div className="td_cta_thumb_shape" />
      </div>
      <div className="td_cta_shape_1 td_hover_layer_3" />
      <div className="td_cta_shape_2">
        <svg
          width="80"
          height="75"
          viewBox="0 0 80 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M79.5044 30.5007C77.861 24.1313 74.6722 18.2654 70.2204 13.4227C65.7685 8.57998 60.1911 4.90994 53.9821 2.73765C47.7731 0.565352 41.1242 -0.0421462 34.6243 0.968964C28.1244 1.98007 21.9742 4.57858 16.7185 8.53432C11.4628 12.4901 7.26371 17.6809 4.49329 23.6471C1.72286 29.6133 0.466584 36.1706 0.835726 42.7383C1.20487 49.306 3.18804 55.6813 6.60957 61.2994C10.0311 66.9176 14.7854 71.6052 20.4513 74.9471L40.7727 40.4936L79.5044 30.5007Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="td_cta_shape_3 td_hover_layer_5">
        <svg
          width="74"
          height="81"
          viewBox="0 0 74 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M0.194636 62.4504C4.26063 68.4736 9.8907 73.2753 16.4801 76.3398C23.0695 79.4043 30.3693 80.6158 37.5954 79.8441C44.8214 79.0724 51.7008 76.3467 57.4944 71.9597C63.2881 67.5728 67.7771 61.6904 70.4794 54.9444C73.1818 48.1983 73.9952 40.8436 72.8324 33.67C71.6696 26.4965 68.5746 19.7753 63.8796 14.2283C59.1847 8.68129 53.0673 4.51814 46.1845 2.18597C39.3017 -0.146194 31.9137 -0.559235 24.8138 0.991205L27.6734 14.0858C32.3942 13.0549 37.3067 13.3295 41.8832 14.8802C46.4597 16.4309 50.5273 19.1991 53.649 22.8874C56.7708 26.5757 58.8288 31.0448 59.6019 35.8146C60.3751 40.5844 59.8342 45.4748 58.0374 49.9604C56.2406 54.4459 53.2557 58.3573 49.4034 61.2742C45.5511 64.1912 40.9769 66.0036 36.1721 66.5167C31.3673 67.0298 26.5136 66.2243 22.1321 64.1866C17.7507 62.149 14.0071 58.9562 11.3036 54.9512L0.194636 62.4504Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
