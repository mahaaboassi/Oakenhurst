import $ from "jquery";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useRatings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      function review() {
        $(".td_rating").each(function () {
          var review = $(this).data("rating");
          var reviewVal = review * 20 + "%";
          $(this).find(".td_rating_percentage").css("width", reviewVal);
        });
      }
      review();
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);
};
