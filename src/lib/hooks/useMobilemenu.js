import $ from "jquery";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useMobilemenu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      $(".td_nav").append('<span className ="td_menu_toggle"><span></span></span>');
      $(".menu-item-has-children").append(
        '<span className ="td_munu_dropdown_toggle"><span></span></span>'
      );
      $(".td_menu_toggle").on("click", function () {
        $(this)
          .toggleClass("td_toggle_active")
          .siblings(".td_nav_list_wrap")
          .toggleClass("td_active");
      });
      $(".td_munu_dropdown_toggle").on("click", function () {
        $(this).toggleClass("active").siblings("ul").slideToggle();
        $(this).parent().toggleClass("active");
      });

      $(".td_header_dropdown_btn").on("click", function () {
        $(this).toggleClass("active");
      });
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);
};
