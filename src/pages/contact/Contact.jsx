import React from "react";
import { Layout } from "../../layouts/Layout";

import contactImg from "../../assets/img/others/contact_img.jpg";

export const Contact = () => {
  return (
    <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-7">
                  <img src={contactImg} alt="Contact" className="w-100" />
                </div>
                <div className="col-xl-4 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Our Office Address
                      </h2>
                    </div>
                    <div className="td_mb_40">
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        USA Campus
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </p>
                    </div>
                    <div>
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        Monica Campus
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_120 td_height_lg_80" />

        <div className="td_map">
          <iframe
            id="map"
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
            allowFullScreen
          />
        </div>
      </section>
    </Layout>
  );
};
