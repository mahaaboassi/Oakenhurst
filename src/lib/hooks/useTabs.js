import $ from "jquery";
import { useEffect } from "react";

export const useTabs = () => {
  useEffect(() => {
    try {
      $(".td_tabs .td_tab_links a").on("click", function (e) {
        var currentAttrValue = $(this).attr("href");
        $(".td_tabs " + currentAttrValue)
          .fadeIn(400)
          .siblings()
          .hide();
        $(this)
          .parents("li")
          .addClass("active")
          .siblings()
          .removeClass("active");
        e.preventDefault();
      });
    } catch (error) {
      //
    }
  }, []);
};
