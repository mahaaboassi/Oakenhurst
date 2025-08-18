import $ from "jquery";
import { useEffect } from "react";

function accordian() {
  $(".td_accordian").children(".td_accordian_body").hide();
  $(".td_accordian.active").children(".td_accordian_body").show();
  $(".td_accordian_head").on("click", function () {
    $(this)
      .parent(".td_accordian")
      .siblings()
      .children(".td_accordian_body")
      .slideUp(250);
    $(this).siblings().slideDown(250);
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".td_accordian_body")
      .slideUp(250);
    /* Accordian Active Class */
    $(this).parents(".td_accordian").addClass("active");
    $(this).parent(".td_accordian").siblings().removeClass("active");
  });
}

export const useAccordion = () => {
  useEffect(() => {
    try {
      accordian();
    } catch (error) {
      //
    }
  }, []);
};
