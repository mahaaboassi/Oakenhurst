import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";

import courseThumb1 from "../../assets/img/home_1/course_thumb_1.jpg";

export const Cart = () => {
  return (
    <Layout breadcrumbTitle={"Cart"} breadcrumbSubtitle={"Cart"}>
      <div className="td_height_120 td_height_lg_80" />

      <div className="container">
        <div className="td_table_1">
          <div className="table-responsive">
            <table>
              <thead>
                <tr className="td_accent_bg">
                  <th className="td_white_color td_bold">Product</th>
                  <th className="td_white_color td_bold">Unit Price</th>
                  <th className="td_white_color td_bold">Quantity</th>
                  <th className="td_white_color td_bold">Subtotal</th>
                  <th className="td_white_color td_bold">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="td_table_meta">
                      <img src={courseThumb1} alt="Course thumbnail" />
                      <span className="td_fs_18 td_semibold td_heading_color">
                        IELTS Admission Test Short Courses
                      </span>
                    </div>
                  </td>
                  <td>$33.00</td>
                  <td>
                    <div className="td_quantity">
                      <button className="td_quantity_btn" type="button">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="td_quantity_number">1</span>
                      <button className="td_quantity_btn" type="button">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>$33.00</td>
                  <td>
                    <button className="td_table_close_btn">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="td_height_60 td_height_lg_40" />
        <div className="row td_gap_y_30 td_row_gap_30">
          <div className="col-xl-4 td_gap_y_50">
            <form action="#" className="td_cupon td_mb_50">
              <input
                type="text"
                placeholder="Coupon code"
                className="td_cupon_input"
              />
              <button type="submit" className="td_cupon_btn">
                Apply
              </button>
            </form>
            <h3 className="td_fs_16">Calculate Shipping</h3>
            <form action="#">
              <input
                type="text"
                className="td_form_field_2 td_mb_16"
                placeholder="United States (US)"
              />
              <input
                type="text"
                className="td_form_field_2 td_mb_16"
                placeholder="California"
              />
              <input
                type="text"
                className="td_form_field_2 td_mb_16"
                placeholder="City"
              />
              <input
                type="text"
                className="td_form_field_2 td_mb_30"
                placeholder="Postcode / ZIP"
              />
              <button className="td_btn td_style_1 td_radius_10 td_medium">
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Update</span>
                </span>
              </button>
            </form>
          </div>
          <div className="col-xl-4">
            <div className="td_total_card">
              <h3 className="td_fs_16 td_mb_2">Cart Totals</h3>
              <div className="td_mb_14">
                <ul className="td_total_card_list td_mp_0 td_heading_color">
                  <li>
                    <span>Subtotal</span>
                    <span className="td_bold">$90.00</span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shipping"
                          id="flat_rate"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="flat_rate">
                          Flat rate: <span className="td_bold">$2.00</span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="shipping"
                          id="free_shipping"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="free_shipping"
                        >
                          Free shipping
                        </label>
                      </div>
                      <div className="td_fs_18">
                        Shipping to <span className="td_bold">CA.</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span>Total</span>
                    <span className="td_bold td_fs_20">$92.00</span>
                  </li>
                </ul>
              </div>
              <button className="td_btn td_style_1 td_radius_10 td_medium w-100">
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Proceed to checkout</span>
                </span>
              </button>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="td_btns_group">
              <Link
                to="/courses-grid-view"
                className="td_btn td_style_1 td_type_3 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_accent_color">
                  <span>Continue Shopping </span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0.529297 5.35156H10.5293M10.5293 5.35156L6.0293 0.851562M10.5293 5.35156L6.0293 9.85156"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <button className="td_btn td_style_1 td_radius_10 td_medium">
                <span className="td_btn_in td_white_color td_accent_bg">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.669922 7.65625C0.669922 4.34254 3.35621 1.65625 6.66992 1.65625C8.55476 1.65625 10.2366 2.52536 11.3366 3.88469"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6706 1.65625V4.32292H9.00391"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.6706 7.65625C12.6706 10.9699 9.98427 13.6562 6.67058 13.6562C4.78574 13.6562 3.10388 12.7871 2.00391 11.4278"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66992 13.6511V10.9844H4.33659"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Update Cart</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
};
