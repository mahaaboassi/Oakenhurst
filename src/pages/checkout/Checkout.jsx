import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";

import courseThumb1 from "../../assets/img/home_1/course_thumb_1.jpg";

export const Checkout = () => {
  return (
    <Layout breadcrumbTitle={"Checkout"} breadcrumbSubtitle={"Checkout"}>
      <div className="td_height_120 td_height_lg_80" />

      <div className="container">
        <div className="row td_row_reverse_lg td_gap_y_40">
          <div className="col-xl-7 col-lg-8">
            <h3 className="td_mb_20 td_fs_24 td_semibold">
              Contact information
            </h3>
            <p className="td_fs_14 td_mb_20">
              We'll use this email to send you details and updates about your
              order.
            </p>
            <input
              type="text"
              className="td_form_field_2 td_mb_27"
              placeholder="Email address"
            />
            <h3 className="td_fs_18 td_mb_12">Billing address</h3>
            <p className="td_fs_14 td_mb_20">
              Enter the billing address that matches your payment method.
            </p>
            <div className="row td_mb_10 td_row_gap_16">
              <div className="col-md-6">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="First name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="Last name"
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="Address"
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="Country/Region"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="City"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="State"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="ZIP Code"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="td_form_field_2 td_mb_16"
                  placeholder="Phone (optional)"
                />
              </div>
            </div>
            <h3 className="td_fs_18 td_mb_14">Payment options</h3>
            <div className="td_mb_40">
              <ul className="td_payment_list td_mp_0">
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="bank"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="bank">
                      Direct bank transfer
                    </label>
                  </div>
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="check_payments"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="check_payments"
                    >
                      Check payments
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="cash_on_delivery"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="cash_on_delivery"
                    >
                      Cash on delivery
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="td_custom_checkbox_2 td_mb_20 td_heading_color">
              <input type="checkbox" />
              <span>Add a note to your order</span>
            </div>
            <p className="td_heading_color td_opacity_8 td_mb_20">
              By proceeding with your purchase you agree to our Terms and
              Conditions and Privacy Policy
            </p>
            <hr className="td_mb_25" />
            <div className="row align-items-center td_row_reverse_lg td_gap_y_20">
              <div className="col-lg-6 text-center-lg">
                <Link to="/cart" className="td_text_btn_2 td_heading_color">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M17.0004 5.24687H3.80039L7.50039 1.54688L6.50039 0.546875L0.900391 6.04688L6.50039 11.5469L7.50039 10.5469L3.80039 6.84688H17.0004V5.24687Z"
                      fill="currentColor"
                    />
                  </svg>
                  Return to Cart
                </Link>
              </div>
              <div className="col-lg-6">
                <button className="td_btn td_style_1 td_radius_30 td_medium w-100">
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Place Order</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-xl-1">
            <div className="td_order_summary_card">
              <p className="mb-0">Order summary</p>
              <div className="td_order_summary_card_info td_fs_14">
                <div className="td_order_summary_card_thumb">
                  <img src={courseThumb1} alt="Course thumbnail" />
                  <span>1</span>
                </div>
                <div>
                  <p className="td_mb_5">
                    IELTS Admission <br />
                    $99.00
                  </p>
                  <p className="mb-0">
                    printer took ar galley offer type year anddey scrambled make
                    type aewer specimen book bethas
                  </p>
                </div>
              </div>
              <ul className="td_order_summary_card_list td_mp_0">
                <li className="td_heading_color">Add a coupon</li>
                <li>
                  <span>Subtotal</span>
                  <span className="td_bold">$99.34</span>
                </li>
                <li className="td_fs_18 td_bold td_heading_color">
                  <span>Total</span>
                  <span>$99.34</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </Layout>
  );
};
