import $ from "jquery";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useStickyHeader = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      function stickyHeader() {
        var $window = $(window);
        var lastScrollTop = 0;
        var $header = $(".td_sticky_header");
        var headerHeight = $header.outerHeight() + 20;

        $window.scroll(function () {
          var windowTop = $window.scrollTop();

          if (windowTop >= headerHeight) {
            $header.addClass("td_gescout_sticky");
          } else {
            $header.removeClass("td_gescout_sticky");
            $header.removeClass("td_gescout_show");
          }

          if ($header.hasClass("td_gescout_sticky")) {
            if (windowTop < lastScrollTop) {
              $header.addClass("td_gescout_show");
            } else {
              $header.removeClass("td_gescout_show");
            }
          }
          lastScrollTop = windowTop;
        });
      }
      stickyHeader();
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);
};
