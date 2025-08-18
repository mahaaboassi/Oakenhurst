import React from "react";
import { SlickSlider } from "../slick_slider/SlickSlider";

import brand1 from "../../assets/img/home_7/brand_1.svg";
import brand2 from "../../assets/img/home_7/brand_2.svg";
import brand3 from "../../assets/img/home_7/brand_3.svg";
import brand4 from "../../assets/img/home_7/brand_4.svg";
import brand5 from "../../assets/img/home_7/brand_5.svg";
import brand6 from "../../assets/img/home_7/brand_6.svg";

export const BrandTwo = () => {
  const settings = {
    autoplay: false,
    loop: true,
    speed: 800,
    arrows: false,
    slidesToShow: 6,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  const brandImages = [
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
    { src: brand6, alt: "Brand 6" },
  ];

  return (
    <div
      className="container wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.3s"
    >
      <div className="td_slider td_style_1 td_slider_gap_24">
        <div className="td_slider_container">
          <div className="td_slider_wrapper">
            <SlickSlider {...settings}>
              {brandImages.map((brand, index) => (
                <div className="td_slide" key={index}>
                  <div className="td_brand td_style_1">
                    <img src={brand.src} alt={brand.alt} />
                  </div>
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </div>
  );
};
